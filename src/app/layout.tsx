import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Multi-Language Keyword Finder | Cross-Language SEO Intent Tool",
  description:
    "Find the right keywords and infinite opportunities in any language. Discover high-traffic, intent-matched local search terms using AI and Ahrefs data.",
  keywords: "multilingual keyword research, international SEO, keyword translation, cross-language SEO",
  openGraph: {
    title: "Multi-Language Keyword Finder",
    description: "Find high-traffic keywords in any language with AI-powered search intent matching.",
    type: "website",
  },
}

const GA_ID = "G-H1EWMGSPYG"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics — injected directly into <head> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
