import type { Metadata } from 'next'
import SendingInboxesNote from '@/components/verify-for/SendingInboxesNote'
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
  HelpCircle,
} from 'lucide-react'

const CANONICAL = '/verify-for/woodpecker'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'Woodpecker Email Verification | Prevent Campaign Pauses | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Woodpecker. Prevent Bounce Shield campaign freezes, resolve catch-all mailboxes with 98.5% accuracy, and protect sender reputation.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Woodpecker Email Verification | Prevent Campaign Pauses | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Woodpecker. Prevent Bounce Shield campaign freezes, resolve catch-all mailboxes with 98.5% accuracy, and protect sender reputation.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

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
    a: 'Woodpecker features an automated safety system called Woodpecker Bounce Shield. When the hard bounce rate on an active sequence crosses safe thresholds (typically 3% to 5%), Woodpecker pauses the campaign automatically. This built-in protection prevents recipient mail servers from blacklisting your sending domain or suspending your Google Workspace or Microsoft 365 accounts.',
  },
  {
    q: 'How does Woodpecker email verification protect cold email deliverability?',
    a: 'Running Woodpecker email verification before importing your lead CSV filters out dead accounts, invalid mail exchange records, and spam traps. By cleaning your list beforehand, your hard bounce rate stays under 1.5%, which preserves high sender reputation scores and ensures your emails reach the primary inbox rather than the spam folder.',
  },
  {
    q: 'How does Giggal handle catch-all domains for Woodpecker sequences?',
    a: 'Unlike legacy email verifiers that mark accept-all servers as risky and advise you to delete them, Giggal performs direct mailbox verification behind catch-all domains with 98.5% accuracy. Validated catch-all addresses can be imported straight into your main Woodpecker sequence, recovering 30% to 50% of B2B prospect data that competitors force you to abandon.',
  },
  {
    q: 'Does Woodpecker have a built-in email verification feature?',
    a: 'Woodpecker provides deliverability monitoring and Bounce Shield protection, but it does not perform deep pre-import list scrubbing. Verification must happen before uploading your CSV so invalid mailboxes are removed before Woodpecker attempts delivery and consumes your daily sending limit.',
  },
  {
    q: 'How does Giggal preserve custom Woodpecker snippets and merge tags?',
    a: 'Giggal preserves all original columns during verification. Custom Woodpecker fields such as FIRST_NAME, COMPANY, WEBSITE, SNIPPET1, and SNIPPET2 remain completely untouched. Once verification finishes, you can re-import the file into Woodpecker with 1-click without any manual column realignment.',
  },
  {
    q: 'What is the difference between a hard bounce and a soft bounce in Woodpecker?',
    a: 'A hard bounce (550 User Unknown) means the email address does not exist or the domain is dead; this directly damages sender score and triggers Woodpecker Bounce Shield. A soft bounce (such as 421 or 450) is temporary, indicating a full mailbox or temporary server timeout. Pre-send verification eliminates hard bounces before they happen.',
  },
  {
    q: 'How often should sales teams clean email lists for Woodpecker?',
    a: 'B2B contact data decays at an average rate of 2.5% to 3% each month due to job transitions and company reorganizations. Sales teams should clean email lists for Woodpecker immediately before every new campaign import, even if the data was purchased or scraped recently.',
  },
  {
    q: 'How should outbound agencies handle list verification across Woodpecker client workspaces?',
    a: 'Agencies managing multiple client sub-accounts in Woodpecker must clean each client prospect list independently. Verifying contacts before campaign upload prevents one client with bad data from hurting the reputation of shared agency domains and keeps deliverability above 98% across all client workspaces.',
  },
]

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

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Protect cold email deliverability and stop campaign freezes before they happen. Complete Woodpecker email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before Woodpecker queues your outbound sequence.
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
                Keeps Woodpecker Bounce Shield active and green without triggering sudden sequence pauses.
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
          <SendingInboxesNote tool="Woodpecker" slug="woodpecker" />
        </section>

        {/* SECTION 2: THE TECHNICAL CAUSE (BOUNCE SHIELD MECHANICS) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Woodpecker Bounce Shield Automatically Freezes Outbound Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Woodpecker monitors delivery response codes in real time. When an unverified list triggers sudden delivery failures, its automated safety mechanism, Woodpecker Bounce Shield, acts immediately to halt sending before your domain reputation collapses.
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
                  <div className="text-xs text-slate-500">Recipient mail server rejects mailbox</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When sending to unverified B2B lists, departed employees generate hard 550 bounces. Hitting just three bounces in a 100-email batch pushes your rate to 3%, triggering Woodpecker Bounce Shield to freeze your campaign and alerting Google Workspace or Microsoft 365 administrators.
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
                In Woodpecker agency dashboards, multiple campaigns draw upon connected sending domains. When an unverified CSV produces a high bounce rate, recipient servers downgrade your sender score across every mailbox sharing that domain, pushing future outreach into spam.
              </p>
            </div>
          </div>

          {/* DEEP TECHNICAL EXPLANATION OF BOUNCE CALCULATION */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The Math Behind Woodpecker Bounce Thresholds
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Woodpecker evaluates your campaign bounce rate using the formula: <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800 text-xs">Bounce Rate = (Hard Bounces / Total Sent Emails) * 100</span>. Major email service providers require senders to keep hard bounces below 2%. When your list contains unverified contacts from outdated scrapers, bounce rates frequently spike past 8%, triggering immediate campaign pauses that stall your sales pipeline. Clean email list for Woodpecker workflows keeps this ratio well below the danger line.
            </p>
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

        {/* SECTION 4: DEEP DIVE - CATCH-ALL RESOLUTION FOR WOODPECKER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects Woodpecker Deliverability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 50% of business domains use accept-all configurations. When using legacy verification tools, these enterprise domains are flagged as catch-all or risky, forcing marketers to make a costly trade-off: discard valuable leads or risk triggering Woodpecker Bounce Shield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>The Legacy Verifier Problem</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                Discarding 35% of B2B Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional verification services cannot determine whether individual mailboxes exist behind catch-all mail servers. They dump every accept-all contact into an ambiguous bucket and instruct you to discard them. This wastes your prospecting spend and cuts your target market in half.
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
                Giggal handshakes the specific recipient mailbox directly, determining actual inbox presence behind catch-all domains. We classify them cleanly as deliverable or undeliverable, unlocking hundreds of high-value enterprise leads for your Woodpecker campaigns without raising bounce risks.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNICAL COMPARISON - GIGGAL VS LEGACY TOOLS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for Woodpecker Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy tools when preparing cold outreach lists for Woodpecker.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature & Capability</th>
                  <th className="px-4 py-3">Giggal.ai</th>
                  <th className="px-4 py-3 text-slate-500">Legacy Verifiers</th>
                  <th className="px-4 py-3 text-slate-500">Basic Scraping Verifiers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Catch-All Domain Handling</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">98.5% Direct Inbox Resolution</td>
                  <td className="px-4 py-3 text-slate-500">Labeled "Risky" / Discarded</td>
                  <td className="px-4 py-3 text-slate-500">Skipped or Marked Unknown</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Woodpecker Snippet Preservation</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Column Retention</td>
                  <td className="px-4 py-3 text-slate-500">Often Reorders or Drops Headers</td>
                  <td className="px-4 py-3 text-slate-500">Exports Email Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Target Hard Bounce Rate</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Guaranteed Safe</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Bounce Shield Risk)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (Frequent Sequence Freezes)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Verification Protocol</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">Live Mailbox Handshake (No Email Sent)</td>
                  <td className="px-4 py-3 text-slate-500">Cached MX & Syntax Check</td>
                  <td className="px-4 py-3 text-slate-500">Regex Syntax Validation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Free Starter Tier</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">1,000 Free Credits</td>
                  <td className="px-4 py-3 text-slate-500">50 to 100 Credits</td>
                  <td className="px-4 py-3 text-slate-500">Requires Paid Subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: EXACT WOODPECKER CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Woodpecker CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal performs Woodpecker email verification without altering your spreadsheet structure. Upload your raw prospect export and re-import verified contacts directly into Woodpecker with complete column alignment.
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

        {/* SECTION 7: 4-STAGE PRE-IMPORT WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Import Pipeline for Woodpecker Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How outbound agencies clean email lists for Woodpecker to ensure cold email deliverability and avoid campaign interruptions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export prospect data from Apollo, Clay, or LinkedIn Sales Navigator with standard contact fields and custom snippets intact.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 02</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Server Handshake Check</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal initiates network handshakes with target mail servers to verify inbox presence without sending an actual email message.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 03</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Resolve Catch-All Leads</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal resolves accept-all domains directly into deliverable or undeliverable with 98.5% accuracy, recovering high-value enterprise leads.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Upload to Woodpecker</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Import clean deliverables into Woodpecker. Launch your campaign knowing your bounce rate stays safely below 1.5%.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: TROUBLESHOOTING FROZEN WOODPECKER SEQUENCES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Recover When Woodpecker Bounce Shield Freezes a Campaign
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              If your sequence was suddenly stopped by Woodpecker Bounce Shield, follow this recovery protocol to restore sending safely.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Pause All Connected Sending Slots</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Do not attempt to click "Resume" immediately in Woodpecker without cleaning your data. Resuming with the same unverified batch will trigger repeat 550 bounces, resulting in permanent mailbox suspension from Google or Microsoft.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Export Unsent Leads and Run Verification</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Export the queued contacts from your paused Woodpecker campaign. Run the file through Giggal to isolate confirmed deliverables and remove invalid addresses, defunct domains, and spam traps.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Re-import Clean Contacts and Resume Sequence</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Import only the verified deliverables back into Woodpecker. Because Giggal resolved catch-all addresses with 98.5% confidence, your bounce rate will immediately fall under 1%, allowing Woodpecker Bounce Shield to return to green status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WOODPECKER AGENCY & MULTI-INBOX DELIVERABILITY PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices: Protecting Cold Email Deliverability in Woodpecker
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Experienced outbound teams use structured safeguards to maintain high inbox placement across multiple sending domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Isolate Client Workspaces</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Never mix prospect lists across client accounts. Perform pre-import list verification for each client separately to prevent dirty data in one campaign from harming shared agency domain reputation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Monitor Sending Slots</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep daily sending limits between 30 and 50 emails per inbox in Woodpecker. High volume with unverified emails triggers rate limiting from Google and Microsoft servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Re-verify Stale Leads</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Any lead list older than 30 days should be sanitized again before launching a follow-up cadence. Natural B2B data decay creates unexpected bounces on previously clean lists.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Woodpecker Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding Woodpecker Bounce Shield, catch-all domain resolution, and list cleaning best practices.
            </p>
          </div>

          <FaqAccordion items={woodpeckerFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Woodpecker Senders with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for Woodpecker sequences in under three minutes with zero credit card required.
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
