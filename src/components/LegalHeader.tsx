import { Link } from "@/i18n/navigation"
import Image from "next/image"

export default function LegalHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
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
          <span className="truncate">Multi-Language Keyword Finder</span>
        </Link>
      </div>
    </header>
  )
}
