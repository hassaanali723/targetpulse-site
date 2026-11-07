import type { Metadata } from 'next'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import JsonLd from '@/components/JsonLd'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import RatingChips from '@/components/landing/RatingChips'
import AwardRow from '@/components/landing/AwardRow'
import { RAW_OFFERS } from '@/components/landing/pricingOffers'
import { breadcrumbLd, faqPageLd, emailListCleaningServiceLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import { gapAfter } from '@/lib/i18n/cjk'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { getListCleaningStrings, type ListCleaningStrings } from '@/lib/i18n/pages/listCleaningStrings'
import { LocalLink, Rich } from '@/components/disposable/LocalText'

// The email list cleaning page, one component for every language it ships in. Routes:
// app/(en)/email-list-cleaning and one per locale, listed in CLUSTERS.listCleaning.
// Text: lib/i18n/pages/listCleaningStrings.ts.

const SITE = 'https://giggal.ai'
const EN_PATH = '/email-list-cleaning'
const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'

/** Pages of this cluster. Falls back to the English path until the cluster is added. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.listCleaning as Partial<Record<Locale, string>>)[locale] ?? EN_PATH
}

/** hreflang alternates once the cluster exists; nothing before that. */
function languagesOf(): Record<string, string> | undefined {
  return hreflangAlternates('listCleaning')
}

export function listCleaningMetadata(locale: Locale): Metadata {
  const s = getListCleaningStrings(locale)
  const path = pathOf(locale)
  const languages = languagesOf()
  return {
    title: {
      absolute: s.metaTitle,
    },
    description: s.description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(s.ogLocale ? { locale: s.ogLocale } : {}),
      title: s.ogTitle,
      description: s.description,
      url: `${SITE}${path}`,
      type: 'website',
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: s.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description: s.description,
      images: ['/og-card.png'],
    },
  }
}

/**
 * The Service JSON-LD. English keeps the shared emailListCleaningServiceLd() so its
 * output does not change; other languages get the same shape with their own URL and text.
 */
function serviceLd(locale: Locale, s: ListCleaningStrings, path: string): Record<string, unknown> {
  if (locale === 'en') return emailListCleaningServiceLd()
  const prices = RAW_OFFERS.map((o) => o.price)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}${path}#service`,
    url: `${SITE}${path}`,
    name: s.serviceName ?? 'Giggal.ai Email List Cleaning Service',
    serviceType: s.serviceType ?? 'Email list cleaning and verification',
    description: s.description,
    provider: {
      '@type': 'Organization',
      name: 'Giggal.ai',
      url: SITE,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: RAW_OFFERS.length,
    },
  }
}

function StatusBadge({ tone, children }: { tone: 'good' | 'bad' | 'warn'; children: React.ReactNode }) {
  const text = { good: 'text-emerald-700', bad: 'text-rose-700', warn: 'text-amber-700' }[tone]
  return (
    <span className={`shrink-0 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ring-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ${text}`}>
      {children}
    </span>
  )
}

interface BeforeAfterData {
  total: number | string
  valid: number | string
  invalid: number | string
  disposable: number | string
  role: number | string
  duplicates: number | string
  catchAllValid: number | string
  catchAllInvalid: number | string
  unknown: number | string
  removedPct: number | string
}

// TODO: add real anonymized before/after numbers
const beforeAfter: BeforeAfterData | null = null

function BeforeAfterSection({ data, s }: { data: BeforeAfterData | null; s: ListCleaningStrings }) {
  if (!data) return null
  // Same order as s.beforeAfterRows. The first row is bold.
  const values = [
    data.total,
    data.valid,
    data.invalid,
    data.disposable,
    data.role,
    data.duplicates,
    data.catchAllValid,
    data.catchAllInvalid,
    data.unknown,
  ]
  return (
    <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        {s.beforeAfterTitle}
      </h2>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
        {s.beforeAfterIntro}
      </p>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75">
              <th className="py-3.5 px-4 font-bold text-slate-900">{s.beforeAfterCols[0]}</th>
              <th className="py-3.5 px-4 font-bold text-slate-900 text-right">{s.beforeAfterCols[1]}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {s.beforeAfterRows.map((label, i) => (
              <tr key={i}>
                <td className={i === 0 ? 'py-3 px-4 font-semibold text-slate-800' : 'py-3 px-4 text-slate-700'}>{label}</td>
                <td className="py-3 px-4 text-slate-700 text-right">{values[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
        {s.beforeAfterOutro.replace('{pct}', String(data.removedPct)).replace('{kept}', String(data.catchAllValid))}
      </p>
    </section>
  )
}

// Sample rows in the hero illustration. Addresses are the same in every language.
const DEMO_ROWS = [
  { email: 'anna@acme.com', ok: true },
  { email: 'j.doe@globex.io', ok: false },
  { email: 'sara@northwind.co', ok: true },
  { email: 'mark@initech.com', ok: true },
]

// Colour of the "What to do" cell, in the same order as s.removesRows.
const REMOVE_ACTION_CLASS = [
  'text-rose-700 font-semibold',
  'text-rose-700 font-semibold',
  'text-slate-700 font-medium',
  'text-slate-700 font-medium',
  'text-emerald-700 font-semibold',
  'text-amber-700 font-semibold',
]

// Related cards, in the same order as s.related. English paths; LocalLink routes
// each one to the reader's language when that page exists.
const RELATED_HREFS = [
  '/email-checker',
  '/disposable-email-checker',
  '/catch-all-verification',
  '/blog/how-accurate-are-email-verification-tools',
  '/blog/why-cold-emails-bounce',
  '/blog/how-to-reduce-email-bounce-rate',
  '/blog/good-bounce-rate-for-cold-email',
  '/email-verification-api',
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ListCleaningPage({ locale }: { locale: Locale }) {
  const s = getListCleaningStrings(locale)
  const path = pathOf(locale)
  const isEn = locale === 'en'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={serviceLd(locale, s, path)} />
      <JsonLd data={isEn ? breadcrumbLd(s.crumb, path) : breadcrumbL10n(locale as L10nLocale, [{ name: s.crumb, path }])} />
      <JsonLd data={faqPageLd(s.faqs)} />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {s.h1Lead}{gapAfter(s.h1Lead)}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            {s.h1Highlight}
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          {s.heroIntro}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.02] active:scale-95 duration-200"
          >
            {s.heroCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-800 font-extrabold rounded-2xl text-base border border-slate-200 transition-all shadow-sm"
          >
            {s.heroPricing}
          </a>
        </div>

        <p className="text-xs md:text-sm text-slate-500 font-medium">
          {s.heroNote}
        </p>

        {/* Bulk-results illustration */}
        <div className="max-w-md mx-auto mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl text-left">
          <div className="flex items-center justify-between text-sm pb-3 border-b border-slate-100">
            <span className="font-semibold text-slate-800 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              leads.csv
            </span>
            <StatusBadge tone="good">{s.demoDone}</StatusBadge>
          </div>
          <ul className="mt-3 divide-y divide-slate-100">
            {DEMO_ROWS.map((r) => (
              <li key={r.email} className="flex items-center justify-between gap-3 py-2.5">
                <span className="text-sm text-slate-700 truncate">{r.email}</span>
                <StatusBadge tone={r.ok ? 'good' : 'bad'}>{r.ok ? s.demoDeliverable : s.demoUndeliverable}</StatusBadge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Review-site ratings and award badges, as on /email-checker and /bulk-email-verifier. */}
      <div className="max-w-6xl mx-auto px-6">
        <RatingChips
          {...(s.ratings
            ? { reviews: s.ratings.reviews, ratedAria: s.ratings.ratedAria, decimalComma: locale !== 'ja' && locale !== 'ko' }
            : {})}
        />
      </div>
      <AwardRow {...(s.awards ?? {})} />

      {/* ── 2. THREE STEPS ───────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>{s.stepsTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {s.steps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center text-lg">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. WHAT IT REMOVES ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.removesTitle}</h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-4 px-5 font-bold text-slate-900 min-w-[140px]">{s.removesCols[0]}</th>
                <th className="py-4 px-5 font-bold text-slate-900 min-w-[260px]">{s.removesCols[1]}</th>
                <th className="py-4 px-5 font-bold text-slate-900 min-w-[180px]">{s.removesCols[2]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {s.removesRows.map((row, i) => (
                <tr key={i}>
                  <td className="py-3.5 px-5 font-semibold text-slate-900">{row.result}</td>
                  <td className="py-3.5 px-5 text-slate-600">{row.meaning}</td>
                  <td className={`py-3.5 px-5 ${REMOVE_ACTION_CLASS[i]}`}>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={proseP}>
          <Rich text={s.removesOutro} locale={locale} />
        </p>
      </section>

      {/* ── 4. WHY MANY CLEANERS FLAG GOOD LEADS AS RISKY ──────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.riskyTitle}</h2>
        {s.riskyParas.map((para, i) => (
          <p key={i} className={proseP}>
            <Rich text={para} locale={locale} />
          </p>
        ))}
      </section>

      {/* ── 5. BEFORE AND AFTER (DATA DRIVEN) ──────────────────── */}
      <BeforeAfterSection data={beforeAfter} s={s} />

      {/* ── 6. PRICING ─────────────────────────────────────────── */}
      <section id="pricing" className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>{s.pricingTitle}</h2>
          <p className={proseP}>
            {s.pricingIntro}
          </p>
        </div>

        {isEn ? <PricingTable /> : <PricingTable strings={getStrings(locale as L10nLocale).pricing} />}

        <p className="text-center text-sm md:text-base text-slate-600 font-medium pt-2">
          <Rich text={s.pricingFootnote} locale={locale} />
        </p>
      </section>

      {/* ── 7. HOW OFTEN TO CLEAN ──────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.oftenTitle}</h2>
        <p className={proseP}>
          {s.oftenIntro}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base font-medium leading-relaxed marker:text-indigo-500">
          {s.oftenBullets.map((item, i) => (
            <li key={i}>
              <Rich text={item} locale={locale} />
            </li>
          ))}
        </ul>
        <p className={proseP}>
          <Rich text={s.oftenOutro} locale={locale} />
        </p>
      </section>

      {/* ── 8. WHERE IT ALREADY LIVES ──────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.livesTitle}</h2>
        <p className={proseP}>
          {s.livesIntro}
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed marker:text-indigo-500">
          {s.livesBullets.map((item, i) => (
            <li key={i}>
              <Rich text={item} locale={locale} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── 9. CLEANING VS VERIFICATION ────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.vsTitle}</h2>
        {s.vsParas.map((para, i) => (
          <p key={i} className={proseP}>
            <Rich text={para} locale={locale} />
          </p>
        ))}
      </section>

      {/* ── 10. FAQ ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {/* ── 11. CTA BLOCK ──────────────────────────────────────── */}
      {isEn ? (
        <AltCtaBand headline={s.ctaHeadline} supporting={s.ctaSupporting} buttonText={s.ctaButton} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaHeadline} />
      )}

      {/* ── 12. RELATED TOOLS & GUIDES ─────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-12 space-y-8">
          <h2 className={sectionTitle}>{s.relatedTitle}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.related.map((item, i) => (
              <LocalLink
                key={RELATED_HREFS[i]}
                href={RELATED_HREFS[i]}
                locale={locale}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-300 hover:shadow-md transition-all card-vivid-shadow"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    {item.title}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </LocalLink>
            ))}
          </div>
        </div>
      </section>

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
