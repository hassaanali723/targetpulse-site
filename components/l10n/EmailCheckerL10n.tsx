import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Star,
  AtSign,
  Server,
  Inbox,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Building2,
  Router,
  Timer,
  Users,
  Mail,
  SpellCheck,
  ServerOff,
  UserX,
  Shuffle,
  TrendingDown,
  BadgeCheck,
  Send,
  Database,
  UserPlus,
  MailX,
  Globe,
  ShoppingCart,
  HelpCircle,
  FileSpreadsheet,
  Code2,
} from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole, { type ConsoleStrings } from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AwardRow from '@/components/landing/AwardRow'
import BulkScanDemo from '@/components/landing/BulkScanDemo'
import MotionRuntime from '@/components/landing/MotionRuntime'
import { getSourceForgeStats, PRODUCT_HUNT_RATING, CAPTERRA_RATING, G2_RATING } from '@/lib/reviewStats'
import type { L10nLocale } from '@/lib/i18n/strings'

// The localized checker pages (/it/verifica-email, /de/email-adresse-pruefen,
// /es/validar-correo, /pt-br/verificacao-de-email, /fr/verifier-adresse-mail).
// Same sections, order, design and widths as the English /email-checker page
// (app/(en)/email-checker/page.tsx). Only the text differs: each language
// passes its copy from lib/i18n/emailChecker/<locale>.tsx. When the English
// page changes, change this file and the five copy files together.

/** A link inside running text, in the page's link style. */
export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-indigo-600 font-bold hover:underline">
      {children}
    </Link>
  )
}

type LeadRest = { lead: string; rest: string }

export interface EmailCheckerCopy {
  hero: { h1Lead: string; h1Rest: string; intro: string }
  tool: { caption: string; freeCredits: string }
  ratings: {
    /** "138 reviews" */
    reviews: (count: number) => string
    /** aria-label: "Giggal.ai rated 4.9 out of 5 on G2" */
    ratedAria: (rating: string, platform: string) => string
  }
  /** showLabel is a template for the carousel dots: "Show {badge}". A plain
   *  string, because AwardRow is a client component. */
  awards: { headingLead: string; headingRest: string; showLabel: string }
  steps: {
    title: string
    intro: string
    /** Format, mail server, mailbox, catch-all. */
    items: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string }]
    footnote: string
  }
  results: {
    title: string
    intro: string
    valid: { title: string; text: string }
    invalid: { title: string; text: string }
    unknown: { title: string; text: string }
    detailsIntro: string
    /** Provider, mail server, disposable (linked), role-based, personal provider. */
    details: [LeadRest, LeadRest, LeadRest & { href: string }, LeadRest, LeadRest]
  }
  exists: { title: string; p1: string; p2: string; signsIntro: string; signs: [LeadRest, LeadRest, LeadRest, LeadRest] }
  whySend: {
    title: string
    p1: string
    readMore: ReactNode
    bounceTitle: string
    bounceText: string
    /** Sender reputation, deliverability, cleaner data. */
    benefits: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }]
  }
  whenToUse: { title: string; intro: string; items: [string, string, string, string, string] }
  catchAll: { title: string; paragraphs: [ReactNode, ReactNode, ReactNode] }
  wholeList: { title: string; list: ReactNode; api: ReactNode }
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  related: { href: string; label: string }[]
}

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default async function EmailCheckerL10n({
  locale,
  copy: t,
  signupUrl,
  consoleStrings,
  schema,
}: {
  locale: L10nLocale
  copy: EmailCheckerCopy
  signupUrl: string
  consoleStrings: ConsoleStrings
  /** The page's JSON-LD elements. */
  schema: ReactNode
}) {
  const sourceforge = await getSourceForgeStats()
  const stepIcons = [AtSign, Server, Inbox, ShieldCheck]
  const detailIcons = [Building2, Router, Timer, Users, Mail]
  const signIcons = [SpellCheck, ServerOff, UserX, Shuffle]
  const benefitIcons = [BadgeCheck, Send, Database]
  const useIcons = [UserPlus, MailX, Globe, ShoppingCart, HelpCircle]

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      {schema}
      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <NavbarL10n locale={locale} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {t.hero.h1Lead}{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            {t.hero.h1Rest}
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{t.hero.intro}</p>
      </section>

      {/* ── THE TOOL ─────────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          emailFromQuery
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={signupUrl}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">{t.tool.caption}</p>
        <p className="mt-3 text-center">
          <a
            href={signupUrl}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[13px] font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            {t.tool.freeCredits}
            <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </a>
        </p>
        {/* Ratings, from lib/reviewStats.ts. Visual only, no rating markup (site rule C10). */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {[
            { name: 'SourceForge', logo: '/reviews/sourceforge-logo.svg', href: 'https://sourceforge.net/software/product/Giggal.ai/', rating: sourceforge.rating, note: `SourceForge · ${t.ratings.reviews(sourceforge.count)}` },
            { name: 'Product Hunt', logo: '/reviews/producthunt-logo.svg', href: 'https://www.producthunt.com/products/giggal-ai/reviews', rating: PRODUCT_HUNT_RATING, note: 'Product Hunt' },
            { name: 'Capterra', logo: '/reviews/capterra-logo.svg', href: 'https://www.capterra.com/p/10053924/Giggal-ai/', rating: CAPTERRA_RATING, note: 'Capterra' },
            { name: 'G2', logo: '/reviews/G2_logo.svg', href: 'https://www.g2.com/products/giggal/reviews', rating: G2_RATING, note: 'G2' },
          ].map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ratings.ratedAria(r.rating.toFixed(1), r.name)}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white pl-2 pr-3.5 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-indigo-200 hover:shadow-[0_6px_16px_-8px_rgba(79,70,229,0.35)] transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.logo} alt="" aria-hidden="true" width={20} height={20} loading="lazy" decoding="async" className="w-5 h-5 object-contain" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="text-[13px] font-extrabold text-slate-900 tabular-nums">{r.rating.toFixed(1)}</span>
              <span className="text-[12.5px] font-medium text-slate-500 group-hover:text-slate-700">{r.note}</span>
            </a>
          ))}
        </div>
      </section>

      <AwardRow headingLead={t.awards.headingLead} headingRest={t.awards.headingRest} showLabel={t.awards.showLabel} />

      {/* ── HOW TO CHECK ─────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.steps.title}</h2>
          <p className={`${proseP} mt-4`}>{t.steps.intro}</p>
        </div>
        <div className="relative mt-12">
          <div aria-hidden="true" className="hidden lg:block absolute left-[12%] right-[12%] top-7 h-px bg-gradient-to-r from-indigo-200 via-indigo-300 to-emerald-300" />
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.items.map((st, i) => {
              const Icon = stepIcons[i]
              const highlight = i === 3
              return (
                <li
                  key={st.title}
                  className={`relative rounded-2xl p-6 ${
                    highlight
                      ? 'border-2 border-transparent [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(135deg,#6366f1,#34d399)_border-box] shadow-[0_18px_40px_-22px_rgba(79,70,229,0.5)]'
                      : 'border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${highlight ? 'bg-gradient-to-br from-indigo-600 to-emerald-500 text-white' : 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100'}`}>
                      <Icon className="h-6 w-6" />
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-black text-white ring-2 ring-white">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">{st.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">{st.text}</p>
                  {highlight && (
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold text-indigo-700 ring-1 ring-inset ring-indigo-100">
                      <ShieldCheck className="h-3.5 w-3.5" /> Giggal.ai
                    </span>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500 font-medium max-w-2xl mx-auto">{t.steps.footnote}</p>
      </section>

      {/* ── WHAT THE CHECKER SHOWS ───────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.results.title}</h2>
          <p className={`${proseP} mt-4`}>{t.results.intro}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { Icon: CheckCircle2, ...t.results.valid, tone: 'border-emerald-200 bg-emerald-50/60', icon: 'bg-emerald-500 text-white', label: 'text-emerald-700' },
            { Icon: XCircle, ...t.results.invalid, tone: 'border-rose-200 bg-rose-50/60', icon: 'bg-rose-500 text-white', label: 'text-rose-700' },
            { Icon: Clock, ...t.results.unknown, tone: 'border-slate-200 bg-slate-50', icon: 'bg-slate-400 text-white', label: 'text-slate-600' },
          ].map((r) => (
            <div key={r.title} className={`rounded-2xl border p-6 ${r.tone}`}>
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${r.icon}`}>
                  <r.Icon className="h-5 w-5" />
                </span>
                <h3 className={`text-xl font-extrabold ${r.label}`}>{r.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <p className="text-sm md:text-base font-semibold text-slate-800">{t.results.detailsIntro}</p>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.results.details.map((d, i) => {
              const Icon = detailIcons[i]
              const href = 'href' in d ? d.href : undefined
              return (
                <li key={d.lead} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    <span className="font-bold text-slate-900">
                      {href ? (
                        <Link href={href} className="hover:text-indigo-700 hover:underline">{d.lead}</Link>
                      ) : (
                        d.lead
                      )}
                    </span>
                    {d.rest}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── DOES THE ADDRESS EXIST ───────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="space-y-5">
            <h2 className={sectionTitle}>{t.exists.title}</h2>
            <p className={proseP}>{t.exists.p1}</p>
            <p className={proseP}>{t.exists.p2}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{t.exists.signsIntro}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.exists.signs.map((x, i) => {
                const Icon = signIcons[i]
                return (
                  <li key={x.lead} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
                      <span className="font-extrabold text-slate-900">{x.lead}</span>
                      {x.rest}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY CHECK BEFORE YOU SEND ────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="space-y-5 lg:sticky lg:top-32">
            <h2 className={sectionTitle}>{t.whySend.title}</h2>
            <p className={proseP}>{t.whySend.p1}</p>
            <p className={proseP}>{t.whySend.readMore}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="sm:col-span-2 rounded-2xl bg-slate-900 p-6 text-white shadow-[0_24px_50px_-28px_rgba(15,23,42,0.7)]">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black tracking-tight bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">&lt;3%</span>
                <div>
                  <p className="flex items-center gap-2 font-extrabold">
                    <TrendingDown className="h-[18px] w-[18px] text-emerald-300" /> {t.whySend.bounceTitle}
                  </p>
                  <p className="mt-1 text-sm text-slate-300 font-medium">{t.whySend.bounceText}</p>
                </div>
              </div>
            </li>
            {t.whySend.benefits.map((b, i) => {
              const Icon = benefitIcons[i]
              return (
                <li key={b.title} className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${i === 2 ? 'sm:col-span-2' : ''}`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-3 text-sm font-extrabold text-slate-900">{b.title}</p>
                  <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">{b.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── WHEN TO USE IT ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.whenToUse.title}</h2>
          <p className={`${proseP} mt-4`}>{t.whenToUse.intro}</p>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {t.whenToUse.items.map((text, i) => {
            const Icon = useIcons[i]
            return (
              <li key={text} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-indigo-200 transition-colors">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-emerald-50 text-indigo-600 ring-1 ring-indigo-100">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">{text}</p>
              </li>
            )
          })}
        </ul>
      </section>

      {/* ── WHY OTHER CHECKERS STOP AT CATCH-ALL ─────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          <div className="space-y-5">
            <h2 className={sectionTitle}>{t.catchAll.title}</h2>
            {t.catchAll.paragraphs.map((p, i) => (
              <p key={i} className={proseP}>{p}</p>
            ))}
          </div>
          <BulkScanDemo />
        </div>
      </section>

      {/* ── WHOLE LIST ───────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>{t.wholeList.title}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <FileSpreadsheet className="h-5 w-5" />
            </span>
            <p className={`${proseP} mt-4`}>{t.wholeList.list}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <Code2 className="h-5 w-5" />
            </span>
            <p className={`${proseP} mt-4`}>{t.wholeList.api}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>{t.faqTitle}</h2>
        </div>
        <FaqAccordion items={t.faqs} />
      </section>

      <CtaBandL10n locale={locale} headline={t.ctaHeadline} />

      {/* ── RELATED LINKS ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {t.related.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all card-vivid-shadow"
            >
              <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
