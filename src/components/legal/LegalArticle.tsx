import type { ReactNode } from "react"

export function LegalArticle({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 pb-20">
      <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{title}</h1>
      <p className="text-sm text-slate-500 mb-10">{lastUpdated}</p>
      <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-indigo-400 [&_a]:underline hover:[&_a]:text-indigo-300">
        {children}
      </div>
    </article>
  )
}
