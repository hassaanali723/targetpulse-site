// One map of every page that exists in more than one language.
//
// Each cluster is a set of URLs that say the same thing in different
// languages. From it we generate the hreflang tags (through Next's
// metadata.alternates.languages) on every member, and the language switcher
// in the navbar and footer. A member is listed only once it is live and
// self-canonical: an hreflang tag that points at a 404 or at a page that
// canonicalises elsewhere is worse than no tag.
//
// `x-default` is always the English member. Language codes are language-only
// (`it`, not `it-IT`): the Italian page serves every Italian-speaking country.

export type Locale = 'en' | 'it'

export const LOCALES: Locale[] = ['en', 'it']

export interface Cluster {
  en: string
  it?: string
}

export const CLUSTERS = {
  // The English member of the tool cluster is the catch-all checker until a
  // generic /email-verifier page exists; then this one line changes.
  tool: { en: '/tools/catch-all-email-checker', it: '/it/verifica-email' },
  home: { en: '/', it: '/it' },
  pricing: { en: '/pricing', it: '/it/prezzi' },
  catchall: { en: '/catch-all-verification', it: '/it/verifica-catch-all' },
  seg: { en: '/seg-email-verification', it: '/it/verifica-seg' },
  integrations: { en: '/integrations', it: '/it/integrazioni' },
  contact: { en: '/contact-us', it: '/it/contatti' },
  signup: { en: '/sign-up', it: '/it/registrati' },
  blog: { en: '/blog', it: '/it/blog' },
  postCatchAll: { en: '/blog/what-is-a-catch-all-email-address', it: '/it/blog/cos-e-un-indirizzo-email-catch-all' },
  postBounce: { en: '/blog/why-cold-emails-bounce', it: '/it/blog/perche-le-email-rimbalzano' },
  postAccuracy: { en: '/blog/how-accurate-are-email-verification-tools', it: '/it/blog/quanto-sono-precisi-gli-strumenti-di-verifica-email' },
  terms: { en: '/terms-of-service', it: '/it/termini' },
  privacy: { en: '/privacy-policy', it: '/it/privacy' },
  refund: { en: '/refund-policy', it: '/it/rimborsi' },
} satisfies Record<string, Cluster>

export type ClusterId = keyof typeof CLUSTERS

const SITE = 'https://giggal.ai'

/**
 * The `alternates.languages` object for a page in `clusterId`. Absolute
 * URLs, every live member plus x-default, so both the English and the
 * Italian page of a cluster carry the same reciprocal set.
 */
export function hreflangAlternates(clusterId: ClusterId): Record<string, string> {
  const c: Cluster = CLUSTERS[clusterId]
  const out: Record<string, string> = { 'x-default': `${SITE}${c.en}`, en: `${SITE}${c.en}` }
  if (c.it) out.it = `${SITE}${c.it}`
  return out
}

/** The URL of `locale`'s page in the cluster, or that locale's home if the page has no alternate. */
export function alternateFor(clusterId: ClusterId | undefined, locale: Locale): string {
  if (clusterId) {
    const c: Cluster = CLUSTERS[clusterId]
    const u = c[locale]
    if (u) return u
  }
  return CLUSTERS.home[locale] ?? '/'
}

// Italian pages with no English counterpart yet. They carry no hreflang (a
// single-language page needs none) and are listed here only so the sitemap
// and llms.txt know about them. The English how-to child is a later build;
// when it ships, the pair moves into CLUSTERS.
export const IT_ONLY_URLS = ['/it/verifica-email/email-esistente']

/** Every Italian URL, for the sitemap and llms.txt. */
export function italianUrls(): string[] {
  const clustered = Object.values(CLUSTERS)
    .map((c) => (c as Cluster).it)
    .filter((u): u is string => !!u)
  return [...clustered, ...IT_ONLY_URLS]
}
