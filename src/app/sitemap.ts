import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://globalkwfinder.com"
  const paths = ["", "/privacy", "/terms", "/cookies", "/disclaimer"]
  const now = new Date()
  return paths.map(path => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.5,
  }))
}
