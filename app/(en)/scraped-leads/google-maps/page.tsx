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
  FileSpreadsheet,
  Server,
  Layers,
  MapPin,
  Building2,
  PhoneCall,
  MailCheck,
  Zap,
} from 'lucide-react'

const CANONICAL = '/scraped-leads/google-maps'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Google Maps Email Verification and Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Local Business Lead Cleaning and Scraped Data Verification',
  operatingSystem: 'Web',
  description:
    'Verify and clean prospect lists scraped from Google Maps. Filter closed local businesses, defunct domains, and spam traps. Resolve catch-all domains with verified 98.5% accuracy to maintain cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with Google Maps scrapers preserving phone numbers, reviews, and categories',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Detection of closed local businesses and expired domain MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const googleMapsFaqs: FaqItem[] = [
  {
    q: 'Why do scraped Google Maps email lists have high bounce rates?',
    a: 'Google Maps business listings often persist for months after a local business closes or changes ownership. Scrapers extract whatever email address appears on the linked website, which frequently points to abandoned accounts, defunct webmaster addresses, or expired domain names. Sending to raw Google Maps scraped leads typically generates bounce rates between 25% and 40%, triggering immediate provider suspensions.',
  },
  {
    q: 'How does Giggal handle generic local business emails like info@ and contact@?',
    a: 'Small local businesses often rely on generic inboxes like info@, office@, or contact@ as their primary customer communication channel. Giggal conducts deep mail server handshakes to confirm whether the specific mailbox exists and actively accepts incoming mail, separating operational business inboxes from dead addresses.',
  },
  {
    q: 'Does Giggal resolve catch-all domains for local business websites?',
    a: 'Yes. Many local businesses use Google Workspace or Microsoft 365 configured with catch-all routing. Conventional verifiers label these as risky or unverifiable, forcing you to discard up to 40% of your prospective market. Giggal performs deep protocol checks to verify whether the specific inbox exists with 98.5% accuracy.',
  },
  {
    q: 'Will verifying our scraped list delete phone numbers, ratings, or addresses?',
    a: 'No. Giggal preserves your complete CSV data schema. Non-email columns such as Business Name, Category, Street Address, Phone Number, Google Rating, and Review Count remain completely intact. You can download the verified clean email list and import it directly into your cold outreach software or CRM.',
  },
  {
    q: 'What bounce rate should local marketing agencies target on cold outreach campaigns?',
    a: 'Agencies prospecting local business owners should keep their hard bounce rate strictly below 2%, with under 1.5% being the safe operational benchmark. Maintaining sub-1.5% bounces protects your sender domain health and ensures that outbound proposals reach the primary inbox.',
  },
  {
    q: 'Can sending unverified Google Maps leads get our Google Workspace account banned?',
    a: 'Yes. Google Workspace monitors sending accounts closely. If your outbound campaigns exceed a 2% hard bounce threshold, Google automated filters flag the account for suspicious activity, throttle daily dispatch allowances, or suspend your account entirely.',
  },
  {
    q: 'Can we automate Google Maps email verification using the Giggal API?',
    a: 'Yes. Giggal provides a high-throughput REST API that connects with your scraping workflows, Google Sheets scripts, or webhook automations. You can clean contact data automatically as your web scrapers extract records from Google Maps.',
  },
  {
    q: 'How many free verification credits does Giggal provide for Google Maps leads?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can upload an actual Google Maps scraper export, verify catch-all addresses with 98.5% accuracy, and review the clean email list before launching cold outreach.',
  },
]

export const metadata = {
  title: {
    absolute: 'Google Maps Email Verification | Clean Scraped Local Leads | Giggal.ai',
  },
  description:
    'Verify and clean email lists scraped from Google Maps. Filter closed local businesses, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Google Maps Email Verification | Clean Scraped Local Leads | Giggal.ai',
    description:
      'Verify and clean email lists scraped from Google Maps. Filter closed local businesses, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function GoogleMapsLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Google Maps Email Verification', CANONICAL)
  const faqData = faqPageLd(googleMapsFaqs)

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
            <MapPin className="w-3.5 h-3.5" />
            <span>Pre-Outreach Verification for Google Maps Scraped Leads</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Google Maps Email Verification to Protect Outbound Sender Reputation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scraped local business databases suffer from high churn, closed stores, and expired domain names. Purge invalid mailboxes and resolve catch-all domains with 98.5% accuracy before launching your local outreach campaigns.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Google Maps Leads Free</span>
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
              <div className="text-2xl font-black text-indigo-600">&lt; 1.5% Bounces</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Safe Outbound Target</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Guarantees a clean email list that protects sender domains from automated provider bans.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">98.5% Accuracy</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Catch-All Resolution</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Validates unverified local business catch-all inboxes to unlock 40% more viable contacts.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">100% Schema Intact</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Local Business Data</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves phone numbers, Google ratings, reviews, and street addresses without column drift.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FAILURE MECHANISM OF SCRAPED LEADS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Raw Google Maps Scraped Leads Burn Sending Domains
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Google Maps contains millions of local business listings, but scraping this data introduces severe deliverability threats. Small businesses close at high rates, rebrand frequently, or abandon website domains while their Google Maps pins remain active.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  EXP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Abandoned Business Domains</h3>
                  <div className="text-xs text-slate-500">Pins stay live after businesses close</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a local restaurant, dental office, or contractor shuts down, their Google Business Profile often remains online for months. Scrapers collect the expired domain, leading to immediate 550 User Unknown rejections that damage cold email deliverability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  ROLE
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Generic Role Account Clutter</h3>
                  <div className="text-xs text-slate-500">Unmonitored inboxes trigger delivery stalls</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Web scrapers grab generic addresses from website footers. Many of these addresses are no longer monitored, full to capacity, or converted into spam traps that flag your sending IP address on major security blocklists.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Local Business Scrape Decay & Bounce Distribution Math</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Raw Scraper Bounce Rate Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When prospecting local business leads extracted from Google Maps, total bounce exposure compounds across multiple failure points:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Bounce_Rate = ((N_closed + N_abandoned + N_invalid_mx) / N_total_scraped) * 100
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an agency scrapes 1,000 local business leads from Google Maps, industry metrics confirm that approximately 160 belong to closed businesses, 90 have abandoned inboxes, and 80 possess invalid or disconnected MX servers. Sending to this uncleaned list results in a 33% hard bounce rate. Email service providers enforce an account suspension threshold of 2%, meaning an unverified Google Maps export exceeds the allowable error rate by more than sixteen times. Performing pre-import Google Maps email verification filters these defunct addresses, securing a clean email list that preserves sender reputation.
            </p>
          </div>
        </section>

        {/* SECTION 3: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Resolving Catch-All Inboxes for Local Business Leads with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Local contractors, medical practices, law firms, and retail companies commonly operate behind catch-all mail configurations. When conventional verification software scans these domains, it labels them unverified or risky. Outbound agencies face a difficult choice: delete half their prospective pipeline or risk deliverability failure.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <XCircle className="w-4 h-4" />
                <span>The Legacy Tool Approach</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Discarding 40% of Prime Local Accounts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional verifiers cannot confirm specific inbox validity on catch-all domains. They mark the entire domain as risky, forcing sales teams to throw out 40% of their scraped local business leads or accept damaging bounce rates that hurt cold email deliverability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/30">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Giggal Protocol</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                98.5% Accuracy on Valid Local Inboxes
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Giggal conducts deep mail server handshakes to confirm specific mailbox status without sending test emails. We resolve catch-all local domains with 98.5% verified precision, delivering a clean email list that powers your local agency client acquisition.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: 3-WAY COMPARISON MATRIX TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verification Methods for Google Maps Scraped Leads
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw scraper exports, legacy bulk verification services, and Giggal pre-outreach cleaning for local business prospecting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Verification Capability</th>
                    <th className="p-4 text-rose-600">Raw Scraped Leads</th>
                    <th className="p-4 text-amber-600">Legacy Verifiers</th>
                    <th className="p-4 text-indigo-600 font-bold bg-indigo-50/50">Giggal Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Catch-All Domain Resolution</td>
                    <td className="p-4 text-rose-600">None (28-40% bounce rate)</td>
                    <td className="p-4 text-amber-600">Tagged "Risky" / discarded</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">98.5% Verified Precision</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Closed Local Business Detection</td>
                    <td className="p-4 text-rose-600">Included as valid pins</td>
                    <td className="p-4 text-amber-600">Partial MX checks only</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Deep Domain & MX Verification</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Google Business Profile Schema Preservation</td>
                    <td className="p-4 text-slate-600">Raw columns intact</td>
                    <td className="p-4 text-amber-600">Columns dropped or shifted</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">100% Intact CSV Alignment</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Cold Email Deliverability Safety</td>
                    <td className="p-4 text-rose-600">Triggers account suspension</td>
                    <td className="p-4 text-amber-600">Moderate protection</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Guaranteed Sub-1.5% Bounces</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Test Message Transmission</td>
                    <td className="p-4 text-slate-600">None</td>
                    <td className="p-4 text-rose-600">Some send ping emails</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Zero Message Dispatch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: EXACT CSV HEADER COMPATIBILITY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Google Maps Scraper CSV Schema Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes Google Maps scraped leads without disrupting your data schema. Business names, telephone numbers, star ratings, review totals, and street addresses remain completely intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Google Maps Scraper Export Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Business Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">City</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Contact Email</th>
                    <th className="p-3">Rating</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Apex Dental Care</td>
                    <td className="p-3">Dentist</td>
                    <td className="p-3">Austin, TX</td>
                    <td className="p-3">+1 (512) 555-0192</td>
                    <td className="p-3">contact@apexdentalcare.com</td>
                    <td className="p-3">4.9 (124 reviews)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Blue River Plumbing</td>
                    <td className="p-3">Plumber</td>
                    <td className="p-3">Denver, CO</td>
                    <td className="p-3">+1 (303) 555-0144</td>
                    <td className="p-3">info@blueriverplumbing.net</td>
                    <td className="p-3">4.7 (89 reviews)</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable (closed domain)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Sterling Commercial Roofing</td>
                    <td className="p-3">Roofing Contractor</td>
                    <td className="p-3">Phoenix, AZ</td>
                    <td className="p-3">+1 (602) 555-0178</td>
                    <td className="p-3">office@sterlingroofs.com</td>
                    <td className="p-3">4.8 (64 reviews)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly into cold outbound sequencers without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">All Attributes 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Verification Pipeline for Scraped Local Leads
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every local business record extracted from Google Maps passes through four verification checks before entering your cold outreach sequences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Domain & MX Sanity</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Identifies expired websites, parked domains, and absent MX records common among closed local businesses.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">Mailbox Handshake</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connects directly to the receiving mail server without transmitting messages, detecting deleted accounts.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">Catch-All Resolution</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Validates local business catch-all mailboxes with 98.5% precision, unlocking qualified local contacts.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900">Clean CSV Export</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Downloads a clean email list with preserved phone numbers and ratings, ready for outreach.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: LOCAL AGENCY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices for Prospecting Google Maps Leads
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Local marketing agencies follow these proven operational rules to achieve high response rates while protecting domain reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Never Send to Unverified Scraped Lists
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw Google Maps scraped leads carry average bounce rates between 25% and 40%. Running every scraped file through Google Maps email verification filters invalid domains and keeps bounces strictly below 1.5%.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Differentiate Generic Inboxes from Owners
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When targeting local business leads, combine email outreach to verified generic inboxes with phone outreach to the business telephone number preserved in your verified clean email list.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Embrace Verified Catch-All Contacts
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 35% of local service businesses operate catch-all domains. Verifying these records with 98.5% accuracy unlocks substantial market reach that your competitors mistakenly discard.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Re-Verify Local Contact Lists Every 60 Days
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Small local businesses experience rapid turnover. Re-running your aged Google Maps prospect exports through Giggal prevents sudden delivery failures and maintains optimal cold email deliverability.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Google Maps Lead Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common data hygiene and deliverability questions for local lead generation teams.
            </p>
          </div>

          <FaqAccordion items={googleMapsFaqs} />
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Clean Your Google Maps Scraped Leads Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your scraped local business lists before launching outreach. Get 1,000 free verifications with zero credit card required.
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
