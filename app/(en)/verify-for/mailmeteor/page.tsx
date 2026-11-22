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
  Sheet,
} from 'lucide-react'

const CANONICAL = '/verify-for/mailmeteor'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'Mailmeteor Email Verification | Protect Gmail Sending Quotas | Giggal.ai',
  },
  description:
    'Verify Google Sheets prospect lists before sending with Mailmeteor. Protect your Google Workspace daily sending quota, resolve catch-all mailboxes with 98.5% accuracy, and prevent Gmail bounce blocks.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Mailmeteor Email Verification | Protect Gmail Sending Quotas | Giggal.ai',
    description:
      'Verify Google Sheets prospect lists before sending with Mailmeteor. Protect your Google Workspace daily sending quota, resolve catch-all mailboxes with 98.5% accuracy, and prevent Gmail bounce blocks.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Mailmeteor Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Google Workspace Deliverability and Mail Merge Verification',
  operatingSystem: 'Web',
  description:
    'Verify Google Sheets prospect lists before sending with Mailmeteor. Prevent Google Workspace account suspension, protect daily sending quotas, and eliminate 550 delivery rejections.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Compatible with Google Sheets and CSV mail merge formats',
    'Deep mailbox handshake without triggering test dispatches',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of closed Google accounts and invalid mail servers',
    '1,000 free verification credits with zero credit card required',
  ],
}

const mailmeteorVideo = {
  videoId: 'BK35MzD-AcI',
  url: 'https://www.youtube.com/watch?v=BK35MzD-AcI',
  title: 'How to mail merge with follow ups in Google Sheets',
  channel: 'Mailmeteor',
  desc: 'Discover how Mailmeteor connects to Gmail, how Google calculates daily sending limits, and why bounced mail merge contacts lead to account lockouts.',
}

const mailmeteorFaqs: FaqItem[] = [
  {
    q: 'Why do hard bounces in Mailmeteor waste my daily Gmail quota?',
    a: 'Google Workspace enforces strict daily limits: 500 emails for personal Gmail and 2,000 for Google Workspace accounts. When an email bounces, Google still counts that message against your daily quota. Sending to 100 invalid contacts reduces your actual outreach capacity by 100 emails for the next 24 hours, effectively burning your daily sending budget.',
  },
  {
    q: 'Can a high bounce rate get my Google Workspace account suspended?',
    a: 'Yes. Google monitors bounce rates on all outgoing mail merge traffic. If your campaign exceeds a 2% to 3% hard bounce rate, Google automated filters flag the account for suspicious activity, resulting in temporary account lockouts, sending rate throttling, or permanent Google Workspace account suspension.',
  },
  {
    q: 'How does Mailmeteor email verification protect cold email deliverability?',
    a: 'Mailmeteor email verification cleans your prospect list prior to running mail merge in Google Sheets. By eliminating dead corporate inboxes, inactive domains, and spam traps, your hard bounce rate stays safely below 1.5%. This protects your domain reputation and prevents incoming mail servers from routing your emails into the spam folder.',
  },
  {
    q: 'How do I clean a Google Sheet before running Mailmeteor?',
    a: 'Export your Google Sheet as a CSV file, upload it to Giggal for list verification, and download the cleaned output. Filter for deliverable status and paste the verified records back into your Google Sheet before clicking send in Mailmeteor.',
  },
  {
    q: 'Does Giggal change the column order required by Mailmeteor merge tags?',
    a: 'No. Giggal retains every column header, including First Name, Company, and custom merge fields like Merge Tag 1. The cleaned CSV matches your original structure exactly, so Mailmeteor detects all variables automatically without requiring manual column mapping.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Mailmeteor sending?',
    a: 'Unlike generic tools that label catch-all domains as risky and recommend throwing them out, Giggal directly checks whether the specific mailbox exists with 98.5% accuracy. Validated catch-all addresses can be merged into your Google Sheet and sent via Mailmeteor without endangering your daily send limit.',
  },
  {
    q: 'How often should sales teams clean email lists for Mailmeteor?',
    a: 'B2B contact data decays at an average rate of 2.5% to 3% each month due to employment changes. Clean email list for Mailmeteor campaigns every time you import fresh data, and re-verify any list older than 30 days before initiating mail merge.',
  },
  {
    q: 'What is the safest sending speed for Mailmeteor in Google Sheets?',
    a: 'To maintain high cold email deliverability in Google Workspace, use Mailmeteor sending delay features to space dispatches by 10 to 15 seconds. Sending unverified lists in rapid bursts triggers Google rate-limiting algorithms and flags your sending IP.',
  },
]

export default function MailmeteorVerificationPage() {
  const breadcrumbData = breadcrumbLd('Mailmeteor Verification', CANONICAL)
  const faqData = faqPageLd(mailmeteorFaqs)

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
            Verify Email Lists Before Uploading to Mailmeteor
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Protect your Google Workspace daily sending quota and prevent Gmail account suspension. Complete Mailmeteor email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before Mailmeteor merges your Google Sheets campaign.
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
              <div className="text-2xl font-black text-indigo-600">2,000 / day</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Workspace Quota Shielded</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Eliminates wasted quota allocations so every send reaches an active, verified inbox.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Google Sheets Ready</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all merge tags and custom columns for direct paste into Mailmeteor sheets.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Bounce Rate</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Stops automated Google account locks and protects sending domain reputation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: GOOGLE WORKSPACE QUOTA MECHANICS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Burn Google Workspace Sending Quotas in Mailmeteor
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Mailmeteor operates directly through your Gmail or Google Workspace account via Google APIs. Google enforces strict daily sending caps: 500 emails per 24 hours for standard accounts and 2,000 for Google Workspace. When an email bounces, Google deducts that message from your daily limit regardless of delivery success.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  CAP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Immediate Quota Evaporation</h3>
                  <div className="text-xs text-slate-500">Bounces consume daily send credits</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you import an unverified list of 1,000 leads with a 12% invalid rate into Mailmeteor, 120 sends result in hard 550 bounces. You lose 120 daily sending slots that could have connected with real buyers, cutting campaign productivity for the day.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 font-mono text-xs font-bold">
                  LOCK
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Automated Google Account Flags</h3>
                  <div className="text-xs text-slate-500">2% bounce rate triggers suspensions</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google Workspace monitors the ratio of bounces to successfully delivered mail. Exceeding 2% to 3% hard bounces flags your account for abusive mail merge behavior, risking automated sending blocks or admin account suspension.
              </p>
            </div>
          </div>

          {/* TECHNICAL FORMULA BOX */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The Google Mail Merge Deliverability Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Google Workspace calculates sender quality using: <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800 text-xs">Sender Quality = (Successfully Delivered Mail / Total Quota Attempted) * 100</span>. Maintaining this ratio above 98.5% is necessary to avoid rate limiting and maintain cold email deliverability across Google Workspace environments. Clean email list for Mailmeteor campaigns keeps your sending health pristine.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Mail Merge in Mailmeteor
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Mailmeteor official tutorial on organizing Google Sheets, setting up personalized merge tags, and managing daily limits safely.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {mailmeteorVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {mailmeteorVideo.title}
                </h3>
              </div>
              <a
                href={mailmeteorVideo.url}
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
                href={mailmeteorVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${mailmeteorVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${mailmeteorVideo.videoId}/hqdefault.jpg`}
                  alt={mailmeteorVideo.title}
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

        {/* SECTION 4: CATCH-ALL RESOLUTION FOR GOOGLE SHEETS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects Mailmeteor Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              When prospecting B2B companies, over 35% of corporate domains use catch-all configurations. Conventional email verification tools label them risky, forcing teams to discard valuable contacts or gamble with Google Workspace daily limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>The Legacy Verifier Problem</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                Losing 35% of Verified Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Legacy tools cannot confirm if an individual mailbox exists on accept-all domains. They classify these contacts as unknown or risky and instruct you to delete them, discarding viable prospects that took hours to research and gather.
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
                Giggal handshakes the specific recipient mailbox directly, determining actual inbox presence behind catch-all domains. We classify them cleanly as deliverable or undeliverable with 98.5% accuracy, allowing you to paste them into Google Sheets with zero bounce concerns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON MATRIX */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for Mailmeteor Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy tools when preparing Google Sheets prospect lists for Mailmeteor.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Capability & Feature</th>
                  <th className="px-4 py-3">Giggal.ai</th>
                  <th className="px-4 py-3 text-slate-500">Legacy Verifiers</th>
                  <th className="px-4 py-3 text-slate-500">Basic Extension Checks</th>
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
                  <td className="px-4 py-3 font-semibold text-slate-900">Google Sheets Column Alignment</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Header Retention</td>
                  <td className="px-4 py-3 text-slate-500">Drops Custom Merge Headers</td>
                  <td className="px-4 py-3 text-slate-500">Manual Re-alignment Needed</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Google Workspace Quota Protection</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Bounce Rate Guard</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Risk of Daily Cap Burn)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (Google Account Lockout Risk)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Verification Protocol</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">Live Mailbox Handshake (No Email Sent)</td>
                  <td className="px-4 py-3 text-slate-500">Cached MX & Syntax Check</td>
                  <td className="px-4 py-3 text-slate-500">Regex Syntax Validation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Free Starter Tier</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">1,000 Free Credits</td>
                  <td className="px-4 py-3 text-slate-500">50 to 100 Credits</td>
                  <td className="px-4 py-3 text-slate-500">Paid Plan Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: GOOGLE SHEETS CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Google Sheets CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal executes Mailmeteor email verification while preserving all sheet columns, merge variables, and custom notes for immediate mail merge execution.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Merge Tag 1</th>
                  <th className="p-3">Giggal Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">rachel@innovate.co</td>
                  <td className="p-3">Rachel</td>
                  <td className="p-3">Innovate Labs</td>
                  <td className="p-3">Q4 Expansion Lead</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  <td className="p-3 text-slate-600">Include in mail merge</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">kevin@expiredcorp.org</td>
                  <td className="p-3">Kevin</td>
                  <td className="p-3">Expired Corp</td>
                  <td className="p-3">Event Attendee</td>
                  <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  <td className="p-3 text-rose-600 font-semibold">Delete row from sheet</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">marcus@enterprise-catchall.com</td>
                  <td className="p-3">Marcus</td>
                  <td className="p-3">Enterprise Systems</td>
                  <td className="p-3">Webinar Registrant</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  <td className="p-3 text-slate-600">Safe for mail merge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-MERGE PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Merge Pipeline for Mailmeteor Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How high-volume sales teams clean email lists for Mailmeteor to maintain zero-bounce mail merge operations in Google Workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Google Sheet</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export your Google Sheet as a CSV containing prospect email addresses and personalized merge fields.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 02</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Server Handshake Check</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal initiates network handshakes with target mail servers, verifying mailbox existence without dispatching an email.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 03</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Resolve Catch-All Leads</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal resolves accept-all domains with 98.5% accuracy, recovering high-value enterprise contacts for your campaign.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Run Mailmeteor</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Paste clean deliverables back into your Google Sheet and launch Mailmeteor with confidence that bounce rates stay sub-1.5%.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: GOOGLE WORKSPACE BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Best Practices: Protecting Cold Email Deliverability in Mailmeteor
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Recommended operational rules to keep Google Workspace sending quotas active and healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Sheet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Batch Your Dispatches</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send in batches of 200 to 300 emails rather than firing 2,000 all at once. Spacing out your dispatches throughout the workday keeps Google abuse algorithms calm.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Space Email Intervals</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Configure Mailmeteor sending delay to space messages by 10 to 15 seconds. Rapid-fire bursts are the number one cause of temporary Gmail rate-limiting.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Scrub Older Spreadsheets</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before sending follow-up mail merges from an older Google Sheet, re-verify the list. Contact turnover causes 2.5% monthly data decay on stale sheets.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Mailmeteor Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding Google Workspace sending limits, catch-all domain resolution, and mail merge list cleaning.
            </p>
          </div>

          <FaqAccordion items={mailmeteorFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Mailmeteor Quotas with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for Mailmeteor mail merge campaigns in under three minutes with zero credit card required.
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
