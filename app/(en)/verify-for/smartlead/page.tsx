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

const CANONICAL = '/verify-for/smartlead'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Smartlead Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Email Deliverability and List Verification',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Smartlead. Protect multi-inbox sender clusters from simultaneous reputation decay and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with Smartlead column formats',
    'Deep mailbox verification without dispatching test emails',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of dormant inboxes and invalid MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const smartleadVideo = {
  videoId: 'DIUObYQih3s',
  url: 'https://www.youtube.com/watch?v=DIUObYQih3s',
  title: 'The Ultimate Guide to Cold Email Deliverability in 2026',
  channel: 'Smartlead',
  desc: 'Learn how Smartlead rotates sender accounts, manages IP clusters, and how sudden delivery bounces damage sending pools across connected inboxes.',
}

const smartleadFaqs: FaqItem[] = [
  {
    q: 'How does an unverified list hurt multi-inbox rotation in Smartlead?',
    a: 'Smartlead distributes outbound volume across multiple connected inboxes. When an unverified lead list contains invalid addresses, those bounces get spread across your entire sending pool. Instead of burning a single address, a dirty list damages the reputation of 20 to 50 domains simultaneously.',
  },
  {
    q: 'Can Smartlead detect invalid email addresses before sending?',
    a: 'Smartlead provides campaign-level deliverability tracking and warmup tools, but it relies on your uploaded CSV for lead validity. Pre-import verification with Giggal ensures that dead accounts and invalid servers are filtered out before Smartlead queues a single email.',
  },
  {
    q: 'Does Giggal preserve Smartlead custom variables and lead tags?',
    a: 'Yes. Giggal cleans the email column while maintaining all other CSV columns. Fields like First Name, Last Name, Company, Website, and custom snippet variables remain untouched, allowing immediate re-upload directly into Smartlead.',
  },
  {
    q: 'What is the recommended bounce rate threshold for Smartlead sequences?',
    a: 'You should maintain a bounce rate strictly below 2%, with under 1.5% being the safe operational target. Any rate above 3% triggers email provider flags on Google Workspace and Microsoft 365, leading to automated spam folder placement.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Smartlead campaigns?',
    a: 'Unlike legacy verifiers that flag catch-all domains as "risky" and force you to discard viable prospects, Giggal directly verifies whether the specific inbox exists with 98.5% accuracy. Resolved deliverable contacts can be imported directly into your primary Smartlead campaign without elevating bounce rates.',
  },
]

export const metadata = {
  title: {
    absolute: 'Smartlead Email Verification | Protect Multi-Inbox Pools | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Smartlead. Prevent multi-inbox rotation burns, maintain domain reputation across all sender accounts, and keep bounce rates below 1.5%.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Smartlead Email Verification | Protect Multi-Inbox Pools | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Smartlead. Prevent multi-inbox rotation burns, maintain domain reputation across all sender accounts, and keep bounce rates below 1.5%.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function SmartleadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Smartlead Verification', CANONICAL)
  const faqData = faqPageLd(smartleadFaqs)

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
            Verify Email Lists Before Uploading to Smartlead
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stop multi-inbox burn before it spreads. Filter invalid mailboxes, dormant domains, and resolve catch-all leads before Smartlead rotates your sender accounts.
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
              <div className="text-2xl font-black text-indigo-600">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Safe Bounce Target</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Maintains clean inbox delivery across your entire pool of secondary domains.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Pool Protection</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Multi-Inbox Safety</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents a single bad lead list from degrading sender score across 30+ mailboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Direct Re-Upload</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Smartlead CSV Schema</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all custom column mappings for immediate import into Smartlead campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MULTI-INBOX MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Burn Entire Smartlead Clusters
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Smartlead uses multi-inbox rotation to scale volume safely. However, this same architecture turns a dirty CSV into a systemic hazard if addresses are not validated prior to upload.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  ROT
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cluster Contamination</h3>
                  <div className="text-xs text-slate-500">Bounces distribute across rotating inboxes</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When Smartlead rotates messages across 20 sender accounts, hard bounces are distributed evenly. Instead of isolating failures to one address, every connected domain suffers reputation decay simultaneously.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  ESP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Provider Account Bans</h3>
                  <div className="text-xs text-slate-500">Google and Microsoft automated triggers</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mailbox providers monitor bounce volume per IP and workspace tenant. Reaching a 3% bounce rate inside a 24-hour cycle triggers automatic throttling, sending subsequent outreach to recipient junk folders.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Warmup in Smartlead
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Smartlead official guide on managing sender rotation, mailbox warmup, and avoiding domain burnout.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {smartleadVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {smartleadVideo.title}
                </h3>
              </div>
              <a
                href={smartleadVideo.url}
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
                href={smartleadVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${smartleadVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${smartleadVideo.videoId}/hqdefault.jpg`}
                  alt={smartleadVideo.title}
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
              Native Smartlead CSV Header Preservation
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes your cold outreach list without altering file layout. Your custom Smartlead columns, icebreakers, and personalization tags remain intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Smartlead Campaign Upload Format
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
                    <th className="p-3">Website</th>
                    <th className="p-3">Custom 1</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">alex@enterprise.com</td>
                    <td className="p-3">Alex</td>
                    <td className="p-3">Morgan</td>
                    <td className="p-3">Enterprise Corp</td>
                    <td className="p-3">enterprise.com</td>
                    <td className="p-3">Loved your recent podcast</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">david@obsolete-domain.org</td>
                    <td className="p-3">David</td>
                    <td className="p-3">Ross</td>
                    <td className="p-3">Old Holdings</td>
                    <td className="p-3">obsolete-domain.org</td>
                    <td className="p-3">Noticed the team growth</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">sarah@globalcorp.net</td>
                    <td className="p-3">Sarah</td>
                    <td className="p-3">Chen</td>
                    <td className="p-3">Global Corp</td>
                    <td className="p-3">globalcorp.net</td>
                    <td className="p-3">Great work on Series B</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter by status code with 1 click in your spreadsheet before uploading to Smartlead.</span>
              <span className="font-semibold text-indigo-600">Zero reformatting required</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Uploading to Smartlead
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow this three-step workflow to safeguard your sender accounts and ensure optimal placement in recipient primary tabs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Your Lead List</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export your prospect CSV from Apollo, LinkedIn Sales Navigator, or your CRM with all intended personalization variables.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your CSV to Giggal. Our engine performs deep mailbox checks, identifying invalid inboxes and resolving catch-all domains without sending emails.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Import to Smartlead</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Download the verified file and import deliverable contacts into Smartlead. Launch your campaign knowing your sender accounts remain protected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Smartlead Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common deliverability and list preparation questions for Smartlead outbound teams.
            </p>
          </div>

          <FaqAccordion items={smartleadFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Smartlead Sender Cluster Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect CSV before your next campaign launch. Get 1,000 free verifications with zero credit card required.
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
