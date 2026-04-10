import type { Metadata } from "next"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"
import { LEGAL_ENTITY_NAME, SERVICE_NAME } from "@/lib/legal-entity"

export const metadata: Metadata = {
  title: "Disclaimer | Multi-Language Keyword Finder",
  description:
    "Important limitations regarding SEO data and Multi-Language Keyword Finder, operated by MetaForge Technology Limited.",
  robots: { index: true, follow: true },
}

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title="Disclaimer" lastUpdated="April 10, 2026">
        <p>
          The information and outputs provided through <strong>{SERVICE_NAME}</strong> (the “Service”) by{" "}
          <strong>{LEGAL_ENTITY_NAME}</strong> are for general research and informational purposes only. By using
          the Service, you acknowledge and agree to the following.
        </p>

        <h2>1. Not professional advice</h2>
        <p>
          Nothing on the Service constitutes legal, tax, financial, or professional SEO or marketing advice.
          You should consult qualified professionals before making business, compliance, or investment
          decisions.
        </p>

        <h2>2. Third-party data and accuracy</h2>
        <p>
          Keyword metrics (including search volume, keyword difficulty, intent classifications, and related
          fields) are sourced from third-party APIs and databases (such as Ahrefs) and from automated
          translation or language-processing steps. Estimates may be incomplete, delayed, or inaccurate.
          Rankings, volumes, and competition change over time and vary by location, device, and personalisation.
        </p>

        <h2>3. No guarantee of results</h2>
        <p>
          We do not guarantee any specific search ranking, traffic, revenue, or return on investment. Search
          engines and advertising platforms set their own rules; compliance with those rules remains your
          responsibility.
        </p>

        <h2>4. Your use of outputs</h2>
        <p>
          You are solely responsible for how you use keyword lists, translations, and other outputs — including
          compliance with copyright, trademark, consumer protection, and advertising laws in each market where
          you operate.
        </p>

        <h2>5. Service availability</h2>
        <p>
          The Service may be interrupted for maintenance, security, or reasons beyond our control (including
          outages of third-party APIs). We do not warrant uninterrupted or error-free operation.
        </p>

        <h2>6. External links</h2>
        <p>
          The Service may reference or link to third-party sites. We are not responsible for their content or
          practices.
        </p>

        <p className="text-slate-400 text-sm pt-4">
          For legal terms governing use of the Service, see our <a href="/terms">Terms of Service</a>. For data
          practices, see our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalArticle>
    </div>
  )
}
