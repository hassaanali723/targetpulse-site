// Localized competitor alternative page (plans/15). Same sections, order and
// styling as the English pages (components/alternatives/*); the copy comes from
// lib/i18n/alternatives/<locale>.ts and every number from competitorPricing.ts.
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, X, Info, CheckCircle2, AlertCircle, AlertTriangle, HelpCircle } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { hreflangAlternates, localizeHref, type ClusterId } from '@/lib/i18n/clusters'
import { getStrings, SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'
import { ALT_UI, giggalFacts, localizedCompetitor, usdL, numL } from '@/lib/i18n/alternativesL10n'
import { giggalTierAt, tierAt, ALL_COMPETITOR_SLUGS, getCompetitor, type Competitor } from '@/lib/competitorPricing'
import { versusSlug } from '@/lib/compare'
import { isCompareIndexed } from '@/lib/indexPolicy'

export interface AltL10nConfig {
  locale: L10nLocale
  slug: string // competitor slug
  path: string
  cluster: ClusterId
  metaTitle: string
  ogTitle: string
  desc: string
  h1: [string, string, string] // before, highlighted, after
  heroP: string
  bluf: { k: string; v: string }[]
  pricingFirst?: boolean
  catchAllHeading: string
  catchAllProse: string
  catchAllProse2?: string
  benchmark?: boolean
  pricingHeading: string
  pricingProse: string
  pricingProseAfterLadder?: boolean
  featureNote?: string
  testSteps: [string, string, string]
  faqs: FaqItem[]
  ctaHeadline: string
  breadcrumb: string
}

export function altL10nMetadata(cfg: AltL10nConfig): Metadata {
  const s = getStrings(cfg.locale)
  return {
    title: { absolute: cfg.metaTitle },
    description: cfg.desc,
    alternates: { canonical: cfg.path, languages: hreflangAlternates(cfg.cluster) },
    openGraph: {
      siteName: 'Giggal.ai',
      locale: s.ogLocale,
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
      title: cfg.ogTitle,
      description: cfg.desc,
      url: `https://giggal.ai${cfg.path}`,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: cfg.ogTitle, description: cfg.desc },
  }
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const th = 'px-5 py-3 text-[11px] font-black uppercase tracking-wider'

/** A link to an English path, sent to the same page in `locale` when it exists; else marked English. */
export function L10nLink({ href, locale, className, children }: { href: string; locale: L10nLocale; className?: string; children: ReactNode }) {
  const r = localizeHref(href, locale)
  return (
    <Link href={r.href} className={className} {...(r.localized ? {} : { hrefLang: 'en' })}>
      {children}
    </Link>
  )
}

function YesNo({ value, locale }: { value: boolean | null; locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  if (value === null) return <span className="text-slate-400 font-semibold text-[13px]">-</span>
  return value ? (
    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[13px]">
      <Check className="w-4 h-4" /> {ui.yes}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-slate-500 font-bold text-[13px]">
      <X className="w-4 h-4" /> {ui.no}
    </span>
  )
}

function PriceCell({ c, credits, locale }: { c: Competitor; credits: number; locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  const t = tierAt(c, credits)
  if (t && t.status !== 'unknown' && t.totalUsd !== null)
    return (
      <>
        {usdL(locale, t.totalUsd)}
        {t.perMonth && <span className="text-[11px] font-semibold text-slate-400 ml-0.5">{ui.perMonth}</span>}
        {t.status === 'estimate' && <sup className="text-[10px] text-slate-400 ml-0.5">{ui.est}</sup>}
      </>
    )
  return <span className="text-slate-400 font-semibold">{t?.note ?? '-'}</span>
}

function LastVerified({ c, locale }: { c: Competitor; locale: L10nLocale }) {
  const [before, link, after] = ALT_UI[locale].checked(c.name, getStrings(locale).formatDate(c.lastVerified))
  return (
    <p className="text-[12px] text-slate-400 font-medium leading-relaxed">
      {before}
      <a href={c.pricingUrl} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-slate-600 transition-colors">
        {link}
      </a>
      {after}
    </p>
  )
}

function PricingLadder({ c, locale }: { c: Competitor; locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-200">
              <th className={`${th} text-slate-400`}>{ui.volume}</th>
              <th className={`${th} text-indigo-600`}>Giggal.ai</th>
              <th className={`${th} text-slate-400`}>{c.name}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[10000, 100000, 1000000].map((credits) => (
              <tr key={credits}>
                <td className="px-5 py-4 text-sm font-bold text-slate-700">{numL(locale, credits)}</td>
                <td className="px-5 py-4 text-sm font-black text-indigo-700">{usdL(locale, giggalTierAt(credits).totalUsd as number)}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-900">
                  <PriceCell c={c} credits={credits} locale={locale} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {c.tiers.some((t) => t.status === 'estimate') && (
        <p className="text-[11px] text-slate-400 font-medium">
          <sup>{ui.est}</sup> {ui.estimateNote(c.name)}
        </p>
      )}
      {c.pricingBasisNote && <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{c.pricingBasisNote}</p>}
      <LastVerified c={c} locale={locale} />
    </div>
  )
}

function ComparisonTable({ c, locale }: { c: Competitor; locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  const g = giggalFacts(locale)
  const cell = (s: string) => <span className="font-semibold text-slate-700">{s}</span>
  const rows: { label: string; giggal: ReactNode; competitor: ReactNode }[] = [
    {
      label: ui.rows.price10k,
      giggal: <span className="font-black text-indigo-700">{usdL(locale, giggalTierAt(10000).totalUsd as number)}</span>,
      competitor: <span className="font-bold"><PriceCell c={c} credits={10000} locale={locale} /></span>,
    },
    { label: ui.rows.catchAll, giggal: <YesNo value={g.resolvesCatchAll} locale={locale} />, competitor: <YesNo value={c.resolvesCatchAll} locale={locale} /> },
    { label: ui.rows.catchAllPricing, giggal: cell(g.catchAllCreditCost), competitor: cell(c.catchAllCreditCost) },
    {
      label: ui.rows.seg,
      giggal: (
        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[13px]">
          <Check className="w-4 h-4" /> {ui.gateways(g.segGatewayCount)}
        </span>
      ),
      competitor: <YesNo value={c.advertisesSegSupport} locale={locale} />,
    },
    { label: ui.rows.expiry, giggal: cell(g.creditsExpire), competitor: cell(c.creditsExpire) },
    { label: ui.rows.free, giggal: cell(g.freeTier), competitor: cell(c.freeTier) },
    { label: ui.rows.chargesUnknown, giggal: <YesNo value={false} locale={locale} />, competitor: <YesNo value={c.chargesForUnknown} locale={locale} /> },
    { label: ui.rows.accuracy, giggal: cell(g.claimedAccuracy), competitor: cell(c.claimedAccuracy) },
  ]
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
      <table className="w-full text-left border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-slate-50 border-b-2 border-slate-200">
            <th className={`${th} text-slate-400 w-[38%]`}>&nbsp;</th>
            <th className={`${th} text-indigo-600`}>Giggal.ai</th>
            <th className={`${th} text-slate-400`}>{c.name}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.label} className="align-top">
              <th scope="row" className="px-5 py-4 text-[13px] font-bold text-slate-600 text-left">{r.label}</th>
              <td className="px-5 py-4 text-[13px] text-slate-900">{r.giggal}</td>
              <td className="px-5 py-4 text-[13px] text-slate-900">{r.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const VERDICT_ICONS = [
  { Icon: CheckCircle2, tint: 'text-emerald-600' },
  { Icon: AlertCircle, tint: 'text-rose-600' },
  { Icon: AlertTriangle, tint: 'text-amber-600' },
  { Icon: HelpCircle, tint: 'text-slate-500' },
]

function VerdictExplainer({ locale }: { locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b-2 border-slate-200">
            <th className={`${th} text-slate-400`}>{ui.verdictHead[0]}</th>
            <th className={`${th} text-slate-400`}>{ui.verdictHead[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {ui.verdicts.map(([label, meaning], i) => {
            const { Icon, tint } = VERDICT_ICONS[i]
            return (
              <tr key={label}>
                <td className="px-5 py-4 align-top">
                  <span className="inline-flex items-center gap-2 text-sm font-black text-slate-900">
                    <Icon className={`w-4 h-4 ${tint}`} />
                    {label}
                  </span>
                </td>
                <td className="px-5 py-4 text-[13px] sm:text-sm text-slate-600 font-medium">{meaning}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function BenchmarkCallout({ c, locale }: { c: Competitor; locale: L10nLocale }) {
  if (!c.benchmarkAccuracy || !c.benchmarkCatchAllResolved) return null
  const ui = ALT_UI[locale].bench
  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white card-vivid-shadow p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-3xl font-black text-slate-900">{c.benchmarkCatchAllResolved}</div>
          <div className="text-[13px] text-slate-500 font-semibold">{ui.resolved}</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-black text-slate-900">{c.benchmarkAccuracy}</div>
          <div className="text-[13px] text-slate-500 font-semibold">{ui.accuracy}</div>
        </div>
      </div>
      <p className="text-[13px] text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4">{ui.source(c.name)}</p>
      <p className="flex items-start gap-2 text-[12px] text-slate-400 leading-relaxed font-medium">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <span>{ui.caveat}</span>
      </p>
    </div>
  )
}

function Bluf({ points, locale }: { points: { k: string; v: string }[]; locale: L10nLocale }) {
  return (
    <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 md:p-8 card-vivid-shadow">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-indigo-600 mb-5">{ALT_UI[locale].bottomLine}</p>
      <dl className="divide-y divide-slate-100">
        {points.map((p) => (
          <div key={p.k} className="grid grid-cols-[92px_1fr] sm:grid-cols-[132px_1fr] gap-4 py-3 first:pt-0 last:pb-0">
            <dt className="text-[11px] font-black uppercase tracking-wide text-slate-400 pt-0.5">{p.k}</dt>
            <dd className="text-sm md:text-[15px] font-semibold text-slate-800 leading-snug">{p.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/** The comparison pages for `slug` that the English page links, each routed to `locale` when it exists there. */
function HeadToHead({ slug, locale }: { slug: string; locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  const self = getCompetitor(slug)
  const links = ALL_COMPETITOR_SLUGS.filter((o) => o !== slug && isCompareIndexed(versusSlug(slug, o)))
    .map((o) => ({ href: `/compare/${versusSlug(slug, o)}`, label: `${self.name} vs ${getCompetitor(o).name}` }))
    .sort((x, y) => Number(localizeHref(y.href, locale).localized) - Number(localizeHref(x.href, locale).localized))
  if (!links.length) return null
  const [before, link, after] = ui.h2hProse(self.name)
  return (
    <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{ui.h2hHeading(self.name)}</h2>
      <p className="text-base text-slate-600 leading-relaxed font-medium max-w-2xl">
        {before}
        <Link href="/compare" hrefLang="en" className="text-indigo-600 font-bold hover:underline">{link}</Link>
        {after}
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <L10nLink
            key={l.href}
            href={l.href}
            locale={locale}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-700 transition-all"
          >
            {l.label}
          </L10nLink>
        ))}
      </div>
    </section>
  )
}

export function RelatedLinksL10n({ locale }: { locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  return (
    <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{ui.keepReading}</h2>
      <ul className="grid sm:grid-cols-2 gap-3">
        {ui.related.map((l) => {
          const loc = localizeHref(l.href, locale).localized
          return (
            <li key={l.href}>
              <L10nLink
                href={l.href}
                locale={locale}
                className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 card-vivid-shadow transition-colors"
              >
                {l.anchor}
                {loc ? '' : ui.enSuffix}
                <ArrowRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </L10nLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default function AltPageL10n({ cfg }: { cfg: AltL10nConfig }) {
  const { locale } = cfg
  const ui = ALT_UI[locale]
  const c = localizedCompetitor(cfg.slug, locale)

  const catchAll = (
    <section key="ca" className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
      <h2 className={sectionTitle}>{cfg.catchAllHeading}</h2>
      <p className={proseP}>{cfg.catchAllProse}</p>
      <VerdictExplainer locale={locale} />
      {cfg.catchAllProse2 && <p className={proseP}>{cfg.catchAllProse2}</p>}
      {cfg.benchmark && <BenchmarkCallout c={c} locale={locale} />}
    </section>
  )
  const pricing = (
    <section key="pr" className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
      <h2 className={sectionTitle}>{cfg.pricingHeading}</h2>
      {!cfg.pricingProseAfterLadder && <p className={proseP}>{cfg.pricingProse}</p>}
      <PricingLadder c={c} locale={locale} />
      {cfg.pricingProseAfterLadder && <p className={proseP}>{cfg.pricingProse}</p>}
    </section>
  )

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: cfg.breadcrumb, path: cfg.path }])} />
      <JsonLd data={faqPageLd(cfg.faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {cfg.h1[0]}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{cfg.h1[1]}</span>
          {cfg.h1[2]}
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{cfg.heroP}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            {ui.heroCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/alternatives"
            hrefLang="en"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            {ui.compareAll}
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <Bluf points={cfg.bluf} locale={locale} />
      </section>

      {cfg.pricingFirst ? [pricing, catchAll] : [catchAll, pricing]}

      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{ui.featureHeading(c.name)}</h2>
        <ComparisonTable c={c} locale={locale} />
        {cfg.featureNote && <p className="text-[13px] text-slate-500 font-medium">{cfg.featureNote}</p>}
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{ui.tryHeading}</h2>
        <ol className="space-y-3">
          {cfg.testSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-medium">
              <span className="shrink-0 w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-black text-[13px] flex items-center justify-center">{i + 1}</span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <HeadToHead slug={cfg.slug} locale={locale} />

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{ui.faqHeading}</h2>
        </div>
        <FaqAccordion items={cfg.faqs} />
      </section>

      <CtaBandL10n locale={locale} headline={cfg.ctaHeadline} />

      <RelatedLinksL10n locale={locale} />

      <FooterL10n locale={locale} />
    </main>
  )
}
