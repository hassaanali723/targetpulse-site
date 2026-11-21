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

const CANONICAL = '/verify-for/overloop'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Overloop Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Multichannel Outbound Deliverability and Cadence Protection',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Overloop. Prevent multichannel cadence stalls, protect LinkedIn and email automation credits, and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Overloop multichannel lead schemas',
    'Deep mailbox handshake without sending test messages',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of inactive mailboxes and invalid MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const overloopVideo = {
  videoId: 'uwQ320MUpoo',
  url: 'https://www.youtube.com/watch?v=uwQ320MUpoo',
  title: 'Overloop AI Tutorial: Create a Campaign',
  channel: 'Overloop AI',
  desc: 'Discover how Overloop coordinates email sequences with LinkedIn automation, manages deliverability, and why invalid emails disrupt multichannel cadences.',
}

const overloopFaqs: FaqItem[] = [
  {
    q: 'Why do invalid emails disrupt multichannel campaigns in Overloop?',
    a: 'Overloop blends email steps with LinkedIn actions like profile views and connection requests. When an email bounces, the automated workflow stalls at that branch, leaving subsequent LinkedIn steps disconnected and wasting automation credits on contacts who have moved on.',
  },
  {
    q: 'How does Giggal protect Overloop sending accounts?',
    a: 'Giggal connects directly to recipient mail servers to verify whether the inbox exists, without sending actual test emails. By eliminating invalid addresses before import, your bounce rate remains under 1.5%, protecting your domain from provider blacklists.',
  },
  {
    q: 'Does Giggal preserve Overloop LinkedIn profile URLs and custom tags?',
    a: 'Yes. Giggal checks the email column while maintaining all other prospect columns intact, including LinkedIn profile URLs, First Name, Company, and custom tags. You can re-upload your cleaned CSV into Overloop with zero column realignment.',
  },
  {
    q: 'What bounce threshold should Overloop users target?',
    a: 'You should maintain a bounce rate strictly below 2%, with under 1.5% being the safe operational target. Rates above 3% degrade domain reputation and lower inbox placement across connected mail accounts.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Overloop cadences?',
    a: 'Instead of discarding viable leads marked as "risky" catch-alls, Giggal verifies mailbox existence behind the catch-all server with 98.5% accuracy. Confirmed deliverable prospects can be safely routed into your Overloop multichannel workflow without risking email failure or orphaned LinkedIn steps.',
  },
]

export const metadata = {
  title: {
    absolute: 'Overloop Email Verification | Protect Multichannel Cadences | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Overloop. Prevent multichannel cadence disruptions, protect LinkedIn and email automation workflows, and eliminate hard bounces.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Overloop Email Verification | Protect Multichannel Cadences | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Overloop. Prevent multichannel cadence disruptions, protect LinkedIn and email automation workflows, and eliminate hard bounces.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function OverloopVerificationPage() {
  const breadcrumbData = breadcrumbLd('Overloop Verification', CANONICAL)
  const faqData = faqPageLd(overloopFaqs)

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
            Verify Email Lists Before Uploading to Overloop
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Safeguard your multichannel cadences and stop wasting LinkedIn automation credits. Eliminate dead inboxes, invalid domains, and spam traps before Overloop dispatches your sequence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Overloop List Free</span>
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
              <div className="text-2xl font-black text-indigo-600">Multichannel Flow</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Cadence Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents email delivery failures from halting linked LinkedIn tasks and follow-ups.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5% Bounces</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Safe Outbound Target</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Protects sender domain health across connected Google Workspace and Outlook inboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Direct Re-Upload</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Overloop CSV Alignment</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves all LinkedIn profile URLs, company tags, and custom variables without drift.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MULTICHANNEL CADENCE MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Stall Overloop Multichannel Workflows
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Overloop links email outreach with automated LinkedIn tasks. When an email fails, the entire workflow suffers cascading disruptions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  CAD
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cadence Branch Disruption</h3>
                  <div className="text-xs text-slate-500">Automated workflows stall on email errors</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a lead email bounces, Overloop conditional logic halts subsequent steps. Linked LinkedIn touches become orphaned, wasting valuable monthly automation quotas on invalid contacts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  REP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Sender Domain Deterioration</h3>
                  <div className="text-xs text-slate-500">Provider spam filters engage</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Overloop sends emails through connected Google or Microsoft accounts. A spike in 550 bounces damages domain reputation, landing even clean outreach directly in recipient spam tabs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Multichannel Cadences in Overloop
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Overloop official guide on coordinating multichannel sales campaigns, managing deliverability, and avoiding sender burnout.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {overloopVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {overloopVideo.title}
                </h3>
              </div>
              <a
                href={overloopVideo.url}
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
                href={overloopVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${overloopVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${overloopVideo.videoId}/hqdefault.jpg`}
                  alt={overloopVideo.title}
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
              Native Overloop CSV Header Preservation
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal verifies your contacts while preserving all campaign variables. LinkedIn profile URLs, company tags, and custom fields remain intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Overloop Lead Upload Format
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Email</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Company</th>
                    <th className="p-3">LinkedIn URL</th>
                    <th className="p-3">Custom 1</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">jessica@b2bvelocity.io</td>
                    <td className="p-3">Jessica</td>
                    <td className="p-3">Alvarez</td>
                    <td className="p-3">B2B Velocity</td>
                    <td className="p-3">linkedin.com/in/jalvarez-tech</td>
                    <td className="p-3">growth_podcast</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">victor@dormantcorp.net</td>
                    <td className="p-3">Victor</td>
                    <td className="p-3">Holloway</td>
                    <td className="p-3">Dormant Corp</td>
                    <td className="p-3">linkedin.com/in/vholloway-legacy</td>
                    <td className="p-3">growth_podcast</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">samantha@premierassets.com</td>
                    <td className="p-3">Samantha</td>
                    <td className="p-3">Frost</td>
                    <td className="p-3">Premier Assets</td>
                    <td className="p-3">linkedin.com/in/sfrost-capital</td>
                    <td className="p-3">inbound_partner</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and upload back to Overloop with zero column realignment.</span>
              <span className="font-semibold text-indigo-600">LinkedIn URLs 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Sending with Overloop
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Ensure smooth execution across both email and LinkedIn automation touchpoints with this three-step workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Multichannel Leads</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export your prospect list with recipient email addresses, LinkedIn profile URLs, and custom tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your CSV to Giggal. Our engine verifies each mailbox directly, catching invalid servers and resolving catch-all domains into safe deliverables.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Upload to Overloop</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Import clean deliverable leads into Overloop. Launch your campaign knowing your multichannel flow remains protected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Overloop Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common deliverability and multichannel sequence questions for Overloop users.
            </p>
          </div>

          <FaqAccordion items={overloopFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Overloop Multichannel Cadences Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to Overloop. Get 1,000 free verifications with zero credit card required.
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
