import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Upload,
  ScanSearch,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Timer,
  Users,
  Copy,
  Send,
  UserPlus,
  Archive,
  Database,
  Code2,
  Workflow,
  Bot,
  Sparkles,
} from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import BulkScanDemo from '@/components/landing/BulkScanDemo'
import MotionRuntime from '@/components/landing/MotionRuntime'
import RatingChips from '@/components/landing/RatingChips'
import AwardRow from '@/components/landing/AwardRow'
import JsonLd from '@/components/JsonLd'
import { RAW_OFFERS } from '@/components/landing/pricingOffers'
import { faqPageLd, ORG_ID } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, HREFLANG_CODE, localizeHref } from '@/lib/i18n/clusters'
import type { L10nLocale } from '@/lib/i18n/strings'
import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'

// The translated bulk email verifier pages (CLUSTERS.bulkVerifier). Same
// sections, order, design and widths as the English page,
// app/(en)/bulk-email-verifier/page.tsx. Only the text differs: each language
// passes its copy from lib/i18n/bulkVerifier/<locale>.tsx. When the English
// page changes, change this file and the five copy files together.

/**
 * A link inside running text. `href` is the English path; it is rewritten to
 * the same page in `locale` when that page exists, and kept as is otherwise.
 */
export function InlineLink({ href, locale, children }: { href: string; locale: L10nLocale; children: ReactNode }) {
  return (
    <Link href={localizeHref(href, locale).href} className="text-indigo-600 font-bold hover:underline">
      {children}
    </Link>
  )
}

type LeadRest = { lead: string; rest: string }
type TitleText = { title: string; text: string }

export interface BulkVerifierCopy {
  meta: {
    title: string
    description: string
    /** Breadcrumb and app name in the JSON-LD. */
    breadcrumb: string
    appName: string
  }
  hero: {
    h1Lead: string
    h1Rest: string
    intro: string
    ctaPrimary: string
    ctaPricing: string
    /** The three check-mark lines under the buttons. */
    checks: [string, string, string]
  }
  /** Values and labels of the four fact cards: 50,000 / 98.5% / 1 credit / <3%. */
  facts: [{ v: string; l: string }, { v: string; l: string }, { v: string; l: string }, { v: string; l: string }]
  definition: { title: string; text: string }
  steps: { title: string; intro: string; items: [TitleText, TitleText, TitleText] }
  results: {
    title: string
    intro: string
    valid: TitleText
    invalid: TitleText
    unknown: TitleText
    flagsIntro: string
    /** Catch-all, disposable (linked to the disposable checker), role-based, duplicate. */
    flags: [LeadRest, LeadRest, LeadRest, LeadRest]
  }
  catchAll: { title: string; paragraphs: [ReactNode, ReactNode, ReactNode] }
  pricing: {
    title: string
    intro: string
    colCredits: string
    colPrice: string
    colPer1k: string
    freeLabel: string
    freeNote: string
    footnote: ReactNode
  }
  useCases: { title: string; intro: string; items: [string, string, string, string] }
  /** API, integrations, MCP server. */
  software: { title: string; intro: string; items: [TitleText, TitleText, TitleText] }
  versus: { listTitle: string; listText: ReactNode; oneTitle: string; oneText: ReactNode }
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export default function BulkVerifierL10n({
  locale,
  copy: t,
  signupUrl,
  checker,
  num,
  usd,
}: {
  locale: L10nLocale
  copy: BulkVerifierCopy
  signupUrl: string
  /** The ratings and award strings, shared with the translated email checker page. */
  checker: Pick<EmailCheckerCopy, 'ratings' | 'awards'>
  /** The language's number and dollar formats (lib/i18n/<locale>.ts). */
  num: (n: number, decimals?: number) => string
  usd: (n: number, decimals?: number) => string
}) {
  // French groups thousands with a narrow no-break space (U+202F). The page
  // font draws it almost zero wide, so 10 000 reads as 10000; a normal
  // no-break space keeps the gap visible.
  const n = (v: number, d?: number) => num(v, d).replace(/\u202f/g, '\u00a0')
  const money = (v: number, d?: number) => usd(v, d).replace(/\u202f/g, '\u00a0')
  const path = CLUSTERS.bulkVerifier[locale]
  const url = `https://giggal.ai${path}`
  const prices = RAW_OFFERS.map((o) => o.price)
  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name: t.meta.appName,
    url,
    inLanguage: HREFLANG_CODE[locale],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Email Verification',
    operatingSystem: 'Web',
    description: t.meta.description,
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      price: Math.min(...prices).toFixed(2),
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: String(RAW_OFFERS.length),
    },
  }
  const pricingHref = CLUSTERS.pricing[locale]
  const stepIcons = [Upload, ScanSearch, Download]
  const flagIcons = [ShieldCheck, Timer, Users, Copy]
  const useIcons = [Send, UserPlus, Archive, Database]
  const software = [
    { Icon: Code2, href: '/email-verification-api' },
    { Icon: Workflow, href: CLUSTERS.integrations[locale] },
    { Icon: Bot, href: '/mcp' },
  ]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: t.meta.breadcrumb, path }])} />
      <JsonLd data={softwareLd} />
      <JsonLd data={faqPageLd(t.faqs)} />
      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <NavbarL10n locale={locale} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
              {t.hero.h1Lead}{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
                {t.hero.h1Rest}
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">{t.hero.intro}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={signupUrl}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-lg shadow-indigo-600/25 transition-colors"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href={pricingHref}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold hover:border-indigo-200 transition-colors"
              >
                {t.hero.ctaPricing}
              </Link>
            </div>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-500">
              {t.hero.checks.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> {c}
                </li>
              ))}
            </ul>
          </div>
          <BulkScanDemo
            total={n(4820)}
            summary={[
              { tone: 'valid', label: t.results.valid.title, value: n(4145) },
              { tone: 'invalid', label: t.results.invalid.title, value: n(579) },
              { tone: 'unknown', label: t.results.unknown.title, value: n(96) },
            ]}
          />
        </div>

        {/* Facts row */}
        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {t.facts.map((s) => (
            <div key={s.l} className={`${card} p-5 text-center`}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className="block text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">{s.v}</span>
                <span className="mt-1 block text-[13px] font-semibold text-slate-500">{s.l}</span>
              </dd>
            </div>
          ))}
        </dl>

        <RatingChips className="mt-10" reviews={checker.ratings.reviews} ratedAria={checker.ratings.ratedAria} />
      </section>

      <AwardRow headingLead={checker.awards.headingLead} headingRest={checker.awards.headingRest} showLabel={checker.awards.showLabel} />

      {/* ── DEFINITION ───────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>{t.definition.title}</h2>
        <p className={proseP}>{t.definition.text}</p>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.steps.title}</h2>
          <p className={`${proseP} mt-4`}>{t.steps.intro}</p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {t.steps.items.map((s, i) => {
            const Icon = stepIcons[i]
            return (
              <li key={s.title} className={`${card} relative p-6`}>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-black text-white ring-2 ring-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{s.text}</p>
              </li>
            )
          })}
        </ol>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.results.title}</h2>
          <p className={`${proseP} mt-4`}>{t.results.intro}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { Icon: CheckCircle2, ...t.results.valid, tone: 'border-emerald-200 bg-emerald-50/60', icon: 'bg-emerald-500 text-white', label: 'text-emerald-700' },
            { Icon: XCircle, ...t.results.invalid, tone: 'border-rose-200 bg-rose-50/60', icon: 'bg-rose-500 text-white', label: 'text-rose-700' },
            { Icon: Clock, ...t.results.unknown, tone: 'border-slate-200 bg-slate-50', icon: 'bg-slate-400 text-white', label: 'text-slate-600' },
          ].map((r) => (
            <div key={r.title} className={`rounded-2xl border p-6 ${r.tone}`}>
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${r.icon}`}>
                  <r.Icon className="h-5 w-5" />
                </span>
                <h3 className={`text-xl font-extrabold ${r.label}`}>{r.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium">{r.text}</p>
            </div>
          ))}
        </div>
        <div className={`mt-8 ${card} rounded-3xl p-6 md:p-8`}>
          <p className="text-sm md:text-base font-semibold text-slate-800">{t.results.flagsIntro}</p>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.results.flags.map((f, i) => {
              const Icon = flagIcons[i]
              const href = i === 1 ? CLUSTERS.disposableChecker[locale] : undefined
              return (
                <li key={f.lead} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    <span className="font-bold text-slate-900">
                      {href ? <Link href={href} className="hover:text-indigo-700 hover:underline">{f.lead}</Link> : f.lead}
                    </span>
                    {f.rest}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>{t.catchAll.title}</h2>
        {t.catchAll.paragraphs.map((p, i) => (
          <p key={i} className={proseP}>{p}</p>
        ))}
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.pricing.title}</h2>
          <p className={`${proseP} mt-4`}>{t.pricing.intro}</p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3 px-5 font-bold">{t.pricing.colCredits}</th>
                <th className="py-3 px-5 font-bold">{t.pricing.colPrice}</th>
                <th className="py-3 px-5 font-bold">{t.pricing.colPer1k}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-emerald-50/50">
                <td className="py-3 px-5 font-bold text-slate-900 tabular-nums">{n(1000)}</td>
                <td className="py-3 px-5 font-bold text-emerald-700">{t.pricing.freeLabel}</td>
                <td className="py-3 px-5 text-slate-500">{t.pricing.freeNote}</td>
              </tr>
              {RAW_OFFERS.map((o) => (
                <tr key={o.credits}>
                  <td className="py-3 px-5 font-semibold text-slate-900 tabular-nums">{n(o.credits)}</td>
                  <td className="py-3 px-5 text-slate-700 tabular-nums">{money(o.price)}</td>
                  <td className="py-3 px-5 text-slate-500 tabular-nums">{money((o.price / o.credits) * 1000)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500 font-medium">{t.pricing.footnote}</p>
      </section>

      {/* ── WHEN TO USE IT ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.useCases.title}</h2>
          <p className={`${proseP} mt-4`}>{t.useCases.intro}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.useCases.items.map((text, i) => {
            const Icon = useIcons[i]
            return (
              <li key={text} className={`${card} flex gap-4 p-5`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-emerald-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">{text}</p>
              </li>
            )
          })}
        </ul>
      </section>

      {/* ── SOFTWARE / AUTOMATION ────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.software.title}</h2>
          <p className={`${proseP} mt-4`}>{t.software.intro}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.software.items.map((s, i) => {
            const { Icon, href } = software[i]
            return (
              <Link key={s.title} href={href} className={`${card} group p-6 hover:border-indigo-200 transition-colors`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 flex items-center gap-1.5 text-lg font-extrabold text-slate-900 group-hover:text-indigo-700">
                  {s.title}
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{s.text}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── VERIFICATION VS CLEANING / ONE ADDRESS ───────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-5 md:grid-cols-2">
          <div className={`${card} rounded-3xl p-7`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">{t.versus.listTitle}</h2>
            <p className={`${proseP} mt-3`}>{t.versus.listText}</p>
          </div>
          <div className={`${card} rounded-3xl p-7`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <ScanSearch className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">{t.versus.oneTitle}</h2>
            <p className={`${proseP} mt-3`}>{t.versus.oneText}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center">
          <h2 className={sectionTitle}>{t.faqTitle}</h2>
        </div>
        <FaqAccordion items={t.faqs} />
      </section>

      <CtaBandL10n locale={locale} headline={t.ctaHeadline} />

      <FooterL10n locale={locale} />
    </main>
  )
}
