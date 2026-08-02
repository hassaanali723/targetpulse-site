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
const competitor = getCompetitor('neverbounce')

const DESC =
  'NeverBounce only flags catch-all addresses. Giggal.ai confirms them, valid or invalid, and lists every price in full. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'NeverBounce Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/neverbounce-alternative' },
  openGraph: {
    title: 'A NeverBounce Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/neverbounce-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A NeverBounce Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is Giggal.ai cheaper than NeverBounce?',
    a: 'NeverBounce shows its pricing only through a calculator, so there is no public figure to line up against. Giggal.ai is $9.90 per 10,000, listed in full. Open their calculator at the same volume to compare.',
  },
  {
    q: 'What does Giggal.ai do with the catch-all addresses NeverBounce flags?',
    a: 'It tells you whether the mailbox is real, deliverable or undeliverable, instead of a bare Catch-All tag. NeverBounce resolved 8% of catch-alls in the LeadMagic test. Catch-all is 1.5 credits in a run, 2 standalone.',
  },
  {
    q: 'How do Giggal.ai credits expire compared with NeverBounce?',
    a: 'Giggal.ai credits never expire. A 12-month expiry is widely reported for NeverBounce, but we could not confirm it from their terms, so we do not state it as fact.',
  },
  {
    q: 'Does Giggal.ai have an API?',
    a: 'Yes. Giggal.ai has public API docs and an MCP server, so you can verify from your own tools and workflows.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list you cleaned in NeverBounce and check the Catch-All rows.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function NeverBounceAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'NeverBounce alternative', path: '/neverbounce-alternative' },
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
            NeverBounce alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          NeverBounce only flags catch-all addresses without confirming them, and hides pricing
          behind a calculator. We confirm those addresses, valid or invalid, and publish every
          price.
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
            { k: 'Price', v: 'Hidden behind a calculator. Ours is public: $9.90 at 10k, listed in full.' },
            { k: 'Catch-all', v: 'We tell you valid or invalid. NeverBounce only flags it (8% resolved, LeadMagic).' },
            { k: 'Credits', v: 'Never expire. Their expiry is not confirmed from their own terms.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          NeverBounce marks catch-all addresses Catch-All and stops. It resolved 8% of them in the
          LeadMagic test. We route those addresses down a separate path and return one of four
          results.
        </p>
        <VerdictExplainer />
        <BenchmarkCallout competitor={competitor} />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>NeverBounce pricing vs Giggal.ai</h2>
        <p className={proseP}>
          NeverBounce shows pricing only through a browser calculator, so there is no public figure
          to compare. Ours is listed in full, with no minimum and no monthly fee.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>NeverBounce vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          A dash means the figure is not public, including NeverBounce’s credit expiry. No estimates
          stand in for it.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already cleaned in NeverBounce.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows NeverBounce marked Catch-All. Count how many come back real.',
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

      <AltCtaBand headline="Turn NeverBounce Catch-All rows into real results" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
