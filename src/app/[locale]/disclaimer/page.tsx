import { getTranslations, setRequestLocale } from "next-intl/server"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"
import { LegalDisclaimerBody } from "@/components/legal/LegalDisclaimerBody"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Meta" })
  return {
    title: t("disclaimerTitle"),
    robots: { index: true, follow: true },
  }
}

export default async function DisclaimerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const tPage = await getTranslations({ locale, namespace: "LegalPages" })

  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title={tPage("disclaimer")} lastUpdated={tPage("lastUpdated")}>
        <LegalDisclaimerBody locale={locale} />
      </LegalArticle>
    </div>
  )
}
