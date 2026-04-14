"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { LEGAL_ENTITY_NAME } from "@/lib/legal-entity"

export default function SiteFooter() {
  const t = useTranslations("Footer")
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm text-slate-500">
        <p className="text-slate-600">© {new Date().getFullYear()} {LEGAL_ENTITY_NAME}</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            {t("privacy")}
          </Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            {t("terms")}
          </Link>
          <Link href="/cookies" className="hover:text-slate-300 transition-colors">
            {t("cookies")}
          </Link>
          <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
            {t("disclaimer")}
          </Link>
        </nav>
      </div>
    </footer>
  )
}
