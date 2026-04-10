import Link from "next/link"
import { Globe2 } from "lucide-react"

export default function LegalHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-slate-100 hover:text-indigo-300 transition-colors"
        >
          <Globe2 className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden />
          Multi-Language Keyword Finder
        </Link>
      </div>
    </header>
  )
}
