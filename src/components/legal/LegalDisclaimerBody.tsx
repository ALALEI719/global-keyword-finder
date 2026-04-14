import type { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { LEGAL_ENTITY_NAME, SERVICE_NAME } from "@/lib/legal-entity"

export async function LegalDisclaimerBody({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "LegalDisclaimer" })

  const rich = {
    termsLink: (chunks: ReactNode) => (
      <Link href="/terms" className="text-indigo-400 underline hover:text-indigo-300">
        {chunks}
      </Link>
    ),
    privacyLink: (chunks: ReactNode) => (
      <Link href="/privacy" className="text-indigo-400 underline hover:text-indigo-300">
        {chunks}
      </Link>
    ),
  }

  return (
    <>
      <p>{t.rich("intro", { entityName: LEGAL_ENTITY_NAME, serviceName: SERVICE_NAME })}</p>

      <h2>{t("s1_title")}</h2>
      <p>{t("s1_p1")}</p>

      <h2>{t("s2_title")}</h2>
      <p>{t("s2_p1")}</p>

      <h2>{t("s3_title")}</h2>
      <p>{t("s3_p1")}</p>

      <h2>{t("s4_title")}</h2>
      <p>{t("s4_p1")}</p>

      <h2>{t("s5_title")}</h2>
      <p>{t("s5_p1")}</p>

      <h2>{t("s6_title")}</h2>
      <p>{t("s6_p1")}</p>

      <p className="text-slate-400 text-sm pt-4">{t.rich("footer", rich)}</p>
    </>
  )
}
