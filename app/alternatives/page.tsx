import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd } from '@/lib/schema'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import {
  COMPETITORS,
  COMPETITOR_ORDER,
  GIGGAL,
  HUB_LABELS,
  fmtUsd,
  fmtCredits,
} from '@/lib/competitorPricing'
import { Check, X, ArrowRight } from 'lucide-react'

const DESC =
  'Compare Giggal.ai with ZeroBounce, NeverBounce, BounceBan, MillionVerifier, Reoon and DeBounce on price, catch-all and SEG support. 1,000 free credits.'

export const metadata: Metadata = {
  title: { absolute: 'Giggal.ai vs Other Email Verifiers | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/alternatives' },
  openGraph: {
    title: 'How Giggal.ai Compares to Other Email Verifiers',
    description: DESC,
    url: 'https://giggal.ai/alternatives',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Giggal.ai Compares to Other Email Verifiers',
    description: DESC,
  },
}

// One-line routing summaries. Different copy from each deep page: the hub
// summarises, the pages argue.
const BLURBS: Record<string, string> = {
  zerobounce:
    'Marks catch-all addresses Catch-All without confirming the mailbox, and costs $129 at 10k against $9.90 here. Its deliverability suite is what keeps some teams on it.',
  neverbounce:
    'Resolved 8% of catch-alls in the LeadMagic test and keeps its pricing behind a calculator. A fit mainly if you clean lists inside a CRM.',
  bounceban:
    'Also resolves catch-all and SEG, so it comes down to terms: our 1,000 free bulk credits against a single-only free tier, a full price list against a calculator, 15 named gateways against 3.',
  millionverifier:
    'Does not resolve catch-all, 5% in the LeadMagic test, the lowest here. Cheaper per credit at a million, but that pays to check a segment you still cannot use.',
  reoon:
    'Reports catch-all as a status without confirming the mailbox, and does not advertise SEG support. Priced close to us at 10k, so the result on hard addresses is what decides it.',
  debounce:
    'Charges 10 credits per catch-all as a separate product, against 1.5 here. Standard checks are 1 credit and unknowns are free.',
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

// Each vendor's smallest published package (count + price). Calculator-only
// vendors have no fixed package price to show.
function StartPrice({ p }: { p: { credits: number; totalUsd: number } | null }) {
  if (!p) return <span className="text-slate-400 font-semibold">Calculator</span>
  return (
    <span className="inline-flex flex-col leading-tight">
      <span className="font-black">{fmtUsd(p.totalUsd)}</span>
      <span className="text-[10px] font-semibold text-slate-400">{fmtCredits(p.credits)} credits</span>
    </span>
  )
}

function YN({ v }: { v: boolean }) {
  return v ? (
    <Check className="w-4 h-4 text-emerald-600 inline" aria-label="Yes" />
  ) : (
    <X className="w-4 h-4 text-slate-400 inline" aria-label="No" />
  )
}

export default function AlternativesHubPage() {
  // Property rows; each renders Giggal's value plus a value per competitor
  // column. Transposed layout: properties down the left, tools across the top.
  const ROWS: { label: string; giggal: ReactNode; cell: (slug: string) => ReactNode }[] = [
    {
      label: 'Starting price',
      giggal: <StartPrice p={GIGGAL.startingPrice} />,
      cell: (slug) => <StartPrice p={COMPETITORS[slug].startingPrice} />,
    },
    {
      label: 'Resolves catch-all',
      giggal: <YN v={GIGGAL.resolvesCatchAll} />,
      cell: (slug) => <YN v={COMPETITORS[slug].resolvesCatchAll} />,
    },
    {
      label: 'SEG verifier',
      giggal: <YN v={GIGGAL.advertisesSegSupport} />,
      cell: (slug) => <YN v={COMPETITORS[slug].advertisesSegSupport} />,
    },
    {
      label: 'Free tier',
      giggal: HUB_LABELS.giggal.freeTier,
      cell: (slug) => HUB_LABELS[slug].freeTier,
    },
    {
      label: 'Credit expiry',
      giggal: HUB_LABELS.giggal.expiry,
      cell: (slug) => HUB_LABELS[slug].expiry,
    },
  ]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Alternatives', '/alternatives')} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-14 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          How Giggal.ai compares to{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            other email verifiers
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Six tools people switch between, on the three things that decide a verifier: price,
          whether it resolves catch-all addresses, and whether it verifies behind secure email
          gateways.
        </p>
      </section>

      {/* ── MASTER TABLE (properties as rows, tools as columns) ── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-20 space-y-4">
        <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200 text-[11px] font-black uppercase tracking-wider">
                <th className="px-4 py-3 text-slate-400 sticky left-0 bg-slate-50 z-10 min-w-[132px]">
                  &nbsp;
                </th>
                <th className="px-4 py-3 text-indigo-700 bg-indigo-50/70 text-center">Giggal.ai</th>
                {COMPETITOR_ORDER.map((slug) => (
                  <th key={slug} className="px-4 py-3 text-slate-500 text-center">
                    <Link
                      href={`/${slug}-alternative`}
                      className="hover:text-indigo-700 transition-colors"
                    >
                      {COMPETITORS[slug].name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12px] md:text-[13px]">
              {ROWS.map((row) => (
                <tr key={row.label} className="align-top">
                  <th
                    scope="row"
                    className="px-4 py-4 text-left font-bold text-slate-600 sticky left-0 bg-white z-10"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-4 bg-indigo-50/40 font-black text-indigo-800 text-center">
                    {row.giggal}
                  </td>
                  {COMPETITOR_ORDER.map((slug) => (
                    <td key={slug} className="px-4 py-4 font-medium text-slate-600 text-center">
                      {row.cell(slug)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] text-slate-400 font-medium">
          Starting price is each vendor’s smallest available package, so the volume differs by
          vendor. Prices change over time; this reflects the latest we checked, as of 6 August 2026.
        </p>
      </section>

      {/* ── PER-COMPETITOR ROUTING ───────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-8">
        <h2 className={sectionTitle}>Compare Giggal.ai with each email verifier</h2>
        <div className="space-y-6">
          {COMPETITOR_ORDER.map((slug) => {
            const c = COMPETITORS[slug]
            return (
              <div key={slug} className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900">{c.name}</h3>
                <p className={proseP}>
                  {BLURBS[slug]}{' '}
                  <Link
                    href={`/${slug}-alternative`}
                    className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors"
                  >
                    {c.name} vs Giggal.ai
                    <ArrowRight className="w-3.5 h-3.5 inline ml-0.5" />
                  </Link>
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── WHAT SEPARATES VERIFIERS ─────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Why most email verifiers stop at catch-all</h2>
        <div className={`space-y-5 ${proseP}`}>
          <p>
            On clean domains, every verifier here lands in the same place. The split is the hard part
            of a business list: catch-all domains, and domains behind a secure email gateway. Both
            accept mail whether or not the mailbox exists, so the ordinary check returns nothing.
          </p>
          <p>
            Most tools just tag the address Catch-All or Risky and hand it back unconfirmed. The resolve-catch-all column above is
            where that shows. Giggal.ai returns a real result on both{' '}
            <Link
              href="/catch-all-verification"
              className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors"
            >
              catch-all and risky emails
            </Link>{' '}
            and{' '}
            <Link
              href="/seg-email-verification"
              className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors"
            >
              emails protected by SEG gateways
            </Link>
            . Of the six here, only BounceBan sets out to do the same.
          </p>
        </div>
      </section>

      <AltCtaBand headline="Run your own list and compare" />

      <Footer />
    </main>
  )
}
