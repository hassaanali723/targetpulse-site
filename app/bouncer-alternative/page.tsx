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
const competitor = getCompetitor('bouncer')

const DESC =
  'Bouncer resolves catch-all too, but costs $60 per 10,000 against Giggal.ai at $9.90, and Giggal also verifies behind secure email gateways. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'Bouncer Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/bouncer-alternative' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'A Bouncer Alternative That Verifies Behind Gateways',
    description: DESC,
    url: 'https://giggal.ai/bouncer-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Bouncer Alternative That Verifies Behind Gateways',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'How do the two compare on price?',
    a: 'Bouncer is $60 per 10,000 against Giggal.ai at $9.90, and $2,000 vs $680 at a million. Both publish full price lists, so the numbers are easy to check.',
  },
  {
    q: 'Does Bouncer resolve catch-all addresses like Giggal.ai?',
    a: 'Bouncer is one of the few tools that does, through its Deep Catch-All Verification on Google and Microsoft domains. Giggal.ai resolves catch-all too, at 1.5 credits in a run or 2 standalone, and also verifies addresses sitting behind secure email gateways, which Bouncer does not.',
  },
  {
    q: 'What does Giggal.ai do that Bouncer does not?',
    a: 'It verifies behind secure email gateways. Giggal.ai detects 15 gateways, including Mimecast, Proofpoint and Barracuda, and returns a real result on addresses those gateways hide. Bouncer does not advertise gateway verification.',
  },
  {
    q: 'What is Bouncer better at?',
    a: 'Bouncer has an Email Toxicity Check that flags spam traps and complainers, the highest review scores among dedicated verifiers, and SOC 2 Type II compliance. If those matter more than gateway coverage, it is a strong tool.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list you cleaned in Bouncer and compare the catch-all and gateway rows.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function BouncerAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'Bouncer alternative', path: '/bouncer-alternative' },
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
            Bouncer alternative
          </span>{' '}
          that verifies behind gateways
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Bouncer is a strong verifier and one of the few that resolves catch-all addresses. Giggal.ai
          does the same, adds verification behind secure email gateways, and charges $9.90 per 10,000
          against Bouncer&apos;s $60.
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
            { k: 'Price', v: '$60 at 10k against our $9.90, and $2,000 vs $680 at a million.' },
            { k: 'Catch-all', v: 'Both resolve it. We also verify behind 15 secure email gateways; Bouncer does not.' },
            { k: 'Credits', v: 'Never expire on both. We start you on 1,000 free bulk credits; Bouncer gives 100.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL + SEG ──────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Where Giggal.ai and Bouncer differ on catch-all</h2>
        <p className={proseP}>
          Bouncer resolves catch-all with its Deep Catch-All Verification on Google and Microsoft
          domains, so on that front the two tools agree. The difference is what happens next. Giggal.ai
          resolves catch-all at 1.5 credits in a run, and goes further to verify addresses hidden
          behind secure email gateways such as Mimecast, Proofpoint and Barracuda, which Bouncer does
          not cover. Every address comes back as one of four results.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Bouncer pricing vs Giggal.ai</h2>
        <p className={proseP}>
          Bouncer charges $60 at 10,000, $400 at 100,000 and $2,000 at a million. Giggal.ai is $9.90,
          $76 and $680 at the same volumes, with no minimum and no monthly fee. Credits never expire
          on either tool.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Bouncer vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already cleaned in Bouncer.',
            'Run it here on the 1,000 free credits. No card.',
            'Compare price, and check the addresses behind gateways that Bouncer leaves unverified.',
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

      <AltCtaBand headline="Same catch-all result, a sixth of the price" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
