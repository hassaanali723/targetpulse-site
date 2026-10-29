import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SIGNUP_URL } from '@/lib/integrations'
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid'
import ZapierAppList from '@/components/integrations/ZapierAppList'
import type { CommonStrings, HubContent } from '@/lib/i18n/integrationPages/types'
import { BreadcrumbLd, Rich, Shell } from './parts'

export default function HubPage({ common, c }: { common: CommonStrings; c: HubContent }) {
  return (
    <Shell locale={common.locale}>
      <BreadcrumbLd locale={common.locale} crumbs={[{ name: common.hubCrumb, path: common.hubPath }]} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          {c.h1Lead}{common.locale === 'ja' ? null : ' '}<span className="gradient-text">{c.h1Accent}</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          <Rich text={c.intro} />
        </p>
      </section>

      {/* Four ways in */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">{c.waysTitle}</h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">{c.waysIntro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.ways.map((w) => (
            <div key={w.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 mb-3">
                {w.label}
              </span>
              <h3 className="text-[16px] font-black text-slate-900 mb-2">{w.title}</h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed font-medium">
                <Rich text={w.text} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid with search and filters */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <IntegrationsGrid s={c.grid} locale={common.locale} />
      </section>

      {/* Server-rendered index of every Zapier app page. The grid above
          paginates client-side, so without this only four of these URLs
          reached the HTML and the rest were never crawled. */}
      <ZapierAppList title={c.appListTitle} intro={c.appListIntro} />

      {/* API fallback band */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">{c.apiTitle}</h2>
            <p className="text-slate-300 text-[15px] leading-relaxed max-w-xl font-medium">
              <Rich text={c.apiText} linkClass="font-bold text-white underline underline-offset-2 hover:text-indigo-200" />
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={c.apiHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-black text-[14px] hover:bg-slate-100 transition-colors"
            >
              {c.apiCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-[14px] hover:bg-white/10 transition-colors"
            >
              {common.signupLabel}
            </a>
          </div>
        </div>
      </section>
    </Shell>
  )
}
