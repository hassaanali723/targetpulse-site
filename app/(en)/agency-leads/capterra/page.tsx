import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MotionRuntime from '@/components/landing/MotionRuntime'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import DirectoryScrapeInspector from '@/components/agency-leads/DirectoryScrapeInspector'
import CatchAllRecoveryCalculator from '@/components/agency-leads/CatchAllRecoveryCalculator'
import { CapterraDeepDiveTabs } from '@/components/agency-leads/PlatformExplorers'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Activity,
  Server,
  FileSpreadsheet,
} from 'lucide-react'

const CANONICAL = '/agency-leads/capterra'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Capterra Email Verification and Vendor List Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Software Directory Lead Verification and Vendor List Scrubbing',
  operatingSystem: 'Web',
  description:
    'Verify software vendor leads scraped from Capterra and software directories. Detect dead product domains, remove malformed rows, resolve catch-all mailboxes at 98.5% accuracy, and protect cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Deep mailbox existence check without dispatching test emails',
    'Catch-all verification with 98.5% accuracy on business lists',
    'Role-based, disposable, and duplicate flags alongside valid/invalid verdicts',
    'CSV or Excel uploads up to 50,000 rows per file, download results as CSV',
    '1,000 free credits on signup (no card needed) and Unknown credits refunded',
  ],
}

const capterraFaqs: FaqItem[] = [
  {
    q: 'Why do scraped Capterra vendor leads carry high bounce risks?',
    a: 'Software directories often retain listings for retired products, acquired startups, and legacy software tools that halted operations years ago. Scrapers collecting contacts from linked vendor websites frequently pull lapsed domain names, invalid mail servers, malformed URL text, or support@ desks. Emailing raw Capterra vendor leads without checking invites bounce penalties on Workspace and Microsoft 365.',
  },
  {
    q: 'How does Giggal.ai resolve catch-all domains for Capterra software leads?',
    a: 'On typical B2B lists, around 30% of contacts sit on catch-all domains (often higher among modern software companies using Google Workspace or Microsoft 365). Ordinary verifiers label catch-all addresses Risky and leave you guessing. Giggal.ai checks whether the underlying mailbox actually exists, achieving 98.5% accuracy on business lists.',
  },
  {
    q: 'Can Giggal.ai separate software decision-makers from customer support desks?',
    a: 'Yes. Directory profile links regularly point to helpdesks or customer support forms, causing scrapers to harvest support@, help@, or billing@ emails. Giggal.ai attaches a role_account flag to shared addresses so sales teams separate personal buyers from shared ticketing desks cleanly.',
  },
  {
    q: 'What happens if tracking parameters or malformed strings get scraped into the email column?',
    a: 'When automated web scrapers mistake tracking parameters, URLs, or malformed HTML strings for email addresses, Giggal.ai rejects those invalid strings cleanly during syntax and domain verification so broken entries are never sent.',
  },
  {
    q: 'Can we upload CSV or Excel files with custom Capterra fields intact?',
    a: 'Yes. Upload a CSV or Excel file containing up to 50,000 email addresses per file. Your downloaded CSV preserves the list structure and includes clear Deliverable, Undeliverable, or Unknown verdicts plus catch-all, duplicate, disposable, and role flags to create a clean email list.',
  },
  {
    q: 'What bounce rate should sales teams aim for when prospecting Capterra software leads?',
    a: 'Lists cleaned with Giggal.ai usually bounce under 3%. For cold outbound prospecting to software directory leads, removing Undeliverable, Disposable, and unwanted Role-based contacts keeps hard bounce rates below 2% and protects sender reputation.',
  },
  {
    q: 'Can we automate Capterra email verification inside Zapier, n8n, Clay, or an API?',
    a: 'Yes. Giggal.ai integrates directly with Zapier and n8n, connects into Clay tables via API, and offers a full REST API plus MCP server for automated list verification workflows.',
  },
  {
    q: 'How many free verification credits does Giggal.ai provide for Capterra leads?',
    a: 'Every new account includes 1,000 free credits immediately on signup with no card needed, and credits never expire. Catch-all verification costs the same 1 credit per email, and Unknown results are refunded automatically.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export const metadata = {
  title: {
    absolute: 'Capterra Email Verification | Clean Scraped Software Leads | Giggal.ai',
  },
  description:
    'Verify software vendor leads scraped from Capterra. Filter retired software domains, flag role accounts, resolve catch-all mailboxes at 98.5% accuracy, and protect cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai Capterra email verification' }],
    title: 'Capterra Email Verification | Clean Scraped Software Leads | Giggal.ai',
    description:
      'Verify software vendor leads scraped from Capterra. Filter retired software domains, resolve catch-all mailboxes at 98.5% accuracy, and protect cold email deliverability.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function CapterraLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Capterra Software Leads', CANONICAL)
  const faqData = faqPageLd(capterraFaqs)

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <Navbar />

      {/* ── ASYMMETRIC SPLIT HERO + LIVE CAPTERRA INSPECTOR ── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-14 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.07] text-slate-900">
              Capterra email verification for{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
                clean software directory lists
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Raw Capterra vendor leads often mix retired software domains, shared support desks, and scraper syntax noise. Resolve catch-all domains at 98.5% accuracy on business lists and keep cold email deliverability protected.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-lg shadow-indigo-600/25 transition-colors text-sm"
              >
                <span>Verify Capterra leads free</span>
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

            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-500">
              {['1,000 free credits', 'No card needed', '1 credit flat, Unknown refunded'].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <DirectoryScrapeInspector platform="capterra" />
        </div>
      </section>

      {/* ── VISUAL LIST BREAKDOWN PANEL (MUTUALLY EXCLUSIVE ILLUSTRATIVE 100% BAR) ── */}
      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-slate-200 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <h2 className={sectionTitle}>What sits inside an illustrative software directory export</h2>
            <p className={proseP}>
              Four key buckets Giggal.ai separates when cleaning raw Capterra vendor leads before cold outreach begins.
            </p>
          </div>
          <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider shrink-0">
            Four-bucket list triage
          </span>
        </div>

        {/* Clean 100% Proportional Bar (55 + 25 + 12 + 8 = 100%) */}
        <div className={`${card} p-6 space-y-6`}>
          <div className="flex h-3.5 rounded-full overflow-hidden gap-1 bg-slate-100">
            <div className="bg-emerald-500 rounded-l-full" style={{ width: '55%' }} title="Standard Valid Contacts" />
            <div className="bg-amber-500" style={{ width: '25%' }} title="Catch-All Bucket (Resolved Valid/Invalid)" />
            <div className="bg-indigo-500" style={{ width: '12%' }} title="Role-Based & Duplicate Rows" />
            <div className="bg-rose-500 rounded-r-full" style={{ width: '8%' }} title="Dead MX, Zombie & Syntax Errors" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { color: 'bg-emerald-500', tag: 'Direct Pass', title: 'Standard Valid Mailboxes', desc: 'Verified corporate buyers on active software domains ready for outreach.' },
              { color: 'bg-amber-500', tag: '98.5% Business Accuracy', title: 'Catch-All SaaS Domains', desc: 'Domains accepting every test probe. Giggal.ai checks each mailbox instead of flagging Risky.' },
              { color: 'bg-indigo-500', tag: 'List Hygiene Flags', title: 'Role Desks & Duplicates', desc: 'Shared support@, help@, and billing@ aliases plus repeat contacts across categories.' },
              { color: 'bg-rose-500', tag: 'Removed Prior to Send', title: 'Retired Domains & Syntax', desc: 'Dead software products with missing MX records alongside broken scraped text strings.' },
            ].map((item) => (
              <div key={item.title} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.color}`} />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">{item.tag}</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE 3-TAB EXPLORER ── */}
      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-slate-200 space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className={sectionTitle}>Inspect Capterra cleanup checks interactively</h2>
          <p className={proseP}>
            Toggle each failure mode below to see how Giggal.ai handles syntax errors, retired product domains, and role-based support desks.
          </p>
        </div>
        <CapterraDeepDiveTabs />
      </section>

      {/* ── FOCUSED READING SECTION: ZOMBIE PROFILES & DIRECTORY DUPLICATION ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>How Capterra email verification detects retired software domains</h2>
        <p className={proseP}>
          Software directories frequently preserve listing pages across narrow B2B subcategories for long-term search visibility. Even when a software startup winds down operations or sells off its codebase, older product entries can linger in search indexes. Scrapers harvesting Capterra vendor leads from those pages capture expired domain registrations and dead mail exchangers.
        </p>
        <p className={proseP}>
          Standard syntax checks fail to spot zombie profiles whenever historical registrar pages still resolve DNS without working MX hosts. Purpose-built Capterra email verification checks authoritative DNS records, mail exchange priority hosts, and live mailbox existence before campaigns dispatch.
        </p>
        <p className={proseP}>
          When scraping CRM, Billing, Marketing Automation, and Project Management subcategories in parallel, overlapping software vendors also introduce duplicate emails across merged spreadsheets. Giggal.ai flags duplicate rows automatically alongside catch-all resolution at 98.5% accuracy on business lists, eliminating double-sends and keeping outreach crisp.
        </p>
        <p className={proseP}>
          Every uploaded spreadsheet returns clear Deliverable, Undeliverable, or Unknown verdicts alongside attributes for catch_all, role_account, disposable, and duplicate status. Separating inactive startups, temporary addresses, and shared support desks turns messy software directory scrapes into a clean email list built to safeguard cold email deliverability across Google Workspace and Microsoft 365 inboxes.
        </p>
        <p className={proseP}>
          Software marketers and SDRs can test small sample exports immediately with 1,000 free verification credits, or process full directory spreadsheets of up to 50,000 rows per file without changing CSV tools. If any enterprise mail server defers verification via greylisting and returns Unknown, Giggal.ai refunds that credit automatically so you never pay for inconclusive lookups.
        </p>
        <p className={proseP}>
          For teams enriching software vendor leads inside automated spreadsheets or CRM tools, our REST API, Zapier app, n8n node, and Clay API workflows check every extracted email in real time before outbound campaigns trigger, keeping bounces low and domain health intact.
        </p>
      </section>

      {/* ── PIPELINE RECOVERY CALCULATOR + PROSE EXPLANATION ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why unverified Capterra leads damage sender reputation
            </h2>
            <p className={proseP}>
              Sending raw scraped software directory leads directly into Google Workspace or Microsoft 365 exposes your sending domains to retired product domains, invalid aliases captured from footer code, and unmonitored support webhooks. High bounce rates quickly degrade inbox placement across connected accounts.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Decision-maker triage vs support desk queues
            </h2>
            <p className={proseP}>
              Because software support reps often manage directory profiles on Capterra, outbound website links regularly point to helpdesk portals. Giggal.ai flags role-based addresses cleanly so your clean email list routes directly to founders, product leads, and commercial buyers instead of auto-closing support tickets.
            </p>
          </div>
        </div>

        <CatchAllRecoveryCalculator platformLabel="Capterra Vendor" defaultCatchAllRate={30} />
      </section>

      {/* ── COMPARISON TABLE + 4-STEP WORKFLOW ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>Capterra email verification: comparing your options</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Capability</th>
                  <th className="py-3.5 px-5 font-bold">Raw Capterra Scrape</th>
                  <th className="py-3.5 px-5 font-bold">Generic Verifiers</th>
                  <th className="py-3.5 px-5 font-bold bg-indigo-50/60 text-indigo-900">Giggal.ai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Catch-All Resolution</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Unchecked catch-all risk</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Marked Risky (left to you)</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Deliverable or Undeliverable (98.5%)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Post-Verification Bounce Rate</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">High bounce exposure</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Varies if Risky sent</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Usually under 3% (aim &lt; 2%)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Role-Based &amp; Duplicate Flags</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Mixed across merged exports</td>
                  <td className="py-3.5 px-5 text-slate-600">Varies by tool</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Flagged on Every Row</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Retired Software MX Checks</td>
                  <td className="py-3.5 px-5 text-slate-500">Unchecked</td>
                  <td className="py-3.5 px-5 text-slate-600">Basic MX lookup</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">DNS + Mailbox Validation</td>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: '01', Icon: FileSpreadsheet, t: 'Upload Capterra Export', d: 'Upload any CSV or Excel file with up to 50,000 email addresses per batch.' },
            { n: '02', Icon: Server, t: 'Check Syntax & Live MX', d: 'Remove malformed query strings and retired domains with missing mail servers.' },
            { n: '03', Icon: ShieldCheck, t: '98.5% Catch-All Testing', d: 'Check catch-all domains cleanly alongside Role-based and Duplicate flags.' },
            { n: '04', Icon: Activity, t: 'Download Clean CSV', d: 'Export your clean email list ready for outreach campaigns without manual reformatting.' },
          ].map(({ n, Icon, t, d }) => (
            <div key={n} className={`${card} p-5 space-y-2.5`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-600">STEP {n}</span>
                <Icon className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900">{t}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
          <div className={`${card} p-6 space-y-3`}>
            <h3 className="text-lg font-extrabold text-slate-900">Technical DNS alignment for Capterra outbound</h3>
            <p className={proseP}>
              Before importing verified Capterra leads into cold outreach software, align Sender Policy Framework (SPF) TXT records, DKIM signing, and DMARC policies on your secondary sending domains. Proper authentication reinforces sender trust alongside a clean email list.
            </p>
            <p className={proseP}>
              Warm secondary mailboxes steadily, pace daily volume thoughtfully, and re-verify older software directory lists prior to new outreach waves so newly retired domains never inflate bounce counts.
            </p>
          </div>

          <div className={`${card} p-6 space-y-3`}>
            <h3 className="text-lg font-extrabold text-slate-900">Automate directory list hygiene with API &amp; integrations</h3>
            <p className={proseP}>
              Connect your software prospecting stack directly using our REST API, Zapier app, n8n community node, or Clay API workflows. Checking catch-all addresses at 98.5% accuracy keeps CRM records clean from day one.
            </p>
            <p className={proseP}>
              Every check costs 1 flat credit with Unknown results refunded automatically, giving teams a dependable workflow for Smartlead, Reply.io, HubSpot, and Google Sheets pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-12 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions: Capterra email verification</h2>
          <p className={proseP}>
            Clear answers on cleaning Capterra vendor leads, retired software domains, and role-based filtering.
          </p>
        </div>
        <FaqAccordion items={capterraFaqs} />
      </section>

      <AltCtaBand
        headline="Scrub your Capterra vendor directory export today"
        supporting="98.5% accuracy on business lists including catch-all verification. Unknown credits refunded. 1,000 free credits."
        buttonText="Verify Capterra leads free"
      />

      <Footer />
    </main>
  )
}
