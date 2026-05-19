import { Link } from "@/i18n/navigation"
import type { BlogPostContent } from "@/lib/blog"

type Props = {
  slug: string
  content: BlogPostContent
  publishedAt: string
  readMinutes: number
  readLabel: string
}

export default function BlogPostCard({
  slug,
  content,
  publishedAt,
  readMinutes,
  readLabel,
}: Props) {
  const date = new Date(publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="relative group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-indigo-500/50 hover:bg-slate-900/70 transition-colors">
      <time className="text-xs text-slate-500" dateTime={publishedAt}>
        {date}
      </time>
      <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
        <Link href={`/blog/${slug}`} className="after:absolute after:inset-0 relative">
          {content.title}
        </Link>
      </h2>
      <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
        {content.excerpt}
      </p>
      <p className="mt-4 text-xs text-slate-500">
        {readMinutes} {readLabel}
      </p>
    </article>
  )
}
