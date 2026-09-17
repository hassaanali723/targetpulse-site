import Link from 'next/link'
import {
  ArrowRight, Mail, Globe, ShieldCheck, CheckCircle2, AlertCircle, AlertTriangle,
  Megaphone, Building2, Users, MailCheck,
} from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'

// Localized product explainer for catch-all verification, the same sections
// as app/(it)/it/verifica-catch-all/page.tsx with the copy passed in.

export interface CatchAllContent {
  path: string
  crumb: string
  h1Accent: string
  h1Tail: string
  intro: string
  toolLine: React.ReactNode
  ctaPrimary: string
  ctaSecondary: { label: string; href: string }
  ctaNote: string
  card: { kicker: string; title: string; file: string; valid: string; invalid: string; risky: string; note: string; labels: { valid: string; invalid: string; risky: string } }
  whatKicker: string
  whatTitle: string
  whatParas: string[]
  sameH3: string
  sameParas: string[]
  howKicker: string
  howTitle: string
  howText: string
  signals: { title: string; body: string }[]
  compareKicker: string
  compareTitle: string
  compareText: string
  compare: { typicalLabel: string; giggalLabel: string; count: string; catchAllLabel: string; typical: [string, string, string]; giggal: [string, string, string]; typicalNote: string; giggalNote: string }
  whoKicker: string
  whoTitle: string
  audience: { title: string; body: string }[]
  faqTitle: string
  faq: FaqItem[]
  ctaHeadline: string
}

const SIGNAL_ICONS = [
  { Icon: Mail, wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: Globe, wrap: 'bg-violet-600 shadow-violet-600/10' },
  { Icon: ShieldCheck, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
]
const AUDIENCE_ICONS = [
  { Icon: Megaphone, wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: Building2, wrap: 'bg-violet-600 shadow-violet-600/10' },
  { Icon: Users, wrap: 'bg-blue-600 shadow-blue-600/10' },
  { Icon: MailCheck, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const kicker = 'text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

function Row({ Icon, label, value, tone }: { Icon: typeof CheckCircle2; label: string; value: string; tone: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
      <div className={`flex items-center gap-2 ${tone}`}>
        <Icon className="w-4 h-4" />
        <span className="text-[13px] font-bold">{label}</span>
      </div>
      <span className={`text-lg font-black ${tone}`}>{value}</span>
    </div>
  )
}

export default function CatchAllPageL10n({ locale, content: c }: { locale: L10nLocale; content: CatchAllContent }) {
  const L = c.card.labels
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: c.crumb, path: c.path }])} />
      <JsonLd data={faqPageLd(c.faq)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="min-w-0 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{c.h1Accent}</span>{' '}
            {c.h1Tail}
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">{c.intro}</p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium">{c.toolLine}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
            >
              {c.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href={c.ctaSecondary.href} className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm">
              {c.ctaSecondary.label}
            </Link>
          </div>
          <p className="text-[12px] text-slate-400 font-medium">{c.ctaNote}</p>
        </div>

        <div className="min-w-0">
          <div className="bg-white border-2 border-slate-200 rounded-3xl card-vivid-shadow overflow-hidden">
            <div className="bg-indigo-600 px-6 py-5 text-white">
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 mb-2">{c.card.kicker}</div>
              <div className="text-xl font-black mb-1">{c.card.title}</div>
              <div className="text-[12px] text-white/70">{c.card.file}</div>
            </div>
            <div className="p-5 space-y-2">
              <Row Icon={CheckCircle2} label={L.valid} value={c.card.valid} tone="text-emerald-700" />
              <Row Icon={AlertCircle} label={L.invalid} value={c.card.invalid} tone="text-rose-700" />
              <Row Icon={AlertTriangle} label={L.risky} value={c.card.risky} tone="text-slate-400" />
              <p className="text-[12px] text-slate-500 leading-relaxed font-medium pt-2">{c.card.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className={kicker}>{c.whatKicker}</p>
          <h2 className={sectionTitle}>{c.whatTitle}</h2>
        </div>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          {c.whatParas.map((p) => <p key={p}>{p}</p>)}
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight pt-2">{c.sameH3}</h3>
          {c.sameParas.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={kicker}>{c.howKicker}</p>
          <h2 className={sectionTitle}>{c.howTitle}</h2>
          <p className={proseP}>{c.howText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.signals.map((sg, i) => {
            const { Icon, wrap } = SIGNAL_ICONS[i % 3]
            return (
              <div key={sg.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] card-vivid-shadow flex flex-col text-left space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{sg.title}</h3>
                  <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-normal">{sg.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={kicker}>{c.compareKicker}</p>
          <h2 className={sectionTitle}>{c.compareTitle}</h2>
          <p className={proseP}>{c.compareText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-5">
            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">{c.compare.typicalLabel}</span>
            <div className="text-[15px] font-bold text-slate-700">{c.compare.count}</div>
            <div className="space-y-2">
              <Row Icon={CheckCircle2} label={L.valid} value={c.compare.typical[0]} tone="text-emerald-700" />
              <Row Icon={AlertCircle} label={L.invalid} value={c.compare.typical[1]} tone="text-rose-700" />
              <Row Icon={AlertTriangle} label={c.compare.catchAllLabel} value={c.compare.typical[2]} tone="text-amber-700" />
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed font-medium">{c.compare.typicalNote}</p>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 space-y-5">
            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">{c.compare.giggalLabel}</span>
            <div className="text-[15px] font-bold text-slate-700">{c.compare.count}</div>
            <div className="space-y-2">
              <Row Icon={CheckCircle2} label={L.valid} value={c.compare.giggal[0]} tone="text-emerald-700" />
              <Row Icon={AlertCircle} label={L.invalid} value={c.compare.giggal[1]} tone="text-rose-700" />
              <Row Icon={AlertTriangle} label={c.compare.catchAllLabel} value={c.compare.giggal[2]} tone="text-slate-400" />
            </div>
            <p className="text-[12px] text-indigo-800 font-semibold leading-relaxed">{c.compare.giggalNote}</p>
          </div>
        </div>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={kicker}>{c.whoKicker}</p>
          <h2 className={sectionTitle}>{c.whoTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.audience.map((a, i) => {
            const { Icon, wrap } = AUDIENCE_ICONS[i % 4]
            return (
              <div key={a.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow flex flex-col text-left space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{a.title}</h3>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{a.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{c.faqTitle}</h2>
        </div>
        <FaqAccordion items={c.faq} />
      </section>

      <CtaBandL10n locale={locale} headline={c.ctaHeadline} />
      <FooterL10n locale={locale} />
    </main>
  )
}
