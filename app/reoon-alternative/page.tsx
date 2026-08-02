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
const competitor = getCompetitor('reoon')

const DESC =
  'Reoon and Giggal.ai are close on price, $11.90 vs $9.90 at 10,000. Giggal.ai resolves catch-all and verifies behind SEGs. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'Reoon Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/reoon-alternative' },
  openGraph: {
    title: 'A Reoon Alternative for Catch-All and SEG',
    description: DESC,
    url: 'https://giggal.ai/reoon-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Reoon Alternative for Catch-All and SEG',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is Giggal.ai cheaper than Reoon?',
    a: 'Barely. $9.90 vs $11.90 at 10,000 credits. That gap is too small to switch over. The real difference is what each does with catch-all and gateway addresses.',
  },
  {
    q: 'What does Giggal.ai do with catch-all addresses that Reoon does not?',
    a: 'It returns a real deliverable or undeliverable result. Reoon reports catch-all as a status and leaves it there. Catch-all is 1.5 credits in a run, 2 standalone. Reoon was not in the LeadMagic test, so there is no independent catch-all figure for it.',
  },
  {
    q: 'Does Reoon verify behind secure email gateways?',
    a: 'Reoon does not advertise SEG support. Giggal.ai detects and names 15 gateways, including Proofpoint, Mimecast and Barracuda, and returns a real result on addresses behind them.',
  },
  {
    q: 'How does Giggal.ai handle unknown results?',
    a: 'Unknown results are refunded automatically, so you only pay for the addresses we verify.',
  },
  {
    q: 'Can I test Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a list with catch-all and gateway domains and compare the results against Reoon.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ReoonAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'Reoon alternative', path: '/reoon-alternative' },
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
            Reoon alternative
          </span>{' '}
          that resolves catch-all and SEG
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Reoon and Giggal.ai are within two dollars at 10,000 credits, so price is not the story.
          Catch-all and gateways are: we confirm the mailbox where Reoon only flags it or skips it.
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
            { k: 'Price', v: 'About even. $9.90 vs $11.90 at 10k. Not the deciding factor.' },
            { k: 'Catch-all', v: 'We resolve it. Reoon reports it as a status and stops.' },
            { k: 'SEG', v: 'We detect 15 gateways. Reoon does not advertise SEG support.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          On a catch-all domain the server accepts every address. Reoon reports the status and stops,
          which is accurate but leaves the address as a maybe. We route those addresses down a
          separate path and return one of four results.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── SEG ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Secure email gateways</h2>
        <p className={proseP}>
          A gateway sits in front of the mail server and answers on its behalf, which breaks a plain
          SMTP check the same way a catch-all does. Reoon does not advertise SEG support. We detect
          15 gateways from a domain’s MX records, including Proofpoint, Mimecast and Barracuda, and
          return a real result on{' '}
          <Link
            href="/seg-email-verification"
            className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors"
          >
            emails protected by SEG gateways
          </Link>
          .
        </p>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Reoon pricing vs Giggal.ai</h2>
        <PricingLadder competitor={competitor} />
        <p className={proseP}>
          Reoon also runs a daily subscription, where credits reset each day and do not roll over.
          Ours are bought once and never expire. Steady daily volume suits Reoon’s model; bursty
          volume suits ours.
        </p>
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Reoon vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Take a list with catch-all and gateway domains in it.',
            'Run it here on the 1,000 free credits. No card.',
            'Compare those rows against Reoon. The price is a tie, so let the results decide.',
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

      <AltCtaBand headline="Price is a tie. Let the results decide." />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
