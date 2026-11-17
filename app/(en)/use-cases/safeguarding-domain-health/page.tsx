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
  ShieldCheck, AlertCircle, ArrowRight,
  Server, MailCheck, Globe, Activity, Check, Zap,
  SlidersHorizontal, RefreshCw, BarChart3, Lock,
  FileCheck2, ShieldAlert, Cpu, EyeOff, Radio
} from 'lucide-react'

const CANONICAL = '/use-cases/safeguarding-domain-health'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Domain Health and Reputation Solution',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Domain Reputation and Deliverability',
  operatingSystem: 'Web',
  description:
    'Protect email domain reputation and sender score. Verify prospect lists, audit SPF, DKIM, and DMARC authentication, and stop spam complaints before outbound campaigns launch.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Domain reputation monitoring and sender score protection',
    'Pre-send prospect list verification to eliminate hard bounces',
    'Catch-all and accept-all mailbox validation with 98.5% precision',
    'DNS authentication audit for SPF, 2048-bit DKIM, and DMARC alignment',
    'Secondary sending domain architecture and inbox isolation guidance',
    '1,000 free verification credits without credit card',
  ],
}

const threatFactors = [
  {
    Icon: AlertCircle,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    title: 'Hard Bounces from Defunct Addresses',
    body: 'Sending cold sequences to abandoned or invalid inboxes immediately signals poor list hygiene to receiving mail systems. Exceeding a 2% bounce rate triggers automated domain throttling and routes future outreach to the spam tab.',
  },
  {
    Icon: Activity,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    title: 'Spam Complaints Above 0.3%',
    body: 'Google Workspace and Yahoo enforce an automated 0.3% spam complaint limit. When prospects hit "Report Spam" due to poor targeting or scraped lists, your domain score drops across the entire receiving network.',
  },
  {
    Icon: Globe,
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    title: 'Mismatched DNS Authentication',
    body: 'Missing SPF records, unaligned DKIM keys, or weak DMARC policies cause receiving mail servers to treat your domain as spoofed. Major mailbox providers reject or quarantine unauthenticated senders by default.',
  },
  {
    Icon: ShieldAlert,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    title: 'Primary Domain Contamination',
    body: 'Running high-volume sales cadences on your core brand domain puts regular business operations at risk. Once your primary domain loses sender trust, critical day-to-day emails like invoices and contracts fail to reach inboxes.',
  },
]

const protectionPillars = [
  {
    Icon: MailCheck,
    badge: 'Step 1',
    title: 'Pre-Send List Verification',
    body: 'Scrub dead addresses, typo errors, and inactive inboxes before scheduling outbound batches. Keep your campaign bounce rate strictly under 1.0% to protect your domain reputation score.',
  },
  {
    Icon: Zap,
    badge: 'Step 2',
    title: 'Direct Catch-All Mailbox Testing',
    body: 'Catch-all servers accept all incoming messages on the surface, making them difficult to verify. Giggal tests individual recipient mailboxes directly with 98.5% precision so you can send without fear of hidden bounces.',
  },
  {
    Icon: Lock,
    badge: 'Step 3',
    title: 'DNS Authentication Alignment',
    body: 'Verify that your SPF includes the correct sending IPs, your DKIM keys use 2048-bit encryption, and your DMARC policy enforces quarantine or reject. Proper record alignment validates your sender identity.',
  },
  {
    Icon: Radio,
    badge: 'Step 4',
    title: 'Reputation & Blocklist Monitoring',
    body: 'Track Google Postmaster metrics, monitor sender score fluctuations, and verify that your sending IPs and domains stay off major DNS blocklists like Spamhaus and Barracuda.',
  },
]

const domainComparison = [
  {
    title: 'Unprotected Sending Practice',
    status: 'High Domain Risk',
    border: 'border-rose-200 bg-rose-50/40',
    badgeClass: 'bg-rose-100 text-rose-800',
    points: [
      'Cold campaigns sent directly from primary company domain',
      'Unverified prospect lists result in 5% to 8% bounce rates',
      'Spam complaints exceed 0.3%, degrading Google Postmaster score',
      'Internal team emails, meeting invites, and invoices go to spam',
      'Recovery takes months of tedious mailbox warming and cleanup',
    ],
  },
  {
    title: 'Giggal Safeguarded Strategy',
    status: 'Healthy & Isolated Domain Standing',
    border: 'border-emerald-300 bg-emerald-50/40 shadow-sm',
    badgeClass: 'bg-emerald-100 text-emerald-800 font-bold',
    points: [
      'Cold outreach conducted across isolated secondary sending domains',
      'Every lead list verified before launch; bounces stay below 0.8%',
      'Catch-all emails resolved to clear valid or invalid status',
      'SPF, DKIM, and DMARC aligned across all outbound sending addresses',
      'Primary domain stays completely safe for daily operations',
    ],
  },
]

const freeTools = [
  {
    name: 'SPF Record Checker',
    href: '/spf-checker',
    desc: 'Audit your SPF syntax and check for duplicate lookups or syntax mistakes that break verification.',
    tag: 'Authentication',
  },
  {
    name: 'DKIM Generator',
    href: '/dkim-generator',
    desc: 'Create secure 2048-bit DKIM keys to sign outbound messages and confirm sender authenticity.',
    tag: 'Security',
  },
  {
    name: 'DMARC Generator',
    href: '/dmarc-generator',
    desc: 'Generate aligned DMARC policies with custom reporting to prevent spoofing and domain misuse.',
    tag: 'Policy',
  },
  {
    name: 'MX Lookup Tool',
    href: '/mx-lookup',
    desc: 'Inspect mail exchange records and verify server response priority for any target domain.',
    tag: 'DNS Check',
  },
  {
    name: 'Email Checker',
    href: '/email-checker',
    desc: 'Verify individual email addresses in real time to test mailbox existence and catch-all status.',
    tag: 'Validation',
  },
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    desc: 'Calculate campaign bounce rates and verify whether your list meets ISP safety standards.',
    tag: 'Analytics',
  },
]

const metrics = [
  { value: '8,400+', label: 'Monthly Searches', caption: 'Teams actively seeking domain reputation protection' },
  { value: '< 1.0%', label: 'Target Bounce Rate', caption: 'Well under the 2% threshold that damages domain health' },
  { value: '< 0.1%', label: 'Spam Complaint Rate', caption: 'Kept safely below the Google and Yahoo 0.3% penalty mark' },
  { value: '1,000', label: 'Free Trial Credits', caption: 'Check your domain lists with no credit card required' },
]

const faqs: FaqItem[] = [
  {
    q: 'How do I check my email domain reputation?',
    a: 'You can check your domain reputation by monitoring Google Postmaster Tools, examining your bounce rate analytics, and reviewing your sender score on major reputation databases. Google Postmaster divides domain reputation into Bad, Low, Medium, and High based on authenticated spam complaint rates and delivery volume.',
  },
  {
    q: 'What causes a drop in email domain reputation?',
    a: 'Domain reputation drops when your messages trigger spam signals. The most common causes are high hard bounce rates from unverified lead lists, recipient spam complaints exceeding 0.3%, missing or invalid SPF and DKIM records, sudden spikes in cold email volume, and sending to dormant spam traps.',
  },
  {
    q: 'How long does it take to repair a damaged domain reputation?',
    a: 'Repairing a damaged sending domain typically takes two to six weeks depending on the severity of the drop. You must pause cold sequences immediately, scrub your entire database with an email verification tool, resolve all DNS authentication errors, and rebuild volume gradually through consistent, warm engagement.',
  },
  {
    q: 'Why should sales teams use secondary domains for cold outreach?',
    a: 'Using secondary domains protects your core business domain from outbound risks. If a cold campaign triggers high bounce rates or spam complaints on a secondary domain, your primary corporate email remains healthy, ensuring day-to-day employee communications, client updates, and operational messages continue to reach the inbox.',
  },
  {
    q: 'What is the difference between IP reputation and domain reputation?',
    a: 'IP reputation measures the trustworthiness of the specific server sending your email, while domain reputation tracks the brand domain found in the From header. Modern mailbox providers like Google and Microsoft prioritize domain reputation over IP reputation, meaning that switching sending servers will not hide a damaged domain score.',
  },
  {
    q: 'How does Giggal help safeguard domain health?',
    a: 'Giggal protects domain health at the source by verifying prospect email lists before you send. By removing invalid mailboxes, detecting disposable addresses, and testing catch-all inboxes directly, Giggal keeps your bounce rate below 1.0% and prevents the delivery failures that degrade your sender score.',
  },
]

export default function SafeguardingDomainHealthPage() {
  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd('Safeguarding Domain Health', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />

      <Navbar />

      <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
        {/* Breadcrumb row */}
        <div className="border-b border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-500">Use Cases</span>
              <span>/</span>
              <span className="text-slate-800 font-medium">Safeguarding Domain Health</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/70 via-white to-slate-50/50" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                  Safeguarding Domain Health & Sender Reputation
                </h1>

                <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  When your sending domain gets flagged by Gmail or Outlook, your messages go straight to spam before anyone reads them. Giggal helps outbound sales teams monitor sender reputation signals, verify prospect data, and fix authentication errors before launching cold campaigns.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 group"
                  >
                    Run Domain Health Check
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#diagnostic-tools"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base transition-colors"
                  >
                    Explore Diagnostic Tools
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Google Postmaster Compatible
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    SPF, DKIM & DMARC Aligned
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    1,000 Free Verifications Included
                  </span>
                </div>
              </div>

              {/* Interactive Domain Health Scorecard Mockup */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-bold text-slate-800">Domain Health Scorecard</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Score: 96 / 100
                    </span>
                  </div>

                  <div className="mt-5 space-y-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileCheck2 className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="text-xs font-bold text-slate-800">SPF Record</div>
                          <div className="text-[11px] text-slate-500">v=spf1 include:_spf.google.com ~all</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                        Valid
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="text-xs font-bold text-slate-800">DKIM Authentication</div>
                          <div className="text-[11px] text-slate-500">2048-bit RSA key signature aligned</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                        Aligned
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="text-xs font-bold text-slate-800">DMARC Policy</div>
                          <div className="text-[11px] text-slate-500">p=quarantine; pct=100; rua reports active</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                        Enforced
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="text-xs font-bold text-slate-800">Spam Complaint Rate</div>
                          <div className="text-[11px] text-slate-500">0.03% (Threshold ceiling: 0.3%)</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                        Low Risk
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Blocklist status: Clean across 52 DNSBLs</span>
                    <span className="font-semibold text-indigo-600">Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-100">
              <RatingChips />
            </div>
          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="py-10 bg-slate-50/60 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                  <div className="text-3xl font-extrabold text-indigo-600 tracking-tight">{m.value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-800">{m.label}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{m.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE 4 DOMAIN THREATS SECTION */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Risk Factors</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Why Sending Domains Lose Reputation
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Mailbox algorithms do not make random placement decisions. These four operational mistakes are responsible for over 90% of domain reputation drops.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {threatFactors.map((item, i) => (
                <div key={i} className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOMAIN STRATEGY: ROOT VS SECONDARY */}
        <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Infrastructure Blueprint</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Primary vs Secondary Domain Architecture
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Experienced sales teams never run cold outbound campaigns on their primary corporate domain. Compare the risks of unsegmented sending against a protected multi-domain setup.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {domainComparison.map((box, i) => (
                <div key={i} className={`p-7 rounded-2xl border ${box.border} flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{box.title}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full ${box.badgeClass}`}>
                        {box.status}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3.5">
                      {box.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start text-sm text-slate-700 gap-2.5">
                          {i === 0 ? (
                            <AlertCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                          ) : (
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          )}
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/60">
                    <div className="text-xs text-slate-500">
                      {i === 0
                        ? 'Outcome: Inbox throttling, reduced reply rates, and operational disruption.'
                        : 'Outcome: Predictable delivery, primary inbox placement, and protected brand trust.'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 PROTECTION PILLARS */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">The Solution</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                How Giggal Protects Your Sending Reputation
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                A structured four-step methodology to maintain pristine domain health across all your outreach channels.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {protectionPillars.map((pillar, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <pillar.Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50/70 px-2 py-0.5 rounded">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE DIAGNOSTIC TOOLS SECTION */}
        <section id="diagnostic-tools" className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Free Utilities</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Domain Health & Reputation Diagnostic Tools
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Use our suite of free deliverability and authentication tools to check your domain health records and identify configuration errors.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeTools.map((t, idx) => (
                <Link
                  key={idx}
                  href={t.href}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        {t.tag}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Answers</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Clear answers regarding email domain reputation checks, sender score maintenance, and deliverability recovery.
              </p>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* PRE-FOOTER CTA BAND */}
        <AltCtaBand
          headline="Safeguard Your Sending Domain Today"
          supporting="Test your prospect lists with 1,000 free verifications. Keep bounce rates under 1.0% and protect your sender reputation across every outbound campaign."
          buttonText="Start Free Verification"
        />
      </main>

      <Footer />
    </>
  )
}
