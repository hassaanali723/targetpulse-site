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
  Sparkles,
} from 'lucide-react'

const CANONICAL = '/verify-for/lemlist'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'Lemlist Email Verification | Protect Lemwarm Scores | Giggal.ai',
  },
  description:
    'Verify prospect contacts before importing into Lemlist multichannel sequences. Preserve custom variables, resolve catch-alls with 98.5% accuracy, and protect domain deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Lemlist Email Verification | Protect Lemwarm Scores | Giggal.ai',
    description:
      'Verify prospect contacts before importing into Lemlist multichannel sequences. Preserve custom variables, resolve catch-alls with 98.5% accuracy, and protect domain deliverability.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

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
    q: 'Why is Lemlist email verification necessary before launching campaigns?',
    a: 'Lemlist email verification purges invalid contacts, closed corporate inboxes, and spam traps prior to sending. Maintaining a bounce rate under 1.5% is required to protect cold email deliverability, keep your Lemwarm score above 90, safeguard personalized dynamic images from burning credits, and ensure emails land in the primary inbox.',
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
    a: 'Yes. Giggal verifies the email column and preserves every other attribute, including custom icebreakers, company names, and dynamic image placeholders, allowing instant 1-click upload back into Lemlist without column mapping adjustments.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Lemlist campaigns?',
    a: 'Unlike traditional validators that label catch-all domains as risky and force you to skip viable leads, Giggal directly verifies whether the specific inbox exists behind the catch-all server with 98.5% accuracy. Validated deliverable contacts can be imported directly into your primary Lemlist sequence without dragging down your Lemwarm score.',
  },
  {
    q: 'How often should sales teams clean email lists for Lemlist?',
    a: 'B2B prospect lists decay continuously as contacts change companies. Clean email list for Lemlist sequences every time you export fresh leads, and re-verify any campaign list older than 30 days before queueing follow-up emails.',
  },
  {
    q: 'What is the optimal sending volume per mailbox in Lemlist?',
    a: 'To maintain high cold email deliverability and keep Lemwarm scores stable, limit sending volume to 30 to 45 emails per day per mailbox. Distributing volume across multiple warmed-up inboxes prevents spam filters from triggering rate-limits.',
  },
]

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

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Protect your Lemwarm deliverability score and stop wasting personalized dynamic image credits. Complete Lemlist email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before Lemlist launches your sequence.
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
              <div className="text-2xl font-black text-indigo-600">&gt; 90+ Score</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Lemwarm Score Shielded</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Maintains top-tier sender reputation and keeps cold outreach landing in the primary inbox.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Liquid Tags Preserved</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all icebreakers, dynamic image variables, and custom liquid placeholders intact.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Bounce Rate</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents credit waste on bounced dynamic images and protects domain deliverability.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE LEMWARM MECHANICS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Lists Destroy Lemwarm Scores in Lemlist
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Lemwarm is Lemlist automated email warmup engine, connecting thousands of real inboxes to establish high sender trust. However, real-world cold email deliverability directly impacts your domain health. When an unverified list generates hard bounces, your Lemwarm score drops rapidly.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  90-
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Lemwarm Score Downgrades</h3>
                  <div className="text-xs text-slate-500">Bounces drag domain health below 80</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When outbound sequences hit 3% hard bounces, major email providers (Google and Outlook) flag your domain as a source of spam. Lemwarm immediately detects increased spam folder placement across its peer network, dropping your score and stalling active campaigns.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  IMG
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Wasted Personalization Compute</h3>
                  <div className="text-xs text-slate-500">Burned dynamic image and video credits</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lemlist dynamically renders personalized images and video landing pages for each recipient upon queueing. If an address bounces, that personalization compute and credit cost are permanently burned on a mailbox that never existed.
              </p>
            </div>
          </div>

          {/* TECHNICAL CALCULATION BOX */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The True Cost of Bounced Outreach in Lemlist
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When 50 emails bounce in a 1,000-contact sequence, you lose more than just recipient contact: you lose 50 dynamic personalization credits, burn daily sending slots, and degrade your Lemwarm score by 8 to 15 points. Recovering a degraded Lemwarm score requires 2 to 3 weeks of intensive warmup throttling. Clean email list for Lemlist sequences avoids this operational setback entirely.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Lemwarm in Lemlist
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Lemlist official masterclass on avoiding the spam folder, understanding DNS records, and keeping your Lemwarm score above 90.
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
                  <div className="w-14 h-14 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: CATCH-ALL RESOLUTION FOR LEMLIST */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects Lemwarm Scores
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 50% of enterprise target domains are configured as catch-all. Traditional email verifiers mark these addresses as risky and advise deleting them, cutting down your outreach pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>The Legacy Verifier Problem</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                Discarding 35% of High-Value Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional tools cannot verify individual mailboxes behind catch-all servers. They advise teams to delete all accept-all contacts, leaving valuable decision-makers untouched and reducing campaign ROI.
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
                Giggal performs direct mailbox handshakes, verifying whether the recipient mailbox exists behind catch-all domains. We classify them as deliverable or undeliverable with 98.5% accuracy, allowing you to personalize outreach in Lemlist with complete confidence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON MATRIX */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for Lemlist Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy tools when preparing prospect CSV lists for Lemlist.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Capability & Feature</th>
                  <th className="px-4 py-3">Giggal.ai</th>
                  <th className="px-4 py-3 text-slate-500">Legacy Verifiers</th>
                  <th className="px-4 py-3 text-slate-500">Basic Enrichment Verifiers</th>
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
                  <td className="px-4 py-3 font-semibold text-slate-900">Lemlist Icebreaker Preservation</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Column Alignment</td>
                  <td className="px-4 py-3 text-slate-500">Drops Custom Snippet Headers</td>
                  <td className="px-4 py-3 text-slate-500">Exports Email Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Lemwarm Protection Margin</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Hard Bounce Rate</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Risk of Score Drop)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (Spam Folder Placement)</td>
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

        {/* SECTION 6: LEMLIST CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Lemlist CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal executes Lemlist email verification while retaining custom icebreakers, personalized image placeholders, and company variables for immediate import.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Email</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Icebreaker</th>
                  <th className="p-3">Giggal Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">sophie@hypergrowth.co</td>
                  <td className="p-3">Sophie</td>
                  <td className="p-3">HyperGrowth</td>
                  <td className="p-3">Loved your keynote on inbound sales</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  <td className="p-3 text-slate-600">Import to main cadence</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">jason@abandoneddomain.org</td>
                  <td className="p-3">Jason</td>
                  <td className="p-3">Old Ventures</td>
                  <td className="p-3">Congrats on the podcast interview</td>
                  <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  <td className="p-3 text-rose-600 font-semibold">Discard before import</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">elena@enterprise-catchall.com</td>
                  <td className="p-3">Elena</td>
                  <td className="p-3">Enterprise Cloud</td>
                  <td className="p-3">Read your post regarding AI agents</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  <td className="p-3 text-slate-600">Safe for primary sequence</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Import Pipeline for Lemlist Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How high-performing sales teams clean email lists for Lemlist to protect Lemwarm scores and prevent wasted dynamic personalization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export prospect data from your CRM or lead database with custom icebreakers and dynamic variables intact.
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
                Giggal resolves accept-all domains with 98.5% accuracy, recovering high-value enterprise contacts for your Lemlist sequence.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Upload to Lemlist</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Import clean deliverables into Lemlist. Launch your campaign knowing your bounce rate stays safely below 1.5%.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: LEMLIST BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices: Protecting Cold Email Deliverability in Lemlist
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Recommended operational rules to keep Lemwarm scores above 90 and maximize multichannel engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Audit Dynamic Variables</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Always verify that personalized icebreakers and liquid tags are filled before dispatching. Missing variables trigger fallback text that looks automated to recipient spam filters.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Maintain Constant Warmup</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep Lemwarm enabled at 25 to 35 warmup emails per day throughout active outreach. Consistent warmup activity cushions domain reputation during sending bursts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Re-verify Follow-up Batches</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before launching follow-up steps on lists older than 30 days, clean the remaining leads. Stale data accounts for more than half of unexpected campaign bounce spikes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Lemlist Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding Lemwarm scores, catch-all domain resolution, and dynamic personalization protection in Lemlist.
            </p>
          </div>

          <FaqAccordion items={lemlistFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Lemlist Senders with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for Lemlist campaigns in under three minutes with zero credit card required.
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
