// Google Translate free endpoint (same approach as deep-translator)
const GT_URL = "https://translate.googleapis.com/translate_a/single"

async function gt(text: string, from: string, to: string): Promise<string> {
  try {
    const params = new URLSearchParams({
      client: "gtx", sl: from, tl: to, dt: "t", q: text,
    })
    const res = await fetch(`${GT_URL}?${params}`)
    if (!res.ok) return text
    const data = await res.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data[0] as any[]).map((s: any[]) => s[0]).filter(Boolean).join("") || text
  } catch {
    return text
  }
}

export async function translateKeyword(text: string, from: string, to: string): Promise<string> {
  if (from === to) return text
  return gt(text, from, to)
}

export async function batchTranslate(
  keywords: string[],
  from: string,
  to: string
): Promise<Record<string, string>> {
  const entries = await Promise.all(
    keywords.map(async (kw) => [kw, await gt(kw, from, to)] as [string, string])
  )
  return Object.fromEntries(entries)
}
