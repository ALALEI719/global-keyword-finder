import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Link } from "@/i18n/navigation"
import SiteNavBar from "@/components/SiteNavBar"
import BlogPostBody from "@/components/BlogPostBody"
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog"
import type { AppLocale } from "@/lib/blog"
import { routing } from "@/i18n/routing"

export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getBlogPost(slug, locale as AppLocale)
  if (!post) return { title: "Blog" }
  return {
    title: `${post.content.title} | Multi-Language Keyword Finder`,
    description: post.content.excerpt,
    robots: { index: true, follow: true },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Blog")
  const post = getBlogPost(slug, locale as AppLocale)
  if (!post) notFound()

  const date = new Date(post.publishedAt).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen flex flex-col flex-1 bg-[#020817]">
      <SiteNavBar />
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20 w-full">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-300 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToBlog")}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
            <span className="text-indigo-400 font-semibold uppercase tracking-widest">
              {t("kicker")}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <time dateTime={post.publishedAt} className="tabular-nums">
              {date}
            </time>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>
              {post.readMinutes} {t("readTime")}
            </span>
          </div>
          <h1 className="text-3xl md:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {post.content.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed pl-5 border-l-2 border-indigo-500/70">
            {post.content.excerpt}
          </p>
        </header>

        <BlogPostBody blocks={post.content.blocks} />

        <aside className="relative mt-16 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-violet-500/10 overflow-hidden ring-1 ring-indigo-500/15 px-7 py-7 md:px-8 md:py-8">
          <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/15 ring-1 ring-indigo-500/30">
              <Sparkles className="w-5 h-5 text-indigo-300" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base md:text-lg font-bold text-white mb-1.5">
                {t("ctaTitle")}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-xl">
                {t("ctaBody")}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
              >
                {t("ctaButton")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>
      </article>
    </div>
  )
}
