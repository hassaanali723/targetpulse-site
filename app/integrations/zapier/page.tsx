import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Zap, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd, faqPageLd } from '@/lib/schema'
import fs from 'fs'
import path from 'path'
import { ZAPIER_GUIDE_STEPS, ZAPIER_APP_URL, SIGNUP_URL } from '@/lib/integrations'
import { ZAPIER_APPS, ZAPIER_APP_LOGO_DIR, zapierAppLogo, zapierAppLogoAlt } from '@/lib/zapierApps'

// Logos that actually exist on disk, resolved once at build time so cards
// with a missing file render a lettermark instead of a broken image.
const EXISTING_LOGOS = new Set(
  fs
    .readdirSync(path.join(process.cwd(), 'public', ZAPIER_APP_LOGO_DIR.slice(1)))
    .filter((f) => f.endsWith('.png'))
    .map((f) => f.replace(/^giggal-catch-all-email-verification-/, '').replace(/\.png$/, ''))
)
import ZapierTabs from '@/components/integrations/ZapierTabs'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export const metadata: Metadata = {
  title: 'Zapier Email Verification Integration',
  description:
    'Connect Giggal.ai to 8,000+ apps with Zapier. Verify emails in real time, resolve catch-all addresses other verifiers mark risky, and keep every list clean automatically. No code required.',
  alternates: { canonical: '/integrations/zapier' },
  openGraph: {
    title: 'Zapier Email Verification Integration | Giggal.ai',
    description:
      'Verify emails and resolve catch-all addresses in 8,000+ apps with the Giggal.ai Zapier integration. Real-time verification for HubSpot, Google Sheets, Salesforce and more.',
    url: 'https://giggal.ai/integrations/zapier',
    type: 'website',
  },
}

// FAQ copy doubles as FAQPage JSON-LD — keep answers plain text.
const FAQ: FaqItem[] = [
  {
    q: 'How does the Giggal.ai Zapier integration work?',
    a: 'Add a Giggal.ai verification step to any Zap. When your trigger fires, like a new CRM contact, form response or spreadsheet row, Zapier sends the email address to Giggal.ai. We run a deep mailbox existence check, and the result (deliverable, undeliverable, or catch-all result with score) flows into the next step of your Zap. No code is required.',
  },
  {
    q: 'Can it verify catch-all email addresses in Zapier?',
    a: 'Yes. That is the core difference between Giggal.ai and other email verifiers on Zapier. Most tools return "risky" or "unknown" for catch-all domains and leave you guessing. Giggal.ai runs catch-all verification automatically and returns a clear result and score, so around 30% of a typical B2B list that other tools write off becomes usable again.',
  },
  {
    q: 'Which apps can I connect for email verification?',
    a: 'Any of the 8,000+ apps on Zapier: HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, Brevo, ActiveCampaign, Typeform, Google Forms, Slack and thousands more. If the app is on Zapier, it can verify emails with Giggal.ai.',
  },
  {
    q: 'How many credits does a verification through Zapier cost?',
    a: 'The same as everywhere else: 1 credit per verification, and catch-all deep verification runs in-line when needed. New accounts get 1,000 free credits with no credit card, which is enough to wire up and test any Zap end to end.',
  },
  {
    q: 'Is real-time verification better than bulk list cleaning?',
    a: 'They solve different problems and most teams use both. Real-time verification through Zapier stops bad emails at the point of entry, so lists never degrade. Bulk verification cleans what you already have. Giggal.ai does both: bulk uploads and API jobs in the dashboard, real-time checks through Zapier.',
  },
]

// HowTo JSON-LD mirrors the Integration Guide tab (ZAPIER_GUIDE_STEPS), so
// the structured data always matches the visible steps.
function howToLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to verify emails in Zapier with Giggal.ai',
    description:
      'Set up automated email verification, including catch-all resolution, in any Zapier workflow.',
    step: ZAPIER_GUIDE_STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
      ...(s.image ? { image: `https://giggal.ai${s.image}` } : {}),
    })),
  }
}

export default function ZapierIntegrationPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Integrations', path: '/integrations' },
          { name: 'Zapier', path: '/integrations/zapier' },
        ])}
      />
      <JsonLd data={faqPageLd(FAQ)} />
      <JsonLd data={howToLd()} />
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-14 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] font-bold mb-8">
          <Link href="/integrations" className="text-indigo-600 hover:text-indigo-700">
            Integrations
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600">Zapier</span>
        </nav>

        {/* Logo pair */}
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/giggal-catch-all-email-verifier-icon.png"
              alt="Giggal.ai"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="w-11 h-11 object-contain"
            />
          </div>
          <RefreshCw className="w-6 h-6 text-slate-400" aria-hidden="true" />
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/integrations/giggal-catch-all-email-verification-zapier.png"
              alt="Zapier"
              width={40}
              height={40}
              loading="eager"
              decoding="async"
              className="w-10 h-10 rounded-lg object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          Zapier Email Verification <span className="gradient-text">Integration</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          Connect Giggal.ai to 8,000+ apps and verify every email the moment it enters your
          stack. Real-time mailbox existence checks, automatic catch-all verification, and
          clean lists everywhere, without writing a line of code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-black text-[15px] hover:bg-indigo-700 transition-colors glow-recommendation"
          >
            Start free with 1,000 credits
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={ZAPIER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-300 bg-white text-slate-800 font-bold text-[15px] hover:border-indigo-400 transition-colors"
          >
            View on Zapier
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Workflows + Integration Guide tabs, NeverBounce-style layout */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Popular Workflows and Setup Guide
          </h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">
            Start from a proven workflow, or follow the step-by-step guide and build your own
            in about five minutes.
          </p>
        </div>
        <ZapierTabs />
      </section>

      {/* Why Giggal on Zapier — differentiators */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
            <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-[16px] font-black text-slate-900 mb-2">
              The Catch-All Verifier on Zapier
            </h2>
            <p className="text-[13.5px] text-slate-600 leading-relaxed font-medium">
              Other verifiers mark catch-all domains &ldquo;risky&rdquo; and move on. That&apos;s
              around 30% of a typical B2B list wasted. Giggal.ai resolves catch-all addresses
              into clear results with scores, right inside your Zap.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-[16px] font-black text-slate-900 mb-2">
              Real-Time, at the Point of Entry
            </h2>
            <p className="text-[13.5px] text-slate-600 leading-relaxed font-medium">
              Verify leads the second they arrive from forms, CRMs or spreadsheets. Bad emails
              never enter your funnel, so your bounce rate stays under 3% without periodic
              cleanups.
            </p>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
            <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-[16px] font-black text-slate-900 mb-2">
              Rich Results Your Zaps Can Use
            </h2>
            <p className="text-[13.5px] text-slate-600 leading-relaxed font-medium">
              Every check returns status, risk level, deliverability score and catch-all
              result. Perfect for Zapier filters, paths and formatter steps that route each
              lead automatically.
            </p>
          </div>
        </div>
      </section>

      {/* App directory: every app with its own integration page */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Verify Emails From Any of These Apps
          </h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">
            Connect Giggal.ai with your CRM, forms, email marketing and ecommerce tools
            through Zapier. Pick your app for a step-by-step setup guide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {ZAPIER_APPS.map((a) => (
            <Link
              key={a.slug}
              href={`/integrations/zapier/${a.slug}`}
              className="group flex items-center gap-3.5 bg-white border-2 border-slate-200 rounded-2xl px-4 py-3.5 card-vivid-shadow hover:border-indigo-500 transition-colors duration-200"
            >
              {EXISTING_LOGOS.has(a.slug) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={zapierAppLogo(a.slug)}
                  alt={zapierAppLogoAlt(a.name)}
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-lg object-contain shrink-0"
                />
              ) : (
                <span
                  className="w-9 h-9 rounded-lg bg-indigo-600 text-white text-sm font-black flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  {a.name[0]}
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block text-[13.5px] font-black text-slate-800 group-hover:text-indigo-700 transition-colors truncate">
                  {a.name}
                </span>
                <span className="block text-[11px] font-bold text-slate-400 truncate">{a.category}</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-10">
          Zapier Integration FAQ
        </h2>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="group bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 card-vivid-shadow"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[15px] font-black text-slate-900">
                {f.q}
                <span className="text-indigo-600 text-xl leading-none group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] text-slate-600 leading-relaxed font-medium">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 pt-6">
        <div className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Stop Bad Emails Before They Enter Your Stack
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-[15px] leading-relaxed font-medium">
            Wire up your first verification Zap in five minutes. 1,000 free credits, no credit
            card, catch-all verification included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-black text-[15px] hover:bg-indigo-50 transition-colors"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/integrations"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Explore all integrations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
