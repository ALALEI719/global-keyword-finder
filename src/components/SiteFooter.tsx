import Link from "next/link"
import { LEGAL_ENTITY_NAME } from "@/lib/legal-entity"

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm text-slate-500">
        <p className="text-slate-600">© {new Date().getFullYear()} {LEGAL_ENTITY_NAME}</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookies" className="hover:text-slate-300 transition-colors">
            Cookie Policy
          </Link>
          <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
            Disclaimer
          </Link>
        </nav>
      </div>
    </footer>
  )
}
