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
  Globe2,
  Building2,
  PhoneCall,
  MailCheck,
  Share2,
  Zap,
} from 'lucide-react'

const CANONICAL = '/scraped-leads/scrap-io'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Scrap.io Email Verification and Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'International Local Lead Cleaning and Scrap.io Export Verification',
  operatingSystem: 'Web',
  description:
    'Verify and clean lead lists exported from Scrap.io. Filter invalid ccTLD domains, defunct local businesses, and social bio addresses. Resolve catch-all domains with verified 98.5% accuracy to preserve cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with Scrap.io exports preserving phone numbers, social links, and ratings',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'International domain and ccTLD MX record verification across 70+ countries',
    '1,000 free verification credits without credit card registration',
  ],
}

const scrapIoFaqs: FaqItem[] = [
  {
    q: 'Why do Scrap.io exports require pre-import email verification?',
    a: 'Scrap.io scrapes Google Maps and social media profiles across dozens of countries. This broad extraction captures defunct local business websites, abandoned social bio inboxes, and closed storefronts. Sending messages to uncleaned Scrap.io leads typically generates bounce rates between 25% and 40%, which leads to immediate account freezes on cold email platforms.',
  },
  {
    q: 'How does Giggal verify international local business domains and ccTLDs?',
    a: 'Scrap.io datasets often contain regional ccTLDs like .co.uk, .ca, .com.au, and .de. Giggal queries the authoritative regional name servers and executes deep protocol checks to confirm whether the specific mailbox exists and actively accepts incoming correspondence, regardless of the country of origin.',
  },
  {
    q: 'Does Giggal preserve social media URLs like Facebook and Instagram from Scrap.io?',
    a: 'Yes. Giggal preserves your full Scrap.io CSV schema. All non-email attributes including Facebook pages, Instagram handles, LinkedIn profiles, phone numbers, review ratings, and street addresses remain completely intact without column drift.',
  },
  {
    q: 'How does Giggal handle catch-all domains in Scrap.io Google Maps data?',
    a: 'Over 35% of local commercial enterprises use Google Workspace or Microsoft 365 configured with catch-all routing. Conventional verification services tag these domains as risky and advise deleting them. Giggal conducts deep mail server handshakes to confirm mailbox existence with 98.5% accuracy, unlocking valuable accounts for your campaigns.',
  },
  {
    q: 'What bounce rate should outbound teams expect from raw Scrap.io exports?',
    a: 'Raw Scrap.io exports generally produce hard bounce rates between 25% and 40% due to local business turnover and unmonitored generic addresses. Pre-import verification reduces the hard bounce rate strictly below 1.5%.',
  },
  {
    q: 'Can uncleaned Scrap.io lists trigger sender account suspension in cold sequencers?',
    a: 'Yes. Cold sending tools like Smartlead, Instantly, and Woodpecker pause active campaigns when bounce rates exceed 2% to 3%. Running Scrap.io email verification prior to import is required to protect your connected sending domains.',
  },
  {
    q: 'Can we automate Scrap.io list verification via the Giggal API?',
    a: 'Yes. Giggal provides a high-throughput REST API that connects with your scraping pipelines, Google Sheets automations, or Zapier workflows. You can clean Scrap.io export records automatically before adding them to your outbound sequences.',
  },
  {
    q: 'How many free verification credits does Giggal provide for Scrap.io users?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can upload an actual Scrap.io export, verify catch-all addresses with 98.5% accuracy, and review the clean email list before launching cold outreach.',
  },
]

export const metadata = {
  title: {
    absolute: 'Scrap.io Email Verification | Clean Local Business Exports | Giggal.ai',
  },
  description:
    'Verify and clean lead lists exported from Scrap.io. Filter invalid ccTLD domains, defunct local businesses, and social bio addresses. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Scrap.io Email Verification | Clean Local Business Exports | Giggal.ai',
    description:
      'Verify and clean lead lists exported from Scrap.io. Filter invalid ccTLD domains, defunct local businesses, and social bio addresses. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function ScrapIoLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Scrap.io Email Verification', CANONICAL)
  const faqData = faqPageLd(scrapIoFaqs)

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
            <Globe2 className="w-3.5 h-3.5" />
            <span>Pre-Outreach Verification for Scrap.io International Exports</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Scrap.io Email Verification to Protect Outbound Sender Reputation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scrap.io gathers local business records across 70+ countries, but international scraping captures expired ccTLD domains, closed businesses, and unmonitored social handles. Verify your leads with 98.5% catch-all precision before launching cold outreach.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Scrap.io Leads Free</span>
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
                Guarantees a clean email list that protects international sending accounts from automated provider bans.
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Social & Local Attributes</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves Facebook, Instagram, LinkedIn, and phone numbers for all your Scrap.io leads.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FAILURE MECHANISM OF SCRAP.IO DATA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Raw Scrap.io Exports Damage Cold Email Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Scrap.io is widely used for building databases of local business leads across international regions, but raw exports include substantial deliverability risks. International local domains expire rapidly, storefronts relocate, and scraped social accounts often lead to abandoned addresses.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  TLD
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Regional ccTLD DNS Decay</h3>
                  <div className="text-xs text-slate-500">Unmaintained international mail servers</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Small local businesses using country-specific domains like .co.uk, .ca, or .fr frequently experience DNS misconfigurations and lapsed registrations. When scrapers extract these links, sending campaigns encounter instant hard bounces that harm cold email deliverability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  SOC
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Defunct Social Bio Addresses</h3>
                  <div className="text-xs text-slate-500">Unmonitored social profile extractions</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scrap.io enriches Google Maps data with emails scraped from Facebook and Instagram bios. Many of these contact points are unmonitored personal inboxes or disposable addresses that trigger provider spam flags when approached with cold sales pitches.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>International Local Scrape Decay Formula</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Raw Scrap.io Bounce Exposure Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When prospecting local business leads extracted internationally with Scrap.io, bounce exposure compounds across multiple points of failure:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Bounce_Rate = ((N_ccTLD_expired + N_abandoned_social + N_closed_business) / N_total_scrapio) * 100
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an outbound team exports 1,000 local business leads from Scrap.io across international markets, the raw dataset typically contains approximately 150 expired ccTLD domains, 95 defunct social bio addresses, and 85 closed storefronts. Sending to this unverified dataset results in a 33% hard bounce rate. Mailbox providers like Google Workspace and Outlook enforce an account review threshold of 2%, meaning an uncleaned Scrap.io export exceeds safe operational limits by more than sixteen times. Executing pre-import Scrap.io email verification purges these hazardous records, delivering a clean email list that safeguards sender standing.
            </p>
          </div>
        </section>

        {/* SECTION 3: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Resolving Catch-All Inboxes in Scrap.io Exports with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 40% of small business domains extracted by Scrap.io operate catch-all routing. Conventional verification tools cannot determine whether these individual mailboxes exist, so they tag the entire domain as risky. This forces users to discard up to 40% of their prospective market.
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
              Comparing Verification Methods for Scrap.io Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw Scrap.io exports, legacy bulk verification services, and Giggal pre-outreach cleaning for international business prospecting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Verification Capability</th>
                    <th className="p-4 text-rose-600">Raw Scrap.io Leads</th>
                    <th className="p-4 text-amber-600">Legacy Verifiers</th>
                    <th className="p-4 text-indigo-600 font-bold bg-indigo-50/50">Giggal Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Catch-All Domain Resolution</td>
                    <td className="p-4 text-rose-600">None (25-40% bounce rate)</td>
                    <td className="p-4 text-amber-600">Tagged "Risky" / discarded</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">98.5% Verified Precision</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">International ccTLD Support</td>
                    <td className="p-4 text-rose-600">High failure on regional hosts</td>
                    <td className="p-4 text-amber-600">Frequent timeouts</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Deep Regional MX Validation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Scrap.io Social Schema Alignment</td>
                    <td className="p-4 text-slate-600">Raw columns intact</td>
                    <td className="p-4 text-amber-600">Social columns dropped</td>
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
              Native Scrap.io CSV Schema Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes Scrap.io exports without disrupting your data schema. Business names, telephone numbers, Facebook profiles, Instagram links, star ratings, and review counts remain completely intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Scrap.io Export Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">City</th>
                    <th className="p-3">Country</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Facebook</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Thames Valley Accounting</td>
                    <td className="p-3">Accountant</td>
                    <td className="p-3">London</td>
                    <td className="p-3">United Kingdom</td>
                    <td className="p-3">info@thamesvalleytax.co.uk</td>
                    <td className="p-3">fb.com/thamesvalleytax</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Bavaria Auto Detailing</td>
                    <td className="p-3">Auto Detailing</td>
                    <td className="p-3">Munich</td>
                    <td className="p-3">Germany</td>
                    <td className="p-3">kontakt@bavaria-glanz.de</td>
                    <td className="p-3">fb.com/bavariaglanz</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable (closed domain)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Sydney Harbor Solar</td>
                    <td className="p-3">Solar Energy</td>
                    <td className="p-3">Sydney</td>
                    <td className="p-3">Australia</td>
                    <td className="p-3">support@sydneyharborsolar.com.au</td>
                    <td className="p-3">fb.com/sydneysolarenergy</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly into cold sequencers without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">All Attributes 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Verification Pipeline for Scrap.io Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every international local record extracted with Scrap.io passes through four verification checks before entering your cold outreach sequences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">ccTLD DNS Check</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Verifies regional domain registrations, parked status, and active MX records across international extensions.
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
                Validates local business catch-all mailboxes with 98.5% precision, unlocking qualified international contacts.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900">Clean CSV Export</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Downloads a clean email list of local business leads with preserved social links, ready for outreach.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: AGENCY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices for Scrap.io Outbound Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              International outbound marketing teams follow these standards to maximize cold email deliverability across foreign business markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Never Import Raw Scrap.io CSVs
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw Scrap.io leads carry typical bounce rates between 25% and 40%. Running every export through Scrap.io email verification filters invalid domains and keeps hard bounces strictly below 1.5%.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Validate Across Regional Extensions
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When scraping across multiple European or Commonwealth countries, ensure your verifier conducts deep MX checks on regional ccTLDs rather than relying on generic syntax screening.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Embrace Verified Catch-All Leads
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 35% of local commercial enterprises operate catch-all routing. Verifying these records with 98.5% accuracy expands your reachable prospect list and prevents leaving qualified accounts behind.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Filter Inactive Social Profiles from Scrap.io Leads
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scrap.io surfaces Facebook, Instagram, and LinkedIn links alongside emails. Inactive or abandoned social profiles often correspond to shut-down businesses with expired mailboxes. Giggal validates each mailbox directly with authoritative mail servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm md:col-span-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Re-Clean Aged Scrap.io Leads Every 60 Days
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                International local business databases degrade at roughly 2.5% per month due to store closures and rebranding. Re-running your unverified Scrap.io leads through Giggal ensures continuous cold email deliverability and protects your outbound sending infrastructure across all campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Scrap.io Lead Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common data hygiene and deliverability questions for Scrap.io users.
            </p>
          </div>

          <FaqAccordion items={scrapIoFaqs} />
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Clean Your Scrap.io Lead Exports Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your Scrap.io prospect lists before launching outreach. Get 1,000 free verifications with zero credit card required.
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
