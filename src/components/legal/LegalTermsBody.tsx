import type { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { LEGAL_ENTITY_NAME, LEGAL_ENTITY_SHORT, SERVICE_NAME, SITE_URL } from "@/lib/legal-entity"

export async function LegalTermsBody({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "LegalTerms" })
  const siteLabel = SITE_URL.replace("https://", "").replace(/\/$/, "")

  const rich = {
    entity: (chunks: ReactNode) => <strong>{chunks}</strong>,
    site: (chunks: ReactNode) => (
      <a href={SITE_URL} className="text-indigo-400 underline hover:text-indigo-300">
        {chunks}
      </a>
    ),
    discLink: (chunks: ReactNode) => (
      <Link href="/disclaimer" className="text-indigo-400 underline hover:text-indigo-300">
        {chunks}
      </Link>
    ),
    email: (chunks: ReactNode) => (
      <a href="mailto:legal@globalkwfinder.com" className="text-indigo-400 underline hover:text-indigo-300">
        {chunks}
      </a>
    ),
  }

  return (
    <>
      <p>
        {t.rich("intro", {
          ...rich,
          entityName: LEGAL_ENTITY_NAME,
          entityShort: LEGAL_ENTITY_SHORT,
          serviceName: SERVICE_NAME,
          siteLabel,
        })}
      </p>

      <h2>{t("s1_title")}</h2>
      <p>{t("s1_p1")}</p>

      <h2>{t("s2_title")}</h2>
      <p>{t("s2_p1")}</p>

      <h2>{t("s3_title")}</h2>
      <p>{t("s3_intro")}</p>
      <ul>
        <li>{t("s3_li1")}</li>
        <li>{t("s3_li2")}</li>
        <li>{t("s3_li3")}</li>
        <li>{t("s3_li4")}</li>
        <li>{t("s3_li5")}</li>
        <li>{t("s3_li6")}</li>
      </ul>

      <h2>{t("s4_title")}</h2>
      <p>{t("s4_p1")}</p>

      <h2>{t("s5_title")}</h2>
      <p>{t("s5_p1")}</p>

      <h2>{t("s6_title")}</h2>
      <p>{t("s6_p1")}</p>

      <h2>{t("s7_title")}</h2>
      <p>{t("s7_p1", { entityName: LEGAL_ENTITY_NAME })}</p>

      <h2>{t("s8_title")}</h2>
      <p>{t.rich("s8_p1", rich)}</p>

      <h2>{t("s9_title")}</h2>
      <p>{t("s9_p1", { entityName: LEGAL_ENTITY_NAME })}</p>

      <h2>{t("s10_title")}</h2>
      <p>{t("s10_p1", { entityName: LEGAL_ENTITY_NAME })}</p>

      <h2>{t("s11_title")}</h2>
      <p>{t("s11_p1")}</p>

      <h2>{t("s12_title")}</h2>
      <p>{t("s12_p1", { entityName: LEGAL_ENTITY_NAME })}</p>
      <p>{t("s12_p2")}</p>

      <h2>{t("s13_title")}</h2>
      <p>{t("s13_p1")}</p>

      <h2>{t("s14_title")}</h2>
      <p>{t.rich("s14_p1", { ...rich, entityName: LEGAL_ENTITY_NAME })}</p>
    </>
  )
}
