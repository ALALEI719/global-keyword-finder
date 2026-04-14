import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://globalkwfinder.com"),
  keywords:
    "multilingual keyword research, international SEO, keyword translation, cross-language SEO",
}

const GA_ID = "G-H1EWMGSPYG"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" suppressHydrationWarning>
      <head>
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
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#020817]`}>{children}</body>
    </html>
  )
}
