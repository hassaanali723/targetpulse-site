import React from 'react'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import Wordmark from '@/components/Wordmark'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS } from '@/lib/i18n/clusters'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'
import {
  Repeat, Calendar, Wallet, Infinity as InfinityIcon,
  Users, ArrowRight, Check, TrendingUp, Share2,
  MailCheck, Megaphone, BookOpen, Building2,
} from 'lucide-react'

// Localized /affiliates. Same sections, widths and data as
// app/(en)/affiliates/page.tsx; the copy comes from lib/i18n/affiliates/<locale>.ts.

const AFFILIATE_SIGNUP_URL = 'https://giggal.endorsely.com/'

const BENEFIT_STYLE = [
  { Icon: Repeat,       wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: InfinityIcon, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
  { Icon: Calendar,     wrap: 'bg-violet-600 shadow-violet-600/10' },
  { Icon: Wallet,       wrap: 'bg-amber-500 shadow-amber-500/10' },
]
const STEP_STYLE = [
  { Icon: Share2,    wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: Megaphone, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
  { Icon: Wallet,    wrap: 'bg-violet-600 shadow-violet-600/10' },
]
const AUDIENCE_STYLE = [
  { Icon: MailCheck, wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: Building2, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
  { Icon: BookOpen,  wrap: 'bg-violet-600 shadow-violet-600/10' },
  { Icon: Users,     wrap: 'bg-blue-600 shadow-blue-600/10' },
]

// 20% of the $76/mo 100K Popular plan, as on the English page.
const EXAMPLE_ROWS = [5, 20, 50, 100].map((customers) => ({ customers, plan: 76, earnings: customers * 76 * 0.2 }))

const cardClass =
  'bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4'

export default function AffiliatesPageL10n({ locale, content: c }: { locale: L10nLocale; content: AffiliatesContent }) {
  const s = getStrings(locale)
  const path = CLUSTERS.affiliates[locale] as string
  const ja = locale === 'ja'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: c.crumb, path }])} />
      <JsonLd data={faqPageLd(c.faq.items)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            {c.h1Lead}{ja ? null : ' '}
            <span className="block bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent pb-2">
              {c.h1Accent}
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {c.intro.before}{ja ? null : ' '}<Wordmark className="align-baseline" />{ja ? null : ' '}{c.intro.after}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <a
              href={AFFILIATE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
            >
              {c.joinCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-sm shadow-sm"
            >
              {c.howCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl bg-white border-2 border-slate-200 px-8 py-5 card-vivid-shadow max-w-2xl mx-auto mt-4">
            {c.stats.map((st, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="hidden sm:block w-px h-8 bg-slate-200" />}
                <div className="text-center">
                  <div className="text-xl font-black text-indigo-600">{st.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{st.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">{c.why.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.why.h2}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.why.sub}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.why.cards.map(({ title, body }, i) => {
            const { Icon, wrap } = BENEFIT_STYLE[i]
            return (
              <div key={i} className={cardClass}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="how-it-works" className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">{c.how.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.how.h2}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {c.how.steps.map(({ title, body }, i) => {
            const { Icon, wrap } = STEP_STYLE[i]
            return (
              <div key={i} className={`relative ${cardClass}`}>
                <span className="absolute top-5 right-6 text-4xl font-black text-slate-100 leading-none select-none pointer-events-none">
                  {i + 1}
                </span>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 relative ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">{c.earn.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.earn.h2}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.earn.sub}</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="rounded-3xl bg-white border-2 border-slate-200 card-vivid-shadow overflow-hidden">
            <div className="grid grid-cols-3 px-6 py-3.5 border-b-2 border-slate-100 bg-slate-50">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">{c.earn.colCustomers}</div>
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 text-center">{c.earn.colPlan}</div>
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 text-right">{c.earn.colEarnings}</div>
            </div>
            <div className="divide-y divide-slate-100">
              {EXAMPLE_ROWS.map((row, i) => {
                const isLast = i === EXAMPLE_ROWS.length - 1
                return (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-6 py-4 items-center transition-colors ${
                      isLast ? 'bg-indigo-50/60' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-[15px] font-black text-slate-900">{s.number(row.customers)}</span>
                    </div>
                    <div className="text-[13px] text-slate-500 text-center font-bold">{s.usd(row.plan, 0)}{c.earn.perMonth}</div>
                    <div className="flex items-center justify-end gap-1.5">
                      {isLast && <TrendingUp className="w-4 h-4 text-emerald-600" />}
                      <span className={`text-2xl font-black tracking-tight ${isLast ? 'text-indigo-600' : 'text-slate-900'}`}>
                        {s.usd(row.earnings, 0)}
                      </span>
                      <span className="text-[12px] text-slate-400 font-semibold">{c.earn.perMonth}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <p className="text-center text-[12px] text-slate-400 font-medium">{c.earn.note}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">{c.who.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.who.h2}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.who.sub}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {c.who.cards.map(({ title, body }, i) => {
            const { Icon, wrap } = AUDIENCE_STYLE[i]
            return (
              <div key={i} className={cardClass}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">{c.faq.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{c.faq.h2}</h2>
        </div>
        <div className="space-y-6">
          <FaqAccordion items={c.faq.items} />
          <p className="text-center text-[13px] text-slate-500 font-semibold">
            {c.faq.more}{ja ? null : ' '}
            <Link href={CLUSTERS.contact[locale] as string} className="font-extrabold text-indigo-600 hover:text-indigo-700">
              {c.faq.talk}
            </Link>
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">{c.final.h2}</h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">{c.final.text}</p>
          <div className="pt-4">
            <a
              href={AFFILIATE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
            >
              {c.joinCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-indigo-100 font-semibold pt-2">
            {c.final.checks.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
