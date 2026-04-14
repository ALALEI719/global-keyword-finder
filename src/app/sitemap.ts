import type { MetadataRoute } from "next"

const locales = ["en", "zh", "fr"] as const
const paths = ["", "/privacy", "/terms", "/cookies", "/disclaimer"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://globalkwfinder.com"
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of paths) {
      const prefix = `/${locale}${path}`
      entries.push({
        url: `${base}${prefix || `/${locale}`}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.5,
      })
    }
  }

  return entries
}
