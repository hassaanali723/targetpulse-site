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
} from 'lucide-react'

const CANONICAL = '/verify-for/close'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Close CRM Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CRM Data Cleaning and Sequence Deliverability',
  operatingSystem: 'Web',
  description:
    'Verify lead lists before importing into Close CRM. Prevent Smart View lead database pollution, protect sales rep sequence deliverability, and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Close lead and contact import formats',
    'Deep mailbox handshake without sending test messages',
    'Catch-all domain resolution with 98.5% accuracy',
    'Identification of defunct mailboxes and invalid DNS records',
    '1,000 free verification credits without requiring credit card registration',
  ],
}

const closeVideo = {
  videoId: 'W9ZTw78hyao',
  url: 'https://www.youtube.com/watch?v=W9ZTw78hyao',
  title: 'Getting Started: Importing Data into Close | How to Upload Leads and Contacts to Your CRM',
  channel: 'Close',
  desc: 'Learn how Close CRM imports lead data, executes automated outreach sequences, and why bad lead data damages team sending reputation.',
}

const closeFaqs: FaqItem[] = [
  {
    q: 'Why is pre-import email verification needed for Close CRM?',
    a: 'Close CRM is designed for active sales pipelines. When unverified contacts are imported, invalid addresses contaminate Smart Views, trigger 550 bounce errors across your sales reps connected inboxes, and skew pipeline conversion reporting.',
  },
  {
    q: 'How do bounces in Close CRM impact sales rep sending accounts?',
    a: 'Sales reps connect their individual Google Workspace or Microsoft 365 accounts to Close. When automated sequences generate hard bounces, mailbox providers penalize the rep individual email address, pushing their personal sales messages to spam folders.',
  },
  {
    q: 'Does Giggal preserve Close custom fields and contact attributes?',
    a: 'Yes. Giggal checks the email column while maintaining all other CSV attributes, including Contact Name, Company, Job Title, and custom lead fields. You can upload the cleaned CSV directly into Close without re-mapping columns.',
  },
  {
    q: 'What bounce threshold should sales teams maintain in Close?',
    a: 'Teams should maintain an overall bounce rate strictly below 2%, with under 1.5% being the target standard. Exceeding 3% flags connected mailboxes for review and damages ongoing sales outreach.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Close CRM leads?',
    a: 'Instead of forcing reps to discard viable enterprise leads labeled as "risky" catch-alls, Giggal verifies whether the specific recipient mailbox exists with 98.5% accuracy. Confirmed deliverable leads can be imported directly into active Close sequences with confidence.',
  },
]

export const metadata = {
  title: {
    absolute: 'Close CRM Email Verification | Protect Smart Views & Sequences | Giggal.ai',
  },
  description:
    'Verify prospect email lists before importing into Close CRM. Prevent lead database pollution, protect sequence deliverability across sales reps, and eliminate 550 bounces.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Close CRM Email Verification | Protect Smart Views & Sequences | Giggal.ai',
    description:
      'Verify prospect email lists before importing into Close CRM. Prevent lead database pollution, protect sequence deliverability across sales reps, and eliminate 550 bounces.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function CloseVerificationPage() {
  const breadcrumbData = breadcrumbLd('Close CRM Verification', CANONICAL)
  const faqData = faqPageLd(closeFaqs)

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
            Verify Email Lists Before Uploading to Close CRM
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stop lead database pollution and protect sales rep sender reputation. Filter invalid contacts, spam traps, and dead mailboxes before Close launches your sequence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Close Lead List Free</span>
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
              <div className="text-2xl font-black text-indigo-600">Clean CRM Data</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Smart View Integrity</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents dead contact records from cluttering daily sales workflows and reporting.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5% Bounces</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Sales Rep Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Maintains clean inbox delivery across every connected Google or Microsoft account.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Direct Re-Upload</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Close CSV Alignment</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves all custom lead fields, phone numbers, and company variables intact.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE CRM PIPELINE MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Damage Close CRM Operations
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Close combines CRM pipeline tracking with automated outbound sequencing. Importing dirty lists creates compounding issues across sales operations and sender health.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  CRM
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Smart View Contamination</h3>
                  <div className="text-xs text-slate-500">Sales reps waste time on dead contacts</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When dirty prospect lists enter Close, dead records flood Smart Views. Reps spend hours reviewing leads and making outreach attempts to contacts that left their companies years ago.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  REP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Rep Mailbox Degradation</h3>
                  <div className="text-xs text-slate-500">Connected personal accounts get flagged</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Close dispatches sequences through sales reps actual Google Workspace or Microsoft inboxes. High bounce rates lower the reputation of their primary email address, risking everyday client communication.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Sequences in Close CRM
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Close CRM official guide on setting up cold sequences, managing deliverability, and protecting team sending health.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {closeVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {closeVideo.title}
                </h3>
              </div>
              <a
                href={closeVideo.url}
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
                href={closeVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${closeVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${closeVideo.videoId}/hqdefault.jpg`}
                  alt={closeVideo.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: EXACT CSV HEADER COMPATIBILITY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Close CRM CSV Header Compatibility
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes lists without disrupting your CRM schema. Lead names, company details, and custom fields remain completely intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Close CRM Lead Import Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Contact Email</th>
                    <th className="p-3">Contact Name</th>
                    <th className="p-3">Company Name</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Lead Custom Field</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">greg@enterprisetech.com</td>
                    <td className="p-3">Greg Larson</td>
                    <td className="p-3">Enterprise Tech</td>
                    <td className="p-3">Chief Technology Officer</td>
                    <td className="p-3">Inbound Demo Request</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">dana@bankruptfirm.net</td>
                    <td className="p-3">Dana White</td>
                    <td className="p-3">Bankrupt Firm</td>
                    <td className="p-3">Operations Director</td>
                    <td className="p-3">Cold List Import</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">samuel@commercialholdings.org</td>
                    <td className="p-3">Samuel Green</td>
                    <td className="p-3">Commercial Holdings</td>
                    <td className="p-3">Managing Partner</td>
                    <td className="p-3">Trade Show Lead</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and import directly into Close CRM with zero schema adjustments.</span>
              <span className="font-semibold text-indigo-600">Smart View Ready</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Importing to Close CRM
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Keep your CRM pipeline clean and protect sales rep sender reputation with this three-step workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Your Lead File</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export prospect data from your prospecting platform or spreadsheet with all intended custom fields.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your CSV to Giggal. Our engine verifies recipient mailboxes directly, filtering out dead accounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Import to Close CRM</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Import clean deliverable leads into Close. Launch your sequences knowing rep inboxes stay protected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Close CRM Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common list hygiene and deliverability questions for Close CRM sales teams.
            </p>
          </div>

          <FaqAccordion items={closeFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Close CRM Pipeline Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to Close CRM. Get 1,000 free verifications with zero credit card required.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Verify 1,000 Leads Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/public/docs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
              >
                <span>Read API Documentation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
