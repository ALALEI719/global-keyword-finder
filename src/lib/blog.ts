import type { routing } from "@/i18n/routing"
import { blogPosts } from "@/content/blog-posts"

export type AppLocale = (typeof routing.locales)[number]

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }

export type BlogPostContent = {
  title: string
  excerpt: string
  blocks: BlogBlock[]
}

export type BlogPost = {
  slug: string
  publishedAt: string
  readMinutes: number
  en: BlogPostContent
  zh: BlogPostContent
  fr: BlogPostContent
}

export function getBlogPosts(locale: AppLocale): Array<
  BlogPost & { content: BlogPostContent }
> {
  return [...blogPosts]
    .map((post) => ({
      ...post,
      content: post[locale],
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export function getBlogPost(
  slug: string,
  locale: AppLocale
): (BlogPost & { content: BlogPostContent }) | null {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return null
  return { ...post, content: post[locale] }
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
