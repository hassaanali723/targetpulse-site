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
  Cpu,
} from 'lucide-react'

const CANONICAL = '/verify-for/smartlead'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'Smartlead Email Verification | Protect Multi-Inbox Pools | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Smartlead. Prevent multi-inbox rotation burns, resolve catch-all mailboxes with 98.5% accuracy, and protect sender reputation.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Smartlead Email Verification | Protect Multi-Inbox Pools | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Smartlead. Prevent multi-inbox rotation burns, resolve catch-all mailboxes with 98.5% accuracy, and protect sender reputation.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

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
    a: 'Smartlead distributes outbound volume across multiple connected inboxes. When an unverified lead list contains invalid addresses, those bounces get distributed across your entire sending pool. Instead of damaging a single address, an uncleaned list degrades the sender score of 20 to 50 domains simultaneously, causing widespread spam placement.',
  },
  {
    q: 'Why is Smartlead email verification required before launching a campaign?',
    a: 'Smartlead provides automated warmup and sending rotation, but it does not scrub your lead list prior to dispatch. Smartlead email verification filters out dead accounts, deactivated corporate mailboxes, and spam traps beforehand so your hard bounce rate stays under 1.5%, preserving high inbox placement across your entire sender cluster.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Smartlead campaigns?',
    a: 'Unlike legacy verifiers that flag catch-all domains as risky and force you to delete viable prospects, Giggal directly verifies whether the specific inbox exists with 98.5% accuracy. Resolved deliverable contacts can be uploaded into your primary Smartlead campaign without elevating bounce rates or triggering spam filters.',
  },
  {
    q: 'Does Giggal preserve Smartlead custom variables and lead tags?',
    a: 'Yes. Giggal cleans the email column while maintaining all other CSV columns. Fields like First Name, Last Name, Company, Website, and custom snippet variables remain untouched, allowing immediate re-upload directly into Smartlead without column realignment.',
  },
  {
    q: 'What is the recommended bounce rate threshold for Smartlead sequences?',
    a: 'You should maintain a bounce rate strictly below 2%, with under 1.5% being the safe operational target. Any rate above 3% triggers email provider flags on Google Workspace and Microsoft 365, leading to automated spam folder placement and potential mailbox disconnection.',
  },
  {
    q: 'How does high bounce rate affect Smartlead warmup scores?',
    a: 'Smartlead monitors real-world sending metrics alongside its warmup network. If your cold outreach campaigns generate high bounce rates, recipient mail servers begin flagging your domain. This counteracts your warmup progress, causing warmup emails to land in spam as well.',
  },
  {
    q: 'How often should outbound teams clean email lists for Smartlead?',
    a: 'B2B contact databases decay at roughly 30% per year due to turnover and domain expirations. Clean email list for Smartlead campaigns every time you import fresh data, and re-verify any lead list that has sat uncontacted for more than 30 days.',
  },
  {
    q: 'How should high-volume outbound teams configure sending limits per inbox?',
    a: 'To safeguard multi-inbox deliverability, keep sending limits to 25 to 40 cold emails per day per inbox in Smartlead. Combine conservative sending caps with thoroughly verified prospect lists to maximize reply rates and domain longevity.',
  },
]

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

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Protect multi-inbox rotation pools from simultaneous reputation burn. Complete Smartlead email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before Smartlead distributes emails across your sender cluster.
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Bounce Rate</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Safeguards multi-inbox rotation and protects sender pools from Google Workspace suspensions.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Native CSV Mapping</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all Smartlead custom lead attributes, company fields, and tags for immediate import.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">50+ Inboxes</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Pool Health Shielded</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents a single unverified lead export from burning your entire connected sender network.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MULTI-INBOX DILEMMA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Burn Multi-Inbox Sender Pools in Smartlead
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Smartlead is designed for scale, distributing outreach across dozens of connected mailboxes. But when an unverified CSV enters the engine, rotation becomes a liability: hard bounces are sprayed across your entire domain fleet rather than isolated to one mailbox.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  ROT
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cluster-Wide Reputation Damage</h3>
                  <div className="text-xs text-slate-500">Every connected sender takes a hit</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                If an unverified list contains 60 dead mailboxes, Smartlead rotation allocates those bad addresses across 30 different inboxes. Within hours, all 30 sending accounts receive bounce penalties from Microsoft and Google, dragging the entire pool into spam folders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  ESP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Warmup Metric Devaluation</h3>
                  <div className="text-xs text-slate-500">Neutralizes weeks of warmup investment</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Smartlead multi-inbox rotation relies on healthy domain reputation scores. Hard bounce spikes cause incoming mail servers to ignore warmup signals, resulting in sudden drops in cold email deliverability across all active campaigns.
              </p>
            </div>
          </div>

          {/* TECHNICAL CALCULATION BOX */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The Compound Risk of Multi-Inbox Bounce Distribution
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When sending 1,000 emails per day across 25 inboxes (40 emails/inbox), an uncleaned list with an 8% bounce rate generates roughly 80 hard bounces. Because Smartlead rotates accounts evenly, each inbox absorbs 3 to 4 hard bounces per day. This pushes every individual inbox past the 3% provider suspension threshold, risking mass disconnection. Clean email list for Smartlead campaigns prevents this cascade entirely.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Warmup in Smartlead
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Smartlead official walkthrough on how multi-inbox deliverability, IP reputation, and warmup algorithms interact inside the platform.
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
                  <div className="w-14 h-14 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: CATCH-ALL RESOLUTION FOR SMARTLEAD */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects Smartlead Sender Pools
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Accept-all email setups protect over 40% of corporate inboxes. Conventional validators classify these addresses as risky and advise teams to discard them, resulting in massive prospect loss.
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
                Giggal initiates direct network handshakes with target mail servers, resolving catch-all domains into deliverable or undeliverable with 98.5% accuracy. Validated catch-alls enter Smartlead safely, keeping bounce rates under 1.5% while expanding outreach volume.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON MATRIX */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for Smartlead Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy services when preparing high-volume lead lists for Smartlead.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Capability & Feature</th>
                  <th className="px-4 py-3">Giggal.ai</th>
                  <th className="px-4 py-3 text-slate-500">Legacy Verifiers</th>
                  <th className="px-4 py-3 text-slate-500">Built-in Scraper Checks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Catch-All Domain Resolution</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">98.5% Direct Inbox Handshake</td>
                  <td className="px-4 py-3 text-slate-500">Marked "Risky" / Discarded</td>
                  <td className="px-4 py-3 text-slate-500">Unverified / Raw Export</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Smartlead CSV Column Preservation</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Column Alignment</td>
                  <td className="px-4 py-3 text-slate-500">Drops Custom Headers</td>
                  <td className="px-4 py-3 text-slate-500">Exports Email Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Multi-Inbox Protection Margin</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Hard Bounce Rate</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Risk of Pool Burn)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (Frequent Domain Bans)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Verification Protocol</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">Deep Mailbox Handshake (No Email Sent)</td>
                  <td className="px-4 py-3 text-slate-500">Cached MX & Syntax Check</td>
                  <td className="px-4 py-3 text-slate-500">Regex Syntax Validation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Starter Free Credits</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">1,000 Free Credits</td>
                  <td className="px-4 py-3 text-slate-500">50 to 100 Credits</td>
                  <td className="px-4 py-3 text-slate-500">Paid Plan Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Smartlead CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal executes Smartlead email verification while retaining all contact fields, websites, and custom variables for 1-click import into Smartlead.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Email</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Last Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Website</th>
                  <th className="p-3">Custom 1</th>
                  <th className="p-3">Giggal Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
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
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Import Pipeline for Smartlead Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How high-performance growth agencies clean email lists for Smartlead to guarantee sub-1.5% bounce rates across multi-inbox pools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export lead lists from your data provider with recipient emails, names, company data, and custom merge tags intact.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 02</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Server Handshake Check</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal initiates network handshakes with target mail servers, verifying mailbox existence without dispatching an email message.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 03</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Resolve Catch-All Leads</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal resolves accept-all domains with 98.5% accuracy, recovering high-value enterprise contacts other verifiers skip.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Upload to Smartlead</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Import verified deliverables into Smartlead. Launch multi-inbox campaigns with full confidence that sender reputation remains protected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: MULTI-INBOX DELIVERABILITY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices: Protecting Cold Email Deliverability in Smartlead
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Recommended operational rules for agencies managing multi-inbox sender clusters at volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Cap Daily Inbound Limits</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep daily sending limits between 25 and 40 emails per inbox in Smartlead. High volume with unverified emails triggers rapid throttling from Microsoft and Google.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Separate Warmup from Cold</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Maintain steady warmup volume alongside cold campaigns in Smartlead. Never turn off warmup while actively sending cold campaigns.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Re-verify Older Prospect Lists</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sanitize any prospect list older than 30 days before queueing new outreach. B2B employment changes create unexpected bounces on older exports.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Smartlead Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding multi-inbox rotation, catch-all domain resolution, and bounce rate protection in Smartlead.
            </p>
          </div>

          <FaqAccordion items={smartleadFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Smartlead Senders with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for Smartlead campaigns in under three minutes with zero credit card required.
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
