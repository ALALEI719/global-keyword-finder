const AHREFS_BASE = "https://api.ahrefs.com/v3/keywords-explorer"

async function ahrefsGet(
  token: string,
  endpoint: string,
  params: Record<string, string | number>
): Promise<Record<string, unknown> | null> {
  const url = new URL(`${AHREFS_BASE}/${endpoint}`)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)))
  try {
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      next: { revalidate: 0 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function fetchOverview(token: string, keywords: string, country: string) {
  return ahrefsGet(token, "overview", {
    select: "keyword,volume,difficulty,global_volume,cpc,traffic_potential,intents,parent_topic",
    keywords,
    country,
    limit: 100,
  })
}

export async function fetchRelated(token: string, keyword: string, country: string, limit = 30) {
  return ahrefsGet(token, "related-terms", {
    select: "keyword,volume,difficulty,global_volume,cpc,traffic_potential,intents,parent_topic",
    keyword,
    country,
    limit,
  })
}

export async function fetchSuggestions(token: string, keyword: string, country: string, limit = 20) {
  return ahrefsGet(token, "search-suggestions", {
    select: "keyword,volume,difficulty,global_volume,cpc,traffic_potential,intents,parent_topic",
    keyword,
    country,
    limit,
  })
}
