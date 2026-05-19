import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import type { BlogPostContent } from "@/lib/blog"

type Props = {
  slug: string
  content: BlogPostContent
  publishedAt: string
  readMinutes: number
  readLabel: string
  readArticleLabel: string
}

export default function BlogPostCard({
  slug,
  content,
  publishedAt,
  readMinutes,
  readLabel,
  readArticleLabel,
}: Props) {
  const date = new Date(publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden ring-1 ring-white/5 hover:ring-indigo-500/30 hover:border-indigo-500/40 transition-all">
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="px-7 py-7 md:px-8 md:py-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <time dateTime={publishedAt} className="tabular-nums">
            {date}
          </time>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span>
            {readMinutes} {readLabel}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight tracking-tight">
          <Link href={`/blog/${slug}`} className="absolute inset-0">
            <span className="sr-only">{content.title}</span>
          </Link>
          {content.title}
        </h2>
        <p className="mt-3 text-slate-400 text-[15px] leading-relaxed line-clamp-3">
          {content.excerpt}
        </p>
        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
          {readArticleLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </article>
  )
}
