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
const competitor = getCompetitor('emaillistverify')

const DESC =
  'EmailListVerify returns accept-all as ok_for_all without confirming it. Giggal.ai resolves catch-all and is $9.90 per 10,000 against its $27. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'EmailListVerify Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/emaillistverify-alternative' },
  openGraph: {
    title: 'An EmailListVerify Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/emaillistverify-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'An EmailListVerify Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'How do the two compare on price?',
    a: 'Giggal.ai is $9.90 at 10,000 credits and $76 at 100,000, against $27 and $186 on EmailListVerify. EmailListVerify prices its million tier by quote, so there is no published figure to compare there. Credits never expire on either tool.',
  },
  {
    q: 'What does Giggal.ai do with accept-all addresses that EmailListVerify does not?',
    a: 'It tells you whether the mailbox is real, deliverable or undeliverable. EmailListVerify returns accept-all addresses as ok_for_all and does not confirm the mailbox. Catch-all is 1.5 credits in a run, 2 standalone.',
  },
  {
    q: 'What is EmailListVerify better at?',
    a: 'It gives 100 free verifications that never expire, bundles free tools like a blacklist checker and a DNS health checker, and includes an email finder.',
  },
  {
    q: 'How accurate is EmailListVerify?',
    a: 'EmailListVerify states 97% accuracy on its own site. Giggal.ai verifies at 99% and returns a real result on the catch-all and SEG-protected addresses that EmailListVerify leaves as ok_for_all.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list EmailListVerify returned as ok_for_all and see how many resolve to a real result.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailListVerifyAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'EmailListVerify alternative', path: '/emaillistverify-alternative' },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          An{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            EmailListVerify alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          On accept-all domains EmailListVerify returns ok_for_all and leaves the mailbox unconfirmed.
          Giggal.ai returns a real result, and is $9.90 per 10,000 against its $27.
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
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. EmailListVerify returns ok_for_all and stops.' },
            { k: 'Price', v: '$27 at 10k against our $9.90, and $186 vs $76 at 100k. Every tier published.' },
            { k: 'Free tier', v: 'EmailListVerify gives 100 verifications; we give 1,000 bulk credits, no card.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          On an accept-all domain, EmailListVerify returns the address as ok_for_all: the server takes
          mail for every name, so the mailbox cannot be confirmed by a standard check. That label is
          accurate, but it is not an answer. We route those addresses down a separate path and return
          one of four results, so the real mailboxes come back deliverable rather than left in limbo.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>EmailListVerify pricing vs Giggal.ai</h2>
        <p className={proseP}>
          EmailListVerify charges $27 at 10,000 and $186 at 100,000, and prices a million by quote.
          Giggal.ai is $9.90, $76 and $680 at those volumes, published in full, and resolves
          catch-all. Credits never expire on either tool.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>EmailListVerify vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          A dash marks a figure the vendor does not publish. EmailListVerify’s million-credit price is
          quote-only, shown as “Quote only” in the price table. No estimate stands in for it.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already checked in EmailListVerify.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows returned as ok_for_all. Count how many come back real.',
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

      <AltCtaBand headline="Resolve the addresses EmailListVerify leaves as ok_for_all" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
