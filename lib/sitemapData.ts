// Single source of truth for every URL across the five sitemaps.
//
// Split behind a sitemap index so Search Console reports indexing per section.
// One flat 330-URL sitemap gave no signal about which sections were failing;
// separately, a section that stops being crawled is visible immediately.
//
// lastmod values are genuine content-change dates carried over from the
// previous single sitemap, kept per page. They are never build time: a
// build-time lastmod claims every page changed on every deploy, which teaches
// Google to ignore the field. Where no real date exists the element is omitted.
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'
import { allPairs } from '@/lib/compare'
import { ZAPIER_APPS } from '@/lib/zapierApps'
import { isAltIndexed, isCompareIndexed, isZapierIndexed, pastSitemapGrace } from '@/lib/indexPolicy'
import { getAllPosts } from '@/lib/blog'
import { italianUrls, localeUrls } from '@/lib/i18n/clusters'

export const SITE = 'https://giggal.ai'

export interface SitemapEntry {
  path: string
  lastModified?: string
}

// ── core ────────────────────────────────────────────────────────────────
// /sign-up is the marketing landing page on this domain. The app's own sign-up
// lives on emailverifier.giggal.ai — different host, different content, no
// canonical relationship — so it is not a duplicate and is not listed here.
export function coreEntries(): SitemapEntry[] {
  return [
    // 2026-09-13: title, H1 and copy retarget (plans/07 in targetpulse-seo).
    // 2026-09-14: hero retarget off SEG onto bulk (plans/09).
    { path: '', lastModified: '2026-09-14' },
    { path: '/catch-all-verification', lastModified: '2026-09-13' },
    { path: '/seg-email-verification', lastModified: '2026-08-02' },
    ...(MIMECAST_PAGE_LIVE
      ? [{ path: '/mimecast-email-verification', lastModified: '2026-08-02' }]
      : []),
    { path: '/email-checker', lastModified: '2026-09-18' },
    { path: '/mcp', lastModified: '2026-09-13' },
    // API reference. Kept in the sitemap — the URL set is unchanged from the
    // previous single sitemap, only regrouped.
    { path: '/public/docs', lastModified: '2026-09-13' },
    { path: '/pricing', lastModified: '2026-09-13' },
    { path: '/sign-up', lastModified: '2026-07-21' },
    { path: '/affiliates', lastModified: '2026-09-13' },
    { path: '/contact-us', lastModified: '2026-07-21' },
    { path: '/privacy-policy', lastModified: '2026-02-04' },
    { path: '/terms-of-service', lastModified: '2026-02-04' },
    { path: '/refund-policy', lastModified: '2026-02-04' },
  ]
}

// ── alternatives ────────────────────────────────────────────────────────
// Per-brand release dates, preserved verbatim from the previous sitemap.
const ALT_DATES: Record<string, string> = {
  zerobounce: '2026-09-13',
  neverbounce: '2026-09-13',
  bounceban: '2026-08-06',
  millionverifier: '2026-08-06',
  reoon: '2026-08-06',
  debounce: '2026-08-06',
  bouncer: '2026-08-12',
  emailable: '2026-08-12',
  clearout: '2026-08-12',
  kickbox: '2026-08-12',
  emaillistverify: '2026-08-12',
  myemailverifier: '2026-08-12',
  briteverify: '2026-08-12',
  scrubby: '2026-09-13',
  quickemailverification: '2026-08-12',
  mailfloss: '2026-08-12',
  bounceless: '2026-08-12',
  hunter: '2026-08-12',
  snovio: '2026-08-12',
  apollo: '2026-08-12',
  findymail: '2026-08-21',
  leadmagic: '2026-08-21',
  allegrow: '2026-08-21',
  listmint: '2026-08-21',
  anymailfinder: '2026-08-21',
  no2bounce: '2026-08-21',
  instantly: '2026-08-21',
}

export function alternativesEntries(): SitemapEntry[] {
  return [
    { path: '/alternatives', lastModified: '2026-08-21' },
    ...Object.entries(ALT_DATES)
      .filter(([slug]) => !pastSitemapGrace() || isAltIndexed(slug))
      .map(([slug, lastModified]) => ({
        path: `/${slug}-alternative`,
        lastModified,
      })),
  ]
}

// ── compare ─────────────────────────────────────────────────────────────
export function compareEntries(): SitemapEntry[] {
  // Noindexed pairs stay listed for one crawl cycle after the noindex ships,
  // then leave (lib/indexPolicy.ts).
  const drop = pastSitemapGrace()
  return [
    { path: '/compare', lastModified: '2026-08-16' },
    ...allPairs()
      .filter(({ a, b }) => !drop || isCompareIndexed(`${a}-vs-${b}`))
      .map(({ a, b }) => ({
        path: `/compare/${a}-vs-${b}`,
        lastModified: '2026-08-16',
      })),
  ]
}

// ── integrations ────────────────────────────────────────────────────────
export function integrationsEntries(): SitemapEntry[] {
  return [
    { path: '/integrations', lastModified: '2026-08-12' },
    { path: '/integrations/zapier', lastModified: '2026-08-14' },
    { path: '/integrations/n8n', lastModified: '2026-08-16' },
    ...ZAPIER_APPS.filter((a) => !pastSitemapGrace() || isZapierIndexed(a.slug)).map((a) => ({
      path: `/integrations/zapier/${a.slug}`,
      lastModified: '2026-08-14',
    })),
  ]
}

// ── blog ────────────────────────────────────────────────────────────────
export function blogEntries(): SitemapEntry[] {
  const posts = getAllPosts()
  // The index's real last-change date is the newest post's date. Omitted rather
  // than faked when there are no posts.
  const newest = posts.reduce<string | undefined>((max, p) => {
    const d = p.updated || p.date
    return d && (!max || d > max) ? d : max
  }, undefined)
  return [
    { path: '/blog', lastModified: newest },
    ...posts.map((p) => ({
      path: `/blog/${p.slug}`,
      lastModified: p.updated || p.date || undefined,
    })),
  ]
}

// ── italian ─────────────────────────────────────────────────────────────
// Every Italian URL, from the cluster map plus the Italian-only pages. The
// lastmod is the launch date for the static pages and the post's own date
// for the blog; both change only when the content does.
const IT_LAUNCH = '2026-09-14'
// Pages carry the language's ship date; blog posts carry their own date, and
// the blog hub the date of its newest post.
function localeEntries(locale: 'it' | 'de' | 'es' | 'pt-br' | 'fr', launch: string): SitemapEntry[] {
  const posts = getAllPosts(locale)
  const hub = `/${locale}/blog`
  const postDate = new Map(posts.map((p) => [`${hub}/${p.slug}`, p.updated || p.date]))
  const newest = posts.map((p) => p.updated || p.date).sort().pop()
  return localeUrls(locale)
    .filter((u) => u === hub || postDate.has(u) || !u.startsWith(`${hub}/`))
    .map((path) => ({
      path,
      lastModified: postDate.get(path) || (path === hub && newest ? newest : launch),
    }))
}
export function itEntries(): SitemapEntry[] {
  return localeEntries('it', IT_LAUNCH)
}


// German and Spanish: no blog, so every entry is a page with the wave's ship
// date until a page's content changes (plans/10).
const DE_LAUNCH = '2026-09-16'
const ES_LAUNCH = '2026-09-16'
export function deEntries(): SitemapEntry[] {
  return localeEntries('de', DE_LAUNCH)
}
export function esEntries(): SitemapEntry[] {
  return localeEntries('es', ES_LAUNCH)
}

// Portuguese (Brazil) and French: same shape (plans/12).
const PT_BR_LAUNCH = '2026-09-21'
const FR_LAUNCH = '2026-09-21'
export function ptBrEntries(): SitemapEntry[] {
  return localeEntries('pt-br', PT_BR_LAUNCH)
}
export function frEntries(): SitemapEntry[] {
  return localeEntries('fr', FR_LAUNCH)
}

// ── XML rendering ───────────────────────────────────────────────────────
function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function renderUrlSet(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      const loc = `    <loc>${escapeXml(`${SITE}${e.path}`)}</loc>`
      const mod = e.lastModified ? `\n    <lastmod>${e.lastModified}</lastmod>` : ''
      return `  <url>\n${loc}${mod}\n  </url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function renderSitemapIndex(names: string[]): string {
  const items = names
    .map((n) => `  <sitemap>\n    <loc>${SITE}/${n}</loc>\n  </sitemap>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`
}

export const XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
}
