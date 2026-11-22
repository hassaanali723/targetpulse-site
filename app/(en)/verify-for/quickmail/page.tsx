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
  Cpu,
  RefreshCw,
  MailCheck,
  Zap,
} from 'lucide-react'

const CANONICAL = '/verify-for/quickmail'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for QuickMail Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Outreach Deliverability and QuickMail Inbox Rotation Protection',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into QuickMail. Protect QuickMail inbox rotation algorithms, preserve Auto-Warm network reputation scores, and maintain cold email deliverability with verified sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with QuickMail custom attributes and prospect tags',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Protection for QuickMail inbox rotation pools and Auto-Warm sender health',
    '1,000 free verification credits without credit card registration',
  ],
}

const quickmailVideo = {
  videoId: 'I2fGXPN8TI0',
  url: 'https://www.youtube.com/watch?v=I2fGXPN8TI0',
  title: 'Everything you need to know about deliverability and avoiding landing in spam',
  channel: 'QuickMail',
  desc: 'Discover how QuickMail distributes volume across multiple inboxes, manages Auto-Warm pools, and how high bounce rates distort rotation algorithms.',
}

const quickmailFaqs: FaqItem[] = [
  {
    q: 'How does an unverified list break QuickMail inbox rotation?',
    a: 'QuickMail dynamically balances message distribution across all connected sender addresses based on inbox health. When an unverified list generates hard bounces on specific inboxes, QuickMail automatically throttles or halts dispatch for those addresses. This shifts the remaining queue volume onto your surviving mailboxes, causing sudden volume spikes that trigger email provider rate limits and damage cold email deliverability.',
  },
  {
    q: 'Can QuickMail Auto-Warm neutralize the reputation damage of hard bounces?',
    a: 'No. While QuickMail Auto-Warm continuously exchanges peer warmup messages to establish positive sender signals, it cannot override corporate spam firewalls when your active campaigns trigger 550 User Unknown rejections. Pre-import QuickMail email verification is required to purge invalid addresses before your sequences launch.',
  },
  {
    q: 'What happens to QuickMail custom attributes during list verification?',
    a: 'Giggal preserves all original CSV columns, including Attributes 1, Attributes 2, custom variables, company tags, and prospect notes. Our verification engine appends clean status flags without altering your data schema, allowing you to re-upload your clean email list directly into QuickMail without column re-mapping.',
  },
  {
    q: 'What is the maximum acceptable bounce rate for QuickMail outreach campaigns?',
    a: 'You should maintain your hard bounce rate strictly below 2%, with under 1.5% being the professional standard for high-volume outbound. Exceeding 2% hard bounces puts your sending domains at risk of spam blacklisting and causes QuickMail automated safety controls to pause campaign execution.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for QuickMail campaigns?',
    a: 'Traditional verification platforms flag catch-all servers as unverified or risky, forcing outbound teams to discard up to 40% of their B2B leads. Giggal executes deep mail server protocol checks to verify whether the individual mailbox exists, delivering 98.5% accuracy so you can safely feed valid catch-all contacts into your QuickMail sequences.',
  },
  {
    q: 'How does QuickMail handle prospect status when an email bounces mid-sequence?',
    a: 'When an email bounces in QuickMail, the platform marks that prospect as bounced and stops all subsequent follow-up steps. However, the sending inbox has already sustained reputation damage. Running QuickMail email verification on every import prevents these failed delivery events from polluting your sequence analytics.',
  },
  {
    q: 'Can I integrate Giggal email verification directly with QuickMail via API or Webhook?',
    a: 'Yes. Giggal offers a high-speed REST API that connects with your lead generation workflows, CRM forms, and webhook automations. You can automatically verify incoming prospect data and import only deliverable contacts into your QuickMail campaigns.',
  },
  {
    q: 'How many free verification credits do I get to test my QuickMail list?',
    a: 'Giggal provides 1,000 free verification credits upon account sign-up, requiring no credit card. You can test your actual QuickMail prospect export, verify catch-all leads with 98.5% accuracy, and review the clean email list before launching outreach.',
  },
]

export const metadata = {
  title: {
    absolute: 'QuickMail Email Verification | Protect Auto-Warm & Rotation | Giggal.ai',
  },
  description:
    'Verify prospect email lists before importing into QuickMail. Protect QuickMail inbox rotation algorithms, preserve Auto-Warm domain health, and maintain cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'QuickMail Email Verification | Protect Auto-Warm & Rotation | Giggal.ai',
    description:
      'Verify prospect email lists before importing into QuickMail. Protect QuickMail inbox rotation algorithms, preserve Auto-Warm domain health, and maintain cold email deliverability.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function QuickMailVerificationPage() {
  const breadcrumbData = breadcrumbLd('QuickMail Verification', CANONICAL)
  const faqData = faqPageLd(quickmailFaqs)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <Navbar tone="light" />

      <main className="pt-24 sm:pt-28 pb-20 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6 sm:pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6">
            <Cpu className="w-3.5 h-3.5" />
            <span>Pre-Import Verification for QuickMail Multi-Inbox Sequences</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            QuickMail Email Verification to Protect Auto-Warm and Sender Rotation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Protect your QuickMail inbox rotation algorithms and preserve Auto-Warm domain reputation. Eliminate invalid mailboxes, spam traps, and hard bounces before launching your outbound sequences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify QuickMail List Free</span>
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
                Prevents QuickMail inbox rotation engine from throttling affected sender mailboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Auto-Warm Shield</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Warmup Network Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Protects warmup peer standing so campaigns maintain optimal cold email deliverability.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">98.5% Accuracy</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Catch-All Resolution</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Validates unverified catch-all mailboxes with 98.5% precision to unlock more pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE ROTATION DISTORTION MECHANISM & MATH */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The Math Behind QuickMail Inbox Rotation Failure Under Hard Bounces
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              QuickMail uses dynamic multi-inbox rotation to distribute prospect volume evenly across sender domains. However, when an unverified list triggers hard bounces, QuickMail automated safety monitors pause or throttle high-bounce mailboxes. This unbalances the entire cluster and threatens your cold email deliverability.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  THRO
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Algorithmic Throttling</h3>
                  <div className="text-xs text-slate-500">Inbox volume cuts by 50% or more</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When an inbox encounters bounces above safety thresholds, QuickMail automatically scales back its daily sending allowance. This throws off campaign timelines and leaves scheduled messages stalled in queue.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  WARM
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Auto-Warm Inefficiency</h3>
                  <div className="text-xs text-slate-500">Peer warmup score degradation</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Auto-Warm builds trust with recipient mail systems over several weeks. A single unverified lead list can trigger provider spam blocks that nullify accumulated Auto-Warm reputation overnight.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Mathematical Impact on QuickMail Multi-Inbox Pools</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Cascading Volume Reallocation Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When QuickMail pauses mailboxes that generate hard bounces, the remaining scheduled outreach volume is reallocated across the surviving active inboxes in the pool:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              V_surviving = (V_target - V_sent) / (N_total - N_paused)
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an outbound agency configures 10 mailboxes to deliver 400 total emails daily (40 emails per inbox), and an unverified contact list generates hard bounces that trigger QuickMail to pause 3 mailboxes, the daily quota for each surviving inbox jumps to 57 emails. This sudden 42.8% volume surge alarms Google Workspace and Microsoft 365 spam filters, frequently causing secondary account suspensions. Performing pre-import QuickMail email verification keeps all 10 mailboxes active and running within safe operational parameters.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Inbox Rotation in QuickMail
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the QuickMail official guide on configuring sender rotation, maintaining Auto-Warm pools, and avoiding delivery traps.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {quickmailVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {quickmailVideo.title}
                </h3>
              </div>
              <a
                href={quickmailVideo.url}
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
                href={quickmailVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${quickmailVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${quickmailVideo.videoId}/hqdefault.jpg`}
                  alt={quickmailVideo.title}
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

        {/* SECTION 4: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Unlocking Catch-All Leads for QuickMail Sequences with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 50% of B2B corporate email servers are configured as catch-all. When scrapers or traditional verification tools encounter these domains, they designate them as unverifiable or risky. This presents a dilemma for QuickMail users: discard half your prospective accounts, or send anyway and risk damaging your Auto-Warm sender score.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <XCircle className="w-4 h-4" />
                <span>The Legacy Verifier Approach</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Discarding 40% of Viable Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Legacy verification tools cannot differentiate between valid and invalid mailboxes on catch-all domains. They simply label the entire domain as risky. QuickMail senders who exclude all catch-all leads sacrifice qualified high-intent enterprise prospects and increase list acquisition expenses.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/30">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Giggal Protocol</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                98.5% Accuracy on Catch-All Inboxes
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Giggal performs deep mail server handshakes to confirm specific user account status without sending test emails. We resolve catch-all domains with 98.5% verified precision, providing a clean email list that fuels QuickMail campaigns without tripping spam alarms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: 3-WAY COMPARISON MATRIX TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing List Verification Methods for QuickMail
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw scraper exports, legacy verification services, and Giggal pre-import validation for QuickMail users.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Capability / Feature</th>
                    <th className="p-4 text-rose-600">Raw Scraper Data</th>
                    <th className="p-4 text-amber-600">Legacy Verifiers</th>
                    <th className="p-4 text-indigo-600 font-bold bg-indigo-50/50">Giggal Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Catch-All Domain Resolution</td>
                    <td className="p-4 text-rose-600">None (high bounce risk)</td>
                    <td className="p-4 text-amber-600">Tagged "Risky" / discarded</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">98.5% Verified Accuracy</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">QuickMail Inbox Rotation Safeguard</td>
                    <td className="p-4 text-rose-600">Triggers inbox pauses</td>
                    <td className="p-4 text-amber-600">Partial protection</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Guaranteed Sub-1.5% Bounces</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Auto-Warm Reputation Safety</td>
                    <td className="p-4 text-rose-600">Destroys warmup scores</td>
                    <td className="p-4 text-amber-600">Moderate safety</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Full Domain Reputation Shield</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">QuickMail Custom Attributes Preservation</td>
                    <td className="p-4 text-slate-600">Raw formats only</td>
                    <td className="p-4 text-amber-600">Frequent column drops</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">100% Intact CSV Alignment</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Test Message Dispatch</td>
                    <td className="p-4 text-slate-600">None</td>
                    <td className="p-4 text-rose-600">Some send ping emails</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Zero Message Transmission</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 6: EXACT CSV HEADER COMPATIBILITY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native QuickMail CSV Header Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes lists without disrupting your custom campaign fields. Every column header, custom attribute, and lead tag remains intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                QuickMail Prospect Upload Schema
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
                    <th className="p-3">Attributes 1</th>
                    <th className="p-3">Attributes 2</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">brian@modernscale.co</td>
                    <td className="p-3">Brian</td>
                    <td className="p-3">Cooper</td>
                    <td className="p-3">Modern Scale</td>
                    <td className="p-3">tier_1_saas</td>
                    <td className="p-3">series_b</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">karen@dormantdomain.org</td>
                    <td className="p-3">Karen</td>
                    <td className="p-3">Vance</td>
                    <td className="p-3">Dormant Corp</td>
                    <td className="p-3">tier_2_saas</td>
                    <td className="p-3">series_a</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">tyler@enterpriseshield.com</td>
                    <td className="p-3">Tyler</td>
                    <td className="p-3">Bennett</td>
                    <td className="p-3">Enterprise Shield</td>
                    <td className="p-3">channel_partner</td>
                    <td className="p-3">enterprise</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly to QuickMail without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">Custom Attributes 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Pre-Import Pipeline for QuickMail Senders
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every prospect record uploaded to Giggal passes through four verification filters before entering your QuickMail sequences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Syntax & MX Check</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Filters RFC syntax errors, malformed typos, and confirms valid active MX DNS records for the receiving domain.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">Deep Mailbox Handshake</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connects with the target mail server without transmitting messages, detecting deleted and inactive mailboxes.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">Catch-All Resolution</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Analyzes server response timing and protocol signals to confirm catch-all inbox existence with 98.5% precision.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900">Clean CSV Export</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Downloads a verified clean email list ready for immediate import into QuickMail campaigns without attribute loss.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: AGENCY & HIGH-VOLUME BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices for QuickMail Inbox Rotation
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Professional lead generation agencies follow these proven guidelines to maintain steady outbound velocity and high cold email deliverability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Keep Hard Bounces Strictly Below 1.5%
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                While email service providers tolerate bounces up to 2%, QuickMail automated rotation functions best when your bounce rate stays under 1.5%. This prevents individual sender throttling and protects domain reputation across your multi-inbox setup.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Synchronize Auto-Warm with Campaign Volume
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Never disable QuickMail Auto-Warm while active campaigns are running. Keep warmup interactions at 25% to 35% of total inbox volume to maintain positive engagement metrics with major mailbox providers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Tag Verified Catch-All Leads for Pacing
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When importing catch-all contacts validated with 98.5% accuracy, assign a prospect tag like "catchall_verified". This lets you monitor response metrics separately and refine sender rotation schedules.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Re-Verify Aged Contact Lists Every 60 Days
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                B2B contact lists decay at approximately 2.5% per month due to employee turnover and corporate restructuring. Re-verifying prospect databases through Giggal before re-launching cold sequences eliminates sudden delivery failures.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About QuickMail Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common deliverability and inbox rotation questions for QuickMail users.
            </p>
          </div>

          <FaqAccordion items={quickmailFaqs} />
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your QuickMail Inbox Rotation Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to QuickMail. Get 1,000 free verifications with zero credit card required.
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
