import type { Metadata } from 'next'
import React from 'react'
import { ArrowRight, HelpCircle, Terminal, ShieldCheck, Star, Code2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import JsonLd from '@/components/JsonLd'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import RatingChips from '@/components/landing/RatingChips'
import AwardRow from '@/components/landing/AwardRow'
import EmailOff from '@/components/EmailOff'
import { breadcrumbLd, faqPageLd, apiSoftwareApplicationLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import { gapAfter } from '@/lib/i18n/cjk'
import { getStrings, SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'
import { getVerificationApiStrings } from '@/lib/i18n/pages/verificationApiStrings'
import { LocalLink, Rich } from '@/components/disposable/LocalText'

// The email verification API page, one component for every language it ships in.
// Routes: app/(en)/email-verification-api and one per locale, listed in
// CLUSTERS.verificationApi. Text: lib/i18n/pages/verificationApiStrings.ts.
// Code samples, endpoints, JSON and field names stay here so they are the same in
// every language.

const SITE = 'https://giggal.ai'
const EN_PATH = '/email-verification-api'

/** Pages of this cluster. Falls back to the English path until the cluster is added. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.verificationApi as Partial<Record<Locale, string>>)[locale] ?? EN_PATH
}

export function verificationApiMetadata(locale: Locale): Metadata {
  const s = getVerificationApiStrings(locale)
  const path = pathOf(locale)
  const isEn = locale === 'en'
  const languages = hreflangAlternates('verificationApi')
  return {
    title: {
      absolute: s.metaTitle,
    },
    description: s.description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
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
    // English gets its image from the route's opengraph-image.png and
    // twitter-image.png files; other languages use the shared card.
    openGraph: {
      siteName: 'Giggal.ai',
      ...(s.ogLocale ? { locale: s.ogLocale } : {}),
      title: s.ogTitle,
      description: s.description,
      url: `${SITE}${path}`,
      type: 'website',
      ...(isEn ? {} : { images: [{ url: '/og-card.png', width: 1200, height: 630, alt: s.ogAlt ?? s.ogTitle }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description: s.description,
      ...(isEn ? {} : { images: ['/og-card.png'] }),
    },
  }
}

// ── Code samples and API data. Not translated. ────────────────────────────────

const CURL_SAMPLE = `curl -X POST https://api.giggal.ai/v1/verify \\
  -H "Authorization: Bearer tp_live_xxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"email":"alex.smith@example.com"}'`

const RESPONSE_SAMPLE = `{
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
        "reason": "Mailbox confirmed deliverable"
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
}`

const OLD_API_SAMPLE = `{
  "email": "sarah.connor@cyberdyne.com",
  "status": "risky",
  "reason": "accept_all_domain",
  "is_deliverable": null,
  "action": "manual_review_required"
}`

const OUR_API_SAMPLE = `{
  "email": "sarah.connor@cyberdyne.com",
  "status": "deliverable",
  "is_valid": true,
  "catch_all_verdict": "valid",
  "catch_all_score": 94,
  "details": { "catch_all": true }
}`

const NODE_SAMPLE = `// Node.js (Node 18+)
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
}`

const PYTHON_SAMPLE = `import os
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
    print("Error:", result.get("error"))`

const BULK_SAMPLE = `// 1. Submit batch job (up to 50,000 emails)
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
const results = await resultsRes.json();`

/** Status values, in the order of s.statusRows. */
const STATUSES = [
  { value: 'deliverable', color: 'text-emerald-700' },
  { value: 'undeliverable', color: 'text-rose-700' },
  { value: 'unknown', color: 'text-slate-700' },
]

/** Endpoint cards, in the order of s.endpoints. `codes` fill the {0} placeholders in the card body. */
const ENDPOINTS = [
  { endpoint: 'POST /v1/verify', badgeColor: 'text-indigo-700 bg-indigo-50', codes: [] as string[] },
  { endpoint: 'POST /v1/verify-batch', badgeColor: 'text-indigo-700 bg-indigo-50', codes: ['Idempotency-Key'] },
  { endpoint: 'GET /v1/jobs/:jobId/results', badgeColor: 'text-emerald-700 bg-emerald-50', codes: ['GET /v1/jobs/:jobId'] },
  { endpoint: 'POST /v1/catchall', badgeColor: 'text-indigo-700 bg-indigo-50', codes: [] as string[] },
]

/** Response flags, in the order of s.flags. */
const FLAGS = [
  { path: 'details.attributes.disposable', codes: [] as string[] },
  { path: 'details.attributes.role_account', codes: [] as string[] },
  { path: 'details.attributes.free_email', codes: [] as string[] },
  { path: 'details.attributes.catch_all', codes: ['catch_all_verdict'] },
  { path: 'details.attributes.has_plus_tag', codes: [] as string[] },
  { path: 'details.attributes.mailbox_full', codes: [] as string[] },
  { path: 'details.attributes.no_reply', codes: [] as string[] },
  { path: 'details.blacklist.is_blacklisted', codes: [] as string[] },
]

/** Requests per 15 minutes, in the order of s.limitLabels. */
const RATE_LIMITS = [300, 30, 30, 600]

/** HTTP codes, in the order of s.errors. */
const HTTP_ERRORS = [
  '400 Bad Request:',
  '401 Unauthorized:',
  '402 Payment Required:',
  '404 Not Found:',
  '409 Conflict:',
  '410 Gone:',
  '429 Too Many Requests:',
]

/** Review cards, in the order of s.reviews. */
const REVIEWERS = [
  { name: 'Vernon L.', platform: 'G2', badge: 'text-rose-600 bg-rose-50' },
  { name: 'Billy W.', platform: 'SourceForge', badge: 'text-orange-600 bg-orange-50' },
  { name: 'Hazel Peterson', platform: 'Product Hunt', badge: 'text-amber-700 bg-amber-50' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const codeXs = 'font-mono text-xs bg-slate-100 px-1 text-slate-700'

/** Strings-file text with {0}, {1} replaced by inline code tokens, plus the Rich markup. */
function Prose({ text, codes, codeClass, locale }: { text: string; codes: string[]; codeClass: string; locale: Locale }) {
  const parts = text.split(/\{(\d+)\}/)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className={codeClass}>
            {codes[Number(part)]}
          </code>
        ) : (
          <Rich key={i} text={part} locale={locale} />
        ),
      )}
    </>
  )
}

export default function VerificationApiPage({ locale }: { locale: Locale }) {
  const s = getVerificationApiStrings(locale)
  const path = pathOf(locale)
  const isEn = locale === 'en'
  const docsHref = '/public/docs'

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

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-34 pb-16 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
            {s.h1Lead}{gapAfter(s.h1Lead)}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
              {s.h1Highlight}
            </span>
            {s.h1Tail ? <> {s.h1Tail}</> : null}
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">{s.heroIntro}</p>
        </div>

        {/* cURL Snippet */}
        <div className="max-w-2xl mx-auto text-left">
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  {s.quickTestLabel}
                </span>
                <span>POST /v1/verify</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{CURL_SAMPLE}</code>
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
          <LocalLink
            href={docsHref}
            locale={locale}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-sm transition-colors"
          >
            {s.heroDocsCta}
          </LocalLink>
        </div>
        <p className="text-sm text-slate-500 font-medium">{s.heroNote}</p>
      </section>

      {/* Review-site ratings and award badges, as on /email-checker and /bulk-email-verifier. */}
      <div className="max-w-6xl mx-auto px-6">
        {s.ratings ? (
          <RatingChips reviews={s.ratings.reviews} ratedAria={s.ratings.ratedAria} decimalComma={s.ratings.decimalComma} />
        ) : (
          <RatingChips />
        )}
      </div>
      {s.awards ? (
        <AwardRow headingLead={s.awards.headingLead} headingRest={s.awards.headingRest} showLabel={s.awards.showLabel} />
      ) : (
        <AwardRow />
      )}

      {/* ── 2. WHAT ONE API CALL RETURNS ──────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.returnsTitle}</h2>
          <p className={proseP}>{s.returnsIntro}</p>
        </div>

        {/* Trimmed JSON response */}
        <EmailOff>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-lg overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span>{s.jsonLabel}</span>
              <span className="text-emerald-400 font-semibold">200 OK</span>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[380px] overflow-y-auto">
              <code>{RESPONSE_SAMPLE}</code>
            </pre>
          </div>
        </EmailOff>

        {/* Status Mapping Table */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xl font-bold text-slate-900">{s.statusTitle}</h3>
          <p className={proseP}>
            <Prose
              text={s.statusIntro}
              codes={['status']}
              codeClass="font-mono text-sm bg-slate-100 px-1.5 py-0.5 rounded text-indigo-700"
              locale={locale}
            />
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/75">
                  <th className="py-3.5 px-4 font-bold text-slate-900">{s.thStatus}</th>
                  <th className="py-3.5 px-4 font-bold text-slate-900">{s.thMeaning}</th>
                  <th className="py-3.5 px-4 font-bold text-slate-900">{s.thAction}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {STATUSES.map((st, i) => (
                  <tr key={st.value}>
                    <td className={`py-3.5 px-4 font-semibold font-mono ${st.color}`}>{st.value}</td>
                    <td className="py-3.5 px-4 text-slate-600">{s.statusRows[i].meaning}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{s.statusRows[i].action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 3. CATCH-ALL ADDRESSES RESOLVED ────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.catchAllTitle}</h2>
          <p className={proseP}>{s.catchAllParas[0]}</p>
          <p className={proseP}>{s.catchAllParas[1]}</p>
          <p className={proseP}>
            <Prose
              text={s.catchAllParas[2]}
              codes={['catch_all_verdict', 'catch_all_score']}
              codeClass="font-mono text-sm bg-slate-100 px-1 text-slate-800"
              locale={locale}
            />
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
                <p className="text-sm font-bold text-slate-600">{s.oldApiLabel}</p>
                <p className="text-xs text-slate-400">{s.oldApiSub}</p>
              </div>
            </div>
            <pre className="rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <code>{OLD_API_SAMPLE}</code>
            </pre>
            <p className="text-xs text-slate-500 leading-relaxed">{s.oldApiNote}</p>
          </div>

          {/* Giggal Signature Card */}
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-white p-6 space-y-4 shadow-lg shadow-indigo-500/10">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{s.ourApiLabel}</p>
                <p className="text-xs text-indigo-600 font-semibold">{s.ourApiSub}</p>
              </div>
            </div>
            <pre className="rounded-xl bg-slate-900 p-4 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto border border-indigo-500/30">
              <code>{OUR_API_SAMPLE}</code>
            </pre>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">{s.ourApiNote}</p>
          </div>
        </div>
      </section>

      {/* ── 4. ENDPOINTS FOR SINGLE, BULK AND CATCH-ALL ────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.endpointsTitle}</h2>
          <p className={proseP}>{s.endpointsIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ENDPOINTS.map((ep, i) => {
            const card = s.endpoints[i]
            return (
              <div
                key={ep.endpoint}
                className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${ep.badgeColor} px-2.5 py-1 rounded-md`}>{ep.endpoint}</span>
                  <span className="text-xs font-semibold text-slate-500">{card.badge}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <Prose text={card.body} codes={ep.codes} codeClass={codeXs} locale={locale} />
                </p>
                <LocalLink
                  href={docsHref}
                  locale={locale}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline pt-2"
                >
                  {card.link} <ArrowRight className="w-3 h-3" />
                </LocalLink>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 5. FLAGS IN EVERY RESPONSE ─────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.flagsTitle}</h2>
          <p className={proseP}>{s.flagsIntro}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-3.5 px-4 font-bold text-slate-900">{s.thFlag}</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">{s.thFieldPath}</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">{s.thDescription}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FLAGS.map((flag, i) => (
                <tr key={flag.path}>
                  <td className="py-3.5 px-4 font-bold text-slate-800">{s.flags[i].name}</td>
                  <td className="py-3.5 px-4 font-mono text-xs text-indigo-600">{flag.path}</td>
                  <td className="py-3.5 px-4 text-slate-600">
                    <Prose text={s.flags[i].description} codes={flag.codes} codeClass={codeXs} locale={locale} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 6. WHERE TEAMS USE THE API ─────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.useCasesTitle}</h2>
          <p className={proseP}>{s.useCasesIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.useCases.map((uc, i) => (
            <div
              key={i}
              className={
                i === s.useCases.length - 1
                  ? 'rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 space-y-3 shadow-sm'
                  : 'rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm'
              }
            >
              <h3 className="text-base font-bold text-slate-900">{uc.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <Rich text={uc.body} locale={locale} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. CODE EXAMPLES ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.codeTitle}</h2>
          <p className={proseP}>{s.codeIntro}</p>
        </div>

        <EmailOff>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2 font-bold text-slate-200">
                <Code2 className="w-4 h-4 text-indigo-400" />
                {s.nodeLabel}
              </span>
              <span className="text-slate-500">{s.serverSideOnly}</span>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{NODE_SAMPLE}</code>
            </pre>
          </div>
        </EmailOff>

        {/* Python Snippet */}
        <EmailOff>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2 font-bold text-slate-200">
                <Code2 className="w-4 h-4 text-emerald-400" />
                {s.pythonLabel}
              </span>
              <span className="text-slate-500">{s.serverSideOnly}</span>
            </div>
            <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{PYTHON_SAMPLE}</code>
            </pre>
          </div>
        </EmailOff>

        {/* Bulk Workflow Snippet */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900">{s.bulkTitle}</h3>
          <p className={proseP}>
            <Prose text={s.bulkIntro} codes={['completed']} codeClass={codeXs} locale={locale} />
          </p>
          <EmailOff>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden text-left">
              <pre className="p-5 text-xs sm:text-[13px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{BULK_SAMPLE}</code>
              </pre>
            </div>
          </EmailOff>
        </div>
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

      {/* ── 9. RATE LIMITS AND ERRORS ──────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.limitsTitle}</h2>
          <p className={proseP}>
            <Prose
              text={s.limitsIntro}
              codes={['X-RateLimit-Limit', 'X-RateLimit-Remaining']}
              codeClass={`${codeXs} ml-1`}
              locale={locale}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">{s.limitsCardTitle}</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {s.limitLabels.map((label, i) => (
                <li
                  key={i}
                  className={
                    i === s.limitLabels.length - 1
                      ? 'flex items-center justify-between'
                      : 'flex items-center justify-between pb-2 border-b border-slate-100'
                  }
                >
                  <span className="font-medium text-slate-700">{label}</span>
                  <span className="font-mono font-bold text-indigo-700">
                    {s.limitUnit.replace('{n}', String(RATE_LIMITS[i]))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">{s.errorsCardTitle}</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {HTTP_ERRORS.map((code, i) => (
                <li key={code}>
                  <strong className="font-mono text-slate-900">{code}</strong> {s.errors[i]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-slate-500 font-medium">
          <Rich text={s.errorsNote} locale={locale} />
        </p>
      </section>

      {/* ── 10. REVIEWS ────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>{s.reviewsTitle}</h2>
          <p className={proseP}>{s.reviewsIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWERS.map((r, i) => (
            <div
              key={r.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">&quot;{s.reviews[i].quote}&quot;</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{s.reviews[i].role}</p>
                </div>
                <span className={`text-xs font-bold ${r.badge} px-2 py-0.5 rounded`}>{r.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. FAQ ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
          <p className={proseP}>{s.faqIntro}</p>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {/* ── 12. FINAL CTA ──────────────────────────────────────── */}
      {isEn ? (
        <AltCtaBand headline={s.ctaHeadline} supporting={s.ctaSupporting} buttonText={s.ctaButton} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaHeadline} />
      )}

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
