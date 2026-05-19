import type { MetadataRoute } from "next"
import { getAllBlogSlugs } from "@/lib/blog"

const locales = ["en", "zh", "fr"] as const
const paths = ["", "/blog", "/privacy", "/terms", "/cookies", "/disclaimer"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://globalkwfinder.com"
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []
  const blogSlugs = getAllBlogSlugs()

  for (const locale of locales) {
    for (const path of paths) {
      const prefix = `/${locale}${path}`
      entries.push({
        url: `${base}${prefix || `/${locale}`}`,
        lastModified: now,
        changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.5,
      })
    }
    for (const slug of blogSlugs) {
      entries.push({
        url: `${base}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return entries
}
