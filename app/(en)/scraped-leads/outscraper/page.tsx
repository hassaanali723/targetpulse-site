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
  MapPin,
  Database,
  Building2,
  PhoneCall,
  MailCheck,
  Zap,
} from 'lucide-react'

const CANONICAL = '/scraped-leads/outscraper'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Outscraper Email Verification and Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Scraped Data Cleaning and Outscraper Export Verification',
  operatingSystem: 'Web',
  description:
    'Verify and clean lead lists exported from Outscraper. Filter invalid website scrapes, defunct local businesses, and spam traps. Resolve catch-all domains with verified 98.5% accuracy to preserve cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with Outscraper exports preserving phone numbers, review data, and ratings',
    'Deep mailbox handshake without sending test dispatch messages',
    'Catch-all domain resolution with verified 98.5% accuracy',
    'Multi-column email validation across primary and alternate contact fields',
    '1,000 free verification credits without credit card registration',
  ],
}

const outscraperVideo = {
  videoId: '0qWdNMDDwqg',
  url: 'https://www.youtube.com/watch?v=0qWdNMDDwqg',
  title: 'How to Clean Up Your Email List?',
  channel: 'Outscraper',
  desc: 'Discover why cleaning raw scraped lists is required to protect domain reputation, reduce hard bounces, and avoid spam traps.',
}

const outscraperFaqs: FaqItem[] = [
  {
    q: 'Why does an Outscraper export require pre-import email verification?',
    a: 'Outscraper extracts contact details by crawling websites linked to Google Maps listings. This process scrapes every email format found on contact pages, privacy policies, and website footers, including abandoned inboxes and external web design agency emails. Sending to uncleaned Outscraper leads typically produces bounce rates between 22% and 38%, which immediately triggers account suspensions on cold sending platforms.',
  },
  {
    q: 'How does Giggal handle Outscraper files with multiple email columns?',
    a: 'Outscraper exports frequently include multiple email columns such as email, email_1, and email_2. Giggal systematically validates each contact field while preserving the original CSV structure, appending deliverability status flags without overwriting your lead variables.',
  },
  {
    q: 'Does Giggal resolve catch-all domains from Outscraper Google Maps scrapes?',
    a: 'Yes. Over 35% of local businesses operate on catch-all mail servers. Conventional verifiers label catch-all domains as unverifiable or risky, forcing outbound teams to throw out 40% of their scraped data. Giggal conducts deep mail server handshakes to verify specific mailbox existence with 98.5% accuracy.',
  },
  {
    q: 'How does Giggal filter external web design agency emails from local business footers?',
    a: 'Local business websites often include credits like "Website Designed by AgencyName" in the footer. Scrapers mistakenly collect these designer email addresses. Giggal detects domain mismatches between the business website domain and the extracted email MX host, helping you isolate genuine business owners from third-party vendors.',
  },
  {
    q: 'What bounce rate should cold outbound teams expect from raw Outscraper files?',
    a: 'Raw Outscraper exports generally carry hard bounce rates between 22% and 38% due to business closures, domain expirations, and unmaintained email addresses. Verifying your export through Giggal reduces the hard bounce rate strictly below 1.5%.',
  },
  {
    q: 'Can uncleaned Outscraper lists trigger ESP account suspension in cold sequencers?',
    a: 'Yes. Major cold email platforms like Smartlead, Instantly, and Woodpecker pause campaigns when bounce rates exceed 2% to 3%. Pre-import Outscraper email verification is required to safeguard your connected Google Workspace and Microsoft 365 accounts.',
  },
  {
    q: 'How can we automate Outscraper list cleaning using the Giggal API?',
    a: 'Giggal provides a high-throughput REST API that integrates directly with your Outscraper scraping tasks, webhook automations, or Google Sheets workflows. You can clean Outscraper export records automatically before pushing them to your cold outbound sequences.',
  },
  {
    q: 'How many free verification credits does Giggal provide for Outscraper users?',
    a: 'Giggal provides 1,000 free verification credits immediately upon sign-up, requiring no credit card. You can upload an actual Outscraper export, verify catch-all addresses with 98.5% accuracy, and review the clean email list before launching cold outreach.',
  },
]

export const metadata = {
  title: {
    absolute: 'Outscraper Email Verification | Clean Scraped Lead Exports | Giggal.ai',
  },
  description:
    'Verify and clean lead lists exported from Outscraper. Filter invalid website scrapes, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Outscraper Email Verification | Clean Scraped Lead Exports | Giggal.ai',
    description:
      'Verify and clean lead lists exported from Outscraper. Filter invalid website scrapes, defunct domains, and spam traps. Maintain cold email deliverability with 98.5% catch-all resolution accuracy.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function OutscraperLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('Outscraper Email Verification', CANONICAL)
  const faqData = faqPageLd(outscraperFaqs)

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
            <span>Pre-Outreach Verification for Outscraper Data Exports</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.18]">
            Outscraper Email Verification to Protect Outbound Sender Reputation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Outscraper extracts contact emails across thousands of local business websites, but raw files contain abandoned inboxes, agency credits, and defunct domains. Verify your export with 98.5% catch-all precision before launching cold outreach.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Outscraper Leads Free</span>
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
                Guarantees a clean email list that protects cold sequencers from automated safety freezes.
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Outscraper Export Format</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves review counts, ratings, phone numbers, and categories across all email columns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FAILURE MECHANISM OF OUTSCRAPER DATA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Raw Outscraper Exports Risk Cold Email Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Outscraper is an effective platform for extracting local business data, but its web scraping engine gathers raw addresses without validating mailbox deliverability. Importing uncleaned Outscraper files directly into cold sending accounts creates compounding reputation damage.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  CRED
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Website Designer Footers</h3>
                  <div className="text-xs text-slate-500">Scrapers pull third-party developer inboxes</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When local business websites feature footer credits like "Site built by Agency", scrapers extract the external designer email address instead of the business owner. Sending sales pitches to unrelated agencies generates spam complaints that damage your domain reputation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  MULTI
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Multi-Column Error Stacking</h3>
                  <div className="text-xs text-slate-500">Errors compound across email_1 and email_2</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Outscraper exports often populate secondary and tertiary email columns. When outbound teams send messages to unverified secondary addresses, bounce events multiply, pushing total campaign bounce rates above provider tolerance limits.
              </p>
            </div>
          </div>

          {/* MATHEMATICAL FORMULA BOX */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Outscraper Multi-Email Error Amplification Formula</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              The Compounded Scraper Bounce Exposure Formula
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              When prospecting local business leads extracted with multi-column scraping, total bounce exposure multiplies:
            </p>

            <div className="my-4 p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 text-center shadow-inner overflow-x-auto">
              Bounce_Rate = ((N_closed + N_agency_credits + N_defunct_inbox) / N_total_leads) * 100
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If an outbound team exports 1,000 local business leads from Outscraper with secondary contact columns enabled, the raw file typically contains approximately 140 addresses from closed stores, 90 external agency credits, and 70 defunct role mailboxes. Sending to this unverified dataset results in a 30% hard bounce rate. Email providers like Google Workspace and Microsoft 365 enforce a strict 2% bounce ceiling, meaning a raw Outscraper export exceeds safe limits by fifteen times. Performing pre-import Outscraper email verification eliminates these hazardous contacts, securing a clean email list that protects sender standing.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL OUTSCRAPER VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Official Outscraper Tutorial: Why Cleaning Your List Is Required
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Outscraper official video guide explaining the necessity of email list verification to prevent sender penalties and maintain cold email deliverability.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {outscraperVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {outscraperVideo.title}
                </h3>
              </div>
              <a
                href={outscraperVideo.url}
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
                href={outscraperVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${outscraperVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${outscraperVideo.videoId}/hqdefault.jpg`}
                  alt={outscraperVideo.title}
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
              Resolving Catch-All Inboxes in Outscraper Exports with 98.5% Accuracy
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 40% of small business domains extracted by Outscraper use catch-all routing. Traditional email verification tools cannot determine whether these individual mailboxes exist, so they tag the entire domain as risky. This forces users to discard up to 40% of their paid Outscraper leads.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <XCircle className="w-4 h-4" />
                <span>The Legacy Tool Approach</span>
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

        {/* SECTION 5: 3-WAY COMPARISON MATRIX TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verification Methods for Outscraper Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Evaluating raw Outscraper exports, legacy bulk verification services, and Giggal pre-outreach cleaning for local business prospecting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="p-4">Verification Capability</th>
                    <th className="p-4 text-rose-600">Raw Outscraper Leads</th>
                    <th className="p-4 text-amber-600">Legacy Verifiers</th>
                    <th className="p-4 text-indigo-600 font-bold bg-indigo-50/50">Giggal Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Catch-All Domain Resolution</td>
                    <td className="p-4 text-rose-600">None (22-38% bounce rate)</td>
                    <td className="p-4 text-amber-600">Tagged "Risky" / discarded</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">98.5% Verified Precision</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Multi-Email Column Support</td>
                    <td className="p-4 text-slate-600">Raw format only</td>
                    <td className="p-4 text-amber-600">Only validates first email</td>
                    <td className="p-4 text-emerald-600 font-semibold bg-indigo-50/30">Validates All Email Columns</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">Outscraper CSV Schema Alignment</td>
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

        {/* SECTION 6: EXACT CSV HEADER COMPATIBILITY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Outscraper CSV Schema Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes Outscraper exports without disrupting your data schema. Business names, telephone numbers, review ratings, review counts, and street addresses remain completely intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Outscraper Scraped Lead Export Format
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">name</th>
                    <th className="p-3">type</th>
                    <th className="p-3">phone</th>
                    <th className="p-3">email</th>
                    <th className="p-3">email_1</th>
                    <th className="p-3">rating</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Highland Dental</td>
                    <td className="p-3">Dentist</td>
                    <td className="p-3">+1 (206) 555-0131</td>
                    <td className="p-3">info@highlanddentalsmiles.com</td>
                    <td className="p-3">dr.reed@highlanddentalsmiles.com</td>
                    <td className="p-3">4.9 (182)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Old Oak Tree Service</td>
                    <td className="p-3">Tree Service</td>
                    <td className="p-3">+1 (503) 555-0198</td>
                    <td className="p-3">contact@oldoaktrees.org</td>
                    <td className="p-3">support@webrepairagency.com</td>
                    <td className="p-3">4.6 (43)</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable (closed domain)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">Pacific Coast HVAC</td>
                    <td className="p-3">HVAC Contractor</td>
                    <td className="p-3">+1 (619) 555-0182</td>
                    <td className="p-3">dispatch@pacificcoasthvac.com</td>
                    <td className="p-3">service@pacificcoasthvac.com</td>
                    <td className="p-3">4.8 (95)</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable catch-all (98.5% accurate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Filter deliverables and import directly into cold sequencers without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">Outscraper Columns 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Stage Verification Pipeline for Outscraper Exports
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every prospect record uploaded from Outscraper passes through four verification checks before entering your cold outreach campaigns.
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
                Downloads a clean email list of local business leads with preserved ratings and phones, ready for immediate cold dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: AGENCY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices for Outscraper Prospect Lists
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              High-volume lead generation teams follow these rules to maintain high cold email deliverability and avoid provider suspensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Never Import Raw Outscraper CSVs
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw Outscraper files carry typical bounce rates between 22% and 38%. Pre-import Outscraper email verification keeps bounces strictly below 1.5%, protecting your sending domains from automated safety flags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Filter Out External Agency Footers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scraped website footers frequently contain agency designer emails. Verifying the domain host matches the target website ensures your sales pitch reaches actual local business leads.
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
                Local business databases degrade at roughly 2.5% per month due to closures and ownership shifts. Re-running your Outscraper files through Giggal ensures continuous cold email deliverability.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Outscraper Lead Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common data hygiene and deliverability questions for Outscraper users.
            </p>
          </div>

          <FaqAccordion items={outscraperFaqs} />
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Clean Your Outscraper Lead Exports Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your Outscraper prospect lists before launching outreach. Get 1,000 free verifications with zero credit card required.
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
