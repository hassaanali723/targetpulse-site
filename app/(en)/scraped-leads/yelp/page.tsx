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
  Star,
  Building2,
  PhoneCall,
  MailCheck,
  MapPin,
  Zap,
} from 'lucide-react'

const CANONICAL = '/scraped-leads/yelp'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Yelp Email Verification and Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Directory Lead Cleaning and Yelp Scraped Data Verification',
  operatingSystem: 'Web',
  description:
    'Verify and clean lead lists scraped from Yelp directory profiles. Filter closed local businesses, defunct domains, and spam traps. Resolve catch-all domains with verified 98.5% accuracy to preserve cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with Yelp directory exports preserving phone numbers, ratings, and categories',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Detection of closed local businesses and expired domain MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const yelpFaqs: FaqItem[] = [
  {
    q: 'Why do scraped Yelp email lists have high bounce rates?',
    a: 'Yelp intentionally does not publish direct email addresses on business listings. Lead scrapers extract Yelp company URLs and then crawl linked business websites to harvest contact emails. This process frequently captures defunct webmaster addresses, honeypot traps, and inboxes from closed stores. Sending to raw Yelp leads typically produces bounce rates between 25% and 42%, which triggers rapid sender domain blacklisting.',
  },
  {
    q: 'Does Yelp publish direct business email addresses on its platform?',
    a: 'No. Yelp protects business listings from direct scraping by providing message forms rather than exposing raw email addresses. Tools that scrape Yelp must crawl external websites to find emails, which introduces substantial data decay that requires pre-outreach verification.',
  },
  {
    q: 'How does Giggal handle catch-all domains from Yelp business scrapes?',
    a: 'Between 30% and 40% of local service companies listed on Yelp use Google Workspace or Microsoft 365 configured with catch-all routing. Conventional verifiers label catch-all domains as risky and advise deleting them. Giggal conducts deep mail server handshakes to confirm mailbox existence with 98.5% accuracy, unlocking valuable accounts for your campaigns.',
  },
  {
    q: 'Will verifying our Yelp list delete phone numbers, ratings, or addresses?',
    a: 'No. Giggal checks the email column while maintaining all other prospect columns intact. Attributes such as business name, category, street address, telephone number, Yelp profile link, rating, and review count remain completely preserved. You can re-import the clean email list directly into your cold outreach software or CRM.',
  },
  {
    q: 'What bounce rate should local marketing agencies expect from raw Yelp files?',
    a: 'Raw Yelp scraped exports generally produce hard bounce rates between 25% and 42% due to high hospitality turnover, closed shops, and unmonitored generic addresses. Pre-import verification reduces your hard bounce rate strictly below 1.5%.',
  },
  {
    q: 'Can uncleaned Yelp lists trigger domain blacklisting on Spamhaus or Barracuda?',
    a: 'Yes. Websites linked from Yelp directories frequently contain abandoned domains that have been converted into spam honeypots. Sending unverified cold outreach to these addresses alerts anti-spam organizations, leading to immediate domain blacklisting and account suspension.',
  },
  {
    q: 'Can we automate Yelp lead cleaning using the Giggal REST API?',
    a: 'Yes. Giggal provides a high-throughput REST API that connects with your scraping pipelines, Google Sheets automations, or Zapier workflows. You can clean Yelp scraped export records automatically before adding them to your outbound sequences.',
  },
  {
    q: 'How many free verification credits does Giggal provide for Yelp users?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can upload an actual Yelp scraper export, verify catch-all addresses with 98.5% accuracy, and review the clean email list before launching cold outreach.',
  },
]

export const metadata = {
  title: {
    absolute: 'Yelp Email Verification | Clean Scraped Directory Leads | Giggal.ai',
  },
  description:
    'Verify and clean lead lists scraped from Yelp directory profiles. Filter closed local businesses, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Yelp Email Verification | Clean Scraped Directory Leads | Giggal.ai',
    description:
      'Verify and clean lead lists scraped from Yelp directory profiles. Filter closed local businesses, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function YelpLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Yelp Email Verification', CANONICAL)
  const faqData = faqPageLd(yelpFaqs)

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
            <Star className="w-3.5 h-3.5" />
            <span>Pre-Outreach Verification for Yelp Directory Scrapes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Yelp Email Verification to Protect Outbound Sender Reputation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scraped Yelp business databases suffer from severe turnover, closed stores, and expired domain names. Purge invalid mailboxes and resolve catch-all domains with 98.5% accuracy before launching your local outreach campaigns.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Yelp Leads Free</span>
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
                Guarantees a clean email list that protects cold sequencers from automated account freezes.
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Yelp Profile Attributes</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves review scores, review counts, phone numbers, and categories for all your Yelp leads.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FAILURE MECHANISM OF YELP DATA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Raw Yelp Scraped Leads Threaten Cold Email Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Yelp is a premier directory for local business leads, but scraping contact details from linked websites introduces severe deliverability threats. Small businesses close frequently, and unmaintained websites often harbor spam honeypots that damage your sending reputation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  DEAD
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Persistent Inactive Listings</h3>
                  <div className="text-xs text-slate-500">Profiles remain live long after closures</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a local restaurant, salon, or contractor shuts down, their Yelp profile often persists indefinitely. Secondary website scrapers collect expired domains, leading to immediate 550 User Unknown rejections that damage cold email deliverability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  TRAP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Honeypot Spam Traps</h3>
                  <div className="text-xs text-slate-500">Parked domains convert into trap addresses</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Defunct local domains linked on Yelp directories frequently get acquired by anti-spam blocklists to capture scrapers. Sending unverified cold emails to these honeypots alerts security monitors and triggers immediate domain blacklisting.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Directory Decay & Spam Trap Infiltration Formula</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Raw Yelp Export Bounce Exposure Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When prospecting local business leads extracted from Yelp directory profiles, bounce exposure compounds across multiple points of failure:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Bounce_Rate = ((N_closed_listings + N_honeypot_traps + N_expired_domains) / N_total_yelp) * 100
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an outbound team exports 1,000 local business leads from a Yelp scraping run, the raw dataset typically includes approximately 150 addresses from closed stores, 90 abandoned inboxes, and 80 disconnected MX records. Sending to this unverified dataset results in a 32% hard bounce rate. Mailbox providers like Google Workspace and Outlook enforce an account review threshold of 2%, meaning an uncleaned Yelp export exceeds safe operational limits by sixteen times. Executing pre-import Yelp email verification purges these hazardous records, delivering a clean email list that safeguards sender standing.
            </p>
          </div>
        </section>

        {/* SECTION 3: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Resolving Catch-All Inboxes in Yelp Exports with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 40% of small business domains extracted from Yelp operate catch-all routing. Conventional verification tools cannot determine whether these individual mailboxes exist, so they tag the entire domain as risky. This forces users to discard up to 40% of their prospective market.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <XCircle className="w-4 h-4" />
                <span>The Legacy Tool Dilemma</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Discarding 40% of Scraped Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional verifiers cannot confirm specific inbox validity on catch-all domains. They mark the entire domain risky, prompting revenue leaders to discard 40% of their prospective market or accept dangerous bounce rates that harm sender reputation.
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
                Giggal conducts deep protocol checks to verify specific user mailboxes without dispatching test emails. We resolve catch-all domains with 98.5% verified precision, delivering a clean email list that fuels your cold outreach campaigns with maximum pipeline reach.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: 3-WAY COMPARISON MATRIX TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verification Methods for Yelp Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw Yelp exports, legacy bulk verification services, and Giggal pre-outreach cleaning for local business prospecting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Verification Capability</th>
                    <th className="p-4 text-rose-600">Raw Yelp Leads</th>
                    <th className="p-4 text-amber-600">Legacy Verifiers</th>
                    <th className="p-4 text-indigo-600 font-bold bg-indigo-50/50">Giggal Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Catch-All Domain Resolution</td>
                    <td className="p-4 text-rose-600">None (25-42% bounce rate)</td>
                    <td className="p-4 text-amber-600">Tagged "Risky" / discarded</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">98.5% Verified Precision</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Honeypot Spam Trap Detection</td>
                    <td className="p-4 text-rose-600">Traps included in lists</td>
                    <td className="p-4 text-amber-600">Basic syntax checks only</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Deep Domain & MX Validation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Yelp Schema Alignment</td>
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
              Native Yelp Directory CSV Schema Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes Yelp exports without disrupting your data schema. Business names, telephone numbers, review scores, review counts, and street addresses remain completely intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Yelp Scraped Lead Export Format
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">business_name</th>
                    <th className="p-3">category</th>
                    <th className="p-3">city</th>
                    <th className="p-3">phone</th>
                    <th className="p-3">email</th>
                    <th className="p-3">rating</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Northwest Tree Care</td>
                    <td className="p-3">Tree Services</td>
                    <td className="p-3">Portland, OR</td>
                    <td className="p-3">+1 (503) 555-0164</td>
                    <td className="p-3">estimates@nwtreecarepros.com</td>
                    <td className="p-3">4.9 (78 reviews)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Old Tavern Grill</td>
                    <td className="p-3">Restaurant</td>
                    <td className="p-3">Seattle, WA</td>
                    <td className="p-3">+1 (206) 555-0122</td>
                    <td className="p-3">contact@oldtaverngrill.net</td>
                    <td className="p-3">4.3 (45 reviews)</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable (closed domain)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Emerald City Electric</td>
                    <td className="p-3">Electrician</td>
                    <td className="p-3">Bellevue, WA</td>
                    <td className="p-3">+1 (425) 555-0176</td>
                    <td className="p-3">service@emeraldcityelectric.com</td>
                    <td className="p-3">4.8 (92 reviews)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly into cold sequencers without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">Yelp Columns 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Verification Pipeline for Yelp Directory Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every prospect record extracted from Yelp passes through four verification checks before entering your cold outreach campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Domain & MX Check</h3>
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
                Downloads a clean email list of local business leads with preserved scores and phones, ready for outreach.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: AGENCY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices for Yelp Outbound Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Leading local marketing agencies follow these rules to maintain high cold email deliverability and avoid provider suspensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Never Import Raw Yelp Scrapes
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw Yelp leads carry typical bounce rates between 25% and 42%. Pre-import Yelp email verification keeps bounces strictly below 1.5%, protecting your sending domains from automated safety flags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Detect Honeypot Traps Early
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Local websites linked to Yelp profiles frequently feature parked domains converted into spam traps. Deep mailbox handshakes filter these trap addresses from your Yelp leads before they flag your IP on Spamhaus or Barracuda.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Unlock Verified Catch-All Leads
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 35% of local commercial domains operate catch-all routing. Verifying these records with 98.5% accuracy expands your reachable prospect list and prevents leaving qualified accounts behind.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Re-Clean Aged Prospect Exports Every 60 Days
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Local business databases degrade at roughly 2.5% per month due to closures and ownership shifts. Re-running your Yelp leads through Giggal ensures continuous cold email deliverability.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Yelp Lead Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common data hygiene and deliverability questions for Yelp users.
            </p>
          </div>

          <FaqAccordion items={yelpFaqs} />
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Clean Your Yelp Scraped Leads Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your Yelp prospect lists before launching outreach. Get 1,000 free verifications with zero credit card required.
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
