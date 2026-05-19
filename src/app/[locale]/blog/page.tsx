import { getTranslations, setRequestLocale } from "next-intl/server"
import SiteNavBar from "@/components/SiteNavBar"
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
    <div className="min-h-screen flex flex-col flex-1 bg-[#020817]">
      <SiteNavBar />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 w-full">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {t("kicker")}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            {t("titleBefore")}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              content={post.content}
              publishedAt={post.publishedAt}
              readMinutes={post.readMinutes}
              readLabel={t("readTime")}
              readArticleLabel={t("readArticle")}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
