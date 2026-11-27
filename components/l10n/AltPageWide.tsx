// Localized brand alternative page, wide layout (2026-11-27). Same sections,
// order and widths as the English AltPageScaffold: every section in the navbar
// container (max-w-6xl), the FAQ narrower (max-w-3xl). The copy comes from
// lib/i18n/altBrands/<locale>/<slug>.ts and every number from
// competitorPricing.ts. The older localized pages keep AltPage.tsx.
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import BrandText from '@/components/i18n/BrandText'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { SIGNUP_URL } from '@/lib/i18n/strings'
import { ALT_UI, ALT_WIDE_UI, localizedCompetitor, usdL } from '@/lib/i18n/alternativesL10n'
import { tierAt } from '@/lib/competitorPricing'
import {
  BenchmarkCallout,
  ComparisonTable,
  HeadToHead,
  PricingLadder,
  RelatedLinksL10n,
  VerdictExplainer,
  type AltL10nConfig,
} from '@/components/l10n/AltPage'

export { altL10nMetadata } from '@/components/l10n/AltPage'

const wrap = 'cv-section max-w-6xl mx-auto px-6 pt-14 pb-16 border-t border-slate-200'
const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [overflow-wrap:anywhere] hyphens-auto'
const proseP = 'text-slate-600 leading-relaxed text-[15px] md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
const label = 'text-[11px] font-black uppercase tracking-wider text-indigo-600'

export default function AltPageWideL10n({ cfg }: { cfg: AltL10nConfig }) {
  const { locale } = cfg
  const ui = ALT_UI[locale]
  const wui = ALT_WIDE_UI[locale]
  if (!wui) throw new Error(`No wide alternative labels for ${locale}`)
  const c = localizedCompetitor(cfg.slug, locale)

  const t10k = tierAt(c, 10000)
  const price10k =
    t10k && t10k.status !== 'unknown' && t10k.totalUsd !== null
      ? `${usdL(locale, t10k.totalUsd)}${t10k.perMonth ? wui.perMonth : ''}`
      : t10k?.note ?? wui.notPublished
  const keyFacts = [
    { k: wui.factRows.price10k, v: price10k },
    { k: wui.factRows.free, v: c.freeTier },
    { k: wui.factRows.expiry, v: c.creditsExpire },
    { k: wui.factRows.catchAll, v: c.catchAllCreditCost },
  ]

  const pricing = (
    <section className={wrap}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5 space-y-4">
          <h2 className={sectionTitle}>{cfg.pricingHeading}</h2>
          <p className={proseP}>{cfg.pricingProse}</p>
          {cfg.pricingExtra?.map((p, i) => (
            <p key={i} className={proseP}>{p}</p>
          ))}
        </div>
        <div className="min-w-0 lg:col-span-7">
          <PricingLadder c={c} locale={locale} />
        </div>
      </div>
    </section>
  )

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: cfg.breadcrumb, path: cfg.path }])} />
      <JsonLd data={faqPageLd(cfg.faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 max-w-5xl mx-auto [overflow-wrap:anywhere] hyphens-auto">
          {cfg.h1[0]}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{cfg.h1[1]}</span>
          {cfg.h1[2]}
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">{cfg.heroP}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            {ui.heroCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/alternatives"
            hrefLang="en"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            {ui.compareAll}
          </Link>
        </div>
      </section>

      {/* ── BOTTOM LINE ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cfg.bluf.map((p) => (
            <div key={p.k} className={`${card} space-y-2`}>
              <p className={label}><BrandText text={p.k} /></p>
              <p className="text-[15px] font-semibold text-slate-800 leading-snug">{p.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT THE BRAND ──────────────────────────────────── */}
      {cfg.about && (
        <section className={wrap}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7 space-y-4">
              <h2 className={sectionTitle}>{cfg.about.heading}</h2>
              {cfg.about.paragraphs.map((p, i) => (
                <p key={i} className={proseP}>{p}</p>
              ))}
            </div>
            <div className="min-w-0 lg:col-span-5">
              <div className={`${card} lg:mt-14`}>
                <p className={label}><BrandText text={wui.keyFacts(c.name)} /></p>
                <dl className="mt-4 divide-y divide-slate-100">
                  {keyFacts.map((f) => (
                    <div key={f.k} className="grid grid-cols-[110px_1fr] gap-4 py-3 first:pt-0 last:pb-0">
                      <dt className="text-[12px] font-bold text-slate-400 pt-0.5">{f.k}</dt>
                      <dd className="text-sm font-semibold text-slate-800 leading-snug">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )}

      {cfg.pricingFirst && pricing}

      {/* ── WHY PEOPLE SWITCH ────────────────────────────────── */}
      {cfg.reasons && (
        <section className={`${wrap} space-y-8`}>
          <h2 className={sectionTitle}>{cfg.reasons.heading}</h2>
          <div className={`grid gap-4 sm:grid-cols-2 ${cfg.reasons.items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {cfg.reasons.items.map((r, i) => (
              <div key={r.k} className={`${card} space-y-3`}>
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 font-black flex items-center justify-center text-sm">{i + 1}</div>
                <h3 className="text-base font-bold text-slate-900 hyphens-auto">{r.k}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.v}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className={wrap}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5 space-y-4">
            <h2 className={sectionTitle}>{cfg.catchAllHeading}</h2>
            <p className={proseP}>{cfg.catchAllProse}</p>
            {cfg.catchAllProse2 && <p className={proseP}>{cfg.catchAllProse2}</p>}
          </div>
          <div className="min-w-0 lg:col-span-7 space-y-6">
            <VerdictExplainer locale={locale} />
            {cfg.benchmark && <BenchmarkCallout c={c} locale={locale} />}
          </div>
        </div>
      </section>

      {!cfg.pricingFirst && pricing}

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className={`${wrap} space-y-6`}>
        <h2 className={sectionTitle}>{cfg.tableHeading ?? ui.featureHeading(c.name)}</h2>
        <ComparisonTable c={c} locale={locale} />
        {cfg.featureNote && <p className="text-[13px] text-slate-500 font-medium">{cfg.featureNote}</p>}
      </section>

      {/* ── WHERE THE BRAND IS STRONGER ──────────────────────── */}
      {cfg.strengths && (
        <section className={`${wrap} space-y-8`}>
          <div className="space-y-3">
            <h2 className={sectionTitle}>{cfg.strengths.heading}</h2>
            <p className={proseP}>{cfg.strengths.intro}</p>
          </div>
          <div className={`grid gap-4 sm:grid-cols-2 ${c.betterFitFor.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {c.betterFitFor.map((f) => (
              <div key={f} className={`${card} space-y-3`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── OTHER ALTERNATIVES ───────────────────────────────── */}
      {cfg.others && (
        <section className={`${wrap} space-y-8`}>
          <div className="space-y-3">
            <h2 className={sectionTitle}>{cfg.others.heading}</h2>
            <p className={proseP}>{cfg.others.intro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {cfg.others.items.map((o, i) => (
              <div key={o.name} className={`${card} space-y-3`}>
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-sm">{i + 1}</div>
                <h3 className="text-lg font-bold text-slate-900" lang="en">{o.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className={`${wrap} space-y-8`}>
        <h2 className={sectionTitle}>{cfg.testHeading ?? ui.tryHeading}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {cfg.testSteps.map((step, i) => (
            <div key={i} className={`${card} space-y-3`}>
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-sm">{i + 1}</div>
              <p className="text-sm md:text-[15px] font-semibold text-slate-700 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <HeadToHead slug={cfg.slug} locale={locale} wide />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-14 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{ui.faqHeading}</h2>
        </div>
        <FaqAccordion items={cfg.faqs} />
      </section>

      <CtaBandL10n locale={locale} headline={cfg.ctaHeadline} />

      <RelatedLinksL10n locale={locale} wide />

      <FooterL10n locale={locale} />
    </main>
  )
}
