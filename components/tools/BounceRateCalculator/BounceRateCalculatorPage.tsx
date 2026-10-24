import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import type { L10nLocale } from '@/lib/i18n/strings'
import { BOUNCE_RATE_PAGE_STRINGS } from '@/lib/i18n/tools/bounceRateStrings'
import { Rich } from '@/components/disposable/LocalText'
import BounceRateCalculatorTool from '@/components/tools/BounceRateCalculator/BounceRateCalculatorTool'

const SITE = 'https://giggal.ai'

function pathOf(locale: Locale): string {
  return (CLUSTERS.bounceRate as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.bounceRate.en
}

export function bounceRateMetadata(locale: Locale): Metadata {
  const s = BOUNCE_RATE_PAGE_STRINGS[locale] ?? BOUNCE_RATE_PAGE_STRINGS.en
  const path = pathOf(locale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('bounceRate') },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(s.ogLocale ? { locale: s.ogLocale } : {}),
      images: [{ url: s.ogImage, width: 1200, height: 630, alt: s.ogAlt }],
      title: s.ogTitle,
      description: s.description,
      url: `${SITE}${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description: s.description,
      images: [s.ogImage],
    },
  }
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const subTitle = 'text-xl md:text-2xl font-bold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const formulaStyle = 'p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

function SourceTable({ head, rows }: { head: [string, string]; rows: { a: string; b: string; href: string }[] }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
          <tr>
            <th className="py-2.5 px-4 w-1/4">{head[0]}</th>
            <th className="py-2.5 px-4">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white font-medium">
          {rows.map((r) => (
            <tr key={r.a} className="block sm:table-row align-top">
              <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold">
                <a href={r.href} className="text-slate-900 hover:text-indigo-600 hover:underline" {...ext}>
                  {r.a}
                </a>
              </td>
              <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 text-slate-600">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function BounceRateCalculatorPage({ locale }: { locale: Locale }) {
  const s = BOUNCE_RATE_PAGE_STRINGS[locale] ?? BOUNCE_RATE_PAGE_STRINGS.en
  const path = pathOf(locale)
  const isEn = locale === 'en'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={isEn ? breadcrumbLd(s.crumb, path) : breadcrumbL10n(locale as L10nLocale, [{ name: s.crumb, path }])} />
      <JsonLd data={faqPageLd(s.faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: s.appName,
          url: `${SITE}${path}`,
          description: s.description,
          featureList: s.featureList,
        })}
      />

      {/* Soft light behind the hero */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">{s.h1}</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{s.heroIntro}</p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <BounceRateCalculatorTool locale={locale} />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.howTitle}</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.howSteps.map((step, i) => (
              <li key={i}>
                <Rich text={step} locale={locale} />
              </li>
            ))}
          </ol>
          <p className={proseP}>
            <Rich text={s.howFooter} locale={locale} />
          </p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/bounce-rate-calculator-v2.webp"
            alt={s.imageAlt}
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.formulaTitle}</h2>
          <p className={proseP}>
            <Rich text={s.formulaIntro} locale={locale} />
          </p>
          <h3 className={subTitle}>{s.emailFormulaTitle}</h3>
          <pre className={formulaStyle}>{s.emailFormulaCode}</pre>
          <p className={proseP}>
            <Rich text={s.emailFormulaText} locale={locale} />
          </p>
          <h3 className={subTitle}>{s.websiteFormulaTitle}</h3>
          <pre className={formulaStyle}>{s.websiteFormulaCode}</pre>
          <p className={proseP}>
            <Rich text={s.websiteFormulaText} locale={locale} />
          </p>
          <p className={proseP}>
            <Rich text={s.websiteOldText} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.calcEmailTitle}</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.calcEmailSteps.map((step, i) => (
              <li key={i}>
                <Rich text={step} locale={locale} />
              </li>
            ))}
          </ol>
          <p className={proseP}>
            <Rich text={s.calcEmailIntro} locale={locale} />
          </p>
          <SourceTable head={s.definitionsHead} rows={s.definitionsRows} />
          <p className={proseP}>
            <Rich text={s.calcEmailDiff} locale={locale} />
          </p>
          <p className={proseP}>
            <Rich text={s.calcEmailHardNote} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.limitsTitle}</h2>
          <p className={proseP}>
            <Rich text={s.limitsIntro} locale={locale} />
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-2.5 px-4 w-1/4">{s.limitsHead[0]}</th>
                  <th className="py-2.5 px-4 w-20">{s.limitsHead[1]}</th>
                  <th className="py-2.5 px-4">{s.limitsHead[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {s.limitsRows.map((p) => (
                  <tr key={p.name} className="block sm:table-row align-top">
                    <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold">
                      <a href={p.source} className="text-slate-900 hover:text-indigo-600 hover:underline" {...ext}>
                        {p.name}
                      </a>
                      <span className="sm:hidden font-semibold text-indigo-600"> · {p.limit}%</span>
                    </td>
                    <td className="hidden sm:table-cell py-3 px-4 font-bold text-indigo-600">{p.limit}%</td>
                    <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 text-slate-600">{p.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={proseP}>
            <Rich text={s.limitsMailchimpNote} locale={locale} />
          </p>
          <p className={proseP}>
            <Rich text={s.limitsMailboxNote} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.benchmarksTitle}</h2>
          {s.benchmarksParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.hardSoftTitle}</h2>
          {s.hardSoftParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
          <SourceTable head={s.softRulesHead} rows={s.softRulesRows} />
          <p className={proseP}>
            <Rich text={s.hardSoftLink} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.ga4Title}</h2>
          {s.ga4Paras.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.lowerTitle}</h2>
          {s.lowerParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {/* CTA */}
      {isEn ? (
        <AltCtaBand headline={s.ctaHeadline} supporting={s.ctaSupporting} buttonText={s.ctaButton} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaHeadline} />
      )}

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
