import { NextRequest, NextResponse } from "next/server"
import { fetchOverview, fetchRelated, fetchSuggestions } from "@/lib/ahrefs"
import { translateKeyword, batchTranslate } from "@/lib/translate"
import { filterCandidates, filterBrandKeywords, translationRelevance, difficultyLabel, intentLabel } from "@/lib/keywords"
import { COUNTRY_TO_LANG } from "@/types"
import type { KeywordResult, DiscoverRequest } from "@/types"

const PLATFORM_KEY = process.env.PLATFORM_AHREFS_KEY || "72sriOok1gJtA3BxvRca5djPL1-J6ZmEMkKb5Qru"

export async function POST(req: NextRequest) {
  const body: DiscoverRequest = await req.json()
  const { keyword, sourceLang, targetCountry, apiToken, resultLimit = 30 } = body

  if (!keyword?.trim()) {
    return NextResponse.json({ error: "Keyword is required" }, { status: 400 })
  }

  const token = (apiToken || "").trim() || PLATFORM_KEY
  const targetLang = COUNTRY_TO_LANG[targetCountry] || "en"

  // ── Step 1: Translate ────────────────────────────────────────────────────
  const translated = await translateKeyword(keyword.trim(), sourceLang, targetLang)

  // ── Step 2: Multi-strategy discovery ────────────────────────────────────
  const [sugData, ovData, relOrigData, relTransData] = await Promise.all([
    fetchSuggestions(token, translated, targetCountry, 20),
    fetchOverview(token, translated, targetCountry),
    fetchRelated(token, keyword.trim(), targetCountry, resultLimit),
    fetchRelated(token, translated, targetCountry, resultLimit),
  ])

  type RawKw = Record<string, unknown>
  const seen = new Set<string>()
  const candidates: RawKw[] = []

  function add(item: RawKw) {
    const kw = (item.keyword as string)?.trim()
    if (kw && !seen.has(kw)) { candidates.push(item); seen.add(kw) }
  }

  ;((relOrigData as RawKw)?.keywords as RawKw[] || []).forEach(k => add(k))
  ;((relTransData as RawKw)?.keywords as RawKw[] || []).forEach(k => add(k))
  const directKw = ((ovData as RawKw)?.keywords as RawKw[])?.[0]
  if (directKw) add(directKw)
  if (directKw?.parent_topic) {
    const ptData = await fetchOverview(token, directKw.parent_topic as string, targetCountry)
    const ptKw = ((ptData as RawKw)?.keywords as RawKw[])?.[0]
    if (ptKw) add(ptKw)
  }
  ;((sugData as RawKw)?.keywords as RawKw[] || []).forEach(k => add(k))

  // ── Step 3: Filter ───────────────────────────────────────────────────────
  let filtered = filterCandidates(candidates, targetLang, keyword.trim())
  filtered = filterBrandKeywords(filtered)

  // ── Step 4: Accurate data via overview batch ─────────────────────────────
  if (filtered.length) {
    const kwCsv = filtered.slice(0, resultLimit).map(c => c.keyword).join(",")
    const accData = await fetchOverview(token, kwCsv, targetCountry)
    const accMap: Record<string, RawKw> = {}
    ;((accData as RawKw)?.keywords as RawKw[] || []).forEach(k => {
      accMap[k.keyword as string] = k
    })
    filtered = filtered.map(c => {
      const acc = accMap[c.keyword as string]
      if (!acc) return c
      return { ...c, ...acc }
    })
  }

  // ── Step 5: Back-translate for relevance scoring ─────────────────────────
  const backMap = await batchTranslate(filtered.map(c => c.keyword as string), targetLang, sourceLang)
  filtered = filtered.map(c => ({
    ...c,
    _backTranslation: backMap[c.keyword as string] || "",
    _relScore: translationRelevance(backMap[c.keyword as string] || "", keyword.trim()),
  }))

  // Remove zero-relevance, sort by relevance then volume
  filtered = filtered
    .filter(c => (c._relScore as number) > 0)
    .sort((a, b) => {
      const rs = (b._relScore as number) - (a._relScore as number)
      if (rs !== 0) return rs
      return ((b.volume as number) || 0) - ((a.volume as number) || 0)
    })
    .slice(0, resultLimit)

  // ── Step 6: Shape results ────────────────────────────────────────────────
  const results: KeywordResult[] = filtered.map(c => ({
    keyword: c.keyword as string,
    meaning: (c._backTranslation as string) || "—",
    volume: (c.volume as number) ?? null,
    globalVolume: (c.global_volume as number) ?? null,
    kd: (c.difficulty as number) ?? null,
    kdLevel: difficultyLabel((c.difficulty as number) ?? null),
    cpc: (c.cpc as number) ?? null,
    trafficPotential: (c.traffic_potential as number) ?? null,
    intent: intentLabel(c.intents),
    relScore: c._relScore as number,
  }))

  return NextResponse.json({ results, translatedKeyword: translated })
}
