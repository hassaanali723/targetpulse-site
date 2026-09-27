import { Fragment } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, HelpCircle, MailCheck, MailPlus, Plus, ShieldCheck, Star } from 'lucide-react'
import AnnouncementBar from '@/components/AnnouncementBar'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import ReviewBadges, { type ReviewBadgeStrings } from '@/components/landing/ReviewBadges'
import ReviewWall, { type ReviewWallStrings } from '@/components/landing/ReviewWall'
import McpSection, { type McpStrings } from '@/components/landing/McpSection'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { CLUSTERS } from '@/lib/i18n/clusters'
import { PRICE_CLAIM, PRICE_10K } from '@/lib/priceClaim'
import { getStrings, SIGNUP_URL, type L10nLocale } from '@/lib/i18n/strings'

// Localized home: the same sections, order and styling as the English home
// (app/(en)/page.tsx), with the copy passed in. Each locale keeps its planned
// title, description, H1 and keyword headings (plans/08, 10, 12); the page
// file supplies every visible string.

export interface HomeContent {
  // Hero. The H1 is kept word for word from the locale's plan.
  h1Lead: string
  h1Accent: string
  heroSub: React.ReactNode
  rating: { score: string; on: string; reviews: string }
  email: { label: string; placeholder: string; button: string }
  listQuestion: string
  listCta: string
  noCard: string
  stats: { pre?: string; n: string; suf?: string; l: string }[]
  bulk: { id: string; title: string; sub: string; points: string[] }
  catchAll: {
    title: string
    intro: React.ReactNode
    others: string
    othersDetail: string
    ourDetail: string
    risky: string
    deliverable: string
    othersText: string
    ourText: string
  }
  features: {
    title: string
    intro: React.ReactNode
    // Six items in this order: bulk, catch-all, API, integrations, pricing, support.
    items: { title: string; body: string; points: string[]; link: string }[]
    preview: {
      done: string
      deliverable: string
      undeliverable: string
      otherTools: string
      risky: string
      credit: string
      email: string
      creditNote: string
      reply: string
      replyNote: string
    }
  }
  reviewBadges: ReviewBadgeStrings
  reviewWall: ReviewWallStrings
  // Localized homes state a low price and a high value, not "the lowest
  // price": comparative superlatives need proof under EU and Brazilian
  // advertising rules. The claim line links to the comparison list instead.
  pricing: {
    id: string
    claimTop: string
    claimBottom: string
    fallbackTitle: string
    priceLine: (price: string) => string
    claim: { before: string; link: string; after: string }
    text: string
  }
  switcher: {
    id: string
    title: string
    intro: string
    items: { name: string; href: string; blurb: string }[]
    all: string
  }
  integrations: { title: string; sub: string; more: string; alt: (name: string) => string }
  mcp: McpStrings
  faq: { title: string; sub: string; items: FaqItem[]; more: string; moreLink: string }
  ctaHeadline: string
}

// Divider between sections: one hairline, the same width for every section.
function SectionRule() {
  return (
    <div aria-hidden="true" className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-slate-200" />
    </div>
  )
}

// Result chip: white pill, the colour is in the text.
function StatusBadge({ tone, children }: { tone: 'good' | 'bad' | 'warn'; children: React.ReactNode }) {
  const text = { good: 'text-emerald-700', bad: 'text-rose-700', warn: 'text-amber-700' }[tone]
  return (
    <span className={`shrink-0 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ring-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ${text}`}>
      {children}
    </span>
  )
}

// Icon and colour of each feature card, in the fixed order of features.items.
const FEATURE_STYLE: { iconBg: string; linkColor: string; icon: React.ReactNode }[] = [
  { iconBg: 'bg-indigo-600', linkColor: 'text-indigo-600', icon: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>) },
  { iconBg: 'bg-emerald-500', linkColor: 'text-emerald-600', icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>) },
  { iconBg: 'bg-violet-600', linkColor: 'text-violet-600', icon: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>) },
  { iconBg: 'bg-blue-600', linkColor: 'text-blue-600', icon: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></>) },
  { iconBg: 'bg-amber-500', linkColor: 'text-amber-600', icon: (<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" strokeWidth={3} /></>) },
  { iconBg: 'bg-rose-500', linkColor: 'text-rose-600', icon: (<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />) },
]

const INTEGRATIONS = [
  { name: 'Zapier', slug: 'zapier', featured: true },
  { name: 'n8n', slug: 'n8n', featured: true },
  { name: 'Mailchimp', slug: 'mailchimp' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'SendGrid', slug: 'sendgrid' },
  { name: 'ActiveCampaign', slug: 'activecampaign' },
]
const logo = (slug: string) => `/integrations/giggal-catch-all-email-verification-${slug}.png`

const link = 'text-indigo-600 font-bold hover:underline'

export default function HomeL10n({ locale, content: c }: { locale: L10nLocale; content: HomeContent }) {
  const { announcement, pricing, usd } = getStrings(locale)
  const toolHref = CLUSTERS.tool[locale]
  const integrationsHref = CLUSTERS.integrations[locale]
  const f = c.features
  const featureHref = [
    'SIGNUP',
    CLUSTERS.catchall[locale],
    '/public/docs',
    integrationsHref,
    `#${c.pricing.id}`,
    CLUSTERS.contact[locale],
  ]
  const previews: React.ReactNode[] = [
    <Fragment key="bulk">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-800">leads.csv</span>
        <StatusBadge tone="good">{f.preview.done}</StatusBadge>
      </div>
      <ul className="mt-3 divide-y divide-slate-100 rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        {[
          { email: 'anna@acme.com', ok: true },
          { email: 'j.doe@globex.io', ok: false },
          { email: 'sara@northwind.co', ok: true },
          { email: 'mark@initech.com', ok: true },
        ].map((r) => (
          <li key={r.email} className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-sm text-slate-700 truncate">{r.email}</span>
            <StatusBadge tone={r.ok ? 'good' : 'bad'}>{r.ok ? f.preview.deliverable : f.preview.undeliverable}</StatusBadge>
          </li>
        ))}
      </ul>
    </Fragment>,
    <Fragment key="catchall">
      <p className="text-sm font-semibold text-slate-800">sara@northwind.co</p>
      <ul className="mt-3 divide-y divide-slate-100 rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="text-sm text-slate-500">{f.preview.otherTools}</span>
          <StatusBadge tone="warn">{f.preview.risky}</StatusBadge>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="text-sm font-semibold text-slate-800">Giggal.ai</span>
          <StatusBadge tone="good">{f.preview.deliverable}</StatusBadge>
        </li>
      </ul>
    </Fragment>,
    <pre key="api" className="rounded-xl bg-slate-900 p-5 font-mono text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
      <span className="text-violet-300">POST</span> <span className="text-white">/v1/verify</span>
      {'\n'}
      <span className="text-slate-500">{'{'}</span> <span className="text-sky-300">&quot;email&quot;</span>: <span className="text-emerald-300">&quot;hello@example.com&quot;</span> <span className="text-slate-500">{'}'}</span>
      {'\n\n'}
      <span className="text-sky-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;deliverable&quot;</span>
    </pre>,
    <div key="integrations" className="grid grid-cols-4 gap-3">
      {[['HubSpot', 'hubspot'], ['Mailchimp', 'mailchimp'], ['Salesforce', 'salesforce'], ['Zapier', 'zapier'], ['ActiveCampaign', 'activecampaign'], ['SendGrid', 'sendgrid'], ['n8n', 'n8n']].map(([name, slug]) => (
        <span key={slug} title={name} className="aspect-square rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo(slug)} alt={name} width={32} height={32} loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
        </span>
      ))}
      <span className="aspect-square rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] flex items-center justify-center text-sm font-bold text-blue-700">80+</span>
    </div>,
    <div key="pricing" className="rounded-xl bg-white px-6 py-9 text-center shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
      <p className="text-4xl md:text-5xl font-extrabold text-slate-900">
        {f.preview.credit} <span className="text-amber-500">=</span> {f.preview.email}
      </p>
      <p className="mt-3 text-sm text-slate-500">{f.preview.creditNote}</p>
    </div>,
    <div key="support" className="rounded-xl bg-white px-6 py-9 text-center shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
      <p className="text-4xl md:text-5xl font-extrabold text-slate-900">{f.preview.reply}</p>
      <p className="mt-3 text-sm text-slate-500">{f.preview.replyNote}</p>
    </div>,
  ]

  return (
    <main className="has-ann relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={faqPageLd(c.faq.items)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <AnnouncementBar strings={announcement} />
      <NavbarL10n locale={locale} tone="dark" />

      {/* Hero: one centered column on slate, as on the English home. */}
      <section className="bg-slate-900 hero-art text-white pt-28 md:pt-32 pb-14 md:pb-16">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 pt-10 md:pt-16 text-center">
          <h1 className="text-[40px] leading-[1.08] md:text-6xl md:leading-[1.04] font-extrabold tracking-tight text-white [text-wrap:balance]">
            {c.h1Lead}
            <br />
            {c.h1Accent}
          </h1>

          <p className="mt-7 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-2xl mx-auto [text-wrap:balance]">{c.heroSub}</p>

          <div className="mt-8 md:mt-10 flex items-center justify-center gap-4 md:gap-5">
            <span aria-hidden="true" className="h-px w-10 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-slate-500" />
            <a
              href="https://sourceforge.net/software/product/Giggal.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-sm md:text-base text-slate-400"
            >
              <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </span>
              <span>
                <strong className="text-white">{c.rating.score}</strong> {c.rating.on}{' '}
                <span className="group-hover:text-slate-300 group-hover:underline underline-offset-4">SourceForge</span>{' '}
                {c.rating.reviews}
              </span>
            </a>
            <span aria-hidden="true" className="h-px w-10 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-slate-500" />
          </div>

          {/* One free check: opens the locale's checker, which fills in and runs it. */}
          <div className="mt-8 md:mt-10 max-w-xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 shadow-[0_0_40px_-12px_rgba(99,102,241,0.7)] focus-within:shadow-[0_0_56px_-8px_rgba(99,102,241,0.9)] transition-shadow">
            <form action={toolHref} method="get" className="flex flex-col sm:flex-row gap-2 bg-slate-900 rounded-[15px] p-2">
              <label htmlFor="hero-email" className="sr-only">{c.email.label}</label>
              <input
                id="hero-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={c.email.placeholder}
                className="flex-1 min-w-0 px-4 py-3.5 rounded-xl bg-transparent text-base text-white placeholder:text-slate-400 caret-emerald-300 outline-none"
              />
              <button type="submit" className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-xl text-white font-extrabold text-base transition-colors">
                {c.email.button}
              </button>
            </form>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-base md:text-lg text-slate-300 font-medium">{c.listQuestion}</span>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-base shadow-lg shadow-amber-500/20 transition-colors"
            >
              {c.listCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">{c.noCard}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 pt-12 md:pt-14 pb-20 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {c.stats.map((s) => (
            <div key={s.l} className="bg-white border border-slate-200 rounded-2xl px-4 py-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="text-2xl md:text-3xl leading-none font-extrabold tracking-tight text-slate-900 tabular-nums">
                {s.pre && <span className="text-indigo-600">{s.pre}</span>}
                {s.n}
                {s.suf && <span className="text-indigo-600">{s.suf}</span>}
              </div>
              <div className="mt-2 text-sm text-slate-500 font-medium leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <SectionRule />

      {/* Bulk */}
      <section id={c.bulk.id} className="cv-section max-w-5xl mx-auto px-6 py-20 md:py-24 scroll-mt-28">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-center [text-wrap:balance]">{c.bulk.title}</h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto">{c.bulk.sub}</p>
        <ul className="mt-12 w-fit max-w-full mx-auto space-y-4">
          {c.bulk.points.map((t) => (
            <li key={t} className="flex items-center gap-3.5 text-base md:text-[17px] text-slate-700">
              <span className="w-7 h-7 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/30" aria-hidden="true">
                <Check className="w-4 h-4 text-white" strokeWidth={3.5} />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <SectionRule />

      {/* Catch-all */}
      <section className="cv-section max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">{c.catchAll.title}</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">{c.catchAll.intro}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-7">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-200/70 text-slate-500 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </span>
              <p className="text-base font-bold text-slate-500">{c.catchAll.others}</p>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3.5">
              <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-slate-100 text-slate-500 font-bold items-center justify-center">S</span>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-slate-800 truncate">sara@northwind.co</p>
                <p className="text-xs text-slate-400 truncate">{c.catchAll.othersDetail}</p>
              </div>
              <StatusBadge tone="warn">{c.catchAll.risky}</StatusBadge>
            </div>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">{c.catchAll.othersText}</p>
          </div>

          <div className="relative rounded-2xl border border-indigo-200 bg-white p-6 md:p-7 shadow-[0_16px_40px_-20px_rgba(79,70,229,0.45)]">
            <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <p className="text-base font-bold text-slate-900">Giggal.ai</p>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3.5">
              <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-bold items-center justify-center">S</span>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-slate-800 truncate">sara@northwind.co</p>
                <p className="text-xs text-slate-400 truncate">{c.catchAll.ourDetail}</p>
              </div>
              <StatusBadge tone="good">{c.catchAll.deliverable}</StatusBadge>
            </div>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">{c.catchAll.ourText}</p>
          </div>
        </div>
      </section>

      <SectionRule />

      {/* Features: one card each, stacking on scroll on desktop */}
      <section id="features-showcase" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">{f.title}</h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">{f.intro}</p>
        </div>
        <div className="mt-12 space-y-6 md:space-y-10">
          {f.items.map((item, i) => {
            const style = FEATURE_STYLE[i]
            const href = featureHref[i]
            const linkClass = `group inline-flex items-center gap-1.5 text-base font-bold hover:underline ${style.linkColor}`
            return (
              <div
                key={item.title}
                style={{ ['--stack-top' as string]: `${128 + i * 22}px` }}
                className="md:sticky md:top-[var(--stack-top)] rounded-3xl border border-slate-200/80 bg-white overflow-hidden grid md:grid-cols-2 md:min-h-[360px] shadow-[0_-10px_30px_-24px_rgba(15,23,42,0.35)]"
              >
                <div className="p-8 md:p-10 flex flex-col">
                  <span className={`w-12 h-12 rounded-xl text-white shadow-md flex items-center justify-center ${style.iconBg}`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" fill="none" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {style.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-lg text-slate-600 leading-relaxed">{item.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-base text-slate-700">
                        <span className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${style.iconBg}`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    {href === 'SIGNUP' ? (
                      <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {item.link}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link href={href} className={linkClass}>
                        {item.link}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="p-6 md:p-10 flex items-center bg-slate-50">
                  <div className="w-full">{previews[i]}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <SectionRule />
      <ReviewBadges strings={c.reviewBadges} />
      <SectionRule />
      <ReviewWall strings={c.reviewWall} />
      <SectionRule />

      {/* Pricing */}
      <section id={c.pricing.id} className="cv-section max-w-6xl mx-auto px-6 py-20 md:py-24 space-y-12 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            {PRICE_CLAIM ? (
              <>
                {c.pricing.claimTop}
                <br />
                <span className="text-indigo-600">{c.pricing.claimBottom}</span>
              </>
            ) : (
              c.pricing.fallbackTitle
            )}
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
            {c.pricing.priceLine(usd(PRICE_10K, 2))}
            {PRICE_CLAIM && (
              <>
                {' '}{c.pricing.claim.before}
                <a href={`#${c.switcher.id}`} className="text-indigo-600 font-semibold hover:underline">{c.pricing.claim.link}</a>
                {c.pricing.claim.after}
              </>
            )}
          </p>
          <p className="mt-2 text-base text-slate-500">{c.pricing.text}</p>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-2.5 text-center sm:text-left">
            <MailCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <p className="text-xs font-bold text-slate-700">
              {pricing.formula}{' '}
              <span className="font-semibold text-slate-500">{pricing.formulaNote}</span>{' '}
              = <strong className="text-indigo-700 font-extrabold">{pricing.formulaCredit}</strong>
            </p>
          </div>
        </div>
        <PricingTable strings={pricing} />
        <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-3xl p-6 text-center max-w-2xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-200/30">
              <MailPlus className="w-5 h-5" />
            </div>
            <div className="text-left text-sm font-semibold flex-1">
              <p className="text-slate-900 font-extrabold text-base leading-tight">{pricing.customTitle}</p>
              <p className="text-slate-500 text-xs mt-0.5">{pricing.customText}</p>
            </div>
            <Link href={CLUSTERS.contact[locale]} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl transition-all shadow shrink-0 whitespace-nowrap">
              {pricing.customButton}
            </Link>
          </div>
        </div>
      </section>

      <SectionRule />

      {/* Switching from another verifier: the locale's alternative pages */}
      <section id={c.switcher.id} className="cv-section max-w-6xl mx-auto px-6 py-20 md:py-24 scroll-mt-28">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.switcher.title}</h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">{c.switcher.intro}</p>
            <Link
              href="/alternatives"
              hrefLang="en"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-base font-extrabold text-white transition-colors"
            >
              {c.switcher.all}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 overflow-hidden">
            {c.switcher.items.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-4 hover:bg-indigo-50/60 transition-colors"
              >
                <span className="w-32 sm:w-44 shrink-0 text-base font-bold text-slate-900">{s.name}</span>
                <span className="flex-1 min-w-0 text-sm sm:text-[15px] text-slate-600 leading-snug">{s.blurb}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="cv-section bg-slate-100 py-20 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.integrations.title}</h2>
            <p className="text-sm text-slate-600 font-bold">{c.integrations.sub}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 justify-items-center">
            {INTEGRATIONS.map((int) => (
              <Link
                key={int.name}
                href={integrationsHref}
                className={`${
                  int.featured ? 'featured-tile' : 'bg-white border-2 border-slate-200/80 hover:border-indigo-500'
                } rounded-2xl p-5 w-full flex flex-col items-center hover:-translate-y-1 transition-all card-vivid-shadow`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo(int.slug)} width={32} height={32} loading="lazy" decoding="async" className="w-8 h-8 mb-3 object-contain rounded-md" alt={c.integrations.alt(int.name)} />
                <span className="text-xs font-black text-slate-800">{int.name}</span>
              </Link>
            ))}
            <Link
              href={integrationsHref}
              className="border-2 border-dashed border-slate-300 bg-slate-50/40 rounded-2xl p-5 w-full flex flex-col items-center justify-center hover:border-indigo-500 hover:-translate-y-1 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mb-3 shadow-sm">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-slate-500">{c.integrations.more}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MCP: the setup guide itself is in English on /mcp */}
      <McpSection detailsHref="/mcp" divider={false} strings={c.mcp} />

      <SectionRule />

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 py-20 md:py-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{c.faq.title}</h2>
          <p className="text-base text-slate-600">{c.faq.sub}</p>
        </div>
        <FaqAccordion items={c.faq.items} />
        <p className="text-center text-sm text-slate-500 font-medium">
          {c.faq.more}{' '}
          <Link href={CLUSTERS.contact[locale]} className={`${link} inline-flex items-center gap-1`}>
            {c.faq.moreLink} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </section>

      <CtaBandL10n locale={locale} headline={c.ctaHeadline} />
      <FooterL10n locale={locale} />
    </main>
  )
}
