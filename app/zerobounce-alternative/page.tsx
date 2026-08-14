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
import BenchmarkCallout from '@/components/alternatives/BenchmarkCallout'
import Bluf from '@/components/alternatives/Bluf'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import RelatedLinks from '@/components/alternatives/RelatedLinks'
import { getCompetitor } from '@/lib/competitorPricing'
import { ArrowRight } from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'
const competitor = getCompetitor('zerobounce')

const DESC =
  'ZeroBounce charges $129 per 10,000 and scores catch-all 1-10, not valid or invalid. Giggal.ai is $9.90 and confirms them. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'ZeroBounce Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/zerobounce-alternative' },
  openGraph: {
    title: 'A ZeroBounce Alternative Built for Catch-All Lists',
    description: DESC,
    url: 'https://giggal.ai/zerobounce-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A ZeroBounce Alternative Built for Catch-All Lists',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'How do the two compare on price?',
    a: '$9.90 vs $129 at 10,000 credits, $76 vs $649 at 100,000, and $680 vs $3,199 at a million. Both prices are dated next to the table.',
  },
  {
    q: 'Is there a minimum purchase on ZeroBounce?',
    a: 'Yes, 2,000 credits for $39. Giggal.ai has no minimum, and you start on 1,000 free credits with no card. Credits never expire on either tool.',
  },
  {
    q: 'What does Giggal.ai do with a catch-all address that ZeroBounce only scores?',
    a: 'It tells you whether the mailbox is real, deliverable or undeliverable, instead of a bare Catch-All tag. Catch-all is 1.5 credits in a run, 2 standalone.',
  },
  {
    q: 'How accurate is Giggal.ai on catch-all addresses?',
    a: 'Giggal.ai verifies at 99% accuracy, and returns a real deliverable or undeliverable result on catch-all and SEG-protected addresses that most tools only flag without confirming.',
  },
  {
    q: 'Can I test Giggal.ai before paying?',
    a: 'Yes. 1,000 free credits, no card, usable on a bulk upload. Re-run a list you cleaned in ZeroBounce and compare the Catch-All rows.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ZeroBounceAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'ZeroBounce alternative', path: '/zerobounce-alternative' },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          A{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            ZeroBounce alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Same job, a tenth of the price, and a real valid or invalid answer where ZeroBounce only returns a 1-10 score.
          $9.90 per 10,000 credits against $129.
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
        <Bluf
          points={[
            { k: 'Price', v: '$9.90 vs $129 per 10,000 credits. The gap holds at every tier.' },
            { k: 'Catch-all', v: 'We tell you valid or invalid. ZeroBounce returns a 1-10 score, not a real answer.' },
            { k: 'Minimum', v: 'None here, start on 1,000 free. ZeroBounce needs a 2,000-credit, $39 minimum.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>ZeroBounce pricing vs Giggal.ai</h2>
        <PricingLadder competitor={competitor} />
        <p className={proseP}>
          ZeroBounce adds a 2,000-credit minimum and a $99 per month subscription. Giggal.ai has
          neither. Buy credits, keep them, start on 1,000 free.
        </p>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          On a catch-all domain the server accepts every address. ZeroBounce scores it 1 to 10 with
          AI Scoring rather than confirming it. We route those addresses down a separate path and
          return one of four results.
        </p>
        <VerdictExplainer />
        <p className={proseP}>
          In the LeadMagic test, ZeroBounce resolved 12% of catch-all addresses.
        </p>
        <BenchmarkCallout competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>ZeroBounce vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          ZeroBounce’s 99.6% accuracy is its own claim, not a measured figure.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export the list you would send to ZeroBounce.',
            'Upload it here and run it on the 1,000 free credits. No card.',
            'Compare the Catch-All rows. Count how many come back as a real result.',
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
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand headline="See what ZeroBounce marks Catch-All and Giggal confirms" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
