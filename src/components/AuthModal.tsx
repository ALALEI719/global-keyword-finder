"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { X, Loader2 } from "lucide-react"
import { supabase, ensureUserRow } from "@/lib/supabase"

interface Props { onClose: () => void }

export default function AuthModal({ onClose }: Props) {
  const t = useTranslations("Auth")
  const [mode, setMode] = useState<"login" | "register">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(""); setSuccess(""); setLoading(true)
    try {
      if (mode === "register") {
        const { data, error: err } = await supabase.auth.signUp({ email, password })
        if (err) throw err
        if (data.user) await ensureUserRow(data.user.id, email)
        setSuccess(t("successRegister"))
        setMode("login")
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password })
        if (err) throw err
        onClose()
        window.location.reload()
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-300">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-white mb-1">
          {mode === "login" ? t("welcomeBack") : t("createAccount")}
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          {mode === "login" ? t("loginSub") : t("registerSub")}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email" required placeholder={t("email")}
            value={email} onChange={e => setEmail(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="password" required placeholder={t("password")} minLength={6}
            value={password} onChange={e => setPassword(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-emerald-400">{success}</p>}
          <button
            type="submit" disabled={loading}
            className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-60"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === "login" ? t("logIn") : t("createAccountBtn")}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-5">
          {mode === "login" ? t("noAccount") : t("hasAccount")}
          <button type="button" onClick={() => { setMode(mode === "login" ? "register" : "login"); setError("") }}
            className="text-indigo-400 hover:underline">
            {mode === "login" ? t("registerLink") : t("loginLink")}
          </button>
        </p>
      </div>
    </div>
  )
}
