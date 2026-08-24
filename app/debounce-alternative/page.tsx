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
const competitor = getCompetitor('debounce')

const DESC =
  'DeBounce charges 10 credits per catch-all check as a separate product. Giggal.ai charges 1.5 and resolves them in the same run. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'DeBounce Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/debounce-alternative' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'A DeBounce Alternative With Catch-All in the Same Run',
    description: DESC,
    url: 'https://giggal.ai/debounce-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A DeBounce Alternative With Catch-All in the Same Run',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'How much does catch-all checking cost on DeBounce versus Giggal.ai?',
    a: 'DeBounce charges 10 credits per catch-all address, as a separate product. Giggal.ai charges a flat 1 credit across all addresses in the same run. On a 10,000-address list that is 30% catch-all, DeBounce spends about 37,000 credits while Giggal.ai spends exactly 10,000 credits.',
  },
  {
    q: 'Does DeBounce actually resolve catch-all, or just charge more?',
    a: 'It returns results through a real catch-all product. But in the LeadMagic test it resolved 6% of catch-all addresses, so those 10-credit checks cleared a small share in that run. Giggal.ai charges a flat 1 credit for the same job.',
  },
  {
    q: 'Do Giggal.ai credits expire the way DeBounce credits do?',
    a: 'Neither expires, and both treat duplicates as free. On those two points the tools are even.',
  },
  {
    q: 'Is catch-all a separate product on Giggal.ai?',
    a: 'No. Catch-all is verified in the same run at a flat 1 credit, not billed as a separate add-on.',
  },
  {
    q: 'Can I test Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all-heavy list and watch the credit spend against what the same list would cost on DeBounce.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function DeBounceAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'DeBounce alternative', path: '/debounce-alternative' },
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
            DeBounce alternative
          </span>{' '}
          with catch-all in the same run
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          DeBounce charges 10 credits per catch-all address, as a separate product. We charge 1.5 in
          the same run. On a list with real catch-all volume, that gap compounds fast.
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
            { k: 'Catch-all', v: '10 credits at DeBounce, a separate product. 1.5 here, in the same run.' },
            { k: '30% list', v: 'A 10k list, 30% catch-all: ~37,000 credits vs ~11,500.' },
            { k: 'Resolution', v: 'That 10-credit check resolved 6% of catch-alls in the LeadMagic test.' },
            { k: 'Even ground', v: 'Standard checks are 1 credit on both. Credits never expire on either.' },
          ]}
        />
      </section>

      {/* ── THE ARITHMETIC ───────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>The catch-all math</h2>
        <p className={proseP}>
          A 10,000-address list, 30% on catch-all domains. That is 7,000 ordinary addresses and 3,000
          catch-all ones.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 card-vivid-shadow space-y-2">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">DeBounce</p>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              7,000 standard at 1 credit, plus 3,000 catch-all at 10 credits.
            </p>
            <p className="text-3xl font-black text-slate-900">~37,000 credits</p>
          </div>
          <div className="rounded-2xl border-2 border-indigo-100 bg-white p-6 card-vivid-shadow ring-2 ring-indigo-600/5 space-y-2">
            <p className="text-[11px] font-black uppercase tracking-wider text-indigo-600">Giggal.ai</p>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              10,000 emails verified at a flat 1 credit each.
            </p>
            <p className="text-3xl font-black text-indigo-700">10,000 credits</p>
          </div>
        </div>
        <p className={proseP}>
          Same list, under a third of the credits. In dollars the gap is even wider: DeBounce is about
          $0.0025 a credit at 10,000, so its 10-credit catch-all runs near $0.025 against
          $0.00099 on Giggal.ai.
        </p>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What the catch-all credits resolve</h2>
        <p className={proseP}>
          DeBounce does return results through its catch-all product, so this is not paying for
          nothing. But in the LeadMagic test it resolved 6% of catch-all addresses, so the 10-credit
          check cleared a small share in that run. We return one of four real results.
        </p>
        <VerdictExplainer />
        <BenchmarkCallout competitor={competitor} />
      </section>

      {/* ── STANDARD PRICING ─────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>DeBounce standard pricing</h2>
        <p className={proseP}>
          Outside catch-all, DeBounce is $25 at 10,000, $135 at 100,000 and $750 at a million, read
          from its live slider. Both prices are listed in full below.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>DeBounce vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Count the catch-all share of your list and run it through the 10 vs 1.5 sum above.',
            'Run a real segment here on the 1,000 free credits. No card.',
            'Compare the resolved rows against a DeBounce run, and the credit spend against the sum.',
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

      <AltCtaBand headline="Run the catch-all math on your own list" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
