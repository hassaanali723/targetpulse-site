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
const competitor = getCompetitor('millionverifier')

const DESC =
  'MillionVerifier is $449 per million but marks catch-all Risky. Giggal.ai confirms those addresses, so more of the list comes back usable. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'MillionVerifier Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/millionverifier-alternative' },
  openGraph: {
    title: 'A MillionVerifier Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/millionverifier-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A MillionVerifier Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'How do the two compare on price?',
    a: 'At a million, MillionVerifier is $449 and Giggal.ai is $680. The number that matters is price per usable contact, because the two hand back different things on catch-all addresses, and a flagged address is one you cannot email.',
  },
  {
    q: 'What does Giggal.ai do with catch-all addresses that MillionVerifier does not?',
    a: 'It tells you whether the mailbox is real, deliverable or undeliverable. MillionVerifier marks them Risky and does not confirm the mailbox, 5% resolved in the LeadMagic test, the lowest measured. Catch-all is 1.5 credits in a run, 2 standalone.',
  },
  {
    q: 'Does MillionVerifier charge for catch-all or unknown results?',
    a: 'No, and that is fair. It does not charge for risky results, which covers unknown and catch-all. You still end up with a segment you cannot email, only un-billed.',
  },
  {
    q: 'Why does resolving catch-all matter?',
    a: 'A confirmed catch-all is a contact you can email. One that was only flagged is not, even if you were not charged for it.',
  },
  {
    q: 'Can I test Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all-heavy list and see how much comes back usable rather than merely un-billed.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function MillionVerifierAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'MillionVerifier alternative', path: '/millionverifier-alternative' },
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
            MillionVerifier alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          MillionVerifier is $449 per million and does not bill catch-all results. It also does not
          resolve them. We do, which changes how much of a list you can actually use.
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
            { k: 'Catch-all', v: 'We confirm it, valid or invalid. MillionVerifier marks most Risky (5% resolved, the lowest in the LeadMagic test).' },
            { k: 'Real cost', v: 'Price per usable contact, not per credit. An address you paid to check but cannot email still cost you.' },
            { k: 'At 1M', v: '$449 vs $680. What each returns on catch-all decides the cost per usable contact.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          MillionVerifier is fast on ordinary domains. On a catch-all domain it marks the address
          risky, does not charge you, and moves on. Fair billing, but the address is still unusable.
          We route those addresses down a separate path and return one of four results.
        </p>
        <VerdictExplainer />
        <BenchmarkCallout competitor={competitor} />
      </section>

      {/* ── COST PER USABLE CONTACT ──────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Per credit vs per usable contact</h2>
        <p className={proseP}>
          Say a list is 30% catch-all. Run it through a tool that marks catch-all Risky and a third of
          what you paid to verify comes back unusable. The real cost is the price per credit divided
          by the share of the list you can send to. A credit that returns only a flag can cost more
          per usable contact than one that returns a real answer.
        </p>
        <PricingLadder competitor={competitor} />
        <p className={proseP}>
          At a million, MillionVerifier is $449 and Giggal.ai is $680. Your catch-all share is what
          decides the real cost per usable contact.
        </p>
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>MillionVerifier vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Take a list with real catch-all volume.',
            'Run it here on the 1,000 free credits. No card.',
            'Count usable contacts, not credits spent. That is the number that matters.',
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

      <AltCtaBand headline="Measure usable contacts, not just credits" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
