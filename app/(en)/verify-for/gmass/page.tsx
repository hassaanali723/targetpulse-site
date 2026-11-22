import type { Metadata } from 'next'
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
  Mail,
} from 'lucide-react'

const CANONICAL = '/verify-for/gmass'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'GMass Email Verification | Prevent Gmail Account Suspension | Giggal.ai',
  },
  description:
    'Scrub Gmail cold email lists before launching with GMass. Prevent Google Workspace account lockouts, resolve catch-all leads with 98.5% accuracy, and keep bounce rates below 2%.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'GMass Email Verification | Prevent Gmail Account Suspension | Giggal.ai',
    description:
      'Scrub Gmail cold email lists before launching with GMass. Prevent Google Workspace account lockouts, resolve catch-all leads with 98.5% accuracy, and keep bounce rates below 2%.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for GMass Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Gmail Deliverability and Outbound List Verification',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before launching mass campaigns in GMass. Prevent Google Workspace account suspension, eliminate 550 User Unknown bounce errors, and protect your primary Gmail sender reputation.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct compatibility with GMass Google Sheets and CSV campaign formats',
    'Deep mailbox handshake without dispatching test emails',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of terminated Google accounts and invalid MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const gmassVideo = {
  videoId: 'RTDmGYxc1CA',
  url: 'https://www.youtube.com/watch?v=RTDmGYxc1CA',
  title: 'GMass Beginner Tutorial 2026: Personalized Mass Email in Gmail',
  channel: 'GMass',
  desc: 'Learn how GMass executes mail merge campaigns in Gmail, how to connect Google Sheets, and how to maintain high deliverability.',
}

const gmassFaqs: FaqItem[] = [
  {
    q: 'Why does Google suspend Gmail accounts using GMass when emails bounce?',
    a: 'Because GMass sends directly through your personal Gmail or Google Workspace account, Google monitors your outgoing messages in real time. If your campaign generates more than a 2% hard bounce rate, Google automated filters flag the account for abusive sending practices, resulting in immediate suspension.',
  },
  {
    q: 'Why is GMass email verification required before sending mail merges?',
    a: 'GMass email verification filters out dead accounts, deactivated corporate mailboxes, and invalid domains before you hit send. Scrubbing your list beforehand keeps hard bounces under 1.5%, which protects cold email deliverability and prevents Google from freezing your primary Gmail or Google Workspace account.',
  },
  {
    q: 'How does Giggal protect my primary Google Workspace domain?',
    a: 'Giggal connects directly to recipient mail servers to verify whether the mailbox exists, without sending an actual email. By filtering out non-existent addresses and dead domains before you click send in GMass, your bounce rate stays well below Google 1.5% danger threshold.',
  },
  {
    q: 'Can I clean a Google Sheet connected directly to GMass?',
    a: 'Yes. Export your Google Sheet as a CSV, upload it to Giggal for instant verification, and filter for deliverable contacts. Paste the clean emails back into your Google Sheet before GMass connects to it for sending.',
  },
  {
    q: 'Does Giggal preserve GMass personalization tags and custom fields?',
    a: 'Yes. All original columns including First Name, Company, and custom merge fields are preserved intact. You can re-upload your cleaned CSV directly or update your Google Sheet without re-mapping tags.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for GMass campaigns?',
    a: 'While conventional validators treat catch-all domains as risky and recommend discarding them, Giggal directly verifies mailbox status behind the catch-all server with 98.5% accuracy. Confirmed deliverable leads can be sent safely via GMass without triggering Google automated bounce suspension algorithms.',
  },
  {
    q: 'How often should sales reps clean email lists for GMass?',
    a: 'B2B contact databases decay at roughly 3% each month due to employment turnover. Clean email list for GMass campaigns every time you import fresh lead data to prevent Google Workspace account suspension.',
  },
  {
    q: 'What is the recommended sending speed for large GMass campaigns?',
    a: 'To safeguard cold email deliverability in Gmail, configure GMass to space emails by 5 to 10 seconds. Blasting hundreds of emails per minute triggers Google automated rate-limiting and temporary account locks.',
  },
]

export default function GMassVerificationPage() {
  const breadcrumbData = breadcrumbLd('GMass Verification', CANONICAL)
  const faqData = faqPageLd(gmassFaqs)

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
            Verify Email Lists Before Uploading to GMass
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Prevent Google Workspace account suspension and safeguard your primary Gmail inbox. Complete GMass email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before GMass dispatches your mail merge.
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
              <div className="text-2xl font-black text-indigo-600">0% Risk</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Google Account Locks</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Eliminates hard bounces that trigger Google automated anti-spam account suspensions.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Google Sheets Native</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all GMass merge tags and custom variables for immediate campaign launch.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Bounce Rate</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Guarantees sub-1.5% bounce rates to protect cold email deliverability across Gmail.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: GMAIL ACCOUNT SUSPENSION RISKS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Cause Google Workspace Account Suspension in GMass
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike third-party servers, GMass operates inside your Gmail or Google Workspace inbox. This gives your emails superior deliverability, but also creates high risk: when your GMass campaign hits hard bounces, Google monitors the failure directly inside your sent folder.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  2%
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">The 2% Google Bounce Redline</h3>
                  <div className="text-xs text-slate-500">Google automated abuse triggers</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google Workspace algorithms monitor the percentage of hard 550 delivery failures on every sending account. When bounces exceed 2%, Google flags the account for bulk spam activity, disabling outgoing email capabilities or locking your account.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 font-mono text-xs font-bold">
                  BAN
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Domain-Wide Collateral Damage</h3>
                  <div className="text-xs text-slate-500">Affects regular business emails</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your GMass campaigns trigger a Google Workspace account suspension, your primary corporate email is affected as well. Internal emails, client communications, and calendar invites can be disrupted until an administrator appeals the block.
              </p>
            </div>
          </div>

          {/* FORMULA BOX */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The Gmail Deliverability Safety Margin
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Google Workspace evaluates sender trust using the formula: <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800 text-xs">Trust Score = 100 - (Hard Bounces / Sent Volume * 50)</span>. Generating just 4 hard bounces in a 200-email mail merge docks your trust score by 10 points, moving future messages into recipient spam folders. Clean email list for GMass sequences guarantees that your score remains at 100%.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Mail Merge in GMass
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch GMass official walkthrough on connecting Google Sheets, managing sending limits, and maintaining high inbox placement.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {gmassVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {gmassVideo.title}
                </h3>
              </div>
              <a
                href={gmassVideo.url}
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
                href={gmassVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${gmassVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${gmassVideo.videoId}/hqdefault.jpg`}
                  alt={gmassVideo.title}
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

        {/* SECTION 4: CATCH-ALL RESOLUTION FOR GMASS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects GMass Mailings
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Accept-all email setups protect over 40% of B2B corporate inboxes. Conventional validators classify these addresses as risky and advise deleting them, cutting down your outreach reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>The Legacy Verifier Problem</span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                Discarding 40% of B2B Prospects
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conventional verifiers cannot determine whether specific mailboxes exist on accept-all domains. They dump valuable prospects into a catch-all bin and tell you to discard them, slashing your addressable market and lowering campaign ROI.
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
                Giggal initiates direct network handshakes with target mail servers, resolving catch-all domains into deliverable or undeliverable with 98.5% accuracy. Validated catch-alls enter GMass safely, keeping bounce rates under 1.5% while expanding outreach volume.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON MATRIX */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for GMass Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy tools when preparing Google Sheets lists for GMass.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Capability & Feature</th>
                  <th className="px-4 py-3">Giggal.ai</th>
                  <th className="px-4 py-3 text-slate-500">Legacy Verifiers</th>
                  <th className="px-4 py-3 text-slate-500">Basic Extension Verifiers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Catch-All Domain Resolution</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">98.5% Direct Inbox Handshake</td>
                  <td className="px-4 py-3 text-slate-500">Marked "Risky" / Discarded</td>
                  <td className="px-4 py-3 text-slate-500">Unchecked / Raw Pass</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">GMass Merge Tag Retention</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Column Alignment</td>
                  <td className="px-4 py-3 text-slate-500">Drops Custom Merge Headers</td>
                  <td className="px-4 py-3 text-slate-500">Exports Email Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Google Workspace Lockout Protection</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Bounce Rate Shield</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Suspension Risk)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (Immediate Google Block)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Verification Protocol</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">Live Mailbox Handshake (No Email Sent)</td>
                  <td className="px-4 py-3 text-slate-500">Cached MX & Syntax Check</td>
                  <td className="px-4 py-3 text-slate-500">Regex Syntax Validation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">Free Starter Credits</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">1,000 Free Credits</td>
                  <td className="px-4 py-3 text-slate-500">50 to 100 Credits</td>
                  <td className="px-4 py-3 text-slate-500">Paid Plan Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: GMASS CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native GMass Google Sheets CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal executes GMass email verification while retaining all contact fields, merge variables, and custom notes for immediate mail merge execution.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Custom Field 1</th>
                  <th className="p-3">Giggal Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">marcus@enterprise.co</td>
                  <td className="p-3">Marcus</td>
                  <td className="p-3">Enterprise Media</td>
                  <td className="p-3">Q3 Feature Discussion</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  <td className="p-3 text-slate-600">Include in GMass mail merge</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">chloe@obsolete-org.net</td>
                  <td className="p-3">Chloe</td>
                  <td className="p-3">Old Systems</td>
                  <td className="p-3">Webinar Followup</td>
                  <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  <td className="p-3 text-rose-600 font-semibold">Remove row from sheet</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">daniel@enterprise-catchall.com</td>
                  <td className="p-3">Daniel</td>
                  <td className="p-3">Enterprise Cloud</td>
                  <td className="p-3">VIP Invite</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  <td className="p-3 text-slate-600">Safe for GMass merge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Send Pipeline for GMass Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How growth marketers clean email lists for GMass to ensure zero-bounce delivery and prevent Google Workspace account suspension.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export your Google Sheet or CRM contacts containing email addresses, names, and custom merge variables.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 02</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Server Handshake Check</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal initiates network handshakes with target mail servers, verifying inbox presence without sending an actual email message.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 03</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Resolve Catch-All Leads</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Giggal resolves accept-all domains with 98.5% accuracy, recovering high-value enterprise contacts for your GMass sequence.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Launch with GMass</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Paste clean deliverables back into your Google Sheet and click the red GMass button with zero bounce anxiety.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: GMASS DELIVERABILITY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Best Practices: Protecting Cold Email Deliverability in GMass
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Recommended operational rules to keep your Google Workspace account safe from automated suspensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Configure Sending Delays</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Set GMass sending delay to space messages by 5 to 10 seconds. Firing hundreds of emails instantly alerts Google automated abuse detectors.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Stay Under Daily Caps</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Even though Google Workspace allows 2,000 sends per day, keep cold outreach below 400 to 500 emails per inbox per day to maintain domain health.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Re-verify Older Spreadsheets</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before sending follow-up mailings from an older Google Sheet, re-verify the list. Contact turnover causes 2.5% monthly data decay on stale sheets.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              GMass Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding Google Workspace account suspension, catch-all domain resolution, and GMass mail merge protection.
            </p>
          </div>

          <FaqAccordion items={gmassFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your GMass Inboxes with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for GMass campaigns in under three minutes with zero credit card required.
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
