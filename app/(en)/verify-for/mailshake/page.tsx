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

const CANONICAL = '/verify-for/mailshake'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

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
    a: 'When an outbound sequence produces elevated 550 User Unknown bounce rates, mailbox providers interpret this pattern as an account compromise. To protect their networks, Google and Microsoft frequently revoke or invalidate the OAuth token connecting Mailshake to your mailbox.',
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
    a: 'While traditional verifiers label catch-all domains as "risky" and tell you to throw them away, Giggal directly verifies whether the specific inbox exists with 98.5% accuracy. Resolved deliverable leads can be uploaded directly into your primary Mailshake sequence without risking your SHAKE score.',
  },
]

export const metadata = {
  title: {
    absolute: 'Mailshake Email Verification | Protect SHAKE Score & OAuth | Giggal.ai',
  },
  description:
    'Verify prospect email lists before uploading to Mailshake. Prevent SHAKE score drops, avoid Google Workspace OAuth disconnection, and keep campaign bounce rates below 1.5%.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Mailshake Email Verification | Protect SHAKE Score & OAuth | Giggal.ai',
    description:
      'Verify prospect email lists before uploading to Mailshake. Prevent SHAKE score drops, avoid Google Workspace OAuth disconnection, and keep campaign bounce rates below 1.5%.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

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

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Safeguard your SHAKE deliverability score and prevent OAuth disconnections. Filter invalid contacts, spam traps, and dead mailboxes before launching your Mailshake campaign.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Mailshake List Free</span>
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
              <div className="text-xs text-slate-700 font-semibold mt-1">Safe Bounce Target</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Maintains clean inbox delivery across your connected Google and Microsoft inboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">OAuth Security</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Connection Stability</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents sudden security token revocations caused by 550 delivery error spikes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Direct Re-Upload</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Mailshake CSV Alignment</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves all custom columns, phone numbers, and personalization variables intact.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SHAKE SCORE MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Compromise Mailshake Campaigns
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Mailshake monitors delivery performance in real time. Sudden bounces do not just lower metrics; they trigger automated warnings and can break mailbox connectivity.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  SCO
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">SHAKE Score Collapse</h3>
                  <div className="text-xs text-slate-500">Deliverability ratings downgrade</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When outbound sequences generate hard bounces, Mailshake calculates a lower health rating for your campaign. Subsequent emails are throttled, reducing overall delivery speed.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  AUTH
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">OAuth Token Revocation</h3>
                  <div className="text-xs text-slate-500">ESP automated security measures</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google and Microsoft security algorithms detect rapid bursts of invalid recipient errors. When safety thresholds are breached, the platform revokes Mailshake OAuth authorization.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & SHAKE Scores in Mailshake
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Mailshake official guide on optimizing deliverability, avoiding spam triggers, and managing campaign health.
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
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: EXACT CSV HEADER COMPATIBILITY */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Native Mailshake CSV Header Compatibility
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes lists without disrupting your campaign variables. Every column header, telephone field, and custom tag remains intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Mailshake Lead Import Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Email Address</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Company</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Custom Note</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">claire@venturecapital.co</td>
                    <td className="p-3">Claire</td>
                    <td className="p-3">Winslow</td>
                    <td className="p-3">Venture Capital Co</td>
                    <td className="p-3">+1 415-555-0192</td>
                    <td className="p-3">Met at SaaS Summit</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">steve@closedagency.org</td>
                    <td className="p-3">Steve</td>
                    <td className="p-3">Kahn</td>
                    <td className="p-3">Closed Agency</td>
                    <td className="p-3">+1 212-555-0144</td>
                    <td className="p-3">Followed on Twitter</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">hannah@metropolitangroup.net</td>
                    <td className="p-3">Hannah</td>
                    <td className="p-3">Gomez</td>
                    <td className="p-3">Metropolitan Group</td>
                    <td className="p-3">+1 312-555-0188</td>
                    <td className="p-3">Referred by Andrew</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and import directly to Mailshake without column realignment.</span>
              <span className="font-semibold text-indigo-600">Native Header Preservation</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Sending with Mailshake
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Maintain strong mailbox health and prevent deliverability warnings across your sales sequences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Prepare Prospect CSV</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export your lead list including email addresses, names, company details, and phone numbers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your CSV to Giggal. Our engine validates mailbox records and catches defunct domains before you send.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Import to Mailshake</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Download verified deliverable leads and upload to Mailshake with complete confidence in domain health.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Mailshake Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Clear answers on protecting your SHAKE score and keeping sender accounts in good standing.
            </p>
          </div>

          <FaqAccordion items={mailshakeFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Mailshake Deliverability Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to Mailshake. Get 1,000 free verifications with zero credit card required.
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
