// Localized /compare page (plans/15). Same sections and styling as
// app/(en)/compare/[versus]/page.tsx; the text comes from lib/i18n/compareL10n.ts.
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, X } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { hreflangAlternates, localizeHref } from '@/lib/i18n/clusters'
import { getStrings, SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'
import { ALT_UI } from '@/lib/i18n/alternativesL10n'
import { buildComparisonL10n, comparePairs } from '@/lib/i18n/compareL10n'
import { versusSlug, type CmpValue } from '@/lib/compare'
import { ALL_COMPETITOR_SLUGS, getCompetitor } from '@/lib/competitorPricing'
import { L10nLink } from '@/components/l10n/AltPage'

export function compareStaticParams(locale: L10nLocale) {
  return comparePairs(locale).map((p) => ({ versus: p.versus }))
}

function pairOf(locale: L10nLocale, versus: string) {
  return comparePairs(locale).find((p) => p.versus === versus)
}

export function compareL10nMetadata(locale: L10nLocale, versus: string): Metadata {
  const pair = pairOf(locale, versus)
  if (!pair) return {}
  const c = buildComparisonL10n(locale, versus)
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: pair.path, languages: hreflangAlternates(pair.cluster) },
    openGraph: {
      title: c.ogTitle,
      description: c.metaDescription,
      url: `https://giggal.ai${pair.path}`,
      type: 'website',
      locale: getStrings(locale).ogLocale,
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
    },
    twitter: { card: 'summary_large_image', title: c.ogTitle, description: c.metaDescription },
  }
}

const sectionTitle = 'text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

function Cell({ v, strong, locale }: { v: CmpValue; strong?: boolean; locale: L10nLocale }) {
  const ui = ALT_UI[locale]
  if (v.kind === 'bool') {
    if (v.yes === null) return <span className="text-slate-400 font-semibold text-[13px]">-</span>
    return v.yes ? (
      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[13px]">
        <Check className="w-4 h-4" /> {ui.yes}
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-slate-500 font-bold text-[13px]">
        <X className="w-4 h-4" /> {ui.no}
      </span>
    )
  }
  return <span className={strong ? 'font-black text-indigo-700' : 'font-semibold text-slate-700'}>{v.text}</span>
}

export default function ComparePageL10n({ locale, versus }: { locale: L10nLocale; versus: string }) {
  const pair = pairOf(locale, versus)
  if (!pair) notFound()
  const c = buildComparisonL10n(locale, versus)
  const A = c.a.name
  const B = c.b.name
  const ui = c.ui
  const [aSlug, bSlug] = versus.split('-vs-')

  const others = ALL_COMPETITOR_SLUGS.filter((s) => s !== aSlug && s !== bSlug)
  const related = [...others.slice(0, 4).map((s) => ({ a: aSlug, s })), ...others.slice(0, 4).map((s) => ({ a: bSlug, s }))].map(
    ({ a, s }) => ({ href: `/compare/${versusSlug(a, s)}`, label: `${getCompetitor(a).name} vs ${getCompetitor(s).name}` }),
  )
  const link = 'text-indigo-600 font-bold hover:underline'
  const altLink = (slug: string, name: string) => {
    const r = localizeHref(`/${slug}-alternative`, locale)
    return (
      <L10nLink href={`/${slug}-alternative`} locale={locale} className={link}>
        {ui.altLabel(name)}
        {r.localized ? '' : ALT_UI[locale].enSuffix}
      </L10nLink>
    )
  }

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: `${A} vs ${B}`, path: pair.path }])} />
      <JsonLd data={faqPageLd(c.faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {A} <span className="text-indigo-500">vs</span> {B}
        </h1>
        <p className={`${proseP} max-w-2xl mx-auto`}>{c.intro}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            {ALT_UI[locale].heroCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/compare"
            hrefLang="en"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            {ui.allComparisons}
          </Link>
        </div>
      </section>

      <section className="cv-section max-w-4xl mx-auto px-6 pt-8 pb-16 space-y-6">
        <h2 className={sectionTitle}>{ui.tableHeading(A, B)}</h2>
        <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400 w-[28%]">&nbsp;</th>
                <th className="px-5 py-3 text-[13px] font-bold text-slate-600 text-left">{A}</th>
                <th className="px-5 py-3 text-[13px] font-bold text-slate-600 text-left">{B}</th>
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50/60 border-l border-indigo-100">Giggal.ai</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {c.rows.map((r) => (
                <tr key={r.label} className="align-top">
                  <th scope="row" className="px-5 py-4 text-[13px] font-bold text-slate-600 text-left">{r.label}</th>
                  <td className="px-5 py-4 text-[13px] text-slate-900"><Cell v={r.a} locale={locale} /></td>
                  <td className="px-5 py-4 text-[13px] text-slate-900"><Cell v={r.b} locale={locale} /></td>
                  <td className="px-5 py-4 text-[13px] text-slate-900 bg-indigo-50/40 border-l border-indigo-100"><Cell v={r.giggal} strong locale={locale} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] text-slate-400 font-medium">{ui.tableNote}</p>
      </section>

      {c.sections.map((s) => (
        <section key={s.heading} className="cv-section max-w-3xl mx-auto px-6 pt-10 pb-16 border-t border-slate-200 space-y-5">
          <h2 className={sectionTitle}>{s.heading}</h2>
          <p className={proseP}>{s.prose}</p>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3">
            <p className="text-[13px] md:text-sm font-semibold text-slate-700">
              <span className="text-indigo-700 font-black">{s.giggalEdgeLabel}</span> {s.giggalEdge}
            </p>
          </div>
        </section>
      ))}

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="rounded-3xl border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-8 md:p-10 text-center card-vivid-shadow space-y-5">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{ui.promoHeading}</h2>
          <p className={`${proseP} max-w-2xl mx-auto`}>{ui.promo(A, B)}</p>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            {ui.promoCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-10 pb-16 border-t border-slate-200 space-y-8">
        <h2 className={`${sectionTitle} text-center`}>{ALT_UI[locale].faqHeading}</h2>
        <FaqAccordion items={c.faqs} />
      </section>

      <section className="cv-section max-w-4xl mx-auto px-6 pt-10 pb-24 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{ui.related}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {related.map((r) => (
            <L10nLink
              key={r.href}
              href={r.href}
              locale={locale}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-all card-vivid-shadow"
            >
              {r.label}
              <ArrowRight className="w-4 h-4 opacity-50" />
            </L10nLink>
          ))}
        </div>
        <p className="text-sm text-slate-500 font-medium">
          {ui.altSentence[0]}
          {altLink(aSlug, A)}
          {ui.altSentence[2]}
          {altLink(bSlug, B)}
          {ui.altSentence[4]}
          <Link href="/alternatives" hrefLang="en" className={link}>{ui.compareEvery}</Link>.
        </p>
        <p className="text-sm text-slate-500 font-medium">
          {ALT_UI[locale].toolLead}
          <L10nLink href="/email-checker" locale={locale} className={link}>{ALT_UI[locale].related[0].anchor}</L10nLink>.
        </p>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
