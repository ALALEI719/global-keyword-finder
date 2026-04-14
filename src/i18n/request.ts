import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  const core = (await import(`../../messages/${locale}.json`)).default
  const [privacy, terms, cookies, disclaimer] = await Promise.all([
    import(`../../messages/legal/privacy.${locale}.json`),
    import(`../../messages/legal/terms.${locale}.json`),
    import(`../../messages/legal/cookies.${locale}.json`),
    import(`../../messages/legal/disclaimer.${locale}.json`),
  ])

  return {
    locale,
    messages: {
      ...core,
      LegalPrivacy: privacy.default,
      LegalTerms: terms.default,
      LegalCookies: cookies.default,
      LegalDisclaimer: disclaimer.default,
    },
  }
})
