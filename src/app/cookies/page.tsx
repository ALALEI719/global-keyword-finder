import type { Metadata } from "next"
import LegalHeader from "@/components/LegalHeader"
import { LegalArticle } from "@/components/legal/LegalArticle"

export const metadata: Metadata = {
  title: "Cookie Policy | Multi-Language Keyword Finder",
  description:
    "How Multi-Language Keyword Finder uses cookies and similar technologies, including Google Analytics.",
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#020817]">
      <LegalHeader />
      <LegalArticle title="Cookie Policy" lastUpdated="April 10, 2026">
        <p>
          This Cookie Policy explains how <strong>Multi-Language Keyword Finder</strong> (“we”, “us”) uses
          cookies and similar technologies on our website. It should be read together with our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a site. They help the site function,
          remember preferences, measure traffic, and improve user experience. Similar technologies include local
          storage and pixels.
        </p>

        <h2>2. How we use cookies</h2>
        <p>We use cookies and related technologies for purposes such as:</p>
        <ul>
          <li>
            <strong>Essential / functional</strong> — To run the Service securely, maintain sessions (for example,
            when you sign in through our authentication provider), and remember choices you make.
          </li>
          <li>
            <strong>Analytics</strong> — To understand how visitors use our site in aggregate (for example, which
            pages are viewed and general traffic patterns).
          </li>
        </ul>

        <h2>3. Google Analytics</h2>
        <p>
          We use <strong>Google Analytics 4</strong> (Google LLC) with the measurement ID{" "}
          <strong>G-H1EWMGSPYG</strong>. Google Analytics may set cookies or use similar storage to collect
          information such as how often users visit, which pages they visit, and what other sites they used prior
          to coming to our site. We use this information to improve the Service.
        </p>
        <p>
          For more on how Google collects and processes data, see{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            How Google uses information from sites or apps that use our services
          </a>
          . You can opt out of Google Analytics using the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">
            Google Analytics Opt-out Browser Add-on
          </a>{" "}
          where available, or by adjusting cookie settings in your browser.
        </p>

        <h2>4. Third-party cookies</h2>
        <p>
          Some cookies may be set by third parties that provide services on our behalf (for example,
          authentication or hosting). Those parties’ use of data is described in their own policies.
        </p>

        <h2>5. Managing cookies</h2>
        <p>
          Most browsers let you refuse or delete cookies through settings. If you block essential cookies, parts
          of the Service (such as staying signed in) may not work correctly.
        </p>

        <h2>6. Updates</h2>
        <p>
          We may update this Cookie Policy from time to time. The “Last updated” date at the top reflects the
          latest revision.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions: <a href="mailto:privacy@globalkwfinder.com">privacy@globalkwfinder.com</a>.
        </p>
      </LegalArticle>
    </div>
  )
}
