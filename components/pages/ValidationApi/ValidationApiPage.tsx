import type { Metadata } from 'next'
import React from 'react'
import { ArrowRight, Code2, Terminal } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import JsonLd from '@/components/JsonLd'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import EmailOff from '@/components/EmailOff'
import { breadcrumbLd, faqPageLd, apiSoftwareApplicationLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import { gapAfter } from '@/lib/i18n/cjk'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { getValidationApiStrings } from '@/lib/i18n/pages/validationApiStrings'
import { Rich } from '@/components/disposable/LocalText'

// The email validation API page, one component for every language it ships in. Routes:
// app/(en)/email-validation-api and one per locale, listed in CLUSTERS.validationApi.
// Text: lib/i18n/pages/validationApiStrings.ts. Code blocks, endpoints and JSON field
// names stay below as data, so they are the same in every language.

const SITE = 'https://giggal.ai'
const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const EN_PATH = '/email-validation-api'

/** Pages of this cluster. Falls back to the English path until the cluster is added. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.validationApi as Partial<Record<Locale, string>>)[locale] ?? EN_PATH
}

/** hreflang alternates once the cluster exists; none before that. */
function languagesOf(): Record<string, string> | undefined {
  return hreflangAlternates('validationApi')
}

export function validationApiMetadata(locale: Locale): Metadata {
  const s = getValidationApiStrings(locale)
  const path = pathOf(locale)
  const languages = languagesOf()
  const isEn = locale === 'en'
  // English uses the opengraph-image and twitter-image files in its route folder.
  // Other languages use the shared card, like the other localized pages.
  const ogLocale = isEn ? undefined : (s.ogLocale ?? getStrings(locale as L10nLocale).ogLocale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
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
      ...(ogLocale ? { locale: ogLocale } : {}),
      ...(isEn ? {} : { images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] }),
      title: s.ogTitle,
      description: s.description,
      url: `${SITE}${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description: s.description,
      ...(isEn ? {} : { images: ['/og-card.png'] }),
    },
  }
}

// Code samples. Never translated.
const HERO_CODE = `// 1. Receive submitted form data
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
await createUser({ email });`

const NODE_CODE = `// server.js (Express Route)
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
});`

const PYTHON_CODE = `# app.py (Flask Route)
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
    return jsonify({"success": True})`

const BROWSER_CODE = `// Frontend form submit handler
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
});`

/** The three implementation blocks, in page order; labels come from strings.codeLabels. */
const CODE_BLOCKS: { code: string; icon: string; server: boolean }[] = [
  { code: NODE_CODE, icon: 'text-indigo-400', server: true },
  { code: PYTHON_CODE, icon: 'text-emerald-400', server: true },
  { code: BROWSER_CODE, icon: 'text-sky-400', server: false },
]

/** The {0} and {1} samples in the second regex paragraph. */
const REGEX_EXAMPLES = ['user@example.com', 'asdf12345@gmail.com']
/** The {0} sample in the plus-addressing card. */
const PLUS_EXAMPLE = 'user+trial@domain.com'

/** Badge colors of the three check cards. */
const CHECK_BADGES = ['bg-slate-100 text-slate-600', 'bg-indigo-50 text-indigo-700', 'bg-emerald-50 text-emerald-700']

/** Decision table rows, in the order of strings.decisionRows. */
const DECISION_ROWS: { color: string; condition: string; code?: string }[] = [
  { color: 'text-rose-700', condition: 'status === "undeliverable"' },
  { color: 'text-rose-700', condition: 'details.attributes.disposable === true' },
  { color: 'text-amber-700', condition: 'details.attributes.role_account === true' },
  { color: 'text-amber-700', condition: 'details.attributes.free_email === true' },
  { color: 'text-indigo-700', condition: 'details.attributes.catch_all === true', code: 'catch_all_verdict' },
  { color: 'text-slate-700', condition: 'status === "unknown"' },
]

/** Response field rows, in the order of strings.fieldUsage. */
const FIELD_ROWS: { field: string; type: string }[] = [
  { field: 'data.is_valid', type: 'boolean' },
  { field: 'data.status', type: 'string' },
  { field: 'data.deliverability_score', type: 'number (0-100)' },
  { field: 'data.details.attributes.disposable', type: 'boolean' },
  { field: 'data.details.attributes.free_email', type: 'boolean' },
  { field: 'data.details.attributes.role_account', type: 'boolean' },
  { field: 'data.catch_all_verdict', type: '"valid" | "invalid" | null' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const codeSm = 'font-mono text-sm bg-slate-100 px-1 text-slate-800'
const codeXs = 'font-mono text-xs bg-slate-100 px-1 text-slate-700'

/** A strings-file sentence with its {0}/{1} code samples put back in, and any links rendered. */
function WithCode({ text, codes = [], codeClass, locale }: { text: string; codes?: string[]; codeClass: string; locale: Locale }) {
  const parts = text.split(/\{(\d)\}/)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className={codeClass}>
            {codes[Number(part)]}
          </code>
        ) : (
          part && <Rich key={i} text={part} locale={locale} />
        ),
      )}
    </>
  )
}

export default function ValidationApiPage({ locale }: { locale: Locale }) {
  const s = getValidationApiStrings(locale)
  const path = pathOf(locale)
  const isEn = locale === 'en'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={apiSoftwareApplicationLd({
          name: s.appName,
          url: `${SITE}${path}`,
          description: s.description,
        })}
      />
      <JsonLd data={isEn ? breadcrumbLd(s.crumb, path) : breadcrumbL10n(locale as L10nLocale, [{ name: s.crumb, path }])} />
      <JsonLd data={faqPageLd(s.faqs)} />

      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[800px] left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-34 pb-16 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
            {s.h1Lead}{gapAfter(s.h1Lead)}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
              {s.h1Accent}
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">{s.heroIntro}</p>
        </div>

        {/* Backend decision snippet */}
        <div className="max-w-2xl mx-auto text-left">
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  {s.heroCodeLabel}
                </span>
                <span className="text-emerald-400 font-semibold">{s.heroCodeTag}</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{HERO_CODE}</code>
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
            {s.heroCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#add-to-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-sm transition-colors"
          >
            {s.heroSecondaryCta}
          </a>
        </div>
        <p className="text-sm text-slate-500 font-medium">{s.heroNote}</p>
      </section>

      {/* ── 2. WHY REGEX ALONE ISN'T EMAIL VALIDATION ──────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.regexTitle}</h2>
          {s.regexParas.map((para, i) => (
            <p key={i} className={proseP}>
              <WithCode text={para} codes={REGEX_EXAMPLES} codeClass={codeSm} locale={locale} />
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {s.checkCards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <div className={`w-9 h-9 rounded-xl ${CHECK_BADGES[i]} flex items-center justify-center font-bold text-sm`}>{i + 1}</div>
              <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. WHAT TO BLOCK, FLAG OR ALLOW AT SIGNUP ───────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.decisionTitle}</h2>
          <p className={proseP}>{s.decisionIntro}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                {s.decisionHeaders.map((h) => (
                  <th key={h} className="py-3.5 px-4 font-bold text-slate-900">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DECISION_ROWS.map((row, i) => (
                <tr key={row.condition}>
                  <td className={`py-3.5 px-4 font-bold ${row.color}`}>{s.decisionRows[i].title}</td>
                  <td className="py-3.5 px-4 font-mono text-xs text-slate-600">{row.condition}</td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">
                    <WithCode text={s.decisionRows[i].body} codes={row.code ? [row.code] : []} codeClass={codeXs} locale={locale} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 4. ADD EMAIL VALIDATION TO YOUR SIGNUP FORM ────────── */}
      <section id="add-to-form" className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8 scroll-mt-24">
        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.formTitle}</h2>
          {s.formParas.map((para, i) => (
            <p key={i} className={proseP}>
              {para}
            </p>
          ))}
        </div>

        {/* Numbered Sequence Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {s.formSteps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-black text-xs">
                {i + 1}
              </span>
              <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Code tabs */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold text-slate-900">{s.codeTitle}</h3>

          {CODE_BLOCKS.map((block, i) => (
            <EmailOff key={i}>
              <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-2 font-bold text-slate-200">
                    <Code2 className={`w-4 h-4 ${block.icon}`} />
                    {s.codeLabels[i]}
                  </span>
                  <span className="text-slate-500">{block.server ? s.codeTagServer : s.codeTagClient}</span>
                </div>
                <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{block.code}</code>
                </pre>
              </div>
            </EmailOff>
          ))}

          <p className="text-xs sm:text-sm text-slate-500 font-medium">{s.codeNote}</p>
        </div>
      </section>

      {/* ── 5. STOP DISPOSABLE AND FAKE SIGNUPS ────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.fakeTitle}</h2>
          <p className={proseP}>{s.fakeIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {s.fakeCards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <WithCode text={card.body} codes={[PLUS_EXAMPLE]} codeClass={codeXs} locale={locale} />
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-5 text-sm text-slate-700 space-y-2">
          <p className="font-bold text-amber-900">{s.typoTitle}</p>
          <p className="leading-relaxed text-xs sm:text-sm text-slate-600">{s.typoBody}</p>
        </div>
      </section>

      {/* ── 6. WHERE TO VALIDATE EMAILS IN REAL TIME ───────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.whereTitle}</h2>
          <p className={proseP}>{s.whereIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.whereCards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <Rich text={card.body} locale={locale} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. RESPONSE FIELDS YOU'LL USE AT SIGNUP ────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.fieldsTitle}</h2>
          <p className={proseP}>{s.fieldsIntro}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                {s.fieldsHeaders.map((h) => (
                  <th key={h} className="py-3.5 px-4 font-bold text-slate-900">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FIELD_ROWS.map((row, i) => (
                <tr key={row.field}>
                  <td className="py-3.5 px-4 font-mono text-xs text-indigo-700">{row.field}</td>
                  <td className="py-3.5 px-4 text-slate-500 font-mono text-xs">{row.type}</td>
                  <td className="py-3.5 px-4 text-slate-600">{s.fieldUsage[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500 font-medium">
          <Rich text={s.fieldsNote} locale={locale} />
        </p>
      </section>

      {/* ── 8. PRICING ─────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>{s.pricingTitle}</h2>
          <p className={proseP}>{s.pricingIntro}</p>
        </div>

        {isEn ? <PricingTable /> : <PricingTable strings={getStrings(locale as L10nLocale).pricing} />}

        <p className="text-center text-sm text-slate-500 font-medium">
          <Rich text={s.pricingNote} locale={locale} />
        </p>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
          <p className={proseP}>{s.faqIntro}</p>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {/* ── 10. FINAL CTA ──────────────────────────────────────── */}
      {isEn ? (
        <AltCtaBand headline={s.ctaHeadline} supporting={s.ctaSupporting} buttonText={s.ctaButton} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaHeadline} />
      )}

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
