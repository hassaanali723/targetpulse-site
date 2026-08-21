// Shared scaffold for competitor alternative pages. The earlier pages are
// standalone; this renders the same structure from a config so the second wave
// of pages stays consistent without copying 180 lines each. Every fact still
// comes from competitorPricing.ts via the slug.
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbTrailLd } from '@/lib/schema'
import PricingLadder from '@/components/alternatives/PricingLadder'
import ComparisonTable from '@/components/alternatives/ComparisonTable'
import VerdictExplainer from '@/components/alternatives/VerdictExplainer'
import Bluf from '@/components/alternatives/Bluf'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import RelatedLinks from '@/components/alternatives/RelatedLinks'
import { getCompetitor } from '@/lib/competitorPricing'
import { ArrowRight } from 'lucide-react'

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
}

export function altMetadata(cfg: AltPageConfig): Metadata {
  return {
    title: { absolute: cfg.metaTitle },
    description: cfg.desc,
    alternates: { canonical: `/${cfg.slug}-alternative` },
    openGraph: {
      siteName: 'Giggal.ai',
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

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function AltPageScaffold({ config }: { config: AltPageConfig }) {
  const competitor = getCompetitor(config.slug)

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
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {config.h1Article}{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            {competitor.name} alternative
          </span>{' '}
          {config.h1Tail}
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
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
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <Bluf points={config.bluf} />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{config.catchAllHeading}</h2>
        <p className={proseP}>{config.catchAllProse}</p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{config.pricingHeading}</h2>
        <p className={proseP}>{config.pricingProse}</p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{competitor.name} vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        {config.featureNote && (
          <p className="text-[13px] text-slate-500 font-medium">{config.featureNote}</p>
        )}
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            `Export a list you already checked in ${competitor.name}.`,
            'Run it here on the 1,000 free credits. No card.',
            config.testStep3,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-medium">
              <span className="shrink-0 w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-black text-[13px] flex items-center justify-center">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={config.faqs} />
      </section>

      <AltCtaBand headline={config.ctaHeadline} />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
