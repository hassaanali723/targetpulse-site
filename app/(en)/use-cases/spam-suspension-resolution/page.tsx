import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SendingInboxesNote from '@/components/verify-for/SendingInboxesNote'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight, ArrowUpRight,
  Clock, Play, ExternalLink,
  Terminal, Ban,
} from 'lucide-react'

const CANONICAL = '/use-cases/spam-suspension-resolution'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email Blacklist & Spam Suspension Recovery Solution',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Email Deliverability and Blacklist Removal',
  operatingSystem: 'Web',
  description:
    'Step-by-step recovery playbook for Spamhaus blacklists and Google Workspace spam suspensions. Audit bounce logs, clean prospect data, and restore domain sender trust.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Spamhaus, Barracuda, and DNS blocklist triage playbook',
    'Pre-appeal prospect list verification to eliminate spam traps and bounces',
    'Direct catch-all mailbox testing with 98.5% precision',
    'Google Workspace bulk abuse suspension root-cause recovery',
    'Free SPF, DKIM, DMARC, and bounce rate diagnostics',
    '1,000 free verification credits without credit card',
  ],
}

const emergencyProtocol = [
  {
    step: '1',
    action: 'Halt active sequences',
    why: 'Sending more mail from a flagged domain escalates temporary blocks into permanent bans.',
  },
  {
    step: '2',
    action: 'Identify the listing',
    why: 'Check whether the block is on Spamhaus (DBL/SBL), Barracuda, or receiver-specific DNSBLs.',
  },
  {
    step: '3',
    action: 'Inspect bounce codes',
    why: 'Review 550 5.7.1 rejections and complaint spikes to isolate the campaign that caused the issue.',
  },
  {
    step: '4',
    action: 'Purge bad prospect data',
    why: 'Delisting requests fail immediately if postmasters detect dirty data on your domain.',
  },
]

const errorCodes = [
  {
    code: '550 5.7.1 Service unavailable',
    trigger: 'Spamhaus ZEN or Microsoft 365 blocklist',
    impact: 'Exchange and M365 mailboxes reject mail at gateway',
    fix: 'Pause sequences, scrub prospect list, request removal',
  },
  {
    code: 'Spamhaus DBL Listing',
    trigger: 'Pristine spam trap hit or sustained bounce spike',
    impact: 'Corporate mail gateways quarantine or drop messages',
    fix: 'Purge dead emails and risky catch-alls with Giggal',
  },
  {
    code: 'Google Workspace Bulk Spam Flag',
    trigger: 'Spam complaints passed 0.3% or rapid volume spike',
    impact: 'Mailboxes locked; outbound sending paused by Google',
    fix: 'Reset credentials, review logs, appeal via Admin Console',
  },
  {
    code: 'Barracuda / Invaluement Block',
    trigger: 'High outbound volume sent to unverified addresses',
    impact: 'B2B security filters drop cold messages before inbox',
    fix: 'Verify SPF/DKIM alignment, cap daily volume, file ticket',
  },
]

const timelineSteps = [
  {
    phase: 'Phase 1 · Day 1',
    title: 'Emergency Triage & Sequence Shutdown',
    body: 'Immediately pause all active outbound cadences across every mailbox. Export your 7-day bounce logs to identify the exact campaign and lead file that triggered the block.',
  },
  {
    phase: 'Phase 2 · Days 2–3',
    title: 'Root-Cause Data Scrubbing & DNS Audit',
    body: 'Blocklist operators will not grant delisting if toxic contacts remain. Upload your prospect database to Giggal to purge invalid emails and honeypots, then verify SPF and DKIM records.',
  },
  {
    phase: 'Phase 3 · Days 4–5',
    title: 'Submitting the Delisting Appeal',
    body: 'File a concise removal request through the official Spamhaus or receiver portal. Provide clear documentation of list cleanup and your updated daily sending caps.',
  },
  {
    phase: 'Phase 4 · Days 6–14',
    title: 'Controlled Re-Entry & Re-Warming',
    body: 'Resume sending slowly at 10 to 15 emails per day per mailbox. Track Google Postmaster Tools weekly to ensure your complaint rate stays firmly under 0.1%.',
  },
]

const rejectionWarnings = [
  {
    title: 'Appealing before cleaning your data',
    body: 'Postmasters monitor domain activity immediately after removal. Sending to unverified contacts causes instant re-listing with zero second chances.',
  },
  {
    title: 'Switching to fresh domains with old lists',
    body: 'Moving dirty prospect data to a new domain triggers the same spam traps within days, burning new domains and wasting budget.',
  },
  {
    title: 'Gambling on unverified catch-alls',
    body: 'Over 30% of corporate addresses accept all mail. Untested catch-alls conceal honeypots that quietly trigger domain-level penalties.',
  },
  {
    title: 'Ignoring Google Postmaster complaint spikes',
    body: 'Google enforces an automated 0.3% spam threshold. Crossing it triggers automated mailbox suspensions and domain quarantine.',
  },
]

const videoWalkthroughs = [
  {
    topic: 'Delisting Tutorial · Spamhaus & Error 550',
    title: 'How to Delist Your IP from Spamhaus FAST (Microsoft Office 365 Error 550 5.7.1)',
    channel: 'Microsoft & beyond',
    videoId: '_ksECX-K1GQ',
    url: 'https://www.youtube.com/watch?v=_ksECX-K1GQ',
    desc: 'Screen walkthrough showing how to diagnose Microsoft 365 error 550 5.7.1, check Spamhaus blocklist status, and submit a successful removal request step by step.',
  },
  {
    topic: 'Postmaster Guide · Monitoring Spam Rates',
    title: 'Google Postmaster Tools: Setup and Reading Your Spam Rate',
    channel: 'mailmark',
    videoId: 'Jnx6ylLN_lk',
    url: 'https://www.youtube.com/watch?v=Jnx6ylLN_lk',
    desc: 'Learn how to verify domain ownership inside Google Postmaster Tools, track your domain reputation score, and keep spam complaints safely under the 0.3% ceiling.',
  },
]

const diagnosticResources = [
  {
    name: 'How to Check if Domain is Blacklisted',
    href: '/blog/how-to-check-if-email-domain-is-blacklisted',
    kind: 'Guide',
    desc: 'Learn how to check DNSBL blocklists and verify whether your sending IP is flagged.',
  },
  {
    name: 'Safeguarding Domain Health',
    href: '/use-cases/safeguarding-domain-health',
    kind: 'Use Case',
    desc: 'Protect primary and secondary domains before cold sequences launch.',
  },
  {
    name: 'Email Warmup Deliverability',
    href: '/use-cases/email-warmup-deliverability',
    kind: 'Use Case',
    desc: 'Follow a 4-week ramp schedule to rebuild sender reputation after delisting.',
  },
  {
    name: 'SPF Record Checker',
    href: '/spf-checker',
    kind: 'Tool',
    desc: 'Verify that your sending IPs match your SPF record with zero lookup errors.',
  },
  {
    name: 'Email List Scrubbing',
    href: '/use-cases/email-list-scrubbing',
    kind: 'Use Case',
    desc: 'Purge spam traps, invalid addresses, and dead mailboxes before appealing.',
  },
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    kind: 'Tool',
    desc: 'Calculate campaign bounce rates to verify you meet the sub-1% postmaster ceiling.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'How do I know if my email domain is blacklisted?',
    a: 'Look for sudden delivery drops, spikes in 550 5.7.1 bounce codes, or mail rejected by Microsoft 365 and Google. You can confirm your status using free blacklist lookup tools across Spamhaus, Barracuda, and major DNSBLs.',
  },
  {
    q: 'How long does it take to get off Spamhaus or a DNS blocklist?',
    a: 'Most blocklist maintainers process removal requests within 24 to 48 hours once the root cause is resolved. For Spamhaus DBL listings, you must demonstrate that your lists were cleaned with a verification tool before removal is granted.',
  },
  {
    q: 'Why was my Google Workspace account suspended for spam?',
    a: 'Google suspends accounts when spam complaint rates pass 0.3%, daily sending exceeds 2,000 emails, or automated filters flag suspicious volume spikes. Workspace administrators can review logs and reactivate accounts in the Admin Console.',
  },
  {
    q: 'Can Giggal help with email blacklist removal?',
    a: 'Giggal resolves the root cause behind domain listings: invalid addresses, spam honeypots, and risky catch-alls. Cleaning your database with Giggal proves to postmasters that your list hygiene is fixed before you submit your appeal.',
  },
  {
    q: 'What should we do immediately after being blacklisted?',
    a: 'Immediately pause all active outreach sequences to prevent escalating temporary flags into permanent bans. Then export your bounce logs, verify SPF and DKIM records, clean your prospect lists, and submit an appeal.',
  },
  {
    q: 'How can our sales team avoid getting blacklisted again?',
    a: 'Never send cold email from your primary corporate domain. Use warmed secondary domains, cap daily volume at 35 to 45 emails per inbox, verify every list with Giggal prior to sending, and monitor Google Postmaster weekly.',
  },
]

export default function SpamSuspensionResolutionPage() {
  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd('Spam Suspension Resolution', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />

      <Navbar />

      <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        {/* Minimal Breadcrumb */}
        <div className="border-b border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
              <span>/</span>
              <span>Use Cases</span>
              <span>/</span>
              <span className="text-slate-700 font-medium">Spam Suspension Resolution</span>
            </nav>
          </div>
        </div>

        {/* HERO + EMERGENCY PROTOCOL */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-100">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-50/30 via-slate-50/20 to-transparent -z-10" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                  Email Blacklist &amp; Spam Suspension Recovery
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  If your domain was listed on Spamhaus or suspended by Google Workspace, sending more mail worsens the penalty. Halt active sequences, fix data hygiene, and restore sender trust with this step-by-step recovery guide.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/20 transition-all duration-200 group"
                  >
                    Verify Your Email Lists Free
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#playbook"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-semibold text-sm sm:text-base transition-colors"
                  >
                    View Delisting Playbook
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-medium">
                  <span>Covers Spamhaus, Barracuda &amp; DNSBLs</span>
                  <span className="text-slate-300">·</span>
                  <span>Google Workspace &amp; M365 Guidance</span>
                  <span className="text-slate-300">·</span>
                  <span>1,000 Free Clean Credits</span>
                </div>
              </div>

              {/* The First 30 Minutes Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-lg shadow-slate-200/50">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-bold text-slate-900">The First 30 Minutes</span>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                      Immediate Action
                    </span>
                  </div>

                  <div className="mt-4 space-y-3.5">
                    {emergencyProtocol.map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[11px] font-bold shrink-0 mt-0.5">
                          {item.step}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.action}</div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{item.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Rule: Always clean data before appealing</span>
                    <span className="font-semibold text-indigo-600">Step 1 first</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERROR CODE & BLOCKLIST DECODER TABLE */}
        <section className="py-14 lg:py-18 bg-slate-50/60 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                Decode your bounce codes and blocklist flags
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Inspect your bounce logs to understand why receiving mail servers rejected your outbound campaign.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/70 text-xs uppercase tracking-wider text-slate-600">
                      <th className="py-3 px-5 font-semibold">Error / Listing</th>
                      <th className="py-3 px-5 font-semibold">What Triggered It</th>
                      <th className="py-3 px-5 font-semibold">Operational Impact</th>
                      <th className="py-3 px-5 font-semibold">Required Remediation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {errorCodes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-5 font-mono text-xs font-bold text-slate-900 whitespace-nowrap">
                          {row.code}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-slate-600">
                          {row.trigger}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-slate-600">
                          {row.impact}
                        </td>
                        <td className="py-3.5 px-5 text-xs font-medium text-slate-800">
                          {row.fix}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CHRONOLOGICAL 4-PHASE RECOVERY TIMELINE */}
        <section id="playbook" className="py-16 lg:py-22">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  The 14-Day Roadmap
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 leading-tight">
                  Step-by-step email delisting playbook
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Recovering a blacklisted domain takes discipline. Follow this four-phase schedule to clean your data, file a successful appeal, and safely resume outbound outreach.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-100 border-t border-slate-100">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="py-6 first:pt-4">
                    <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                      {step.phase}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REJECTION WARNINGS: WHY APPEALS GET DENIED */}
        <section className="py-14 lg:py-18 bg-slate-50/70 border-y border-slate-100">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1.5">
                <Ban className="w-3.5 h-3.5" />
                Common Missteps
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                Why email delisting appeals get denied
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Blocklist administrators reject hundreds of removal requests daily. Avoid these four common missteps when submitting your appeal.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {rejectionWarnings.map((item, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO VERIFIED VIDEO WALKTHROUGHS (DARK SECTION, NOFOLLOW) */}
        <section className="py-16 lg:py-20 bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Two walkthroughs covering delisting and spam rates
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Watch how to file a Spamhaus removal ticket correctly and monitor your Google Postmaster spam percentage.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {videoWalkthroughs.map((vid, idx) => (
                <div key={idx} className="group flex flex-col justify-between">
                  <div>
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
                        <span className="w-13 h-13 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </span>
                      </span>
                    </a>

                    <div className="mt-4 flex items-center gap-2 text-xs text-indigo-300 font-medium">
                      <span>{vid.topic}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400">{vid.channel}</span>
                    </div>

                    <h3 className="mt-1 text-base sm:text-lg font-bold text-white leading-snug">
                      {vid.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-800">
                    <a
                      href={vid.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      Watch tutorial on YouTube
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW GIGGAL PREVENTS REPEAT LISTINGS */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                How Giggal keeps you off email blacklists permanently
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Removing your domain from Spamhaus is step one. Staying off requires verifying prospect lists before sending.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3.5">
                  01
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Pre-Send Lead Verification</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Removes dead addresses, typos, and spam honeypots from exported lists so bounces stay strictly under 1.0%.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3.5">
                  02
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Direct Catch-All Testing</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Checks accept-all corporate mailboxes directly with 98.5% accuracy so you never guess on enterprise addresses.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3.5">
                  03
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Real-Time API Shield</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Validates incoming leads at form entry or webhook sync to prevent fake or disposable addresses from entering your database.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SendingInboxesNote lead="Rebuilding your sending setup after a suspension?" medium="use-cases" slug="spam-suspension-resolution" className="my-10" />
        </div>

        {/* RELATED GUIDES & TOOLS */}
        <section className="py-16 lg:py-20 border-t border-slate-100 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="pb-6 border-b border-slate-200/80">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                Related deliverability guides and free tools
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
                Audit DNS records, calculate bounce ceilings, and monitor domain health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-x-12">
              {diagnosticResources.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="py-4 border-b border-slate-100 flex items-start justify-between gap-4 group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {item.kind}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0 mt-1 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION (STANDARD BRANDED CENTERED UI) */}
        <section className="py-16 lg:py-20 bg-slate-50/50 border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Clear answers on Spamhaus delisting, Google Workspace suspensions, and restoring blacklisted domains.
              </p>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* PRE-FOOTER CTA BAND */}
        <AltCtaBand
          headline="Clean your lists before requesting delisting"
          supporting="Start with 1,000 free verification credits. Remove dead emails, filter catch-all domains, and prove your data is clean before filing your Spamhaus appeal."
          buttonText="Verify Your Email Lists Free"
        />
      </main>

      <Footer />
    </>
  )
}
