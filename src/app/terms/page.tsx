import type { Metadata } from "next"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"

export const metadata: Metadata = {
  title: "Terms of Service | Multi-Language Keyword Finder",
  description:
    "Terms governing your use of the Multi-Language Keyword Finder SEO research tool and related services.",
  robots: { index: true, follow: true },
}

const SITE = "https://globalkwfinder.com"

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title="Terms of Service" lastUpdated="April 10, 2026">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of <strong>Multi-Language Keyword Finder</strong>{" "}
          and the website <a href={SITE}>{SITE.replace("https://", "")}</a> (the “Service”). By accessing or using
          the Service, you agree to these Terms. If you do not agree, do not use the Service.
        </p>

        <h2>1. The Service</h2>
        <p>
          The Service provides tools to explore multilingual keywords, search metrics, and related information,
          using data from third-party providers (such as Ahrefs) and translation or language-processing
          functionality. Features may include guest access, registered accounts, usage credits, and optional use
          of your own API credentials.
        </p>

        <h2>2. Eligibility and accounts</h2>
        <p>
          You must be able to form a binding contract in your jurisdiction to use the Service. If you create an
          account, you agree to provide accurate information and to keep your credentials secure. You are
          responsible for all activity under your account. Notify us promptly if you suspect unauthorised use.
        </p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service in violation of any law or regulation;</li>
          <li>Attempt to gain unauthorised access to the Service, other users’ data, or underlying systems;</li>
          <li>Reverse engineer, scrape, or automate the Service in a way that overloads, disrupts, or circumvents rate limits or technical controls;</li>
          <li>Use the Service to distribute malware, spam, or infringing or unlawful content;</li>
          <li>Misrepresent your identity or affiliation, or use the Service to mislead end users or search engines in ways that violate applicable platform or search-engine guidelines;</li>
          <li>Resell or redistribute the Service or its outputs in a manner that breaches third-party API terms you have accepted.</li>
        </ul>

        <h2>4. Third-party APIs and data</h2>
        <p>
          Results may depend on <strong>Ahrefs</strong>, translation providers, and other third parties. Your use
          of those providers’ data is also subject to their respective terms and policies. Search volume,
          keyword difficulty, intent labels, and similar metrics are estimates and may change over time. We do
          not guarantee completeness, accuracy, or fitness for any particular commercial outcome.
        </p>

        <h2>5. Your API keys</h2>
        <p>
          If you supply your own API keys, you represent that you have the right to use them with the Service.
          You remain responsible for fees, quotas, and compliance with the third party’s terms. We may store keys
          only as needed to perform requests on your behalf when you use the Service.
        </p>

        <h2>6. Free trial, credits, and changes</h2>
        <p>
          We may offer limited free queries, guest access, or promotional credits. Limits, features, and pricing
          may change with notice where required. We may suspend or terminate access for abuse, non-payment (if
          applicable), or breach of these Terms.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          The Service, including its software, branding, and documentation, is owned by us or our licensors.
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable licence to use the
          Service for your internal or personal business purposes. You retain rights in content you submit; you
          grant us a licence to process such content to operate the Service.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
          IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. See also our <a href="/disclaimer">Disclaimer</a>.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL,
          ARISING FROM YOUR USE OF THE SERVICE. OUR AGGREGATE LIABILITY FOR CLAIMS RELATING TO THE SERVICE SHALL
          NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID US FOR THE SERVICE IN THE TWELVE MONTHS BEFORE THE
          CLAIM OR (B) FIFTY US DOLLARS (USD $50), IF YOU HAVE NOT PAID US. SOME JURISDICTIONS DO NOT ALLOW
          CERTAIN LIMITATIONS; IN THOSE CASES OUR LIABILITY IS LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.
        </p>

        <h2>10. Indemnity</h2>
        <p>
          You will defend, indemnify, and hold harmless us and our affiliates from claims, damages, and expenses
          (including reasonable legal fees) arising from your use of the Service, your content, or your breach
          of these Terms, except to the extent caused by our wilful misconduct.
        </p>

        <h2>11. Termination</h2>
        <p>
          You may stop using the Service at any time. We may suspend or terminate access for operational,
          legal, or enforcement reasons. Provisions that by their nature should survive (including disclaimers,
          limitations, and indemnity) will survive termination.
        </p>

        <h2>12. Governing law</h2>
        <p>
          These Terms are governed by the laws applicable to the operator of the Service, without regard to
          conflict-of-law rules, except where mandatory consumer protections in your country require otherwise.
          Courts in that jurisdiction shall have exclusive venue, subject to those mandatory rules.
        </p>
        <p>
          <em>
            Note: You should replace this section with the law and venue you choose after consulting qualified
            counsel (for example, your country or state of incorporation).
          </em>
        </p>

        <h2>13. Changes to these Terms</h2>
        <p>
          We may modify these Terms by posting an updated version on this page and updating the “Last updated”
          date. Material changes may require additional notice where required by law. Continued use after changes
          constitutes acceptance where permitted.
        </p>

        <h2>14. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href="mailto:legal@globalkwfinder.com">legal@globalkwfinder.com</a>.
        </p>
      </LegalArticle>
    </div>
  )
}
