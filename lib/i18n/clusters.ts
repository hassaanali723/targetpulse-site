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
// (`it`, `de`, `es`): each page serves every country that speaks the language
// (plans/04-phase2 4.3, plans/10 section 2).

export type Locale = 'en' | 'it' | 'de' | 'es'

export const LOCALES: Locale[] = ['en', 'it', 'de', 'es']

export interface Cluster {
  en: string
  it?: string
  de?: string
  es?: string
}

export const CLUSTERS = {
  // The English member of the tool cluster is the catch-all checker until a
  // generic /email-verifier page exists; then this one line changes.
  tool: { en: '/tools/catch-all-email-checker', it: '/it/verifica-email', de: '/de/email-adresse-pruefen', es: '/es/validar-correo' },
  home: { en: '/', it: '/it', de: '/de', es: '/es' },
  pricing: { en: '/pricing', it: '/it/prezzi', de: '/de/preise', es: '/es/precios' },
  catchall: { en: '/catch-all-verification', it: '/it/verifica-catch-all', de: '/de/catch-all-verifizierung', es: '/es/verificacion-catch-all' },
  seg: { en: '/seg-email-verification', it: '/it/verifica-seg' },
  integrations: { en: '/integrations', it: '/it/integrazioni', de: '/de/integrationen', es: '/es/integraciones' },
  contact: { en: '/contact-us', it: '/it/contatti', de: '/de/kontakt', es: '/es/contacto' },
  signup: { en: '/sign-up', it: '/it/registrati', de: '/de/registrieren', es: '/es/registro' },
  blog: { en: '/blog', it: '/it/blog' },
  postCatchAll: { en: '/blog/what-is-a-catch-all-email-address', it: '/it/blog/cos-e-un-indirizzo-email-catch-all' },
  postBounce: { en: '/blog/why-cold-emails-bounce', it: '/it/blog/perche-le-email-rimbalzano' },
  postAccuracy: { en: '/blog/how-accurate-are-email-verification-tools', it: '/it/blog/quanto-sono-precisi-gli-strumenti-di-verifica-email' },
  terms: { en: '/terms-of-service', it: '/it/termini', de: '/de/agb', es: '/es/terminos' },
  privacy: { en: '/privacy-policy', it: '/it/privacy', de: '/de/datenschutz', es: '/es/privacidad' },
  refund: { en: '/refund-policy', it: '/it/rimborsi', de: '/de/rueckerstattung', es: '/es/reembolsos' },
} satisfies Record<string, Cluster>

export type ClusterId = keyof typeof CLUSTERS

const SITE = 'https://giggal.ai'

/**
 * The `alternates.languages` object for a page in `clusterId`. Absolute
 * URLs, every live member plus x-default, so every page of a cluster
 * carries the same reciprocal set.
 */
export function hreflangAlternates(clusterId: ClusterId): Record<string, string> {
  const c: Cluster = CLUSTERS[clusterId]
  const out: Record<string, string> = { 'x-default': `${SITE}${c.en}`, en: `${SITE}${c.en}` }
  for (const loc of LOCALES) {
    if (loc === 'en') continue
    const u = c[loc]
    if (u) out[loc] = `${SITE}${u}`
  }
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

// Localized pages with no English counterpart yet (the how-to children). They
// carry no hreflang (a single-language page needs none) and are listed here
// only so the sitemaps and llms.txt know about them. When the English child
// ships, each pair moves into CLUSTERS.
export const LOCALE_ONLY_URLS: Record<Exclude<Locale, 'en'>, string[]> = {
  it: ['/it/verifica-email/email-esistente'],
  de: ['/de/email-adresse-pruefen/gibt-es-diese-email-adresse'],
  es: ['/es/validar-correo/como-saber-si-un-correo-existe'],
}

/** Every URL of one locale, for its sitemap and llms.txt. */
export function localeUrls(locale: Exclude<Locale, 'en'>): string[] {
  const clustered = Object.values(CLUSTERS)
    .map((c) => (c as Cluster)[locale])
    .filter((u): u is string => !!u)
  return [...clustered, ...LOCALE_ONLY_URLS[locale]]
}

// Kept for the callers written for the Italian wave.
export const IT_ONLY_URLS = LOCALE_ONLY_URLS.it
export function italianUrls(): string[] {
  return localeUrls('it')
}
