import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Zap, Shield, Gauge } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import Wordmark from '@/components/Wordmark'
import JsonLd from '@/components/JsonLd'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'

// The localized pre-signup pitch. The account itself is created in the app,
// which is in English until the dashboard is localized; the copy says so.

export interface SignupContent {
  path: string
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: string
  ctaPrimary: string
  pricingLabel: string
  pricingHref: string
  trustPoints: string[]
  perksKicker: string
  perksTitle: string
  perksText: string
  perks: { title: string; body: string }[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

const PERK_ICONS = [
  { Icon: Sparkles, wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: Zap, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
  { Icon: Shield, wrap: 'bg-violet-600 shadow-violet-600/10' },
  { Icon: Gauge, wrap: 'bg-amber-500 shadow-amber-500/10' },
]

export default function SignupPageL10n({ locale, content: c }: { locale: L10nLocale; content: SignupContent }) {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: c.crumb, path: c.path }])} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2.5 bg-white border-2 border-slate-200 rounded-2xl px-5 py-2.5 card-vivid-shadow">
          <Wordmark className="text-xl" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {c.h1Lead}{' '}
          <span className="block bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent pb-2">
            {c.h1Accent}
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            {c.ctaPrimary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href={c.pricingHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-sm"
          >
            {c.pricingLabel}
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 text-[13px] font-medium text-slate-600">
          {c.trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
              {point}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">{c.perksKicker}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.perksTitle}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.perksText}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.perks.map((p, i) => {
            const { Icon, wrap } = PERK_ICONS[i % 4]
            return (
              <div key={p.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{p.title}</h3>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">{c.ctaTitle}</h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">{c.ctaText}</p>
          <div className="pt-4">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-[1.03] active:scale-95 duration-200"
            >
              {c.ctaButton}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
