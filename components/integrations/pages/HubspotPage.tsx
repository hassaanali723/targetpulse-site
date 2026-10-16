import { RefreshCw, MailCheck, ListChecks, ShieldCheck, Filter } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import type { CommonStrings, HubspotContent } from '@/lib/i18n/integrationPages/types'
import { BreadcrumbLd, Crumbs, CtaSection, FaqSection, HeroButtons, howToFromSteps, LogoPair, Rich, Shell, StepList } from './parts'

const APP_URL = 'https://emailverifier.giggal.ai'
const CAP_ICONS = [ListChecks, MailCheck, RefreshCw, Filter]

export default function HubspotPage({ common, c, path }: { common: CommonStrings; c: HubspotContent; path: string }) {
  return (
    <Shell locale={common.locale}>
      <BreadcrumbLd locale={common.locale} crumbs={[{ name: common.hubCrumb, path: common.hubPath }, { name: c.crumb, path }]} />
      <JsonLd data={faqPageLd(c.faq)} />
      <JsonLd data={howToFromSteps(c.howToName, c.howToDescription, c.steps)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-14 text-center">
        <Crumbs common={common} current={c.crumb} />
        <LogoPair src="/integrations/giggal-catch-all-email-verification-hubspot.png" alt={`${c.h1Lead} ${c.h1Accent}`} />
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          {c.h1Lead} <span className="gradient-text">{c.h1Accent}</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          <Rich text={c.intro} />
        </p>
        <HeroButtons primary={common.signupLabel} secondary={c.openDashboard} secondaryHref={APP_URL} />
      </section>

      {/* What it does */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{c.capsTitle}</h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">{c.capsIntro}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.caps.map((cap, i) => {
            const Icon = CAP_ICONS[i] ?? MailCheck
            return (
              <div key={cap.name} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
                <Icon className="w-6 h-6 text-indigo-600 mb-4" aria-hidden="true" />
                <h3 className="text-[15px] font-black text-slate-900 mb-2">{cap.name}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{cap.detail}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Setup */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{c.stepsTitle}</h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">{c.stepsIntro}</p>
        <StepList steps={c.steps} />

        <div className="mt-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6">
          <h3 className="text-[15px] font-black text-slate-900 mb-2">{c.calloutTitle}</h3>
          <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
            <Rich text={c.calloutText} />
          </p>
        </div>
      </section>

      {/* Properties */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{c.propsTitle}</h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">{c.propsIntro}</p>
        <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 bg-white card-vivid-shadow">
          <table className="w-full text-left text-[14px]">
            <thead className="border-b-2 border-slate-200 bg-slate-50">
              <tr>
                {c.propsHead.map((h) => (
                  <th key={h} className="px-5 py-3.5 font-black text-slate-900">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.props.map(([name, type, meaning]) => (
                <tr key={name} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-3.5 font-bold text-slate-900 whitespace-nowrap">{name}</td>
                  <td className="px-5 py-3.5 text-slate-500 font-medium">{type}</td>
                  <td className="px-5 py-3.5 text-slate-600 font-medium">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Permissions */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck className="w-7 h-7 text-indigo-600" aria-hidden="true" />
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{c.scopesTitle}</h2>
        </div>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">{c.scopesIntro}</p>
        <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 bg-white card-vivid-shadow">
          <table className="w-full text-left text-[14px]">
            <tbody>
              {c.scopes.map(([scope, why]) => (
                <tr key={scope} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-3.5 font-mono text-[12px] text-slate-900 whitespace-nowrap align-top">{scope}</td>
                  <td className="px-5 py-3.5 text-slate-600 font-medium">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mt-6 max-w-3xl">{c.scopesNote}</p>
      </section>

      <FaqSection title={c.faqTitle} items={c.faq} />
      <CtaSection cta={c.cta} hubPath={common.hubPath} />
    </Shell>
  )
}
