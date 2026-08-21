import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd, itemListLd } from '@/lib/schema'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import {
  COMPETITORS,
  COMPETITOR_ORDER,
  ALL_COMPETITOR_SLUGS,
  GIGGAL,
  HUB_LABELS,
  fmtUsd,
  fmtCredits,
} from '@/lib/competitorPricing'
import { Check, X, ArrowRight } from 'lucide-react'

// Tool count is derived, not typed, so the headline never goes stale when a
// vendor is added to competitorPricing.ts. +1 for Giggal itself.
const TOOL_COUNT = ALL_COMPETITOR_SLUGS.length + 1

const TITLE = `${TOOL_COUNT} Best Catch-All Email Verification Tools, Ranked`
const DESC = `Catch-all email verification tools ranked on whether they resolve accept-all addresses, whether they verify behind secure email gateways, and what they cost.`

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/alternatives' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/alternatives',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

// ── Ranking ──────────────────────────────────────────────────────────────────
// The order below is computed from competitorPricing.ts, never hand-sorted, and
// the criteria are printed on the page so a reader can disagree with the method
// rather than guess at it. Three tests, applied in order:
//
//   1. Does it return a real result on a catch-all address, or just label it
//   2. Does it verify behind a secure email gateway
//   3. What does 10,000 verifications cost
//
// A vendor with no published 10k price sorts last within its band rather than
// being credited with a price we could not read.
function rankScore(slug: string): [number, number, number] {
  const c = COMPETITORS[slug]
  const ten = c.tiers.find((t) => t.credits === 10000)
  const price = ten && ten.totalUsd !== null && ten.status !== 'unknown' ? ten.totalUsd : Infinity
  return [c.resolvesCatchAll ? 0 : 1, c.advertisesSegSupport ? 0 : 1, price]
}

const RANKED = [...ALL_COMPETITOR_SLUGS].sort((a, b) => {
  const [ax, ay, az] = rankScore(a)
  const [bx, by, bz] = rankScore(b)
  return ax - bx || ay - by || az - bz || COMPETITORS[a].name.localeCompare(COMPETITORS[b].name)
})

// One-line routing summaries. Different copy from each deep page: the hub
// summarises, the pages argue.
const BLURBS: Record<string, string> = {
  zerobounce:
    'Marks catch-all addresses Catch-All without confirming the mailbox, and costs $129 at 10k against $9.90 here. Its deliverability suite is what keeps some teams on it.',
  neverbounce:
    'Resolved 8% of catch-alls in the LeadMagic test, and its PAYG runs $50 at 10k against our $9.90. A fit mainly if you clean lists inside a CRM.',
  bounceban:
    'Also resolves catch-all and SEG, so it comes down to terms: our 1,000 free bulk credits against a single-only free tier, a full price list against a calculator, 15 named gateways against 3.',
  millionverifier:
    'Its Catch-All Verifier resolves roughly 30 to 40% of accept-all addresses and marks the remainder Risky, and it managed 5% in the LeadMagic test, the lowest here. The per-credit rate at a million is low, but a large part of that segment comes back unusable.',
  reoon:
    'Reports catch-all as a status without confirming the mailbox, and does not advertise SEG support. Priced close to us at 10k, so the result on hard addresses is what decides it.',
  debounce:
    'Charges 10 credits per catch-all as a separate product, against 1.5 here. Standard checks are 1 credit and unknowns are free.',
  bouncer:
    'Resolves catch-all too, via Deep Catch-All Verification on Google and Microsoft, but costs $60 at 10k against our $9.90 and does not verify behind gateways. The closest match on results here.',
  emailable:
    'Marks accept-all addresses Risky without confirming them, and runs $60 at 10k against our $9.90. Fast, with a generous 250-credit free tier.',
  clearout:
    'Returns catch-all as its own status without confirming the mailbox, at $65 per 10,000 pay-as-you-go. Bundles an email finder and phone validation.',
  kickbox:
    'Flags accept-all with a field rather than resolving it, at $70 per 10,000 one-time. A developer favourite with strong API docs.',
  emaillistverify:
    'At $27 per 10k, where we are $9.90, and it returns catch-all as ok_for_all without confirming. We resolve it.',
  myemailverifier:
    '$15 at 10k and $349 at a million, but flags catch-all rather than resolving it. We resolve it, and add SEG.',
  briteverify:
    'An enterprise verifier from Validity that flags accept-all as risky, with published bundles around $80 per 10,000. We publish $9.90 at 10k and resolve catch-all.',
  scrubby:
    'Validates catch-all and SEG too, but at $80 per 10k and 3 credits per catch-all. We are $9.90 and 1.5 credits, with 1,000 free bulk credits.',
  quickemailverification:
    '$60 per 10k, and returns catch-all as a status without confirming it. We resolve it, at $9.90.',
  mailfloss:
    'A subscription tool that auto-cleans your ESP list daily but flags catch-all rather than resolving it. We resolve it, pay-as-you-go at $9.90.',
  bounceless:
    'Now resolves catch-all too, but bills 5 credits each against our 1.5, at $29 per 10k. We add SEG and 1,000 free bulk credits.',
  hunter:
    'A finder-first platform where verification is bundled into monthly plans. We are a dedicated verifier that resolves catch-all, at a published $9.90 per 10,000.',
  snovio:
    'A finder and outreach platform with verification bundled into its credits. We resolve catch-all and publish a flat per-credit price.',
  apollo:
    'A sales platform where verification is one feature; it claims 91% on catch-all. We are a dedicated verifier that resolves catch-all and SEG, pay-as-you-go.',
  findymail:
    'Verifies catch-all and guarantees a bounce rate under 5%, but it is a finder first and sells one $99 monthly plan with 5,000 verifier credits. Nothing above that is priced publicly.',
  leadmagic:
    'Resolves catch-all and publishes its own benchmark on it, which is more than most vendors do. It is an enrichment subscription though: 10,000 a month means the $249 Growth plan, against $9.90 one-time here.',
  allegrow:
    'The closest positioning to ours: catch-all resolved to valid or invalid, gateways named, and a 99% claim against our 98.5%. It is priced as a $99 monthly subscription with $8 per 1,000 add-ons, and it does sender reputation work we do not.',
  listmint:
    'Returns catch_all_valid and catch_all_invalid as explicit result codes, which is genuinely useful. It meters catch-all from a separate, smaller credit pool, and its prices render in the browser so we could not verify them.',
  anymailfinder:
    'Verifies catch-all rather than skipping it, and claims 98.9% accuracy at 86.4% coverage. Monthly subscription at $199 for 10,000 against our $9.90 one-time, and it finds addresses, which we do not.',
  no2bounce:
    'Catch-all, named gateways and credits that never expire, the same shape as us, at $17 per 10,000 against our $9.90. It adds no surcharge on catch-all, where we bill 1.5 credits, so at a catch-all-heavy list the gap narrows.',
  instantly:
    'A sending platform where verification is one feature billed at 0.25 credit per lead, so 10,000 a month needs the $197 plan. It sends the campaign too, which we do not.',
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

// Each vendor's smallest published package (count + price). Subscription and
// per-seat platforms have no one-time package, shown as "Per plan".
function StartPrice({ p }: { p: { credits: number; totalUsd: number } | null }) {
  if (!p) return <span className="text-slate-400 font-semibold">Per plan</span>
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

function RankBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-indigo-50 text-indigo-700 text-[13px] font-black align-middle">
      {n}
    </span>
  )
}

// The three ranking facts as plain labelled text under each entry. Written as
// words rather than icons alone so the sentence survives being read out of the
// page by something that cannot see an SVG check mark.
function FactRow({
  catchAll,
  seg,
  price,
}: {
  catchAll: boolean
  seg: boolean
  price: string
}) {
  return (
    <p className="text-[13px] font-semibold text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
      <span>Resolves catch-all: {catchAll ? 'Yes' : 'No'}</span>
      <span className="text-slate-300" aria-hidden="true">
        |
      </span>
      <span>Verifies behind SEG: {seg ? 'Yes' : 'No'}</span>
      <span className="text-slate-300" aria-hidden="true">
        |
      </span>
      <span>10,000 emails: {price}</span>
    </p>
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
      label: 'Catch-all verification',
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
      {/* The ranking, machine-readable. Positions match the visible list exactly
          because both are generated from RANKED. */}
      <JsonLd
        data={itemListLd({
          id: 'https://giggal.ai/alternatives#ranking',
          name: TITLE,
          description: DESC,
          items: [
            {
              name: 'Giggal.ai',
              url: 'https://giggal.ai/',
              description:
                'Resolves catch-all and accept-all domains to a valid or invalid result, verifies behind 15 secure email gateways, $9.90 per 10,000 with credits that never expire.',
            },
            ...RANKED.map((slug) => ({
              name: COMPETITORS[slug].name,
              url: `https://giggal.ai/${slug}-alternative`,
              description: BLURBS[slug],
            })),
          ],
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-14 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {TOOL_COUNT} best{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            catch-all email verification tools
          </span>
          , ranked
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Almost every verifier handles a clean domain. The list below is ordered by what happens
          on the addresses that are actually hard: accept-all domains, and mailboxes sitting behind
          a secure email gateway. Price breaks the ties.
        </p>
        <p className="text-sm text-slate-500 font-medium">
          We publish this list and we sell one of the tools on it, so the ranking method is spelled
          out below and every price carries the date we checked it.
        </p>
      </section>

      {/* ── METHOD ───────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-14">
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 md:p-7 space-y-4 card-vivid-shadow">
          <h2 className="text-lg font-black text-slate-900">How this list is ordered</h2>
          <ol className={`list-decimal pl-5 space-y-2 ${proseP}`}>
            <li>
              <strong className="text-slate-900">Does it resolve catch-all?</strong> A tool that
              returns a real valid or invalid result on an accept-all domain ranks above one that
              hands the address back labelled Catch-All, Risky or Unknown.
            </li>
            <li>
              <strong className="text-slate-900">Does it verify behind a secure email gateway?</strong>{' '}
              Proofpoint, Mimecast and Barracuda accept everything at the edge, which defeats the
              ordinary check. Few tools claim this at all.
            </li>
            <li>
              <strong className="text-slate-900">What does 10,000 verifications cost?</strong> Used
              only to break ties within a band. A vendor that does not publish a 10,000 price sorts
              last in its band rather than being given a number we could not verify.
            </li>
          </ol>
          <p className="text-[12px] text-slate-400 font-medium">
            Facts come from each vendor’s own live pricing and documentation pages. Anything we
            could not read directly is marked Not published rather than estimated.
          </p>
        </div>
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
          vendor. The table shows a selection; the full list of verifiers we compare is below. Prices
          change over time; each figure reflects the latest date we checked, shown on its comparison
          page.
        </p>
      </section>

      {/* ── THE RANKED LIST ──────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-8">
        <h2 className={sectionTitle}>The {TOOL_COUNT} tools, in order</h2>

        <ol className="space-y-8">
          {/* Position 1 is ours, and it is first because it clears both tests at
              the lowest 10k price. Said plainly rather than dressed up. */}
          <li className="space-y-2">
            <h3 className="text-lg font-black text-slate-900">
              <RankBadge n={1} /> Giggal.ai
            </h3>
            <FactRow
              catchAll={GIGGAL.resolvesCatchAll}
              seg={GIGGAL.advertisesSegSupport}
              price={fmtUsd(9.9)}
            />
            <p className={proseP}>
              Our own catch-all email verifier, and the reason we built the list. It resolves
              accept-all domains to valid or invalid instead of labelling them, verifies behind{' '}
              {GIGGAL.segGatewayCount} named secure email gateways, and costs $9.90 per 10,000 with
              credits that never expire. It does not find email addresses and it has a smaller
              review history than the older names below, both of which matter if that is what you
              are shopping for.
            </p>
            <p className="text-[13px] text-slate-500 font-semibold">
              Best for: B2B lists where a large share of contacts sit on catch-all or gateway
              domains.
            </p>
          </li>

          {RANKED.map((slug, i) => {
            const c = COMPETITORS[slug]
            const ten = c.tiers.find((t) => t.credits === 10000)
            const price =
              ten && ten.totalUsd !== null && ten.status !== 'unknown'
                ? `${fmtUsd(ten.totalUsd)}${ten.perMonth ? ' / month' : ''}`
                : 'Not published'
            return (
              <li key={slug} className="space-y-2">
                <h3 className="text-lg font-black text-slate-900">
                  <RankBadge n={i + 2} /> {c.name}
                </h3>
                <FactRow
                  catchAll={c.resolvesCatchAll}
                  seg={c.advertisesSegSupport}
                  price={price}
                />
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
                {c.betterFitFor[0] && (
                  <p className="text-[13px] text-slate-500 font-semibold">
                    Better than us at: {c.betterFitFor[0]}.
                  </p>
                )}
              </li>
            )
          })}
        </ol>
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
            . Several tools here now attempt catch-all, including BounceBan, Bouncer, Scrubby and
            Bounceless, at varying depth and price. Giggal.ai resolves it at 1.5 credits and also
            verifies behind 15 named secure email gateways.
          </p>
        </div>
      </section>

      <AltCtaBand headline="Run your own list and compare" />

      <Footer />
    </main>
  )
}
