import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import JsonLd from '@/components/JsonLd'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import type { L10nLocale } from '@/lib/i18n/strings'

// One-screen localized integrations hub. The 73 per-app Zapier pages and the
// n8n page are English only; this page explains the three routes in and links
// to them.

export interface IntegrationsContent {
  path: string
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: string
  routes: { title: string; body: string; href: string; cta: string }[]
  notFoundTitle: string
  notFoundText: string
  contactLabel: string
  contactHref: string
}

export default function IntegrationsPageL10n({ locale, content: c }: { locale: L10nLocale; content: IntegrationsContent }) {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: c.crumb, path: c.path }])} />
      <NavbarL10n locale={locale} />

      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          {c.h1Lead} <span className="gradient-text">{c.h1Accent}</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{c.intro}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.routes.map((r) => (
            <div key={r.title} className="bg-white border-2 border-slate-200 rounded-3xl p-7 flex flex-col gap-4 card-vivid-shadow">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">{r.title}</h2>
              <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed flex-1">{r.body}</p>
              <Link href={r.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700">
                {r.cta} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">{c.notFoundTitle}</h2>
            <p className="text-slate-300 text-[15px] leading-relaxed max-w-xl font-medium">{c.notFoundText}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href={c.contactHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-black text-[14px] hover:bg-slate-100 transition-colors">
              {c.contactLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBandL10n locale={locale} />
      <FooterL10n locale={locale} />
    </main>
  )
}
