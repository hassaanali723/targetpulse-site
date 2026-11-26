import Link from 'next/link'
import SendingInboxesNote from '@/components/verify-for/SendingInboxesNote'
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
  Database,
  Users,
  MailCheck,
  Zap,
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
  applicationSubCategory: 'CRM Data Hygiene and Sales Rep Sequence Deliverability',
  operatingSystem: 'Web',
  description:
    'Verify lead lists before importing into Close CRM. Prevent Smart View lead database pollution, protect sales rep sender reputation, and maintain cold email deliverability with verified sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Close lead, contact, and custom field import formats',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Protection for connected Google Workspace and Microsoft 365 sales rep accounts',
    '1,000 free verification credits without credit card registration',
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
    q: 'Why is pre-import Close CRM email verification needed for sales teams?',
    a: 'Close CRM centralizes sales workflows where reps send sequences directly through their primary connected Google Workspace or Microsoft 365 accounts. When unverified contacts enter your CRM, hard bounces damage the personal sales rep sender reputation, landing ordinary client emails, deal updates, and contract follow-ups straight into spam folders.',
  },
  {
    q: 'How do bounces in Close CRM contaminate Close Smart Views?',
    a: 'Close Smart Views organize high-priority lead pipelines based on activity filters. When unverified CSV lists introduce hundreds of defunct email addresses, sales reps waste valuable calling and emailing time working through dead records. Pre-import verification preserves CRM hygiene so reps focus solely on active decision-makers.',
  },
  {
    q: 'Does Giggal preserve Close custom fields and contact attributes?',
    a: 'Yes. Giggal checks the email column while maintaining all other CSV attributes, including Contact Name, Company Name, Job Title, Lead Status, and custom opportunity fields. You can upload the verified clean email list directly into Close CRM without re-mapping columns or losing metadata.',
  },
  {
    q: 'What bounce threshold should sales teams maintain in Close CRM?',
    a: 'Sales teams should maintain their hard bounce rate strictly below 2%, with under 1.5% being the target threshold. Because Close sequences send through personal sales rep accounts, exceeding 2% bounces can prompt Google or Microsoft to throttle daily sending allowances or revoke OAuth connections.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Close CRM leads?',
    a: 'Instead of forcing reps to discard viable enterprise accounts flagged as risky catch-alls by legacy tools, Giggal validates whether the specific recipient mailbox exists with 98.5% accuracy. Confirmed deliverable leads can be imported into Close sequences with total confidence.',
  },
  {
    q: 'What is the risk of sending cold sequences from primary company domains in Close?',
    a: 'Sending unverified cold lists from primary company domains risks corporate domain blacklisting on Spamhaus or Barracuda. If your corporate domain reputation falls, internal company communication and legitimate customer support messages may be rejected by receiving mail servers.',
  },
  {
    q: 'Can I automate Close CRM email verification using the Giggal API?',
    a: 'Yes. Giggal provides a high-throughput REST API that allows your RevOps team to clean prospect lists automatically before records sync into Close via Zapier, Make, or native webhook automations.',
  },
  {
    q: 'How many free verification credits does Giggal offer for Close users?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can test your actual Close lead export, resolve catch-all contacts with 98.5% accuracy, and verify the deliverability of your sales pipeline.',
  },
]

export const metadata = {
  title: {
    absolute: 'Close CRM Email Verification | Protect Smart Views & Reps | Giggal.ai',
  },
  description:
    'Verify prospect email lists before importing into Close CRM. Prevent lead database pollution, protect sales rep sender reputation, and maintain cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Close CRM Email Verification | Protect Smart Views & Reps | Giggal.ai',
    description:
      'Verify prospect email lists before importing into Close CRM. Prevent lead database pollution, protect sales rep sender reputation, and maintain cold email deliverability.',
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6">
            <Database className="w-3.5 h-3.5" />
            <span>Pre-Import Lead Verification for Close CRM Workflows</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Close CRM Email Verification to Protect Smart Views and Sales Rep Reputation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stop lead database pollution and protect sales rep sender reputation across connected Google Workspace and Microsoft accounts. Clean invalid contacts and dead mailboxes before launching sequences in Close CRM.
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
                Guarantees a clean email list that prevents dead contact records from cluttering Close Smart Views.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5% Bounces</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Sales Rep Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Maintains clean inbox delivery across every connected Google or Microsoft sales account.
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
          <SendingInboxesNote tool="Close" slug="close" />
        </section>

        {/* SECTION 2: THE CRM CONTAMINATION MECHANISM & MATH */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Degrade Sales Rep Sender Reputation in Close CRM
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike standalone cold email dispatchers that run on disposable secondary domains, Close CRM connects directly to your sales reps daily working inboxes. When dirty contact lists trigger hard bounces inside automated sequences, the reputation fallout lands directly on your core business domain and individual sales rep mailboxes.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  VIEW
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Close Smart Views Contamination</h3>
                  <div className="text-xs text-slate-500">Sales development reps waste manual hours</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When dirty prospect lists enter Close, dead records flood Close Smart Views. Reps spend hours reviewing leads, placing phone calls to obsolete numbers, and writing personalized follow-ups to contacts that departed their companies years ago.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  REP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Sales Rep Sender Reputation Collapse</h3>
                  <div className="text-xs text-slate-500">Connected primary inboxes land in spam</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Close dispatches sequences through sales reps actual Google Workspace or Microsoft accounts. High bounce rates lower the reputation score of their primary email address, damaging cold email deliverability and risking high-priority customer communications.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>CRM Operational Loss & Deliverability Math</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Sales Rep Daily Bounce Rate Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              In Close CRM, sequence dispatches are tied to individual sales rep sending quotas. The mailbox bounce rate is calculated based on personal daily dispatch volume:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Bounce_Rate_Rep = (Bounces_Hard / Daily_Sequence_Dispatches) * 100
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an account executive dispatches 60 cold sequence emails daily through Close and encounters 5 hard bounces from an unverified lead list, the rep daily bounce rate reaches 8.33%. This exceeds Google Workspace safe 2% threshold by more than four times, prompting automated spam filtering of normal 1-on-1 sales proposals. Running pre-import Close CRM email verification protects your sales rep sender reputation and preserves corporate domain authority.
            </p>
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

        {/* SECTION 4: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Resolving Enterprise Catch-All Contacts for Close CRM with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              High-value corporate prospects at enterprise tech firms, financial institutions, and Fortune 500 accounts commonly operate behind catch-all mail servers. Traditional verification services designate these domains as unverifiable or risky, forcing sales teams into a poor tradeoff: miss valuable target accounts or risk sender reputation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <XCircle className="w-4 h-4" />
                <span>The Legacy Tool Approach</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Discarding High-Value Accounts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional verifiers cannot confirm mailbox status behind catch-all configurations. They mark the entire domain risky, prompting revenue leaders to discard up to 40% of their prospective TAM or accept dangerous bounce rates that harm sales rep sender reputation.
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
                Giggal conducts deep protocol checks to verify specific user mailboxes without dispatching test emails. We resolve catch-all domains with 98.5% verified precision, delivering a clean email list that fuels your Close CRM pipeline with maximum revenue coverage.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: 3-WAY COMPARISON MATRIX TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Lead List Verification Methods for Close CRM
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw scraper exports, legacy verification services, and Giggal pre-import validation for Close CRM sales teams.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Capability / Feature</th>
                    <th className="p-4 text-rose-600">Raw Lead Scraping</th>
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
                    <td className="p-4 font-medium text-slate-900">Close Smart Views Integrity</td>
                    <td className="p-4 text-rose-600">Flooded with dead leads</td>
                    <td className="p-4 text-amber-600">Partial filtering</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">100% Clean Pipeline Records</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Sales Rep Sender Reputation Protection</td>
                    <td className="p-4 text-rose-600">Rep mailboxes penalized</td>
                    <td className="p-4 text-amber-600">Moderate protection</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Guaranteed Sub-1.5% Bounces</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Close CRM Custom Fields Preservation</td>
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
              Native Close CRM CSV Header Compatibility
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes lists without disrupting your CRM schema. Lead names, company details, phone numbers, and custom fields remain completely intact.
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
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly into Close CRM with zero schema adjustments.</span>
              <span className="font-semibold text-indigo-600">Close Smart Views Ready</span>
            </div>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Pre-Import Pipeline for Close CRM
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every prospect record uploaded to Giggal passes through four verification filters before entering your Close CRM lead database.
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
                Downloads a verified clean email list ready for immediate import into Close CRM without metadata loss.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: SALES OPS & SDR BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Sales Ops Best Practices for Close CRM Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Revenue operations teams follow these guidelines to protect sales rep sender reputation and maintain high cold email deliverability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Maintain Sub-1.5% Bounces on Connected Accounts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Because Close sequences dispatch from your reps actual Google Workspace or Microsoft accounts, keep bounce rates strictly under 1.5%. This protects cold email deliverability and ensures client emails land in the primary inbox.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Protect Close Smart Views from Decay
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Configure your Close Smart Views with filters for verified leads only. Excluding unverified records prevents sales reps from wasting productive selling hours dialing disconnected numbers or emailing abandoned accounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Preserve Enterprise Catch-All Accounts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Do not automatically delete catch-all contacts. Use Giggal to resolve catch-all domains with 98.5% accuracy so your team can prospect high-value enterprise accounts safely.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Re-Clean CRM Contacts Every 90 Days
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                B2B contact databases decay at roughly 30% per year. Re-running your aged Close CRM contact lists through Giggal before starting new sequences eliminates sudden 550 delivery failures.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
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

        {/* SECTION 10: FINAL CTA */}
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
