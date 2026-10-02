import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  HelpCircle,
  Copy,
  Terminal,
  ShieldCheck,
  Star,
  ExternalLink,
  Code2,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import EmailOff from '@/components/EmailOff'
import { breadcrumbLd, faqPageLd, apiSoftwareApplicationLd } from '@/lib/schema'

const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const TITLE = 'Email Verification API with Catch-All Resolution | Giggal.ai'
const DESC =
  'Real-time email verification API with SMTP mailbox checks and catch-all resolution in one JSON response. Bulk jobs up to 50,000. 1,000 free credits.'

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESC,
  alternates: {
    canonical: '/email-verification-api',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Email Verification API with Catch-All Resolution',
    description: DESC,
    url: 'https://giggal.ai/email-verification-api',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Verification API with Catch-All Resolution',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is there a free email verification API?',
    a: 'Yes. Every new account receives 1,000 free credits immediately upon registration, with no credit card required. You can generate an API key in your developer dashboard and start sending verification requests right away. The free credits never expire and grant full access to every endpoint, including live SMTP verification and deep catch-all resolution.',
  },
  {
    q: 'How does the API check an address without sending an email?',
    a: 'The API initiates a direct SMTP handshake with the recipient mail server. It performs DNS and MX lookups, connects to the destination mail server, and simulates sending a message up to the RCPT TO command. The remote mail server responds indicating whether the mailbox exists. The connection is terminated cleanly before any message headers or body are transmitted, so your recipient never receives an email.',
  },
  {
    q: 'How are catch-all addresses handled?',
    a: 'On catch-all domains, a standard mail server reports that every address is acceptable, which causes ordinary tools to return "risky" or "unknown". Giggal runs a deep mailbox existence check and returns a valid or invalid result with a catch_all_score from 0 to 100, saving you from discarding real leads.',
  },
  {
    q: 'What does "unknown" mean, and am I charged for it?',
    a: 'An "unknown" status occurs when the destination mail server fails to provide an unambiguous answer within our timeout threshold, typically due to aggressive greylisting or temporary server outages. You are never billed for inconclusive answers: credits used for any verification that returns an unknown status are refunded back to your account balance automatically.',
  },
  {
    q: 'How many emails can I verify per request?',
    a: 'Single verification requests check one email synchronously per call with a direct JSON response. For list verification, our bulk API endpoint accepts up to 50,000 email addresses per batch job asynchronously. You can track progress through job polling and retrieve paginated results when processing completes.',
  },
  {
    q: 'Can I verify emails from Claude, ChatGPT or Cursor?',
    a: 'Yes. Giggal.ai hosts an official remote MCP (Model Context Protocol) server at https://mcp.giggal.ai/mcp. Claude and ChatGPT connect to the hosted server via OAuth with no API key required. For local developer workflows in Cursor, VS Code, and other clients, you can configure the local giggal-mcp server with your API key to verify addresses directly from your editor.',
  },
  {
    q: "What's the difference between an email verification API and an email validation API?",
    a: 'An email verification API evaluates whether an actual mailbox exists by communicating with mail servers over SMTP, checking DNS records, and resolving catch-all addresses across sales lists and customer databases. An email validation API focuses primarily on real-time front-end checks at signup forms to verify syntax, identify disposable domains, and block fake accounts on submission. If you need form protection, explore our email validation API.',
  },
  {
    q: 'What should I look for in an email verification API?',
    a: 'Look for three critical factors: genuine catch-all resolution so you do not lose up to 30% of your B2B contacts to "risky" buckets, transparent billing policies that automatically refund unknown results, and clear pricing per verification with zero hidden recurring fees or monthly minimums.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailVerificationApiPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={apiSoftwareApplicationLd({
          name: 'Giggal.ai Email Verification API',
          url: 'https://giggal.ai/email-verification-api',
          description: DESC,
        })}
      />
      <JsonLd data={breadcrumbLd('Email verification API', '/email-verification-api')} />
      <JsonLd data={faqPageLd(faqs)} />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-34 pb-16 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
            Email verification API that also{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
              resolves catch-all addresses
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Check any address over SMTP with one REST call. On catch-all domains, where most APIs stop at
            &quot;accept-all&quot; or &quot;risky&quot;, you get a valid or invalid answer in the same response.
            Our email verification API gives engineering teams clean JSON data to protect sender reputation across
            outreach pipelines.
          </p>
        </div>

        {/* cURL Snippet */}
        <div className="max-w-2xl mx-auto text-left">
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Quick test
                </span>
                <span>POST /v1/verify</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{`curl -X POST https://api.giggal.ai/v1/verify \\
  -H "Authorization: Bearer tp_live_xxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"email":"alex.smith@example.com"}'`}</code>
              </pre>
            </div>
          </EmailOff>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-base shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get a free API key
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/public/docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-sm transition-colors"
          >
            Read the API reference
          </Link>
        </div>
        <p className="text-sm text-slate-500 font-medium">
          1,000 free credits, no card needed. Credits never expire.
        </p>
      </section>

      {/* ── 2. WHAT ONE API CALL RETURNS ──────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>What one API call returns</h2>
          <p className={proseP}>
            A single call returns full deliverability data. You receive the
            top-level deliverability status, risk evaluation, numerical deliverability score, mailbox attributes,
            and in-line catch-all results.
          </p>
        </div>

        {/* Trimmed JSON response */}
        <EmailOff>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-lg overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span>JSON Response</span>
              <span className="text-emerald-400 font-semibold">200 OK</span>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[380px] overflow-y-auto">
              <code>{`{
  "success": true,
  "data": {
    "email": "alex.smith@example.com",
    "is_valid": true,
    "status": "deliverable",
    "risk_level": "low",
    "deliverability_score": 92,
    "catch_all_score": 89,
    "catch_all_verdict": "valid",
    "details": {
      "general": {
        "domain": "example.com",
        "reason": "Mailbox confirmed deliverable",
        "validation_method": "smtp"
      },
      "attributes": {
        "free_email": false,
        "role_account": false,
        "disposable": false,
        "catch_all": true,
        "has_plus_tag": false,
        "mailbox_full": false,
        "no_reply": false
      },
      "mail_server": {
        "smtp_provider": "google",
        "mx_record": "aspmx.l.google.com"
      }
    }
  },
  "meta": {
    "creditsUsed": 1
  }
}`}</code>
            </pre>
          </div>
        </EmailOff>

        {/* Status Mapping Table */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xl font-bold text-slate-900">How to handle response status values</h3>
          <p className={proseP}>
            The primary delivery status is returned in the <code className="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded text-indigo-700">status</code> field.
            Here is how your backend application should interpret and route each enum value:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/75">
                  <th className="py-3.5 px-4 font-bold text-slate-900">Status</th>
                  <th className="py-3.5 px-4 font-bold text-slate-900">Meaning</th>
                  <th className="py-3.5 px-4 font-bold text-slate-900">Recommended action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-4 font-semibold font-mono text-emerald-700">deliverable</td>
                  <td className="py-3.5 px-4 text-slate-600">The destination mail server accepted the recipient socket. Mailbox is fully active.</td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">Safe to send. Include in primary outreach campaigns.</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold font-mono text-rose-700">undeliverable</td>
                  <td className="py-3.5 px-4 text-slate-600">The mailbox does not exist, syntax is invalid, domain has no MX records, or domain is disposable.</td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">Do not send. Remove from campaigns to avoid hard bounces.</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold font-mono text-slate-700">unknown</td>
                  <td className="py-3.5 px-4 text-slate-600">Inconclusive server response, typically due to greylisting or connection timeout.</td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">Retry check later. Credits used for unknown answers are refunded automatically.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 3. CATCH-ALL ADDRESSES RESOLVED ────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-4">
          <h2 className={sectionTitle}>Catch-all addresses resolved in the same call</h2>
          <p className={proseP}>
            Standard SMTP checks fail on catch-all domains. When a company mail server accepts
            every incoming address, standard tools see a positive response for real mailboxes and fake
            typos alike. Unable to verify further, most tools tag the address &quot;risky&quot; or &quot;accept-all&quot;
            and leave the decision to you.
          </p>
          <p className={proseP}>
            Around 30% of a typical B2B list sits on catch-all domains or domains behind secure email gateways (SEGs)
            like Proofpoint and Mimecast. Deleting them discards real buyers; sending unverified causes bounce spikes.
          </p>
          <p className={proseP}>
            Our verification engine performs in-line deep catch-all resolution. It runs a deep mailbox existence check
            to return a <code className="font-mono text-sm bg-slate-100 px-1 text-slate-800">catch_all_verdict</code> (&quot;valid&quot; or &quot;invalid&quot;)
            and a <code className="font-mono text-sm bg-slate-100 px-1 text-slate-800">catch_all_score</code> from 0 to 100.
            Learn more in our dedicated guides on{' '}
            <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
              catch-all verification
            </Link>{' '}
            and checking mailboxes behind{' '}
            <Link href="/seg-email-verification" className="text-indigo-600 font-bold hover:underline">
              secure email gateways
            </Link>
            .
          </p>
        </div>

        {/* Signature Comparison Element */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Muted Competitor Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold">
                <HelpCircle className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-600">Traditional verification API</p>
                <p className="text-xs text-slate-400">Gives up on accept-all domains</p>
              </div>
            </div>
            <pre className="rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <code>{`{
  "email": "sarah.connor@cyberdyne.com",
  "status": "risky",
  "reason": "accept_all_domain",
  "is_deliverable": null,
  "action": "manual_review_required"
}`}</code>
            </pre>
            <p className="text-xs text-slate-500 leading-relaxed">
              Uncertainty passed to your team. Send and risk high bounces, or discard valid prospective buyers.
            </p>
          </div>

          {/* Giggal Signature Card */}
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-white p-6 space-y-4 shadow-lg shadow-indigo-500/10">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">Giggal.ai API</p>
                <p className="text-xs text-indigo-600 font-semibold">Resolves catch-alls in-line</p>
              </div>
            </div>
            <pre className="rounded-xl bg-slate-900 p-4 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto border border-indigo-500/30">
              <code>{`{
  "email": "sarah.connor@cyberdyne.com",
  "status": "deliverable",
  "is_valid": true,
  "catch_all_verdict": "valid",
  "catch_all_score": 94,
  "details": { "catch_all": true }
}`}</code>
            </pre>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Confirmed active mailbox. Confidently keep your real catch-all leads and protect sender reputation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. ENDPOINTS FOR SINGLE, BULK AND CATCH-ALL ────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Endpoints for single, bulk and catch-all checks</h2>
          <p className={proseP}>
            Whether checking a single contact or verifying large lists, our email verify api provides purpose-built
            endpoints designed for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">POST /v1/verify</span>
              <span className="text-xs font-semibold text-slate-500">1 credit</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Single email verification</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Synchronous verification for a single email address. Runs complete SMTP validation, domain diagnostics, and
              deep catch-all resolution in-line. Returns a complete JSON result.
            </p>
            <Link href="/public/docs" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline pt-2">
              View endpoint docs <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">POST /v1/verify-batch</span>
              <span className="text-xs font-semibold text-slate-500">Up to 50k emails</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Bulk email verification</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Asynchronous processing for up to 50,000 addresses per job. Strips duplicates and invalid syntax server-side.
              Supports the <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700">Idempotency-Key</code> header to prevent double-charges.
            </p>
            <Link href="/public/docs" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline pt-2">
              View batch docs <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">GET /v1/jobs/:jobId/results</span>
              <span className="text-xs font-semibold text-slate-500">Paginated</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Job polling and results</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Poll job progress with <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700">GET /v1/jobs/:jobId</code> every 10 to 15 seconds.
              Retrieve paginated results up to 500 records per page. Results are stored safely for 48 hours.
            </p>
            <Link href="/public/docs" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline pt-2">
              View polling docs <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">POST /v1/catchall</span>
              <span className="text-xs font-semibold text-slate-500">1 credit per address</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Bulk catch-all resolution</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Run deep catch-all resolution across addresses flagged as catch-all from a completed bulk job. Download results
              as a clean CSV with score and status columns.
            </p>
            <Link href="/public/docs" className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline pt-2">
              View catch-all docs <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. FLAGS IN EVERY RESPONSE ─────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Flags in every response</h2>
          <p className={proseP}>
            Beyond valid or invalid, every response includes detailed mailbox attributes to help you segment leads,
            prevent abuse, and apply automated filtering rules.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-3.5 px-4 font-bold text-slate-900">Flag</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">Field path</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">Description and usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Disposable</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.disposable</td>
                <td className="py-3.5 px-4 text-slate-600">Identifies temporary throwaway inboxes. Block immediately to stop trial fraud.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Role Account</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.role_account</td>
                <td className="py-3.5 px-4 text-slate-600">Detects generic departmental mailboxes (info@, billing@, support@). Route to CRM teams.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Free Email</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.free_email</td>
                <td className="py-3.5 px-4 text-slate-600">Flags consumer webmail domains (gmail.com, yahoo.com) to separate personal inboxes from corporate prospects.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Catch-All</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.catch_all</td>
                <td className="py-3.5 px-4 text-slate-600">Flags whether the host accepts all mail. Use with <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700">catch_all_verdict</code> to recover valid leads.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Plus Tag</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.has_plus_tag</td>
                <td className="py-3.5 px-4 text-slate-600">Detects addresses using alias sub-addressing (user+tag@). Prevent multi-account manipulation.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Mailbox Full</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.mailbox_full</td>
                <td className="py-3.5 px-4 text-slate-600">Indicates the storage quota has been exceeded. Mail sent here will soft-bounce.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">No-Reply</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.attributes.no_reply</td>
                <td className="py-3.5 px-4 text-slate-600">Flags unmonitored broadcast addresses. Avoid sending conversational outreach here.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800">Blacklist Check</td>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">details.blacklist.is_blacklisted</td>
                <td className="py-3.5 px-4 text-slate-600">Evaluates domain and server IPs across major DNSBL feeds with reputation scores.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 6. WHERE TEAMS USE THE API ─────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Where teams use the email verification API</h2>
          <p className={proseP}>
            Our endpoints connect directly to data pipelines, CRM workflows, and databases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">CRM and data warehouse sync</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Verify contact data continuously before syncing to Salesforce, HubSpot, or Snowflake. Clean stale records
              on schedule and keep contact data accurate.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Campaign list cleaning</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Scrub email lists prior to major outreach blasts. You can also upload lists directly through our{' '}
              <Link href="/email-list-cleaning" className="text-indigo-600 font-bold hover:underline">
                email list cleaning
              </Link>{' '}
              interface for quick manual workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Lead enrichment pipelines</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Trigger automated SMTP checks whenever inbound SDR or outbound enrichment tools find new corporate emails,
              so reps only contact verified addresses.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Workflow automation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Connect our verification endpoints directly to Zapier, n8n, Make, and webhook workflows via our{' '}
              <Link href="/integrations" className="text-indigo-600 font-bold hover:underline">
                integrations
              </Link>{' '}
              hub.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">AI agents via MCP</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enable Claude, ChatGPT, Cursor, and custom AI agents to verify contacts natively during conversations using our{' '}
              <Link href="/mcp" className="text-indigo-600 font-bold hover:underline">
                MCP server
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Signup form validation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Looking to check addresses as users type them on signup and lead capture forms? Explore our dedicated{' '}
              <Link href="/email-validation-api" className="text-indigo-600 font-bold hover:underline">
                email validation API
              </Link>{' '}
              built for real-time form checks.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CODE EXAMPLES ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Code examples</h2>
          <p className={proseP}>
            Server-side snippets for single and bulk checks. Keep your API key in environment variables.
          </p>
        </div>

        <EmailOff>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2 font-bold text-slate-200">
                <Code2 className="w-4 h-4 text-indigo-400" />
                Single verification: Node.js (fetch)
              </span>
              <span className="text-slate-500">server-side only</span>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{`// Node.js (Node 18+)
const res = await fetch('https://api.giggal.ai/v1/verify', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.GIGGAL_API_KEY}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: 'alex.smith@example.com' }),
});

const data = await res.json();
if (data.success) {
  console.log('Status:', data.data.status); // deliverable, undeliverable, unknown
  console.log('Catch-all result:', data.data.catch_all_verdict); // valid | invalid
} else {
  console.error('Verification error:', data.error);
}`}</code>
            </pre>
          </div>
        </EmailOff>

        {/* Python Snippet */}
        <EmailOff>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2 font-bold text-slate-200">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Single verification: Python (requests)
              </span>
              <span className="text-slate-500">server-side only</span>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{`import os
import requests

url = "https://api.giggal.ai/v1/verify"
headers = {
    "Authorization": f"Bearer {os.environ['GIGGAL_API_KEY']}",
    "Content-Type": "application/json"
}
payload = {"email": "alex.smith@example.com"}

response = requests.post(url, json=payload, headers=headers)
result = response.json()

if result.get("success"):
    data = result["data"]
    print("Status:", data["status"])
    print("Catch-All Result:", data.get("catch_all_verdict"))
else:
    print("Error:", result.get("error"))`}</code>
            </pre>
          </div>
        </EmailOff>

        {/* Bulk Workflow Snippet */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900">Bulk workflow: submit, poll, and fetch results</h3>
          <p className={proseP}>
            Submitting a batch job takes one call. Poll every 10 to 15 seconds until the job status reaches <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700">completed</code>.
          </p>
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
              <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{`// 1. Submit batch job (up to 50,000 emails)
const submitRes = await fetch('https://api.giggal.ai/v1/verify-batch', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.GIGGAL_API_KEY}\`,
    'Content-Type': 'application/json',
    'Idempotency-Key': 'batch-job-2026-10-01-01',
  },
  body: JSON.stringify({
    name: 'Q4 Sales Leads',
    emails: ['alex.smith@example.com', 'maria.garcia@example.org'],
  }),
});
const { data: job } = await submitRes.json();
const jobId = job.jobId;

// 2. Poll job status until completed
// GET https://api.giggal.ai/v1/jobs/\${jobId}

// 3. Fetch paginated verification results
const resultsRes = await fetch(\`https://api.giggal.ai/v1/jobs/\${jobId}/results?page=1&limit=500\`, {
  headers: { 'Authorization': \`Bearer \${process.env.GIGGAL_API_KEY}\` },
});
const results = await resultsRes.json();`}</code>
              </pre>
            </div>
          </EmailOff>
        </div>
      </section>

      {/* ── 8. PRICING ─────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Email verification API pricing</h2>
          <p className={proseP}>
            Simple pay-as-you-go pricing with no monthly lock-in. One credit verifies one address. On single API checks,
            catch-all resolution is included in the same 1 credit. For bulk batch jobs, standard verification runs at 1 credit
            per address, and running deep verification on catch-all rows costs 1 credit per catch-all address checked.
            Credits never expire, and unknown results are refunded automatically.
          </p>
        </div>

        <PricingTable />

        <p className="text-center text-sm text-slate-500 font-medium">
          Need higher enterprise volume? See our full{' '}
          <Link href="/pricing" className="text-indigo-600 font-bold hover:underline">
            pricing tiers
          </Link>
          .
        </p>
      </section>

      {/* ── 9. RATE LIMITS AND ERRORS ──────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Rate limits and errors</h2>
          <p className={proseP}>
            Standard rate limits apply per API key. Rate limit status is returned on all requests via standard headers:
            <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700 ml-1">X-RateLimit-Limit</code> and
            <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700 ml-1">X-RateLimit-Remaining</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Rate limits per 15-minute window</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-medium text-slate-700">Single checks (/v1/verify)</span>
                <span className="font-mono font-bold text-indigo-700">300 requests / 15 min</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-medium text-slate-700">Batch job creation</span>
                <span className="font-mono font-bold text-indigo-700">30 requests / 15 min</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-medium text-slate-700">Catch-all job creation</span>
                <span className="font-mono font-bold text-indigo-700">30 requests / 15 min</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-slate-700">Job polling &amp; results</span>
                <span className="font-mono font-bold text-indigo-700">600 requests / 15 min</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">HTTP status error codes</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li><strong className="font-mono text-slate-900">400 Bad Request:</strong> Invalid syntax or malformed JSON body.</li>
              <li><strong className="font-mono text-slate-900">401 Unauthorized:</strong> Missing, expired, or invalid API key.</li>
              <li><strong className="font-mono text-slate-900">402 Payment Required:</strong> Insufficient account credit balance.</li>
              <li><strong className="font-mono text-slate-900">404 Not Found:</strong> Requested job ID does not exist.</li>
              <li><strong className="font-mono text-slate-900">409 Conflict:</strong> Idempotency key payload collision.</li>
              <li><strong className="font-mono text-slate-900">410 Gone:</strong> Batch job results expired after 48 hours.</li>
              <li><strong className="font-mono text-slate-900">429 Too Many Requests:</strong> Rate limit threshold exceeded.</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-slate-500 font-medium">
          Detailed error response envelopes and payload descriptions are available in the{' '}
          <Link href="/public/docs" className="text-indigo-600 font-bold hover:underline">
            API errors documentation
          </Link>
          .
        </p>
      </section>

      {/* ── 10. REVIEWS ────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>What customers say</h2>
          <p className={proseP}>
            Real feedback from engineering, sales and growth teams using Giggal.ai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &quot;Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn&apos;t verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.&quot;
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">Vernon L.</p>
                <p className="text-xs text-slate-500">Verified G2 Reviewer</p>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">G2</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &quot;Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.&quot;
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">Billy W.</p>
                <p className="text-xs text-slate-500">SourceForge Reviewer</p>
              </div>
              <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">SourceForge</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                &quot;Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.&quot;
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">Hazel Peterson</p>
                <p className="text-xs text-slate-500">Product Hunt Reviewer</p>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Product Hunt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Email verification API FAQ</h2>
          <p className={proseP}>
            Common technical questions about authentication, SMTP checks, and catch-all handling.
          </p>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* ── 12. FINAL CTA ──────────────────────────────────────── */}
      <AltCtaBand
        headline="Start verifying emails in minutes"
        supporting="1,000 free credits, no card needed. Credits never expire."
        buttonText="Get a free API key"
      />

      <Footer />
    </main>
  )
}
