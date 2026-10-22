import { Fragment, type ReactNode } from 'react'
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
import { SPF_PAGE_STRINGS } from '@/lib/i18n/tools/spfCheckerStrings'
import { spfToolStrings, spfNotNeededReason } from '@/lib/i18n/tools/spfToolStrings'
import { LocalLink } from '@/components/disposable/LocalText'
import SpfCheckerTool from '@/components/tools/SpfChecker/SpfCheckerTool'
import { SPF_SENDERS, SPF_NOT_NEEDED } from '@/lib/tools/spfSenders'

// The SPF checker page, one component for every language it ships in. Routes:
// app/(en)/spf-checker and one per locale, listed in CLUSTERS.spfChecker.
// Text: lib/i18n/tools/spfCheckerStrings.ts (page) and spfToolStrings.ts (tool,
// plus the localized reasons of the "no include needed" list).

const SITE = 'https://giggal.ai'

/** Pages of this cluster: the English member always exists. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.spfChecker as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.spfChecker.en
}

export function spfCheckerMetadata(locale: Locale): Metadata {
  const s = SPF_PAGE_STRINGS[locale] ?? SPF_PAGE_STRINGS.en
  const path = pathOf(locale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('spfChecker') },
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

const EXAMPLE_RECORD = 'v=spf1 include:_spf.google.com ~all'

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const subTitle = 'text-xl md:text-2xl font-bold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'
const code = 'font-mono text-[0.9em] font-semibold text-slate-900 bg-slate-100 px-1 py-0.5 rounded break-words'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

/**
 * Renders the strings file's inline markup: **bold**, `code`, [label](/path) as a
 * link routed to the reader's language, and [label](https://...) as an external
 * link that opens in a new tab.
 */
function Text({ text, locale }: { text: string; locale: Locale }) {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      out.push(<strong key={m.index} className="text-slate-900">{m[1]}</strong>)
    } else if (m[2] !== undefined) {
      out.push(<span key={m.index} className={code}>{m[2]}</span>)
    } else if (/^https?:\/\//.test(m[4])) {
      out.push(
        <a key={m.index} href={m[4]} className={link} {...ext}>
          {m[3]}
        </a>,
      )
    } else {
      out.push(
        <LocalLink key={m.index} href={m[4]} locale={locale} className={link}>
          {m[3]}
        </LocalLink>,
      )
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

export default function SpfCheckerPage({ locale }: { locale: Locale }) {
  const s = SPF_PAGE_STRINGS[locale] ?? SPF_PAGE_STRINGS.en
  const t = spfToolStrings(locale)
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
        <SpfCheckerTool locale={locale} />
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
          <Image src="/tools/spf-checker-v2.webp" alt={s.imageAlt} width={1600} height={900} className="w-full h-auto" loading="lazy" />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.whatTitle}</h2>
          <p className={proseP}>
            <Text text={s.whatIntro} locale={locale} />
          </p>
          <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto">{EXAMPLE_RECORD}</pre>
          {s.whatAfter.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.partsTitle}</h2>
          <p className={proseP}>{s.partsIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">{s.thPart}</th>
                    <th className="py-2.5 px-4">{s.thDoes}</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">{s.thLookup}</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so the description gets the full width. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {s.parts.map((p) => (
                    <tr key={p.part} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 pb-1 sm:pb-3 px-4 font-mono font-semibold text-slate-900 sm:whitespace-nowrap">{p.part}</td>
                      <td className="block sm:table-cell py-1 sm:py-3 px-4 text-slate-600">{p.does}</td>
                      <td className="block sm:table-cell pt-1 pb-3 sm:pt-3 px-4 text-slate-600 sm:whitespace-nowrap">
                        <span className="sm:hidden font-bold text-slate-700">{s.lookupLabel}</span>
                        {p.lookup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {s.partsAfter.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.limitTitle}</h2>
          {s.limitParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}

          <h3 className={subTitle}>{s.underTitle}</h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.underSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className={proseP}>{s.underNote}</p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.servicesTitle}</h2>
          <p className={proseP}>{s.servicesIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">{s.thService}</th>
                    <th className="py-2.5 px-4">{s.thInclude}</th>
                    <th className="py-2.5 px-4 text-right">{s.thLookups}</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so long include values get the full width. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {SPF_SENDERS.map((x) => (
                    <tr key={x.include} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold text-slate-900">
                        {x.name}
                        <span className="sm:hidden font-medium text-slate-500">
                          {' '}
                          · {s.lookupCount(x.lookups)}
                        </span>
                      </td>
                      <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 font-mono text-indigo-600 font-semibold break-all sm:break-normal">
                        include:{x.include}
                      </td>
                      <td className="hidden sm:table-cell py-3 px-4 text-slate-600 text-right">{x.lookups}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>{s.servicesNote}</p>

          <h3 className={subTitle}>{s.notNeededTitle}</h3>
          <p className={proseP}>{s.notNeededIntro}</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {SPF_NOT_NEEDED.map((u) => (
              <li key={u.name}>
                <span className="font-bold text-slate-900">{u.name}.</span> {spfNotNeededReason(t, u)}
              </li>
            ))}
          </ul>
          <p className={proseP}>{s.notNeededAfter}</p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.createTitle}</h2>
          <p className={proseP}>{s.createIntro}</p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.createSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {s.createParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.endingTitle}</h2>
          <p className={proseP}>{s.endingIntro}</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.endingList.map((item, i) => (
              <li key={i}>
                <Text text={item} locale={locale} />
              </li>
            ))}
          </ul>
          {s.endingParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
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
          <p className={proseP}>{s.receiverIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {s.spfResults.map((r) => (
                  <tr key={r.result} className="align-top">
                    <td className="py-2.5 px-4 font-mono font-bold text-slate-900 w-28">{r.result}</td>
                    <td className="py-2.5 px-4 text-slate-600">{r.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.errorsTitle}</h2>
          <p className={proseP}>
            <Text text={s.errorsIntro} locale={locale} />
          </p>

          {s.errors.map((e) => (
            <Fragment key={e.title}>
              <h3 className={subTitle}>{e.title}</h3>
              <p className={proseP}>
                <Text text={e.text} locale={locale} />
              </p>
            </Fragment>
          ))}

          <h3 className={subTitle}>{s.mythsTitle}</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {s.myths.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.authTitle}</h2>
          {s.authParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
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
