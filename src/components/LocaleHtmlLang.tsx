"use client"

import { useEffect } from "react"

const HTML_LANG: Record<string, string> = {
  en: "en",
  zh: "zh-CN",
  fr: "fr",
}

export default function LocaleHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale] ?? "en"
  }, [locale])
  return null
}
