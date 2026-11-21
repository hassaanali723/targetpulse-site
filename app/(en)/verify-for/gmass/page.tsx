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

const CANONICAL = '/verify-for/gmass'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for GMass Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Gmail Deliverability and Outbound List Verification',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before launching mass campaigns in GMass. Prevent Google Workspace account suspension, eliminate 550 User Unknown bounce errors, and protect your primary Gmail sender reputation.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct compatibility with GMass Google Sheets and CSV campaign formats',
    'Deep mailbox handshake without dispatching test emails',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of terminated Google accounts and invalid MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const gmassVideo = {
  videoId: 'RTDmGYxc1CA',
  url: 'https://www.youtube.com/watch?v=RTDmGYxc1CA',
  title: 'GMass Beginner Tutorial 2026: Personalized Mass Email in Gmail',
  channel: 'GMass',
  desc: 'Learn how GMass executes mail merge campaigns in Gmail, how to connect Google Sheets, and how to maintain high deliverability.',
}

const gmassFaqs: FaqItem[] = [
  {
    q: 'Why does Google suspend Gmail accounts using GMass when emails bounce?',
    a: 'Because GMass sends directly through your personal Gmail or Google Workspace account, Google monitors your outgoing messages in real time. If your campaign generates more than a 2% hard bounce rate, Google automated filters flag the account for abusive sending practices, resulting in immediate suspension.',
  },
  {
    q: 'How does Giggal protect my primary Google Workspace domain?',
    a: 'Giggal connects directly to recipient mail servers to verify whether the mailbox exists, without sending an actual email. By filtering out non-existent addresses and dead domains before you click send in GMass, your bounce rate stays well below Google 1.5% danger threshold.',
  },
  {
    q: 'Can I clean a Google Sheet connected directly to GMass?',
    a: 'Yes. Export your Google Sheet as a CSV, upload it to Giggal for instant verification, and filter for deliverable contacts. Paste the clean emails back into your Google Sheet before GMass connects to it for sending.',
  },
  {
    q: 'Does Giggal preserve GMass personalization tags and custom fields?',
    a: 'Yes. All original columns including First Name, Company, and custom merge fields are preserved intact. You can re-upload your cleaned CSV directly or update your Google Sheet without re-mapping tags.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for GMass campaigns?',
    a: 'While conventional validators treat catch-all domains as "risky" and recommend discarding them, Giggal directly verifies mailbox status behind the catch-all server with 98.5% accuracy. Confirmed deliverable leads can be sent safely via GMass without triggering Google automated bounce suspension algorithms.',
  },
]

export const metadata = {
  title: {
    absolute: 'GMass Email Verification | Prevent Gmail Account Suspension | Giggal.ai',
  },
  description:
    'Verify prospect email lists before launching mass mailings in GMass. Prevent Google Workspace account suspension, eliminate 550 bounces, and protect your primary Gmail inbox.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'GMass Email Verification | Prevent Gmail Account Suspension | Giggal.ai',
    description:
      'Verify prospect email lists before launching mass mailings in GMass. Prevent Google Workspace account suspension, eliminate 550 bounces, and protect your primary Gmail inbox.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function GMassVerificationPage() {
  const breadcrumbData = breadcrumbLd('GMass Verification', CANONICAL)
  const faqData = faqPageLd(gmassFaqs)

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
            Verify Email Lists Before Sending with GMass
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Protect your Google Workspace account from automated suspension. Eliminate dead mailboxes, invalid domains, and spam traps before GMass triggers your campaign.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify GMass List Free</span>
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Google Safe Threshold</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Keeps your bounce rate safely under Google automated 2% suspension trigger.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Suspensions</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Workspace Account Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Eliminates sudden account lockouts and preserves corporate email functionality.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Sheets Compatible</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Direct Tag Retention</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves all GMass merge tags and custom variables for instant campaign launch.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE GMAIL SUSPENSION MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why High Bounces in GMass Trigger Account Suspensions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike cloud-based sequencers that send via isolated relay servers, GMass operates inside your native Gmail environment. Google monitors every delivery response code directly at the tenant level.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  2%
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Google 2% Rule</h3>
                  <div className="text-xs text-slate-500">Automated abuse detection threshold</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google Workspace monitors the ratio of delivered messages to bounced responses. When hard bounces exceed 2% within a short timeframe, Google automated system flags your account for bulk spam activity.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  550
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">User Unknown Errors</h3>
                  <div className="text-xs text-slate-500">Recipient mail servers reject delivery</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When sending to outdated lists, obsolete mailboxes return 550 errors. Just 20 dead emails in a 1,000-message batch can trigger outbound sending freezes that stop all team communication.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Account Safety in GMass
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the GMass official video on how Google tracks bounce rates and how to keep your Gmail account in good standing.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {gmassVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {gmassVideo.title}
                </h3>
              </div>
              <a
                href={gmassVideo.url}
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
                href={gmassVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${gmassVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${gmassVideo.videoId}/hqdefault.jpg`}
                  alt={gmassVideo.title}
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
              Native GMass Google Sheets & CSV Schema
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal keeps your Google Sheets schema intact. Your custom merge tags, salutations, and personalization fields remain unaltered.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                GMass Campaign Upload Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Email Address</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Company</th>
                    <th className="p-3">Custom Tag</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">rachel@saasmetric.io</td>
                    <td className="p-3">Rachel</td>
                    <td className="p-3">Vance</td>
                    <td className="p-3">SaaS Metric</td>
                    <td className="p-3">webinar_attendee</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">tom@abandoned-domain.biz</td>
                    <td className="p-3">Tom</td>
                    <td className="p-3">Burke</td>
                    <td className="p-3">Old Biz Corp</td>
                    <td className="p-3">cold_inbound</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">elena@financialnexus.org</td>
                    <td className="p-3">Elena</td>
                    <td className="p-3">Reyes</td>
                    <td className="p-3">Financial Nexus</td>
                    <td className="p-3">partner_lead</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and connect directly to GMass with zero column misalignment.</span>
              <span className="font-semibold text-indigo-600">Zero Reformatting Needed</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Sending with GMass
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow this three-step safety workflow to protect your Google account and ensure high inbox placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Google Sheet</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save your outreach sheet as a CSV file with your recipient email addresses and custom merge tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your file to Giggal. Our system verifies recipient mail servers and flags invalid inboxes before you send.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Launch in GMass</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Update your Google Sheet with clean contacts and trigger your campaign knowing your Google account is protected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About GMass Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common deliverability and account safety questions for GMass users.
            </p>
          </div>

          <FaqAccordion items={gmassFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Gmail Account Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your contact list before launching your next GMass campaign. Get 1,000 free verifications with zero credit card required.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Verify 1,000 Contacts Free</span>
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
