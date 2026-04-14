"use client"

import { useParams } from "next/navigation"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Languages } from "lucide-react"

export default function LanguageSwitcher() {
  const t = useTranslations("LangNames")
  const tNav = useTranslations("Nav")
  const locale = useParams().locale as string
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex items-center gap-1.5">
      <Languages className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden />
      <label htmlFor="site-lang" className="sr-only">
        {tNav("language")}
      </label>
      <select
        id="site-lang"
        value={locale}
        onChange={e => router.replace(pathname, { locale: e.target.value })}
        className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 max-w-[9rem]"
      >
        {routing.locales.map(loc => (
          <option key={loc} value={loc}>
            {t(loc)}
          </option>
        ))}
      </select>
    </div>
  )
}
