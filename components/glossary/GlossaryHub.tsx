import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd, itemListLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import { GLOSSARY_CATEGORIES, GLOSSARY_HUB } from '@/lib/i18n/glossary'
import { GLOSSARY_STRINGS } from '@/lib/i18n/glossaryStrings'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { getAllTerms } from '@/lib/glossary'

const SITE = 'https://giggal.ai'

export function hubMetadata(locale: Locale): Metadata {
  const g = GLOSSARY_STRINGS[locale]
  const path = GLOSSARY_HUB[locale]
  return {
    title: { absolute: g.hubTitle },
    description: g.hubDesc,
    alternates: { canonical: path, languages: hreflangAlternates('glossary') },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(locale !== 'en' ? { locale: getStrings(locale as L10nLocale).ogLocale } : {}),
      title: g.h1,
      description: g.hubDesc,
      url: `${SITE}${path}`,
      type: 'website',
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
    },
    twitter: { card: 'summary_large_image', title: g.h1, description: g.hubDesc },
  }
}

export default function GlossaryHub({ locale }: { locale: Locale }) {
  const g = GLOSSARY_STRINGS[locale]
  const hub = GLOSSARY_HUB[locale]
  const home = locale === 'en' ? '/' : getStrings(locale as L10nLocale).home
  const terms = getAllTerms(locale)
  const crumbs = [{ name: g.crumb, path: hub }]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={locale === 'en' ? breadcrumbTrailLd(crumbs) : breadcrumbL10n(locale as L10nLocale, crumbs)} />
      <JsonLd
        data={itemListLd({
          id: `${SITE}${hub}#terms`,
          name: g.listName,
          items: terms.map((t) => ({ name: t.title, url: `${SITE}${hub}/${t.slug}`, description: t.short })),
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      {locale === 'en' ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <nav aria-label={g.breadcrumbAria} className="blog-breadcrumb">
          <Link href={home}>
            <Home aria-hidden="true" />
            {g.home}
          </Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <span className="current" aria-current="page">{g.crumb}</span>
        </nav>
        <div className="max-w-3xl mt-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">{g.h1}</h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">{g.intro}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-14">
        {GLOSSARY_CATEGORIES.map((cat) => {
          const items = terms.filter((t) => t.category === cat)
          if (items.length === 0) return null
          return (
            <div key={cat}>
              <h2 className="text-2xl font-black tracking-tight text-slate-900">{g.categories[cat]}</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`${hub}/${t.slug}`}
                      className="block h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-900/5"
                    >
                      <span className="block text-base font-black tracking-tight text-slate-900">{t.title}</span>
                      <span className="mt-2 block text-sm font-medium leading-relaxed text-slate-600 line-clamp-3">{t.short}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>

      {locale === 'en' ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
