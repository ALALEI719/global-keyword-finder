"use client"

import { useState, useMemo } from "react"
import {
  Languages,
  TrendingUp,
  ShoppingBag,
  PenLine,
  Building2,
  ChevronDown,
} from "lucide-react"
import { useTranslations } from "next-intl"

function TranslationIllustration() {
  const t = useTranslations("Seo")
  return (
    <div className="relative flex items-center justify-center w-full h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden select-none">
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#818cf8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-4 w-full px-8">
        {[
          [t("illusKw1a"), t("illusKw1b")],
          [t("illusKw2a"), t("illusKw2b")],
          [t("illusKw3a"), t("illusKw3b")],
        ].map(([a, b], row) => (
          <div
            key={row}
            className={`flex items-center gap-3 w-full max-w-xs ${row === 1 ? "opacity-75" : row === 2 ? "opacity-50" : ""}`}
          >
            <span className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-mono whitespace-nowrap">
              {a}
            </span>
            <div className="flex-1 border-t border-dashed border-slate-600" />
            <Languages className="text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div className="flex-1 border-t border-dashed border-slate-600" />
            <span className="px-3 py-1.5 rounded-lg bg-violet-500/20 border border-violet-500/40 text-violet-300 text-sm font-mono whitespace-nowrap">
              {b}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}

function UseCaseIllustration() {
  const t = useTranslations("Seo")
  const items = [
    { icon: ShoppingBag, label: t("illusEcom"), color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
    { icon: PenLine, label: t("illusCreator"), color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/30" },
    { icon: Building2, label: t("illusAgency"), color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/30" },
    { icon: TrendingUp, label: t("illusGrowth"), color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
  ]
  return (
    <div className="relative flex items-center justify-center w-full h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden select-none">
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#818cf8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
        {items.map(({ icon: Icon, label, color, bg }) => (
          <div key={label} className={`flex flex-col items-center gap-2 px-5 py-4 rounded-xl border ${bg}`}>
            <Icon className={`w-7 h-7 ${color}`} />
            <span className="text-xs font-semibold text-slate-300 whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}

function AccordionItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden transition-colors hover:border-slate-600">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-slate-800/60 hover:bg-slate-800 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-100 text-sm lg:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 py-5 text-slate-400 text-sm lg:text-base leading-relaxed border-t border-slate-700/50">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function SeoContentSection() {
  const t = useTranslations("Seo")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const faqItems = useMemo(() => {
    const keys = ["faq0q", "faq1q", "faq2q", "faq3q"] as const
    const akeys = ["faq0a", "faq1a", "faq2a", "faq3a"] as const
    return keys.map((qk, i) => ({ q: t(qk), a: t(akeys[i]) }))
  }, [t])

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    }),
    [faqItems]
  )

  const bullets1 = [
    { title: t("s1b1t"), body: t("s1b1") },
    { title: t("s1b2t"), body: t("s1b2") },
    { title: t("s1b3t"), body: t("s1b3") },
  ]

  const useCases = [
    { icon: ShoppingBag, title: t("s2i1t"), body: t("s2i1"), color: "text-emerald-400", ring: "ring-emerald-500/30", bg: "bg-emerald-500/10" },
    { icon: PenLine, title: t("s2i2t"), body: t("s2i2"), color: "text-sky-400", ring: "ring-sky-500/30", bg: "bg-sky-500/10" },
    { icon: Building2, title: t("s2i3t"), body: t("s2i3"), color: "text-violet-400", ring: "ring-violet-500/30", bg: "bg-violet-500/10" },
  ]

  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <TranslationIllustration />
          <div>
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">{t("s1kicker")}</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-5">{t("s1title")}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t("s1p1")}{" "}
              <strong className="text-slate-200">{t("s1p1Bold")}</strong>
            </p>
            <ul className="space-y-4 mb-7">
              {bullets1.map(({ title, body }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-slate-200">{title}: </strong>
                    {body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-slate-300 text-sm leading-relaxed rounded-xl border border-indigo-500/30 bg-indigo-500/5 px-5 py-4">
              {t.rich("s1callout", {
                highlight: c => <strong className="text-indigo-300">{c}</strong>,
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">{t("s2kicker")}</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-5">{t("s2title")}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t("s2p1")} <strong className="text-slate-200">{t("s2p1Bold")}</strong>
            </p>
            <ul className="space-y-5">
              {useCases.map(({ icon: Icon, title, body, color, ring, bg }) => (
                <li key={title} className="flex gap-4">
                  <span className={`mt-0.5 p-2 rounded-lg ring-1 ${ring} ${bg} flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </span>
                  <span className="text-slate-400 text-sm leading-relaxed">
                    <strong className="text-slate-200 block mb-0.5">{title}</strong>
                    {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <UseCaseIllustration />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">{t("faqKicker")}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">{t("faqTitle")}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} q={item.q} a={item.a} open={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  )
}
