import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import RatingChips from '@/components/landing/RatingChips'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  AlertCircle, ArrowRight, Check, Database,
  DollarSign, Clock, MailCheck, RefreshCw,
  ShieldCheck, Filter, Play, ExternalLink,
} from 'lucide-react'

const CANONICAL = '/use-cases/crm-data-cleaning'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai CRM Data Cleaning & Email Hygiene',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CRM Data Cleaning and Email Verification',
  operatingSystem: 'Web',
  description:
    'Clean bad CRM data across HubSpot, Salesforce, and bulk CSV lists. Verify corporate emails, test catch-all domains directly, and keep bounce rates under 1%.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Bulk email verification for HubSpot, Salesforce, and Pipedrive exports',
    'Automated CRM hygiene workflows via HubSpot, Zapier, n8n, and REST API',
    'Direct catch-all verification with 98.5% accuracy',
    'Detection of bounced addresses, role accounts, and disposable domains',
    '1,000 free verification credits without credit card',
  ],
}

const auditBreakdown = [
  {
    label: 'Verified Deliverable',
    count: '19,420',
    pct: '77.7%',
    barWidth: 'w-[78%]',
    barColor: 'bg-emerald-500',
    note: 'Safe to enroll in active sequences',
    badgeClass: 'bg-emerald-50 text-emerald-700',
  },
  {
    label: 'Catch-All Confirmed Valid',
    count: '2,840',
    pct: '11.4%',
    barWidth: 'w-[28%]',
    barColor: 'bg-indigo-500',
    note: 'Valid corporate leads other tools skip',
    badgeClass: 'bg-indigo-50 text-indigo-700',
  },
  {
    label: 'Invalid & Defunct Inboxes',
    count: '1,980',
    pct: '7.9%',
    barWidth: 'w-[18%]',
    barColor: 'bg-rose-500',
    note: 'Job changes and closed domains removed',
    badgeClass: 'bg-rose-50 text-rose-700',
  },
  {
    label: 'Disposable, Role & Trap Risks',
    count: '760',
    pct: '3.0%',
    barWidth: 'w-[10%]',
    barColor: 'bg-amber-500',
    note: 'Suppressed to protect domain reputation',
    badgeClass: 'bg-amber-50 text-amber-800',
  },
]

const metrics = [
  {
    value: '25–30%',
    label: 'Annual B2B Data Decay',
    caption: 'Contacts change roles, leave companies, or switch domains every year',
  },
  {
    value: '< 1.0%',
    label: 'Post-Clean Bounce Rate',
    caption: 'Keeps both outbound sequences and marketing sends out of spam',
  },
  {
    value: '98.5%',
    label: 'Catch-All Accuracy',
    caption: 'Checks accept-all corporate mailboxes instead of labeling them unknown',
  },
  {
    value: '1,000',
    label: 'Free Trial Credits',
    caption: 'Test a real segment of your CRM with no credit card required',
  },
]

const crmPainPoints = [
  {
    Icon: AlertCircle,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    title: 'Silent hard bounces hurt your sender score',
    body: 'A contact who downloaded your whitepaper nine months ago may have already left the company. When your sales or marketing team emails that old record, it bounces and pushes future messages from your domain toward the spam folder.',
  },
  {
    Icon: DollarSign,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    title: 'You pay CRM fees for dead contacts',
    body: 'Platforms like HubSpot price marketing tiers by contact count. If 15% of your stored contacts have invalid or abandoned email addresses, you are paying every month to store records that will never open an email or turn into pipeline.',
  },
  {
    Icon: Clock,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    title: 'Sales reps waste hours on unreachable leads',
    body: 'Reps lose hours every week emailing and following up with people who no longer work at the company. Basic CRM hygiene clears out dead contacts before call lists are built, so your team spends time on active buyers.',
  },
  {
    Icon: Filter,
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    title: 'Basic verifiers leave catch-all leads unusable',
    body: 'Around a third of B2B companies run catch-all mail servers. Legacy tools mark all of those CRM contacts as "risky" or "unknown", forcing teams to either gamble on bounces or throw away real prospects.',
  },
]

const cleaningSteps = [
  {
    num: '01',
    Icon: Database,
    title: 'Connect your CRM or upload a CSV',
    body: 'Sync directly with HubSpot, connect Salesforce or Pipedrive through Zapier and n8n, or upload a CSV export straight into Giggal for a quick CRM data clean up.',
  },
  {
    num: '02',
    Icon: MailCheck,
    title: 'Remove dead inboxes and bad syntax',
    body: 'Giggal checks every address for dead mailboxes, typos, disposable domains, and role accounts like info@ or support@, catching bad CRM data before your next send.',
  },
  {
    num: '03',
    Icon: ShieldCheck,
    title: 'Verify catch-all domains directly',
    body: 'Instead of dumping accept-all corporate addresses into an uncertain bucket, Giggal runs deeper mailbox validation and tells you clearly which addresses are valid and which will bounce.',
  },
  {
    num: '04',
    Icon: RefreshCw,
    title: 'Keep new records clean automatically',
    body: 'Wire Giggal into your web forms, enrichment tools, or webhook flows so every incoming lead is checked the moment it enters your CRM.',
  },
]

const beforeAfter = [
  {
    title: 'Unmaintained CRM Database',
    status: 'High decay & bounce risk',
    border: 'border-rose-200 bg-rose-50/40',
    badgeClass: 'bg-rose-100 text-rose-800',
    points: [
      'Lists sit untouched for 6 to 18 months between campaigns',
      '5% to 12% hard bounce rates whenever old segments are emailed',
      'Marketing contact tiers fill up with dead and duplicate leads',
      'Catch-all enterprise accounts get skipped or bounce unpredictably',
      'Reporting dashboards show inflated lead counts and weak reply rates',
    ],
    footer: 'Result: Higher CRM software bills, damaged sender trust, and frustrated reps.',
  },
  {
    title: 'Verified with Giggal',
    status: 'Clean & deliverable',
    border: 'border-emerald-300 bg-emerald-50/40 shadow-sm',
    badgeClass: 'bg-emerald-100 text-emerald-800 font-semibold',
    points: [
      'Existing contacts audited quarterly and before major launches',
      'Hard bounce rates stay consistently below 1.0% across campaigns',
      'Dead addresses suppressed or archived so you only pay for active contacts',
      'Catch-all B2B leads resolved to clear valid or invalid statuses',
      'Sales and marketing teams work from accurate, dependable pipeline data',
    ],
    footer: 'Result: Lower contact costs, stronger inbox placement, and accurate pipeline reports.',
  },
]

const bestPractices = [
  {
    title: 'Run a full CRM audit every quarter',
    body: 'People change jobs constantly. Even a list that was 100% clean in January will pick up bounced addresses by April. Scheduling a quarterly verification pass stops decay from piling up.',
  },
  {
    title: 'Verify leads at the moment of entry',
    body: 'Stop typos and fake signups from polluting your database in the first place. Connect our verification API or Zapier workflow to web forms, gated content downloads, and enrichment imports.',
  },
  {
    title: 'Suppress invalid records instead of deleting history',
    body: 'For teams focused on HubSpot CRM data hygiene or Salesforce compliance, mark invalid contacts as non-marketing or move them to a suppression list. You keep deal history intact while preventing accidental emails.',
  },
  {
    title: 'Re-verify cold segments before reactivation',
    body: 'Before emailing prospects who have not engaged in over 90 days, run that exact segment through bulk verification. Reactivation blasts are one of the fastest ways to trigger spam traps if left unchecked.',
  },
]

const relatedTools = [
  {
    name: 'HubSpot Integration',
    href: '/integrations/hubspot',
    desc: 'Verify HubSpot lists directly and flag invalid or bounced contacts without manual spreadsheets.',
    tag: 'Integration',
  },
  {
    name: 'Zapier Integration',
    href: '/integrations/zapier',
    desc: 'Trigger automatic email checks whenever a new lead enters Salesforce, Pipedrive, or Typeform.',
    tag: 'Automation',
  },
  {
    name: 'n8n Workflows',
    href: '/integrations/n8n',
    desc: 'Build custom self-hosted CRM data cleaning pipelines with webhooks and conditional routing.',
    tag: 'Automation',
  },
  {
    name: 'Email List Cleaning',
    href: '/email-list-cleaning',
    desc: 'Upload exported CRM spreadsheets to strip out bounces, duplicates, and disposable signups fast.',
    tag: 'Bulk Tool',
  },
  {
    name: 'Bulk Email Verifier',
    href: '/bulk-email-verifier',
    desc: 'Process tens of thousands of B2B contacts at once with full catch-all resolution included.',
    tag: 'Bulk Tool',
  },
  {
    name: 'Email Verification API',
    href: '/email-verification-api',
    desc: 'Validate email addresses in real time inside your signup forms, internal tools, or custom CRM.',
    tag: 'Developer API',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'What is CRM hygiene and why does it matter?',
    a: 'CRM hygiene is the ongoing practice of keeping contact records accurate, up to date, and free of invalid or duplicate emails. When B2B databases go uncleaned, bounce rates rise, email deliverability drops, reps waste time on people who left their jobs, and software bills climb because you pay for dead records.',
  },
  {
    q: 'How often should we clean our CRM data?',
    a: 'Most B2B teams run a full database audit once per quarter and verify individual segments right before launching a cold sequence or reactivation campaign. If your CRM pulls in hundreds of new leads each week from web forms or enrichment tools, pair quarterly audits with real-time verification at entry.',
  },
  {
    q: 'How does Giggal clean bad CRM data without losing catch-all contacts?',
    a: 'Many standard CRM data cleaning solutions flag every catch-all domain as "risky" because the receiving mail server accepts all incoming addresses by default. Giggal runs deeper verification checks on those mailboxes so you get a clear valid or invalid result, letting you keep real prospects while removing actual bounces.',
  },
  {
    q: 'Can cleaning HubSpot CRM data lower our HubSpot bill?',
    a: 'Yes. HubSpot charges based on the number of marketing contacts stored in your portal. By identifying invalid, bounced, and disposable addresses and shifting them to non-marketing status, teams regularly trim 10% to 20% of wasted contact volume before their next billing tier renewal.',
  },
  {
    q: 'How do we clean CRM data from Salesforce or Pipedrive?',
    a: 'You have two quick options. For a bulk cleanup, export your contact list as a CSV, upload it to Giggal, and re-import the verified status column to suppress invalid emails. For ongoing hygiene, connect Salesforce or Pipedrive through Zapier, n8n, or our REST API so every new contact is verified automatically.',
  },
  {
    q: 'Does CRM data cleaning improve email deliverability?',
    a: 'Directly. Mailbox providers like Gmail and Outlook watch your hard bounce rate closely. Removing dead addresses and toxic traps from your CRM before sending keeps bounces below 1%, protects your domain reputation, and helps both sales outreach and marketing newsletters land in the primary inbox.',
  },
]

export default function CrmDataCleaningPage() {
  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd('CRM Data Cleaning', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />

      <Navbar />

      <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
        {/* Breadcrumb row */}
        <div className="border-b border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-500">Use Cases</span>
              <span>/</span>
              <span className="text-slate-800 font-medium">CRM Data Cleaning</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/60 via-white to-slate-50/40" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                  CRM Data Cleaning & Email Hygiene
                </h1>

                <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  People switch jobs, companies shut down, and old email addresses quietly stop working. When your team emails those stale CRM records, bounce rates go up and your reps waste hours chasing dead leads. Giggal verifies your HubSpot, Salesforce, and CSV lists so your database stays accurate and your emails reach real inboxes.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 group"
                  >
                    Clean Your CRM List Free
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base transition-colors"
                  >
                    See How It Works
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    HubSpot, Salesforce & CSV Ready
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    98.5% Catch-All Verification
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    1,000 Free Credits Included
                  </span>
                </div>
              </div>

              {/* CRM Audit Snapshot Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <div className="text-sm font-bold text-slate-900">CRM Hygiene Snapshot</div>
                      <div className="text-xs text-slate-500">Sample audit: 25,000 B2B contacts</div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      89.1% Usable
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {auditBreakdown.map((row, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800">{row.label}</span>
                          <span className="font-bold text-slate-900">
                            {row.count}{' '}
                            <span className={`ml-1 px-1.5 py-0.5 rounded text-[11px] font-semibold ${row.badgeClass}`}>
                              {row.pct}
                            </span>
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full rounded-full ${row.barColor} ${row.barWidth}`} />
                        </div>
                        <div className="text-[11px] text-slate-500">{row.note}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>2,740 bad records suppressed</span>
                    <span className="font-semibold text-indigo-600">Bounce rate &lt; 0.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-100">
              <RatingChips />
            </div>
          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="py-10 bg-slate-50/60 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                  <div className="text-3xl font-extrabold text-indigo-600 tracking-tight">{m.value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-800">{m.label}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{m.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY STALE CRM DATA HURTS */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Why stale CRM data costs more than you think
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Most teams focus on adding new leads to their CRM while older records quietly expire in the background. Left unchecked, bad data drags down every campaign you run.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {crmPainPoints.map((item, i) => (
                <div key={i} className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS: 4-STEP WORKFLOW */}
        <section id="how-it-works" className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                How to clean CRM data with Giggal
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Run a quick bulk cleanup today, then set up automated checks so new bad contacts never slip back in.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cleaningSteps.map((step, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <step.Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-wider">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE VS AFTER */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Before and after a CRM data clean up
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                See the operational difference between mailing an unverified database and keeping strict CRM data hygiene.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {beforeAfter.map((box, i) => (
                <div key={i} className={`p-7 rounded-2xl border ${box.border} flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{box.title}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full ${box.badgeClass}`}>
                        {box.status}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3.5">
                      {box.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start text-sm text-slate-700 gap-2.5">
                          {i === 0 ? (
                            <AlertCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                          ) : (
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          )}
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/60">
                    <div className="text-xs text-slate-600 font-medium">{box.footer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEST PRACTICES */}
        <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                CRM data hygiene best practices
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Four simple habits revenue operations teams use to keep contact databases reliable year-round.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-9">{item.body}</p>
                </div>
              ))}
            </div>

            {/* External Video Guide (nofollow) */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <a
                  href="https://www.youtube.com/watch?v=cSbSLbG028E"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Watch HubSpot CRM Cleanup: 5 Data Hygiene Questions Answered on YouTube"
                  className="relative w-full md:w-72 aspect-video rounded-xl overflow-hidden bg-slate-900 shrink-0 group block"
                >
                  <img
                    src="https://i.ytimg.com/vi/cSbSLbG028E/hqdefault.jpg"
                    alt="HubSpot CRM Cleanup: 5 Data Hygiene Questions Answered video thumbnail"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-200"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors">
                    <span className="w-12 h-12 rounded-full bg-white/95 text-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </span>
                  </span>
                </a>

                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-500">
                    Video walkthrough · The Gist (HubSpot Solutions Partner)
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    HubSpot CRM Cleanup: 5 Data Hygiene Questions Answered
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    If you want to see how RevOps teams handle duplicate records, unengaged contacts, and unused custom properties inside HubSpot before verifying email lists, this short walkthrough covers five common cleanup scenarios step by step.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=cSbSLbG028E"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Watch tutorial on YouTube
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTED INTEGRATIONS & TOOLS */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Integrations and tools built for clean CRM data
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Plug Giggal directly into your existing sales stack or run manual CSV cleanups whenever you need them.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTools.map((t, idx) => (
                <Link
                  key={idx}
                  href={t.href}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        {t.tag}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 lg:py-20 bg-slate-50/50 border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Common questions about CRM hygiene, HubSpot contact cleanup, and automated email verification.
              </p>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* PRE-FOOTER CTA BAND */}
        <AltCtaBand
          headline="Ready to clean your CRM database?"
          supporting="Start with 1,000 free verification credits. Upload a sample segment from HubSpot or Salesforce and see how many dead emails are hiding in your lists."
          buttonText="Clean Your CRM List Free"
        />
      </main>

      <Footer />
    </>
  )
}
