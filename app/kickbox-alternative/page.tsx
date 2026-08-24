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
const competitor = getCompetitor('kickbox')

const DESC =
  'Kickbox flags accept-all with a field rather than resolving it, at $70 per 10,000 one-time. Giggal.ai resolves catch-all at $9.90 per 10,000. 1,000 free credits, no card.'

export const metadata: Metadata = {
  title: { absolute: 'Kickbox Alternative | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/kickbox-alternative' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'A Kickbox Alternative That Resolves Catch-All',
    description: DESC,
    url: 'https://giggal.ai/kickbox-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Kickbox Alternative That Resolves Catch-All',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Does Giggal.ai resolve catch-all where Kickbox flags it?',
    a: 'Yes. Kickbox returns a result plus an accept_all field, and on accept-all domains it sets that flag without confirming the mailbox. Giggal.ai returns a real deliverable or undeliverable result on those addresses, at a flat 1 credit per email.',
  },
  {
    q: 'How much does Kickbox cost compared with Giggal.ai?',
    a: 'Kickbox publishes a fixed one-time price table: $70 at 10,000, $500 at 100,000 and $2,999 at a million. Giggal.ai is $9.90 at 10,000 credits, $76 at 100,000 and $680 at a million.',
  },
  {
    q: 'What is Kickbox better at?',
    a: 'Kickbox is a developer favourite: a clean real-time API, strong documentation, the Sendex deliverability score, and native integrations with ESPs such as SendGrid, Mailchimp and ActiveCampaign. If you build on the API, it is a solid choice.',
  },
  {
    q: 'Do Giggal.ai credits expire?',
    a: 'No. Giggal.ai credits never expire. Kickbox does not publish a credit expiry policy on its pricing page, so check with them if that matters to you.',
  },
  {
    q: 'Can I try Giggal.ai before switching?',
    a: 'Yes. 1,000 free credits, no card, on a bulk upload. Re-run a list Kickbox flagged accept-all and see how many resolve to a real result.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function KickboxAlternativePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Alternatives', path: '/alternatives' },
          { name: 'Kickbox alternative', path: '/kickbox-alternative' },
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
            Kickbox alternative
          </span>{' '}
          that resolves catch-all
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Kickbox is a developer favourite with a clean API, but on accept-all domains it sets a flag
          and leaves the mailbox unconfirmed. Giggal.ai returns a real result, at $9.90 per 10,000.
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
            { k: 'Catch-all', v: 'We resolve it, valid or invalid. Kickbox sets an accept_all flag and stops.' },
            { k: 'Price', v: 'Kickbox is $70 at 10k and $2,999 at a million; we are $9.90 and $680.' },
            { k: 'Free tier', v: 'Kickbox gives 100 verifications; we give 1,000 bulk credits, no card.' },
            { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
          ]}
        />
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies catch-all addresses</h2>
        <p className={proseP}>
          Kickbox returns a deliverability result alongside an accept_all field. On an accept-all
          domain it sets that flag and hands the address back without confirming the mailbox, which is
          honest but leaves the decision to you. We route those addresses down a separate path and
          return one of four results, so the real mailboxes come back deliverable rather than flagged.
        </p>
        <VerdictExplainer />
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Kickbox pricing vs Giggal.ai</h2>
        <p className={proseP}>
          Kickbox publishes a fixed one-time price table: $70 at 10,000, $500 at 100,000 and $2,999 at
          a million. Giggal.ai is $9.90 at 10,000, $76 at 100,000 and $680 at a million. Both are
          one-time credits, and neither charges for unknown or indeterminate results.
        </p>
        <PricingLadder competitor={competitor} />
      </section>

      {/* ── FEATURE TABLE ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Kickbox vs Giggal.ai</h2>
        <ComparisonTable competitor={competitor} />
        <p className="text-[13px] text-slate-500 font-medium">
          A dash means the vendor does not publish that figure, such as Kickbox’s accuracy claim.
        </p>
      </section>

      {/* ── TEST IT ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Try it on your own list</h2>
        <ol className="space-y-3">
          {[
            'Export a list you already checked in Kickbox.',
            'Run it here on the 1,000 free credits. No card.',
            'Look at the rows Kickbox flagged accept-all. Count how many come back real.',
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

      <AltCtaBand headline="Resolve the addresses Kickbox flags accept-all" />

      <RelatedLinks />

      <Footer />
    </main>
  )
}
