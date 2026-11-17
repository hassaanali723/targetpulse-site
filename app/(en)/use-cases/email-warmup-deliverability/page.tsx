import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import RatingChips from '@/components/landing/RatingChips'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight, ArrowUpRight, Check, Minus,
  Play, ExternalLink,
} from 'lucide-react'

const CANONICAL = '/use-cases/email-warmup-deliverability'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Warmup & SDR Onboarding Deliverability',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Email Deliverability and Verification',
  operatingSystem: 'Web',
  description:
    'Protect new SDR mailboxes during email domain warmup. Follow a safe 4-week ramp schedule, align SPF, DKIM, and DMARC, and verify every prospect list before sending.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Pre-warmup prospect list verification to keep bounces below 1%',
    'Direct catch-all corporate mailbox validation with 98.5% accuracy',
    '4-week SDR mailbox ramp-up schedule and sending caps',
    'Free SPF, DKIM, DMARC, and bounce rate diagnostic tools',
    '1,000 free verification credits without credit card',
  ],
}

const rampTimeline = [
  {
    week: 'Week 1',
    cap: '5–10 / day',
    accent: 'bg-sky-500',
    pill: 'bg-sky-50 text-sky-700',
    barHeight: 'h-8',
    label: 'Authenticate & seed',
    detail: 'Verify SPF, DKIM, and DMARC. Send only to teammates, partners, or warm contacts.',
  },
  {
    week: 'Week 2',
    cap: '15–20 / day',
    accent: 'bg-indigo-500',
    pill: 'bg-indigo-50 text-indigo-700',
    barHeight: 'h-14',
    label: 'First verified batch',
    detail: 'Introduce a small cold cohort. Every address must be verified valid with 0 bounces.',
  },
  {
    week: 'Week 3',
    cap: '25–35 / day',
    accent: 'bg-violet-500',
    pill: 'bg-violet-50 text-violet-700',
    barHeight: 'h-20',
    label: 'Verify catch-alls',
    detail: 'Test accept-all corporate domains directly before enrolling prospects into sequences.',
  },
  {
    week: 'Week 4+',
    cap: '35–45 / day',
    accent: 'bg-emerald-500',
    pill: 'bg-emerald-50 text-emerald-700',
    barHeight: 'h-24',
    label: 'Full SDR cadence',
    detail: 'Run steady outbound volume while keeping hard bounces below 1% and complaints under 0.3%.',
  },
]

const keyNumbers = [
  { value: '14–28d', label: 'Safe warmup window for fresh domains' },
  { value: '35–45', label: 'Max daily cold sends per SDR inbox' },
  { value: '< 1.0%', label: 'Hard bounce ceiling during ramp-up' },
  { value: '98.5%', label: 'Catch-all mailbox verification accuracy' },
]

const warmupPitfalls = [
  {
    num: '01',
    dot: 'bg-rose-500',
    title: 'Blasting full volume in week one',
    body: 'Brand-new email accounts carry zero sender history. When a newly hired SDR sends 100 cold emails on day one, Gmail and Outlook flag the spike and throttle the entire domain.',
  },
  {
    num: '02',
    dot: 'bg-amber-500',
    title: 'Undoing weeks of warmup with hard bounces',
    body: 'Teams warm an inbox patiently for three weeks, then import an unverified lead list. Even a 4% bounce rate on a fresh mailbox can tank domain reputation overnight.',
  },
  {
    num: '03',
    dot: 'bg-indigo-500',
    title: 'Relying on automated warmup tools alone',
    body: 'Automated email warmup services build early engagement signals between test inboxes. They cannot stop dead addresses, spam traps, or bad catch-alls from bouncing when live outreach begins.',
  },
  {
    num: '04',
    dot: 'bg-violet-500',
    title: 'Skipping SPF, DKIM, and DMARC before day one',
    body: 'Warming an unauthenticated domain wastes weeks. Add valid SPF, 2048-bit DKIM, and a DMARC record before the first message leaves the inbox.',
  },
]

const comparisonRows = [
  {
    capability: 'Builds initial sending activity on fresh mailboxes',
    warmup: true,
    giggal: false,
    note: 'Warmup tools exchange test replies',
  },
  {
    capability: 'Verifies whether real B2B prospect addresses exist',
    warmup: false,
    giggal: true,
    note: 'Prevents bounces before sequences run',
  },
  {
    capability: 'Checks catch-all corporate domains directly (98.5% accuracy)',
    warmup: false,
    giggal: true,
    note: 'Recovers valid enterprise leads safely',
  },
  {
    capability: 'Stops dead leads and spam traps from ruining warmup',
    warmup: false,
    giggal: true,
    note: 'Keeps live SDR bounce rates under 1%',
  },
  {
    capability: 'Free SPF, DKIM, DMARC, and bounce diagnostics',
    warmup: false,
    giggal: true,
    note: 'Ready to check before day one',
  },
]

const onboardingSteps = [
  {
    step: '01',
    title: 'Isolate secondary domains',
    body: 'Keep cold SDR email traffic off your core company domain. Set up SPF, DKIM, and DMARC on lookalike sending domains first.',
  },
  {
    step: '02',
    title: 'Ramp slowly over 2–4 weeks',
    body: 'Start at 5 to 10 sends a day using warm conversations or an email warmup tool. Increase daily caps gradually.',
  },
  {
    step: '03',
    title: 'Verify every prospect list',
    body: 'Run every lead export through Giggal before reps enroll contacts into Outreach, Salesloft, or HubSpot.',
  },
  {
    step: '04',
    title: 'Hold caps and watch Postmaster',
    body: 'Stay under 45 cold emails per inbox daily and check Google Postmaster Tools weekly for any early complaint shifts.',
  },
]

const videoGuides = [
  {
    tag: 'Part 1 · DNS Setup Before Warmup',
    title: 'How To Set Up Google Workspace SPF, DKIM & DMARC',
    channel: 'Stewart Gauld',
    videoId: 'fsZaEce18FE',
    url: 'https://www.youtube.com/watch?v=fsZaEce18FE',
    summary: 'Step-by-step setup of SPF, DKIM, and DMARC TXT records on Google Workspace before sending your first warmup email.',
  },
  {
    tag: 'Part 2 · How Warmup Works',
    title: 'Cold email warm-up explained',
    channel: 'Woodpecker.co',
    videoId: 'ELq-UBamobw',
    url: 'https://www.youtube.com/watch?v=ELq-UBamobw',
    summary: 'Why new mailboxes hit spam filters, how gradual email warmup builds sender reputation, and what to avoid early on.',
  },
]

const relatedLinks = [
  {
    name: 'How Long to Warm Up an Email Domain',
    href: '/blog/how-long-to-warm-up-email-domain',
    kind: 'Guide',
    desc: 'Week-by-week timeline for aging fresh domains and mailboxes.',
  },
  {
    name: 'Safeguarding Domain Health',
    href: '/use-cases/safeguarding-domain-health',
    kind: 'Use Case',
    desc: 'Monitor sender scores, Postmaster limits, and secondary domains.',
  },
  {
    name: 'Outreach Deliverability',
    href: '/use-cases/outreach-email-deliverability',
    kind: 'Use Case',
    desc: 'Keep cold sequences in Outreach.io and Salesloft out of spam.',
  },
  {
    name: 'SPF Record Checker',
    href: '/spf-checker',
    kind: 'Tool',
    desc: 'Verify SPF syntax and lookup limits on new sending domains.',
  },
  {
    name: 'DKIM Generator',
    href: '/dkim-generator',
    kind: 'Tool',
    desc: 'Generate 2048-bit DKIM keys for outbound authentication.',
  },
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    kind: 'Tool',
    desc: 'Check if early SDR campaign bounces stay under safe thresholds.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'What is email warmup and how long does it take?',
    a: 'Email warmup is the practice of gradually raising daily sending volume on a new mailbox so Gmail and Outlook learn to trust it. For a brand-new domain, plan on 14 to 28 days of steady ramp-up before launching full cold outreach cadences.',
  },
  {
    q: 'Does Giggal offer an automated email warmup pool?',
    a: 'No. Giggal is an email verification and deliverability platform, not a peer-to-peer warmup reply pool. Sales teams pair Giggal with their warmup schedule to verify prospect lists and resolve catch-all domains so real campaigns never bounce.',
  },
  {
    q: 'Can you do free email warmup manually without paid tools?',
    a: 'Yes. If you are onboarding one or two SDRs, manual warmup works reliably. Send 5 to 10 genuine emails a day to teammates, partners, and opted-in contacts who reply naturally, then introduce small batches of verified prospects over three to four weeks.',
  },
  {
    q: 'How many cold emails should a new SDR send per day?',
    a: 'After completing a 3 to 4 week ramp, cap each warmed inbox at 35 to 45 cold emails per day. Need more volume? Spread sends across multiple warmed mailboxes on secondary domains instead of pushing 150 emails from a single inbox.',
  },
  {
    q: 'Why do warmed mailboxes still hit spam once campaigns start?',
    a: 'Usually because of unverified lists. Warmup software only emails safe test inboxes, so nothing bounces during testing. The moment an SDR loads a scraped list with 5% invalid addresses and untested catch-alls, receiving servers penalize the fresh domain.',
  },
  {
    q: 'Should we warm up a secondary domain or our main company domain?',
    a: 'Always warm up dedicated secondary domains for cold outreach. Keeping cold SDR email separate from your main brand domain protects everyday team emails, support threads, and client invoices if an outbound test underperforms.',
  },
]

export default function EmailWarmupDeliverabilityPage() {
  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd('Email Warmup Deliverability', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />

      <Navbar />

      <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        {/* Minimal Breadcrumb */}
        <div className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
              <span>/</span>
              <span>Use Cases</span>
              <span>/</span>
              <span className="text-slate-700 font-medium">Email Warmup Deliverability</span>
            </nav>
          </div>
        </div>

        {/* EDITORIAL CENTERED HERO + VISUAL 4-WEEK RAMP TIMELINE */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-indigo-50/50 via-sky-50/20 to-transparent -z-10" />

          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              Email Warmup &amp; SDR Onboarding{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">
                Deliverability
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              New mailboxes start with zero trust. If a new SDR sends 100 cold emails on day one, Gmail and Outlook push the whole domain to spam. Pair a steady email warmup schedule with verified prospect lists so fresh inboxes land in the primary inbox.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={APP_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-slate-950 hover:bg-indigo-600 text-white font-semibold text-sm sm:text-base transition-colors duration-200 group"
              >
                Verify Your Warmup Lists Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#roadmap"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold text-sm sm:text-base transition-colors"
              >
                View 4-step ramp plan
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span>1,000 free verification credits</span>
              <span className="text-slate-300">·</span>
              <span>98.5% catch-all accuracy</span>
              <span className="text-slate-300">·</span>
              <span>No credit card needed</span>
            </div>
          </div>

          {/* Sleek Visual 4-Week Ramp Progression Strip */}
          <div className="mx-auto max-w-6xl px-6 mt-16 lg:mt-20">
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    4-Week Mailbox Warmup Ramp
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Daily sending pace per newly created SDR inbox
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Target bounce rate &lt; 1.0% across all four weeks
                </span>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {rampTimeline.map((item, idx) => (
                  <div key={idx} className="flex flex-col justify-between">
                    <div>
                      <div className="h-28 flex items-end pb-4 border-b border-slate-100">
                        <div className="w-full flex items-end justify-between gap-3">
                          <div className={`w-12 rounded-t-xl ${item.accent} ${item.barHeight} transition-all`} />
                          <div className="text-right">
                            <div className="text-xs font-semibold text-slate-400">{item.week}</div>
                            <span className={`mt-1 inline-block text-xs font-bold px-2.5 py-0.5 rounded-full ${item.pill}`}>
                              {item.cap}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-4 text-sm font-bold text-slate-900">{item.label}</h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <RatingChips />
            </div>
          </div>
        </section>

        {/* MINIMAL TYPOGRAPHIC METRICS BAR (HAIRLINE DIVIDERS, NO BOXES) */}
        <section className="border-y border-slate-100 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x lg:divide-slate-200/80">
              {keyNumbers.map((stat, idx) => (
                <div key={idx} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-snug max-w-[14rem]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ASYMMETRIC STICKY EDITORIAL LIST: WHY NEW MAILBOXES STALL */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
                  Why new SDR mailboxes fail during email warmup
                </h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Most domain blacklistings happen in the first 30 days. Skipping any of these four basics turns weeks of patient ramp-up into spam-folder placement.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-100 border-t border-slate-100">
                {warmupPitfalls.map((item) => (
                  <div key={item.num} className="py-7 first:pt-6">
                    <div className="flex items-start gap-4">
                      <span className="mt-2 w-2.5 h-2.5 rounded-full shrink-0 ring-4 ring-slate-50" >
                        <span className={`block w-2.5 h-2.5 rounded-full ${item.dot}`} />
                      </span>
                      <div>
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-xs font-mono font-semibold text-slate-400">{item.num}</span>
                          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLEAN SCANNABLE COMPARISON TABLE: WARMUP TOOLS VS GIGGAL */}
        <section className="py-20 lg:py-24 bg-slate-50/70 border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Email warmup tools vs. email verification
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Warmup software and verification handle two different jobs. Using both together keeps fresh SDR domains safe once live outreach starts.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200/80 bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500">
                      <th className="py-4 px-6 font-semibold">Capability</th>
                      <th className="py-4 px-6 font-semibold text-center w-40">Warmup Tools</th>
                      <th className="py-4 px-6 font-semibold text-center w-40 text-indigo-700 bg-indigo-50/50">Giggal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-semibold text-slate-900">{row.capability}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{row.note}</div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row.warmup ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-600">
                              <Check className="w-4 h-4" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-400">
                              <Minus className="w-4 h-4" />
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center bg-indigo-50/20">
                          {row.giggal ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white">
                              <Check className="w-4 h-4" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-400">
                              <Minus className="w-4 h-4" />
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* HORIZONTAL CONNECTED 4-STEP RAMP TRACK */}
        <section id="roadmap" className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Four steps to warm up an email domain safely
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Repeat this clean sequence whenever you spin up secondary domains or onboard a new sales rep.
              </p>
            </div>

            <div className="mt-14 relative">
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-slate-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                {onboardingSteps.map((s) => (
                  <div key={s.step} className="relative">
                    <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 font-mono text-xs font-bold">
                      {s.step}
                    </div>
                    <h3 className="mt-5 text-base font-bold text-slate-950">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TWO CLEAN VIDEO WALKTHROUGHS (NOFOLLOW, MINIMAL MEDIA CARDS) */}
        <section className="py-20 lg:py-24 bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Two short walkthroughs to get the fundamentals right
              </h2>
              <p className="mt-3 text-base text-slate-400">
                Lock in DNS authentication first, then understand how mailbox warming builds steady sender trust over time.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {videoGuides.map((vid, idx) => (
                <div key={idx} className="group flex flex-col">
                  <a
                    href={vid.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={`Watch ${vid.title} on YouTube`}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 ring-1 ring-white/10 block"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${vid.videoId}/hqdefault.jpg`}
                      alt={`${vid.title} video thumbnail`}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-slate-950/25 group-hover:bg-slate-950/10 transition-colors">
                      <span className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </span>
                    </span>
                  </a>

                  <div className="mt-5 flex items-center gap-2 text-xs text-indigo-300 font-medium">
                    <span>{vid.tag}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{vid.channel}</span>
                  </div>

                  <h3 className="mt-1.5 text-lg font-bold text-white leading-snug">
                    {vid.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {vid.summary}
                  </p>

                  <a
                    href={vid.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-indigo-300 transition-colors w-fit"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPACT HAIRLINE INDEX: RELATED GUIDES & FREE TOOLS */}
        <section className="py-20 lg:py-24 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200/80">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                  Related guides and free tools
                </h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  Check DNS records and bounce thresholds before starting SDR sequences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-x-12">
              {relatedLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="py-5 border-b border-slate-100 flex items-start justify-between gap-4 group"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {item.kind}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-1 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ASYMMETRIC FAQ SECTION */}
        <section className="py-20 lg:py-24 bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">
                  Frequently asked questions
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Direct answers on email warmup timelines, daily SDR limits, and keeping new sending domains safe.
                </p>
              </div>
              <div className="lg:col-span-8">
                <FaqAccordion items={faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* PRE-FOOTER CTA BAND */}
        <AltCtaBand
          headline="Protect your new SDR mailboxes before launch"
          supporting="Start with 1,000 free verification credits. Clean your prospect lists, verify catch-all domains, and keep hard bounces under 1% from week one."
          buttonText="Verify Your Warmup Lists Free"
        />
      </main>

      <Footer />
    </>
  )
}
