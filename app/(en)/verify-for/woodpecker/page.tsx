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
} from 'lucide-react'

const CANONICAL = '/verify-for/woodpecker'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Woodpecker Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Email Deliverability and List Verification',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Woodpecker. Prevent Bounce Shield campaign pauses, protect sender reputation, and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Woodpecker column headers',
    'Deep mailbox handshake without sending actual email',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of dead inboxes and invalid mail exchange records',
    '1,000 free verification credits with zero credit card required',
  ],
}

const woodpeckerVideo = {
  videoId: 'BPVP7gMsca8',
  url: 'https://www.youtube.com/watch?v=BPVP7gMsca8',
  title: 'Check out Deliverability Monitor & Bounce Shield features in Woodpecker',
  channel: 'Woodpecker.co',
  desc: 'See how Woodpecker detects delivery risks, monitors mailbox health, and automatically pauses sending when bounce thresholds are breached.',
}

const woodpeckerFaqs: FaqItem[] = [
  {
    q: 'Why did Woodpecker automatically pause my cold email campaign?',
    a: 'Woodpecker features an automated safety system called Bounce Shield. When the hard bounce rate on an active sequence crosses safe thresholds (typically 3%), Woodpecker pauses the campaign to prevent recipient mail servers from blacklisting your sending domain or suspending your email account.',
  },
  {
    q: 'Does Woodpecker replace the need for pre-import email verification?',
    a: 'No. While Woodpecker monitors delivery health and pauses campaigns upon detecting failures, it does not clean your list before sending. Verification must occur prior to upload so invalid addresses are removed before they burn sending quota or trigger provider warnings.',
  },
  {
    q: 'How does Giggal handle Woodpecker custom CSV snippet columns?',
    a: 'Giggal preserves all original CSV columns during the cleaning pass. Your custom Woodpecker tags such as FIRST_NAME, COMPANY, and SNIPPET1 remain completely intact, allowing 1-click re-import without column realignment.',
  },
  {
    q: 'How should agency teams handle list verification across Woodpecker client accounts?',
    a: 'Agencies managing multiple client sub-accounts in Woodpecker should verify each prospect list independently. Storing clean deliverables per client prevents cross-account contamination and ensures client domains stay above 98% deliverability.',
  },
  {
    q: 'How does Giggal handle catch-all domains for Woodpecker sequences?',
    a: 'Unlike traditional email validators that label catch-all domains as "risky" and tell you to discard them, Giggal directly verifies mailbox existence behind the catch-all server with 98.5% accuracy. Validated catch-all addresses can be uploaded directly into your primary Woodpecker campaign without risking Bounce Shield triggers.',
  },
]

export const metadata = {
  title: {
    absolute: 'Woodpecker Email Verification | Prevent Campaign Pauses | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Woodpecker. Prevent Bounce Shield campaign freezes, eliminate dead mailboxes, and protect sender reputation.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Woodpecker Email Verification | Prevent Campaign Pauses | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Woodpecker. Prevent Bounce Shield campaign freezes, eliminate dead mailboxes, and protect sender reputation.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function WoodpeckerVerificationPage() {
  const breadcrumbData = breadcrumbLd('Woodpecker Verification', CANONICAL)
  const faqData = faqPageLd(woodpeckerFaqs)

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
            Verify Email Lists Before Uploading to Woodpecker
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Avoid automatic campaign freezes and domain blocks. Filter invalid mailboxes, dormant domains, and resolve catch-all leads before Woodpecker queues your sequence.
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
                Keeps Woodpecker Bounce Shield active and green without triggering sequence pauses.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Native CSV Mapping</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Cleaned files retain EMAIL, FIRST_NAME, and custom SNIPPET columns for instant import.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">10-24 Hours</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Downtime Prevented</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Eliminates provider mailbox bans and sequence interruptions across client accounts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE TECHNICAL CAUSE (BOUNCE SHIELD MECHANICS) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Woodpecker Automatically Freezes Outbound Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Woodpecker monitors delivery response codes in real time. When an unverified list triggers sudden delivery failures, its automated Bounce Shield safety system acts immediately to stop further damage.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  550
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">User Unknown (Hard Bounce)</h3>
                  <div className="text-xs text-slate-500">Recipient mail server rejects recipient</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When sending to outdated B2B lists, former employees generate hard 550 bounces. Hitting just three bounces in a 100-email batch pushes your rate to 3%, signaling spam behavior to Google and Outlook.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  SPF
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Domain Reputation Depletion</h3>
                  <div className="text-xs text-slate-500">Shared agency sending pools get flagged</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                In Woodpecker agency dashboards, multiple clients share sending infrastructure. A single dirty campaign damages domain health across all connected client sub-accounts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Bounce Shield in Woodpecker
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Woodpecker official guide on how deliverability monitoring and automated bounce prevention work inside the platform.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {woodpeckerVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {woodpeckerVideo.title}
                </h3>
              </div>
              <a
                href={woodpeckerVideo.url}
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
                href={woodpeckerVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${woodpeckerVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${woodpeckerVideo.videoId}/hqdefault.jpg`}
                  alt={woodpeckerVideo.title}
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

        {/* SECTION 4: EXACT WOODPECKER CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Woodpecker CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal sanitizes mailboxes without altering your spreadsheet structure. Upload your export directly and import the clean results back into Woodpecker with zero column mapping errors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Woodpecker Header</th>
                  <th className="px-4 py-3">Example Lead Value</th>
                  <th className="px-4 py-3">Giggal Verification Output</th>
                  <th className="px-4 py-3">Import Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">EMAIL</td>
                  <td className="px-4 py-3 text-slate-600">alex.turner@company.com</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold font-sans flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Deliverable (Valid Handshake)</span>
                  </td>
                  <td className="px-4 py-3 font-sans text-slate-700">Import to main sequence</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">FIRST_NAME</td>
                  <td className="px-4 py-3 text-slate-600">Alex</td>
                  <td className="px-4 py-3 font-sans text-slate-500">Preserved exactly</td>
                  <td className="px-4 py-3 font-sans text-slate-700">Direct personalization</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">EMAIL</td>
                  <td className="px-4 py-3 text-slate-600">sarah@enterprise-catchall.com</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold font-sans flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Deliverable (Resolved Catch-All)</span>
                  </td>
                  <td className="px-4 py-3 font-sans text-slate-700">Safe for primary sequence (98.5% confidence)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">EMAIL</td>
                  <td className="px-4 py-3 text-slate-600">david.m@defunctdomain.io</td>
                  <td className="px-4 py-3 text-rose-700 font-semibold font-sans flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Undeliverable (550 User Unknown)</span>
                  </td>
                  <td className="px-4 py-3 font-sans text-rose-700 font-semibold">Discard before import</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">SNIPPET1</td>
                  <td className="px-4 py-3 text-slate-600">saw your recent podcast on SaaS growth</td>
                  <td className="px-4 py-3 font-sans text-slate-500">Preserved exactly</td>
                  <td className="px-4 py-3 font-sans text-slate-700">Woodpecker custom field</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: 4-STAGE PRE-IMPORT WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Import Pipeline for Woodpecker
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How outbound agencies prepare high-volume CSV files for zero-bounce sequence execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export lead lists from Apollo, Clay, or LinkedIn Sales Navigator with standard contact fields.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 02</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Server Handshake Check</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal initiates network handshakes with target mail servers to verify inbox presence without sending email.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 03</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Resolve Catch-All Leads</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal resolves accept-all domains directly into deliverable or undeliverable, saving leads other tools discard.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Upload to Woodpecker</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Import clean deliverables into Woodpecker. Launch campaigns with confidence that bounce rates remain sub-1.5%.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Woodpecker List Verification Questions
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Common questions from sales teams and agency operators preparing lists for Woodpecker campaigns.
            </p>
          </div>

          <FaqAccordion items={woodpeckerFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Woodpecker Senders Today
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Get 1,000 free verification credits. Upload your CSV and clean your outbound list in under three minutes.
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
