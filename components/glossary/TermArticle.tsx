import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import JsonLd from '@/components/JsonLd'
import { ORG_ID, breadcrumbTrailLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { HREFLANG_CODE, hreflangAlternates, localizeHref, type ClusterId, type Locale } from '@/lib/i18n/clusters'
import { GLOSSARY_HUB, glossaryLocalSlug } from '@/lib/i18n/glossary'
import { GLOSSARY_STRINGS } from '@/lib/i18n/glossaryStrings'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { getTermBySlug, getTermSlugs } from '@/lib/glossary'

// One glossary term, any language. English uses the English chrome, the
// others the localized chrome; everything else is shared.

const SITE = 'https://giggal.ai'

function clusterId(en: string): ClusterId {
  return ('gloss' + en.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')) as ClusterId
}

function formatDateEn(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}

export function termParams(locale: Locale) {
  return getTermSlugs(locale).map((slug) => ({ slug }))
}

// hreflang lists only the languages whose file exists: a tag that points at a
// term not yet translated would point at a 404.
function liveAlternates(en: string): Record<string, string> {
  const all = hreflangAlternates(clusterId(en))
  const out: Record<string, string> = {}
  for (const [code, url] of Object.entries(all)) {
    const locale = (Object.keys(HREFLANG_CODE) as Locale[]).find((l) => HREFLANG_CODE[l] === code) ?? (code === 'x-default' ? 'en' : undefined)
    if (locale && getTermBySlug(glossaryLocalSlug(en, locale), locale)) out[code] = url
  }
  return out
}

export function termMetadata(locale: Locale, slug: string): Metadata {
  const term = getTermBySlug(slug, locale)
  if (!term) return {}
  const path = `${GLOSSARY_HUB[locale]}/${term.slug}`
  return {
    title: term.title,
    description: term.description,
    alternates: { canonical: path, languages: liveAlternates(term.en) },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(locale !== 'en' ? { locale: getStrings(locale).ogLocale } : {}),
      title: term.title,
      description: term.description,
      url: `${SITE}${path}`,
      type: 'article',
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
    },
    twitter: { card: 'summary_large_image', title: term.title, description: term.description },
  }
}

export default function TermArticle({ locale, slug }: { locale: Locale; slug: string }) {
  const term = getTermBySlug(slug, locale)
  if (!term) notFound()
  const g = GLOSSARY_STRINGS[locale]
  const hub = GLOSSARY_HUB[locale]
  const path = `${hub}/${term.slug}`
  const home = locale === 'en' ? '/' : getStrings(locale as L10nLocale).home
  const checker = localizeHref('/email-checker', locale).href
  const related = term.related
    .map((en) => {
      const s = glossaryLocalSlug(en, locale)
      const t = getTermBySlug(s, locale)
      return t ? { href: `${hub}/${s}`, title: t.title, short: t.short } : null
    })
    .filter((x): x is { href: string; title: string; short: string } => x !== null)
  const dateLabel = locale === 'en' ? formatDateEn(term.updated || term.date) : getStrings(locale as L10nLocale).formatDate(term.updated || term.date)

  const crumbs = [
    { name: g.crumb, path: hub },
    { name: term.title, path },
  ]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={locale === 'en' ? breadcrumbTrailLd(crumbs) : breadcrumbL10n(locale as L10nLocale, crumbs)} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          '@id': `${SITE}${path}#term`,
          name: term.title,
          description: term.short,
          // No inLanguage here: schema.org allows it on CreativeWork (the
          // Article below carries it) but not on DefinedTerm, and the
          // validator flagged it on every glossary page.
          url: `${SITE}${path}`,
          inDefinedTermSet: { '@type': 'DefinedTermSet', '@id': `${SITE}${hub}#set`, name: g.listName, url: `${SITE}${hub}` },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${SITE}${path}#article`,
          headline: term.title,
          description: term.description,
          inLanguage: HREFLANG_CODE[locale],
          datePublished: term.date,
          dateModified: term.updated || term.date,
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${path}` },
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      {locale === 'en' ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* Same container width as the hub and the navbar, so the left edge lines up. */}
      <article className="mx-auto max-w-6xl px-6 pt-28 md:pt-32 pb-16">
        <nav aria-label={g.breadcrumbAria} className="blog-breadcrumb">
          <Link href={home}>
            <Home aria-hidden="true" />
            {g.home}
          </Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <Link href={hub}>{g.crumb}</Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <span className="current" aria-current="page">{term.title}</span>
        </nav>

        <p className="mt-8 text-[12px] font-bold uppercase tracking-wider text-indigo-600">{g.categories[term.category]}</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-slate-900">{term.title}</h1>
        <p className="mt-5 max-w-4xl text-lg md:text-xl font-medium leading-relaxed text-slate-700">{term.short}</p>
        <div className="mt-4 text-sm text-slate-500 font-medium">
          {g.updated} <time dateTime={term.updated || term.date}>{dateLabel}</time>
        </div>

        <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: term.contentHtml }} />

        <div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
          <Link href={checker} className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-900">
            {g.checkCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {related.length > 0 && (
          <section className="mt-12" aria-labelledby="related-terms">
            <h2 id="related-terms" className="text-xl font-black tracking-tight text-slate-900">{g.related}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="block h-full rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/40">
                    <span className="block text-sm font-bold text-slate-900">{r.title}</span>
                    <span className="mt-1 block text-[13px] font-medium leading-relaxed text-slate-600 line-clamp-2">{r.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {locale === 'en' ? (
        <AltCtaBand headline={term.cta || g.defaultCta} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={term.cta || g.defaultCta} />
      )}
      {locale === 'en' ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
