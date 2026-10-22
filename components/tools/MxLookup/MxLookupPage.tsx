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
import { MX_PAGE_STRINGS } from '@/lib/i18n/tools/mxLookupStrings'
import { Rich } from '@/components/disposable/LocalText'
import MxLookupTool from '@/components/tools/MxLookup/MxLookupTool'

// The MX lookup page, one component for every language it ships in. Routes:
// app/(en)/mx-lookup and one per locale, listed in CLUSTERS.mxLookup.
// Text: lib/i18n/tools/mxLookupStrings.ts (page) and mxToolStrings.ts (tool).

const SITE = 'https://giggal.ai'

/** Pages of this cluster: the English member always exists. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.mxLookup as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.mxLookup.en
}

export function mxLookupMetadata(locale: Locale): Metadata {
  const s = MX_PAGE_STRINGS[locale] ?? MX_PAGE_STRINGS.en
  const path = pathOf(locale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('mxLookup') },
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

// From each provider's own setup documentation, checked against live DNS on
// 2026-10-12 (sources in targetpulse-seo/plans/18-mx-lookup-plan.md). Providers
// whose values we couldn't confirm in their own docs are left out. Notes are per
// language in the strings file.
const PROVIDERS: { name: string; records: string[] }[] = [
  { name: 'Google Workspace', records: ['1 smtp.google.com'] },
  { name: 'Microsoft 365', records: ['yourdomain-com.mail.protection.outlook.com'] },
  { name: 'Zoho Mail', records: ['10 mx.zoho.com', '20 mx2.zoho.com', '50 mx3.zoho.com'] },
  { name: 'Proton Mail', records: ['10 mail.protonmail.ch', '20 mailsec.protonmail.ch'] },
  { name: 'Fastmail', records: ['10 in1-smtp.messagingengine.com', '20 in2-smtp.messagingengine.com'] },
  { name: 'iCloud Mail', records: ['10 mx01.mail.icloud.com', '10 mx02.mail.icloud.com'] },
  { name: 'Namecheap Private Email', records: ['10 mx1.privateemail.com', '10 mx2.privateemail.com'] },
  { name: 'Cloudflare Email Routing', records: ['route1.mx.cloudflare.net', 'route2.mx.cloudflare.net', 'route3.mx.cloudflare.net'] },
  { name: 'Amazon SES', records: ['10 inbound-smtp.us-east-1.amazonaws.com'] },
  { name: 'Hostinger', records: ['5 mx1.hostinger.com', '10 mx2.hostinger.com'] },
  { name: 'IONOS', records: ['mx00.ionos.com', 'mx01.ionos.com'] },
  {
    name: 'OVHcloud',
    records: ['1 mx0.mail.ovh.net', '5 mx1.mail.ovh.net', '50 mx2.mail.ovh.net', '100 mx3.mail.ovh.net', '200 mx4.mail.ovh.net'],
  },
  { name: 'Yandex 360', records: ['10 mx.yandex.net'] },
]

const EXAMPLE_RECORD = 'example.com.  3600  IN  MX  1  smtp.google.com.'

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function MxLookupPage({ locale }: { locale: Locale }) {
  const s = MX_PAGE_STRINGS[locale] ?? MX_PAGE_STRINGS.en
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
        <MxLookupTool locale={locale} />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.howTitle}</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.howSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className={proseP}>{s.howNote}</p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image src="/tools/mx-lookup-v2.webp" alt={s.imageAlt} width={1600} height={900} className="w-full h-auto" loading="lazy" />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.whatTitle}</h2>
          {s.whatBefore.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
          <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto">{EXAMPLE_RECORD}</pre>
          {s.whatAfter.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.priorityTitle}</h2>
          {s.priorityParas.map((para, i) => (
            <p key={i} className={proseP}>
              {para}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.resultsTitle}</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">{s.thResult}</th>
                    <th className="py-2.5 px-4">{s.thMeaning}</th>
                    <th className="py-2.5 px-4">{s.thAction}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {s.results.map((r) => (
                    <tr key={r.result} className="align-top">
                      <td className="py-3 px-4 font-bold text-slate-900">{r.result}</td>
                      <td className="py-3 px-4 text-slate-600">{r.meaning}</td>
                      <td className="py-3 px-4 text-slate-600">{r.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>{s.resultsNote}</p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.providersTitle}</h2>
          <p className={proseP}>{s.providersIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4 w-2/5">{s.thProvider}</th>
                    <th className="py-2.5 px-4">{s.thRecords}</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so long host names get the full width. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {PROVIDERS.map((p) => {
                    const note = s.providerNotes[p.name]
                    return (
                      <tr key={p.name} className="block sm:table-row align-top">
                        <td className="block sm:table-cell pt-3 pb-1 sm:pb-3 px-4">
                          <div className="font-bold text-slate-900">{p.name}</div>
                          {note && <div className="text-slate-500 text-xs mt-1 leading-relaxed">{note}</div>}
                        </td>
                        <td className="block sm:table-cell pt-1 pb-3 sm:pt-3 px-4 font-mono text-xs sm:text-sm text-indigo-600 font-semibold">
                          {p.records.map((r) => (
                            <div key={r} className="break-all sm:break-normal sm:whitespace-nowrap">
                              {r}
                            </div>
                          ))}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            <Rich text={s.providersAfter} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.changeTitle}</h2>
          {s.changeParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.mailboxTitle}</h2>
          {s.mailboxParas.map((para, i) => (
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
