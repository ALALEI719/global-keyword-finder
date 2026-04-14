"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import NavBar from "@/components/NavBar"
import ResultsTable from "@/components/ResultsTable"
import AuthModal from "@/components/AuthModal"
import { supabase, getUserCredits, deductCredit } from "@/lib/supabase"
import { COUNTRY_OPTIONS, SOURCE_LANG_OPTIONS } from "@/types"
import type { KeywordResult } from "@/types"
import type { User as SupabaseUser } from "@supabase/supabase-js"
import SeoContentSection from "@/components/SeoContentSection"
import HowToUseSection from "@/components/HowToUseSection"

const RESULT_LIMIT = 30

export default function HomePageClient() {
  const t = useTranslations("Home")
  const tc = useTranslations("countries")
  const tsl = useTranslations("sourceLangs")

  const [sbUser, setSbUser] = useState<SupabaseUser | null>(null)
  const [credits, setCredits] = useState(0)
  const [showAuth, setShowAuth] = useState(false)

  const [keyword, setKeyword] = useState("")
  const [sourceLang, setSourceLang] = useState("English")
  const [targetCountry, setTargetCountry] = useState("Germany / Deutschland")

  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<KeywordResult[]>([])
  const [translatedKw, setTranslatedKw] = useState("")
  const [error, setError] = useState("")
  const [guestUsed, setGuestUsed] = useState(false)

  const supabaseConfigured = !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http") &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  useEffect(() => {
    if (!supabaseConfigured) return
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSbUser(session?.user ?? null)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setSbUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [supabaseConfigured])

  const loadUserData = useCallback(async () => {
    if (!sbUser || !supabaseConfigured) return
    const c = await getUserCredits(sbUser.id)
    setCredits(c)
  }, [sbUser, supabaseConfigured])

  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  async function handleDiscover(e: React.FormEvent) {
    e.preventDefault()
    if (!keyword.trim()) return
    setError("")

    if (!sbUser) {
      if (guestUsed) {
        setShowAuth(true)
        return
      }
      setGuestUsed(true)
    }

    if (sbUser) {
      const ok = await deductCredit(sbUser.id)
      if (!ok) {
        setError(t("errorCredits"))
        return
      }
      setCredits(c => Math.max(0, c - 1))
    }

    setLoading(true)
    setResults([])
    setTranslatedKw("")

    try {
      const res = await fetch("/api/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: keyword.trim(),
          sourceLang: SOURCE_LANG_OPTIONS[sourceLang],
          targetCountry: COUNTRY_OPTIONS[targetCountry],
          resultLimit: RESULT_LIMIT,
        }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
        return
      }
      setResults(data.results || [])
      setTranslatedKw(data.translatedKeyword || "")
    } catch {
      setError(t("errorGeneric"))
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setSbUser(null)
    setCredits(0)
  }

  return (
    <div className="min-h-screen bg-[#020817]">
      <NavBar userEmail={sbUser?.email} onLogout={handleLogout} />

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          {t("titleBefore")}{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            {t("titleHighlight")}
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          {t("subtitleFind")}{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            {t("subtitleRight")}
          </span>{" "}
          {t("subtitleAnd")}{" "}
          <span className="font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            {t("subtitleInfinite")}
          </span>{" "}
          {t("subtitleSuffix")}
        </p>

        <form onSubmit={handleDiscover} className="w-full">
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder={t("placeholder")}
              className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {t("discover")}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs text-slate-500 font-medium">{t("sourceLang")}</label>
              <select
                value={sourceLang}
                onChange={e => setSourceLang(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                {Object.keys(SOURCE_LANG_OPTIONS).map(l => (
                  <option key={l} value={l}>
                    {tsl(l)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs text-slate-500 font-medium">{t("targetCountry")}</label>
              <select
                value={targetCountry}
                onChange={e => setTargetCountry(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                {Object.keys(COUNTRY_OPTIONS).map(c => (
                  <option key={c} value={c}>
                    {tc(c)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <p className="text-xs text-slate-600 mt-3">
          {sbUser
            ? t("hintLoggedIn", { email: sbUser.email ?? "", credits })
            : guestUsed
              ? t("hintGuestUsed")
              : t("hintGuest")}
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-400">
            {error}
          </div>
        )}

        {guestUsed && !sbUser && results.length > 0 && (
          <div className="mt-4 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300">
            {t("gateTitle")}{" "}
            <button type="button" onClick={() => setShowAuth(true)} className="underline font-semibold">
              {t("gateCta")}
            </button>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-3 mt-12 text-slate-400">
            <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
            <span className="text-sm">{t("loading")}</span>
          </div>
        )}
        <ResultsTable results={results} sourceKw={keyword} translatedKw={translatedKw} />
      </section>

      <HowToUseSection />
      <SeoContentSection />

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  )
}
