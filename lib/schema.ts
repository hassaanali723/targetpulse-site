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
      'Verify any email including catch-all, risky and SEG-protected addresses with 98.5% accuracy.',
    publisher: { '@id': ORG_ID },
    // featureList is the part an answer engine can lift wholesale when someone
    // asks what the tool actually does, so each line is one concrete capability
    // rather than a benefit statement.
    featureList: [
      'Catch-all and accept-all email verification with a valid or invalid result',
      'SEG-protected mailbox verification behind Proofpoint, Mimecast and Barracuda',
      'Deep mailbox existence check over SMTP',
      'Bulk list verification from CSV or TXT',
      'Disposable and role-based address detection',
      'REST API and remote MCP server for Claude, ChatGPT, Cursor and VS Code',
      'Zapier and n8n integrations',
      'Export results as CSV, Excel or JSON',
    ],
    softwareHelp: { '@type': 'CreativeWork', url: `${SITE}/public/docs` },
    // The MCP directory listing is the one third-party page that describes the
    // software itself rather than the company.
    sameAs: ['https://glama.ai/mcp/servers/giggal-ai/giggal-mcp'],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: String(RAW_OFFERS.length),
    },
  }
}

// TechArticle for the API reference. Answer engines treat developer docs as a
// strong signal that a product is real and callable, but only if the page
// declares itself as documentation rather than another marketing page.
export function apiDocsLd(): Record<string, unknown> {
  const url = `${SITE}/public/docs`
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#techarticle`,
    headline: 'Giggal.ai API Reference',
    description:
      'REST API for verifying single emails, running bulk batches, and deep-checking catch-all and SEG-protected addresses. JSON endpoints, API key auth, billed per successful verification.',
    url,
    proficiencyLevel: 'Beginner',
    about: { '@id': `${SITE}/#software` },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

// Generic ItemList. Used by the blog index and the alternatives hub so a model
// reading either page gets an ordered, extractable list instead of having to
// infer ranking from card layout.
export function itemListLd(opts: {
  id: string
  name: string
  description?: string
  items: { name: string; url: string; description?: string }[]
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': opts.id,
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
      ...(it.description ? { description: it.description } : {}),
    })),
  }
}

// HowTo. Used on the MCP page, where the question people ask an assistant is
// literally "how do I connect this", and a step list is the shape of the answer.
export function howToLd(opts: {
  id: string
  name: string
  description: string
  steps: { name: string; text: string }[]
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': opts.id,
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}
