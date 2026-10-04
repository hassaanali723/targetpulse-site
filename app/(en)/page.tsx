import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Plus, Check, ArrowRight, Star, HelpCircle, ShieldCheck } from 'lucide-react'
import { COMPETITORS, giggalTierAt, tierAt, fmtUsd } from '@/lib/competitorPricing'
import Navbar from '@/components/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar'
import Footer from '@/components/Footer'
import ReviewBadges from '@/components/landing/ReviewBadges'
import MotionRuntime from '@/components/landing/MotionRuntime'
import AwardShelf from '@/components/landing/AwardShelf'
import BulkScanDemo from '@/components/landing/BulkScanDemo'
import IntegrationOrbit from '@/components/landing/IntegrationOrbit'
import { getSourceForgeStats } from '@/lib/reviewStats'
import ReviewWall from '@/components/landing/ReviewWall'
import McpSection from '@/components/landing/McpSection'
import PricingBlock from '@/components/landing/PricingBlock'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { softwareApplicationLd } from '@/lib/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// The eight competitors with the most search demand. Each links to its existing
// /{brand}-alternative page; those pages now carry the head-to-head links, so
// this is the top of the crawl path into the 351 comparison pages.
const SWITCHERS = [
  { name: 'ZeroBounce', href: '/zerobounce-alternative', blurb: 'Resolve the catch-all addresses ZeroBounce marks as risky.' },
  { name: 'NeverBounce', href: '/neverbounce-alternative', blurb: 'Pay-as-you-go pricing with credits that never expire.' },
  { name: 'Bouncer', href: '/bouncer-alternative', blurb: 'Catch-all and SEG-protected mailboxes resolved, not just flagged.' },
  { name: 'Hunter', href: '/hunter-alternative', blurb: 'A dedicated verifier instead of a finder with verification bundled in.' },
  { name: 'Kickbox', href: '/kickbox-alternative', blurb: 'Flat 1 credit per email, with no monthly commitment.' },
  { name: 'Emailable', href: '/emailable-alternative', blurb: 'Four clear results on accept-all domains, not a risky label.' },
  { name: 'MillionVerifier', href: '/millionverifier-alternative', blurb: 'Catch-all resolution built in rather than sold separately.' },
  { name: 'Apollo', href: '/apollo-alternative', blurb: 'Verification built for deliverability, not bundled into a sales suite.' },
]

// Pricing headline facts, read from the price data so they cannot drift.
// Lowest = no verified competitor price is at or below ours at that volume.
function giggalIsLowestAt(credits: number): boolean {
  const ours = giggalTierAt(credits).totalUsd
  if (ours === null) return false
  return Object.values(COMPETITORS).every((c) => {
    const tier = tierAt(c, credits)
    return !tier || tier.status !== 'verified' || tier.totalUsd === null || tier.totalUsd > ours
  })
}
const PRICE_CLAIM = giggalIsLowestAt(10000) && giggalIsLowestAt(100000)
const G10K = giggalTierAt(10000).totalUsd ?? 0

// Features section data (home page only). Titles and first lines carry the
// section's keywords ("list cleaning", "catch-all"); points are short facts.
const FEATURES: {
  title: string
  body: React.ReactNode
  points: string[]
  iconBg: string
  panelBg: string
  linkColor: string
  // 'SIGNUP' = the sign-up URL (declared further down the file)
  link: { href: string; label: string }
  secondaryLink?: { href: string; label: string }
  icon: React.ReactNode
  visual: React.ReactNode
}[] = [
  {
    title: 'Bulk list cleaning',
    body: (
      <>
        Upload a CSV or Excel file for{' '}
        <Link href="/email-list-cleaning" className="text-indigo-600 font-semibold hover:underline">
          email list cleaning
        </Link>
        , get results in minutes.
      </>
    ),
    points: ['Up to 50,000 addresses per file', 'Download the clean list as a CSV'],
    iconBg: 'bg-indigo-600',
    panelBg: 'bg-indigo-50',
    linkColor: 'text-indigo-600',
    link: { href: 'SIGNUP', label: 'Clean a list free' },
    icon: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>),
    visual: (
      <>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-800">leads.csv</span>
          <StatusBadge tone="good">Done</StatusBadge>
        </div>
        <ul className="mt-3 divide-y divide-slate-100 rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          {[
            { email: 'anna@acme.com', ok: true },
            { email: 'j.doe@globex.io', ok: false },
            { email: 'info@activarmor.com', ok: true },
            { email: 'mark@initech.com', ok: true },
          ].map((r) => (
            <li key={r.email} className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="text-sm text-slate-700 truncate">{r.email}</span>
              <StatusBadge tone={r.ok ? 'good' : 'bad'}>{r.ok ? 'Deliverable' : 'Undeliverable'}</StatusBadge>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Catch-all verification',
    body: 'A real answer on catch-all domains, not "risky".',
    points: ['Same 1 credit as any other check', 'Works behind gateways like Mimecast and Proofpoint'],
    iconBg: 'bg-emerald-500',
    panelBg: 'bg-emerald-50',
    linkColor: 'text-emerald-600',
    link: { href: '/catch-all-verification', label: 'How catch-all verification works' },
    icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>),
    visual: (
      <>
        <p className="text-sm font-semibold text-slate-800">info@activarmor.com</p>
        <ul className="mt-3 divide-y divide-slate-100 rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          <li className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-sm text-slate-500">Other tools</span>
            <StatusBadge tone="warn">Risky</StatusBadge>
          </li>
          <li className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-sm font-semibold text-slate-800">Giggal.ai</span>
            <StatusBadge tone="good">Deliverable</StatusBadge>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Developer API',
    body: 'Verify addresses on your sign-up forms and in your apps.',
    points: ['One address or a whole list per call', 'API keys from your dashboard'],
    iconBg: 'bg-violet-600',
    panelBg: 'bg-violet-50',
    linkColor: 'text-violet-600',
    link: { href: '/email-verification-api', label: 'Email verification API' },
    secondaryLink: { href: '/public/docs', label: 'Read the API docs' },
    icon: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
    visual: (
      <pre className="rounded-xl bg-slate-900 p-5 font-mono text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
        <span className="text-violet-300">POST</span> <span className="text-white">/v1/verify</span>
        {'\n'}
        <span className="text-slate-500">{'{'}</span> <span className="text-sky-300">&quot;email&quot;</span>: <span className="text-emerald-300">&quot;hello@example.com&quot;</span> <span className="text-slate-500">{'}'}</span>
        {'\n\n'}
        <span className="text-sky-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;deliverable&quot;</span>
      </pre>
    ),
  },
  {
    title: 'CRM and app integrations',
    body: 'Send clean contacts to HubSpot, Mailchimp and more.',
    points: ['Works with the tools you already use', 'Zapier and n8n for everything else'],
    iconBg: 'bg-blue-600',
    panelBg: 'bg-blue-50',
    linkColor: 'text-blue-600',
    link: { href: '/integrations', label: 'See all integrations' },
    icon: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></>),
    visual: (
      <div className="grid grid-cols-4 gap-3">
        {[
          ['HubSpot', 'hubspot'],
          ['Mailchimp', 'mailchimp'],
          ['Salesforce', 'salesforce'],
          ['Zapier', 'zapier'],
          ['ActiveCampaign', 'activecampaign'],
          ['SendGrid', 'sendgrid'],
          ['n8n', 'n8n'],
        ].map(([name, slug]) => (
          <span key={slug} title={name} className="aspect-square rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/integrations/giggal-catch-all-email-verification-${slug}.png`} alt={name} width={32} height={32} loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
          </span>
        ))}
        <span className="aspect-square rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex items-center justify-center text-sm font-bold text-blue-700">80+</span>
      </div>
    ),
  },
  {
    title: 'Pay-as-you-go pricing',
    body: 'Every price is public. Credits never expire.',
    points: ['No monthly commitment', 'Buy more only when you need it'],
    iconBg: 'bg-amber-500',
    panelBg: 'bg-amber-50',
    linkColor: 'text-amber-600',
    link: { href: '#pricing', label: 'See all prices' },
    icon: (<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" strokeWidth={3} /></>),
    visual: (
      <div className="rounded-xl bg-white px-6 py-9 text-center shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <p className="text-4xl md:text-5xl font-extrabold text-slate-900">
          1 credit <span className="text-amber-500">=</span> 1 email
        </p>
        <p className="mt-3 text-sm text-slate-500">Catch-all verification included</p>
      </div>
    ),
  },
  {
    title: 'Priority support',
    body: 'Stuck on something? Our engineers help you directly.',
    points: ['Real people, not a bot', 'Email us or use the contact form'],
    iconBg: 'bg-rose-500',
    panelBg: 'bg-rose-50',
    linkColor: 'text-rose-600',
    link: { href: '/contact-us', label: 'Contact support' },
    icon: (<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
    visual: (
      <div className="rounded-xl bg-white px-6 py-9 text-center shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <p className="text-4xl md:text-5xl font-extrabold text-slate-900">24 hours</p>
        <p className="mt-3 text-sm text-slate-500">Our usual reply time.</p>
      </div>
    ),
  },
]

// Result chip: white pill, the colour is in the text. No dot.
function StatusBadge({ tone, children }: { tone: 'good' | 'bad' | 'warn'; children: React.ReactNode }) {
  const text = { good: 'text-emerald-700', bad: 'text-rose-700', warn: 'text-amber-700' }[tone]
  return (
    <span className={`shrink-0 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ring-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ${text}`}>
      {children}
    </span>
  )
}

// Divider between home page sections: one hairline, the same width for every
// section whatever that section's own max-width. Sections carry equal top and
// bottom padding (py-20 md:py-24), so the line sits centred in the gap.
function SectionRule() {
  return (
    <div aria-hidden="true" className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </div>
  )
}

// All sign-up / get-started CTAs go straight to the Giggal email verifier dashboard.
const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  // Primary query: "email verification service" (C4). The bare head terms
  // belong to the tool page once /email-verifier exists; until then the home
  // carries "software" and "tool" wording in the hero as secondaries.
  title: {
    absolute: 'Email Verification Service & Bulk Email Verifier | Giggal.ai',
  },
  description:
    'Email verification service and bulk email verifier with a real valid or invalid result on every address, including catch-all verification. 98.5% accuracy, 1,000 free credits.',
  alternates: { canonical: '/', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Email Verification Service & Bulk Email Verifier',
    description:
      'Email verification service and bulk email verifier with a real valid or invalid result on every address, including catch-all verification. 98.5% accuracy, 1,000 free credits.',
    url: 'https://giggal.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Verification Service & Bulk Email Verifier',
    description:
      'Email verification service and bulk email verifier with a real valid or invalid result on every address, including catch-all verification. 98.5% accuracy, 1,000 free credits.',
  },
}

// Single source of truth for the FAQ — rendered visibly AND emitted as JSON-LD.
const faqItems: FaqItem[] = [
  {
    q: 'How do I verify catch-all and accept-all emails?',
    a: 'Just upload them. A catch-all domain accepts every address, so most tools call them "risky". Giggal.ai is built for catch-all email verification and tells you which ones are real.',
  },
  {
    q: 'How accurate is Giggal.ai email verification?',
    a: 'About 98.5% on business lists. Cleaned lists usually bounce under 3%.',
  },
  {
    q: 'How many emails can I verify at once?',
    a: 'Up to 50,000 addresses per file. Split bigger lists into a few files.',
  },
  {
    q: 'Does Giggal.ai support MCP (Model Context Protocol) for Claude and AI agents?',
    a: 'Yes. Add our MCP server to Claude, ChatGPT or Cursor and it can verify email addresses for you, right in the chat.',
  },
  {
    q: 'Can I verify email lists in bulk?',
    a: 'Yes. Upload a CSV or Excel file and download the clean list as a CSV.',
  },
  {
    q: 'How does email verification improve deliverability?',
    a: 'Removing undeliverable addresses cuts your bounces. That protects your sender reputation, so more of your emails reach the inbox.',
  },
  {
    q: 'Is Giggal.ai email verification free to try?',
    a: 'Yes. You get 1,000 free credits, no card needed, and they never expire.',
  },
  {
    q: 'Can I test email addresses for free?',
    a: 'Yes. Use the free email checker at the top of this page. For a whole list, sign up for 1,000 free email validations.',
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

// Zapier and n8n lead the strip with an animated border (featured); the rest
// link to the integrations hub.
const integrations = [
  { name: 'Zapier', src: '/integrations/giggal-catch-all-email-verification-zapier.png', href: '/integrations/zapier', featured: true },
  { name: 'n8n', src: '/integrations/giggal-catch-all-email-verification-n8n.png', href: '/integrations/n8n', featured: true },
  { name: 'Mailchimp', src: '/integrations/giggal-catch-all-email-verification-mailchimp.png', href: '/integrations' },
  { name: 'HubSpot', src: '/integrations/giggal-catch-all-email-verification-hubspot.png', href: '/integrations/zapier/hubspot' },
  { name: 'SendGrid', src: '/integrations/giggal-catch-all-email-verification-sendgrid.png', href: '/integrations' },
  { name: 'ActiveCampaign', src: '/integrations/giggal-catch-all-email-verification-activecampaign.png', href: '/integrations' },
]

export default async function Home() {
  const sourceforge = await getSourceForgeStats()

  return (
    <main className="has-ann relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <JsonLd data={softwareApplicationLd()} />

      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <MotionRuntime />
      <AnnouncementBar />
      <Navbar tone="dark" />

      {/* Hero: one centered column on the slate ink colour. The navbar runs
          dark on this page (tone="dark") so the two read as one block. The H1
          keeps the page's primary keyword "email verification service" plus a
          plain benefit; the <title> carries the keywords instead; the
          subheading carries "bulk email verification" and "email verification
          software" in one 15-word line (plan 09 keyword placement, plan 16). */}
      <section data-spotlight className="bg-slate-900 hero-art text-white pt-28 md:pt-32 pb-32 md:pb-44">
        {/* Thin horizon line where the dark top meets the light page. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        {/* Moving light behind the content: drifting colour orbs and beams
            along the grid lines (globals.css, "Home hero motion"). */}
        <div aria-hidden="true" className="hero-orbs">
          <span />
          <span />
          <span />
        </div>
        <div aria-hidden="true" className="hero-beams">
          <span className="beam-x" />
          <span className="beam-x" />
          <span className="beam-y" />
          <span className="beam-y" />
        </div>
        <div aria-hidden="true" className="hero-spot" />
        <div className="max-w-3xl mx-auto px-6 pt-10 md:pt-16 text-center">
          <h1 className="text-[40px] leading-[1.08] md:text-6xl md:leading-[1.04] font-extrabold tracking-tight text-white [text-wrap:balance]">
            Email Verification Service to Reduce Email Bounces
          </h1>

          <p className="mt-7 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-2xl mx-auto [text-wrap:balance]">
            Bulk email verification software that shows which email addresses are real, even on{' '}
            <Link
              href="/catch-all-verification"
              className="text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white"
            >
              catch-all domains
            </Link>
            .
          </p>

          {/* SourceForge rating, read live from SourceForge's badge feed and
              cached for a day (lib/reviewStats.ts). Visual only, no rating
              markup (C10). */}
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-4 md:gap-5">
            <span aria-hidden="true" className="h-px w-10 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-slate-500" />
            <a
              href="https://sourceforge.net/software/product/Giggal.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-sm md:text-base text-slate-400"
            >
              <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span>
                <strong className="text-white">{sourceforge.rating.toFixed(1)}</strong> on{' '}
                <span className="group-hover:text-slate-300 group-hover:underline underline-offset-4">SourceForge</span>{' '}
                ({sourceforge.count} reviews)
              </span>
            </a>
            <span aria-hidden="true" className="h-px w-10 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-slate-500" />
          </div>

          {/* One free check: a plain GET form, so it works without JavaScript.
              It opens /email-checker?email=..., which fills the checker and
              runs it (VerifierConsole emailFromQuery). */}
          {/* Brand gradient border (indigo to emerald) that slowly circles the
              box (.hero-ring), with a soft indigo glow that brightens on focus;
              the inside stays dark so it does not glare. */}
          <div className="hero-ring mt-8 md:mt-10 max-w-xl mx-auto p-[1.5px] rounded-2xl shadow-[0_0_40px_-12px_rgba(99,102,241,0.7)] focus-within:shadow-[0_0_56px_-8px_rgba(99,102,241,0.9)] transition-shadow">
          <form
            action="/email-checker"
            method="get"
            className="flex flex-col sm:flex-row gap-2 bg-slate-900 rounded-[15px] p-2"
          >
            <label htmlFor="hero-email" className="sr-only">
              Email address to verify
            </label>
            <input
              id="hero-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="name@company.com"
              className="flex-1 min-w-0 px-4 py-3.5 rounded-xl bg-transparent text-base text-white placeholder:text-slate-400 caret-emerald-300 outline-none"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-xl text-white font-extrabold text-base transition-colors"
            >
              Verify free
            </button>
          </form>
          </div>

          {/* The sign-up offer is the money action: a real button in amber,
              the only warm colour in the hero (it matches the review stars),
              so it stands apart from the indigo and emerald around it. Anchor keeps "free email
              validations" (keyword map, /email-verifier terms). */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-base md:text-lg text-slate-300 font-medium">Cleaning a whole list?</span>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-base shadow-lg shadow-amber-500/20 transition-colors"
            >
              Get 1,000 free email validations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">No card needed.</p>
        </div>
      </section>

      {/* Award badges, fanned across the hero's bottom edge. */}
      <AwardShelf />

      {/* Stats: four calm cards on the light page, right under the hero. Thin
          border and a light shadow, no overlap with the hero, so they do not
          compete with the hero's heading and email box. */}
      <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-14 pb-20 md:pb-24">
        <div data-inview className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { pre: '', n: '500M', suf: '+', l: 'Emails verified' },
            { pre: '', n: '98.5', suf: '%', l: 'Accuracy on business lists' },
            { pre: '<', n: '3', suf: '%', l: 'Bounce rate on cleaned lists' },
            { pre: '', n: '1,000', suf: '', l: 'Free credits, no card' },
          ].map((s) => (
            <div key={s.l} className="stat-card bg-white border border-slate-200 rounded-2xl px-4 py-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="text-2xl md:text-3xl leading-none font-extrabold tracking-tight text-slate-900 tabular-nums">
                {s.pre && <span className="text-indigo-600">{s.pre}</span>}
                <span data-count>{s.n}</span>
                {s.suf && <span className="text-indigo-600">{s.suf}</span>}
              </div>
              <div className="mt-2 text-sm text-slate-500 font-medium leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <SectionRule />

      {/* Product: bulk results dashboard */}
      <section id="bulk" className="cv-section max-w-6xl mx-auto px-6 py-20 md:py-24 scroll-mt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
        {/* Keyword: "bulk email verification" in the H2 (owned by the home
            until /bulk-email-verifier exists, plan 09). Heading and a
            checklist only; no product preview. */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-center lg:text-left">
          Bulk email verification for your whole list
        </h2>
        {/* Keyword: "bulk email verifier service" (home, KD 36), once. */}
        <p className="mt-4 text-lg md:text-xl text-slate-600 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          Upload your list once. Our bulk email verifier service checks every address on it.
        </p>
        <ul className="mt-10 w-fit max-w-full mx-auto lg:mx-0 space-y-4">
          {[
            'Deliverable or undeliverable for every address',
            'Catch-all addresses get a real answer too',
            'CSV or Excel, up to 50,000 addresses per file',
            'Download the clean list when it is done',
          ].map((t) => (
            <li key={t} className="flex items-center gap-3.5 text-base md:text-[17px] text-slate-700">
              <span className="w-7 h-7 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/30" aria-hidden="true">
                <Check className="w-4 h-4 text-white" strokeWidth={3.5} />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        </div>
        <BulkScanDemo />
        </div>
      </section>

      <SectionRule />

      {/* Catch-all explainer. Plan 07: keep this H2 and the link to the
          catch-all blog post. */}
      <section className="cv-section max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">Why catch-all addresses need attention</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Some company mail servers accept every address, real or made up. That is a{' '}
            <Link href="/blog/what-is-a-catch-all-email-address" className="text-indigo-600 font-bold hover:underline">
              catch-all domain
            </Link>
            . Most checkers cannot tell the difference, so they mark these emails &quot;risky&quot; and leave the
            decision to you.
          </p>
        </div>

        {/* The same catch-all address, two results. Left is muted, right is
            the one we want the eye to land on. */}
        <div data-inview className="sim mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-7">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-200/70 text-slate-500 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </span>
              <p className="text-base font-bold text-slate-500">Most email checkers</p>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3.5">
              <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-slate-100 text-slate-500 font-bold items-center justify-center">I</span>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-slate-800 truncate">info@activarmor.com</p>
                <p className="text-xs text-slate-400 truncate">Catch-all, no clear answer</p>
              </div>
              <span className="sim-slot sim-risky">
                <span aria-hidden="true" className="sim-spin" />
                <span className="sim-badge"><StatusBadge tone="warn">Risky</StatusBadge></span>
              </span>
            </div>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Now it&apos;s on you. Send and risk a bounce, or delete a lead that might be real.
            </p>
          </div>

          <div className="relative rounded-2xl border border-indigo-200 bg-white p-6 md:p-7 shadow-[0_16px_40px_-20px_rgba(79,70,229,0.45)]">
            <div aria-hidden="true" className="line-sweep absolute inset-x-6 top-0 h-[2px] rounded-full" />
            <div className="flex items-center gap-2.5">
              <span className="pulse-ring w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
                <span aria-hidden="true" className="sim-probe" />
              </span>
              <p className="text-base font-bold text-slate-900">Giggal.ai</p>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3.5">
              <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-bold items-center justify-center">I</span>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-slate-800 truncate">info@activarmor.com</p>
                <p className="text-xs text-slate-400 truncate">Catch-all, mailbox found</p>
              </div>
              <span className="sim-slot sim-good">
                <span aria-hidden="true" className="sim-spin" />
                <span className="sim-badge"><StatusBadge tone="good">Deliverable</StatusBadge></span>
              </span>
            </div>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              You know it&apos;s real, so you send it. No guessing.
            </p>
          </div>
        </div>
      </section>

      <SectionRule />

      {/* Feature showcase. Keeps "list cleaning", "catch-all", "sender
          reputation" and the REST API and deliverability guides links. One
          short line per card, so the service names carry the section. */}
      <section id="features-showcase" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">Bulk cleaning, API and integrations on one credit balance</h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
            Upload a list, call the{' '}
            <Link href="/public/docs" className="text-indigo-600 font-bold hover:underline">
              REST API
            </Link>{' '}
            or connect a CRM. Our{' '}
            <Link href="/blog" className="text-indigo-600 font-bold hover:underline">
              deliverability guides
            </Link>{' '}
            explain what each result means for your sender reputation.
          </p>
        </div>

        {/* One card per feature. On desktop each card is sticky a little
            lower than the one before, so they stack as you scroll and one
            feature at a time has the stage. */}
        <div className="mt-12 space-y-6 md:space-y-10">
          {FEATURES.map((f, i) => {
            const linkClass = `group inline-flex items-center gap-1.5 text-base font-bold hover:underline ${f.linkColor}`
            return (
              <div
                key={f.title}
                style={{ ['--stack-top' as string]: `${128 + i * 22}px` }}
                data-tilt
                data-spotlight
                className="spotlight md:sticky md:top-[var(--stack-top)] rounded-3xl border border-slate-200/80 bg-white overflow-clip grid md:grid-cols-2 md:min-h-[360px] shadow-[0_-10px_30px_-24px_rgba(15,23,42,0.35)]"
              >
                <span aria-hidden="true" className="tilt-glare" />
                {/* Text half */}
                <div className="p-8 md:p-10 flex flex-col">
                  <span className={`icon-float w-12 h-12 rounded-xl text-white shadow-md flex items-center justify-center ${f.iconBg}`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" fill="none" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {f.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-lg text-slate-600 leading-relaxed">{f.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {f.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-base text-slate-700">
                        <span className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${f.iconBg}`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {f.link.href === 'SIGNUP' ? (
                      <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {f.link.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link href={f.link.href} className={linkClass}>
                        {f.link.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                    {f.secondaryLink && (
                      <Link
                        href={f.secondaryLink.href}
                        className="group inline-flex items-center gap-1.5 text-base font-bold text-slate-500 hover:text-slate-800 hover:underline transition-colors"
                      >
                        {f.secondaryLink.label}
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Preview half: plain light grey, the preview sits on it as a
                    white card. Colour stays in the icon, ticks and link. */}
                <div className="p-6 md:p-10 flex items-center bg-slate-50">
                  <div className="w-full">{f.visual}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <SectionRule />

      {/* Review-platform badges */}
      <ReviewBadges sourceforge={sourceforge} />

      <SectionRule />

      {/* Reviews — real Product Hunt testimonial wall */}
      <ReviewWall />

      <SectionRule />

      {/* Pricing */}
      <section id="pricing" className="cv-section max-w-6xl mx-auto px-6 py-20 md:py-24 space-y-12">
        {/* The claim is computed from lib/competitorPricing, so it only shows
            while the price data backs it (lowest verified price at 10,000 and
            100,000 emails). No competitor prices are shown here; the full
            comparison lives on /alternatives. */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            {PRICE_CLAIM ? (
              <>
                Lowest price.
                <br />
                <span className="text-shimmer">Highest value.</span>
              </>
            ) : (
              'Simple, Flexible Pricing'
            )}
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
            {fmtUsd(G10K)} for 10,000 emails, catch-all checks included.
            {PRICE_CLAIM && (
              <>
                {' '}The lowest price of every verifier we{' '}
                <Link href="/alternatives" className="text-indigo-600 font-semibold hover:underline">
                  compare
                </Link>{' '}
                at 10,000 and 100,000 emails.
              </>
            )}
          </p>
          <p className="mt-2 text-base text-slate-500">
            No hidden fees. Choose between one-time credit packages or monthly plans to fit your outbound email volume.
          </p>
        </div>

        <PricingBlock />
      </section>

      <SectionRule />

      {/* Switching from another verifier — puts the /{brand}-alternative tier
          on the highest-authority page on the site. Those pages were reachable
          only from the footer and /alternatives before, which is part of why
          the comparison pages hanging off them went uncrawled. */}
      <section className="cv-section max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Switching from another verifier?
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              See how Giggal.ai compares with other email verification tools on catch-all handling, pricing and accuracy.
            </p>
            <Link
              href="/alternatives"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-base font-extrabold text-white transition-colors"
            >
              Compare all 28 verifiers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div data-spotlight className="spotlight relative bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 overflow-clip">
            {SWITCHERS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="row-accent group flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-4 hover:bg-indigo-50/60 transition-colors"
              >
                <span className="w-32 sm:w-40 shrink-0 text-base font-bold text-slate-900">{s.name}</span>
                <span className="flex-1 min-w-0 text-sm sm:text-[15px] text-slate-600 leading-snug">{s.blurb}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="cv-section bg-slate-100 py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Connect Your Marketing Stack</h2>
            <p className="text-sm text-slate-600 font-bold">Giggal.ai connects directly with leading CRM and Email Service Providers to sync cleaned contacts automatically.</p>
          </div>

          <IntegrationOrbit
            items={integrations.map((int) => ({ ...int, alt: `${int.name} email verification integration with Giggal.ai` }))}
            more={{ href: '/integrations', label: '80+ More' }}
          />
        </div>
      </section>

      {/* MCP — connect your favourite AI (compact; full guide lives on /mcp) */}
      <McpSection detailsHref="/mcp" divider={false} />

      <SectionRule />

      {/* FAQ */}
      <section id="faq" className="cv-section max-w-3xl mx-auto px-6 py-20 md:py-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-base text-slate-600">Short answers on catch-all checks, accuracy, pricing and setup.</p>
        </div>
        <FaqAccordion items={faqItems} />
      </section>

      {/* Final CTA */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-20 md:pb-24">
        <div className="isolate bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Optimize Your Email Marketing Delivery Today
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Prune invalid subscribers, identify risky catch-alls, and secure your email reputation. Set up your account for free.
          </p>
          <div className="pt-4">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine on-light px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-block hover:scale-[1.03] active:scale-95 duration-200"
            >
              Get Started For Free
            </a>
          </div>
          {/* Drifting light inside the card (globals.css, .cta-orbs). Last
              child, so the space-y margins above do not change. */}
          <div aria-hidden="true" className="cta-orbs">
            <span />
            <span />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
