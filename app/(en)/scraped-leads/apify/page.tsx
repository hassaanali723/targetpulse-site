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
  Code2,
  Cpu,
  Building2,
  PhoneCall,
  MailCheck,
  Terminal,
  Zap,
} from 'lucide-react'

const CANONICAL = '/scraped-leads/apify'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Apify Email Verification and Dataset Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Scraped Dataset Cleaning and Apify Actor Export Verification',
  operatingSystem: 'Web',
  description:
    'Verify and clean lead datasets exported from Apify actors and Google Maps crawlers. Filter false-positive regex matches, defunct domains, and spam traps. Resolve catch-all domains with verified 98.5% accuracy to preserve cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV and JSON dataset compatibility preserving phone numbers, review metrics, and actor fields',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Detection of false-positive regex strings and third-party platform footers',
    '1,000 free verification credits without credit card registration',
  ],
}

const apifyFaqs: FaqItem[] = [
  {
    q: 'Why does an Apify dataset export require pre-import email verification?',
    a: 'Apify web scraping actors crawl website code using broad regular expressions. This automated extraction gathers non-contact email strings, including website designer credits, CMS platform support addresses like help@shopify.com, and abandoned inboxes. Launching cold campaigns with uncleaned Apify leads typically produces bounce rates between 24% and 38%, resulting in fast account suspension.',
  },
  {
    q: 'How does Giggal filter third-party platform emails from Apify scrapes?',
    a: 'Small business websites frequently run on platforms like Shopify, Wix, or Squarespace, which display platform contact addresses in footers or source code. Giggal checks domain host alignment between the scraped business URL and the extracted mailbox MX records, separating actual business owners from irrelevant third-party platforms.',
  },
  {
    q: 'Does Giggal preserve all Apify custom actor fields and review metrics?',
    a: 'Yes. Giggal checks the email column while maintaining all other dataset columns intact. Attributes such as title, categoryName, address, city, phone, totalScore, and reviewsCount remain preserved. You can re-import the clean email list directly into your CRM or cold email sequence without data restructuring.',
  },
  {
    q: 'How does Giggal resolve catch-all domains from Apify Google Maps runs?',
    a: 'Between 30% and 40% of local business websites use catch-all configurations. Traditional verification tools discard catch-all leads as risky, forcing outbound teams to throw out valuable contacts. Giggal conducts deep mail server handshakes to verify specific mailbox existence with 98.5% accuracy.',
  },
  {
    q: 'What bounce rate should outbound teams expect from raw Apify scraper files?',
    a: 'Raw Apify exports typically generate hard bounce rates between 24% and 38% due to closed businesses, expired domains, and regex extraction errors. Pre-import verification reduces your hard bounce rate strictly below 1.5%.',
  },
  {
    q: 'Can uncleaned Apify datasets get sending accounts suspended on cold sequencers?',
    a: 'Yes. Sending platforms like Smartlead, Instantly, and Woodpecker freeze campaigns when bounce rates exceed 2% to 3%. Running Apify email verification before uploading prospect data protects your connected Google Workspace and Microsoft accounts from safety throttling.',
  },
  {
    q: 'Can we automate Apify dataset cleaning via the Giggal REST API?',
    a: 'Yes. Giggal offers a high-throughput REST API that connects directly with your Apify webhooks, n8n workflows, or Python scripts. You can trigger automated email verification as soon as an Apify actor run finishes.',
  },
  {
    q: 'How many free verification credits does Giggal provide for Apify users?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can upload an actual Apify dataset export, verify catch-all addresses with 98.5% accuracy, and review the clean email list before launching cold outreach.',
  },
]

export const metadata = {
  title: {
    absolute: 'Apify Email Verification | Clean Scraped Actor Datasets | Giggal.ai',
  },
  description:
    'Verify and clean lead datasets exported from Apify actors and Google Maps crawlers. Filter false-positive regex matches, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Apify Email Verification | Clean Scraped Actor Datasets | Giggal.ai',
    description:
      'Verify and clean lead datasets exported from Apify actors and Google Maps crawlers. Filter false-positive regex matches, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function ApifyLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Apify Email Verification', CANONICAL)
  const faqData = faqPageLd(apifyFaqs)

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
            <span>Pre-Outreach Verification for Apify Actor Datasets</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Apify Email Verification to Protect Outbound Sender Reputation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Apify web scrapers extract raw regex strings across thousands of web pages, gathering dead mailboxes, platform footers, and false positives. Verify your dataset with 98.5% catch-all precision before launching cold outreach.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Apify Leads Free</span>
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Apify Actor Exports</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves review scores, review counts, phone numbers, and categories for all your Apify leads.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FAILURE MECHANISM OF APIFY DATA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Raw Apify Datasets Damage Cold Email Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Apify actors crawl web pages at scale to extract local business leads, but automated regular expression parsing cannot verify whether a discovered mailbox exists. Datasets contain obsolete employees, platform support addresses, and false positives that threaten cold email deliverability.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  REG
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Regex False Positives</h3>
                  <div className="text-xs text-slate-500">Image filenames and encoded assets captured</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Web scraping regex scripts often misinterpret media attributes (like icon@2x.png) or encoded HTML strings as email addresses. Sending to these malformed strings generates instant delivery failures and alarms receiving mail servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  VEND
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Third-Party Platform Footers</h3>
                  <div className="text-xs text-slate-500">Scraping pulls CMS vendor addresses</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                E-commerce and local business websites display platform addresses like help@shopify.com or support@wix.com in footer widgets. Blasting cold sales messages to these corporate support desks produces high spam complaint rates that damage your domain reputation.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Automated Scraping Regex Artifact & Domain Churn Formula</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Raw Apify Dataset Bounce Exposure Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When prospecting local business leads extracted with Apify actors, bounce exposure compounds across multiple points of failure:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Bounce_Rate = ((N_regex_artifacts + N_third_party_vendors + N_expired_domains) / N_dataset_records) * 100
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an engineering team exports 1,000 local business records from an Apify Google Maps actor, the raw dataset typically includes approximately 130 expired business domains, 95 platform vendor addresses, and 85 malformed regex strings. Sending to this unverified dataset results in a 31% hard bounce rate. Mailbox providers like Google Workspace enforce an account review threshold of 2%, meaning an uncleaned Apify export exceeds safe operational limits by more than fifteen times. Executing pre-import Apify email verification purges these hazardous records, delivering a clean email list that safeguards sender standing.
            </p>
          </div>
        </section>

        {/* SECTION 3: CATCH-ALL RESOLUTION DEEP-DIVE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Resolving Catch-All Inboxes in Apify Datasets with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 40% of small business domains extracted by Apify crawlers operate catch-all routing. Conventional verification tools cannot determine whether these individual mailboxes exist, so they tag the entire domain as risky. This forces users to discard up to 40% of their prospective market.
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
              Comparing Verification Methods for Apify Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw Apify actor exports, legacy bulk verification services, and Giggal pre-outreach cleaning for local business prospecting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Verification Capability</th>
                    <th className="p-4 text-rose-600">Raw Apify Datasets</th>
                    <th className="p-4 text-amber-600">Legacy Verifiers</th>
                    <th className="p-4 text-indigo-600 font-bold bg-indigo-50/50">Giggal Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Catch-All Domain Resolution</td>
                    <td className="p-4 text-rose-600">None (24-38% bounce rate)</td>
                    <td className="p-4 text-amber-600">Tagged "Risky" / discarded</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">98.5% Verified Precision</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Regex Artifact Filtration</td>
                    <td className="p-4 text-rose-600">Assets captured as emails</td>
                    <td className="p-4 text-amber-600">Basic syntax checks only</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Deep Mailbox Handshake Check</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Apify Actor Schema Alignment</td>
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
              Native Apify Actor CSV Schema Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes Apify exports without disrupting your data schema. Business titles, categories, telephone numbers, review scores, and review counts remain completely intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Apify Google Places Actor Output Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">title</th>
                    <th className="p-3">categoryName</th>
                    <th className="p-3">city</th>
                    <th className="p-3">phone</th>
                    <th className="p-3">email</th>
                    <th className="p-3">totalScore</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Summit Physical Therapy</td>
                    <td className="p-3">Physical Therapist</td>
                    <td className="p-3">Seattle, WA</td>
                    <td className="p-3">+1 (206) 555-0145</td>
                    <td className="p-3">clinic@summitptwa.com</td>
                    <td className="p-3">4.9 (112 reviews)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Cascadia Auto Repair</td>
                    <td className="p-3">Auto Repair Shop</td>
                    <td className="p-3">Portland, OR</td>
                    <td className="p-3">+1 (503) 555-0199</td>
                    <td className="p-3">help@squarespace.com</td>
                    <td className="p-3">4.5 (34 reviews)</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable (vendor footer)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Lakeview Law Group</td>
                    <td className="p-3">Law Firm</td>
                    <td className="p-3">Chicago, IL</td>
                    <td className="p-3">+1 (312) 555-0187</td>
                    <td className="p-3">intake@lakeviewlegal.com</td>
                    <td className="p-3">4.8 (88 reviews)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly into cold sequencers without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">Apify Columns 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Verification Pipeline for Apify Datasets
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every prospect record extracted with Apify passes through four verification checks before entering your cold outreach campaigns.
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
              Agency Best Practices for Apify Lead Generation
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Automation engineers and outbound agencies follow these rules to maintain high cold email deliverability and avoid provider suspensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Never Import Raw Apify Datasets
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw Apify files carry typical bounce rates between 24% and 38%. Pre-import Apify email verification keeps bounces strictly below 1.5%, protecting your sending domains from automated safety flags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Filter Out CMS Vendor Footers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scraped website footers frequently contain CMS platform support addresses. Verifying the domain host matches the target website ensures your sales pitch reaches actual local business leads.
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
                Local business databases degrade at roughly 2.5% per month due to closures and ownership shifts. Re-running your Apify leads through Giggal ensures continuous cold email deliverability.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Apify Lead Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common data hygiene and deliverability questions for Apify users.
            </p>
          </div>

          <FaqAccordion items={apifyFaqs} />
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Clean Your Apify Scraped Datasets Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your Apify prospect lists before launching outreach. Get 1,000 free verifications with zero credit card required.
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
