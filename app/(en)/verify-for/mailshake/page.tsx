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
  Key,
} from 'lucide-react'

const CANONICAL = '/verify-for/mailshake'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: {
    absolute: 'Mailshake Email Verification | Protect SHAKE Score & OAuth | Giggal.ai',
  },
  description:
    'Clean prospect data before launching Mailshake campaigns. Prevent Campaign Pauses, protect sending accounts, and resolve catch-all mailboxes with 98.5% accuracy.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Mailshake Email Verification | Protect SHAKE Score & OAuth | Giggal.ai',
    description:
      'Clean prospect data before launching Mailshake campaigns. Prevent Campaign Pauses, protect sending accounts, and resolve catch-all mailboxes with 98.5% accuracy.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Mailshake Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Email Deliverability and List Verification',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into Mailshake. Protect your SHAKE deliverability score, prevent Google and Microsoft OAuth disconnections, and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Direct CSV compatibility with Mailshake lead column formats',
    'Deep mailbox handshake without sending test messages',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of defunct mail servers and invalid DNS settings',
    '1,000 free verification credits with zero payment details required',
  ],
}

const mailshakeVideo = {
  videoId: 'XD6vd2iEnFM',
  url: 'https://www.youtube.com/watch?v=XD6vd2iEnFM',
  title: 'The Cold Email Masterclass from Mailshake',
  channel: 'Mailshake',
  desc: 'Discover how Mailshake evaluates sender health, tracks delivery responses, and why bounce spikes trigger automated campaign warnings and OAuth disconnects.',
}

const mailshakeFaqs: FaqItem[] = [
  {
    q: 'How do high bounces impact my SHAKE score in Mailshake?',
    a: 'Mailshake SHAKE score analyzes real-time email deliverability indicators. When an unverified list generates hard bounces, Mailshake deliverability engine immediately lowers your campaign score, warning you that your messages risk spam placement across major email providers.',
  },
  {
    q: 'Why does Google or Microsoft disconnect my OAuth integration with Mailshake?',
    a: 'When an outbound sequence produces elevated 550 User Unknown bounce rates, mailbox providers interpret this pattern as an account compromise. To protect their networks, Google and Microsoft frequently revoke or invalidate the OAuth token connecting Mailshake to your mailbox, pausing your campaigns.',
  },
  {
    q: 'Why is Mailshake email verification necessary before importing leads?',
    a: 'Mailshake email verification scrubs invalid mailboxes, closed enterprise accounts, and spam traps prior to sending. Keeping your hard bounce rate below 1.5% protects your cold email deliverability, safeguards your SHAKE score, and stops automated campaign interruptions.',
  },
  {
    q: 'Does Giggal preserve Mailshake custom tags and phone fields?',
    a: 'Yes. Giggal checks the email column while maintaining all other prospect details including First Name, Company, Phone Number, and custom text snippet columns. You can download the verified CSV and import it directly into Mailshake without re-mapping.',
  },
  {
    q: 'What bounce threshold should I aim for in Mailshake?',
    a: 'You should maintain a bounce rate below 2%, with under 1.5% being the optimal benchmark. Keeping bounces below this level ensures continuous sender trust and prevents automated campaign holds.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Mailshake campaigns?',
    a: 'While traditional verifiers label catch-all domains as risky and tell you to throw them away, Giggal directly verifies whether the specific inbox exists with 98.5% accuracy. Resolved deliverable leads can be uploaded directly into your primary Mailshake sequence without risking your SHAKE score.',
  },
  {
    q: 'How often should sales teams clean email lists for Mailshake?',
    a: 'B2B contact data decays at an average rate of 2.5% to 3% each month due to employment changes. Clean email list for Mailshake cadences every time you export fresh data, and re-verify any lead list that has sat uncontacted for more than 30 days.',
  },
  {
    q: 'What are the best sending practices for Mailshake multi-inbox setups?',
    a: 'To maximize cold email deliverability in Mailshake, space out emails across multiple warmed sender accounts and keep daily sends to 30 to 45 messages per inbox. Combining conservative volumes with verified prospect data ensures steady inbox placement.',
  },
]

export default function MailshakeVerificationPage() {
  const breadcrumbData = breadcrumbLd('Mailshake Verification', CANONICAL)
  const faqData = faqPageLd(mailshakeFaqs)

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
            Verify Email Lists Before Uploading to Mailshake
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Protect your SHAKE deliverability score and prevent Google and Microsoft OAuth disconnections. Complete Mailshake email verification to filter invalid addresses, eliminate dead mailboxes, and resolve catch-all domains with 98.5% accuracy before Mailshake starts sending.
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
              <div className="text-2xl font-black text-indigo-600">&gt; 95 SHAKE</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">SHAKE Score Protected</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Maintains top-tier deliverability ratings and prevents campaign holds in Mailshake.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Reformatting</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Native CSV Mapping</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Retains all Mailshake custom fields, phone numbers, and lead tags for direct upload.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">&lt; 1.5%</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Target Bounce Rate</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents sudden Google Workspace and Microsoft 365 OAuth token revocations.
              </p>
            </div>
          </div>
          <SendingInboxesNote tool="Mailshake" slug="mailshake" />
        </section>

        {/* SECTION 2: THE SHAKE SCORE & OAUTH DYNAMICS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Trigger OAuth Token Revocation in Mailshake
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Mailshake connects to your email service provider via secure OAuth 2.0. While this setup ensures smooth integration, mailbox providers monitor outgoing activity closely. When an unverified list generates a sudden cluster of hard bounces, Google and Microsoft flag the account.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  AUTH
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">OAuth Disconnections</h3>
                  <div className="text-xs text-slate-500">Providers invalidate sending tokens</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When outbound sequences spike past 3% hard bounces, Google and Microsoft security filters suspect compromised credentials. They immediately revoke the active OAuth session, pausing all active Mailshake campaigns and requiring manual account re-authentication.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  SHAKE
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">SHAKE Score Penalties</h3>
                  <div className="text-xs text-slate-500">Automated deliverability downgrade</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mailshake built-in SHAKE score evaluates sending risk based on bounce history. Once your bounce rate exceeds safe thresholds, Mailshake flags the campaign and limits dispatch speed to protect domain reputation.
              </p>
            </div>
          </div>

          {/* FORMULA BOX */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">
              The Mailshake Campaign Safety Margin
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mailshake deliverability engine tracks your hard bounce percentage in real time. Hitting 4 hard bounces in a 100-email batch pushes your rate to 4%, immediately placing your sending domain on watch lists. Clean email list for Mailshake sequences eliminates invalid mailboxes beforehand and guarantees that your bounce rate stays under 1.5%.
            </p>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & SHAKE Score in Mailshake
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch Mailshake official masterclass on maintaining high deliverability, setting up custom tracking domains, and preventing spam filter triggers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {mailshakeVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {mailshakeVideo.title}
                </h3>
              </div>
              <a
                href={mailshakeVideo.url}
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
                href={mailshakeVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${mailshakeVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${mailshakeVideo.videoId}/hqdefault.jpg`}
                  alt={mailshakeVideo.title}
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

        {/* SECTION 4: CATCH-ALL RESOLUTION FOR MAILSHAKE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Catch-All Domain Resolution Protects Mailshake Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Between 30% and 50% of corporate prospect domains are configured to accept all incoming mail. Traditional verification tools label them risky, forcing teams to discard valuable contacts or gamble with their SHAKE score.
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
                Giggal initiates direct network handshakes with target mail servers, resolving catch-all domains into deliverable or undeliverable with 98.5% accuracy. Validated catch-alls enter Mailshake safely, keeping bounce rates under 1.5% while expanding outreach volume.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON MATRIX */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Comparing Verifiers for Mailshake Email Verification
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How modern mailbox verification compares to legacy tools when preparing prospect CSV lists for Mailshake.
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
                  <td className="px-4 py-3 font-semibold text-slate-900">Mailshake Column Alignment</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">100% Native Header Retention</td>
                  <td className="px-4 py-3 text-slate-500">Drops Custom Snippet Headers</td>
                  <td className="px-4 py-3 text-slate-500">Exports Email Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-slate-900">SHAKE Score Protection Margin</td>
                  <td className="px-4 py-3 text-emerald-700 font-bold">&lt; 1.5% Bounce Rate Shield</td>
                  <td className="px-4 py-3 text-slate-500">3% to 6% (Risk of Score Drop)</td>
                  <td className="px-4 py-3 text-slate-500">&gt; 8% (OAuth Disconnection Risk)</td>
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

        {/* SECTION 6: MAILSHAKE CSV SCHEMA MAPPING */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Mailshake CSV Column Compatibility
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Giggal executes Mailshake email verification while retaining all custom variables, phone numbers, and recipient tags for immediate campaign upload.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Custom Field</th>
                  <th className="p-3">Giggal Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">jessica@venturecapital.co</td>
                  <td className="p-3">Jessica</td>
                  <td className="p-3">Venture Partners</td>
                  <td className="p-3">+1 (555) 019-2834</td>
                  <td className="p-3">Series A Founder</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">tyler@obsoletefirm.net</td>
                  <td className="p-3">Tyler</td>
                  <td className="p-3">Old Capital</td>
                  <td className="p-3">+1 (555) 018-9922</td>
                  <td className="p-3">Past Portfolio Lead</td>
                  <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">laura@enterprise-catchall.com</td>
                  <td className="p-3">Laura</td>
                  <td className="p-3">Enterprise Global</td>
                  <td className="p-3">+1 (555) 014-4421</td>
                  <td className="p-3">Keynote Speaker</td>
                  <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 7: 4-STAGE PRE-IMPORT PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The 4-Step Pre-Import Pipeline for Mailshake Campaigns
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              How high-performing sales teams clean email lists for Mailshake to maintain high SHAKE scores and prevent OAuth disconnections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 01</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Export Prospect CSV</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Export prospect data from your CRM or scraper with email addresses, names, and phone numbers intact.
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
                Giggal resolves accept-all domains with 98.5% accuracy, recovering high-value enterprise contacts for your Mailshake cadence.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase font-mono">Step 04</div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">Upload to Mailshake</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Import clean deliverables into Mailshake. Launch your campaign knowing your bounce rate stays safely below 1.5%.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: DELIVERABILITY BEST PRACTICES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agency Best Practices: Protecting Cold Email Deliverability in Mailshake
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Recommended operational rules to keep SHAKE scores above 95 and maintain active OAuth tokens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Monitor OAuth Tokens</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Check Mailshake sender status weekly. Hard bounce spikes trigger Google and Microsoft to invalidate OAuth sessions without warning.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Pace Daily Volume</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Limit sending volume to 30 to 45 emails per day per connected account. Even with clean data, excessive volume triggers spam filter scrutiny.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Re-verify Older CSV Files</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before sending follow-up cadences on lead lists older than 30 days, clean the remaining contacts. Outdated lists create unexpected bounce spikes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Mailshake Email Verification FAQ
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Technical answers regarding SHAKE scores, catch-all domain resolution, and OAuth token protection in Mailshake.
            </p>
          </div>

          <FaqAccordion items={mailshakeFaqs} />
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Protect Your Mailshake Senders with Giggal
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Start with 1,000 free verification credits. Clean email list for Mailshake campaigns in under three minutes with zero credit card required.
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
