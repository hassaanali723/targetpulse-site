import { MailCheck, ListChecks, Activity, FileDown } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import type { CommonStrings, N8nContent } from '@/lib/i18n/integrationPages/types'
import { BreadcrumbLd, Crumbs, CtaSection, FaqSection, HeroButtons, howToFromSteps, LogoPair, Rich, Shell, StepList } from './parts'

const NPM_URL = 'https://www.npmjs.com/package/n8n-nodes-giggal'
const OP_ICONS = [MailCheck, ListChecks, Activity, FileDown]

export default function N8nPage({ common, c, path }: { common: CommonStrings; c: N8nContent; path: string }) {
  return (
    <Shell locale={common.locale}>
      <BreadcrumbLd locale={common.locale} crumbs={[{ name: common.hubCrumb, path: common.hubPath }, { name: c.crumb, path }]} />
      <JsonLd data={faqPageLd(c.faq)} />
      <JsonLd data={howToFromSteps(c.howToName, c.howToDescription, [...c.installSteps, ...c.batchSteps])} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-14 text-center">
        <Crumbs common={common} current={c.crumb} />
        <LogoPair src="/integrations/giggal-catch-all-email-verification-n8n.png" alt={`${c.h1Lead} ${c.h1Accent}`} />
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          {c.h1Lead} <span className="gradient-text">{c.h1Accent}</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          <Rich text={c.intro} />
        </p>
        <HeroButtons primary={common.signupLabel} secondary={c.viewOnNpm} secondaryHref={NPM_URL} />
      </section>

      {/* Operations */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{c.opsTitle}</h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">{c.opsIntro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.ops.map((op, i) => {
            const Icon = OP_ICONS[i] ?? MailCheck
            return (
              <div key={op.name} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 mb-1.5">{op.name}</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">{op.detail}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Install + first verification */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{c.installTitle}</h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">{c.installIntro}</p>
        <StepList steps={c.installSteps} />
      </section>

      {/* Bulk flow */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{c.batchTitle}</h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">{c.batchIntro}</p>
        <StepList steps={c.batchSteps} />

        <div className="mt-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6">
          <h3 className="text-[15px] font-black text-slate-900 mb-2">{c.calloutTitle}</h3>
          <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
            <Rich text={c.calloutText} />
          </p>
        </div>
      </section>

      <FaqSection title={c.faqTitle} items={c.faq} />
      <CtaSection cta={c.cta} hubPath={common.hubPath} />
    </Shell>
  )
}
