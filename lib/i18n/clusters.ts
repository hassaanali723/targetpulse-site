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
// (`it`, `de`, `es`, `fr`): each page serves every country that speaks the
// language (plans/04-phase2 4.3, plans/10 section 2). The one regioned code is
// `pt-BR`, because the Portuguese demand is Brazilian (plans/12 section 8
// item 9); its URL prefix stays lower-case, `/pt-br/`.

export type Locale = 'en' | 'it' | 'de' | 'es' | 'pt-br' | 'fr'

export const LOCALES: Locale[] = ['en', 'it', 'de', 'es', 'pt-br', 'fr']

/** The hreflang attribute value for a locale (only Brazil differs from its URL prefix). */
export const HREFLANG_CODE: Record<Locale, string> = {
  en: 'en', it: 'it', de: 'de', es: 'es', 'pt-br': 'pt-BR', fr: 'fr',
}

export interface Cluster {
  en: string
  it?: string
  de?: string
  es?: string
  'pt-br'?: string
  fr?: string
}

export const CLUSTERS = {
  // English member is /email-checker (renamed from /tools/catch-all-email-checker
  // on 2026-09-18; both old URLs 301 there, see next.config.js).
  tool: { en: '/email-checker', it: '/it/verifica-email', de: '/de/email-adresse-pruefen', es: '/es/validar-correo', 'pt-br': '/pt-br/verificacao-de-email', fr: '/fr/verifier-adresse-mail' },
  home: { en: '/', it: '/it', de: '/de', es: '/es', 'pt-br': '/pt-br', fr: '/fr' },
  pricing: { en: '/pricing', it: '/it/prezzi', de: '/de/preise', es: '/es/precios', 'pt-br': '/pt-br/precos', fr: '/fr/tarifs' },
  catchall: { en: '/catch-all-verification', it: '/it/verifica-catch-all', de: '/de/catch-all-verifizierung', es: '/es/verificacion-catch-all', 'pt-br': '/pt-br/verificacao-catch-all', fr: '/fr/verification-catch-all' },
  seg: { en: '/seg-email-verification', it: '/it/verifica-seg' },
  integrations: { en: '/integrations', it: '/it/integrazioni', de: '/de/integrationen', es: '/es/integraciones', 'pt-br': '/pt-br/integracoes', fr: '/fr/integrations' },
  contact: { en: '/contact-us', it: '/it/contatti', de: '/de/kontakt', es: '/es/contacto', 'pt-br': '/pt-br/contato', fr: '/fr/contact' },
  signup: { en: '/sign-up', it: '/it/registrati', de: '/de/registrieren', es: '/es/registro', 'pt-br': '/pt-br/cadastro', fr: '/fr/inscription' },
  blog: { en: '/blog', it: '/it/blog', de: '/de/blog', es: '/es/blog', 'pt-br': '/pt-br/blog', fr: '/fr/blog' },
  // One cluster per blog post: every post exists in all six languages, and a
  // localized post's internal links are rewritten through this map (lib/blog.ts).
  postBestTools: { en: '/blog/best-email-verification-tools', it: '/it/blog/migliori-software-per-verificare-le-email', de: '/de/blog/beste-e-mail-verifizierungstools', es: '/es/blog/mejores-herramientas-de-verificacion-de-correo', 'pt-br': '/pt-br/blog/melhores-verificadores-de-email', fr: '/fr/blog/meilleurs-outils-de-verification-email' },
  postGoodBounce: { en: '/blog/good-bounce-rate-for-cold-email', it: '/it/blog/tasso-di-rimbalzo-ideale-cold-email', de: '/de/blog/gute-bounce-rate-cold-e-mail', es: '/es/blog/tasa-de-rebote-aceptable-cold-email', 'pt-br': '/pt-br/blog/taxa-de-bounce-ideal-cold-email', fr: '/fr/blog/bon-taux-de-rebond-cold-email' },
  postAccuracy: { en: '/blog/how-accurate-are-email-verification-tools', it: '/it/blog/quanto-sono-precisi-gli-strumenti-di-verifica-email', de: '/de/blog/wie-genau-sind-e-mail-verifizierungstools', es: '/es/blog/que-tan-precisos-son-los-verificadores-de-correo', 'pt-br': '/pt-br/blog/qual-a-precisao-dos-verificadores-de-email', fr: '/fr/blog/quelle-est-la-precision-des-verificateurs-email' },
  postReduceBounce: { en: '/blog/how-to-reduce-email-bounce-rate', it: '/it/blog/come-ridurre-il-tasso-di-rimbalzo-email', de: '/de/blog/e-mail-bounce-rate-senken', es: '/es/blog/como-reducir-la-tasa-de-rebote', 'pt-br': '/pt-br/blog/como-reduzir-a-taxa-de-bounce', fr: '/fr/blog/comment-reduire-le-taux-de-rebond' },
  postSegVerify: { en: '/blog/how-to-verify-emails-behind-secure-email-gateways', it: '/it/blog/verificare-email-dietro-gateway-di-sicurezza', de: '/de/blog/e-mails-hinter-sicherheits-gateways-pruefen', es: '/es/blog/verificar-correos-tras-un-gateway-de-seguridad', 'pt-br': '/pt-br/blog/verificar-emails-atras-de-gateways-de-seguranca', fr: '/fr/blog/verifier-un-email-derriere-une-passerelle-securisee' },
  postClaude: { en: '/blog/verify-emails-inside-claude-and-chatgpt', it: '/it/blog/verificare-email-in-claude-e-chatgpt', de: '/de/blog/e-mails-in-claude-und-chatgpt-pruefen', es: '/es/blog/verificar-correos-en-claude-y-chatgpt', 'pt-br': '/pt-br/blog/verificar-emails-no-claude-e-no-chatgpt', fr: '/fr/blog/verifier-emails-dans-claude-et-chatgpt' },
  postRisky: { en: '/blog/what-does-risky-mean-in-email-verification', it: '/it/blog/email-rischiosa-cosa-significa', de: '/de/blog/was-bedeutet-riskant-bei-der-e-mail-pruefung', es: '/es/blog/que-significa-arriesgado-al-validar-un-correo', 'pt-br': '/pt-br/blog/o-que-significa-arriscado-ao-verificar-emails', fr: '/fr/blog/que-signifie-risque-verification-email' },
  postCatchAll: { en: '/blog/what-is-a-catch-all-email-address', it: '/it/blog/cos-e-un-indirizzo-email-catch-all', de: '/de/blog/was-ist-eine-catch-all-e-mail-adresse', es: '/es/blog/que-es-un-correo-catch-all', 'pt-br': '/pt-br/blog/o-que-e-um-email-catch-all', fr: '/fr/blog/qu-est-ce-qu-une-adresse-email-catch-all' },
  postSeg: { en: '/blog/what-is-a-secure-email-gateway', it: '/it/blog/cos-e-un-secure-email-gateway', de: '/de/blog/was-ist-ein-secure-email-gateway', es: '/es/blog/que-es-un-secure-email-gateway', 'pt-br': '/pt-br/blog/o-que-e-um-secure-email-gateway', fr: '/fr/blog/qu-est-ce-qu-un-secure-email-gateway' },
  postBounce: { en: '/blog/why-cold-emails-bounce', it: '/it/blog/perche-le-email-rimbalzano', de: '/de/blog/warum-cold-e-mails-bouncen', es: '/es/blog/por-que-rebotan-los-correos', 'pt-br': '/pt-br/blog/por-que-emails-dao-bounce', fr: '/fr/blog/pourquoi-un-email-rebondit' },
  terms: { en: '/terms-of-service', it: '/it/termini', de: '/de/agb', es: '/es/terminos', 'pt-br': '/pt-br/termos', fr: '/fr/conditions' },
  privacy: { en: '/privacy-policy', it: '/it/privacy', de: '/de/datenschutz', es: '/es/privacidad', 'pt-br': '/pt-br/privacidade', fr: '/fr/confidentialite' },
  refund: { en: '/refund-policy', it: '/it/rimborsi', de: '/de/rueckerstattung', es: '/es/reembolsos', 'pt-br': '/pt-br/reembolsos', fr: '/fr/remboursements' },
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
    if (u) out[HREFLANG_CODE[loc]] = `${SITE}${u}`
  }
  return out
}

/**
 * `href` (an English path, optionally with #hash or ?query) rewritten to the
 * same page in `locale` when the page exists there; otherwise unchanged.
 * Used by the blog renderer so a localized post links to localized pages.
 */
export function localizeHref(href: string, locale: Locale): { href: string; localized: boolean } {
  if (locale === 'en' || !href.startsWith('/')) return { href, localized: true }
  const m = /^([^?#]*)(.*)$/.exec(href)
  const path = (m?.[1] || '/').replace(/\/$/, '') || '/'
  const rest = m?.[2] || ''
  if (path === `/${locale}` || path.startsWith(`/${locale}/`)) return { href, localized: true }
  for (const c of Object.values(CLUSTERS) as Cluster[]) {
    if (c.en === path) {
      const there = c[locale]
      return there ? { href: there + rest, localized: true } : { href, localized: false }
    }
  }
  return { href, localized: false }
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
  'pt-br': ['/pt-br/verificacao-de-email/como-saber-se-um-email-existe'],
  fr: ['/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide'],
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
