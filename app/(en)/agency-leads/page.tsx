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
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Cpu,
  Database,
  Globe2,
  Activity,
  Server,
} from 'lucide-react'

const CANONICAL = '/agency-leads'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Agency Directory Lead Verification and Review Platform Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'B2B Agency and Review Platform Scraped Lead Cleaning Suite',
  operatingSystem: 'Web',
  description:
    'Agency directory lead verification for B2B agency leads and review platform leads scraped from Clutch, G2, Capterra, and GoodFirms. Resolve catch-all domains with 98.5% accuracy and protect cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Verify single addresses or upload CSV and Excel lists up to 50,000 rows per file',
    'Catch-all domain verification resolving risky tags to Deliverable or Undeliverable at 98.5% accuracy',
    'Verification for addresses behind Mimecast, Proofpoint, Barracuda, and Cisco IronPort',
    'Role-based, disposable, and duplicate flags alongside valid/invalid verdicts',
    '1 credit per email (Unknown refunded automatically) and 1,000 free credits on signup',
  ],
}

const hubFaqs: FaqItem[] = [
  {
    q: 'Why do scraped B2B agency and review platform leads have high bounce rates?',
    a: 'Directories like Clutch, G2, Capterra, and GoodFirms host corporate listings spanning years of business history. Scrapers crawling these sites pick up expired domains, deprovisioned executive accounts, and unmonitored role aliases. Agencies and SaaS teams also see frequent role changes, turning raw review platform leads into bounce risks unless verified before sending.',
  },
  {
    q: 'How does Giggal.ai verify catch-all domains across agency and SaaS directories?',
    a: 'On typical B2B lists, around 30% of emails sit on catch-all domains on Google Workspace or Microsoft 365 (and often higher among digital agencies and SaaS vendors). Ordinary checkers stop and label them risky. Giggal.ai checks whether each underlying mailbox actually exists, delivering 98.5% accuracy on business lists.',
  },
  {
    q: 'What makes agency directory lead verification different from local business verification?',
    a: 'Local business directories often surface consumer ISP addresses or small generic mail hosts. By contrast, B2B agency leads and review platform leads sit primarily on custom corporate domains with frequent catch-all setups, enterprise security gateways like Proofpoint and Mimecast, and fast-moving corporate tenures.',
  },
  {
    q: 'Does Giggal.ai support CSV or Excel spreadsheets from Clutch, G2, Capterra, and GoodFirms?',
    a: 'Yes. Upload a CSV or Excel file with up to 50,000 rows per batch and download your results as a CSV with a clear status on every row alongside catch-all, role-based, disposable, and duplicate flags to build a clean email list.',
  },
  {
    q: 'How does Giggal.ai handle enterprise mail security gateways on tech vendor domains?',
    a: 'Software vendors on G2 and Capterra frequently deploy gateways such as Mimecast, Proofpoint, Barracuda, and Cisco IronPort that cause standard tools to return Unknown. Giggal.ai checks past Secure Email Gateways directly and returns Deliverable or Undeliverable.',
  },
  {
    q: 'What bounce rate should outbound sales teams aim for when emailing agency executives?',
    a: 'Cleaned business lists verified with Giggal.ai usually bounce under 3%. For cold outbound campaigns on Google Workspace or Microsoft 365, teams typically filter out Undeliverable, Disposable, and unwanted Role-based addresses to keep hard bounces under 2% and protect sender reputation.',
  },
  {
    q: 'Can we automate agency directory lead verification inside Zapier, n8n, or custom scripts?',
    a: 'Yes. Giggal.ai offers a documented REST API, direct Zapier and n8n integrations, Clay API workflows, and an MCP server for Claude and ChatGPT. You can verify scraped directory leads automatically before they reach your CRM or outbound sequencer.',
  },
  {
    q: 'How do credits and Unknown refunds work for directory lists?',
    a: 'Verification costs a flat 1 credit per email with catch-all checks included, and Unknown results (such as temporary greylisting) are refunded automatically. Every new account includes 1,000 free credits on sign-up with no card needed, and credits never expire.',
  },
]

const directories = [
  {
    name: 'Clutch Agency Leads',
    href: '/agency-leads/clutch',
    focus: 'Digital Agencies & Dev Studios',
    tag: 'Workspace Catch-Alls',
    hazard: 'Catch-all Google Workspace setups, partner turnover, and website footer aliases',
    cta: 'Inspect Clutch workflow',
    Icon: Briefcase,
    iconWrap: 'bg-indigo-600 shadow-indigo-600/15',
  },
  {
    name: 'G2 Software Leads',
    href: '/agency-leads/g2',
    focus: 'SaaS Vendors & Reviewers',
    tag: 'SEG Gateway Handling',
    hazard: 'Mimecast and Proofpoint gateways plus former reviewer job changes',
    cta: 'Inspect G2 workflow',
    Icon: Cpu,
    iconWrap: 'bg-violet-600 shadow-violet-600/15',
  },
  {
    name: 'Capterra Directory Leads',
    href: '/agency-leads/capterra',
    focus: 'Software Directory Profiles',
    tag: 'Role & Domain Hygiene',
    hazard: 'Retired product domains, malformed scraper strings, and support@ desks',
    cta: 'Inspect Capterra workflow',
    Icon: Database,
    iconWrap: 'bg-blue-600 shadow-blue-600/15',
  },
  {
    name: 'GoodFirms IT Leads',
    href: '/agency-leads/goodfirms',
    focus: 'Global IT Consultancies',
    tag: 'Greylist Refunds',
    hazard: 'Shared cPanel/Plesk greylisting deferrals, lapsed domains, and hr@ queues',
    cta: 'Inspect GoodFirms workflow',
    Icon: Globe2,
    iconWrap: 'bg-emerald-500 shadow-emerald-500/15',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export const metadata = {
  title: {
    absolute: 'Agency Directory Lead Verification | Clean B2B Agency Leads | Giggal.ai',
  },
  description:
    'Agency directory lead verification for B2B agency leads and review platform leads scraped from Clutch, G2, Capterra, and GoodFirms. 98.5% accuracy on business lists, 1,000 free credits.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai agency directory lead verification' }],
    title: 'Agency Directory Lead Verification | Clean B2B Agency Leads | Giggal.ai',
    description:
      'Agency directory lead verification for B2B agency leads and review platform leads scraped from Clutch, G2, Capterra, and GoodFirms. 98.5% accuracy on business lists.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function AgencyLeadsHubPage() {
  const breadcrumbData = breadcrumbLd('Agency Directory Leads', CANONICAL)
  const faqData = faqPageLd(hubFaqs)

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <MotionRuntime />
      <Navbar tone="dark" />

      {/* ── DARK HERO SECTION ── */}
      <section className="bg-slate-900 hero-art text-white pt-28 md:pt-32 pb-20 md:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
        />
        <div className="max-w-4xl mx-auto px-6 pt-6 md:pt-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-white [text-wrap:balance]">
            Agency directory lead verification for{' '}
            <span className="brand-wordmark-accent-light">high-deliverability outreach</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto font-medium [text-wrap:balance]">
            Scraped B2B agency leads and review platform leads often carry catch-all domains, outdated employee aliases, and shared role inboxes. Verify every mailbox at 98.5% accuracy on business lists and protect cold email deliverability.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-colors"
            >
              <span>Get 1,000 free validations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/public/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm transition-colors"
            >
              <span>Read API docs</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          <ul className="pt-1 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-400">
            {['1 credit per email', 'Catch-all included', 'Unknown results refunded'].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── VERIFIED STATS BAR ── */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { pre: '', n: '98.5', suf: '%', l: 'Accuracy on business lists' },
            { pre: '<', n: '3', suf: '%', l: 'Bounce rate on cleaned lists, usually' },
            { pre: '', n: '50,000', suf: '', l: 'Addresses per CSV or Excel file' },
            { pre: '', n: '1,000', suf: '', l: 'Free credits, no card needed' },
          ].map((s) => (
            <div key={s.l} className={`${card} p-5 text-center`}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <div className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 tabular-nums">
                  {s.pre && <span className="text-indigo-600">{s.pre}</span>}
                  <span>{s.n}</span>
                  {s.suf && <span className="text-indigo-600">{s.suf}</span>}
                </div>
                <div className="mt-1.5 text-xs md:text-sm text-slate-500 font-medium">{s.l}</div>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── DIRECTORY SUITE CARDS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className={sectionTitle}>Select your agency or review platform source</h2>
          <p className={proseP}>
            Each directory exposes distinct mail server setups, gateway defenses, and stale contact risks. Pick your source to inspect its verification workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {directories.map(({ name, href, focus, tag, hazard, cta, Icon, iconWrap }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white border-2 border-slate-200 hover:border-indigo-500/40 rounded-2xl p-6 card-vivid-shadow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${iconWrap}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md px-2 py-0.5">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {name}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-1">{focus}</p>
                <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">{hazard}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600">
                <span>{cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SPLIT INSPECTOR: WHY DIRECTORY SCRAPES BREAK VERIFIERS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-5">
            <h2 className={sectionTitle}>Why agency directory lead verification beats generic checkers</h2>
            <p className={proseP}>
              Most email checkers were built for consumer signups or local directories on free webmail. When you check B2B agency leads or review platform leads scraped from Clutch, G2, Capterra, or GoodFirms, basic single-ping checks leave large gaps.
            </p>
            <p className={proseP}>
              Professional agencies and software firms operate custom domain MX clusters, Google Workspace or Microsoft 365 catch-all setups, and Secure Email Gateways such as Mimecast and Proofpoint. Because catch-all domains accept any recipient check, generic tools mark around 30% or more of a typical B2B list as Risky.
            </p>
            <p className={proseP}>
              Giggal.ai checks mailbox existence, domain signals, and gateway routing without sending any emails, delivering a clean email list at verified 98.5% accuracy on business lists.
            </p>
            <ul className="space-y-2.5 pt-1">
              {[
                'Flags role_account aliases such as jobs@, support@, hr@, and billing@ cleanly',
                'Resolves catch-all addresses directly to Deliverable or Undeliverable for 1 credit',
                'Refunds Unknown credits automatically when shared hosts use greylisting deferrals',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <DirectoryScrapeInspector platform="hub" />
        </div>
      </section>

      {/* ── CROSS-PLATFORM RISK COMPARISON MATRIX ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Cross-platform directory risk comparison matrix</h2>
          <p className={proseP}>
            Understand how catch-all frequency, stale corporate accounts, and mail server environments differ across all four major directories before sending campaigns.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <table className="w-full min-w-[740px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-5 font-bold">Directory Platform</th>
                <th className="py-3.5 px-5 font-bold">Typical Catch-All Profile</th>
                <th className="py-3.5 px-5 font-bold">Primary Stale Data Hazard</th>
                <th className="py-3.5 px-5 font-bold">Mail Infrastructure Challenge</th>
                <th className="py-3.5 px-5 font-bold">What Giggal.ai Checks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3.5 px-5 font-extrabold text-slate-900">
                  <Link href="/agency-leads/clutch" className="text-indigo-600 hover:underline">
                    Clutch.co
                  </Link>
                </td>
                <td className="py-3.5 px-5 font-bold text-amber-700">High (Workspace &amp; M365)</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Partner turnover &amp; footer credits</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Catch-all servers hide closed aliases</td>
                <td className="py-3.5 px-5 font-bold text-slate-900">98.5% catch-all &amp; role_account flags</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3.5 px-5 font-extrabold text-slate-900">
                  <Link href="/agency-leads/g2" className="text-indigo-600 hover:underline">
                    G2.com
                  </Link>
                </td>
                <td className="py-3.5 px-5 font-bold text-amber-700">High (SaaS domains)</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Reviewer job switches &amp; SaaS M&amp;A</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Proofpoint, Mimecast, Barracuda SEGs</td>
                <td className="py-3.5 px-5 font-bold text-slate-900">Direct SEG gateway &amp; mailbox check</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3.5 px-5 font-extrabold text-slate-900">
                  <Link href="/agency-leads/capterra" className="text-indigo-600 hover:underline">
                    Capterra
                  </Link>
                </td>
                <td className="py-3.5 px-5 font-bold text-amber-700">Moderate to High</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Retired apps &amp; support@ queues</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Malformed strings &amp; parked domains</td>
                <td className="py-3.5 px-5 font-bold text-slate-900">DNS/MX, syntax, duplicate &amp; role flags</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3.5 px-5 font-extrabold text-slate-900">
                  <Link href="/agency-leads/goodfirms" className="text-indigo-600 hover:underline">
                    GoodFirms
                  </Link>
                </td>
                <td className="py-3.5 px-5 font-bold text-amber-700">Moderate to High</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Contractor churn &amp; expired domains</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Shared cPanel/Plesk 451 greylisting</td>
                <td className="py-3.5 px-5 font-bold text-slate-900">Unknown credit refunds &amp; DNS checks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── INTERACTIVE RECOVERY ESTIMATOR ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <CatchAllRecoveryCalculator platformLabel="B2B Directory" defaultCatchAllRate={30} />
      </section>

      {/* ── DATA DECAY TIMELINE + 5-STAGE ENGINE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-14">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className={sectionTitle}>How agency directory lead verification protects outbound pipelines</h2>
          <p className={proseP}>
            Building a clean email list from B2B agency leads and review platform leads requires more than syntax checking. Agencies and software vendors regularly enable catch-all routing, deploy corporate spam gateways, and see ongoing staff changes. Running agency directory lead verification before importing lists into your sequencer prevents avoidable bounces and preserves cold email deliverability.
          </p>
          <p className={proseP}>
            Instead of deleting around 30% or more of your scraped list because another tool marked those domains Risky, Giggal.ai checks individual mailboxes at 98.5% accuracy on business lists. Sales teams turn raw CSV exports into a clean email list built to keep cold outreach bounce rates low.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why static directory lists decay over time
            </h2>
            <p className={proseP}>
              Review portals preserve company profiles for years based on historical reviews. Over time, team members leave for new jobs, startups rebrand after acquisitions, and smaller consultancies let secondary domains lapse. Even freshly scraped review platform leads contain stale addresses pulled from older pages.
            </p>
            <p className={proseP}>
              Sending cold sequences without cleaning raises hard bounce rates quickly on Google Workspace and Microsoft 365. Checking each export right before launch keeps your clean email list healthy and protects primary inbox placement.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { age: 'Fresh Export', note: 'Catch-alls & role aliases dominate', badge: 'Pre-Send Check' },
                { age: 'Quarter Old', note: 'Job changes & pivots add dead aliases', badge: 'Re-Verify' },
                { age: 'Legacy Listing', note: 'Expired MX & parked registrar pages', badge: 'Purge Dead MX' },
              ].map((d) => (
                <div key={d.age} className={`${card} p-4`}>
                  <div className="text-xs font-extrabold text-slate-900">{d.age}</div>
                  <div className="text-xs font-black text-indigo-600 mt-1">{d.badge}</div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal font-medium">{d.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Five-stage agency directory verification workflow
            </h2>
            <p className={proseP}>
              Every uploaded CSV or Excel file (up to 50,000 addresses) passes through five automated verification stages engineered to maximize valid lead retention while keeping cold email deliverability protected.
            </p>
            <ol className="space-y-2.5">
              {[
                { n: '01', t: 'Syntax and Scraper Artifact Scrubbing', d: 'Catches broken formatting, HTML fragments, and non-email strings.' },
                { n: '02', t: 'Live DNS and MX Lookup', d: 'Confirms active domain registration and checks mail exchange records.' },
                { n: '03', t: 'Zero-Send Mailbox Check', d: 'Asks the mail server if the mailbox exists without dispatching an email.' },
                { n: '04', t: 'Catch-All & Gateway Resolution (98.5%)', d: 'Verifies catch-all and SEG mailboxes instead of stopping at Risky.' },
                { n: '05', t: 'Clean CSV Results Export', d: 'Outputs clear status, catch-all verdict, disposable, duplicate, and role flags.' },
              ].map((s) => (
                <li key={s.n} className={`${card} px-4 py-3 flex items-start gap-3`}>
                  <span className="w-6 h-6 rounded-md bg-indigo-600 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <span className="text-sm font-extrabold text-slate-900 block">{s.t}</span>
                    <span className="text-xs text-slate-500 font-medium">{s.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── PRE-FLIGHT OUTBOUND & DNS HYGIENE ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className={sectionTitle}>Protecting cold email deliverability on agency outbound</h2>
          <p className={proseP}>
            Verified lists work best alongside clean sending infrastructure. When reaching out to B2B agency leads and software executives, major inbox providers inspect domain authentication and send volume patterns closely. Combine your clean list with these six core safeguards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { Icon: ShieldCheck, title: 'SPF Record Alignment', text: 'List authorized sending servers in your root DNS TXT policy to prevent domain spoofing.' },
            { Icon: Server, title: 'DKIM Cryptographic Signing', text: 'Sign outbound messages with DKIM keys so receiving security gateways confirm message integrity.' },
            { Icon: Activity, title: 'DMARC Reporting Policy', text: 'Publish DMARC records to instruct receiving mail hosts and monitor authentication health.' },
            { Icon: CheckCircle2, title: 'Gradual Domain Warmup', text: 'Warm newly provisioned secondary outbound domains steadily before loading cold sequences.' },
            { Icon: Briefcase, title: 'Measured Daily Volume', text: 'Keep cold dispatch volume conservative per inbox rather than blasting thousands from one sender.' },
            { Icon: Server, title: 'Periodic List Re-Checking', text: 'Re-verify older directory exports prior to follow-up waves so recent job switches do not bounce.' },
          ].map(({ Icon, title, text }) => (
            <div key={title} className={`${card} p-5 space-y-2`}>
              <div className="flex items-center gap-2.5 text-slate-900">
                <Icon className="w-4 h-4 text-indigo-600 shrink-0" />
                <h3 className="text-sm font-extrabold">{title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-12 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions: agency directory lead verification</h2>
          <p className={proseP}>
            Clear answers on cleaning B2B agency leads, catch-all verification, and review platform exports.
          </p>
        </div>
        <FaqAccordion items={hubFaqs} />
      </section>

      <AltCtaBand
        headline="Clean your agency and review directory list before sending"
        supporting="98.5% accuracy on business lists including catch-all verification (98.5% verified benchmark). Unknown credits refunded. 1,000 free credits to start."
        buttonText="Verify directory leads free"
      />

      <Footer />
    </main>
  )
}
