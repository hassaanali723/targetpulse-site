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
  ShieldCheck,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  ShieldAlert,
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
const TITLE = 'Email Validation API for Real-Time Signup Checks | Giggal.ai'
const DESC =
  'Email validation API for signup and checkout forms. Block invalid, disposable and role-based emails in real time with one JSON call. 1,000 free credits.'

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESC,
  alternates: {
    canonical: '/email-validation-api',
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
    title: 'Email Validation API for Real-Time Signup Checks',
    description: DESC,
    url: 'https://giggal.ai/email-validation-api',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Validation API for Real-Time Signup Checks',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is there a free email validation API?',
    a: 'Yes. Every new account receives 1,000 free credits upon registration, with no credit card required. You can generate an API key in your developer dashboard and begin testing real-time form validations immediately. The free credits never expire and provide full access to all validation attributes and checks.',
  },
  {
    q: 'Can I call the API directly from the browser?',
    a: 'No. Calling the API directly from client-side JavaScript would expose your secret API key to anyone inspecting browser network requests. Always submit user form inputs to your own backend server or serverless function first, and have your server execute the request to https://api.giggal.ai/v1/verify.',
  },
  {
    q: 'Does validation send an email to the user?',
    a: 'No message is ever dispatched. The API executes an SMTP socket handshake with the destination mail exchanger and simulates delivery up to the recipient verification command. It closes the session before any email data or body content is transmitted, ensuring zero inbox noise for your users.',
  },
  {
    q: 'Does it detect disposable and temporary addresses?',
    a: 'Yes. Every check inspects the domain against our registry of over 100,000 disposable, throwaway, and temporary email domains. If a match is found, details.attributes.disposable returns true and the status is set to undeliverable, allowing your backend to block temporary accounts.',
  },
  {
    q: 'Should I block role-based addresses like info@?',
    a: 'It depends on your business model. For consumer apps, role accounts like support@ or info@ may represent legitimate organizations. For self-serve B2B SaaS where user accountability is necessary, many companies choose to flag or disallow generic role accounts to prevent shared credential abuse.',
  },
  {
    q: 'What happens with catch-all domains at signup?',
    a: 'Catch-all domains accept all recipient addresses unconditionally, making standard SMTP checks inconclusive. Our API runs in-line deep catch-all verification to evaluate whether the mailbox exists. If the catch-all check returns "valid", you can safely allow signup; if "invalid", the address will bounce and should be stopped.',
  },
  {
    q: "What should my form do if the API doesn't answer in time?",
    a: 'We recommend implementing a fail-open pattern. If your backend call experiences a network timeout or connection error, allow the registration to complete rather than blocking a potential customer. Queue the unvalidated address in your background worker to re-check delivery status later.',
  },
  {
    q: 'Do I need an email validation API or an email verification API?',
    a: 'Choose an email validation API when you need real-time checks on web registration forms to stop typos, disposable inboxes, and bots on form submission. Choose an email verification API when auditing existing marketing databases, synchronizing CRM contacts, or cleaning bulk email files before sending campaigns.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailValidationApiPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={apiSoftwareApplicationLd({
          name: 'Giggal.ai Email Validation API',
          url: 'https://giggal.ai/email-validation-api',
          description: DESC,
        })}
      />
      <JsonLd data={breadcrumbLd('Email validation API', '/email-validation-api')} />
      <JsonLd data={faqPageLd(faqs)} />

      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[800px] left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-34 pb-16 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
            Real-time email validation API for{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
              signup forms
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Validate addresses as users submit them: syntax, mail server and mailbox in one call, with disposable and
            role-based flags so you decide what to accept. Our email validation api blocks bad data at the door,
            keeping fake accounts out of your database.
          </p>
        </div>

        {/* Backend decision snippet */}
        <div className="max-w-2xl mx-auto text-left">
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Backend signup handler
                </span>
                <span className="text-emerald-400 font-semibold">Form Decision</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{`// 1. Receive submitted form data
const { email } = req.body;

// 2. Validate via API
const { data } = await checkEmail(email);

// 3. Make real-time form decision
if (data.status === 'undeliverable') {
  return res.status(400).json({ error: 'Please enter a valid, active email address.' });
}
if (data.details.attributes.disposable) {
  return res.status(400).json({ error: 'Temporary or disposable emails are not allowed.' });
}

// 4. Proceed with account registration
await createUser({ email });`}</code>
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
          <a
            href="#add-to-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-sm transition-colors"
          >
            See how to add it to a form
          </a>
        </div>
        <p className="text-sm text-slate-500 font-medium">
          1,000 free credits, no card needed. Credits never expire.
        </p>
      </section>

      {/* ── 2. WHY REGEX ALONE ISN'T EMAIL VALIDATION ──────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-4">
          <h2 className={sectionTitle}>Why regex alone isn&apos;t email validation</h2>
          <p className={proseP}>
            A regular expression checks only string structure: whether an @ symbol exists, if the domain format looks
            plausible, and whether characters fall within standard ASCII ranges. Regex answers only whether an input
            looks like an email address, not whether anyone can receive messages there.
          </p>
          <p className={proseP}>
            Typing <code className="font-mono text-sm bg-slate-100 px-1 text-slate-800">user@example.com</code> or{' '}
            <code className="font-mono text-sm bg-slate-100 px-1 text-slate-800">asdf12345@gmail.com</code> passes every
            RFC-compliant regex perfectly. Yet one domain may have no active mail servers, and the other mailbox may
            not exist.
          </p>
          <p className={proseP}>
            Our email validation api json service goes far beyond regular expressions. In a single request,
            it inspects DNS records, performs MX host lookups, connects to the destination mail server to test mailbox
            responsiveness, and verifies the domain against extensive disposable lists.
          </p>
          <p className={proseP}>
            Rigid regex patterns also cause false rejections. Custom expressions frequently reject
            uncommon top-level domains like .studio or .cloud, valid international characters, or legitimate addresses
            with unusual punctuation. Our API handles all RFC 5322 syntax specifications automatically, eliminating the need
            to maintain fragile regex libraries in your codebase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">1</div>
            <h3 className="text-base font-bold text-slate-900">Syntax check</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Catches basic typos, missing TLDs, illegal punctuation, and spacing issues before any external network lookups.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
            <h3 className="text-base font-bold text-slate-900">DNS &amp; MX verification</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Verifies domain registration status and discovers configured mail exchangers capable of accepting inbound messages.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">3</div>
            <h3 className="text-base font-bold text-slate-900">SMTP socket handshake</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Talks to the remote mail exchange socket directly to confirm whether the specific mailbox exists and has storage space.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT TO BLOCK, FLAG OR ALLOW AT SIGNUP ───────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>What to block, flag or allow at signup</h2>
          <p className={proseP}>
            Different businesses have different signup requirements. A B2B enterprise SaaS might enforce company emails,
            while a consumer social app welcomes personal Gmail addresses. Here is the recommended decision matrix based
            on real API response attributes:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-3.5 px-4 font-bold text-slate-900">API Result</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">Field condition</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">What the form should do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-rose-700">Invalid</td>
                <td className="py-3.5 px-4 font-mono text-xs text-slate-600">status === &quot;undeliverable&quot;</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Block immediately. Display: &quot;Please enter a valid, active email address.&quot;</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-rose-700">Disposable</td>
                <td className="py-3.5 px-4 font-mono text-xs text-slate-600">details.attributes.disposable === true</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Block, or ask for another address. Display: &quot;Temporary email addresses are not permitted.&quot;</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-amber-700">Role Account</td>
                <td className="py-3.5 px-4 font-mono text-xs text-slate-600">details.attributes.role_account === true</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Allow; flag on B2B forms. Alert account managers or route to general leads bucket.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-amber-700">Free Email</td>
                <td className="py-3.5 px-4 font-mono text-xs text-slate-600">details.attributes.free_email === true</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Allow on B2C apps; require corporate work email on B2B demo or trial forms.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-indigo-700">Catch-All</td>
                <td className="py-3.5 px-4 font-mono text-xs text-slate-600">details.attributes.catch_all === true</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Check <code className="font-mono text-xs bg-slate-100 px-1 text-slate-700">catch_all_verdict</code>: if &quot;valid&quot; allow; if &quot;invalid&quot; block; if null permit registration.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-700">Unknown</td>
                <td className="py-3.5 px-4 font-mono text-xs text-slate-600">status === &quot;unknown&quot;</td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Accept and re-check later (refunded). Fail open so legitimate users are never blocked.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 4. ADD EMAIL VALIDATION TO YOUR SIGNUP FORM ────────── */}
      <section id="add-to-form" className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8 scroll-mt-24">
        <div className="space-y-4">
          <h2 className={sectionTitle}>Add email validation to your signup form</h2>
          <p className={proseP}>
            Follow this four-step sequence to integrate real-time validation safely. Because requests require your private API
            key, run the check from your backend server.
          </p>
          <p className={proseP}>
            Why the fail-open pattern matters: Signup forms are sensitive to delays. If an external API call
            experiences network latency, blocking the form could lose a real customer. Setting a short timeout and
            automatically allowing the registration to proceed ensures legitimate users are not turned away, while your backend
            queues the address for a background check later.
          </p>
        </div>

        {/* Numbered Sequence Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs">
              1
            </span>
            <h3 className="text-base font-bold text-slate-900">Form posts to your backend</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a visitor submits registration details, your browser client transmits the email address to your application endpoint.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs">
              2
            </span>
            <h3 className="text-base font-bold text-slate-900">Backend calls validation API</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your server sends a synchronous POST request to Giggal using your private key stored in an environment variable.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs">
              3
            </span>
            <h3 className="text-base font-bold text-slate-900">Backend applies decision table</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Parse the JSON attributes. If the email is disposable or undeliverable, return a clear error prompt back to the browser.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs">
              4
            </span>
            <h3 className="text-base font-bold text-slate-900">Fail open on timeouts</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If upstream network communication times out, fail open: accept the registration and enqueue a background job to verify later.
            </p>
          </div>
        </div>

        {/* Code tabs */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-slate-900">Implementation code examples</h3>

          {/* Node.js Express Example */}
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 font-bold text-slate-200">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  Backend: Node.js (Express Route)
                </span>
                <span className="text-slate-500">server-side only</span>
              </div>
              <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{`// server.js (Express Route)
const timeoutMs = 5000; // adjust to what your form can tolerate

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const apiRes = await fetch('https://api.giggal.ai/v1/verify', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${process.env.GIGGAL_API_KEY}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
      signal: AbortSignal.timeout(timeoutMs), // fail-open timeout
    });

    const result = await apiRes.json();
    if (result.success) {
      const { status, details } = result.data;

      // Decision checks
      if (status === 'undeliverable') {
        return res.status(400).json({ error: 'This email address does not exist.' });
      }
      if (details.attributes.disposable) {
        return res.status(400).json({ error: 'Disposable email addresses are not accepted.' });
      }
    }
  } catch (err) {
    // Fail open: log timeout and let user proceed
    console.warn('Email check timed out, failing open:', err.message);
  }

  // Create user in database
  const user = await db.users.create({ email, password });
  return res.json({ success: true, userId: user.id });
});`}</code>
              </pre>
            </div>
          </EmailOff>

          {/* Python Flask Example */}
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 font-bold text-slate-200">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  Backend: Python (Flask Route)
                </span>
                <span className="text-slate-500">server-side only</span>
              </div>
              <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{`# app.py (Flask Route)
import os, requests
from flask import Flask, request, jsonify

app = Flask(__name__)
timeout_seconds = 5  # adjust to what your form can tolerate

@app.route("/api/signup", methods=["POST"])
def signup():
    email = request.json.get("email")

    try:
        resp = requests.post(
            "https://api.giggal.ai/v1/verify",
            headers={"Authorization": f"Bearer {os.environ['GIGGAL_API_KEY']}"},
            json={"email": email},
            timeout=timeout_seconds  # fail open on timeout
        )
        data = resp.json().get("data", {})
        if data.get("status") == "undeliverable":
            return jsonify({"error": "Email address is invalid."}), 400
        if data.get("details", {}).get("attributes", {}).get("disposable"):
            return jsonify({"error": "Disposable emails are prohibited."}), 400
    except requests.exceptions.RequestException:
        # Fail open: proceed with signup on timeout
        pass

    # Complete user registration
    return jsonify({"success": True})`}</code>
              </pre>
            </div>
          </EmailOff>

          {/* Browser Fetch Minimal Snippet */}
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 font-bold text-slate-200">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  Frontend: Browser client (calls your own backend)
                </span>
                <span className="text-slate-500">client-side script</span>
              </div>
              <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{`// Frontend form submit handler
const form = document.querySelector('#signup-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#email-input').value;

  const res = await fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  const payload = await res.json();
  if (!res.ok) {
    showFormError(payload.error); // Show friendly user feedback
  } else {
    redirectToDashboard();
  }
});`}</code>
              </pre>
            </div>
          </EmailOff>

          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Important: Never call the Giggal API endpoint directly from client-side scripts. Keep your credentials private on your server.
          </p>
        </div>
      </section>

      {/* ── 5. STOP DISPOSABLE AND FAKE SIGNUPS ────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-4">
          <h2 className={sectionTitle}>Stop disposable and fake signups</h2>
          <p className={proseP}>
            Temporary inboxes degrade your product analytics, consume free trial quotas, and never convert into paid
            customers. Our service actively monitors and flags high-risk signup patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Disposable inboxes</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Checked against our active registry of 100,000+ temporary domains. Learn more about how we identify throwaway
              mailboxes with our{' '}
              <Link href="/disposable-email-checker" className="text-indigo-600 font-bold hover:underline">
                disposable email checker
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Plus-addressing detection</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Flags aliases created with plus-tagging (<code className="font-mono text-xs bg-slate-100 px-1 text-slate-700">user+trial@domain.com</code>),
              preventing single users from creating duplicate trial accounts.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">No-reply mailbox detection</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Detects broadcast and automated mailboxes that discard incoming communication, preventing users from signing up
              with non-interactive addresses.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-5 text-sm text-slate-700 space-y-2">
          <p className="font-bold text-amber-900">Avoid auto-correcting user typos</p>
          <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
            Never silently transform user inputs (e.g. changing gnail.com to gmail.com automatically). If an address fails
            validation, prompt the user with a clear message to verify their entry. Silent rewriting risks delivering account
            activation tokens or billing receipts to the wrong party.
          </p>
        </div>
      </section>

      {/* ── 6. WHERE TO VALIDATE EMAILS IN REAL TIME ───────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Where to validate emails in real time</h2>
          <p className={proseP}>
            Validate email addresses wherever users submit forms across your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">User registration forms</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prevent registration spam and help ensure welcome emails and verification links reach active inboxes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">E-commerce checkout</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ensure shipping notices, receipts, and order confirmations reach customers without delivery failures.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Lead and demo requests</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Filter out fake competitor entries and verify company domains before routing prospects to sales representatives.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Newsletter subscriptions</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Protect your broadcast domain reputation by rejecting malformed entries and bot signups at opt-in.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Webhook automations</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Trigger validation automatically on form webhooks using our pre-built{' '}
              <Link href="/integrations" className="text-indigo-600 font-bold hover:underline">
                Zapier and n8n integrations
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Account profile updates</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Verify new email destinations when existing users modify their profile or billing contact settings.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. RESPONSE FIELDS YOU'LL USE AT SIGNUP ────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Response fields you&apos;ll use at signup</h2>
          <p className={proseP}>
            A compact reference of the core JSON fields required to enforce form validation logic.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-3.5 px-4 font-bold text-slate-900">JSON Field</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">Type</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">Signup Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.is_valid</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">boolean</td>
                <td className="py-3.5 px-4 text-slate-600">Quick boolean check. True when address syntax and mail server tests pass.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.status</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">string</td>
                <td className="py-3.5 px-4 text-slate-600">Primary delivery status: &quot;deliverable&quot;, &quot;undeliverable&quot;, &quot;unknown&quot;.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.deliverability_score</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">number (0-100)</td>
                <td className="py-3.5 px-4 text-slate-600">Quality score based on socket responses, MX stability, and reputation checks.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.details.attributes.disposable</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">boolean</td>
                <td className="py-3.5 px-4 text-slate-600">True when the domain is a known temporary or disposable inbox service.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.details.attributes.free_email</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">boolean</td>
                <td className="py-3.5 px-4 text-slate-600">True for consumer providers (Gmail, Outlook). Enforce corporate domains on B2B forms.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.details.attributes.role_account</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">boolean</td>
                <td className="py-3.5 px-4 text-slate-600">True for organizational addresses like info@, admin@, or support@.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">data.catch_all_verdict</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">&quot;valid&quot; | &quot;invalid&quot; | null</td>
                <td className="py-3.5 px-4 text-slate-600">In-line resolution for catch-all domains. Recover valid leads without discarding.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500 font-medium">
          For complete endpoint definitions, parameter schemas, and error codes, refer to the{' '}
          <Link href="/public/docs" className="text-indigo-600 font-bold hover:underline">
            full API reference
          </Link>
          .
        </p>
      </section>

      {/* ── 8. PRICING ─────────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Email validation API pricing</h2>
          <p className={proseP}>
            Pay only for the validations you execute, with no monthly minimums or commitments. Each API validation
            call consumes 1 credit, with in-line catch-all checks included. Unknown results are refunded automatically,
            and your first 1,000 credits are completely free.
          </p>
        </div>

        <PricingTable />

        <p className="text-center text-sm text-slate-500 font-medium">
          Explore all volume plans and monthly subscription discounts on our{' '}
          <Link href="/pricing" className="text-indigo-600 font-bold hover:underline">
            pricing overview page
          </Link>
          .
        </p>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Email validation API FAQ</h2>
          <p className={proseP}>
            Answers to common implementation questions regarding registration forms and real-time validation.
          </p>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* ── 10. FINAL CTA ──────────────────────────────────────── */}
      <AltCtaBand
        headline="Protect your signup forms today"
        supporting="1,000 free credits, no card needed. Credits never expire."
        buttonText="Get a free API key"
      />

      <Footer />
    </main>
  )
}
