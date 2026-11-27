// Shared scaffold for competitor alternative pages. The earlier pages are
// standalone; this renders the same structure from a config so the second wave
// of pages stays consistent without copying 180 lines each. Every fact still
// comes from competitorPricing.ts via the slug.
import type { Metadata } from 'next'
import { isAltIndexed, NOINDEX_ROBOTS } from '@/lib/indexPolicy'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbTrailLd } from '@/lib/schema'
import PricingLadder from '@/components/alternatives/PricingLadder'
import ComparisonTable from '@/components/alternatives/ComparisonTable'
import VerdictExplainer from '@/components/alternatives/VerdictExplainer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import RelatedLinks from '@/components/alternatives/RelatedLinks'
import HeadToHeadComparisons from '@/components/alternatives/HeadToHeadComparisons'
import { getCompetitor, tierAt, fmtUsd } from '@/lib/competitorPricing'
import { ArrowRight, Check } from 'lucide-react'
import { clusterOfEnglish, hreflangAlternates } from '@/lib/i18n/clusters'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export interface AltPageConfig {
  slug: string
  metaTitle: string // absolute <title>
  ogTitle: string
  desc: string
  h1Article: string // "A" or "An"
  h1Tail: string
  heroP: string
  bluf: { k: string; v: string }[]
  catchAllHeading: string
  catchAllProse: string
  pricingHeading: string
  pricingProse: string
  pricingNote?: string
  featureNote?: string
  testStep3: string
  faqs: FaqItem[]
  ctaHeadline: string
  // Optional, per-brand sections (2026-11-27). Each page that sets these reads
  // as its own article instead of a template with the name swapped.
  h1Highlight?: string // gradient part of the H1, default "{Brand} alternative"
  about?: { heading: string; paragraphs: string[]; features?: string[] }
  pricingFirst?: boolean // put pricing right after "about" for brands searched with "pricing"
  pricingExtra?: string[]
  reasons?: { heading: string; items: { k: string; v: string }[] }
  strengths?: { heading: string; intro: string } // lists competitor.betterFitFor
  others?: { heading: string; intro: string; items: { name: string; text: string }[] }
  tableHeading?: string
  testHeading?: string
}

export function altMetadata(cfg: AltPageConfig): Metadata {
  // plans/15: pages that exist in other languages carry hreflang.
  const cluster = clusterOfEnglish(`/${cfg.slug}-alternative`)
  return {
    // C7 tier C: zero-demand brand pages stay live and linked but noindex.
    ...(isAltIndexed(cfg.slug) ? {} : { robots: NOINDEX_ROBOTS }),
    title: { absolute: cfg.metaTitle },
    description: cfg.desc,
    alternates: { canonical: `/${cfg.slug}-alternative`, ...(cluster ? { languages: hreflangAlternates(cluster) } : {}) },
    openGraph: {
      siteName: 'Giggal.ai',
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
      title: cfg.ogTitle,
      description: cfg.desc,
      url: `https://giggal.ai/${cfg.slug}-alternative`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: cfg.ogTitle,
      description: cfg.desc,
    },
  }
}

// Layout (2026-11-27): every section sits in the navbar container, max-w-6xl
// (1280px), so its left and right edges line up with the logo and the Sign up
// button. Prose is kept to a readable width inside two-column grids, and lists
// render as card grids, the same pattern as /disposable-email-checker. Only the
// FAQ is narrower (max-w-3xl), as on the reference pages.
const wrap = 'cv-section max-w-6xl mx-auto px-6 pt-14 pb-16 border-t border-slate-200'
const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [overflow-wrap:anywhere]'
const proseP = 'text-slate-600 leading-relaxed text-[15px] md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
const label = 'text-[11px] font-black uppercase tracking-wider text-indigo-600'

export default function AltPageScaffold({ config }: { config: AltPageConfig }) {
  const competitor = getCompetitor(config.slug)
  const t10k = tierAt(competitor, 10000)
  const price10k =
    t10k && t10k.status !== 'unknown' && t10k.totalUsd !== null
      ? `${fmtUsd(t10k.totalUsd)}${t10k.perMonth ? ' a month' : ''}`
      : t10k?.note ?? 'Not published'

  const keyFacts = [
    { k: '10,000 checks', v: price10k },
    { k: 'Free credits', v: competitor.freeTier },
    { k: 'Credit expiry', v: competitor.creditsExpire },
    { k: 'Catch-all', v: competitor.catchAllCreditCost },
  ]

  const pricing = (
    <section className={wrap}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5 space-y-4">
          <h2 className={sectionTitle}>{config.pricingHeading}</h2>
          <p className={proseP}>{config.pricingProse}</p>
          {config.pricingExtra?.map((p, i) => (
            <p key={i} className={proseP}>{p}</p>
          ))}
        </div>
        <div className="min-w-0 lg:col-span-7">
          <PricingLadder competitor={competitor} />
        </div>
      </div>
    </section>
  )

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: `${competitor.name} alternative`, path: `/${config.slug}-alternative` },
        ])}
      />
      <JsonLd data={faqPageLd(config.faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 max-w-5xl mx-auto [overflow-wrap:anywhere]">
          {config.h1Article}{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            {config.h1Highlight ?? `${competitor.name} alternative`}
          </span>{' '}
          {config.h1Tail}
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          {config.heroP}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            Start free with 1,000 credits
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/alternatives"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            Compare all verifiers
          </Link>
        </div>
      </section>

      {/* ── BOTTOM LINE ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.bluf.map((p) => (
            <div key={p.k} className={`${card} space-y-2`}>
              <p className={label}>{p.k}</p>
              <p className="text-[15px] font-semibold text-slate-800 leading-snug">{p.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT THE BRAND ──────────────────────────────────── */}
      {config.about && (
        <section className={wrap}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7 space-y-4">
              <h2 className={sectionTitle}>{config.about.heading}</h2>
              {config.about.paragraphs.map((p, i) => (
                <p key={i} className={proseP}>{p}</p>
              ))}
            </div>
            <div className="min-w-0 lg:col-span-5">
              <div className={`${card} lg:mt-14`}>
                <p className={label}>{competitor.name} key facts</p>
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

      {config.pricingFirst && pricing}

      {/* ── WHY PEOPLE SWITCH ────────────────────────────────── */}
      {config.reasons && (
        <section className={`${wrap} space-y-8`}>
          <h2 className={sectionTitle}>{config.reasons.heading}</h2>
          <div className={`grid gap-4 sm:grid-cols-2 ${config.reasons.items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {config.reasons.items.map((r, i) => (
              <div key={r.k} className={`${card} space-y-3`}>
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 font-black flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{r.k}</h3>
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
            <h2 className={sectionTitle}>{config.catchAllHeading}</h2>
            <p className={proseP}>{config.catchAllProse}</p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <VerdictExplainer />
          </div>
        </div>
      </section>

      {!config.pricingFirst && pricing}

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className={`${wrap} space-y-6`}>
        <h2 className={sectionTitle}>{config.tableHeading ?? `${competitor.name} vs Giggal.ai`}</h2>
        <ComparisonTable competitor={competitor} />
        {config.featureNote && (
          <p className="text-[13px] text-slate-500 font-medium">{config.featureNote}</p>
        )}
      </section>

      {/* ── WHERE THE BRAND IS STRONGER ──────────────────────── */}
      {config.strengths && (
        <section className={`${wrap} space-y-8`}>
          <div className="space-y-3">
            <h2 className={sectionTitle}>{config.strengths.heading}</h2>
            <p className={proseP}>{config.strengths.intro}</p>
          </div>
          <div className={`grid gap-4 sm:grid-cols-2 ${competitor.betterFitFor.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {competitor.betterFitFor.map((f) => (
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
      {config.others && (
        <section className={`${wrap} space-y-8`}>
          <div className="space-y-3">
            <h2 className={sectionTitle}>{config.others.heading}</h2>
            <p className={proseP}>{config.others.intro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {config.others.items.map((o, i) => (
              <div key={o.name} className={`${card} space-y-3`}>
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{o.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className={`${wrap} space-y-8`}>
        <h2 className={sectionTitle}>{config.testHeading ?? 'Try it on your own list'}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            `Export a list you already checked in ${competitor.name}.`,
            'Run it here on the 1,000 free credits. No card.',
            config.testStep3,
          ].map((step, i) => (
            <div key={i} className={`${card} space-y-3`}>
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <p className="text-sm md:text-[15px] font-semibold text-slate-700 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HEAD-TO-HEAD ─────────────────────────────────────── */}
      <HeadToHeadComparisons slug={config.slug} wide />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-14 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={config.faqs} />
      </section>

      <AltCtaBand headline={config.ctaHeadline} />

      <RelatedLinks wide />

      <Footer />
    </main>
  )
}
