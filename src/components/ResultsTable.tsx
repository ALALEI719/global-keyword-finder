"use client"

import { useTranslations } from "next-intl"
import type { KeywordResult } from "@/types"

interface Props {
  results: KeywordResult[]
  sourceKw: string
  translatedKw: string
}

function fmt(n: number | null) {
  if (n === null) return "—"
  return n.toLocaleString()
}

function kdColor(kd: number | null) {
  if (kd === null) return "text-slate-500"
  if (kd <= 10) return "text-emerald-400"
  if (kd <= 30) return "text-yellow-400"
  if (kd <= 60) return "text-orange-400"
  return "text-red-400"
}

function intentBadge(intent: string) {
  const map: Record<string, string> = {
    Informational: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    Commercial: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Transactional: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Navigational: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  }
  return map[intent] || "bg-slate-500/15 text-slate-400 border-slate-500/30"
}

export default function ResultsTable({ results, sourceKw, translatedKw }: Props) {
  const t = useTranslations("Results")
  const tKd = useTranslations("Results.kdLevels")
  const tIntent = useTranslations("Results.intents")

  if (!results.length) return null

  const cols = ["num", "keyword", "meaning", "volume", "kd", "cpc", "intent"] as const

  const kdKeys = ["Easy", "Medium", "Hard", "Very Hard"] as const
  function kdLabel(level: string) {
    if (level === "—") return ""
    if (!kdKeys.includes(level as (typeof kdKeys)[number])) return level
    return tKd(level as (typeof kdKeys)[number])
  }

  const intentKeys = ["Informational", "Commercial", "Transactional", "Navigational", "Mixed"] as const
  function intentLabel(intent: string) {
    if (!intentKeys.includes(intent as (typeof intentKeys)[number])) return intent
    return tIntent(intent as (typeof intentKeys)[number])
  }

  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-400">
          {t("found", { count: results.length, source: sourceKw })}
          {translatedKw && translatedKw !== sourceKw && (
            <>
              {" "}
              {t("arrow")}{" "}
              <span className="text-violet-300 font-mono">&quot;{translatedKw}&quot;</span>
            </>
          )}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60">
              {cols.map(h => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {t(`cols.${h}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={r.keyword} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <td className="px-4 py-3 text-slate-600 text-xs">{i + 1}</td>
                <td className="px-4 py-3 font-mono text-slate-100 font-medium">{r.keyword}</td>
                <td className="px-4 py-3 text-slate-400 max-w-[200px] truncate">{r.meaning}</td>
                <td className="px-4 py-3 text-slate-300 font-medium">{fmt(r.volume)}</td>
                <td className={`px-4 py-3 font-bold ${kdColor(r.kd)}`}>
                  {r.kd !== null ? r.kd : "—"}
                  <span className="text-xs font-normal text-slate-600 ml-1">{kdLabel(r.kdLevel)}</span>
                </td>
                <td className="px-4 py-3 text-slate-400">{r.cpc !== null ? `$${r.cpc.toFixed(2)}` : "—"}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${intentBadge(r.intent)}`}>
                    {intentLabel(r.intent)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
