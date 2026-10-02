import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, itemListLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, localizeHref, type Locale } from '@/lib/i18n/clusters'
import type { L10nLocale } from '@/lib/i18n/strings'
import {
  DISPOSABLE_PROVIDERS,
  CATEGORY_ORDER,
  MORE_DISPOSABLE_DOMAINS,
  type ProviderCategory,
} from '@/lib/data/disposableProviders'
import { PROVIDERS_STRINGS } from '@/lib/i18n/disposableProvidersStrings'
import { LocalLink, Rich } from '@/components/disposable/LocalText'
import { ArrowRight, Search, Clock, Users, GitFork, Code2 } from 'lucide-react'

// The disposable email providers directory, one component for all six
// languages. Routes: app/(en)/disposable-email-providers and one per locale,
// listed in CLUSTERS.disposableProviders. Text: lib/i18n/disposableProvidersStrings.ts.

const SITE = 'https://giggal.ai'

export function providersMetadata(locale: Locale): Metadata {
  const s = PROVIDERS_STRINGS[locale]
  const path = CLUSTERS.disposableProviders[locale]
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('disposableProviders') },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(s.ogLocale ? { locale: s.ogLocale } : {}),
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: s.ogAlt }],
      title: s.ogTitle,
      description: s.description,
      url: `${SITE}${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description: s.description,
    },
  }
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

const CATEGORY_ICON: Record<ProviderCategory, typeof Clock> = {
  timed: Clock,
  public: Users,
  alias: GitFork,
  api: Code2,
}

const CATEGORY_BADGE: Record<ProviderCategory, string> = {
  timed: 'bg-rose-50 text-rose-700',
  public: 'bg-amber-50 text-amber-700',
  alias: 'bg-indigo-50 text-indigo-700',
  api: 'bg-violet-50 text-violet-700',
}

export default function ProvidersPage({ locale }: { locale: Locale }) {
  const s = PROVIDERS_STRINGS[locale]
  const path = CLUSTERS.disposableProviders[locale]
  const isEn = locale === 'en'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={isEn ? breadcrumbLd(s.crumb, path) : breadcrumbL10n(locale as L10nLocale, [{ name: s.crumb, path }])}
      />
      <JsonLd data={faqPageLd(s.faqs)} />
      <JsonLd
        data={itemListLd({
          id: `${SITE}${path}#providers`,
          name: s.itemListName,
          description: s.itemListDesc,
          items: DISPOSABLE_PROVIDERS.map((p) => ({
            name: p.name,
            url: `${SITE}${path}`,
            description: s.blurbs[p.name],
          })),
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-[120px] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {s.h1}{' '}
          <span className="bg-gradient-to-r from-rose-600 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
            {s.h1Accent}
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          {s.heroIntro}
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <LocalLink
            href="/disposable-email-checker"
            locale={locale}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
          >
            {s.ctaCheck}
            <ArrowRight className="w-4 h-4" />
          </LocalLink>
          <LocalLink
            href="/email-validation-api"
            locale={locale}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 transition-colors"
          >
            {s.ctaBlock}
          </LocalLink>
        </div>
      </section>

      {/* CATEGORY EXPLAINER */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-10 border-t border-slate-200 space-y-6">
        <div className="space-y-3 max-w-3xl">
          <h2 className={sectionTitle}>{s.kindsTitle}</h2>
          <p className={proseP}>{s.kindsIntro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORY_ORDER.map((key) => {
            const Icon = CATEGORY_ICON[key]
            const c = s.categories[key]
            return (
              <div key={key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${CATEGORY_BADGE[key]}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{c.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* PROVIDERS GRID */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <div className="space-y-3 max-w-3xl">
          <h2 className={sectionTitle}>{s.listTitle}</h2>
          <p className={proseP}>{s.listIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DISPOSABLE_PROVIDERS.map((p) => {
            const Icon = CATEGORY_ICON[p.category]
            return (
              <div
                key={p.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-300 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900">{p.name}</h3>
                  <span
                    className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${CATEGORY_BADGE[p.category]}`}
                  >
                    <Icon className="w-3 h-3" />
                    {s.categories[p.category].badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{s.blurbs[p.name]}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.domains.map((d) => (
                    <code key={d} className="text-[11px] font-mono bg-slate-100 text-slate-600 rounded px-1.5 py-0.5">
                      {d}
                    </code>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* MORE DOMAINS LIST */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <div className="space-y-3 max-w-3xl">
          <h2 className={sectionTitle}>{s.moreTitle}</h2>
          <p className={proseP}>{s.moreIntro(MORE_DISPOSABLE_DOMAINS.length)}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
            {MORE_DISPOSABLE_DOMAINS.map((d) => (
              <div key={d} className="text-xs font-mono text-slate-600 py-1 break-all">
                {d}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/70 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-700 font-medium">{s.staleNote}</p>
          <LocalLink
            href="/disposable-email-checker"
            locale={locale}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
            {s.ctaCheck}
          </LocalLink>
        </div>
      </section>

      {/* IS GMAIL/OUTLOOK DISPOSABLE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.gmailTitle}</h2>
        {s.gmailParas.map((para, i) => (
          <p key={i} className={proseP}>
            <Rich text={para} locale={locale} />
          </p>
        ))}
      </section>

      {/* HOW TO BLOCK */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.blockTitle}</h2>
        <p className={proseP}>{s.blockIntro}</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base font-medium leading-relaxed marker:text-indigo-500">
          {s.blockItems.map((item, i) => (
            <li key={i}>
              <Rich text={item} locale={locale} />
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {isEn ? (
        <AltCtaBand headline={s.ctaBand} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaBand} />
      )}

      {/* RELATED LINKS */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.related.map((l) => {
            const localized = localizeHref(l.href, locale).localized
            return (
              <LocalLink
                key={l.href}
                href={l.href}
                locale={locale}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-300 hover:shadow-md transition-all card-vivid-shadow"
              >
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    <span>
                      {l.label}
                      {localized ? '' : s.enSuffix}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{l.desc}</p>
                </div>
              </LocalLink>
            )
          })}
        </div>
      </section>

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
