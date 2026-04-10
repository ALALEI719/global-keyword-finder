import Link from "next/link"
import LegalHeader from "@/components/LegalHeader"

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-6xl font-black text-slate-700 mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-slate-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
        >
          Back to Keyword Finder
        </Link>
      </main>
    </div>
  )
}
