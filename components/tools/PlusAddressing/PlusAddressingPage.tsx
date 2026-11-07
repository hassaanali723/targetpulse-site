import type { ReactNode } from 'react'
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
import { PLUS_PAGE_STRINGS } from '@/lib/i18n/tools/plusAddressingStrings'
import { LocalLink } from '@/components/disposable/LocalText'
import PlusAddressingTool from '@/components/tools/PlusAddressing/PlusAddressingTool'

// The Gmail plus addressing page, one component for every language it ships in.
// Routes: app/(en)/gmail-plus-addressing and one per locale, listed in
// CLUSTERS.plusAddressing. Text: lib/i18n/tools/plusAddressingStrings.ts (page)
// and plusAddressingToolStrings.ts (tool).

const SITE = 'https://giggal.ai'

/** Pages of this cluster: the English member always exists. */
function pathOf(locale: Locale): string {
  // The cluster is added separately; until then every locale falls back to the English slug.
  return (CLUSTERS.plusAddressing as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.plusAddressing.en
}

export function plusAddressingMetadata(locale: Locale): Metadata {
  const s = PLUS_PAGE_STRINGS[locale] ?? PLUS_PAGE_STRINGS.en
  const path = pathOf(locale)
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: {
      canonical: path,
      languages: hreflangAlternates('plusAddressing'),
    },
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

// Plus addressing by provider. Official documentation where it exists; third-party tests are labelled.
// Support and notes are per language in the strings file.
const PROVIDERS: { name: string; href: string; tested?: boolean }[] = [
  { name: 'Gmail', href: 'https://support.google.com/mail/answer/12096' },
  { name: 'Google Workspace', href: 'https://support.google.com/a/users/answer/9308648' },
  { name: 'Microsoft 365', href: 'https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online' },
  { name: 'Outlook.com', href: 'https://office-watch.com/2020/how-to-get-plus-email-addresses-the-new-feature-in-microsoft-365-and-outlook-com/', tested: true },
  { name: 'Proton Mail', href: 'https://proton.me/support/creating-aliases' },
  { name: 'Fastmail', href: 'https://www.fastmail.help/hc/en-us/articles/360060591053' },
  { name: 'iCloud Mail', href: 'https://macmost.com/?p=30405', tested: true },
  { name: 'Yandex Mail', href: 'https://yandex.ru/blog/mail/1223' },
  { name: 'Yahoo Mail', href: 'https://help.yahoo.com/kb/SLN28815.html' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const subTitle = 'text-xl md:text-2xl font-bold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const listUl = 'list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium'
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
      out.push(<span key={m.index} className="font-bold text-slate-900">{m[1]}</span>)
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

export default function PlusAddressingPage({ locale }: { locale: Locale }) {
  const s = PLUS_PAGE_STRINGS[locale] ?? PLUS_PAGE_STRINGS.en
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
        <PlusAddressingTool locale={locale} />
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
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image src="/tools/gmail-plus-addressing-v2.webp" alt={s.imageAlt} width={1600} height={900} className="w-full h-auto" loading="lazy" />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.whatTitle}</h2>
          {s.whatParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.gmailTitle}</h2>
          {s.gmailParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
          <h3 className={subTitle}>{s.filterTitle}</h3>
          <p className={proseP}>
            <Text text={s.filterPara} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.providersTitle}</h2>
          <p className={proseP}>{s.providersIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-2.5 px-4 w-1/4">{s.thProvider}</th>
                  <th className="py-2.5 px-4 w-1/5">{s.thSupport}</th>
                  <th className="py-2.5 px-4">{s.thNotes}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {PROVIDERS.map((p) => {
                  const row = s.providerRows[p.name] ?? PLUS_PAGE_STRINGS.en.providerRows[p.name]
                  return (
                    <tr key={p.name} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold">
                        <a href={p.href} className="text-slate-900 hover:text-indigo-600 hover:underline" {...ext}>
                          {p.name}
                        </a>
                        {p.tested && <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">{s.testedBadge}</span>}
                        <span className="sm:hidden font-semibold text-indigo-600"> · {row.supports}</span>
                      </td>
                      <td className="hidden sm:table-cell py-3 px-4 font-semibold text-indigo-600">{row.supports}</td>
                      <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 text-slate-600">{row.notes}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className={proseP}>{s.providersAfter}</p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.sendTitle}</h2>
          <p className={proseP}>{s.sendIntro}</p>
          <ul className={listUl}>
            {s.sendItems.map((item, i) => (
              <li key={i}>
                <Text text={item} locale={locale} />
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.usesTitle}</h2>
          {s.usesParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
          <ul className={listUl}>
            {s.usesLimits.map((item, i) => (
              <li key={i}>
                <Text text={item} locale={locale} />
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.listTitle}</h2>
          {s.listParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Text text={para} locale={locale} />
            </p>
          ))}
          <ul className={listUl}>
            {s.listRules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
          {s.listAfter.map((para, i) => (
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
