import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"
import { LEGAL_ENTITY_NAME, LEGAL_ENTITY_SHORT, SERVICE_NAME, SITE_URL } from "@/lib/legal-entity"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Meta" })
  return {
    title: t("privacyTitle"),
    robots: { index: true, follow: true },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const tPage = await getTranslations({ locale, namespace: "LegalPages" })
  const tNotice = await getTranslations({ locale, namespace: "LegalNotice" })

  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title={tPage("privacy")} lastUpdated={tPage("lastUpdated")}>
        {locale !== "en" && (
          <p className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
            {tNotice("binding")}
          </p>
        )}
        <p>
          This Privacy Policy describes how <strong>{LEGAL_ENTITY_NAME}</strong> (“{LEGAL_ENTITY_SHORT}”, “we”,
          “us”, or “our”) collects, uses, stores, and shares information when you use{" "}
          <strong>{SERVICE_NAME}</strong>, offered through the website{" "}
          <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a> and related services (collectively, the
          “Service”).
        </p>
        <p>
          By using the Service, you agree to this Privacy Policy. If you do not agree, please do not use the
          Service.
        </p>

        <h2>1. Who we are</h2>
        <p>
          The Service is operated by <strong>{LEGAL_ENTITY_NAME}</strong>. {SERVICE_NAME} is a web application
          that helps users discover and analyse keywords across languages and markets. Processing may occur on
          infrastructure provided by our hosting and authentication partners (for example, Vercel and Supabase).
        </p>

        <h2>2. Information we collect</h2>
        <p>Depending on how you use the Service, we may process the following categories of information:</p>
        <ul>
          <li>
            <strong>Account information</strong> — If you register or sign in, we process identifiers and
            profile data handled by our authentication provider (such as email address and user ID). We do not
            store your password in plain text; authentication is managed by our provider using industry
            standard security practices.
          </li>
          <li>
            <strong>Usage and service data</strong> — When you run keyword discovery, we process the inputs
            you submit (for example, seed keywords, selected source language, and target country or market) in
            order to return results. We may retain limited operational logs to secure and improve the Service.
          </li>
          <li>
            <strong>Keyword processing</strong> — We process the keywords and parameters you submit using our
            infrastructure and authorised third-party APIs (such as Ahrefs) under credentials operated by us.
            The public Service does not ask you to paste your own Ahrefs API key.
          </li>
          <li>
            <strong>Technical and analytics data</strong> — We may collect device and connection information
            such as browser type, general location derived from IP (for example, at country or region level),
            and pages viewed. We use <strong>Google Analytics</strong> (Google LLC) to understand aggregate
            traffic and usage patterns. For more on how Google uses data, see{" "}
            <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
              Google’s partner policy
            </a>
            .
          </li>
        </ul>

        <h2>3. How we use information</h2>
        <p>We use the information above to:</p>
        <ul>
          <li>Provide, operate, and maintain the Service (including authentication and credit or quota features);</li>
          <li>Call third-party APIs you have authorised or that apply under our free-trial or platform-key model;</li>
          <li>Improve reliability, security, and performance;</li>
          <li>Communicate about the Service where appropriate and permitted by law;</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>

        <h2>4. Third-party services</h2>
        <p>
          The Service relies on third parties whose privacy policies govern their own processing. Non-exhaustive
          examples include:
        </p>
        <ul>
          <li>
            <strong>Ahrefs</strong> — keyword metrics and related SEO data when requests are made using our
            platform&apos;s authorised API access.
          </li>
          <li>
            <strong>Translation services</strong> — text may be sent to translation endpoints (for example,
            services used to localise or evaluate keywords) to produce results shown in the Service.
          </li>
          <li>
            <strong>Supabase</strong> — authentication and database services for registered users (for example,
            account linkage and credit balances).
          </li>
          <li>
            <strong>Vercel</strong> — hosting and delivery of the web application and server-side API routes.
          </li>
          <li>
            <strong>Google Analytics</strong> — measurement of site usage as described in our{" "}
            <Link href="/cookies" className="text-indigo-400 underline hover:text-indigo-300">
              Cookie Policy
            </Link>
            .
          </li>
        </ul>
        <p>
          We encourage you to read the privacy notices of any third-party service whose credentials you supply
          or whose features you enable.
        </p>

        <h2>5. Legal bases (EEA, UK, and similar jurisdictions)</h2>
        <p>
          Where required by law, we rely on appropriate legal bases such as: performance of a contract with
          you; legitimate interests in operating and securing the Service (balanced against your rights); your
          consent where we ask for it (for example, for certain cookies or marketing, if offered); and compliance
          with legal obligations.
        </p>

        <h2>6. Retention</h2>
        <p>
          We retain information only as long as necessary for the purposes above, unless a longer period is
          required or permitted by law. Account-related data is generally kept while your account exists and
          for a reasonable period afterwards for backups, security, and legal compliance.
        </p>

        <h2>7. Security</h2>
        <p>
          We implement reasonable technical and organisational measures designed to protect information against
          unauthorised access, loss, or alteration. No method of transmission over the Internet is 100% secure.
        </p>

        <h2>8. International transfers</h2>
        <p>
          Our service providers may process data in countries other than your own. Where required, we use
          appropriate safeguards (such as standard contractual clauses) as offered by our providers or as
          otherwise required by applicable law.
        </p>

        <h2>9. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or restrict processing
          of your personal data, to data portability, and to object to certain processing. You may also have the
          right to lodge a complaint with a supervisory authority. To exercise rights, contact us using the
          details below. We may need to verify your identity before responding.
        </p>

        <h2>10. Children</h2>
        <p>
          The Service is not directed to children under 16 (or the minimum age in your jurisdiction). We do
          not knowingly collect personal information from children. If you believe we have done so, please
          contact us and we will take appropriate steps.
        </p>

        <h2>11. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated version on this page
          and adjust the “Last updated” date. Continued use of the Service after changes constitutes acceptance
          of the updated policy where permitted by law.
        </p>

        <h2>12. Contact</h2>
        <p>
          For privacy-related requests or questions directed to <strong>{LEGAL_ENTITY_NAME}</strong>, please
          contact us at{" "}
          <a href="mailto:privacy@globalkwfinder.com">privacy@globalkwfinder.com</a>. If that address is not yet
          active, use the primary contact method shown on the homepage or your account correspondence.
        </p>
      </LegalArticle>
    </div>
  )
}
