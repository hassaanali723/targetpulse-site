import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight, ArrowUpRight, Check,
  Play, ExternalLink,
  DollarSign,
  TrendingDown, TrendingUp, Layers,
} from 'lucide-react'

const CANONICAL = '/use-cases/email-list-scrubbing'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Email List Scrubbing & Marketing Hygiene Solution',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Email List Cleaning and Deliverability',
  operatingSystem: 'Web',
  description:
    'Scrub dead contacts, spam traps, and unengaged subscribers from marketing lists. Cut Klaviyo and Mailchimp billing tiers and lift campaign open rates.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Bulk email list scrubbing with 98.5% precision',
    'Spam trap, honeypot, and toxic domain suppression',
    'Klaviyo, Mailchimp, and HubSpot contact tier cost reduction',
    'Catch-all mailbox validation to protect promotional delivery',
    'Free bounce rate and spam word diagnostic calculators',
    '1,000 free scrubbing credits with zero credit card required',
  ],
}

const espPlatforms = [
  {
    name: 'Klaviyo',
    pricingTrap: 'Charges per active profile in your account',
    impact: 'Holding 10k dormant contacts pushes you into a higher monthly tier',
    savingStrategy: 'Filter unengaged profiles and suppress them to drop tier costs',
  },
  {
    name: 'Mailchimp',
    pricingTrap: 'Unsubscribed contacts count toward limits unless archived',
    impact: 'Stale lists trigger automatic plan upgrades and hard bounce flags',
    savingStrategy: 'Scrub lists before campaigns and archive dead contacts permanently',
  },
  {
    name: 'ActiveCampaign',
    pricingTrap: 'Strict contact limits with steep overage charges',
    impact: 'High bounce rates risk account review by deliverability engineers',
    savingStrategy: 'Purge invalid mailboxes before each newsletter broadcast',
  },
  {
    name: 'HubSpot Marketing',
    pricingTrap: 'Marketing contacts billed in expensive 1,000-contact blocks',
    impact: 'Paying monthly for dead leads wastes marketing budget continuously',
    savingStrategy: 'Mark unverified addresses as non-marketing contacts instantly',
  },
]

const scrubSteps = [
  {
    num: '01',
    title: 'Export Unengaged Contacts',
    desc: 'Segment contacts who have not opened or clicked in 60 to 90 days from Klaviyo, Mailchimp, or HubSpot.',
  },
  {
    num: '02',
    title: 'Conclusive Verification',
    desc: 'Upload your CSV to Giggal. Our engine checks MX records, domain health, and mailbox presence without sending mail.',
  },
  {
    num: '03',
    title: 'Suppress and Save',
    desc: 'Re-import clean contacts for broadcasts, and suppress or archive dead mailboxes to reduce software fees.',
  },
]

const videoWalkthroughs = [
  {
    topic: 'Official Deliverability Guide · Klaviyo Academy',
    title: 'How to Clean Your Email List and Protect Your Deliverability',
    channel: 'Klaviyo',
    videoId: 'oXnYNfBTCFM',
    url: 'https://www.youtube.com/watch?v=oXnYNfBTCFM',
    desc: 'Official tutorial explaining why regular list cleaning protects your sender reputation, keeps campaigns out of the spam folder, and boosts marketing ROI.',
  },
  {
    topic: 'ESP Cost Reduction · Profile Suppression',
    title: 'How To Clean Your Email List & Suppress Profiles For Better Klaviyo ROI',
    channel: 'Konrad Wysocki | VentiveMail',
    videoId: 'y4FrcIDQVmg',
    url: 'https://www.youtube.com/watch?v=y4FrcIDQVmg',
    desc: 'Detailed screen guide showing ecommerce brands how to segment cold profiles, run automated sunset flows, and suppress dead contacts to lower monthly billing tiers.',
  },
]

const purgedCategories = [
  {
    title: 'Spam Traps and Honeypots',
    desc: 'Old or abandoned mailboxes monitored by blocklists. Sending to them flags your domain immediately.',
    badge: 'High Risk',
  },
  {
    title: 'Invalid and Defunct Domains',
    desc: 'Dead corporate domains and deleted personal mailboxes that cause hard bounces and harm reputation.',
    badge: 'Hard Bounces',
  },
  {
    title: 'Disposable and Burner Emails',
    desc: 'Temporary 10-minute addresses submitted for discounts or downloads that vanish right after signup.',
    badge: 'Fake Leads',
  },
  {
    title: 'Risky Catch-All Mailboxes',
    desc: 'Accept-all servers that hide invalid mailboxes. Tested directly by Giggal with 98.5% precision.',
    badge: 'Low Open Rate',
  },
]

const diagnosticResources = [
  {
    name: 'Bounce Rate Calculator',
    href: '/bounce-rate-calculator',
    kind: 'Tool',
    desc: 'Calculate campaign bounce rates to stay safely under the 1% postmaster mark.',
  },
  {
    name: 'Spam Word Checker',
    href: '/spam-word-checker',
    kind: 'Tool',
    desc: 'Scan promotional subject lines and marketing copy for spam filter triggers.',
  },
  {
    name: 'CRM Data Cleaning',
    href: '/use-cases/crm-data-cleaning',
    kind: 'Use Case',
    desc: 'Automate contact hygiene inside HubSpot and Salesforce pipelines.',
  },
  {
    name: 'Email Warmup Deliverability',
    href: '/use-cases/email-warmup-deliverability',
    kind: 'Use Case',
    desc: 'Ramp new marketing domains safely with controlled daily volume caps.',
  },
  {
    name: 'Spam Suspension Resolution',
    href: '/use-cases/spam-suspension-resolution',
    kind: 'Use Case',
    desc: 'Step-by-step playbook to recover from Spamhaus blacklists and Google suspensions.',
  },
  {
    name: 'SPF Record Checker',
    href: '/spf-checker',
    kind: 'Tool',
    desc: 'Verify that your marketing sending IPs match your SPF record without errors.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'What is email list scrubbing?',
    a: 'Email list scrubbing is the process of removing invalid, abandoned, and inactive addresses from your subscriber database. This eliminates hard bounces, protects sender reputation, and prevents your promotional campaigns from landing in spam folders.',
  },
  {
    q: 'How often should marketing teams scrub their email lists?',
    a: 'Most active marketing teams should scrub their lists every 3 to 6 months. If you collect signups through public web forms, or prepare for major seasonal pushes like Black Friday, running a bulk verification scrub before sending prevents costly bounce spikes.',
  },
  {
    q: 'Will scrubbing my email list lower my Klaviyo or Mailchimp bill?',
    a: 'Yes. Platforms like Klaviyo and Mailchimp charge based on total active contacts or audience size. Removing dead mailboxes and unengaged subscribers can drop your account into a lower billing tier, saving hundreds of dollars each month.',
  },
  {
    q: 'What is the difference between email scrubbing and email verification?',
    a: 'Email verification tests individual addresses to confirm the mailbox exists and accepts messages. Email scrubbing uses verification to clean your entire list and suppress or archive bad contacts within your email marketing software.',
  },
  {
    q: 'Does Giggal send emails to our subscribers during list scrubbing?',
    a: 'No. Giggal never sends actual messages to your contacts. Our engine verifies deliverability through DNS queries, MX route analysis, and simulated mailbox handshakes without alerting subscribers.',
  },
  {
    q: 'Can email scrubbing restore inbox placement after deliverability drops?',
    a: 'Yes. Removing hard bounces and dormant contacts quickly raises your list engagement rate. Mailbox providers like Google and Yahoo reward higher open rates with better inbox placement for future campaigns.',
  },
]

export default function EmailListScrubbingPage() {
  return (
    <>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd('Email List Scrubbing', CANONICAL)} />
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
              <span className="text-slate-700 font-medium">Email List Scrubbing</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION + LIST SCRUBBING ROI CARD */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-100">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-50/30 via-slate-50/20 to-transparent -z-10" />

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                  Email List Scrubbing &amp; Hygiene for Marketing Teams
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Dead contacts, spam traps, and unengaged subscribers quietly inflate your monthly ESP software bill while dragging campaigns into Gmail&apos;s spam folder. Scrub your marketing lists with Giggal to lower subscriber tiers and lift inbox placement.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/20 transition-all duration-200 group"
                  >
                    Scrub Your Email List Free
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#tier-savings"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-semibold text-sm sm:text-base transition-colors"
                  >
                    Calculate Tier Savings
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-medium">
                  <span>Built for Klaviyo, Mailchimp, Brevo &amp; HubSpot</span>
                  <span className="text-slate-300">·</span>
                  <span>1,000 Free Credits</span>
                  <span className="text-slate-300">·</span>
                  <span>Conclusive Status</span>
                </div>
              </div>

              {/* LIST SCRUBBING IMPACT & ROI CARD */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-lg shadow-slate-200/50">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-bold text-slate-900">50,000 Subscriber Audit</span>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                      Typical Impact
                    </span>
                  </div>

                  {/* Before */}
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
                        Before List Scrubbing
                      </span>
                      <span className="text-rose-600 font-bold">Unchecked Data</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Subscribers:</span>
                        <span className="font-bold text-slate-900">50,000 profiles</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">ESP Monthly Cost:</span>
                        <span className="font-bold text-slate-900">$350 / month</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Open Rate:</span>
                        <span className="font-bold text-rose-600">18.2% (Spam Risk)</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Hard Bounce:</span>
                        <span className="font-bold text-rose-600">3.6% (Warning)</span>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="mt-3.5 p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                        After Giggal Scrub
                      </span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Verified Clean</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[11px]">Subscribers:</span>
                        <span className="font-bold text-slate-900">41,200 clean</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">ESP Monthly Cost:</span>
                        <span className="font-bold text-emerald-700">$225 / month</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Open Rate:</span>
                        <span className="font-bold text-emerald-700">34.8% (Inboxes)</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Hard Bounce:</span>
                        <span className="font-bold text-emerald-700">0.3% (Safe)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                    <span>Result: Lower software bill + higher opens</span>
                    <span className="font-bold text-emerald-700">Save $1,500/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ESP TIER SAVINGS MATRIX */}
        <section id="tier-savings" className="py-14 lg:py-18 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                Cost Reduction Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                How contact tier inflation raises your monthly bill
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Marketing platforms charge per active profile. Keeping dead contacts forces you into higher pricing brackets every single month.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {espPlatforms.map((esp, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <h3 className="text-base font-bold text-slate-900">{esp.name}</h3>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      ESP Pricing Trap
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {esp.pricingTrap}
                  </p>
                  <p className="mt-2 text-xs text-rose-600 font-medium leading-relaxed">
                    Impact: {esp.impact}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-emerald-700 font-semibold flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>Fix: {esp.savingStrategy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-STEP AUTOMATED SCRUB WORKFLOW */}
        <section className="py-16 lg:py-20 bg-slate-50/60 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                The 3-step email list hygiene workflow
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Purge unengaged contacts, eliminate bounces, and keep your primary sending domain trusted by Google and Yahoo.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {scrubSteps.map((step, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3.5">
                    {step.num}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
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
                Two walkthroughs covering deliverability and ROI
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Watch how to suppress cold contacts inside Klaviyo and lower your monthly marketing software costs.
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

        {/* WHAT GETS PURGED DURING A SCRUB */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                What gets removed during an email list scrub
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Giggal identifies toxic email data so you can prune bad records without losing active buyers.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {purgedCategories.map((cat, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{cat.title}</h3>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {cat.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                Common questions about email list scrubbing, Klaviyo profile suppression, and improving sender reputation.
              </p>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* PRE-FOOTER CTA BAND */}
        <AltCtaBand
          headline="Ready to scrub your email list and lower your software bill?"
          supporting="Start with 1,000 free verification credits. Upload your marketing list, remove invalid addresses, and protect your sender reputation in minutes."
          buttonText="Scrub Your Email List Free"
        />
      </main>

      <Footer />
    </>
  )
}
