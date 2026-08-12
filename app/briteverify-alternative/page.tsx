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
const competitor = getCompetitor('briteverify')

const DESC =
  'BriteVerify from Validity flags accept-all as risky and prices only by quote. Giggal.ai resolves catch-all and publishes $9.90 per 10,000. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'BriteVerify Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/briteverify-alternative' },
  openGraph: {
    title: 'A BriteVerify Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/briteverify-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A BriteVerify Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Does Giggal.ai resolve catch-all where BriteVerify flags it?',
    a: 'Yes. BriteVerify groups accept-all addresses into a risky category between valid and invalid, without confirming the mailbox. Giggal.ai returns a real deliverable or undeliverable result on those addresses, at 1.5 credits in a run or 2 standalone.',
  },
  {
    q: 'How much does BriteVerify cost compared with Giggal.ai?',
    a: 'BriteVerify prices by quote; its pricing page routes you to contact sales, and Validity states the cost can run as high as $0.01 per address. Giggal.ai publishes its price in full: $9.90 at 10,000 credits, $76 at 100,000 and $680 at a million, with no sales call.',
  },
  {
    q: 'What is BriteVerify better at?',
    a: 'BriteVerify is part of Validity, an established deliverability suite with enterprise support, high throughput, and close relationships with inbox providers. For a large organisation already standardised on Validity, that ecosystem is the draw.',
  },
  {
    q: 'Does BriteVerify verify behind secure email gateways?',
    a: 'It does not advertise gateway verification. Giggal.ai detects 15 secure email gateways, including Mimecast, Proofpoint and Barracuda, and returns a real result on addresses those gateways hide.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card and no sales call, on a bulk upload. Re-run a list BriteVerify returned as accept-all and see how many resolve to a real result.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function BriteVerifyAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'BriteVerify alternative', path: '/briteverify-alternative' },
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
            BriteVerify alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          BriteVerify is Validity&apos;s enterprise verifier, priced only by quote, and on accept-all
          domains it flags the address risky rather than confirming the mailbox. Giggal.ai returns a
          real result, at a published $9.90 per 10,000.
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
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. BriteVerify groups accept-all as risky and stops.' },
            { k: 'Price', v: 'BriteVerify is quote-only, up to $0.01 a check. We publish $9.90 at 10k, $680 at a million.' },
            { k: 'Gateways', v: 'We verify behind 15 secure email gateways; BriteVerify does not advertise it.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card and no sales call.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL + SEG ──────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          BriteVerify groups accept-all addresses into a risky category, somewhere between valid and
          invalid, without confirming the mailbox. We route those addresses down a separate path and
          return one of four results, and we go further to verify addresses hidden behind secure email
          gateways such as Mimecast, Proofpoint and Barracuda, which BriteVerify does not cover.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>BriteVerify pricing vs Giggal.ai</h2>
        <p className={proseP}>
          BriteVerify does not publish a price. Its pricing page routes to contact sales, and Validity
          states the cost can run as high as $0.01 per address, so its column below stays blank.
          Giggal.ai publishes its full price list: $9.90 at 10,000, $76 at 100,000 and $680 at a
          million, with no sales call and no minimum.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>BriteVerify vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          A dash means the figure is not published. BriteVerify prices by quote, so no package price
          or free tier is shown.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already checked in BriteVerify.',
            'Run it here on the 1,000 free credits. No card, no sales call.',
            'Look at the rows BriteVerify grouped as accept-all. Count how many come back real.',
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

      <AltCtaBand headline="Published pricing, and it resolves catch-all" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
