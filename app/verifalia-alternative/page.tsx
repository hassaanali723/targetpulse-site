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
const competitor = getCompetitor('verifalia')

const DESC =
  'Verifalia returns catch-all as a Risky status without confirming the mailbox, and prices via a calculator. Giggal.ai resolves catch-all at $9.90 per 10,000. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'Verifalia Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/verifalia-alternative' },
  openGraph: {
    title: 'A Verifalia Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/verifalia-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Verifalia Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Does Giggal.ai resolve catch-all where Verifalia flags it?',
    a: 'Yes. Verifalia returns catch-all servers as a ServerIsCatchAll status, one of its Risky types, and does not confirm the individual mailbox. Giggal.ai returns a real deliverable or undeliverable result on those addresses, at 1.5 credits in a run or 2 standalone.',
  },
  {
    q: 'How much does Verifalia cost compared with Giggal.ai?',
    a: 'Verifalia prices pay-as-you-go through an on-page calculator and does not publish a fixed package price. Giggal.ai publishes $9.90 at 10,000 credits, $76 at 100,000 and $680 at a million. Both keep purchased credits from expiring.',
  },
  {
    q: 'What is Verifalia better at?',
    a: 'Verifalia is developer-first, with official SDKs for .NET, Java, PHP, Python, Node and more, configurable quality levels, ISO 27001, on-premise options and 25 free verifications every day. For a team that lives in code and needs those controls, it is a strong fit.',
  },
  {
    q: 'Do Giggal.ai credits expire?',
    a: 'No. Giggal.ai credits never expire. Verifalia purchased credits do not expire either, while its daily free credits reset each day.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list Verifalia marked catch-all and see how many resolve to a real result.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function VerifaliaAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'Verifalia alternative', path: '/verifalia-alternative' },
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
            Verifalia alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Verifalia is a solid developer-focused verifier with a daily free tier, but on catch-all
          domains it returns a ServerIsCatchAll status and leaves the mailbox unconfirmed. Giggal.ai
          returns a real result, at $9.90 per 10,000.
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
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. Verifalia returns a ServerIsCatchAll status and stops.' },
            { k: 'Price', v: 'Verifalia prices through a calculator; we publish $9.90 at 10k, $680 at a million.' },
            { k: 'Free tier', v: 'Verifalia gives 25 checks a day; we give 1,000 bulk credits, no card.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          Verifalia classifies a catch-all server as ServerIsCatchAll, a Risky type, and tells you
          the mailbox cannot be confirmed by a standard check. That is accurate, but it leaves the
          decision to you. We route those addresses down a separate path and return one of four
          results, so the real mailboxes come back deliverable rather than risky.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifalia pricing vs Giggal.ai</h2>
        <p className={proseP}>
          Verifalia prices pay-as-you-go through an on-page calculator and does not publish a fixed
          package price we can quote, so its column below stays blank. Giggal.ai is $9.90 at 10,000,
          $76 at 100,000 and $680 at a million, published on the pricing page. Purchased credits never
          expire on either tool.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifalia vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          A dash means the figure is not published. Verifalia prices through a calculator, so no fixed
          package price is shown.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already checked in Verifalia.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows Verifalia returned as catch-all. Count how many come back real.',
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

      <AltCtaBand headline="Resolve the addresses Verifalia marks catch-all" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
