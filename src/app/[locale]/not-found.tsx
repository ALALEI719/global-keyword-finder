"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import LegalHeader from "@/components/LegalHeader"

export default function NotFound() {
  const t = useTranslations("NotFound")
  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-6xl font-black text-slate-700 mb-4">{t("code")}</p>
        <h1 className="text-2xl font-bold text-white mb-3">{t("title")}</h1>
        <p className="text-slate-400 mb-8">{t("body")}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
        >
          {t("cta")}
        </Link>
      </main>
    </div>
  )
}
