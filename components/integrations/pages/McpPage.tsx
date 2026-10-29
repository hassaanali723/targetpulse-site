import { MailCheck, ListChecks, Coins, ArrowRight, Check } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import McpSection from '@/components/landing/McpSection'
import { MCP } from '@/components/l10n/homeShared'
import { SIGNUP_URL } from '@/lib/integrations'
import type { CommonStrings, McpContent } from '@/lib/i18n/integrationPages/types'
import { BreadcrumbLd, FaqSection, Rich, Shell } from './parts'

const MCP_URL = 'https://mcp.giggal.ai/mcp'
// Giggal.ai's listing in Claude's connector directory (published 2026-10-16).
const DIRECTORY_URL = 'https://claude.ai/directory/connectors/giggal-ai'

const TOOL_STYLE = [
  { Icon: MailCheck, wrap: 'bg-indigo-600 shadow-indigo-600/10' },
  { Icon: ListChecks, wrap: 'bg-emerald-500 shadow-emerald-500/10' },
  { Icon: Coins, wrap: 'bg-violet-600 shadow-violet-600/10' },
]

export default function McpPage({ common, c, path }: { common: CommonStrings; c: McpContent; path: string }) {
  const locale = common.locale
  return (
    <Shell locale={locale}>
      <BreadcrumbLd locale={locale} crumbs={[{ name: c.crumb, path }]} />
      <JsonLd data={faqPageLd(c.faq)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${path}#howto`,
          name: c.howToName,
          description: c.howToDescription,
          steps: c.setupSteps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 text-balance">
          {c.h1Lead}{common.locale === 'ja' ? null : ' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{c.h1Accent}</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          <Rich text={c.intro} />
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={DIRECTORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-black text-[14px] hover:bg-slate-800 transition-colors"
          >
            {c.directoryLabel}
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 rounded-2xl px-5 py-3 card-vivid-shadow">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 shrink-0">{c.urlLabel}</span>
            <code className="font-mono text-xs sm:text-sm font-bold text-slate-800 break-all">{MCP_URL}</code>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-3 text-[13px] font-medium text-slate-600">
          {c.points.map((p) => (
            <span key={p} className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Per-tool setup with screenshots */}
      <McpSection showImages strings={locale === 'en' ? undefined : MCP[locale]} title={c.setupTitle} subtitle={c.setupSubtitle} />

      {/* What the assistant can do */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.toolsTitle}</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">{c.toolsIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.tools.map(({ tool, title, body }, i) => {
            const { Icon, wrap } = TOOL_STYLE[i] ?? TOOL_STYLE[0]
            return (
              <div key={tool} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow flex flex-col text-left space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                  <code className="inline-block font-mono text-[11px] bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-slate-600">{tool}</code>
                  <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why the catch-all result matters */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.whyTitle}</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          {c.why.map((p, i) => (
            <p key={i}>
              <Rich text={p} linkClass="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors" />
            </p>
          ))}
        </div>
      </section>

      <FaqSection title={c.faqTitle} items={c.faq} />

      {/* CTA */}
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
    </Shell>
  )
}
