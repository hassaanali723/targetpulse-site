import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbTrailLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import { gapAfter } from '@/lib/i18n/cjk'
import type { L10nLocale } from '@/lib/i18n/strings'
import { getMimecastStrings } from '@/lib/i18n/pages/mimecastStrings'
import { LocalLink } from '@/components/disposable/LocalText'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'
import { CheckCircle2, AlertCircle, AlertTriangle, HelpCircle, ArrowRight, Check } from 'lucide-react'

// The Mimecast email verification page, one component for every language it ships in.
// Routes: app/(en)/mimecast-email-verification and one per locale, listed in
// CLUSTERS.mimecast. Text: lib/i18n/pages/mimecastStrings.ts.

const SITE = 'https://giggal.ai'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'
const EN_PATH = '/mimecast-email-verification'

/** Pages of this cluster. Falls back to the English path until the cluster is added. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.mimecast as Partial<Record<Locale, string>>)[locale] ?? EN_PATH
}

/** The SEG parent page in `locale`, or the English one when that language has none. */
function segPathOf(locale: Locale): string {
  return (CLUSTERS.seg as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.seg.en
}

export function mimecastMetadata(locale: Locale): Metadata {
  const s = getMimecastStrings(locale)
  const path = pathOf(locale)
  const languages = hreflangAlternates('mimecast')
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(s.ogLocale ? { locale: s.ogLocale } : {}),
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: s.ogAlt }],
      title: s.ogTitle,
      description: s.description,
      url: `${SITE}${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description: s.description,
    },
  }
}

// Icons and colours for the result rows. Labels and meanings are per language in the
// strings file, in the same order.
const RESULT_ICONS = [
  { Icon: CheckCircle2, tint: 'text-emerald-600' },
  { Icon: AlertCircle, tint: 'text-rose-600' },
  { Icon: AlertTriangle, tint: 'text-amber-600' },
  { Icon: HelpCircle, tint: 'text-slate-500' },
]

// Related links, in the same order as `relatedLinks` in the strings file. English paths;
// LocalLink routes each one to the reader's language when that page exists.
const RELATED_HREFS = ['/seg-email-verification', '/catch-all-verification', '/pricing']

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseBlock = 'space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const relatedLink = 'text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors'

export default function MimecastPage({ locale }: { locale: Locale }) {
  if (!MIMECAST_PAGE_LIVE) notFound()

  const s = getMimecastStrings(locale)
  const path = pathOf(locale)
  const isEn = locale === 'en'
  const crumbs = [
    { name: s.segCrumb, path: segPathOf(locale) },
    { name: s.crumb, path },
  ]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={isEn ? breadcrumbTrailLd(crumbs) : breadcrumbL10n(locale as L10nLocale, crumbs)} />
      <JsonLd data={faqPageLd(s.faqs)} />
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-20 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {s.h1Lead}{gapAfter(s.h1Lead)}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            {s.h1Highlight}
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{s.heroIntro}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            {s.heroCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <LocalLink
            href="/pricing"
            locale={locale}
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            {s.pricingCta}
          </LocalLink>
        </div>
        <p className="text-[12px] text-slate-400 font-medium">{s.heroNote}</p>
      </section>

      {/* ── WHAT MIMECAST DOES ───────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.whatTitle}</h2>
        <div className={proseBlock}>
          {s.whatParas.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ── THE RESPONSE MIMECAST SENDS ──────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.responseTitle}</h2>
        <div className={proseBlock}>
          {s.responseParas.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="pt-2 space-y-4">
          <h3 className="text-lg font-black text-slate-900">{s.notAllowedTitle}</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">{s.notAllowedPara}</p>
        </div>
      </section>

      {/* ── HOW GIGGAL HANDLES MIMECAST ──────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.handlesTitle}</h2>
        <div className={proseBlock}>
          {s.handlesParas.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU GET BACK ────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.resultsTitle}</h2>
        <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">{s.resultHead}</th>
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">{s.meaningHead}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {s.results.map(({ label, meaning }, i) => {
                const { Icon, tint } = RESULT_ICONS[i]
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
        <p className="text-slate-600 text-sm md:text-base font-medium">{s.refundNote}</p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {/* ── RELATED ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>{s.relatedTitle}</h2>
        <ul className="space-y-2.5 text-sm md:text-base font-medium">
          {RELATED_HREFS.map((href, i) => (
            <li key={href}>
              <LocalLink href={href} locale={locale} className={relatedLink}>
                {s.relatedLinks[i]}
              </LocalLink>
            </li>
          ))}
        </ul>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      {isEn ? (
        <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">{s.ctaHeadline}</h2>
            <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">{s.ctaSupporting}</p>
            <div className="pt-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
              >
                {s.ctaButton}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-5 text-[12px] text-indigo-100 font-medium flex-wrap pt-2">
              {s.ctaTrust?.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  {/* One text node, as in the original markup. */}
                  <Check className="w-3.5 h-3.5" />{` ${t}`}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaHeadline} />
      )}

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
