// Ported from the Python app — keyword filtering and relevance scoring

const ENGLISH_STOPWORDS = new Set([
  "the","a","an","and","or","but","in","on","at","to","for","of","with",
  "is","are","was","were","be","been","being","have","has","had","do","does",
  "did","will","would","could","should","may","might","shall","can","need",
  "this","that","these","those","it","its","we","you","he","she","they",
  "my","your","his","her","our","their","what","which","who","how","when",
  "where","why","all","each","every","some","any","no","not","more","most",
  "very","so","just","also","then","there","here","up","down","out","off",
  "over","under","again","further","once","into","from","by","about","through",
])

const COMMON_ENGLISH_WORDS = new Set([
  "best","top","cheap","buy","price","review","online","free","new","good",
  "great","home","small","large","big","mini","pro","max","plus","lite",
  "smart","electric","automatic","manual","portable","wireless","digital",
  "review","reviews","vs","versus","guide","how","what","why","best",
  "robot","lawn","mower","grass","garden","outdoor","indoor","auto","automatic",
])

const KNOWN_BRANDS = new Set([
  "bosch","husqvarna","worx","gardena","robomow","mcculloch","flymo",
  "honda","yamaha","samsung","lg","sony","apple","google","amazon","microsoft",
  "ikea","h&m","zara","nike","adidas","lego","dyson","philips","siemens",
  "bmw","mercedes","audi","volkswagen","ford","toyota","tesla",
  "mammotion","luba","segway","ecovacs","roomba","irobot",
])

function isModelNumber(kw: string): boolean {
  return /\b[a-z]{1,4}\d{2,}[a-z0-9]*\b/i.test(kw) ||
         /\b\d{3,}[a-z]{1,3}\b/i.test(kw)
}

function isMostlyEnglish(kw: string, targetLang: string): boolean {
  if (targetLang === "en") return false
  const words = kw.toLowerCase().split(/\s+/)
  const engCount = words.filter(w => ENGLISH_STOPWORDS.has(w) || COMMON_ENGLISH_WORDS.has(w)).length
  return words.length > 0 && engCount / words.length > 0.5
}

export function filterCandidates(
  candidates: Record<string, unknown>[],
  targetLang: string,
  sourceKw: string
): Record<string, unknown>[] {
  const sourceWords = new Set(sourceKw.toLowerCase().split(/\s+/))
  return candidates.filter(c => {
    const kw = (c.keyword as string).toLowerCase().trim()
    if (!kw) return false
    if (isMostlyEnglish(kw, targetLang)) return false
    const words = kw.split(/\s+/)
    const allSource = words.every(w => sourceWords.has(w) || ENGLISH_STOPWORDS.has(w) || COMMON_ENGLISH_WORDS.has(w))
    if (allSource && targetLang !== "en") return false
    return true
  })
}

export function filterBrandKeywords(candidates: Record<string, unknown>[]): Record<string, unknown>[] {
  return candidates.filter(c => {
    const kw = (c.keyword as string).toLowerCase()
    const intents = c.intents as { branded?: boolean } | undefined
    if (intents?.branded) return false
    const words = kw.split(/\s+/)
    if (words.some(w => KNOWN_BRANDS.has(w))) return false
    if (isModelNumber(kw)) return false
    return true
  })
}

export function translationRelevance(backTranslation: string, sourceKw: string): number {
  const src = sourceKw.toLowerCase().split(/\s+/).filter(w => !ENGLISH_STOPWORDS.has(w))
  const bt = backTranslation.toLowerCase().split(/\s+/).filter(w => !ENGLISH_STOPWORDS.has(w))
  if (!src.length || !bt.length) return 0
  let score = 0
  for (const sw of src) {
    if (bt.some(bw => bw.includes(sw) || sw.includes(bw))) score++
  }
  return score / src.length
}

export function difficultyLabel(kd: number | null): string {
  if (kd === null) return "—"
  if (kd <= 10) return "Easy"
  if (kd <= 30) return "Medium"
  if (kd <= 60) return "Hard"
  return "Very Hard"
}

export function intentLabel(intents: unknown): string {
  if (!intents) return "—"
  const i = intents as Record<string, boolean>
  if (i.informational) return "Informational"
  if (i.commercial) return "Commercial"
  if (i.transactional) return "Transactional"
  if (i.navigational) return "Navigational"
  return "Mixed"
}
