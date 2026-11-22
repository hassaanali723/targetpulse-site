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
  Share2,
  Linkedin,
  MailCheck,
  Zap,
} from 'lucide-react'

const CANONICAL = '/verify-for/overloop'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Overloop Multichannel Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Multichannel Outbound Deliverability and Cadence Protection',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Overloop. Prevent multichannel cadences from stalling, protect LinkedIn and email automation limits, and maintain cold email deliverability with verified sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Overloop multichannel lead schemas and LinkedIn URLs',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Protection for connected Google Workspace and Microsoft 365 sending domains',
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
    q: 'Why do invalid email addresses disrupt multichannel cadences in Overloop?',
    a: 'Overloop blends email steps with automated LinkedIn actions such as profile views, connection requests, and inMail touches. When an unverified lead generates a hard bounce on step one, the cadence branch stalls. This leaves subsequent LinkedIn touches orphaned and wastes restricted monthly LinkedIn quotas on defunct accounts.',
  },
  {
    q: 'How does email bouncing waste monthly LinkedIn automation limits?',
    a: 'LinkedIn strictly limits accounts to approximately 100 connection requests per week. When dirty lists enter Overloop, your LinkedIn account wastes these scarce touches trying to connect with prospects who have departed their companies. Running Overloop email verification ensures every LinkedIn connection attempt targets active, verified professionals.',
  },
  {
    q: 'Does Giggal preserve LinkedIn profile URLs and Overloop custom tags?',
    a: 'Yes. Giggal checks the email column while maintaining all other prospect columns intact, including LinkedIn profile URLs, First Name, Last Name, Company, and custom attributes. You can re-upload your clean email list directly into Overloop with zero column realignment.',
  },
  {
    q: 'What bounce threshold should outbound teams maintain in Overloop?',
    a: 'Outbound sales teams should maintain an overall bounce rate strictly below 2%, with under 1.5% being the target threshold. Maintaining sub-1.5% bounces preserves domain reputation across connected Google Workspace and Microsoft accounts, ensuring maximum cold email deliverability.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Overloop multichannel campaigns?',
    a: 'Conventional verifiers mark catch-all domains as unverifiable or risky, forcing teams to discard up to 40% of their B2B leads. Giggal performs deep mail server protocol checks to confirm whether the individual inbox exists, delivering 98.5% accuracy so you can safely route verified catch-all prospects into Overloop multichannel cadences.',
  },
  {
    q: 'Can Overloop automatically recover an orphaned LinkedIn step if an email bounces?',
    a: 'No. When an email bounces, Overloop marks the prospect as bounced and stops automated execution for that contact. Any follow-up LinkedIn step in that sequence is skipped or aborted, leaving the cadence broken. Pre-import verification prevents this failure before your campaign launches.',
  },
  {
    q: 'Can I integrate Giggal email verification directly with Overloop via API?',
    a: 'Yes. Giggal provides a high-throughput REST API that allows you to clean contact lists automatically before syncing records into Overloop via Zapier, Make, or custom webhooks.',
  },
  {
    q: 'How many free verification credits does Giggal provide for Overloop users?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can test your actual Overloop prospect export, verify catch-all leads with 98.5% accuracy, and launch your multichannel sequences safely.',
  },
]

export const metadata = {
  title: {
    absolute: 'Overloop Email Verification | Protect Multichannel Cadences | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Overloop. Prevent multichannel cadences from stalling, protect LinkedIn automation limits, and maintain cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Overloop Email Verification | Protect Multichannel Cadences | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Overloop. Prevent multichannel cadences from stalling, protect LinkedIn automation limits, and maintain cold email deliverability.',
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6">
            <Share2 className="w-3.5 h-3.5" />
            <span>Pre-Import Verification for Overloop Multichannel Cadences</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Overloop Email Verification to Safeguard Multichannel Cadences
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Safeguard your multichannel cadences and stop wasting restricted LinkedIn automation quotas. Clean invalid inboxes, spam traps, and dead mailboxes before Overloop launches your outreach.
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
                Guarantees a clean email list that prevents delivery failures from halting linked LinkedIn tasks.
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
              <div className="text-2xl font-black text-slate-900">98.5% Accuracy</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Catch-All Resolution</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Unlocks enterprise catch-all leads without triggering 550 User Unknown mailbox rejections.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MULTICHANNEL CADENCE MECHANISM & MATH */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Stall Overloop Multichannel Cadences
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Overloop links cold email outreach with automated LinkedIn touches. When an email bounces, conditional branching breaks down. This wastes monthly LinkedIn automation limits and damages cold email deliverability across your connected mailboxes.
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
                When a prospect email bounces, Overloop conditional logic halts subsequent steps. Linked LinkedIn touches become orphaned, burning through restricted weekly connection quotas on defunct contacts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  REP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Sender Domain Deterioration</h3>
                  <div className="text-xs text-slate-500">Mailbox provider spam filters engage</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Overloop sends emails through connected Google or Microsoft accounts. A spike in 550 bounces damages domain reputation, landing even clean outreach directly in recipient spam tabs.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Multichannel Automation Quota Waste Formula</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The LinkedIn Automation Credit Waste Index
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When unverified contact lists contain defunct email addresses, the correlated LinkedIn steps waste finite automation capacity:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Wasted_LinkedIn_Quota = Invalid_Emails * (Profile_Views + Connection_Requests)
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              LinkedIn imposes a weekly cap of roughly 100 connection requests per user profile. If an outbound rep imports an unverified list of 500 leads with a 10% bounce rate (50 invalid contacts), Overloop automated cadences will waste up to 50 valuable connection credits on contacts who have departed their companies. That represents 50% of the sales rep entire weekly LinkedIn capacity burned on dead records. Pre-import Overloop email verification preserves your automation quotas for active buyers.
            </p>
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

        {/* SECTION 4: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Unlocking Catch-All Leads for Overloop with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 50% of B2B corporate domains configure catch-all email routing. Legacy verification software labels these domains as unverified or risky. In Overloop, discarding these leads means abandoning qualified accounts where LinkedIn profiles are verified and waiting for outreach.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <XCircle className="w-4 h-4" />
                <span>The Legacy Verifier Dilemma</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Discarding Viable LinkedIn Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional tools cannot confirm individual mailbox validity behind catch-all servers. They designate the entire domain as risky, forcing sales teams to throw out 40% of their prospective TAM or accept dangerous bounce rates that damage sender health.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/30">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Giggal Protocol</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                98.5% Accuracy on Valid Mailboxes
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Giggal conducts deep protocol checks to verify specific user accounts without sending test emails. We resolve catch-all domains with 98.5% verified precision, delivering a clean email list that fuels your Overloop multichannel cadences without unexpected delivery failures.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: 3-WAY COMPARISON MATRIX TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing List Verification Methods for Overloop
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw scraper exports, legacy verification services, and Giggal pre-import validation for Overloop multichannel campaigns.
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
                    <td className="p-4 font-medium text-slate-900">Multichannel Cadence Continuity</td>
                    <td className="p-4 text-rose-600">Sequences stall on bounces</td>
                    <td className="p-4 text-amber-600">Partial preservation</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Unbroken Multichannel Flow</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">LinkedIn Automation Quota Protection</td>
                    <td className="p-4 text-rose-600">Heavy quota waste</td>
                    <td className="p-4 text-amber-600">Moderate quota protection</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">100% Validated Quota Usage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Overloop CSV & LinkedIn URL Preservation</td>
                    <td className="p-4 text-slate-600">Raw formats only</td>
                    <td className="p-4 text-amber-600">Column loss common</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">100% Intact Schema Mapping</td>
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
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and upload back to Overloop with zero column realignment.</span>
              <span className="font-semibold text-indigo-600">LinkedIn URLs 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Pre-Import Pipeline for Overloop Senders
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every prospect record uploaded to Giggal passes through four verification filters before entering your Overloop multichannel campaigns.
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
                Connects directly with the target mail server without transmitting messages, detecting deleted and inactive mailboxes.
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
                Downloads a clean email list with preserved LinkedIn profile URLs ready for immediate upload to Overloop.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: AGENCY & MULTICHANNEL BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices for Overloop Multichannel Cadences
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Leading outbound teams follow these standards to maximize cold email deliverability and conserve LinkedIn automation quotas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Keep Email Bounces Under 1.5%
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Email service providers begin throttling sender domains when bounce rates exceed 2%. Keeping hard bounces strictly under 1.5% ensures that Overloop initial email touchpoints reach the primary inbox rather than spam folders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Preserve LinkedIn Quotas for Active Accounts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                LinkedIn monitors account connection rates closely. Verifying prospect emails before import guarantees that every LinkedIn profile visit and connection request is directed toward verified, currently employed professionals.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Unlock Verified Catch-All Leads
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than discarding catch-all domains, verify them with Giggal 98.5% precision. This expands your reachable multichannel TAM and unlocks valuable enterprise leads without increasing bounce exposure.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Re-Clean Aged Prospect Lists Every 60 Days
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                B2B contact databases experience continuous natural churn. Re-verifying prospect lists through Giggal before re-enrolling contacts in Overloop sequences eliminates sudden delivery failures and protects your multichannel cadences.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
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

        {/* SECTION 10: FINAL CTA */}
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
