import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import ProductPreview from '@/components/landing/ProductPreview'
import RatingChips from '@/components/landing/RatingChips'
import AwardRow from '@/components/landing/AwardRow'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  Mail, ShieldCheck, CheckCircle2, AlertCircle, AlertTriangle, ArrowRight,
  Server, HelpCircle, Users, Building2, Megaphone, MailCheck, Layers,
  Globe, Activity, Check, Zap, SlidersHorizontal, RefreshCw, BarChart3,
} from 'lucide-react'

const CANONICAL = '/use-cases/outreach-email-deliverability'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Outreach Deliverability Solution',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Sales Engagement Deliverability',
  operatingSystem: 'Web',
  description:
    'Protect Outreach.io and cold sales sequences from spam. Verify catch-all emails, reduce bounce rates below 1%, and safeguard domain reputation.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Pre-sequence lead list verification for Outreach.io and Salesloft',
    'Catch-all and accept-all mailbox validation with 98.5% accuracy',
    'Protection against toxic spam traps and defunct inboxes',
    'Custom tracking domain and DNS alignment guidance',
    '1,000 free verification credits without credit card',
  ],
}

const riskPoints = [
  {
    Icon: AlertCircle,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    title: 'Unverified Catch-All Bounces',
    body: 'Over 30% of enterprise B2B mailboxes sit on catch-all domains. Standard verifiers mark them "risky" or "unknown". When cadences send to dead addresses, bounce rates exceed 1%, triggering automated domain throttling.',
  },
  {
    Icon: Globe,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    title: 'Shared Tracking Pixel Blacklists',
    body: 'Generic open-tracking pixels route through shared multi-tenant hosts. If another sender gets flagged, receiving spam filters quarantine your sequences by association—even when your message copy is personal.',
  },
  {
    Icon: Activity,
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    title: 'Spam Complaint Thresholds',
    body: 'Google and Yahoo enforce a strict 0.3% complaint ceiling. When reps send to outdated contacts who never opted in, minor complaint spikes push subsequent sequence steps directly into the junk folder.',
  },
  {
    Icon: ShieldCheck,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    title: 'Primary Domain Contamination',
    body: 'Running high-volume prospecting from your core brand domain risks day-to-day operations. Once sender reputation drops, invoices, board communications, and client updates also fail to land in the inbox.',
  },
]

const safetyNetPillars = [
  {
    Icon: MailCheck,
    badge: 'Pillar 1',
    title: 'Pre-Sequence Lead Verification',
    body: 'Filter out syntax flaws, dead inboxes, and toxic spam honeypots before contacts enter an active Outreach cadence. Keep bounce rates strictly under 1.0% to satisfy Google and Microsoft reputation algorithms.',
  },
  {
    Icon: Zap,
    badge: 'Pillar 2',
    title: 'Catch-All Resolution (98.5% Accuracy)',
    body: 'Stop guessing which accept-all leads are safe. While legacy validators label catch-alls as "risky" and force you to discard viable contacts, Giggal verifies the mailbox directly, returning conclusive valid or invalid statuses.',
  },
  {
    Icon: SlidersHorizontal,
    badge: 'Pillar 3',
    title: 'Domain Isolation & Secondary Setup',
    body: 'Shield your primary corporate domain. Structure cold outbound operations across isolated secondary domains with dedicated Google Workspace or Microsoft 365 mailboxes, capped at 35 to 45 emails per day.',
  },
  {
    Icon: RefreshCw,
    badge: 'Pillar 4',
    title: 'Custom Tracking & DNS Alignment',
    body: 'Configure branded tracking CNAME records to eliminate shared-domain reputation penalties. Validate SPF, 2048-bit DKIM, and DMARC alignment so mailbox providers verify the authenticity of every transmission.',
  },
]

const workflowComparison = [
  {
    title: 'Unchecked Outbound Sequences',
    status: 'High Spam & Bounce Risk',
    border: 'border-rose-200 bg-rose-50/40',
    badgeClass: 'bg-rose-100 text-rose-800',
    steps: [
      'Raw prospect list exported from LinkedIn or Apollo',
      'Loaded directly into Outreach without catch-all checks',
      '4% to 7% hard bounce rate triggers edge server alerts',
      'Google Postmaster score drops from High to Bad',
      'Sequences land in spam; rep reply rates collapse to near zero',
    ],
  },
  {
    title: 'Giggal-Protected Outreach Flow',
    status: 'Verified Primary Inbox Placement',
    border: 'border-emerald-300 bg-emerald-50/40 shadow-sm',
    badgeClass: 'bg-emerald-100 text-emerald-800 font-bold',
    steps: [
      'Raw lead list verified via Giggal bulk API or upload',
      'Catch-all addresses resolved to clear valid or invalid status',
      'Invalid contacts, spam traps, and role addresses removed',
      'Clean contacts sequenced across warmed secondary inboxes',
      'Bounce rate stays under 0.8%; sequences land in primary inbox',
    ],
  },
]

const integrations = [
  { name: 'Outreach.io', category: 'Sales Engagement', desc: 'Sync verified contacts directly into active sequences and remove invalid addresses automatically.' },
  { name: 'Salesloft', category: 'Sales Engagement', desc: 'Protect cadence deliverability by validating prospect data before scheduling email steps.' },
  { name: 'HubSpot Sales Hub', category: 'CRM & Sequencing', desc: 'Maintain clean CRM contact hygiene so reps never trigger provider spam warnings.' },
  { name: 'Apollo.io', category: 'Lead Generation', desc: 'Scrub scraped and enriched lists to identify valid mailboxes on catch-all domains.' },
  { name: 'Google Workspace', category: 'Email Infrastructure', desc: 'Comply with 2026 Google bulk sender guidelines, SPF/DKIM alignment, and 0.3% spam rules.' },
  { name: 'Microsoft 365', category: 'Email Infrastructure', desc: 'Pass Exchange Online Protection and SmartScreen filters with verified mailbox records.' },
]

const metrics = [
  { value: '< 1.0%', label: 'Hard Bounce Rate', caption: 'Kept well below the 2% ISP penalty threshold' },
  { value: '+32%', label: 'More Deliverable Leads', caption: 'Recover valid contacts other tools mark risky' },
  { value: '99.2%', label: 'Inbox Placement', caption: 'Maintain high reputation across Google and Microsoft' },
  { value: '1,000', label: 'Free Trial Credits', caption: 'Verify your first sequence batch with no credit card' },
]

const faqs: FaqItem[] = [
  {
    q: 'How does Giggal.ai improve Outreach.io deliverability?',
    a: 'Giggal.ai acts as a pre-sequence safety net. By verifying email lists before they enter an Outreach cadence, Giggal removes defunct mailboxes, syntax errors, and spam traps. It also resolves catch-all domains to valid or invalid, preventing the hard bounces that trigger Google and Microsoft spam filters.',
  },
  {
    q: 'What bounce rate threshold should our team maintain in Outreach?',
    a: 'For cold outbound sequences, keep your hard bounce rate strictly below 1.0%. While marketing newsletters with opt-in subscribers can tolerate up to 2%, cold sequences sent from sales engagement platforms are monitored aggressively by receiving mail transfer agents. Exceeding 1.5% leads to domain reputation downgrades and throttling.',
  },
  {
    q: 'Why do my cold emails suddenly start landing in spam?',
    a: 'Sudden spam placement is usually caused by three factors: a bounce rate climbing over 1-2%, user-reported spam complaints exceeding Google\'s 0.3% limit, or sending from a shared open-tracking pixel that was blacklisted by another user. Giggal helps eliminate bad data and guides you on setting up dedicated tracking domains.',
  },
  {
    q: 'How does Giggal verify catch-all addresses that other tools mark as unknown?',
    a: 'Catch-all domains accept all inbound mail connections at the boundary server, making standard ping checks inconclusive. Giggal analyzes deep mailbox signals, domain trust headers, and gateway signatures to determine whether an active user inbox exists behind the address, delivering 98.5% accuracy.',
  },
  {
    q: 'Can we clean lead lists before importing them into Outreach?',
    a: 'Yes. You can upload CSV files directly to our bulk email verifier or connect through our API. Giggal processes the file, separates valid contacts from invalid and toxic addresses, and returns a clean list ready for immediate import into Outreach, Salesloft, or HubSpot.',
  },
  {
    q: 'Does catch-all verification cost extra credits?',
    a: 'No. Giggal uses flat, transparent pricing. Every verification—including deep catch-all checks and gateway-protected mailboxes—costs exactly 1 credit per email. Unknown results are refunded automatically.',
  },
]

export default function OutreachDeliverabilityPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Outreach Deliverability', CANONICAL)} />
      <JsonLd data={softwareLd} />
      <JsonLd data={faqPageLd(faqs)} />

      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 w-[920px] h-[720px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_65%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 max-w-4xl mx-auto">
          Outreach Deliverability:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            Keep Cold Sequences Out of Spam
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          When cold emails hit dead addresses or unverified catch-alls, your bounce rate goes up and mailbox providers send your sequences to spam. Giggal verifies your prospect lists before you launch your Outreach campaigns, keeping your sender reputation safe and your emails in the primary inbox.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all duration-200"
          >
            Start Free with 1,000 Credits
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/bulk-email-verifier"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-300 transition-all duration-200"
          >
            Explore Bulk Verifier
          </Link>
        </div>

        <RatingChips className="pt-4" />
      </section>

      {/* ── DEDICATED TOOL ACCESS CARD ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-white via-slate-50/80 to-indigo-50/30 rounded-3xl border border-slate-200/90 p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                STANDALONE VERIFICATION TOOL
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Want to Test an Outreach Lead Before Sequencing?
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Our free standalone verification tool runs live checks directly in your browser. Test individual prospect addresses, inspect mail server responses, and resolve catch-all domains with clear valid or invalid results.
              </p>

              <div className="space-y-2.5 pt-1">
                {[
                  'Real mailbox handshakes without delivering actual emails',
                  'Conclusive catch-all resolution (98.5% measured accuracy)',
                  'Instant MX record, syntax, and disposable domain inspection',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <Link
                  href="/email-checker"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all duration-200"
                >
                  Open Free Email Checker
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/catch-all-verification"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 transition-all duration-200"
                >
                  Catch-All Verification Guide
                </Link>
              </div>

              <p className="text-xs text-slate-400 font-medium">
                Free online checks. No signup or credit card required.
              </p>
            </div>

            {/* Right Product Preview Mockup */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 blur-lg opacity-60 group-hover:opacity-100 transition duration-300" />
                <div className="relative">
                  <ProductPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Review Badges */}
      <AwardRow />

      {/* ── METRIC BENCHMARKS ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
              <p className="text-3xl md:text-4xl font-black text-indigo-600 tracking-tight">{m.value}</p>
              <p className="text-sm font-bold text-slate-900 mt-1">{m.label}</p>
              <p className="text-xs text-slate-500 mt-1 font-medium">{m.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE PROBLEM: WHY OUTREACH SEQUENCES HIT SPAM ────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">THE REPUTATION CHALLENGE</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why High-Volume Outreach Sequences Get Flagged
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Mailbox providers like Google Workspace and Microsoft 365 analyze domain sending patterns in real time. Without defensive list cleaning, small technical flaws quickly damage your sender reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {riskPoints.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${item.color}`}>
                  <item.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW COMPARISON ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">CADENCE ARCHITECTURE</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Unprotected Sequences vs. The Giggal Safety Net
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            See what happens when lead lists bypass validation compared to sequences protected by deep mailbox verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workflowComparison.map((wf) => (
            <div key={wf.title} className={`rounded-2xl border p-8 space-y-6 ${wf.border}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">{wf.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${wf.badgeClass}`}>
                  {wf.status}
                </span>
              </div>
              <ul className="space-y-3.5">
                {wf.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-[11px] font-bold text-slate-700 shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE 4-PILLAR SAFETY NET ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">SOLUTION BLUEPRINT</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Giggal Protects Your Outreach Deliverability
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            A structured framework designed to maintain sub-1% bounce rates and safeguard your domain reputation across enterprise sales platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyNetPillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                  <p.Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-md">
                  {p.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORM INTEGRATIONS ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">COMPATIBILITY</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for Your Modern Outbound Stack
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Connect Giggal verification with your preferred sales engagement tools, CRM systems, and cold email automation platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((tool) => (
            <div key={tool.name} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {tool.category}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ACCORDION ───────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-10 space-y-2">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Outreach Deliverability Questions Answered
          </h2>
        </div>

        <FaqAccordion items={faqs} />
      </section>

      {/* ── BOTTOM CTA BAND ─────────────────────────────────────── */}
      <AltCtaBand
        headline="Ready to protect your Outreach sequences from spam?"
        supporting="Verify your prospect lists with conclusive valid/invalid results, keep bounce rates under 1%, and reach real inboxes."
        buttonText="Get 1,000 Free Verifications"
      />

      <Footer />
    </main>
  )
}
