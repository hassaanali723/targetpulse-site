import React from 'react'
import Link from 'next/link'
import { ArrowRight, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import type { Locale } from '@/lib/i18n/clusters'
import type { CommonStrings, CtaBlock, Faq, Rich as RichText, Step } from '@/lib/i18n/integrationPages/types'
import { SIGNUP_URL } from '@/lib/integrations'

// Shared pieces of the integration pages. Server-safe (no hooks), so the
// client components (grid, Zapier tabs) can use Rich too.

const LINK_CLASS = 'font-bold text-indigo-600 hover:text-indigo-700'

/** Renders [anchor](/path) links and `code` spans inside a plain string. */
export function Rich({ text, linkClass = LINK_CLASS }: { text: RichText; linkClass?: string }) {
  const out: React.ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[3] !== undefined) {
      out.push(
        <code key={m.index} className="font-mono text-[0.9em] bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-800">
          {m[3]}
        </code>
      )
    } else if (m[2].startsWith('/')) {
      out.push(<Link key={m.index} href={m[2]} className={linkClass}>{m[1]}</Link>)
    } else {
      out.push(<a key={m.index} href={m[2]} target="_blank" rel="noopener noreferrer" className={linkClass}>{m[1]}</a>)
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

/** Rich text without markup, for JSON-LD and meta. */
export function plain(text: RichText): string {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1').replace(/`([^`]+)`/g, '$1')
}

export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased overflow-x-hidden">
      {locale === 'en' ? <Navbar /> : <NavbarL10n locale={locale} />}
      {children}
      {locale === 'en' ? <Footer /> : <FooterL10n locale={locale} />}
    </main>
  )
}

export function BreadcrumbLd({ locale, crumbs }: { locale: Locale; crumbs: { name: string; path: string }[] }) {
  return <JsonLd data={locale === 'en' ? breadcrumbTrailLd(crumbs) : breadcrumbL10n(locale, crumbs)} />
}

/** Visible breadcrumb for a spoke page: hub / current. */
export function Crumbs({ common, current }: { common: CommonStrings; current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] font-bold mb-8">
      <Link href={common.hubPath} className="text-indigo-600 hover:text-indigo-700">
        {common.hubCrumb}
      </Link>
      <span className="text-slate-400">/</span>
      <span className="text-slate-600">{current}</span>
    </nav>
  )
}

/** Giggal.ai logo, sync arrow, partner logo. */
export function LogoPair({ src, alt }: { src: string; alt: string }) {
  const box = 'w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center'
  return (
    <div className="flex items-center justify-center gap-5 mb-8">
      <div className={box}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/giggal-catch-all-email-verifier-icon.png" alt="Giggal.ai" width={44} height={44} loading="eager" decoding="async" className="w-11 h-11 object-contain" />
      </div>
      <RefreshCw className="w-6 h-6 text-slate-400" aria-hidden="true" />
      <div className={box}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={44} height={44} loading="eager" decoding="async" className="w-11 h-11 rounded-lg object-contain" />
      </div>
    </div>
  )
}

export function HeroButtons({ primary, secondary, secondaryHref }: { primary: string; secondary: string; secondaryHref: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-black text-[15px] hover:bg-indigo-700 transition-colors glow-recommendation"
      >
        {primary}
        <ArrowRight className="w-4 h-4" />
      </a>
      <a
        href={secondaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-300 bg-white text-slate-800 font-bold text-[15px] hover:border-indigo-400 transition-colors"
      >
        {secondary}
      </a>
    </div>
  )
}

export function StepList({ steps, start = 1, width = 1600, height = 900 }: { steps: Step[]; start?: number; width?: number; height?: number }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={s.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
          <div className="flex gap-5">
            <span className="w-9 h-9 rounded-full bg-indigo-600 text-white font-black text-[15px] flex items-center justify-center shrink-0">
              {i + start}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-[16px] font-black text-slate-900 mb-1.5">{s.title}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                <Rich text={s.text} />
              </p>
              {s.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={s.image}
                  alt={s.imageAlt ?? s.title}
                  width={width}
                  height={height}
                  loading="lazy"
                  decoding="async"
                  className="mt-4 w-full h-auto rounded-xl border border-slate-200"
                />
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function FaqSection({ title, items }: { title: string; items: Faq[] }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-10">{title}</h2>
      <div className="space-y-4">
        {items.map((f) => (
          <details key={f.q} className="group bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 card-vivid-shadow">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[15px] font-black text-slate-900">
              {f.q}
              <span className="text-indigo-600 text-xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
            </summary>
            <p className="mt-3 text-[14px] text-slate-600 leading-relaxed font-medium">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function CtaSection({ cta, hubPath }: { cta: CtaBlock; hubPath: string }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24 pt-6">
      <div className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{cta.title}</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-[15px] leading-relaxed font-medium">{cta.text}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-black text-[15px] hover:bg-indigo-50 transition-colors"
          >
            {cta.primary}
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href={hubPath}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-bold text-[15px] hover:bg-white/10 transition-colors"
          >
            {cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}

/** HowTo JSON-LD from visible steps (images optional). */
export function howToFromSteps(name: string, description: string, steps: Step[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: plain(s.text),
      ...(s.image ? { image: `https://giggal.ai${s.image}` } : {}),
    })),
  }
}
