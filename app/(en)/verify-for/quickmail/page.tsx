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

const CANONICAL = '/verify-for/quickmail'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for QuickMail Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cold Outreach Deliverability and Inbox Rotation Protection',
  operatingSystem: 'Web',
  description:
    'Verify prospect lists before importing into QuickMail. Protect inbox rotation algorithms, preserve Auto-Warm network scores, and maintain sub-1.5% bounce rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Native CSV compatibility with QuickMail custom attributes',
    'Deep mailbox handshake without triggering test dispatches',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of terminated inboxes and invalid MX records',
    '1,000 free verification credits without credit card registration',
  ],
}

const quickmailVideo = {
  videoId: 'I2fGXPN8TI0',
  url: 'https://www.youtube.com/watch?v=I2fGXPN8TI0',
  title: 'Everything you need to know about deliverability and avoiding landing in spam',
  channel: 'QuickMail',
  desc: 'Discover how QuickMail distributes volume across multiple inboxes, manages auto-warmup pools, and how high bounce rates distort rotation algorithms.',
}

const quickmailFaqs: FaqItem[] = [
  {
    q: 'How do bounces distort QuickMail inbox rotation algorithm?',
    a: 'QuickMail dynamically adjusts sending quotas based on each inbox real-time delivery health. When a dirty list generates hard bounces on an assigned sender address, QuickMail throttles that inbox dispatch volume, distorting your intended sending schedule and lowering overall campaign speed.',
  },
  {
    q: 'Can QuickMail Auto-Warm compensate for an unverified list?',
    a: 'No. While Auto-Warm exchanges peer messages to build positive reputation, it cannot counteract the immediate penalty of 550 User Unknown rejections from recipient corporate mail servers. Pre-import verification is required to filter dead accounts before sending.',
  },
  {
    q: 'Does Giggal support QuickMail custom attribute tags?',
    a: 'Yes. Giggal checks the email column while maintaining all custom attributes like Attributes 1, Attributes 2, and company names. You can download the verified CSV and re-import it directly into QuickMail without re-configuring attributes.',
  },
  {
    q: 'What bounce rate should QuickMail outbound teams aim for?',
    a: 'You should keep your bounce rate strictly below 2%, with under 1.5% being the target threshold. Maintaining sub-1.5% bounces ensures that QuickMail inbox rotation functions at full capacity without automated throttling.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for QuickMail campaigns?',
    a: 'While conventional verifiers mark catch-all domains as "risky" and force you to skip viable leads, Giggal directly verifies whether the specific inbox exists with 98.5% accuracy. Confirmed deliverable leads can be distributed across your QuickMail inboxes without triggering algorithmic throttling.',
  },
]

export const metadata = {
  title: {
    absolute: 'QuickMail Email Verification | Protect Auto-Warm & Rotation | Giggal.ai',
  },
  description:
    'Verify prospect email lists before importing into QuickMail. Protect inbox rotation algorithms, maintain domain health across auto-warm networks, and eliminate hard bounces.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'QuickMail Email Verification | Protect Auto-Warm & Rotation | Giggal.ai',
    description:
      'Verify prospect email lists before importing into QuickMail. Protect inbox rotation algorithms, maintain domain health across auto-warm networks, and eliminate hard bounces.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function QuickMailVerificationPage() {
  const breadcrumbData = breadcrumbLd('QuickMail Verification', CANONICAL)
  const faqData = faqPageLd(quickmailFaqs)

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
            Verify Email Lists Before Uploading to QuickMail
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Protect your inbox rotation balance and auto-warm health. Purge dead mailboxes, invalid domains, and spam traps before QuickMail schedules your outreach.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify QuickMail List Free</span>
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
                Prevents QuickMail rotation engine from throttling affected sender mailboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Auto-Warm Shield</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Warmup Network Protection</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Ensures peer warmup interactions are not cancelled out by live campaign bounces.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Direct Re-Upload</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">QuickMail CSV Schema</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves custom Attributes 1, Attributes 2, and lead variables without column drift.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE ROTATION DISTORTION MECHANISM */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Leads Disrupt QuickMail Rotation
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              QuickMail uses algorithmic distribution across multiple inboxes. However, when unverified lists generate hard bounces, this architecture triggers automatic safety throttles.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  THRO
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Algorithmic Throttling</h3>
                  <div className="text-xs text-slate-500">Inbox volume cuts by 50% or more</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                When an inbox encounters bounces above safety thresholds, QuickMail automatically scales back its daily sending allowance. This throws off campaign timelines and leaves scheduled messages stalled.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  REP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Auto-Warm Inefficiency</h3>
                  <div className="text-xs text-slate-500">Peer warmup score degradation</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Auto-Warm spends weeks building trust with recipient mail servers. A single dirty prospect list can trigger provider flags that undo months of warmup gains in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Inbox Rotation in QuickMail
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the QuickMail official guide on configuring sender rotation, maintaining auto-warm pools, and avoiding delivery traps.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {quickmailVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {quickmailVideo.title}
                </h3>
              </div>
              <a
                href={quickmailVideo.url}
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
                href={quickmailVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${quickmailVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${quickmailVideo.videoId}/hqdefault.jpg`}
                  alt={quickmailVideo.title}
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
              Native QuickMail CSV Header Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal processes lists without disrupting your custom campaign fields. Every column header, custom attribute, and lead tag remains intact.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                QuickMail Prospect Upload Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Email</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Company</th>
                    <th className="p-3">Attributes 1</th>
                    <th className="p-3">Attributes 2</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">brian@modernscale.co</td>
                    <td className="p-3">Brian</td>
                    <td className="p-3">Cooper</td>
                    <td className="p-3">Modern Scale</td>
                    <td className="p-3">tier_1_saas</td>
                    <td className="p-3">series_b</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">karen@dormantdomain.org</td>
                    <td className="p-3">Karen</td>
                    <td className="p-3">Vance</td>
                    <td className="p-3">Dormant Corp</td>
                    <td className="p-3">tier_2_saas</td>
                    <td className="p-3">series_a</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">tyler@enterpriseshield.com</td>
                    <td className="p-3">Tyler</td>
                    <td className="p-3">Bennett</td>
                    <td className="p-3">Enterprise Shield</td>
                    <td className="p-3">channel_partner</td>
                    <td className="p-3">enterprise</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and import directly to QuickMail without column re-mapping.</span>
              <span className="font-semibold text-indigo-600">Custom Attributes 100% Intact</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists Before Sending with QuickMail
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Maintain smooth multi-inbox rotation and optimal inbox placement across your outbound campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Export Your Lead List</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Export prospect data with your custom QuickMail attributes, company information, and lead tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your CSV to Giggal. Our engine verifies mail exchange records and identifies non-existent mailboxes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Upload to QuickMail</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Import clean deliverable contacts into QuickMail. Run campaigns knowing your inbox rotation will stay balanced.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About QuickMail Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to common deliverability and inbox rotation questions for QuickMail users.
            </p>
          </div>

          <FaqAccordion items={quickmailFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your QuickMail Inbox Rotation Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your prospect list before uploading to QuickMail. Get 1,000 free verifications with zero credit card required.
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
