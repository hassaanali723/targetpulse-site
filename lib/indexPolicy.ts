// Which programmatic pages are indexed. Rulings C6 and C7 and Sprint 0 item 4
// of the main SEO plan (targetpulse-seo/plans/01, research/gap-07 4.5 and
// 4.6): keep the pages with measurable demand indexed, `noindex` the rest,
// keep every URL resolving and linked so nothing 404s and the answer engines
// can still read them.
//
// Sitemaps: a noindexed URL stays listed for one crawl cycle after the
// noindex ships (NOINDEX_DEPLOYED plus 30 days) so Googlebot sees the tag on
// a domain with little crawl history, then leaves the sitemap.

import { versusSlug } from '@/lib/compare'

export const NOINDEX_DEPLOYED = '2026-09-17'
const SITEMAP_GRACE_DAYS = 30

/** True once the grace period has passed and noindexed URLs should leave the sitemaps. */
export function pastSitemapGrace(now = new Date()): boolean {
  const deployed = new Date(NOINDEX_DEPLOYED + 'T00:00:00Z').getTime()
  return now.getTime() - deployed > SITEMAP_GRACE_DAYS * 86400 * 1000
}

// gap-07 4.5: 15 pairs among the six verification-only tier A brands, the four
// hunter and instantly pairs with zerobounce and neverbounce, apollo-vs-instantly.
const COMPARE_PAIRS: [string, string][] = [
  ['zerobounce', 'neverbounce'],
  ['zerobounce', 'millionverifier'],
  ['zerobounce', 'reoon'],
  ['zerobounce', 'bouncer'],
  ['zerobounce', 'emaillistverify'],
  ['zerobounce', 'hunter'],
  ['zerobounce', 'instantly'],
  ['neverbounce', 'millionverifier'],
  ['neverbounce', 'reoon'],
  ['neverbounce', 'bouncer'],
  ['neverbounce', 'emaillistverify'],
  ['neverbounce', 'hunter'],
  ['neverbounce', 'instantly'],
  ['millionverifier', 'reoon'],
  ['millionverifier', 'bouncer'],
  ['millionverifier', 'emaillistverify'],
  ['reoon', 'bouncer'],
  ['reoon', 'emaillistverify'],
  ['bouncer', 'emaillistverify'],
  ['apollo', 'instantly'],
]

// Sprint 0 item 2: any page with 50 or more impressions in the 28 days before
// the noindex ships stays indexed (Search Console Pages export of 2026-09-13).
const COMPARE_PROTECTED: [string, string][] = [
  ['bounceban', 'scrubby'],       // 130 impressions, position 5.8
  ['bounceban', 'reoon'],         // 129, 5.6
  ['millionverifier', 'emaillistverify'], // 81 (already whitelisted)
  ['bounceban', 'briteverify'],   // 65, 3.7
  ['bounceban', 'apollo'],        // 65, 4.4
  ['bounceban', 'hunter'],        // 63, 6.0
]

export const COMPARE_INDEXED: ReadonlySet<string> = new Set(
  [...COMPARE_PAIRS, ...COMPARE_PROTECTED].map(([a, b]) => versusSlug(a, b)),
)

export function isCompareIndexed(versus: string): boolean {
  return COMPARE_INDEXED.has(versus)
}

// gap-07 4.6 (C6): six Zapier app pages stay indexed.
export const ZAPIER_INDEXED: ReadonlySet<string> = new Set([
  'hubspot', 'salesforce', 'google-sheets', 'google-forms', 'pipedrive', 'intercom',
])

export function isZapierIndexed(slug: string): boolean {
  return ZAPIER_INDEXED.has(slug)
}

// C7 tier C: 11 alternative pages with zero brand demand. Live, linked from
// /alternatives, noindex. (The Search Console pull protected none of them:
// the highest was 21 impressions.)
export const ALT_NOINDEX: ReadonlySet<string> = new Set([
  'myemailverifier', 'scrubby', 'quickemailverification', 'mailfloss', 'bounceless',
  'findymail', 'leadmagic', 'allegrow', 'listmint', 'anymailfinder', 'no2bounce',
])

export function isAltIndexed(slug: string): boolean {
  return !ALT_NOINDEX.has(slug)
}

export const NOINDEX_ROBOTS = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
} as const
