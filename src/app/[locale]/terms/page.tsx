import { getTranslations, setRequestLocale } from "next-intl/server"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"
import { LegalTermsBody } from "@/components/legal/LegalTermsBody"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Meta" })
  return {
    title: t("termsTitle"),
    robots: { index: true, follow: true },
  }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const tPage = await getTranslations({ locale, namespace: "LegalPages" })

  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title={tPage("terms")} lastUpdated={tPage("lastUpdated")}>
        <LegalTermsBody locale={locale} />
      </LegalArticle>
    </div>
  )
}
