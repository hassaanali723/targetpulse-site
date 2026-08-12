import type { FaqItem } from '@/components/landing/FaqAccordion'
import { RAW_OFFERS } from '@/components/landing/pricingOffers'

const SITE = 'https://giggal.ai'
export const ORG_ID = `${SITE}/#organization`

// FAQPage — built from the same FAQ array a page renders, so the structured data
// text always matches the visible copy exactly.
export function faqPageLd(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

// BreadcrumbList for an inner page: Home (1) -> current page (2).
export function breadcrumbLd(name: string, path: string): Record<string, unknown> {
  return breadcrumbTrailLd([{ name, path }])
}

// BreadcrumbList for a deeper trail. Home is always position 1; each passed
// crumb follows in order (e.g. hub -> spoke).
export function breadcrumbTrailLd(crumbs: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${SITE}${c.path}`,
      })),
    ],
  }
}

// Article (blog post). Publisher is the shared Organization node from the layout
// graph (referenced by @id, not duplicated). No author byline is emitted.
export function articleLd(a: {
  title: string
  description: string
  slug: string
  datePublished: string
  image?: string
}): Record<string, unknown> {
  const url = `${SITE}/blog/${a.slug}`
  const image = a.image
    ? a.image.startsWith('http')
      ? a.image
      : `${SITE}${a.image}`
    : undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: a.title,
    description: a.description,
    ...(image ? { image: [image] } : {}),
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

// SoftwareApplication (homepage). offers.lowPrice/highPrice/offerCount are
// derived from the same RAW_OFFERS the pricing table renders. No aggregateRating
// (the reviews were collected on third-party platforms; marking them up as
// first-party violates Google's guidelines).
export function softwareApplicationLd(): Record<string, unknown> {
  const prices = RAW_OFFERS.map((o) => o.price)
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE}/#software`,
    name: 'Giggal.ai',
    url: SITE,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Email Verification',
    operatingSystem: 'Web',
    description:
      'Verify any email including catch-all, risky and SEG-protected addresses with 99% accuracy.',
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: String(RAW_OFFERS.length),
    },
  }
}
