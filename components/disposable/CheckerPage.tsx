import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, hreflangAlternates, localizeHref, type Locale } from '@/lib/i18n/clusters'
import type { L10nLocale } from '@/lib/i18n/strings'
import { CHECKER_STRINGS } from '@/lib/i18n/disposableCheckerStrings'
import { consoleStrings as itConsole, SIGNUP_URL as itSignup } from '@/lib/i18n/it'
import { consoleStrings as deConsole, SIGNUP_URL as deSignup } from '@/lib/i18n/de'
import { consoleStrings as esConsole, SIGNUP_URL as esSignup } from '@/lib/i18n/es'
import { consoleStrings as ptConsole, SIGNUP_URL as ptSignup } from '@/lib/i18n/pt-br'
import { consoleStrings as frConsole, SIGNUP_URL as frSignup } from '@/lib/i18n/fr'
import { LocalLink, Rich } from '@/components/disposable/LocalText'
import { ShieldAlert, MailX, XCircle, ArrowRight, Users } from 'lucide-react'

// The disposable email checker, one component for all six languages. Routes:
// app/(en)/disposable-email-checker and one per locale, listed in
// CLUSTERS.disposableChecker. Text: lib/i18n/disposableCheckerStrings.ts.
// The tool's shared labels come from each language's existing console strings;
// its disposable-specific labels and log lines come from the checker strings.

const SITE = 'https://giggal.ai'

const LOCALE_CONSOLE = {
  it: { strings: itConsole, signupUrl: itSignup },
  de: { strings: deConsole, signupUrl: deSignup },
  es: { strings: esConsole, signupUrl: esSignup },
  'pt-br': { strings: ptConsole, signupUrl: ptSignup },
  fr: { strings: frConsole, signupUrl: frSignup },
} as const

export function checkerMetadata(locale: Locale): Metadata {
  const s = CHECKER_STRINGS[locale]
  const path = CLUSTERS.disposableChecker[locale]
  return {
    title: { absolute: s.metaTitle },
    description: s.description,
    alternates: { canonical: path, languages: hreflangAlternates('disposableChecker') },
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

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

const HOW_COLORS = [
  'bg-indigo-50 text-indigo-600',
  'bg-rose-50 text-rose-600',
  'bg-emerald-50 text-emerald-600',
  'bg-violet-50 text-violet-600',
]

const WHY_ICONS = [
  { Icon: MailX, wrap: 'bg-rose-100/70 text-rose-600' },
  { Icon: ShieldAlert, wrap: 'bg-amber-100/70 text-amber-600' },
  { Icon: Users, wrap: 'bg-indigo-100/70 text-indigo-600' },
]

export default function CheckerPage({ locale }: { locale: Locale }) {
  const s = CHECKER_STRINGS[locale]
  const path = CLUSTERS.disposableChecker[locale]
  const isEn = locale === 'en'
  const tool = isEn ? null : LOCALE_CONSOLE[locale as L10nLocale]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={isEn ? breadcrumbLd(s.crumb, path) : breadcrumbL10n(locale as L10nLocale, [{ name: s.crumb, path }])}
      />
      <JsonLd data={faqPageLd(s.faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-[120px] -z-10 pointer-events-none" />

      {isEn ? <Navbar /> : <NavbarL10n locale={locale as L10nLocale} />}

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {s.h1}{' '}
          <span className="bg-gradient-to-r from-rose-600 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
            {s.h1Accent}
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          {s.heroIntro}
        </p>
      </section>

      {/* TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        {tool ? (
          <VerifierConsole
            variant="disposable"
            endpoint="/api/tools/disposable-check"
            defaultEmail=""
            emailFromQuery
            strings={tool.strings}
            signupUrl={tool.signupUrl}
            disposableStrings={s.console}
          />
        ) : (
          <VerifierConsole variant="disposable" endpoint="/api/tools/disposable-check" defaultEmail="" emailFromQuery />
        )}
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          <Rich text={s.toolNote} locale={locale} />
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.howTitle}</h2>
          <p className={proseP}>{s.howIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.how.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-colors space-y-3"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${HOW_COLORS[i]}`}>{i + 1}</div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMON PROVIDERS */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.servicesTitle}</h2>
          <p className={proseP}>{s.servicesIntro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {s.services.map((svc) => (
            <div
              key={svc.name}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-1.5 text-rose-600 font-bold text-sm mb-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{svc.name}</span>
              </div>
              <p className="text-xs text-slate-500 leading-normal">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <LocalLink
            href="/disposable-email-providers"
            locale={locale}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-indigo-50 text-indigo-700 font-bold rounded-xl border border-indigo-200 shadow-sm transition-colors"
          >
            {s.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </LocalLink>
        </div>
      </section>

      {/* WHY BLOCK */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>{s.whyTitle}</h2>
          <p className={proseP}>{s.whyIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {s.why.map((card, i) => {
            const { Icon, wrap } = WHY_ICONS[i]
            return (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${wrap}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  <Rich text={card.text} locale={locale} />
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SINGLE VS BULK */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>{s.bulkTitle}</h2>
        {s.bulkParas.map((para, i) => (
          <p key={i} className={proseP}>
            <Rich text={para} locale={locale} />
          </p>
        ))}
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{s.faqTitle}</h2>
        </div>
        <FaqAccordion items={s.faqs} />
      </section>

      {isEn ? (
        <AltCtaBand headline={s.ctaBand} />
      ) : (
        <CtaBandL10n locale={locale as L10nLocale} headline={s.ctaBand} />
      )}

      {/* RELATED LINKS */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {s.related.map((l) => {
            const localized = localizeHref(l.href, locale).localized
            return (
              <LocalLink
                key={l.href}
                href={l.href}
                locale={locale}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all card-vivid-shadow"
              >
                <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">
                  {l.label}
                  {localized ? '' : s.enSuffix}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </LocalLink>
            )
          })}
        </div>
      </section>

      {isEn ? <Footer /> : <FooterL10n locale={locale as L10nLocale} />}
    </main>
  )
}
