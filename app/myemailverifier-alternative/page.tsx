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
const competitor = getCompetitor('myemailverifier')

const DESC =
  'MyEmailVerifier gives 100 free credits a day but flags catch-all as a status without confirming it. Giggal.ai resolves catch-all at $9.90 per 10,000. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'MyEmailVerifier Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/myemailverifier-alternative' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'A MyEmailVerifier Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/myemailverifier-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A MyEmailVerifier Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Does Giggal.ai resolve catch-all where MyEmailVerifier flags it?',
    a: 'Yes. MyEmailVerifier returns catch-all addresses as a separate status and does not confirm the mailbox. Giggal.ai returns a real deliverable or undeliverable result on those addresses, at 1.5 credits in a run or 2 standalone.',
  },
  {
    q: 'How much does MyEmailVerifier cost compared with Giggal.ai?',
    a: 'MyEmailVerifier publishes a volume-tiered table: $15 at 10,000, $99 at 100,000 and $349 at a million. Giggal.ai is $9.90, $76 and $680 at those volumes. Both keep credits from expiring, so the difference that matters is that we resolve catch-all and it flags it.',
  },
  {
    q: 'What is MyEmailVerifier better at?',
    a: 'It gives 100 free credits every day that reset rather than expiring after a trial, keeps a very low headline rate, never expires credits, and runs bonus-credit promotions at high volume. On price and free allowance, it is strong.',
  },
  {
    q: 'Do Giggal.ai credits expire?',
    a: 'No. Giggal.ai credits never expire, and MyEmailVerifier credits never expire either, so both are safe to stockpile.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list MyEmailVerifier returned as catch-all and see how many resolve to a real result.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function MyEmailVerifierAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'MyEmailVerifier alternative', path: '/myemailverifier-alternative' },
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
            MyEmailVerifier alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          MyEmailVerifier is a low-cost verifier with 100 free credits a day, but on catch-all
          domains it returns a status and leaves the mailbox unconfirmed. Giggal.ai returns a real
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
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. MyEmailVerifier flags it as a status and stops.' },
            { k: 'Price', v: 'MyEmailVerifier is $15 at 10k and $349 at a million; we are $9.90 and $680.' },
            { k: 'Free tier', v: 'It gives 100 credits a day; we give 1,000 bulk credits, no card.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          MyEmailVerifier separates its results into valid, invalid, catch-all and unknown, and hands
          catch-all addresses back as their own status rather than confirming the mailbox. That keeps
          it honest, but it leaves you a pile to sort out by hand. We route those addresses down a
          separate path and return one of four results, so the real mailboxes come back deliverable.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>MyEmailVerifier pricing vs Giggal.ai</h2>
        <p className={proseP}>
          MyEmailVerifier publishes a volume-tiered table: $15 at 10,000, $99 at 100,000 and $349 at
          a million, with credits that never expire. Giggal.ai is $9.90, $76 and $680 at those
          volumes. The split that matters is catch-all: we resolve it where MyEmailVerifier only
          flags it.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>MyEmailVerifier vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already checked in MyEmailVerifier.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows returned as catch-all. Count how many come back real.',
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

      <AltCtaBand headline="Resolve the addresses MyEmailVerifier marks catch-all" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
