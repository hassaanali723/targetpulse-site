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
const competitor = getCompetitor('emailable')

const DESC =
  'Emailable is fast but marks accept-all as Risky without confirming the mailbox. Giggal.ai resolves catch-all and costs $9.90 per 10,000 against $60. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'Emailable Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/emailable-alternative' },
  openGraph: {
    title: 'An Emailable Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/emailable-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'An Emailable Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'How do the two compare on price?',
    a: '$9.90 vs $60 at 10,000, $76 vs $420 at 100,000, and $680 vs $2,100 at a million. Both publish full price lists and credits never expire on either.',
  },
  {
    q: 'What does Giggal.ai do with accept-all addresses that Emailable does not?',
    a: 'It tells you whether the mailbox is real, deliverable or undeliverable. Emailable marks accept-all addresses Risky and does not confirm them, because it does not guess. Catch-all is 1.5 credits in a run, 2 standalone.',
  },
  {
    q: 'Does Emailable charge for those Risky results?',
    a: 'No, and that is fair. Emailable does not charge for unknown or duplicate results. You still end up with a Risky segment you cannot confidently send to, only un-billed.',
  },
  {
    q: 'What is Emailable better at?',
    a: 'Emailable gives 250 free credits to start, rates among the fastest for bulk speed, and offers around 90 integrations. If free-tier size and raw speed matter more than resolving catch-all, it is a fair pick.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all-heavy list and see how much comes back usable rather than flagged.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailableAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'Emailable alternative', path: '/emailable-alternative' },
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
            Emailable alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Emailable is quick and gives you 250 free credits, but on accept-all domains it stops at
          Risky. Giggal.ai returns a real result on those, and costs $9.90 per 10,000 against
          Emailable&apos;s $60.
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
            { k: 'Price', v: '$60 at 10k against our $9.90, and $2,100 vs $680 at a million.' },
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. Emailable marks accept-all Risky and stops.' },
            { k: 'Free tier', v: 'Emailable gives 250 credits; we give 1,000 bulk credits, no card.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          On an accept-all domain, Emailable marks the address Risky and does not confirm it, on the
          principle that it will not guess without evidence. That is honest, but it leaves you a
          Risky pile you cannot use. We route those addresses down a separate path and return one of
          four results, so the real mailboxes come back deliverable instead of flagged.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Emailable pricing vs Giggal.ai</h2>
        <p className={proseP}>
          Emailable charges $60 at 10,000, $420 at 100,000 and $2,100 at a million. Giggal.ai is
          $9.90, $76 and $680 at the same volumes. Neither charges for unknown results, and credits
          never expire on either tool.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Emailable vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already cleaned in Emailable.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows Emailable marked Risky or Accept-All. Count how many come back real.',
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

      <AltCtaBand headline="Turn Emailable Risky rows into real results" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
