import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MotionRuntime from '@/components/landing/MotionRuntime'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import DirectoryScrapeInspector from '@/components/agency-leads/DirectoryScrapeInspector'
import CatchAllRecoveryCalculator from '@/components/agency-leads/CatchAllRecoveryCalculator'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Server,
  Users,
  Briefcase,
  Search,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react'

const CANONICAL = '/agency-leads/clutch'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Clutch Email Verification and Agency Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'B2B Agency Lead Verification and Directory Data Scrubbing',
  operatingSystem: 'Web',
  description:
    'Verify and clean B2B agency leads scraped from Clutch.co. Resolve catch-all mailboxes with 98.5% accuracy on business lists, flag role accounts, and protect cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Deep mailbox existence check without sending any email to your Clutch contacts',
    'Catch-all domain verification resolving risky tags to Deliverable or Undeliverable',
    'Role-based, disposable, and duplicate flags alongside valid/invalid verdicts',
    'CSV or Excel uploads up to 50,000 rows per file, download results as CSV',
    '1,000 free credits on signup (no card needed) and Unknown credits refunded',
  ],
}

const clutchFaqs: FaqItem[] = [
  {
    q: 'Why do scraped Clutch agency leads carry high bounce risks?',
    a: 'Directory scrapers extracting Clutch leads usually visit external agency websites linked on each profile and pull emails from page HTML. Agencies experience regular partner, account director, and employee transitions alongside expired secondary domains or webmaster credits, turning uncleaned Clutch agency leads into unnecessary hard bounces on Google Workspace and Microsoft 365.',
  },
  {
    q: 'How does Giggal.ai verify catch-all domains on Clutch agency leads?',
    a: 'On typical B2B lists, around 30% of contacts sit on catch-all domains (often higher for digital agencies using Google Workspace or Microsoft 365). Ordinary verifiers label catch-all addresses as Risky and stop. Giggal.ai verifies whether each specific mailbox exists behind the catch-all setup, delivering 98.5% accuracy on business lists.',
  },
  {
    q: 'Can Giggal.ai separate operational inboxes like jobs@ or info@ from personal emails?',
    a: 'Yes. Website scrapers regularly pull shared addresses from website footers such as jobs@, careers@, billing@, press@, or info@. Giggal.ai sets a role_account flag on every verified row so you can filter shared role addresses out for cold sales sequences or keep verified generic inboxes for boutique studios.',
  },
  {
    q: 'What file formats and row limits work when verifying Clutch exports?',
    a: 'You can upload CSV or Excel spreadsheets containing up to 50,000 email addresses per file. Larger scraped lists can simply be split across multiple files. Results download cleanly as a CSV with clear status and attribute flags to give you a clean email list.',
  },
  {
    q: 'What bounce rate should outbound teams aim for when prospecting Clutch agencies?',
    a: 'Lists cleaned with Giggal.ai usually bounce under 3%. For cold outreach campaigns, sales teams should remove Undeliverable, Disposable, and unwanted Role-based rows so hard bounce rates stay below 2% and protect sender reputation.',
  },
  {
    q: 'Does Giggal.ai send test emails to agency contacts during verification?',
    a: 'No. Verification queries each domain MX server and checks mailbox availability without transmitting any message. Nobody on your Clutch prospect list receives an email or notification.',
  },
  {
    q: 'Can we automate Clutch email verification using Zapier, n8n, or an API?',
    a: 'Yes. Giggal.ai provides a documented REST API, direct Zapier and n8n apps, Clay API workflows, and an MCP server for Claude and ChatGPT so you can verify Clutch agency leads automatically before loading them into Smartlead, Instantly, or HubSpot.',
  },
  {
    q: 'How many free verification credits are included for testing Clutch leads?',
    a: 'Every new account receives 1,000 free credits immediately on signup with no card needed, and credits never expire. Unknown verdicts (for example temporary greylisting) are refunded automatically.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export const metadata = {
  title: {
    absolute: 'Clutch Email Verification | Clean Scraped Agency Leads | Giggal.ai',
  },
  description:
    'Verify B2B agency leads scraped from Clutch.co. Resolve catch-all mailboxes with 98.5% accuracy on business lists, flag role accounts, and protect cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai Clutch email verification' }],
    title: 'Clutch Email Verification | Clean Scraped Agency Leads | Giggal.ai',
    description:
      'Verify B2B agency leads scraped from Clutch.co. Resolve catch-all mailboxes with 98.5% accuracy on business lists, flag role accounts, and protect cold email deliverability.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function ClutchLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Clutch Agency Leads', CANONICAL)
  const faqData = faqPageLd(clutchFaqs)

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <Navbar />

      {/* ── ASYMMETRIC SPLIT HERO WITH LIVE SCRAPE INSPECTOR ── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-14 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.07] text-slate-900">
              Clutch email verification for{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
                high-converting agency outreach
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Scraped Clutch agency leads carry heavy catch-all setups, departed partner aliases, and footer role addresses. Resolve catch-all domains at 98.5% accuracy on business lists and protect cold email deliverability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-lg shadow-indigo-600/25 transition-colors text-sm"
              >
                <span>Verify Clutch leads free</span>
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
              {['1,000 free credits', 'No card needed', '1 credit per check, catch-all included'].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <DirectoryScrapeInspector platform="clutch" />
        </div>

        {/* Calm verified facts strip */}
        <dl className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { v: '< 3% bounces', l: 'Typical bounce rate on cleaned lists (aim under 2% for cold send)' },
            { v: '98.5% accuracy', l: 'Verified accuracy on business lists, resolving catch-all addresses' },
            { v: '50,000 rows', l: 'Upload CSV or Excel per file and download clean results as CSV' },
          ].map((m) => (
            <div key={m.v} className={`${card} p-5`}>
              <dt className="sr-only">{m.v}</dt>
              <dd>
                <span className="block text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                  {m.v}
                </span>
                <span className="mt-1.5 block text-xs font-semibold text-slate-500 leading-relaxed">{m.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── HOW SCRAPED CLUTCH LEADS FAIL (WEBSITE CRAWL ANATOMY) ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-10">
        <div className="max-w-3xl space-y-3">
          <h2 className={sectionTitle}>Common bounce traps inside scraped Clutch agency leads</h2>
          <p className={proseP}>
            Because Clutch.co routes profile inquiries through forms rather than listing direct staff emails, web scrapers follow agency homepage links and extract mailto tags across site HTML. That automated crawl creates four consistent deliverability traps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              tag: 'Google Workspace & M365',
              label: 'Catch-All Agency Domains',
              desc: 'Digital agencies frequently enable catch-all routing so misspelled client inquiries never bounce. Generic tools mark ~30%+ of B2B lists Risky and stop.',
              Icon: Server,
              wrap: 'bg-amber-500 shadow-amber-500/15',
            },
            {
              tag: 'Footer & Contact Crawls',
              label: 'Shared Role Aliases',
              desc: 'Spiders crawling Contact and Careers sections pull jobs@, press@, and billing@ queues rather than agency founders or growth decision-makers.',
              Icon: Users,
              wrap: 'bg-indigo-600 shadow-indigo-600/15',
            },
            {
              tag: 'Leadership Mobility',
              label: 'Deprovisioned Staff Accounts',
              desc: 'Account directors, managing partners, and creative leads switch agencies regularly. Old team pages and guessed permutations bounce with 550 codes.',
              Icon: Briefcase,
              wrap: 'bg-rose-500 shadow-rose-500/15',
            },
            {
              tag: 'Case Study & Footer HTML',
              label: 'External Template Footprints',
              desc: 'Crawlers scraping agency portfolio sites sometimes extract third-party theme author credits or external legal contacts instead of internal staff.',
              Icon: Search,
              wrap: 'bg-emerald-500 shadow-emerald-500/15',
            },
          ].map(({ tag, label, desc, Icon, wrap }) => (
            <div key={label} className={`${card} p-6 space-y-3`}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">{tag}</span>
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">{label}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ILLUSTRATIVE SIDE-BY-SIDE OUTCOME CARDS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Catch-all verification on an illustrative 10,000-row Clutch list</h2>
          <p className={proseP}>
            Using Giggal.ai&apos;s typical ~30% B2B catch-all split (~80% resolving valid), compare a standard single-ping checker against deep catch-all verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                Typical single-ping verifier
              </span>
              <span className="text-sm font-bold text-slate-500">10,000 rows (illustrative)</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <span className="text-sm font-bold text-emerald-700">Deliverable</span>
                <span className="text-lg font-black text-emerald-700 tabular-nums">5,950</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <span className="text-sm font-bold text-rose-700">Undeliverable</span>
                <span className="text-lg font-black text-rose-700 tabular-nums">1,050</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-amber-50/70 border border-amber-200 px-4 py-3">
                <span className="text-sm font-bold text-amber-800">Marked Risky / Accept-All (30%)</span>
                <span className="text-lg font-black text-amber-700 tabular-nums">3,000</span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
              3,000 B2B agency leads left in limbo. You either discard a huge slice of your prospect pool or risk bounces across your sending domain.
            </p>
          </div>

          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg">
                Giggal.ai (98.5% accuracy on business lists)
              </span>
              <span className="text-sm font-bold text-slate-600">10,000 rows (illustrative)</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between rounded-xl bg-emerald-50/60 border border-emerald-200 px-4 py-3">
                <span className="text-sm font-bold text-emerald-800">Deliverable (Standard + Valid Catch-All)</span>
                <span className="text-lg font-black text-emerald-700 tabular-nums">8,350</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <span className="text-sm font-bold text-rose-700">Undeliverable</span>
                <span className="text-lg font-black text-rose-700 tabular-nums">1,650</span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-indigo-900 font-semibold leading-relaxed">
              In this illustrative split, ~2,400 valid contacts move from Risky to Deliverable while closed catch-all mailboxes are cleanly removed.
            </p>
          </div>
        </div>

        <CatchAllRecoveryCalculator platformLabel="Clutch Agency" defaultCatchAllRate={30} />
      </section>

      {/* ── FOCUSED READING SECTION: WHY CLUTCH EMAIL VERIFICATION MATTERS ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Why Clutch email verification beats generic list scrubbers</h2>
        <p className={proseP}>
          Prospecting B2B agency leads from Clutch directories gives revenue teams direct access to digital studios, software engineering shops, and marketing consultancies. Yet a large share of those agency domains configure Google Workspace or Microsoft 365 catch-all rules so client inquiries never bounce on a typo. Standard verification tools stop at the server handshake and mark every catch-all record risky.
        </p>
        <p className={proseP}>
          Following that legacy advice forces you to delete valuable agency prospects or gamble your sender reputation by emailing blindly. Dedicated Clutch email verification resolves catch-all mailboxes directly to Deliverable or Undeliverable at 98.5% accuracy on business lists, turning raw Clutch agency leads into a dependable clean email list engineered for strong cold email deliverability.
        </p>
        <p className={proseP}>
          Cleaned Clutch exports also include Role-based, Disposable, and Duplicate flags on every row so you decide which operational aliases stay or go, keeping sequences in primary agency inboxes.
        </p>
        <p className={proseP}>
          Checking catch-all agency domains with 98.5% accuracy on business lists removes the guesswork from large Clutch scrapes. Rather than sacrificing half of your digital agency leads or importing bad addresses, your team downloads a clean email list verified end-to-end and ready for outreach campaigns without triggering bounce alerts across Google Workspace or Microsoft 365.
        </p>
      </section>

      {/* ── ROLE TRIAGE & TURNOVER DYNAMICS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Executive turnover, role accounts, and footer alias triage
            </h2>
            <p className={proseP}>
              Agency teams evolve fast. Managing partners, account directors, and technical leads routinely change roles or spin out independent practices. While Clutch keeps agency company listings live for years based on accumulated reviews, permutations built from outdated staff rosters generate 550 User Unknown hard bounces.
            </p>
            <p className={proseP}>
              In parallel, spiders crawling agency websites pull generic role-based addresses alongside personal emails. Giggal.ai verifies live mailbox existence and tags role_account entries on every record so you separate individual executives from careers@, billing@, and press@ queues cleanly.
            </p>
            <p className={proseP}>
              For small creative studios of two to five employees, generic aliases like hello@ or contact@ are sometimes monitored by founders directly. Keeping verified Role-based rows optional in your CSV export puts you in full control of outreach targeting.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {[
              {
                tier: 'Priority Outbound',
                label: 'Verified Individual Mailboxes',
                examples: 'founder@, partner@, name@ (role_account: false, status: deliverable)',
                tone: 'border-emerald-200 bg-emerald-50/70 text-emerald-900',
                badge: 'text-emerald-700 bg-white border-emerald-200',
              },
              {
                tier: 'Boutique Optional',
                label: 'Verified Shared Studio Inboxes',
                examples: 'hello@, studio@, contact@ (status: deliverable, role_account: true)',
                tone: 'border-indigo-200 bg-indigo-50/60 text-indigo-900',
                badge: 'text-indigo-700 bg-white border-indigo-200',
              },
              {
                tier: 'Remove Before Send',
                label: 'Undeliverable & Non-Buyer Queues',
                examples: 'jobs@, careers@, billing@, closed employee mailboxes, bad domains',
                tone: 'border-rose-200 bg-rose-50/60 text-rose-900',
                badge: 'text-rose-700 bg-white border-rose-200',
              },
            ].map((r) => (
              <div key={r.label} className={`rounded-2xl border p-5 ${r.tone}`}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold">{r.label}</h3>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${r.badge}`}>{r.tier}</span>
                </div>
                <p className="text-xs font-mono mt-2 opacity-85">{r.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE & WORKFLOW ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className={sectionTitle}>Clutch email verification: comparing your options</h2>
          <p className={proseP}>
            Review how raw Clutch scrapes, standard checkers, and Giggal.ai handle catch-all agencies, role flags, and CSV workflows.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-5 font-bold">Capability</th>
                <th className="py-3.5 px-5 font-bold">Raw Clutch Scrape</th>
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
                <td className="py-3.5 px-5 font-bold text-slate-900">Deprovisioned Agency Staff</td>
                <td className="py-3.5 px-5 text-slate-500">Unchecked</td>
                <td className="py-3.5 px-5 text-slate-600">Stopped by catch-all DNS</td>
                <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Mailbox Check Past Catch-All</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-slate-900">Role-Based &amp; Duplicate Flags</td>
                <td className="py-3.5 px-5 text-slate-500">Mixed with personal leads</td>
                <td className="py-3.5 px-5 text-slate-600">Varies by provider</td>
                <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Flagged on Every Row</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-slate-900">Credit Policy</td>
                <td className="py-3.5 px-5 text-slate-400">N/A</td>
                <td className="py-3.5 px-5 text-slate-600">Often extra for catch-all</td>
                <td className="py-3.5 px-5 text-indigo-700 font-extrabold bg-indigo-50/20">1 credit flat, 1,000 free</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Clean 4-Step Operational Checklist + DNS Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <div className={`${card} p-6 space-y-4`}>
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-extrabold text-slate-900">Four-step Clutch list cleaning workflow</h3>
            </div>
            <ol className="space-y-3 text-xs sm:text-[13px] text-slate-600 font-medium">
              <li className="flex gap-3">
                <span className="font-black text-indigo-600">01.</span>
                <span>Upload your raw Clutch scraper CSV or Excel file (up to 50,000 rows per file).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black text-indigo-600">02.</span>
                <span>Automated MX lookups inspect Google Workspace, Microsoft 365, and custom mail servers.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black text-indigo-600">03.</span>
                <span>Catch-all mailboxes are resolved to valid or invalid at 98.5% accuracy while role-based and duplicate rows are flagged.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black text-indigo-600">04.</span>
                <span>Download your clean email list as a CSV ready for Smartlead, Reply.io, HubSpot, or Zapier workflows.</span>
              </li>
            </ol>
          </div>

          <div className={`${card} p-6 space-y-4`}>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-extrabold text-slate-900">DNS and volume controls for agency outreach</h3>
            </div>
            <p className={proseP}>
              Keeping bounce rates low protects sender reputation on Google Workspace and Microsoft 365. Pair your clean email list with valid SPF TXT records, DKIM signing, DMARC policies, gradual warmup on secondary domains, and conservative daily send caps.
            </p>
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
              {[
                { k: 'SPF + DKIM', v: 'Authenticated' },
                { k: 'Bounce Goal', v: 'Under 2%' },
                { k: 'Credit Cost', v: '1 / email' },
              ].map((x) => (
                <div key={x.k} className="rounded-xl bg-slate-50 border border-slate-200/80 p-3">
                  <div className="text-[11px] font-bold text-slate-500">{x.k}</div>
                  <div className="text-xs font-extrabold text-slate-900 mt-0.5">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-12 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions: Clutch email verification</h2>
          <p className={proseP}>
            Clear answers on Clutch agency leads, catch-all verification, and protecting cold email deliverability.
          </p>
        </div>
        <FaqAccordion items={clutchFaqs} />
      </section>

      <AltCtaBand
        headline="Clean your Clutch agency list before launching outreach"
        supporting="98.5% accuracy on business lists including catch-all verification. Unknown credits refunded. 1,000 free credits."
        buttonText="Verify Clutch leads free"
      />

      <Footer />
    </main>
  )
}
