"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, Loader2, Eye, EyeOff } from "lucide-react"
import NavBar from "@/components/NavBar"
import ResultsTable from "@/components/ResultsTable"
import AuthModal from "@/components/AuthModal"
import { supabase, getUserApiKey, saveUserApiKey, getUserCredits, deductCredit } from "@/lib/supabase"
import { COUNTRY_OPTIONS, SOURCE_LANG_OPTIONS } from "@/types"
import type { KeywordResult } from "@/types"
import type { User as SupabaseUser } from "@supabase/supabase-js"

// ── SEO sections (inline to avoid extra imports) ─────────────────────────────
import SeoContentSection from "@/components/SeoContentSection"
import HowToUseSection from "@/components/HowToUseSection"

const PLATFORM_KEY_HINT = "Platform key is used by default (30 keywords free). Enter your own for unlimited."

export default function HomePage() {
  // Auth state
  const [sbUser, setSbUser] = useState<SupabaseUser | null>(null)
  const [credits, setCredits] = useState(0)
  const [userApiKey, setUserApiKey] = useState("")
  const [showAuth, setShowAuth] = useState(false)

  // Form state
  const [keyword, setKeyword] = useState("")
  const [sourceLang, setSourceLang] = useState("English")
  const [targetCountry, setTargetCountry] = useState("Germany / Deutschland")
  const [apiToken, setApiToken] = useState("")
  const [showToken, setShowToken] = useState(false)
  const [resultLimit, setResultLimit] = useState(30)

  // Query state
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<KeywordResult[]>([])
  const [translatedKw, setTranslatedKw] = useState("")
  const [error, setError] = useState("")
  const [guestUsed, setGuestUsed] = useState(false)

  const supabaseConfigured = !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http") &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  // Load session
  useEffect(() => {
    if (!supabaseConfigured) return
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSbUser(session?.user ?? null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setSbUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  // Load user credits + api key
  const loadUserData = useCallback(async () => {
    if (!sbUser || !supabaseConfigured) return
    const [c, k] = await Promise.all([getUserCredits(sbUser.id), getUserApiKey(sbUser.id)])
    setCredits(c)
    setUserApiKey(k)
    if (k) setApiToken(k)
  }, [sbUser])

  useEffect(() => { loadUserData() }, [loadUserData])

  const hasOwnApi = apiToken.trim().length > 0
  const effectiveLimit = hasOwnApi ? resultLimit : 30

  async function handleDiscover(e: React.FormEvent) {
    e.preventDefault()
    if (!keyword.trim()) return
    setError("")

    // Guest gate
    if (!sbUser && !hasOwnApi) {
      if (guestUsed) {
        setShowAuth(true)
        return
      }
      setGuestUsed(true)
    }

    // Registered user credit check
    if (sbUser && !hasOwnApi) {
      const ok = await deductCredit(sbUser.id)
      if (!ok) {
        setError("Credits exhausted. Please contact support to top up.")
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
          apiToken: apiToken.trim() || undefined,
          resultLimit: effectiveLimit,
        }),
      })
      const data = await res.json()
      if (data.error) { setError(data.error); return }
      setResults(data.results || [])
      setTranslatedKw(data.translatedKeyword || "")

      // Save api key if user is logged in and entered one
      if (sbUser && apiToken.trim() && apiToken.trim() !== userApiKey) {
        await saveUserApiKey(sbUser.id, apiToken.trim())
        setUserApiKey(apiToken.trim())
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setSbUser(null)
    setCredits(0)
    setUserApiKey("")
  }

  return (
    <div className="min-h-screen bg-[#020817]">
      <NavBar userEmail={sbUser?.email} onLogout={handleLogout} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Multi-Language{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Keyword Finder
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Find the{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            right keywords
          </span>{" "}
          and{" "}
          <span className="font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            infinite opportunities
          </span>{" "}
          in any language.
        </p>

        {/* Search form */}
        <form onSubmit={handleDiscover} className="w-full">
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="e.g.: bluetooth headphones, Robot Lawn Mower…"
              className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
            />
            <button
              type="submit" disabled={loading}
              className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Discover Keywords
            </button>
          </div>

          {/* Params row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs text-slate-500 font-medium">Source Language</label>
              <select
                value={sourceLang} onChange={e => setSourceLang(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                {Object.keys(SOURCE_LANG_OPTIONS).map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs text-slate-500 font-medium">Target Country</label>
              <select
                value={targetCountry} onChange={e => setTargetCountry(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                {Object.keys(COUNTRY_OPTIONS).map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs text-slate-500 font-medium">Ahrefs API Token</label>
              <div className="relative">
                <input
                  type={showToken ? "text" : "password"}
                  value={apiToken}
                  onChange={e => setApiToken(e.target.value)}
                  placeholder="Optional"
                  title={PLATFORM_KEY_HINT}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 pr-9 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button type="button" onClick={() => setShowToken(v => !v)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  {showToken ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs text-slate-500 font-medium">Max Keywords</label>
              <input
                type="number"
                value={hasOwnApi ? resultLimit : 30}
                onChange={e => hasOwnApi && setResultLimit(Number(e.target.value))}
                min={10} max={hasOwnApi ? 500 : 30} step={10}
                disabled={!hasOwnApi}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-50"
              />
            </div>
          </div>
        </form>

        {/* Status hint */}
        <p className="text-xs text-slate-600 mt-3">
          {sbUser
            ? `Logged in: ${sbUser.email} · Credits: ${credits} · Powered by Ahrefs & Google Translate`
            : guestUsed
            ? "Free trial used — register free to continue"
            : "1 free query for guests · 30 keywords · Register for more · Powered by Ahrefs & Google Translate"}
        </p>

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Guest gate after free query */}
        {guestUsed && !sbUser && results.length > 0 && (
          <div className="mt-4 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300">
            ✨ Register free to save history, get 5 credits, and unlock more queries.{" "}
            <button onClick={() => setShowAuth(true)} className="underline font-semibold">
              Register now
            </button>
          </div>
        )}

        {/* Results */}
        {loading && (
          <div className="flex items-center justify-center gap-3 mt-12 text-slate-400">
            <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
            <span className="text-sm">Analysing keywords…</span>
          </div>
        )}
        <ResultsTable results={results} sourceKw={keyword} translatedKw={translatedKw} />
      </section>

      {/* ── How to Use ───────────────────────────────────────────────────── */}
      <HowToUseSection />

      {/* ── SEO Content ──────────────────────────────────────────────────── */}
      <SeoContentSection />

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  )
}
