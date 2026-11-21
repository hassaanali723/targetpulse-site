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

const CANONICAL = '/verify-for/lemlist'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Lemlist Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Outreach Deliverability and Lemwarm Score Protection',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Lemlist. Protect Lemwarm deliverability scores, prevent wasted personalization credits, and keep sequence bounce rates under 1.5%.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct compatibility with Lemlist CSV column formats and icebreaker fields',
    'Deep mailbox handshake without sending test messages',
    'Catch-all domain resolution with 98.5% accuracy',
    'Identification of abandoned mailboxes and invalid DNS records',
    '1,000 free verification credits without requiring payment details',
  ],
}

const lemlistVideo = {
  videoId: 'lLrHxOka8Ns',
  url: 'https://www.youtube.com/watch?v=lLrHxOka8Ns',
  title: 'I Stopped Landing in Spam After Learning This',
  channel: 'lemlist',
  desc: 'Watch the official Lemlist guide on protecting sender reputation, keeping Lemwarm scores above 90, and eliminating hard bounces before sending.',
}

const lemlistFaqs: FaqItem[] = [
  {
    q: 'Why does an unverified list hurt my Lemwarm score in Lemlist?',
    a: 'Lemwarm tracks your domain sender health through real peer inbox interactions. When you launch a campaign to unverified contacts that generate hard bounces, major providers downgrade your domain reputation. Lemwarm detects this drop, causing your overall warm score to plunge below safe thresholds.',
  },
  {
    q: 'Does Lemlist built-in email finder guarantee 100% deliverability?',
    a: 'While Lemlist includes email enrichment tools, B2B data decays at over 2.5% every month due to job changes and company restructurings. Performing real-time verification with Giggal right before uploading guarantees that inactive mailboxes are purged prior to sending.',
  },
  {
    q: 'Are personalized liquid image credits refunded when an email bounces?',
    a: 'No. Lemlist generates dynamic images and personalized screenshots at the time the message is queued. When that message bounces due to an invalid mailbox, the personalization compute and platform credits are lost permanently.',
  },
  {
    q: 'Does Giggal preserve Lemlist custom icebreakers and liquid variables?',
    a: 'Yes. Giggal verifies the email column and preserves every other attribute, including custom icebreakers, company names, and dynamic image placeholders, allowing instant 1-click upload back into Lemlist.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Lemlist campaigns?',
    a: 'Unlike traditional validators that label catch-all domains as "risky" and force you to skip viable leads, Giggal directly verifies whether the specific inbox exists behind the catch-all server with 98.5% accuracy. Validated deliverable contacts can be imported directly into your primary Lemlist sequence without dragging down your Lemwarm score.',
  },
]

export const metadata = {
  title: {
    absolute: 'Lemlist Email Verification | Protect Lemwarm Scores | Giggal.ai',
  },
  description:
    'Verify prospect email lists before launching campaigns in Lemlist. Prevent Lemwarm score degradation, eliminate wasted personalization credits, and keep bounce rates below 1.5%.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Lemlist Email Verification | Protect Lemwarm Scores | Giggal.ai',
    description:
      'Verify prospect email lists before launching campaigns in Lemlist. Prevent Lemwarm score degradation, eliminate wasted personalization credits, and keep bounce rates below 1.5%.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function LemlistVerificationPage() {
  const breadcrumbData = breadcrumbLd('Lemlist Verification', CANONICAL)
  const faqData = faqPageLd(lemlistFaqs)

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
            Verify Email Lists Before Uploading to Lemlist
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Safeguard your Lemwarm score and stop wasting personalized dynamic credits. Eliminate dead inboxes, invalid domains, and spam traps before launching your Lemlist sequence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Lemlist List Free</span>
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
              <div className="text-2xl font-black text-indigo-600">&gt; 92 / 100</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Lemwarm Score</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents sudden reputation drops caused by sending to invalid prospect addresses.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Credit Waste</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Dynamic Image Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Never spend personalized screenshot and liquid rendering credits on dead mailboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Icebreakers Saved</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Full Column Retention</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Cleaned CSV maintains custom icebreaker snippets and lead tags without column drift.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE LEMWARM DEGRADATION MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Destroy Lemwarm Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Lemlist pairs your cold sequence with the Lemwarm network to ensure primary tab placement. However, hard bounces directly erode the reputation that Lemwarm works to establish.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  80↓
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Lemwarm Health Degradation</h3>
                  <div className="text-xs text-slate-500">Reputation rating drops below 85</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When outbound sequences hit 3% hard bounces, Google and Microsoft flag the sending domain. Lemwarm monitors this signal, dropping your warm score and causing upcoming outreach to land in spam folders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  IMG
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Wasted Liquid Credits</h3>
                  <div className="text-xs text-slate-500">Personalized video & image loss</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lemlist dynamically renders custom images for every recipient before dispatch. Sending to obsolete B2B lists burns valuable personalization credits on mailboxes that no longer exist.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Warmup in Lemlist
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Lemlist official deliverability guide on maintaining high reply rates, managing domain warmup, and avoiding spam placement.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {lemlistVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {lemlistVideo.title}
                </h3>
              </div>
              <a
                href={lemlistVideo.url}
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
                href={lemlistVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${lemlistVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${lemlistVideo.videoId}/hqdefault.jpg`}
                  alt={lemlistVideo.title}
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
              Lemlist CSV Header & Icebreaker Compatibility
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes lists without disrupting your custom campaign fields. Every column header and liquid variable remains ready for instant Lemlist import.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Lemlist Prospect CSV Format
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">email</th>
                    <th className="p-3">firstName</th>
                    <th className="p-3">companyName</th>
                    <th className="p-3">icebreaker</th>
                    <th className="p-3">customImageTag</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">marcus@fintechwave.co</td>
                    <td className="p-3">Marcus</td>
                    <td className="p-3">Fintech Wave</td>
                    <td className="p-3">Loved your keynote in Austin</td>
                    <td className="p-3">badge_blue</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">elena@deadventure.org</td>
                    <td className="p-3">Elena</td>
                    <td className="p-3">Dead Venture</td>
                    <td className="p-3">Saw your recent funding round</td>
                    <td className="p-3">badge_red</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">james@globalconglomerate.com</td>
                    <td className="p-3">James</td>
                    <td className="p-3">Global Conglomerate</td>
                    <td className="p-3">Congrats on the European expansion</td>
                    <td className="p-3">badge_gold</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter for deliverable contacts and upload back into Lemlist with zero column re-mapping.</span>
              <span className="font-semibold text-indigo-600">Icebreakers 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Sending with Lemlist
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow this quick three-step verification process to protect your sender health and maximize outreach replies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Your Prospect CSV</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export leads with your custom icebreakers, company names, and dynamic personalization variables.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your file to Giggal. Our engine verifies each mailbox directly, catching invalid servers and resolving catch-all domains.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Import & Send</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload the clean CSV to your Lemlist campaign. Launch your outreach knowing your Lemwarm score remains protected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Lemlist Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Common questions on protecting Lemwarm health and avoiding campaign deliverability penalties.
            </p>
          </div>

          <FaqAccordion items={lemlistFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Lemwarm Score Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to Lemlist. Get 1,000 free verifications with zero credit card required.
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
