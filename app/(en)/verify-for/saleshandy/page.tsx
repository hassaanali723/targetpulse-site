import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldCheck,
  Play,
  FileSpreadsheet,
  Server,
  Layers,
  ExternalLink,
  Zap,
  BarChart3,
  Users,
  MailCheck,
  RefreshCw,
  PauseOctagon,
} from 'lucide-react'

const CANONICAL = '/verify-for/saleshandy'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'Saleshandy Email Verification | Prevent Sequence Freezes | Giggal.ai',
  },
  description:
    'Verify cold email lists before importing into Saleshandy sequences. Protect email accounts, resolve catch-alls with 98.5% accuracy, and safeguard your sender score.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Saleshandy Email Verification | Prevent Sequence Freezes | Giggal.ai',
    description:
      'Verify cold email lists before importing into Saleshandy sequences. Protect email accounts, resolve catch-alls with 98.5% accuracy, and safeguard your sender score.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Saleshandy Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Outreach Deliverability and Sequence Protection',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Saleshandy. Prevent automated cadence freezes, protect sender accounts from provider penalties, and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Saleshandy column mappings',
    'Deep mailbox validation without dispatching test emails',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of closed mailboxes and invalid MX records',
    '1,000 free verification credits without requiring credit card details',
  ],
}

const saleshandyVideo = {
  videoId: '-MLuuA35nfA',
  url: 'https://www.youtube.com/watch?v=-MLuuA35nfA',
  title: 'How to Avoid Cold Emails Going to Spam? (6 Email Deliverability Tips)',
  channel: 'Saleshandy',
  desc: 'Watch how Saleshandy configures sender rotation, monitors bounce thresholds, and automatically pauses sequences when deliverability risks occur.',
}

const saleshandyFaqs: FaqItem[] = [
  {
    q: 'Why did Saleshandy automatically pause my email sequence?',
    a: 'Saleshandy monitors bounce rates across each active cadence. When an unverified list triggers excessive 550 User Unknown bounce responses, Saleshandy automatically pauses the sequence to prevent connected mail servers from blocking your domain.',
  },
  {
    q: 'Why is Saleshandy email verification necessary before launching cadences?',
    a: 'Saleshandy email verification purges dead inboxes, deactivated corporate mailboxes, and spam traps prior to sending. Keeping your hard bounce rate below 1.5% prevents Saleshandy sequence freezes, preserves cold email deliverability, and ensures follow-up steps reach real prospects.',
  },
  {
    q: 'How does an unverified list break downstream sequence steps in Saleshandy?',
    a: 'When Step 1 in Saleshandy bounces, subsequent follow-up steps cannot be delivered. More importantly, when an entire sequence is halted due to a high bounce rate, all ongoing follow-ups to valid, engaged prospects are frozen simultaneously, causing missed sales meetings.',
  },
  {
    q: 'Does Giggal preserve Saleshandy custom variables and job titles?',
    a: 'Yes. Giggal cleans the email column while maintaining all original attributes, including First Name, Last Name, Company Name, Job Title, and custom tags. You can re-upload your cleaned CSV into Saleshandy with zero column misalignment.',
  },
  {
    q: 'What is the safe bounce rate threshold for Saleshandy campaigns?',
    a: 'You should maintain a bounce rate strictly below 2%, with under 1.5% being the safe industry target. Rates above 3% degrade domain reputation, trigger automated sequence pauses, and push outgoing outreach to recipient spam folders.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Saleshandy sequences?',
    a: 'Rather than labeling accept-all domains as risky and forcing you to discard good leads, Giggal directly checks mailbox existence behind the catch-all server with 98.5% accuracy. Confirmed deliverable leads can be queued safely into Saleshandy cadences without causing automated sequence freezes.',
  },
  {
    q: 'How often should sales reps clean email lists for Saleshandy?',
    a: 'B2B contact databases decay at roughly 3% each month due to employment turnover. Clean email list for Saleshandy sequences every time you import fresh lead data to prevent unexpected sequence pauses.',
  },
  {
    q: 'What are the recommended sender rotation limits in Saleshandy?',
    a: 'To maximize cold email deliverability across multi-account setups, limit each connected inbox to 35 to 45 emails per day in Saleshandy. Combine conservative sending limits with verified prospect data to maintain pristine domain scores.',
  },
]

export default function SaleshandyVerificationPage() {
  const breadcrumbData = breadcrumbLd('Saleshandy Verification', CANONICAL)
  const faqData = faqPageLd(saleshandyFaqs)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <Navbar tone="light" />

      <main className="pt-24 sm:pt-28 pb-20 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6 sm:pt-10 pb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Verify Email Lists Before Uploading to Saleshandy
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Prevent automated Saleshandy sequence freezes and safeguard your sender rotation pools. Complete Saleshandy email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before Saleshandy queues your outreach.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Prospect List Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/public/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all"
            >
              <span>API Documentation</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* 3 CLEAN FACT METRICS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-indigo-600">0 Freezes</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Sequence Interruptions</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Stops automated cadence halts so scheduled follow-ups reach active prospects uninterrupted.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Native CSV Mapping</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all Saleshandy custom variables, company fields, and tags for direct upload.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Bounce Rate</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Guarantees sub-1.5% bounce rates to protect cold email deliverability across sender accounts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: SEQUENCE FREEZES & ROTATION RISKS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Trigger Saleshandy Sequence Freezes
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Saleshandy incorporates automated safety tripwires to protect sending accounts. When an unverified list generates a rapid cluster of hard bounces, Saleshandy freezes the cadence immediately.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  3%
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Automated Cadence Freezes</h3>
                  <div className="text-xs text-slate-500">Saleshandy pauses active campaigns</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When outbound cadences breach 3% hard bounces, Saleshandy halts all queued emails. This not only stops step 1 dispatches to new leads, but freezes scheduled follow-up steps to engaged prospects, causing missed pipeline opportunities.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  ROT
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Sender Rotation Poisoning</h3>
                  <div className="text-xs text-slate-500">Every connected sender absorbs bounces</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Saleshandy distributes outgoing volume across multiple inboxes. When an unverified list contains invalid leads, bounces are sprayed across every connected sender account, damaging domain reputation pool-wide.
              </p>
            </div>
          </div>

          {/* FORMULA BOX */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The Saleshandy Cadence Safety Threshold
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Saleshandy evaluates cadence health using the formula: <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800 text-xs">Bounce Ratio = (Hard 550 Rejections / Total Dispatched Leads) * 100</span>. Exceeding 2% flags your sending accounts with Microsoft and Google. Clean email list for Saleshandy cadences guarantees that your bounce ratio stays safely below 1.5%.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Sequence Health in Saleshandy
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Saleshandy official deliverability guide on sender rotation, bounce monitoring, and avoiding the spam folder.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {saleshandyVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {saleshandyVideo.title}
                </h3>
              </div>
              <a
                href={saleshandyVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors shrink-0"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 sm:p-6 bg-slate-900">
              <a
                href={saleshandyVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${saleshandyVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${saleshandyVideo.videoId}/hqdefault.jpg`}
                  alt={saleshandyVideo.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: CATCH-ALL RESOLUTION FOR SALESHANDY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects Saleshandy Cadences
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 50% of B2B corporate domains use accept-all configurations. Conventional validators label them risky and recommend deleting them, cutting down your outreach reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>The Legacy Verifier Problem</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                Discarding 40% of B2B Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional verifiers cannot determine whether specific mailboxes exist on accept-all domains. They dump valuable prospects into a catch-all bin and tell you to discard them, slashing your addressable market and lowering campaign ROI.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/30">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Giggal Direct Mailbox Resolution</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                98.5% Accuracy on Accept-All Servers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Giggal initiates direct network handshakes with target mail servers, resolving catch-all domains into deliverable or undeliverable with 98.5% accuracy. Validated catch-alls enter Saleshandy safely, keeping bounce rates under 1.5% while expanding outreach volume.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON MATRIX */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for Saleshandy Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy tools when preparing prospect CSV lists for Saleshandy.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Capability & Feature</th>
                  <th className="px-4 py-3">Giggal.ai</th>
                  <th className="px-4 py-3 text-slate-500">Legacy Verifiers</th>
                  <th className="px-4 py-3 text-slate-500">Basic Extension Verifiers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Catch-All Domain Resolution</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">98.5% Direct Inbox Handshake</td>
                  <td className="px-4 py-3 text-slate-500">Marked "Risky" / Discarded</td>
                  <td className="px-4 py-3 text-slate-500">Unchecked / Raw Pass</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Saleshandy Column Alignment</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Header Retention</td>
                  <td className="px-4 py-3 text-slate-500">Drops Custom Snippet Headers</td>
                  <td className="px-4 py-3 text-slate-500">Exports Email Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Sequence Freeze Protection Margin</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Bounce Rate Shield</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Risk of Cadence Freeze)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (Domain Ban Risk)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Verification Protocol</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">Live Mailbox Handshake (No Email Sent)</td>
                  <td className="px-4 py-3 text-slate-500">Cached MX & Syntax Check</td>
                  <td className="px-4 py-3 text-slate-500">Regex Syntax Validation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Free Starter Credits</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">1,000 Free Credits</td>
                  <td className="px-4 py-3 text-slate-500">50 to 100 Credits</td>
                  <td className="px-4 py-3 text-slate-500">Paid Plan Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: SALESHANDY CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Saleshandy CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal executes Saleshandy email verification while retaining all custom variables, job titles, and recipient tags for immediate campaign upload.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Job Title</th>
                  <th className="p-3">Custom Snippet</th>
                  <th className="p-3">Giggal Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">nathan@cloudscale.io</td>
                  <td className="p-3">Nathan</td>
                  <td className="p-3">CloudScale</td>
                  <td className="p-3">VP Engineering</td>
                  <td className="p-3">Read your cloud migration post</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">amber@defunctsys.org</td>
                  <td className="p-3">Amber</td>
                  <td className="p-3">Old Systems</td>
                  <td className="p-3">Director IT</td>
                  <td className="p-3">Met at SaaS Expo</td>
                  <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">brian@enterprise-catchall.com</td>
                  <td className="p-3">Brian</td>
                  <td className="p-3">Enterprise Corp</td>
                  <td className="p-3">CTO</td>
                  <td className="p-3">Loved your panel talk</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Import Pipeline for Saleshandy Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How high-performing sales teams clean email lists for Saleshandy to maintain sub-1.5% bounce rates and prevent cadence pauses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export prospect data from your CRM or scraper with email addresses, names, job titles, and custom snippet fields intact.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 02</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Server Handshake Check</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal initiates network handshakes with target mail servers, verifying inbox presence without sending an actual email message.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 03</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Resolve Catch-All Leads</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal resolves accept-all domains with 98.5% accuracy, recovering high-value enterprise contacts for your Saleshandy cadence.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Upload to Saleshandy</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Import clean deliverables into Saleshandy. Launch your campaign knowing your bounce rate stays safely below 1.5%.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: DELIVERABILITY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices: Protecting Cold Email Deliverability in Saleshandy
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Recommended operational rules to keep sender rotation pools healthy and prevent automated sequence freezes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <PauseOctagon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Never Force-Resume Freezes</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                If Saleshandy pauses your cadence, do not click resume without verifying the list. Resuming an uncleaned list causes repeat bounces that trigger domain blacklisting.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Cap Daily Volume</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Limit sending volume to 35 to 45 emails per day per connected account in Saleshandy. Spreading sends across multiple inboxes avoids spam filter scrutiny.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Re-verify Older CSV Files</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before sending follow-up cadences on lead lists older than 30 days, clean the remaining contacts. Outdated lists create unexpected bounce spikes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Saleshandy Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding Saleshandy sequence freezes, catch-all domain resolution, and sender rotation protection.
            </p>
          </div>

          <FaqAccordion items={saleshandyFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Saleshandy Senders with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for Saleshandy sequences in under three minutes with zero credit card required.
              </p>
            </div>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all shrink-0"
            >
              <span>Get 1,000 Free Credits</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
