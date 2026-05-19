import { getTranslations, setRequestLocale } from "next-intl/server"
import SiteHeader from "@/components/SiteHeader"
import BlogPostCard from "@/components/BlogPostCard"
import { getBlogPosts } from "@/lib/blog"
import type { AppLocale } from "@/lib/blog"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Meta" })
  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    robots: { index: true, follow: true },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Blog")
  const posts = getBlogPosts(locale as AppLocale)

  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-12 pb-20 w-full">
        <h1 className="text-3xl font-bold text-white tracking-tight">{t("title")}</h1>
        <p className="mt-3 text-slate-400 text-[15px] leading-relaxed max-w-2xl">
          {t("subtitle")}
        </p>
        <div className="mt-10 grid gap-6">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              content={post.content}
              publishedAt={post.publishedAt}
              readMinutes={post.readMinutes}
              readLabel={t("readTime")}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
