export interface KeywordResult {
  keyword: string
  meaning: string        // back-translated to source language
  volume: number | null
  globalVolume: number | null
  kd: number | null
  kdLevel: string
  cpc: number | null
  trafficPotential: number | null
  intent: string
  relScore: number
}

export interface DiscoverRequest {
  keyword: string
  sourceLang: string
  targetCountry: string
  apiToken?: string
  resultLimit?: number
}

export interface DiscoverResponse {
  results: KeywordResult[]
  translatedKeyword: string
  error?: string
}

export interface User {
  id: string
  email: string
  credits: number
  apiKey: string
}

export const COUNTRY_OPTIONS: Record<string, string> = {
  "United States": "us",
  "Germany / Deutschland": "de",
  "France": "fr",
  "Japan": "jp",
  "United Kingdom": "gb",
  "Canada": "ca",
  "Australia": "au",
  "Brazil": "br",
  "Spain": "es",
  "Italy": "it",
  "Netherlands": "nl",
  "Sweden": "se",
  "Poland": "pl",
  "Mexico": "mx",
  "South Korea": "kr",
  "India": "in",
  "Russia": "ru",
  "Turkey": "tr",
  "Argentina": "ar",
  "Indonesia": "id",
}

export const COUNTRY_TO_LANG: Record<string, string> = {
  us: "en", gb: "en", ca: "en", au: "en", in: "en",
  de: "de", at: "de", ch: "de",
  fr: "fr", be: "fr",
  jp: "ja",
  kr: "ko",
  br: "pt", pt: "pt",
  es: "es", mx: "es", ar: "es",
  it: "it",
  nl: "nl",
  se: "sv",
  pl: "pl",
  ru: "ru",
  tr: "tr",
  id: "id",
}

export const SOURCE_LANG_OPTIONS: Record<string, string> = {
  English: "en",
  Chinese: "zh-CN",
  German: "de",
  French: "fr",
  Spanish: "es",
  Japanese: "ja",
  Korean: "ko",
  Portuguese: "pt",
  Italian: "it",
  Dutch: "nl",
}
