// One entry point for the per-language string modules, so the shared chrome
// (navbar, footer, CTA band, legal shell, 404) is written once and takes a
// `locale` prop. Page copy stays in the page files.
import type { Locale } from '@/lib/i18n/clusters'
import * as it from '@/lib/i18n/it'
import * as de from '@/lib/i18n/de'
import * as es from '@/lib/i18n/es'

export type L10nLocale = Exclude<Locale, 'en'>

export interface LocaleStrings {
  nav: typeof it.nav
  footer: typeof it.footer & { legalHeading?: string }
  announcement: typeof it.announcement
  cta: typeof it.cta
  consoleStrings: typeof it.consoleStrings
  pricing: typeof it.pricing
  notFound: typeof it.notFound
  legal: { updated: string; notice: string; noticeLink: string; noticeTail: string; breadcrumbHome: string }
  home: string
  nativeName: string
  ogLocale: string
  legalHeading: string
  formatDate: (iso: string) => string
  number: (n: number, decimals?: number) => string
  usd: (n: number, decimals?: number) => string
}

const IT_LEGAL = {
  updated: 'Ultimo aggiornamento',
  notice: 'Questa è una traduzione di cortesia. In caso di differenze, fa fede la',
  noticeLink: 'versione inglese',
  noticeTail: ", che è l'unica giuridicamente vincolante.",
  breadcrumbHome: 'Pagina iniziale',
}

export const STRINGS: Record<L10nLocale, LocaleStrings> = {
  it: {
    nav: it.nav, footer: it.footer, announcement: it.announcement, cta: it.cta, consoleStrings: it.consoleStrings,
    pricing: it.pricing, notFound: it.notFound, legal: IT_LEGAL, home: '/it', nativeName: 'Italiano', ogLocale: 'it_IT',
    legalHeading: 'Note legali', formatDate: it.formatDateIt, number: it.itNumber, usd: it.itUsd,
  },
  de: {
    nav: de.nav, footer: de.footer, announcement: de.announcement, cta: de.cta, consoleStrings: de.consoleStrings,
    pricing: de.pricing, notFound: de.notFound, legal: de.legal, home: '/de', nativeName: 'Deutsch', ogLocale: 'de_DE',
    legalHeading: de.footer.legalHeading, formatDate: de.formatDateDe, number: de.deNumber, usd: de.deUsd,
  },
  es: {
    nav: es.nav, footer: es.footer, announcement: es.announcement, cta: es.cta, consoleStrings: es.consoleStrings,
    pricing: es.pricing, notFound: es.notFound, legal: es.legal, home: '/es', nativeName: 'Español', ogLocale: 'es_LA',
    legalHeading: es.footer.legalHeading, formatDate: es.formatDateEs, number: es.esNumber, usd: es.esUsd,
  },
}

export function getStrings(locale: L10nLocale): LocaleStrings {
  return STRINGS[locale]
}

export const SIGNUP_URL = it.SIGNUP_URL
export const SIGNIN_URL = it.SIGNIN_URL
