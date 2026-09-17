import Link from 'next/link'
import { Check, CreditCard, TrendingDown, Percent, Infinity as InfinityIcon, MailCheck, MailPlus } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'

// Localized pricing page, the same sections as app/(it)/it/prezzi/page.tsx
// with the copy passed in. USD prices are shared through PricingTable.

export interface PricingContent {
  path: string
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: React.ReactNode
  contactHref: string
  includedTitle: string
  includedText: string
  features: string[]
  rulesTitle: string
  rulesText: string
  rules: { title: string; body: string }[]
  faqTitle: string
  faqText: string
  faq: FaqItem[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
  ctaHref: string
}

const RULE_ICONS = [
  { Icon: CreditCard, wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: TrendingDown, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
  { Icon: Percent, wrap: 'bg-violet-600 shadow-violet-600/10' },
  { Icon: InfinityIcon, wrap: 'bg-amber-500 shadow-amber-500/10' },
]

export default function PricingPageL10n({ locale, content: c }: { locale: L10nLocale; content: PricingContent }) {
  const { pricing } = getStrings(locale)
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: c.crumb, path: c.path }])} />
      <JsonLd data={faqPageLd(c.faq)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {c.h1Lead}{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{c.h1Accent}</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pb-24 space-y-12">
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

      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.includedTitle}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.includedText}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {c.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl card-vivid-shadow text-[13px] font-bold text-slate-700">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
              {f}
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.rulesTitle}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.rulesText}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.rules.map((r, i) => {
            const { Icon, wrap } = RULE_ICONS[i % RULE_ICONS.length]
            return (
              <div key={r.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{r.title}</h3>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{r.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{c.faqTitle}</h2>
          <p className="text-sm text-slate-600 font-bold">{c.faqText}</p>
        </div>
        <FaqAccordion items={c.faq} />
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">{c.ctaTitle}</h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">{c.ctaText}</p>
          <div className="pt-4">
            <Link
              href={c.ctaHref}
              className="px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-block hover:scale-[1.03] active:scale-95 duration-200"
            >
              {c.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
