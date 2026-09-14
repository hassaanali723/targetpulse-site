import { ORG_ID } from '@/lib/schema'

const SITE = 'https://giggal.ai'

// BreadcrumbList for Italian pages: the trail starts at the Italian home.
export function breadcrumbIt(crumbs: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pagina iniziale', item: `${SITE}/it` },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${SITE}${c.path}`,
      })),
    ],
  }
}

// The free checker as a web application, in Italian. No AggregateRating
// (site rule C10) and no offers: the tool is free.
export function webApplicationIt(path: string, name: string, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'WebApplication'],
    '@id': `${SITE}${path}#app`,
    name,
    url: `${SITE}${path}`,
    inLanguage: 'it',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    description,
    publisher: { '@id': ORG_ID },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
}
