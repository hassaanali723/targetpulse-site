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
import { faqPageLd, breadcrumbLd, toolWebApplicationLd, itemListLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, type Locale } from '@/lib/i18n/clusters'
import type { L10nLocale } from '@/lib/i18n/strings'
import {
  FREE_PROVIDERS_PAGE_STRINGS,
  COMPARE_PROVIDERS,
  type SignupProvider,
} from '@/lib/i18n/tools/freeEmailProvidersStrings'
import { Rich } from '@/components/disposable/LocalText'
import FreeEmailProvidersTool from '@/components/tools/FreeEmailProviders/FreeEmailProvidersTool'
import { FREE_DOMAIN_COUNT, FREE_EMAIL_PROVIDERS } from '@/lib/tools/freeEmailProviders'

// The free email providers page, one component for every language it ships in.
// Routes: app/(en)/free-email-providers and one per locale, listed in
// CLUSTERS.freeEmailProviders. Text: lib/i18n/tools/freeEmailProvidersStrings.ts
// (page) and freeProvidersToolStrings.ts (tool).

const SITE = 'https://giggal.ai'

/** Pages of this cluster: the English member always exists. */
function pathOf(locale: Locale): string {
  return (CLUSTERS.freeEmailProviders as Partial<Record<Locale, string>>)[locale] ?? CLUSTERS.freeEmailProviders.en
}

export function freeEmailProvidersMetadata(locale: Locale): Metadata {
  const s = FREE_PROVIDERS_PAGE_STRINGS[locale] ?? FREE_PROVIDERS_PAGE_STRINGS.en
  const path = pathOf(locale)
  const description = s.description(FREE_DOMAIN_COUNT)
  return {
    title: { absolute: s.metaTitle },
    description,
    alternates: { canonical: path, languages: hreflangAlternates('freeEmailProviders') },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(s.ogLocale ? { locale: s.ogLocale } : {}),
      images: [{ url: s.ogImage, width: 1200, height: 630, alt: s.ogAlt }],
      title: s.ogTitle,
      description,
      url: `${SITE}${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: s.ogTitle,
      description,
      images: [s.ogImage],
    },
  }
}

// Which domains each provider offers to new accounts, from the providers' help
// pages. The other domains in use are worded per language in the strings file.
const SIGNUP: { name: SignupProvider; open: string }[] = [
  { name: 'Gmail', open: 'gmail.com' },
  { name: 'Outlook.com', open: 'outlook.com, hotmail.com' },
  { name: 'Yahoo Mail', open: 'yahoo.com, myyahoo.com' },
  { name: 'iCloud Mail', open: 'icloud.com' },
  { name: 'Proton Mail', open: 'proton.me, protonmail.com' },
  { name: 'Tuta', open: 'tutamail.com, tutanota.com, tutanota.de, tuta.io, keemail.me' },
  { name: 'GMX', open: 'gmx.com, gmx.co.uk, gmx.de, gmx.net' },
  { name: 'mail.com', open: 'mail.com, email.com, usa.com, post.com' },
]

const tableHead = 'bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold'

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const list = 'list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium'

export default function FreeEmailProvidersPage({ locale }: { locale: Locale }) {
  const s = FREE_PROVIDERS_PAGE_STRINGS[locale] ?? FREE_PROVIDERS_PAGE_STRINGS.en
  const path = pathOf(locale)
  const isEn = locale === 'en'
  const pageUrl = `${SITE}${path}`

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={isEn ? breadcrumbLd(s.crumb, path) : breadcrumbL10n(locale as L10nLocale, [{ name: s.crumb, path }])} />
      <JsonLd data={faqPageLd(s.faqs)} />
      <JsonLd
        data={itemListLd({
          id: `${pageUrl}#providers`,
          name: s.listName,
          description: s.listDescription,
          items: COMPARE_PROVIDERS.map((name) => ({
            name,
            url: pageUrl,
            description: `${s.compare[name].storage}. ${s.compare[name].notes}`,
          })),
        })}
      />
      <JsonLd
        data={toolWebApplicationLd({
          name: s.appName,
          url: pageUrl,
          description: s.description(FREE_DOMAIN_COUNT),
          featureList: s.featureList(FREE_DOMAIN_COUNT, FREE_EMAIL_PROVIDERS.length),
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">{s.h1}</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{s.heroIntro(FREE_DOMAIN_COUNT)}</p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <FreeEmailProvidersTool locale={locale} />
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
          <Image src="/tools/free-email-providers-v2.webp" alt={s.imageAlt} width={1600} height={900} className="w-full h-auto" loading="lazy" />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.coverTitle}</h2>
          {s.coverParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.compareTitle}</h2>
          <p className={proseP}>{s.compareIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className={`hidden sm:table-header-group ${tableHead}`}>
                  <tr>
                    <th className="py-2.5 px-4 w-32">{s.thProvider}</th>
                    <th className="py-2.5 px-4 w-48">{s.thStorage}</th>
                    <th className="py-2.5 px-4">{s.thNotes}</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so the notes stay readable. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {COMPARE_PROVIDERS.map((name) => (
                    <tr key={name} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 sm:pb-3 px-4 font-bold text-slate-900">{name}</td>
                      <td className="block sm:table-cell py-1 sm:py-3 px-4 text-slate-900">{s.compare[name].storage}</td>
                      <td className="block sm:table-cell pb-3 sm:pt-3 px-4 text-slate-600 leading-relaxed">{s.compare[name].notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.bestTitle}</h2>
          <p className={proseP}>{s.bestIntro}</p>
          <ul className={list}>
            {s.bestList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className={proseP}>{s.bestNote}</p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.signupTitle}</h2>
          <p className={proseP}>{s.signupIntro}</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className={`hidden sm:table-header-group ${tableHead}`}>
                  <tr>
                    <th className="py-2.5 px-4 w-32">{s.thProvider}</th>
                    <th className="py-2.5 px-4">{s.thNewAccounts}</th>
                    <th className="py-2.5 px-4">{s.thOtherDomains}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {SIGNUP.map((p) => (
                    <tr key={p.name} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 sm:pb-3 px-4 font-bold text-slate-900">{p.name}</td>
                      <td className="block sm:table-cell py-1 sm:py-3 px-4 font-mono text-indigo-600 font-semibold break-words">
                        <span className="sm:hidden font-sans text-slate-500 font-medium">{s.newAccountsLabel}</span>
                        {p.open}
                      </td>
                      <td className="block sm:table-cell pb-3 sm:pt-3 px-4 text-slate-600">
                        <span className="sm:hidden text-slate-500">{s.alsoInUseLabel}</span>
                        {s.signupOther[p.name]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>{s.signupNote}</p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.closeTitle}</h2>
          <p className={proseP}>{s.closeIntro}</p>
          <ul className={list}>
            {s.closeList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className={proseP}>
            <Rich text={s.closeNote} locale={locale} />
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.b2bTitle}</h2>
          {s.b2bParas.map((para, i) => (
            <p key={i} className={proseP}>
              <Rich text={para} locale={locale} />
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>{s.dupesTitle}</h2>
          <p className={proseP}>{s.dupesIntro}</p>
          <ul className={list}>
            {s.dupesList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {isEn ? (
        <AltCtaBand headline={s.ctaHeadline} supporting={s.ctaSupporting} buttonText={s.ctaButton} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaHeadline} />
      )}

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
