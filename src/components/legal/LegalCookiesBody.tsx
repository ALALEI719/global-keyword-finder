import type { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { LEGAL_ENTITY_NAME, LEGAL_ENTITY_SHORT, SERVICE_NAME } from "@/lib/legal-entity"

export async function LegalCookiesBody({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "LegalCookies" })

  const rich = {
    strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
    entity: (chunks: ReactNode) => <strong>{chunks}</strong>,
    privacyLink: (chunks: ReactNode) => (
      <Link href="/privacy" className="text-indigo-400 underline hover:text-indigo-300">
        {chunks}
      </Link>
    ),
    gHow: (chunks: ReactNode) => (
      <a
        href="https://policies.google.com/technologies/partner-sites"
        rel="noopener noreferrer"
        target="_blank"
        className="text-indigo-400 underline hover:text-indigo-300"
      >
        {chunks}
      </a>
    ),
    gOpt: (chunks: ReactNode) => (
      <a
        href="https://tools.google.com/dlpage/gaoptout"
        rel="noopener noreferrer"
        target="_blank"
        className="text-indigo-400 underline hover:text-indigo-300"
      >
        {chunks}
      </a>
    ),
    email: (chunks: ReactNode) => (
      <a href="mailto:privacy@globalkwfinder.com" className="text-indigo-400 underline hover:text-indigo-300">
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
        })}
      </p>

      <h2>{t("s1_title")}</h2>
      <p>{t("s1_p1")}</p>

      <h2>{t("s2_title")}</h2>
      <p>{t("s2_intro")}</p>
      <ul>
        <li>{t.rich("s2_li1", rich)}</li>
        <li>{t.rich("s2_li2", rich)}</li>
      </ul>

      <h2>{t("s3_title")}</h2>
      <p>{t.rich("s3_p1", rich)}</p>
      <p>{t.rich("s3_p2", rich)}</p>

      <h2>{t("s4_title")}</h2>
      <p>{t("s4_p1")}</p>

      <h2>{t("s5_title")}</h2>
      <p>{t("s5_p1")}</p>

      <h2>{t("s6_title")}</h2>
      <p>{t("s6_p1")}</p>

      <h2>{t("s7_title")}</h2>
      <p>{t.rich("s7_p1", { ...rich, entityName: LEGAL_ENTITY_NAME })}</p>
    </>
  )
}
