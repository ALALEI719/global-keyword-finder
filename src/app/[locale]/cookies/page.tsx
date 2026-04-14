import { getTranslations, setRequestLocale } from "next-intl/server"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"
import { LegalCookiesBody } from "@/components/legal/LegalCookiesBody"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Meta" })
  return {
    title: t("cookiesTitle"),
    robots: { index: true, follow: true },
  }
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const tPage = await getTranslations({ locale, namespace: "LegalPages" })

  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title={tPage("cookies")} lastUpdated={tPage("lastUpdated")}>
        <LegalCookiesBody locale={locale} />
      </LegalArticle>
    </div>
  )
}
