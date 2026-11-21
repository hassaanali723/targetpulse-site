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

const CANONICAL = '/verify-for/saleshandy'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

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
    q: 'How does an unverified list break downstream sequence steps?',
    a: 'When Step 1 in Saleshandy bounces, subsequent follow-up steps cannot be delivered. More importantly, when an entire sequence is halted due to a high bounce rate, all ongoing follow-ups to valid, engaged prospects are frozen simultaneously.',
  },
  {
    q: 'Does Giggal preserve Saleshandy custom variables and job titles?',
    a: 'Yes. Giggal cleans the email column while maintaining all original attributes, including First Name, Last Name, Company Name, Job Title, and custom tags. You can re-upload your cleaned CSV into Saleshandy with zero column misalignment.',
  },
  {
    q: 'What is the safe bounce rate threshold for Saleshandy campaigns?',
    a: 'You should maintain a bounce rate strictly below 2%, with under 1.5% being the safe industry target. Rates above 3% degrade domain reputation and push outgoing outreach to recipient spam folders.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Saleshandy sequences?',
    a: 'Rather than labeling accept-all domains as "risky" and forcing you to discard good leads, Giggal directly checks mailbox existence behind the catch-all server with 98.5% accuracy. Confirmed deliverable leads can be queued safely into Saleshandy cadences without causing automated sequence freezes.',
  },
]

export const metadata = {
  title: {
    absolute: 'Saleshandy Email Verification | Prevent Sequence Freezes | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Saleshandy. Prevent automated sequence pauses, protect sender reputation, and maintain sub-1.5% bounce rates.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Saleshandy Email Verification | Prevent Sequence Freezes | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Saleshandy. Prevent automated sequence pauses, protect sender reputation, and maintain sub-1.5% bounce rates.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

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

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Prevent automated cadence freezes and domain reputation decay. Purge invalid mailboxes, dormant domains, and spam traps before Saleshandy queues your sequence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Saleshandy List Free</span>
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
              <div className="text-2xl font-black text-indigo-600">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Safe Bounce Threshold</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Keeps your sequences active and prevents automated safety pause triggers.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Cadence Halts</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Sequence Continuity</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Protects scheduled follow-up steps to warm leads from unexpected campaign freezes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Direct Re-Upload</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Saleshandy CSV Schema</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all job titles, custom merge tags, and company details without column drift.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SEQUENCE FREEZE MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Trigger Saleshandy Sequence Pauses
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Saleshandy includes automated deliverability monitoring designed to protect sender domains. When bounce errors surge, the platform halts active sequences to prevent blacklisting.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  SEQ
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cadence Interruption</h3>
                  <div className="text-xs text-slate-500">Automated sequence freeze activates</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When Step 1 encounters dead mailboxes, bounce rates quickly breach 3%. Saleshandy freezes the entire sequence, halting follow-up dispatches to interested prospects until manually resolved.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  IP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Sender Domain Deterioration</h3>
                  <div className="text-xs text-slate-500">Shared sender pools get flagged</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mail providers evaluate domain and IP health across all outgoing traffic. Repeated 550 delivery rejections lower sender scores, sending subsequent emails to spam folders.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Bounce Protection in Saleshandy
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Saleshandy official guide on sender setup, bounce protection, and deliverability optimization.
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
              Native Saleshandy CSV Header Preservation
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal verifies your contacts while preserving all campaign variables. Job titles, company names, and custom tags remain ready for instant import.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Saleshandy Lead Upload Format
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Email</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Company Name</th>
                    <th className="p-3">Job Title</th>
                    <th className="p-3">Custom Tag</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">pat@cloudanalytics.com</td>
                    <td className="p-3">Patrick</td>
                    <td className="p-3">O'Connor</td>
                    <td className="p-3">Cloud Analytics</td>
                    <td className="p-3">VP Engineering</td>
                    <td className="p-3">q4_pipeline</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">megan@outdatedsystem.io</td>
                    <td className="p-3">Megan</td>
                    <td className="p-3">Slater</td>
                    <td className="p-3">Outdated System</td>
                    <td className="p-3">Director IT</td>
                    <td className="p-3">q4_pipeline</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">robert@globallogistics.co</td>
                    <td className="p-3">Robert</td>
                    <td className="p-3">Geller</td>
                    <td className="p-3">Global Logistics</td>
                    <td className="p-3">Head of Supply</td>
                    <td className="p-3">partner_track</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and upload back to Saleshandy with zero column changes.</span>
              <span className="font-semibold text-indigo-600">Zero Re-mapping Required</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Sending with Saleshandy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow this three-step workflow to safeguard cadence delivery and maintain high sender scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Your Prospect File</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export contacts from your CRM or lead database with all personalization tags and job titles.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your CSV to Giggal. Our system checks recipient mail servers and catches inactive inboxes before sending.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Upload to Saleshandy</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Import clean deliverable contacts into your Saleshandy sequence. Launch knowing your follow-ups will run without pauses.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Saleshandy Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Practical advice on keeping Saleshandy sequences active and maintaining high inbox placement.
            </p>
          </div>

          <FaqAccordion items={saleshandyFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Saleshandy Sequences Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to Saleshandy. Get 1,000 free verifications with zero credit card required.
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
