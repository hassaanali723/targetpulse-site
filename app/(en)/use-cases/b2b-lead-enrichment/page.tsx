import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight, ArrowUpRight, Check,
  Play, ExternalLink, ShieldCheck,
  CheckCircle2, AlertTriangle, XCircle,
  Database, Search, Building2,
  Zap, Layers, Users, Filter,
} from 'lucide-react'

const CANONICAL = '/use-cases/b2b-lead-enrichment'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai B2B Lead Enrichment & Prospect Email Verification',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'B2B Lead Enrichment and Sales Prospecting Verification',
  operatingSystem: 'Web',
  description:
    'Validate scraped B2B lead lists from Apollo, ZoomInfo, Clay, and Sales Navigator. Filter outdated mailboxes, dead domains, and catch-all traps with waterfall verification.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV and XLSX list verification for Apollo and Clay exports',
    'Deep mailbox handshake without sending actual email',
    'Advanced catch-all domain scoring and risk classification',
    'Domain and MX record DNS health verification',
    'Rest API and webhook integrations for outbound workflows',
    '1,000 free verification credits with zero credit card required',
  ],
}

const decayReasons = [
  {
    title: 'Role Transitions & Ghost Inboxes',
    desc: 'Professionals change jobs every 18 to 24 months. Static B2B databases frequently retain legacy corporate mailboxes months after departure, causing immediate hard bounces.',
    badge: '28% Annual Turnover',
    icon: Users,
  },
  {
    title: 'Pattern-Guessed Addresses',
    desc: 'Scraping platforms often generate emails using standard syntax formulas without confirming mailbox existence. Up to a third of guessed emails fail on live mail servers.',
    badge: 'Unverified Guesses',
    icon: Search,
  },
  {
    title: 'Catch-All Gateways & Traps',
    desc: 'Corporate mail servers often accept incoming connections during surface checks but quietly discard unassigned messages. Advanced scoring detects genuine mailboxes from risky traps.',
    badge: 'Gateway Traps',
    icon: Filter,
  },
]

const pipelineSteps = [
  {
    num: '01',
    title: 'Ingest & Syntax Sanitization',
    desc: 'Upload CSV or sync via webhook. The engine removes non-standard characters, validates RFC formatting, and checks domain structure.',
  },
  {
    num: '02',
    title: 'Domain & MX Record Inspection',
    desc: 'Queries DNS zones to confirm active mail exchange records, identifying Google Workspace, Microsoft 365, or custom mail infrastructure.',
  },
  {
    num: '03',
    title: 'Mailbox Handshake Verification',
    desc: 'Initiates a direct server handshake to confirm recipient mailbox presence without dispatching an actual email message.',
  },
  {
    num: '04',
    title: 'Catch-All Scoring & Delivery Tagging',
    desc: 'Applies heuristic behavioral scoring to classify records into Deliverable, Risky Catch-All, and Undeliverable for safe sequencing.',
  },
]

const mockProspectData = [
  {
    name: 'Marcus Vance',
    company: 'Acme Corp',
    email: 'm.vance@acmecorp.com',
    status: 'Deliverable',
    statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: CheckCircle2,
    action: 'Ready for outbound sequence',
  },
  {
    name: 'Elena Rostova',
    company: 'Apex Logistics',
    email: 'elena.r@apexlogistics.io',
    status: 'Catch-All (Risky)',
    statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: AlertTriangle,
    action: 'Flag for manual review',
  },
  {
    name: 'David Kim',
    company: 'Novus Software',
    email: 'dkim@novussoftware.com',
    status: 'Dead Mailbox',
    statusClass: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: XCircle,
    action: 'Auto-suppressed (Bounce saved)',
  },
  {
    name: 'Sarah Lin',
    company: 'Vanguard Health',
    email: 'slin@vanguardhealth.org',
    status: 'Deliverable',
    statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: CheckCircle2,
    action: 'Ready for outbound sequence',
  },
]

const supportedPlatforms = [
  { name: 'Apollo.io', type: 'Lead Database' },
  { name: 'ZoomInfo', type: 'Intelligence' },
  { name: 'Clay.com', type: 'Waterfall Enrichment' },
  { name: 'Sales Navigator', type: 'Social Prospecting' },
  { name: 'UpLead', type: 'Contact Finder' },
  { name: 'Cognism', type: 'B2B Data' },
  { name: 'Lusha', type: 'Prospecting Tool' },
  { name: 'Kaspr', type: 'Lead Extension' },
]

const apolloVideo = {
  channel: 'Findymail',
  videoId: 'wUzg2Mga_GE',
  title: 'How to Validate Apollo.io & Scraped Lead Lists Before Outreach',
  url: 'https://www.youtube.com/watch?v=wUzg2Mga_GE',
  desc: 'Step-by-step tutorial explaining how to pull lead lists from Apollo.io and validate contact records to protect sender reputation before starting cold outreach.',
}

const waterfallVideo = {
  channel: 'Wiza',
  videoId: 'hY9vKVqptN0',
  title: 'Waterfall Enrichment: How Top GTM Teams Get Better Data',
  url: 'https://www.youtube.com/watch?v=hY9vKVqptN0',
  desc: 'Overview of how modern Go-To-Market teams sequence multiple data providers and validation filters to maximize match rates and protect email deliverability.',
}

const b2bFaqs: FaqItem[] = [
  {
    q: 'Can we upload CSV exports directly from Apollo.io or Clay?',
    a: 'Yes. Giggal accepts standard CSV and XLSX files exported from Apollo.io, Clay, ZoomInfo, and LinkedIn Sales Navigator. The engine automatically maps common column headers like Email, First Name, and Company Name.',
  },
  {
    q: 'How does Giggal handle catch-all corporate email domains?',
    a: 'When an email server accepts mail for any address at the gateway, Giggal runs secondary heuristics including MX configuration checks, domain reputation history, and behavioral scoring to classify the record as valid or risky.',
  },
  {
    q: 'Does the mailbox handshake notify the prospect or alert their IT team?',
    a: 'No. The verification process connects to the target mail server and terminates the network handshake before data transmission begins. The recipient receives no message, notification, or alert.',
  },
  {
    q: 'What bounce rate should our SDR team expect after cleaning a prospect list?',
    a: 'When sending only to addresses classified as Deliverable, teams typically maintain bounce rates below 1.5%, well within Google and Yahoo sender guidelines.',
  },
  {
    q: 'Can we connect Giggal verification directly into automated outbound workflows?',
    a: 'Yes. You can use our REST API or webhooks to verify leads automatically as they are enriched or added to your sales engagement platform.',
  },
]

export const metadata = {
  title: 'B2B Lead Enrichment & Prospecting Email Verification | Giggal.ai',
  description:
    'Validate scraped B2B lead lists from Apollo, ZoomInfo, Clay, and Sales Navigator. Filter outdated mailboxes, dead domains, and catch-all traps with waterfall verification.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'B2B Lead Enrichment & Prospecting Email Verification | Giggal.ai',
    description:
      'Validate scraped B2B lead lists from Apollo, ZoomInfo, Clay, and Sales Navigator. Filter outdated mailboxes, dead domains, and catch-all traps with waterfall verification.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function B2bLeadEnrichmentPage() {
  const breadcrumbData = breadcrumbLd('B2B Lead Enrichment', CANONICAL)
  const faqData = faqPageLd(b2bFaqs)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <Navbar tone="light" />

      <main className="pt-24 sm:pt-28 pb-20 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-6 sm:pt-10 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Verify Scraped B2B Prospect Lists Before Sending Outbound Campaigns
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Data exports from Apollo, ZoomInfo, Clay, and Sales Navigator decay rapidly. Filter out job-switchers, dead mailboxes, and catch-all traps with real-time waterfall email verification.
            </p>

            {/* CTAs */}
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
                <span>Enrichment API Docs</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* 3 Core Factual Metrics */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="text-2xl font-black text-slate-900">28%</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Annual executive contact turnover in US business databases
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="text-2xl font-black text-indigo-600">&lt; 1.5%</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Target bounce rate maintained after waterfall verification
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="text-2xl font-black text-slate-900">3-Stage</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Syntax check, MX DNS audit, and live mailbox handshake
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY SCRAPED B2B LISTS DECAY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Raw Scraped Lead Databases Decay Rapidly
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Relying directly on exported CSV data from prospecting platforms exposes outbound domains to severe deliverability risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decayReasons.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                    <item.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRACTICAL TUTORIAL: APOLLO LIST VALIDATION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <a
                  href={apolloVideo.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Watch ${apolloVideo.title} on YouTube`}
                  className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 block group shadow-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${apolloVideo.videoId}/hqdefault.jpg`}
                    alt={apolloVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 text-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </a>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Hands-on Tutorial · {apolloVideo.channel}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {apolloVideo.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {apolloVideo.desc}
                </p>
                <div className="pt-2">
                  <a
                    href={apolloVideo.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <span>Watch full tutorial on YouTube</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: 4-STAGE WATERFALL VERIFICATION PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              The 4-Stage Waterfall Verification Pipeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Each lead record passes through consecutive validation layers to verify deliverability before reaching your SDR mailboxes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col"
              >
                <div className="text-xs font-mono font-bold text-indigo-600 mb-2">
                  STAGE {step.num}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE MOCK LEAD TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Live Lead Verification Preview
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Review how Giggal categorizes raw prospect exports into conclusive outbound actions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-700 font-semibold">
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Company</th>
                    <th className="py-3 px-4">Scraped Address</th>
                    <th className="py-3 px-4">Result</th>
                    <th className="py-3 px-4">Outbound Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockProspectData.map((row) => (
                    <tr key={row.email} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{row.name}</td>
                      <td className="py-3.5 px-4 text-slate-600">{row.company}</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700">{row.email}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${row.statusClass}`}
                        >
                          <row.icon className="w-3.5 h-3.5" />
                          <span>{row.status}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Sample verification preview from Apollo export</span>
              <span className="font-medium text-slate-700">100% conclusive status breakdown</span>
            </div>
          </div>
        </section>

        {/* STRATEGIC GUIDE: WATERFALL ENRICHMENT ARCHITECTURE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Architecture Guide · {waterfallVideo.channel}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {waterfallVideo.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {waterfallVideo.desc}
                </p>
                <div className="pt-2">
                  <a
                    href={waterfallVideo.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    <span>Watch video on YouTube</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <a
                  href={waterfallVideo.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Watch ${waterfallVideo.title} on YouTube`}
                  className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 block group shadow-md"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${waterfallVideo.videoId}/hqdefault.jpg`}
                    alt={waterfallVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 text-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SUPPORTED B2B DATA PROVIDERS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Supported B2B Lead Platforms
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Verify exports directly from any major prospect database or sales intelligence provider.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {supportedPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-center hover:bg-slate-50 transition-colors"
              >
                <div className="font-bold text-sm text-slate-900">{platform.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{platform.type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: CENTERED BRANDED FAQ ACCORDION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-14 border-t border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Everything you need to know about B2B list verification, catch-all handling, and API integration.
            </p>
          </div>

          <FaqAccordion items={b2bFaqs} />
        </section>

        {/* SECTION 8: MINIMALIST BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Clean your next prospect list before launching your outbound campaign.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Protect your domain reputation and ensure your SDRs only contact active mailboxes. Start with 1,000 free verification credits.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Start with 1,000 Free Credits</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
                >
                  <span>View Pricing Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
