import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import {
  BookOpen, AlertTriangle, CheckCircle2, Plus,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Wordmark from '@/components/Wordmark'
import VerifierConsole from '@/components/landing/VerifierConsole'
import ReviewBadges from '@/components/landing/ReviewBadges'
import ReviewWall from '@/components/landing/ReviewWall'
import PricingBlock from '@/components/landing/PricingBlock'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'

export const metadata: Metadata = {
  title: {
    absolute: 'Giggal.ai - Free Email Verification for Catch-all Domains',
  },
  description:
    'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
  keywords: [
    'catch-all email verification',
    'accept-all email verification',
    'verify catch-all emails',
    'catch-all domain checker',
    'free catch-all email verifier',
    'email verifier',
    'email verification tool',
    'bulk email verifier',
    'email validator',
    'verify email address',
    'email list cleaning',
    'free email verification tool',
    'real time email verification',
    'best email verification tool',
    'reduce email bounce rate',
    'improve email deliverability',
    'sender reputation tool',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description:
      'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
    url: 'https://targetpulse.net',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description:
      'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
  },
}

// Single source of truth for the FAQ — rendered visibly AND emitted as JSON-LD.
const faqItems: FaqItem[] = [
  {
    q: 'What is a catch-all email domain?',
    a: 'A catch-all domain accepts all emails sent to it, regardless of whether the specific mailbox exists (e.g. corporate exchanges). Standard tools mark these as "Unknown". Giggal.ai uses timing algorithms and secondary diagnostics to verify whether the address actually maps to an active user profile.',
  },
  {
    q: 'How accurate is Giggal.ai validation?',
    a: 'We maintain a 99.8% SMTP accuracy guarantee on deliverability classifications. By querying mail servers dynamically at the socket layer and cross-checking results with historical bounce patterns, we virtually eliminate false positives.',
  },
  {
    q: 'Can I verify emails in bulk?',
    a: 'Yes. Upload a CSV or TXT list and Giggal.ai verifies thousands of addresses concurrently in minutes, then returns a clean, deliverability-scored list you can download.',
  },
  {
    q: 'How does email verification improve deliverability?',
    a: 'By removing invalid, fake, and undeliverable addresses before you send, you reduce bounce rates, avoid spam traps, and protect your sender reputation — which leads to better inbox placement.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Giggal.ai gives you 1,000 free verification credits to start — no credit card required — so you can experience the accuracy before committing to a paid plan.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const integrations = [
  { name: 'Mailchimp', src: '/integrations/mailchimp.png' },
  { name: 'HubSpot', src: '/integrations/hubspot.png' },
  { name: 'SendGrid', src: '/integrations/sendgrid.png' },
  { name: 'ActiveCampaign', src: '/integrations/activecampaign.png' },
  { name: 'GetResponse', src: '/integrations/getresponse.png' },
  { name: 'MailerLite', src: '/integrations/mailerlite.png' },
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
            Reach Every <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">Catch-All Inbox Safely</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            Most email validation tools check syntax only. Giggal.ai verifies corporate mailboxes safely at the SMTP socket layer, so you can confidently{' '}
            <strong className="text-indigo-600 font-extrabold">send to real people</strong>.
          </p>

          <div className="pt-12 mt-12 border-t border-slate-200/80 space-y-1">
            <h4 className="text-slate-900 font-black text-base">Get 1,000 Free Email Validations</h4>
            <p className="text-slate-500 text-xs font-semibold leading-normal">Start cleaning your list instantly. No credit card required.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/sign-up"
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-center text-sm sm:w-auto"
            >
              Start Free
            </Link>
            <a
              href="#pricing"
              className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" /> See Pricing
            </a>
          </div>
        </div>

        {/* Showcase widget */}
        <div className="lg:col-span-6">
          <div className="gradient-border glow-recommendation">
            <div className="gradient-border-content p-6 sm:p-8 space-y-6 bg-white relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-36 h-32 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  Validate Risky Emails Instantly
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                {/* Generic platform deck */}
                <div className="bg-slate-50/50 border-2 border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between h-[160px] card-vivid-shadow">
                  <div className="bg-slate-100 text-center text-[11px] font-black text-slate-700 uppercase tracking-wider border-b border-slate-200/50 flex items-center justify-center h-12 shrink-0">
                    Generic Platform
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 text-center break-all">
                      henry.schuck@zoominfo.com
                    </p>
                    <div className="py-2.5 px-3 bg-amber-500/10 border border-amber-300 rounded-xl flex items-center justify-center gap-1.5 text-amber-700 font-extrabold text-[11px] shadow-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Catch-All / Unknown</span>
                    </div>
                  </div>
                </div>

                {/* Giggal deck (highlighted) */}
                <div className="bg-white border-2 border-indigo-600/40 rounded-2xl overflow-hidden flex flex-col justify-between h-[172px] card-vivid-shadow shadow-indigo-600/10 shadow-lg relative ring-2 ring-indigo-600/5 transform scale-[1.03] sm:scale-105 z-10 origin-center">
                  <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-indigo-500/5 blur-xl pointer-events-none" />
                  <div className="bg-white text-center border-b border-indigo-100 flex items-center justify-center h-12 shrink-0">
                    <Wordmark className="text-sm sm:text-base" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between relative z-10">
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 text-center break-all">
                      henry.schuck@zoominfo.com
                    </p>
                    <div className="py-2.5 px-3 bg-emerald-500 border border-emerald-400 rounded-xl flex items-center justify-center gap-1.5 text-white font-extrabold text-[11px] shadow-md shadow-emerald-500/20">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Deliverable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time verifier console */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Verify Any Email in Real-Time</h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium max-w-2xl mx-auto">
            Test emails for free to see our engine check spelling, locate mail servers, and ping mailboxes in real-time.
          </p>
        </div>
        <VerifierConsole />
      </section>

      {/* Review-platform badges */}
      <ReviewBadges />

      {/* Catch-all educational */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">What is a Catch-All/Accept-All?</h2>
          <p className="text-slate-600 text-sm font-medium">
            Catch-all domains are configured by IT departments to accept all incoming emails—even for users that don&apos;t exist. Since standard tools can&apos;t tell if a real mailbox is behind them, they label them as &quot;unknown&quot; and force a blind gamble:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Standard checkers */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 card-vivid-shadow">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">Standard Checkers</span>
            <span className="text-6xl sm:text-7xl font-black text-rose-500 tracking-tight leading-none mt-2">35%</span>
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-wider">Average Bounce Rate Risk</span>
            <div className="w-full max-w-[200px] h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-rose-500 rounded-full" style={{ width: '80%' }} />
            </div>
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed max-w-xs pt-2">
              Forces you to throw away valuable business leads or risk getting your outbound domains blocked.
            </p>
          </div>

          {/* Giggal verification */}
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 card-vivid-shadow ring-2 ring-indigo-600/5 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-emerald-500/5 blur-xl pointer-events-none" />
            <div className="flex items-center bg-indigo-50/60 border border-indigo-100/60 px-4 py-2 rounded-2xl">
              <Wordmark className="text-base sm:text-lg" />
              <span className="text-[9px] font-black uppercase text-indigo-600 tracking-wider bg-white px-2 py-0.5 rounded-md shadow-sm ml-2.5">Verified</span>
            </div>
            <span className="text-6xl sm:text-7xl font-black text-emerald-500 tracking-tight leading-none mt-2">0.4%</span>
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">Guaranteed Outbound Bounces</span>
            <div className="w-full max-w-[200px] h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '5%' }} />
            </div>
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed max-w-xs pt-2">
              Safely identifies active corporate mailboxes instantly so you can outreach with complete confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews — real Product Hunt testimonial wall */}
      <ReviewWall />

      {/* Feature showcase */}
      <section id="features-showcase" className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Robust Tools For Uncompromising Scale</h2>
          <p className="text-slate-600 text-sm font-medium">
            From bulk contact cleaning to custom application hook-ups, keep your sales pipeline filled with active prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              bg: 'bg-indigo-600 shadow-indigo-600/10', title: 'Bulk List Cleaning',
              body: 'Upload CSV or TXT lists to verify thousands of outbound prospects concurrently in just a few minutes.',
              path: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>),
            },
            {
              bg: 'bg-emerald-500 shadow-emerald-500/10', title: 'Catch-All Verification',
              body: 'Confirm delivery states on corporate catch-all domains that standard checkers incorrectly label as unknown.',
              path: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /><path d="m14.5 13.5 2 2" /></>),
            },
            {
              bg: 'bg-violet-600 shadow-violet-600/10', title: 'Developer API Support',
              body: 'Integrate sub-second email socket verification directly into your registration forms or custom applications.',
              path: (<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7 7l1.71-1.71" /></>),
            },
            {
              bg: 'bg-blue-600 shadow-blue-600/10', title: 'CRM & App Integrations',
              body: 'Sync cleaned, deliverable contacts automatically with HubSpot, Mailchimp, and leading outbound systems.',
              path: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></>),
            },
            {
              bg: 'bg-amber-500 shadow-amber-500/10', title: 'Lowest Industry Cost',
              body: 'Get access to verified catch-alls and standard cleanings at a fraction of the cost of legacy platforms.',
              path: (<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" strokeWidth={3} /></>),
            },
            {
              bg: 'bg-rose-500 shadow-rose-500/10', title: 'Priority Technical Support',
              body: 'Get direct, sub-minute technical assistance from our core email delivery and server engineers via Slack.',
              path: (<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" /></>),
            },
          ].map((f) => (
            <div key={f.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[200px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col justify-start text-left space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${f.bg}`}>
                <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  {f.path}
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{f.title}</h3>
                <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-normal">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-slate-100 py-24 border-y-2 border-slate-200">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Connect Your Marketing Stack</h2>
            <p className="text-sm text-slate-600 font-bold">Giggal.ai connects directly with leading CRM and Email Service Providers to sync cleaned contacts automatically.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 justify-items-center">
            {integrations.map((int) => (
              <div key={int.name} className="bg-white border-2 border-slate-200/80 rounded-2xl p-5 w-full flex flex-col items-center hover:border-indigo-500 hover:-translate-y-1 transition-all card-vivid-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={int.src} className="w-8 h-8 mb-3 object-contain" alt={`${int.name} logo`} />
                <span className="text-xs font-black text-slate-800">{int.name}</span>
              </div>
            ))}
            <div className="border-2 border-dashed border-slate-300 bg-slate-50/40 rounded-2xl p-5 w-full flex flex-col items-center justify-center hover:border-indigo-500 hover:-translate-y-1 transition-all">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mb-3 shadow-sm">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-slate-500">20+ More</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Simple, Flexible Pricing</h2>
          <p className="text-sm md:text-base text-slate-600 font-medium">No hidden fees. Choose between one-time credit packages or monthly plans to fit your outbound email volume.</p>
        </div>

        <PricingBlock />
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-sm text-slate-600 font-bold">Everything you need to know about our SMTP socket logic and server pings.</p>
        </div>
        <FaqAccordion items={faqItems} />
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Optimize Your Email Marketing Delivery Today
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Prune invalid subscribers, identify risky catch-alls, and secure your email reputation. Set up your account for free.
          </p>
          <div className="pt-4">
            <Link
              href="/sign-up"
              className="px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-block hover:scale-[1.03] active:scale-95 duration-200"
            >
              Get Started For Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
