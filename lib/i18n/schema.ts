import { ORG_ID } from '@/lib/schema'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'

const SITE = 'https://giggal.ai'

// BreadcrumbList for a localized page: the trail starts at that language's home.
export function breadcrumbL10n(locale: L10nLocale, crumbs: { name: string; path: string }[]): Record<string, unknown> {
  const s = getStrings(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.legal.breadcrumbHome, item: `${SITE}${s.home}` },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${SITE}${c.path}`,
      })),
    ],
  }
}

// The free checker as a web application, localized. No AggregateRating
// (site rule C10) and no paid offer: the tool is free.
export function webApplicationL10n(locale: L10nLocale, path: string, name: string, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'WebApplication'],
    '@id': `${SITE}${path}#app`,
    name,
    url: `${SITE}${path}`,
    inLanguage: locale,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    description,
    publisher: { '@id': ORG_ID },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
}
