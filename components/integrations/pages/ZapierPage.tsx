import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowUpRight, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { ZAPIER_APP_URL } from '@/lib/integrations'
import { ZAPIER_APPS, ZAPIER_APP_LOGO_DIR, zapierAppLogo, zapierAppLogoAlt } from '@/lib/zapierApps'
import { isZapierIndexed } from '@/lib/indexPolicy'
import ZapierTabs from '@/components/integrations/ZapierTabs'
import type { CommonStrings, ZapierContent } from '@/lib/i18n/integrationPages/types'
import { BreadcrumbLd, Crumbs, CtaSection, FaqSection, HeroButtons, howToFromSteps, LogoPair, Rich, Shell } from './parts'

// Logos that exist on disk, resolved once at build time so a card with a
// missing file renders a lettermark instead of a broken image.
const EXISTING_LOGOS = new Set(
  fs
    .readdirSync(path.join(process.cwd(), 'public', ZAPIER_APP_LOGO_DIR.slice(1)))
    .filter((f) => f.endsWith('.png'))
    .map((f) => f.replace(/^giggal-catch-all-email-verification-/, '').replace(/\.png$/, ''))
)

const WHY_STYLE = [
  { Icon: ShieldCheck, wrap: 'bg-indigo-100 text-indigo-700' },
  { Icon: Zap, wrap: 'bg-emerald-100 text-emerald-700' },
  { Icon: CheckCircle2, wrap: 'bg-violet-100 text-violet-700' },
]

export default function ZapierPage({ common, c, path: pagePath }: { common: CommonStrings; c: ZapierContent; path: string }) {
  return (
    <Shell locale={common.locale}>
      <BreadcrumbLd locale={common.locale} crumbs={[{ name: common.hubCrumb, path: common.hubPath }, { name: c.crumb, path: pagePath }]} />
      <JsonLd data={faqPageLd(c.faq)} />
      <JsonLd data={howToFromSteps(c.howToName, c.howToDescription, c.tabs.steps)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-14 text-center">
        <Crumbs common={common} current={c.crumb} />
        <LogoPair src="/integrations/giggal-catch-all-email-verification-zapier.png" alt="Zapier" />
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          {c.h1Lead}{common.locale === 'ja' ? null : ' '}<span className="gradient-text">{c.h1Accent}</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          <Rich text={c.intro} />
        </p>
        <HeroButtons primary={common.signupLabel} secondary={c.viewOnZapier} secondaryHref={ZAPIER_APP_URL} />
      </section>

      {/* Workflows + guide tabs */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{c.tabsTitle}</h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">{c.tabsIntro}</p>
        </div>
        <ZapierTabs t={c.tabs} viewOnZapier={c.viewOnZapier} />
      </section>

      {/* Why Giggal.ai on Zapier */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.why.map((w, i) => {
            const { Icon, wrap } = WHY_STYLE[i] ?? WHY_STYLE[0]
            return (
              <div key={w.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${wrap}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-[16px] font-black text-slate-900 mb-2">{w.title}</h2>
                <p className="text-[13.5px] text-slate-600 leading-relaxed font-medium">
                  <Rich text={w.text} />
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* App directory: the per-app guides are English only */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{c.appsTitle}</h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">{c.appsIntro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {ZAPIER_APPS.map((a) => (
            <Link
              key={a.slug}
              href={`/integrations/zapier/${a.slug}`}
              rel={isZapierIndexed(a.slug) ? undefined : 'nofollow'}
              className="group flex items-center gap-3.5 bg-white border-2 border-slate-200 rounded-2xl px-4 py-3.5 card-vivid-shadow hover:border-indigo-500 transition-colors duration-200"
            >
              {EXISTING_LOGOS.has(a.slug) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={zapierAppLogo(a.slug)}
                  alt={zapierAppLogoAlt(a.name)}
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-lg object-contain shrink-0"
                />
              ) : (
                <span className="w-9 h-9 rounded-lg bg-indigo-600 text-white text-sm font-black flex items-center justify-center shrink-0" aria-hidden="true">
                  {a.name[0]}
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block text-[13.5px] font-black text-slate-800 group-hover:text-indigo-700 transition-colors truncate">{a.name}</span>
                <span className="block text-[11px] font-bold text-slate-400 truncate">{c.categories[a.category] ?? a.category}</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      <FaqSection title={c.faqTitle} items={c.faq} />
      <CtaSection cta={c.cta} hubPath={common.hubPath} />
    </Shell>
  )
}
