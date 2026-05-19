import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import SiteHeader from "@/components/SiteHeader"
import BlogPostBody from "@/components/BlogPostBody"
import { LegalArticle } from "@/components/legal/LegalArticle"
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
    <div className="flex flex-col flex-1 bg-[#020817]">
      <SiteHeader />
      <LegalArticle
        title={post.content.title}
        lastUpdated={`${date} · ${post.readMinutes} ${t("readTime")}`}
      >
        <p className="text-slate-400 -mt-4 mb-2 text-base">{post.content.excerpt}</p>
        <BlogPostBody blocks={post.content.blocks} />
        <p className="pt-8 border-t border-slate-800">
          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300">
            ← {t("backToBlog")}
          </Link>
        </p>
      </LegalArticle>
    </div>
  )
}
