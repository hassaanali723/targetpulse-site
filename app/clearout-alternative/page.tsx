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
const competitor = getCompetitor('clearout')

const DESC =
  'Clearout returns catch-all as its own status without confirming the mailbox, at $65 per 10,000 pay-as-you-go. Giggal.ai resolves catch-all at $9.90 per 10,000. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'Clearout Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/clearout-alternative' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'A Clearout Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/clearout-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Clearout Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Does Giggal.ai resolve catch-all where Clearout flags it?',
    a: 'Yes. Clearout returns four statuses, Valid, Invalid, Catch-All and Unknown, and marks the Catch-All ones risky without confirming the mailbox. Giggal.ai returns a real deliverable or undeliverable result on those addresses, at 1.5 credits in a run or 2 standalone.',
  },
  {
    q: 'How much does Clearout cost compared with Giggal.ai?',
    a: 'Clearout is pay-as-you-go, and its rate steps down by volume: $65 at 10,000, $400 at 100,000 and $1,400 at a million. Giggal.ai is $9.90 at 10,000 credits, $76 at 100,000 and $680 at a million. Clearout does not charge for Unknown results, and credits never expire on either tool.',
  },
  {
    q: 'What is Clearout better at?',
    a: 'Clearout is more than a verifier: it also has an email finder and phone-number validation, claims 99%+ accuracy, gives 100 free credits that never expire, and offers a large integration list. If you want finding and verification in one place, it is a fair pick.',
  },
  {
    q: 'Do Giggal.ai credits expire?',
    a: 'No. Giggal.ai credits never expire. Clearout credits never expire and roll over either, so both are safe to stockpile.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list Clearout returned as Catch-All and see how many resolve to a real result.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ClearoutAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'Clearout alternative', path: '/clearout-alternative' },
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
            Clearout alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Clearout is an accurate verifier with an email finder attached, but on catch-all domains it
          returns a Catch-All status and leaves the mailbox unconfirmed. Giggal.ai returns a real
          result, at $9.90 per 10,000.
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
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. Clearout returns a Catch-All status and stops.' },
            { k: 'Price', v: 'Clearout is $65 at 10k and $1,400 at a million; we are $9.90 and $680.' },
            { k: 'Free tier', v: 'Clearout gives 100 credits; we give 1,000 bulk credits, no card.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          Clearout returns four statuses, and Catch-All is one of them: a domain that accepts every
          address, marked risky because the mailbox was never confirmed. That is a clean label, but a
          label is not an answer. We route those addresses down a separate path and return one of four
          results, so the real mailboxes come back deliverable rather than risky.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Clearout pricing vs Giggal.ai</h2>
        <p className={proseP}>
          Clearout is pay-as-you-go, and its per-credit rate steps down by volume: $65 at 10,000, $400
          at 100,000 and $1,400 at a million, read from Clearout’s own pricing data. Giggal.ai is
          $9.90 at 10,000, $76 at 100,000 and $680 at a million. Credits never expire on either tool,
          and neither charges for unknown results.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Clearout vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already checked in Clearout.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows Clearout returned as Catch-All. Count how many come back real.',
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

      <AltCtaBand headline="Resolve the addresses Clearout marks Catch-All" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
