"use client"

import {
  Globe2,
  SearchCode,
  Sparkles,
  MousePointerClick,
  BarChart3,
  Lightbulb,
} from "lucide-react"
import { useTranslations } from "next-intl"

function ActionRow({
  icon: Icon,
  text,
  index,
  highlight,
}: {
  icon: React.ElementType
  text: React.ReactNode
  index: number
  highlight?: boolean
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl px-4 py-3 transition-colors ${
        highlight ? "bg-white/5 ring-1 ring-white/10" : "hover:bg-white/[0.03]"
      }`}
    >
      <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-slate-700/80 ring-1 ring-white/10">
        <Icon className="w-3.5 h-3.5 text-slate-300" />
      </div>
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-xs font-bold text-slate-600 flex-shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function StepCard({
  num,
  label,
  color,
  ring,
  glow,
  borderAccent,
  actions,
  stepLabel,
}: {
  num: string
  label: string
  color: string
  ring: string
  glow: string
  borderAccent: string
  actions: { icon: React.ElementType; text: React.ReactNode; highlight?: boolean }[]
  stepLabel: string
}) {
  return (
    <div
      className={`relative flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden ring-1 ${ring}`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
      <div className="px-7 pt-6 pb-7 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <span
            className={`text-5xl font-black leading-none bg-gradient-to-br ${color} bg-clip-text text-transparent select-none`}
          >
            {num}
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-slate-500 mb-0.5">{stepLabel}</p>
            <h3 className="text-lg font-bold text-slate-100">{label}</h3>
          </div>
        </div>
        <div className={`relative border-l-2 ${borderAccent} ml-3.5 pl-5 flex flex-col gap-2`}>
          {actions.map((a, i) => (
            <ActionRow key={i} icon={a.icon} text={a.text} index={i} highlight={a.highlight} />
          ))}
        </div>
      </div>
      <div className={`pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 ${glow} rounded-full blur-3xl`} />
    </div>
  )
}

export default function HowToUseSection() {
  const t = useTranslations("HowTo")

  const steps = [
    {
      num: "01",
      label: t("step1Title"),
      color: "from-indigo-500 to-violet-500",
      ring: "ring-indigo-500/20",
      glow: "bg-indigo-500/10",
      borderAccent: "border-l-indigo-500",
      actions: [
        { icon: Globe2, text: t("step1a") },
        { icon: SearchCode, text: t("step1b") },
        { icon: Sparkles, text: t("step1c") },
        {
          icon: Sparkles,
          text: t.rich("step1d", {
            highlight: c => <strong className="text-slate-200">{c}</strong>,
          }),
          highlight: true,
        },
      ],
    },
    {
      num: "02",
      label: t("step2Title"),
      color: "from-violet-500 to-fuchsia-500",
      ring: "ring-violet-500/20",
      glow: "bg-violet-500/10",
      borderAccent: "border-l-violet-500",
      actions: [
        { icon: BarChart3, text: t("step2a") },
        {
          icon: MousePointerClick,
          text: t.rich("step2b", {
            hl: c => <strong className="text-slate-200">{c}</strong>,
          }),
          highlight: true,
        },
      ],
    },
  ]

  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">{t("kicker")}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">{t("title")}</h2>
          <p className="mt-3 text-slate-400 text-sm max-w-md mx-auto">{t("subtitle")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {steps.map(step => (
            <StepCard key={step.num} {...step} stepLabel={t("stepLabel")} />
          ))}
        </div>
        <div className="relative rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/8 via-amber-500/5 to-transparent overflow-hidden px-7 py-6 ring-1 ring-amber-500/15">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600 rounded-l-2xl" />
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/15 ring-1 ring-amber-500/30">
              <Lightbulb className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-300 mb-2 tracking-wide">{t("proTitle")}</p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{t("proBody")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
