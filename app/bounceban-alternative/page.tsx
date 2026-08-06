import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbTrailLd } from '@/lib/schema'
import PricingLadder from '@/components/alternatives/PricingLadder'
import ComparisonTable from '@/components/alternatives/ComparisonTable'
import Bluf from '@/components/alternatives/Bluf'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import RelatedLinks from '@/components/alternatives/RelatedLinks'
import { getCompetitor } from '@/lib/competitorPricing'
import { ArrowRight } from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'
const competitor = getCompetitor('bounceban')

const DESC =
  'BounceBan and Giggal.ai both resolve catch-all and SEG. Giggal.ai adds a 1,000-credit bulk free tier and a full public price list. Try it free, no card.'

export const metadata: Metadata = {
  title: { absolute: 'BounceBan Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/bounceban-alternative' },
  openGraph: {
    title: 'A BounceBan Alternative for Catch-All and SEG',
    description: DESC,
    url: 'https://giggal.ai/bounceban-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A BounceBan Alternative for Catch-All and SEG',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Do BounceBan and Giggal.ai do the same job?',
    a: 'On the hard part, yes. Both return a real result on catch-all and SEG-protected addresses without sending an email. The comparison is the terms around that: price transparency, the free tier, and how many gateways each names.',
  },
  {
    q: 'Which is cheaper per catch-all address?',
    a: 'On credit counts BounceBan looks cheaper, a flat 1 credit against 1.5. But a credit is not a price. At 10,000, BounceBan is $34 and Giggal.ai is $9.90, so a BounceBan catch-all is about $0.0034 and a Giggal.ai catch-all about $0.0015. Cheaper here, even at 1.5 credits.',
  },
  {
    q: 'What is the difference in the free tier?',
    a: 'Giggal.ai gives 1,000 free credits, no card, usable on a bulk upload, so you can test a real list. BounceBan’s free mode is unlimited single checks only, which does not let you run a list end to end.',
  },
  {
    q: 'How many secure email gateways does each name?',
    a: 'Giggal.ai names 15. BounceBan names Mimecast, Proofpoint and Barracuda, plus others unnamed. Both verify behind gateways rather than skipping them.',
  },
  {
    q: 'How does Giggal.ai price catch-all verification?',
    a: 'Catch-all is 1.5 credits when enabled in a run, or 2 standalone. Standard verification is 1 credit.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function BounceBanAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'BounceBan alternative', path: '/bounceban-alternative' },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          A cheaper{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            BounceBan alternative
          </span>{' '}
          for catch-all verification
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Both tools resolve catch-all and SEG addresses without sending mail. The difference is the
          terms: our free tier runs on a bulk list, our price list is public, and we name 15
          gateways.
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
            { k: 'Same job', v: 'Both resolve catch-all and SEG without sending. This is the closest matchup here.' },
            { k: 'Free tier', v: '1,000 bulk credits here. Theirs is single checks only, so you cannot test a list.' },
            { k: 'Pricing', v: 'Full published price list here. Theirs is a calculator.' },
            { k: 'Gateways', v: '15 named here, against their 3.' },
          ]}
        />
      </section>

      {/* ── SAME JOB, DIFFERENT TERMS ────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Both resolve catch-all and SEG</h2>
        <p className={proseP}>
          BounceBan resolves catch-all and gateway addresses too, without sending mail, and claims
          over 97% on catch-all. So this is not about capability. It comes down to what you pay, what
          you can test for free, and how public the pricing is.
        </p>
      </section>

      {/* ── FREE TIER ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>The free tier difference</h2>
        <p className={proseP}>
          BounceBan gives unlimited single checks for free, which is handy for one address at a time.
          It does not let you run a list, because bulk needs credits. Our 1,000 free credits work on
          a bulk upload, so you can test a real segment, catch-all and gateway rows included, before
          paying anything. If your question is how a tool performs on your list, that gap decides it.
        </p>
      </section>

      {/* ── PRICE ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Price per catch-all address</h2>
        <p className={proseP}>
          A credit comparison would mislead. BounceBan charges a flat 1 credit; we charge 1.5 for a
          catch-all. But a credit is not a price. At 10,000, BounceBan is $34 and we are $9.90, so a
          BounceBan credit is about $0.0034 and ours is $0.00099. That puts a BounceBan catch-all near
          $0.0034 and a Giggal.ai catch-all near $0.0015, cheaper even at 1.5 credits.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>BounceBan vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          Both read Yes on catch-all and on gateway support. That is the point: they line up on
          capability, and the difference sits in the other rows.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Take a list with real catch-all and gateway volume.',
            'Run it here on the 1,000 free credits. No card.',
            'Compare it row for row against a BounceBan run: how many resolve, and at what real per-credit price.',
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

      <AltCtaBand headline="Run a catch-all list on the free credits" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
