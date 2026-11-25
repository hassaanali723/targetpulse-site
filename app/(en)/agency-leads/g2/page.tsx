import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MotionRuntime from '@/components/landing/MotionRuntime'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import DirectoryScrapeInspector from '@/components/agency-leads/DirectoryScrapeInspector'
import CatchAllRecoveryCalculator from '@/components/agency-leads/CatchAllRecoveryCalculator'
import { G2DualTrackExplorer } from '@/components/agency-leads/PlatformExplorers'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Server,
  Activity,
  GitBranch,
  AlertTriangle,
} from 'lucide-react'

const CANONICAL = '/agency-leads/g2'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai G2 Email Verification and Software Vendor Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'SaaS Vendor Lead Verification and Review Platform Data Cleaning',
  operatingSystem: 'Web',
  description:
    'Verify software vendor leads and reviewer lists scraped from G2.com. Resolve catch-all mailboxes at 98.5% accuracy, verify behind Proofpoint and Mimecast gateways, and protect cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Deep mailbox existence check without dispatching test emails',
    'Catch-all verification with 98.5% accuracy on business lists',
    'Direct checks past Mimecast, Proofpoint, and Barracuda gateways',
    'Role-based, disposable, and duplicate detection in CSV or Excel uploads (up to 50,000 rows)',
    '1,000 free credits on signup (no card needed) and Unknown credits refunded',
  ],
}

const g2Faqs: FaqItem[] = [
  {
    q: 'Why do scraped G2 leads carry high bounce risks?',
    a: 'G2 exports typically draw from software vendor listings and verified product reviews. In SaaS markets, startups pivot, rebrand, or get acquired while employees frequently switch employers. Sending unverified G2 leads into outbound campaigns exposes senders to closed corporate accounts and dead domains.',
  },
  {
    q: 'How does Giggal.ai resolve catch-all domains for G2 software vendor leads?',
    a: 'Many software vendors configure Google Workspace or Microsoft 365 with catch-all routing so inbound sales messages are caught cleanly. Ordinary verifiers mark these emails as Risky or Accept-All. Giggal.ai verifies whether each specific mailbox exists behind the catch-all rule, delivering 98.5% accuracy on business lists.',
  },
  {
    q: 'Can Giggal.ai detect when G2 reviewers have left their registered corporate employers?',
    a: 'Yes. G2 authenticates reviewers with business emails when a review is written. After reviewers change companies, those mailboxes are commonly deactivated. Giggal.ai checks live mailbox existence past catch-all configurations so closed employee accounts are flagged Undeliverable before sending.',
  },
  {
    q: 'Does verifying G2 leads support CSV or Excel spreadsheets with custom columns?',
    a: 'Yes. Upload a CSV or Excel file containing up to 50,000 rows per file and download results as a CSV with Deliverable, Undeliverable, or Unknown verdicts plus catch-all, role-based, disposable, and duplicate flags to build a clean email list.',
  },
  {
    q: 'How does Giggal.ai handle enterprise mail security gateways like Proofpoint and Mimecast?',
    a: 'Software vendors on G2 commonly protect mail servers behind Secure Email Gateways such as Mimecast, Proofpoint, Barracuda, or Cisco IronPort. Other tools return Unknown on these domains because the gateway hides mailbox checks. Giggal.ai verifies behind gateways directly and resolves them to valid or invalid.',
  },
  {
    q: 'What cold email bounce rate should SDRs target when emailing software vendor leads?',
    a: 'Cleaned lists verified with Giggal.ai usually bounce under 3%. For high-deliverability SaaS cold outreach, filtering out Undeliverable, Disposable, and unwanted Role-based contacts helps keep bounce rates below 2% and safeguards primary inbox placement.',
  },
  {
    q: 'Can we automate G2 email verification using Zapier, n8n, Clay, or the Giggal.ai API?',
    a: 'Yes. Giggal.ai provides a fast REST API alongside direct Zapier and n8n integrations, Clay API workflows, and an MCP server for Claude and ChatGPT so you can verify software vendor leads automatically as lists are enriched.',
  },
  {
    q: 'How many free verification credits does Giggal.ai provide for G2 leads?',
    a: 'Every new account receives 1,000 free credits on sign-up with no card needed, and credits never expire. Catch-all checks cost the same flat 1 credit per email, and Unknown results are refunded automatically.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export const metadata = {
  title: {
    absolute: 'G2 Email Verification | Clean Scraped Software Leads | Giggal.ai',
  },
  description:
    'Verify software vendor leads and reviewer lists scraped from G2.com. Resolve catch-all mailboxes at 98.5% accuracy, check behind Mimecast and Proofpoint, and protect cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai G2 email verification' }],
    title: 'G2 Email Verification | Clean Scraped Software Leads | Giggal.ai',
    description:
      'Verify software vendor leads and reviewer lists scraped from G2.com. Resolve catch-all mailboxes at 98.5% accuracy, verify behind SEG gateways, and protect cold email deliverability.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function G2LeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('G2 Software Leads', CANONICAL)
  const faqData = faqPageLd(g2Faqs)

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <Navbar />

      {/* ── CENTERED PRECISION HERO + VERIFIED TELEMETRY ROW ── */}
      <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-slate-900">
          G2 email verification for{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            high-performance SaaS outbound
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          Scraped G2 leads mix enterprise security gateways, job-hopping software reviewers, and catch-all SaaS domains. Verify vendor and reviewer mailboxes at 98.5% accuracy on business lists to protect cold email deliverability.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-lg shadow-indigo-600/25 transition-colors text-sm"
          >
            <span>Verify G2 leads free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/public/docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold hover:border-indigo-200 transition-colors text-sm"
          >
            <span>API documentation</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-500">
          {['1,000 free credits', 'No card needed', 'Works behind Proofpoint & Mimecast'].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        {/* Calm G2 Capability & Signal Bar */}
        <dl className="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {[
            { v: '98.5%', l: 'Verified accuracy on business & SaaS lists' },
            { v: '~30%+', l: 'Typical B2B list sitting on catch-all domains' },
            { v: 'SEG Ready', l: 'Verifies behind Mimecast, Proofpoint & Barracuda' },
            { v: '50,000', l: 'Addresses verified per CSV or Excel file' },
          ].map((m) => (
            <div key={m.l} className={`${card} p-5`}>
              <dt className="sr-only">{m.v}</dt>
              <dd>
                <span className="block text-2xl font-black tracking-tight text-slate-900 tabular-nums">{m.v}</span>
                <span className="mt-1 block text-xs text-slate-500 font-medium leading-normal">{m.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── INTERACTIVE DUAL-TRACK EXPLORER ── */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200">
        <G2DualTrackExplorer />
      </section>

      {/* ── SPLIT INSPECTOR + ENTERPRISE GATEWAY ARCHITECTURE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-10 lg:gap-14 items-center">
          <DirectoryScrapeInspector platform="g2" />

          <div className="space-y-5">
            <h2 className={sectionTitle}>Why enterprise gateways defeat basic G2 verifiers</h2>
            <p className={proseP}>
              G2.com serves as a major discovery hub for B2B software categories, competitor grids, and buyer reviews. SDRs and growth teams work with G2 leads either to pitch software vendors directly or to contact verified reviewers evaluating competing tools.
            </p>
            <p className={proseP}>
              Many software vendors sit behind Secure Email Gateways such as Mimecast, Proofpoint, Barracuda, or Cisco IronPort. Basic verifiers cannot see past those gateways, returning inconclusive Unknown labels or trusting false acceptance codes even on closed mailboxes.
            </p>
            <p className={proseP}>
              Paired with Google Workspace and Microsoft 365 catch-all setups, generic checkers leave large gaps across tech prospect lists. Giggal.ai verifies past security gateways and catch-all rules without sending any emails, achieving 98.5% accuracy on business lists.
            </p>
            <div className="pt-1 flex flex-wrap gap-2">
              {['Mimecast', 'Proofpoint', 'Barracuda', 'Cisco IronPort', 'Sophos'].map((seg) => (
                <span
                  key={seg}
                  className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-1.5"
                >
                  {seg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SAAS M&A, PIVOTS, AND REVIEWER CHURN ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              SaaS acquisitions, redirects, and reviewer job changes
            </h2>
            <p className={proseP}>
              Because B2B software startups consolidate frequently, G2 categories retain acquired or retired product listings long after teams merge. While an acquired brand URL can still redirect browsers to a parent site, old product domains often shut down email routing altogether.
            </p>
            <p className={proseP}>
              Equally risky are lists enriched from G2 reviewer profiles. Reviewers verify with corporate mailboxes when posting feedback, then switch roles or companies months later. Reaching out to former corporate accounts without pre-send checks generates preventable hard bounces on Google Workspace and Microsoft 365.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                stage: 'Submission Time',
                rate: 'Verified Work Email',
                desc: 'Reviewer confirms corporate mailbox when submitting review.',
                tone: 'border-emerald-200 bg-emerald-50/60',
                Icon: ShieldCheck,
                tint: 'text-emerald-700',
              },
              {
                stage: 'Team Changes',
                rate: 'Account Deactivated',
                desc: 'Promotions, job switches, and startup pivots close legacy aliases.',
                tone: 'border-amber-200 bg-amber-50/60',
                Icon: AlertTriangle,
                tint: 'text-amber-700',
              },
              {
                stage: 'M&A / Sunset',
                rate: 'MX Severed',
                desc: 'Websites redirect via HTTP while original mail exchangers shut off.',
                tone: 'border-rose-200 bg-rose-50/60',
                Icon: GitBranch,
                tint: 'text-rose-700',
              },
            ].map((item) => (
              <div key={item.stage} className={`rounded-2xl border p-5 space-y-2 ${item.tone}`}>
                <item.Icon className={`w-5 h-5 ${item.tint}`} />
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">{item.stage}</div>
                <div className={`text-lg font-black ${item.tint}`}>{item.rate}</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CatchAllRecoveryCalculator platformLabel="G2 Vendor" defaultCatchAllRate={30} />
      </section>

      {/* ── FOCUSED READING SECTION: HOW G2 VERIFICATION PROTECTS SAAS POOLS ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>How G2 email verification protects SaaS outbound pools</h2>
        <p className={proseP}>
          Prospecting G2 leads across software vendor profiles and buyer reviews introduces two technical hurdles that defeat ordinary checkers. First, enterprise software companies protect inbound mail behind Secure Email Gateways such as Mimecast, Proofpoint, and Barracuda that cause basic checkers to report Unknown. Second, catch-all domains make ordinary checks inconclusive without mailbox-level signals.
        </p>
        <p className={proseP}>
          Dedicated G2 email verification solves both hurdles cleanly. Checking behind gateways and catch-all rules directly verifies real software vendor leads and reviewer emails at 98.5% accuracy on business lists.
        </p>
        <p className={proseP}>
          Whether your revenue team rotates outbound volume across secondary domains or runs account-based outreach, checking every G2 list beforehand creates a clean email list that preserves cold email deliverability and keeps bounces low.
        </p>
        <p className={proseP}>
          Whenever new review cohorts appear or quarterly categories refresh, verify incremental batches via bulk CSV upload (up to 50,000 rows per file), REST API, Zapier, Clay, or n8n workflows so stale aliases never enter your CRM. Unknown credits are refunded automatically, and 1,000 free credits let you test real G2 exports with zero upfront commitment.
        </p>
        <p className={proseP}>
          Before launching any software outbound campaign, verify every CSV batch against live mail server signals rather than trusting stale database badges. Resolving catch-all and Secure Email Gateway addresses at 98.5% accuracy gives SaaS sales reps a dependable clean email list, protects shared outbound domains across Google Workspace and Microsoft 365, and removes closed corporate accounts alongside role-based aliases cleanly.
        </p>
        <p className={proseP}>
          You can inspect individual vendor or reviewer emails free using the Giggal.ai single checker or upload full exports up to 50,000 contacts per spreadsheet. Every row returns a clear valid, invalid, or unknown outcome for 1 credit flat, making pre-send list cleaning predictable for high-growth SaaS teams.
        </p>
      </section>

      {/* ── ROLE ACCOUNT SEGREGATION + COMPARISON TABLE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Filtering compliance aliases from SaaS revenue buyers
            </h2>
            <p className={proseP}>
              When automated spiders pull email addresses from vendor websites, they regularly collect shared aliases such as security@, legal@, dpo@, billing@, and support@. Sending cold sales pitches into compliance or ticketing queues hurts response rates and raises spam complaint risks.
            </p>
            <p className={proseP}>
              Giggal.ai sets role_account and disposable flags alongside deliverable verdicts on every G2 row so your clean email list routes directly to VP Sales, Product, CTO, and founder mailboxes.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'Personal Buyers', emails: 'vp@, cto@, cro@, name@', action: 'Deliverable', cls: 'border-emerald-200 bg-emerald-50/60 text-emerald-800' },
              { title: 'Commercial Desks', emails: 'partners@, sales@', action: 'Role-Based (Keep Optional)', cls: 'border-indigo-200 bg-indigo-50/60 text-indigo-800' },
              { title: 'Compliance / Desks', emails: 'security@, legal@, support@', action: 'Filter Out', cls: 'border-rose-200 bg-rose-50/60 text-rose-800' },
            ].map((b) => (
              <div key={b.title} className={`rounded-2xl border p-4 space-y-2 ${b.cls}`}>
                <div className="text-xs font-extrabold uppercase tracking-wider">{b.action}</div>
                <h3 className="text-sm font-black text-slate-900">{b.title}</h3>
                <p className="text-[11px] font-mono text-slate-600">{b.emails}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clean 3-Option Matrix Table */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>G2 email verification: comparing your options</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Verification Capability</th>
                  <th className="py-3.5 px-5 font-bold">Raw G2 Scrape</th>
                  <th className="py-3.5 px-5 font-bold">Generic Verifiers</th>
                  <th className="py-3.5 px-5 font-bold bg-indigo-50/60 text-indigo-900">Giggal.ai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Catch-All Resolution</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Unchecked catch-all risk</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Flagged Risky (left to you)</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Deliverable or Undeliverable (98.5%)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">SEG Gateways (Mimecast/Proofpoint)</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Unchecked</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Marked Unknown</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Direct Gateway Verification</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Reviewer Job Churn Check</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Contains closed accounts</td>
                  <td className="py-3.5 px-5 text-slate-600">Stopped by catch-all DNS</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Mailbox Check Past Catch-All</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Post-Verification Bounce Rate</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">High bounce exposure</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Depends on Risky handling</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Usually under 3% (aim &lt; 2%)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Credit Policy</td>
                  <td className="py-3.5 px-5 text-slate-400">N/A</td>
                  <td className="py-3.5 px-5 text-slate-600">Charges extra or keeps Unknown</td>
                  <td className="py-3.5 px-5 text-indigo-700 font-extrabold bg-indigo-50/20">1 credit flat, Unknown refunded</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Outbound Infrastructure Safeguards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {[
            { Icon: ShieldCheck, title: 'SPF, DKIM, DMARC Alignment', body: 'Authenticate sending domains with SPF TXT entries, DKIM keys, and DMARC policies before emailing tech teams.' },
            { Icon: Activity, title: 'Measured Inbox Pacing', body: 'Spread verified software vendor leads across warmed secondary inboxes rather than spiking daily send volume.' },
            { Icon: Server, title: 'Periodic Re-Verification', body: 'Re-check older G2 lists prior to new outreach waves so fresh layoffs, acquisitions, and domain swaps do not bounce.' },
          ].map(({ Icon, title, body }) => (
            <div key={title} className={`${card} p-5 space-y-2`}>
              <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900">
                <Icon className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{title}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-12 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions: G2 email verification</h2>
          <p className={proseP}>
            Clear answers regarding G2 leads, enterprise security gateways, and SaaS list hygiene.
          </p>
        </div>
        <FaqAccordion items={g2Faqs} />
      </section>

      <AltCtaBand
        headline="Clean your G2 software vendor and reviewer leads today"
        supporting="98.5% accuracy on business lists including catch-all and gateway verification. Unknown credits refunded. 1,000 free credits."
        buttonText="Verify G2 leads free"
      />

      <Footer />
    </main>
  )
}
