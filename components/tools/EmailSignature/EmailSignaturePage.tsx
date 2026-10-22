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
import { EMAIL_SIGNATURE_PAGE_STRINGS } from '@/lib/i18n/tools/emailSignatureStrings'
import { Rich } from '@/components/disposable/LocalText'
import EmailSignatureTool from '@/components/tools/EmailSignature/EmailSignatureTool'

// The email signature generator page, one component for every language it ships
// in. Routes: app/(en)/email-signature-generator and one per locale, listed in
// CLUSTERS.emailSignature. Text: lib/i18n/tools/emailSignatureStrings.ts (page)
// and signatureToolStrings.ts (tool).

const SITE = 'https://giggal.ai'

/** Pages of this cluster: the English member always exists. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.emailSignature as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.emailSignature.en
}

export function emailSignatureMetadata(locale: Locale): Metadata {
  const s = EMAIL_SIGNATURE_PAGE_STRINGS[locale] ?? EMAIL_SIGNATURE_PAGE_STRINGS.en
  const path = pathOf(locale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('emailSignature') },
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
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailSignaturePage({ locale }: { locale: Locale }) {
  const s = EMAIL_SIGNATURE_PAGE_STRINGS[locale] ?? EMAIL_SIGNATURE_PAGE_STRINGS.en
  const path = pathOf(locale)
  const isEn = locale === 'en'
  const ex = s.examples

  const when = (text: string) => (
    <p className="text-xs text-slate-500">
      <span className="font-semibold text-slate-700">{s.whenLabel}</span> {text}
    </p>
  )

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
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <EmailSignatureTool locale={locale} />
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
          <Image
            src="/tools/email-signature-generator-v2.webp"
            alt={s.imageAlt}
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Optional section only some languages have (English has none). */}
        {s.extraSection && (
          <div className="space-y-4">
            <h2 className={sectionTitle}>{s.extraSection.title}</h2>
            {s.extraSection.paras.map((para, i) => (
              <p key={i} className={proseP}>
                <Rich text={para} locale={locale} />
              </p>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.addTitle}</h2>
          {s.addParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.worksTitle}</h2>
          {s.worksParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>
      </section>

      {/* EXAMPLES: a card grid, so it uses the navbar width (CLAUDE.md). */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <div className="space-y-6">
          <h2 className={sectionTitle}>{s.examplesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Example Card 1 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">{ex.simple.title}</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 space-y-0.5">
                  <p className="font-bold text-slate-900">{ex.simple.name}</p>
                  <p className="text-slate-600">{ex.simple.role}</p>
                  <p className="text-slate-500">{ex.simple.contact}</p>
                </div>
              </div>
              {when(ex.simple.when)}
            </div>

            {/* Example Card 2 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">{ex.cta.title}</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 space-y-1">
                  <p className="font-bold text-slate-900">{ex.cta.name}</p>
                  <p className="text-slate-600">{ex.cta.role}</p>
                  <p className="text-slate-500">{ex.cta.phone}</p>
                  <span className="inline-block px-2.5 py-1 rounded bg-indigo-600 text-white font-semibold text-[11px]">
                    {ex.cta.button}
                  </span>
                </div>
              </div>
              {when(ex.cta.when)}
            </div>

            {/* Example Card 3 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">{ex.logo.title}</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-500 shrink-0">
                    {ex.logo.logo}
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-900">{ex.logo.name}</p>
                    <p className="text-slate-600">{ex.logo.role}</p>
                    <p className="text-slate-500">{ex.logo.contact}</p>
                  </div>
                </div>
              </div>
              {when(ex.logo.when)}
            </div>

            {/* Example Card 4 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">{ex.shared.title}</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 space-y-0.5">
                  <p className="font-bold text-slate-900">{ex.shared.name}</p>
                  <p className="text-indigo-600 font-semibold">{ex.shared.link}</p>
                  <p className="text-slate-500">{ex.shared.hours}</p>
                </div>
              </div>
              {when(ex.shared.when)}
            </div>
          </div>
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
