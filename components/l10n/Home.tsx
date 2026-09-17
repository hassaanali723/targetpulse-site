import Link from 'next/link'
import { ArrowRight, BookOpen, Star, MailCheck, MailPlus } from 'lucide-react'
import AnnouncementBar from '@/components/AnnouncementBar'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import Wordmark from '@/components/Wordmark'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { getStrings, SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'

// Localized home, the same sections as the Italian home (app/(it)/it/page.tsx)
// with the copy passed in. No keyword target of its own (plans/10 section 2):
// brand plus product pitch, the tool page as the first CTA.

export interface HomeContent {
  h1Lead: string
  h1Accent: string
  para1: React.ReactNode
  para2: React.ReactNode
  freeTitle: string
  freeText: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  proof: string
  stats: { n: string; l: string }[]
  consoleTitle: string
  consoleText: string
  catchAll: {
    title: string
    intro: React.ReactNode
    standardLabel: string
    standardStat: string
    standardCaption: string
    standardText: string
    verifiedBadge: string
    verifiedStat: string
    verifiedCaption: string
    verifiedText: string
  }
  featuresId: string
  featuresTitle: string
  featuresText: string
  features: { title: string; body: string }[]
  pricingId: string
  pricingTitle: string
  pricingText: string
  contactHref: string
  faqTitle: string
  faqMore: string
  faqMoreLink: string
  faq: FaqItem[]
  ctaHeadline: string
}

export default function HomeL10n({ locale, content: c }: { locale: L10nLocale; content: HomeContent }) {
  const { announcement, consoleStrings, pricing } = getStrings(locale)
  return (
    <main className="has-ann relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={faqPageLd(c.faq)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <AnnouncementBar strings={announcement} />
      <NavbarL10n locale={locale} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
            {c.h1Lead} <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{c.h1Accent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">{c.para1}</p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium !mt-3">{c.para2}</p>

          <div className="pt-6 !mt-6 border-t border-slate-200/80 space-y-1">
            <p className="text-slate-900 font-black text-base">{c.freeTitle}</p>
            <p className="text-slate-500 text-xs font-semibold leading-normal">{c.freeText}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={c.ctaPrimary.href}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-center text-sm sm:w-auto"
            >
              {c.ctaPrimary.label}
            </Link>
            <Link
              href={c.ctaSecondary.href}
              className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" /> {c.ctaSecondary.label}
            </Link>
          </div>

          <div className="flex items-center gap-3 !mt-6 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
              <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" />
            </span>
            <span>{c.proof}</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 card-vivid-shadow">
            {c.stats.map((s) => (
              <div key={s.l} className="bg-white p-6 text-center">
                <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{s.n}</p>
                <p className="text-[12px] font-semibold text-slate-500 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Console */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-8 pb-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.consoleTitle}</h2>
          <p className="text-slate-600 text-sm font-medium">{c.consoleText}</p>
        </div>
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
      </section>

      {/* Catch-all */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.catchAll.title}</h2>
          <p className="text-slate-600 text-sm font-medium">{c.catchAll.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 card-vivid-shadow">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">{c.catchAll.standardLabel}</span>
            <span className="text-6xl sm:text-7xl font-black text-rose-500 tracking-tight leading-none mt-2">{c.catchAll.standardStat}</span>
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-wider">{c.catchAll.standardCaption}</span>
            <div className="w-full max-w-[200px] h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-rose-500 rounded-full" style={{ width: '80%' }} />
            </div>
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed max-w-xs pt-2">{c.catchAll.standardText}</p>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 card-vivid-shadow ring-2 ring-indigo-600/5 relative overflow-hidden">
            <div className="flex items-center bg-indigo-50/60 border border-indigo-100/60 px-4 py-2 rounded-2xl">
              <Wordmark className="text-base sm:text-lg" />
              <span className="text-[9px] font-black uppercase text-indigo-600 tracking-wider bg-white px-2 py-0.5 rounded-md shadow-sm ml-2.5">{c.catchAll.verifiedBadge}</span>
            </div>
            <span className="text-6xl sm:text-7xl font-black text-emerald-500 tracking-tight leading-none mt-2">{c.catchAll.verifiedStat}</span>
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">{c.catchAll.verifiedCaption}</span>
            <div className="w-full max-w-[200px] h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '5%' }} />
            </div>
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed max-w-xs pt-2">{c.catchAll.verifiedText}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id={c.featuresId} className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.featuresTitle}</h2>
          <p className="text-slate-600 text-sm font-medium">{c.featuresText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.features.map((f) => (
            <div key={f.title} className="bg-white border-2 border-slate-200 rounded-3xl p-7 space-y-3 card-vivid-shadow">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">{f.title}</h3>
              <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id={c.pricingId} className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.pricingTitle}</h2>
          <p className="text-slate-600 text-sm font-medium">{c.pricingText}</p>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-2.5 text-center sm:text-left">
            <MailCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <p className="text-xs font-bold text-slate-700">
              {pricing.formula}{' '}
              <span className="font-semibold text-slate-500">{pricing.formulaNote}</span>{' '}
              = <strong className="text-indigo-700 font-extrabold">{pricing.formulaCredit}</strong>
            </p>
          </div>
        </div>
        <PricingTable strings={pricing} />
        <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-3xl p-6 text-center max-w-2xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-200/30">
              <MailPlus className="w-5 h-5" />
            </div>
            <div className="text-left text-sm font-semibold flex-1">
              <p className="text-slate-900 font-extrabold text-base leading-tight">{pricing.customTitle}</p>
              <p className="text-slate-500 text-xs mt-0.5">{pricing.customText}</p>
            </div>
            <Link href={c.contactHref} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl transition-all shadow shrink-0 whitespace-nowrap">
              {pricing.customButton}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{c.faqTitle}</h2>
        </div>
        <FaqAccordion items={c.faq} />
        <p className="text-center text-sm text-slate-500 font-medium">
          {c.faqMore}{' '}
          <Link href={c.contactHref} className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
            {c.faqMoreLink} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </section>

      <CtaBandL10n locale={locale} headline={c.ctaHeadline} />
      <FooterL10n locale={locale} />
    </main>
  )
}
