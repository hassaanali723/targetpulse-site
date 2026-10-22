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
import { BIMI_PAGE_STRINGS } from '@/lib/i18n/tools/bimiGeneratorStrings'
import { Rich } from '@/components/disposable/LocalText'
import BimiGeneratorTool from '@/components/tools/BimiGenerator/BimiGeneratorTool'

// The BIMI generator page, one component for every language it ships in. Routes:
// app/(en)/bimi-generator and one per locale, listed in CLUSTERS.bimiGenerator.
// Text: lib/i18n/tools/bimiGeneratorStrings.ts (page) and bimiToolStrings.ts (tool).

const SITE = 'https://giggal.ai'

/** Pages of this cluster: the English member always exists. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.bimiGenerator as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.bimiGenerator.en
}

export function bimiGeneratorMetadata(locale: Locale): Metadata {
  const s = BIMI_PAGE_STRINGS[locale] ?? BIMI_PAGE_STRINGS.en
  const path = pathOf(locale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('bimiGenerator') },
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

// The tags of a BIMI record and an example value for each. Record syntax, so it
// is the same in every language; what each tag does is in the strings file.
const TAGS: { tag: string; example: string }[] = [
  { tag: 'v', example: 'v=BIMI1' },
  { tag: 'l', example: 'l=https://example.com/bimi/logo.svg' },
  { tag: 'a', example: 'a=https://example.com/bimi/cert.pem' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function BimiGeneratorPage({ locale }: { locale: Locale }) {
  const s = BIMI_PAGE_STRINGS[locale] ?? BIMI_PAGE_STRINGS.en
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

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">{s.h1}</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{s.heroIntro}</p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <BimiGeneratorTool locale={locale} />
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
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image src="/tools/bimi-generator-v2.webp" alt={s.imageAlt} width={1600} height={900} className="w-full h-auto" loading="lazy" />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.recordTitle}</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">{s.thTag}</th>
                  <th className="py-3 px-4">{s.thDoes}</th>
                  <th className="py-3 px-4">{s.thExample}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                {TAGS.map((row, i) => (
                  <tr key={row.tag}>
                    <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{row.tag}</td>
                    <td className="py-2.5 px-4">{s.tagMeanings[i]}</td>
                    <td className="py-2.5 px-4 font-mono">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={proseP}>
            <Rich text={s.recordNote} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.logoTitle}</h2>
          <p className={proseP}>
            <Rich text={s.logoPara} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.certTitle}</h2>
          <p className={proseP}>
            <Rich text={s.certPara} locale={locale} />
          </p>
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
