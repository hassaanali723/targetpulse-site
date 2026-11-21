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

const CANONICAL = '/verify-for/mailmeteor'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Verification for Mailmeteor Campaigns',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Google Workspace Deliverability and Mail Merge Verification',
  operatingSystem: 'Web',
  description:
    'Verify Google Sheets prospect lists before sending with Mailmeteor. Prevent Google Workspace account suspension, protect daily sending quotas, and eliminate 550 delivery rejections.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Compatible with Google Sheets and CSV mail merge formats',
    'Deep mailbox handshake without triggering test dispatches',
    'Catch-all domain resolution with 98.5% accuracy',
    'Detection of closed Google accounts and invalid mail servers',
    '1,000 free verification credits with zero credit card required',
  ],
}

const mailmeteorVideo = {
  videoId: 'BK35MzD-AcI',
  url: 'https://www.youtube.com/watch?v=BK35MzD-AcI',
  title: 'How to mail merge with follow ups in Google Sheets',
  channel: 'Mailmeteor',
  desc: 'Discover how Mailmeteor connects to Gmail, how Google calculates daily sending limits, and why bounced mail merge contacts lead to account lockouts.',
}

const mailmeteorFaqs: FaqItem[] = [
  {
    q: 'Why do hard bounces in Mailmeteor waste my daily Gmail quota?',
    a: 'Google Workspace enforces strict daily limits: 500 emails for personal Gmail and 2,000 for Google Workspace accounts. When an email bounces, Google still counts that message against your daily quota. Sending to 100 invalid contacts reduces your actual outreach capacity by 100 emails for the next 24 hours.',
  },
  {
    q: 'Can a high bounce rate get my Google Workspace account suspended?',
    a: 'Yes. Google monitors bounce rates on all outgoing mail merge traffic. If your campaign exceeds a 2% to 3% hard bounce rate, Google automated filters flag the account for suspicious activity, resulting in temporary account lockouts or permanent sending restrictions.',
  },
  {
    q: 'How do I clean a Google Sheet before running Mailmeteor?',
    a: 'Export your Google Sheet as a CSV file, upload it to Giggal for list verification, and download the cleaned output. Filter for deliverable status and paste the verified records back into your Google Sheet before clicking send in Mailmeteor.',
  },
  {
    q: 'Does Giggal change the column order required by Mailmeteor merge tags?',
    a: 'No. Giggal retains every column header, including First Name, Company, and custom merge fields like {{Merge Tag 1}}. The cleaned CSV matches your original structure, so Mailmeteor detects all variables automatically.',
  },
  {
    q: 'How does Giggal resolve catch-all domains for Mailmeteor sending?',
    a: 'Unlike generic tools that label catch-all domains as "risky" and recommend throwing them out, Giggal directly checks whether the specific mailbox exists with 98.5% accuracy. Validated catch-all addresses can be merged into your Google Sheet and sent via Mailmeteor without endangering your daily send limit.',
  },
]

export const metadata = {
  title: {
    absolute: 'Mailmeteor Email Verification | Protect Gmail Sending Quotas | Giggal.ai',
  },
  description:
    'Verify prospect email lists before running mail merge in Mailmeteor. Prevent Google Workspace account suspension, avoid burning daily send quotas, and keep bounces under 1.5%.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Mailmeteor Email Verification | Protect Gmail Sending Quotas | Giggal.ai',
    description:
      'Verify prospect email lists before running mail merge in Mailmeteor. Prevent Google Workspace account suspension, avoid burning daily send quotas, and keep bounces under 1.5%.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function MailmeteorVerificationPage() {
  const breadcrumbData = breadcrumbLd('Mailmeteor Verification', CANONICAL)
  const faqData = faqPageLd(mailmeteorFaqs)

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
            Verify Email Lists Before Sending with Mailmeteor
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Protect your Google Workspace quota and prevent account suspension. Filter invalid contacts, spam traps, and dead mailboxes before launching your mail merge.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Verify Mail Merge List Free</span>
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
              <div className="text-2xl font-black text-indigo-600">2,000 / Day</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Workspace Quota Shield</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Never waste daily Google sending allowances on dormant or nonexistent mailboxes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Zero Lockouts</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">Account Suspension Defense</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Prevents sudden Google Workspace security triggers caused by 550 bounce spikes.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
              <div className="text-2xl font-black text-slate-900">Google Sheets Ready</div>
              <div className="text-xs text-slate-700 font-semibold mt-1">100% Header Matching</div>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Preserves all personalized merge tags like First Name, Company, and custom notes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE GOOGLE WORKSPACE QUOTA HAZARD */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Unverified Mail Merges Endanger Google Accounts
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Mailmeteor dispatches messages directly through your connected Gmail account. Unlike third-party relay servers, Google tracks your sender behavior internally with immediate enforcement policies.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono text-xs font-bold">
                  24H
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Permanent Daily Quota Loss</h3>
                  <div className="text-xs text-slate-500">Every bounce burns one outgoing slot</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google Workspace grants 2,000 dispatches per rolling 24 hours. When your list contains 300 dead emails, you do not just get 300 bounce notifications; you permanently surrender 15% of your daily outreach bandwidth.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono text-xs font-bold">
                  SEC
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Google Workspace Lockout</h3>
                  <div className="text-xs text-slate-500">Automated security suspension</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Google automated security monitors catch sudden bursts of 550 recipient errors. Once your bounce rate crosses 3%, Google suspends outbound sending privileges, freezing email access across your entire team.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFICIAL VIDEO GUIDE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Understanding Deliverability & Quotas in Mailmeteor
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Watch the Mailmeteor official guide on how Google handles mail merge volume and how to protect your domain reputation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 shadow-lg">
            <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 bg-slate-950/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  {mailmeteorVideo.channel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {mailmeteorVideo.title}
                </h3>
              </div>
              <a
                href={mailmeteorVideo.url}
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
                href={mailmeteorVideo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`Watch ${mailmeteorVideo.title} on YouTube`}
                className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 block group"
              >
                <img
                  src={`https://i.ytimg.com/vi/${mailmeteorVideo.videoId}/hqdefault.jpg`}
                  alt={mailmeteorVideo.title}
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
              Google Sheets & Mailmeteor Column Alignment
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Giggal keeps your Google Sheets schema intact. Your personalized variables, salutations, and custom merge fields remain unaltered.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Mailmeteor Google Sheets Schema
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/60 text-slate-600 font-semibold">
                    <th className="p-3">Email</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Company</th>
                    <th className="p-3">Custom Note</th>
                    <th className="p-3">Follow-Up Date</th>
                    <th className="p-3 text-indigo-600 font-bold">Giggal Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">lisa@growthagency.io</td>
                    <td className="p-3">Lisa</td>
                    <td className="p-3">Growth Agency</td>
                    <td className="p-3">Loved your article</td>
                    <td className="p-3">Nov 28</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">mark@defunct-startup.co</td>
                    <td className="p-3">Mark</td>
                    <td className="p-3">Defunct Co</td>
                    <td className="p-3">Saw your launch</td>
                    <td className="p-3">Nov 29</td>
                    <td className="p-3 text-rose-600 font-semibold">undeliverable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-slate-900">jordan@holdinggroup.com</td>
                    <td className="p-3">Jordan</td>
                    <td className="p-3">Holding Group</td>
                    <td className="p-3">Quick question</td>
                    <td className="p-3">Nov 30</td>
                    <td className="p-3 text-emerald-600 font-semibold">deliverable (resolved)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Filter deliverables and copy back into Google Sheets in seconds.</span>
              <span className="font-semibold text-indigo-600">100% Merge Tag Compatible</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP WORKFLOW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Verify Lists for Mailmeteor in 3 Simple Steps
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Ensure flawless mail merge execution while maintaining safe sender health inside your Google Workspace account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Download Google Sheet</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save your Google Sheets contact sheet as a CSV file with your intended merge fields and personalized variables.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean with Giggal</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload your file to Giggal. Our system checks recipient mail servers, catches inactive accounts, and flags high-risk domains.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Launch in Mailmeteor</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paste the clean list back into your sheet and trigger your campaign. Every sent message lands in an active recipient inbox.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-slate-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions About Mailmeteor Deliverability
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Practical guidance on protecting Google mail merge limits and domain reputation.
            </p>
          </div>

          <FaqAccordion items={mailmeteorFaqs} />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Protect Your Google Workspace Quota Today
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Verify your mail merge contact list before sending with Mailmeteor. Get 1,000 free verifications with zero credit card required.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Verify 1,000 Contacts Free</span>
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
