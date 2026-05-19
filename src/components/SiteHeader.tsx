import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

export default async function SiteHeader() {
  const t = await getTranslations("Nav")

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-bold text-slate-100 hover:text-indigo-300 transition-colors min-w-0"
        >
          <Image
            src="/logo-nav.png"
            alt="Multi-Language Keyword Finder"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-lg object-contain"
            priority
          />
          <span className="truncate hidden sm:inline">
            Multi-Language Keyword Finder
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm shrink-0" aria-label="Main">
          <Link
            href="/blog"
            className="text-slate-400 hover:text-indigo-300 transition-colors font-medium"
          >
            {t("blog")}
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            {t("home")}
          </Link>
        </nav>
      </div>
    </header>
  )
}
