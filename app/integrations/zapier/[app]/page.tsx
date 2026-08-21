import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { ArrowRight, ArrowUpRight, RefreshCw, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd, faqPageLd } from '@/lib/schema'
import { ZAPIER_APP_URL, SIGNUP_URL } from '@/lib/integrations'
import {
  ZAPIER_APPS,
  getZapierApp,
  relatedZapierApps,
  zapierAppLogo,
  zapierAppLogoAlt,
  type ZapierApp,
} from '@/lib/zapierApps'
import { categoryCopy, type CategoryCopy } from '@/lib/zapierCategoryCopy'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export function generateStaticParams() {
  return ZAPIER_APPS.map((a) => ({ app: a.slug }))
}

export function generateMetadata({ params }: { params: { app: string } }): Metadata {
  const app = getZapierApp(params.app)
  if (!app) return {}
  const title = `${app.name} Email Verification with Zapier`
  const description = categoryCopy(app.category).hero(app.name, app.triggerExample)
  return {
    title,
    description,
    alternates: { canonical: `/integrations/zapier/${app.slug}` },
    openGraph: {
      siteName: 'Giggal.ai',
      title: `${title} | Giggal.ai`,
      description,
      url: `https://giggal.ai/integrations/zapier/${app.slug}`,
      type: 'website',
    },
  }
}

function logoSrc(app: ZapierApp): string | null {
  const rel = zapierAppLogo(app.slug)
  const file = path.join(process.cwd(), 'public', rel.slice(1))
  return fs.existsSync(file) ? rel : null
}

const GUIDE_IMAGES = {
  pickApp: '/integrations/zapier-integration/Generic/giggal-zapier-apps-integration-step1.png',
  pickAction: '/integrations/zapier-integration/Generic/giggal-zapier-apps-integration-step2.png',
  connect: '/integrations/zapier-integration/Generic/giggal-zapier-apps-integration-step3.png',
}

function buildSteps(app: ZapierApp, copy: CategoryCopy): { title: string; text: string; image?: string; imageAlt?: string }[] {
  return [
    {
      title: `Set ${app.name} as your trigger`,
      text: `Create a Zap and pick ${app.name} from Zapier's app picker as the trigger. Choose the event that fires when ${app.triggerExample}, then connect your ${app.name} account and continue.`,
      image: GUIDE_IMAGES.pickApp,
      imageAlt: `Choosing ${app.name} as the trigger app in the Zapier editor`,
    },
    {
      title: 'Add Giggal.ai and pick an action',
      text: 'Add Giggal.ai as the action step. You get four actions: Verify Email for single addresses, Start Bulk Verification for whole lists, Get Bulk Verification Results to fetch a finished job, and Get Credit Balance. For one address at a time, pick Verify Email.',
      image: GUIDE_IMAGES.pickAction,
      imageAlt: 'Selecting a Giggal.ai action event in Zapier',
    },
    {
      title: 'Connect your Giggal.ai account',
      text: 'The first time Zapier asks, grab a key from your Giggal.ai dashboard: open the Developer API tab and click Create API Key. New accounts get 1,000 free credits with no card required, enough to test the whole flow.',
      image: GUIDE_IMAGES.connect,
      imageAlt: 'Connecting a Giggal.ai account to Zapier with an API key',
    },
    {
      title: 'Map the email field and route on the result',
      text: copy.routing(app.name),
    },
  ]
}

function buildFaq(app: ZapierApp, copy: CategoryCopy): FaqItem[] {
  return [
    {
      q: `How do I verify ${app.name} emails automatically?`,
      a: `Connect ${app.name} and Giggal.ai in a Zap. When ${app.triggerExample}, Zapier sends the address to Giggal.ai, which runs a deep mailbox existence check and returns the result to the next step. Setup takes about five minutes and needs no code.`,
    },
    {
      q: `Can it verify catch-all emails coming from ${app.name}?`,
      a: `Yes, and that is the point of using Giggal.ai here. Around 30% of B2B addresses sit on catch-all domains that most verifiers just label risky. Giggal.ai is a catch-all email verification tool at its core: it resolves those addresses into a clear result with a score, so you keep leads other tools throw away.`,
    },
    copy.faq(app.name),
    {
      q: 'What does each verification cost?',
      a: 'One credit per email, with catch-all deep verification running in-line when needed. New accounts start with 1,000 free credits and no credit card.',
    },
    {
      q: `What data comes back to my ${app.name} workflow?`,
      a: 'Every check returns status (deliverable or undeliverable), risk level, deliverability score and the catch-all result. You can use any of these fields in Zapier filters, paths and later steps.',
    },
  ]
}

export default function ZapierAppPage({ params }: { params: { app: string } }) {
  const app = getZapierApp(params.app)
  if (!app) notFound()

  const copy = categoryCopy(app.category)
  const steps = buildSteps(app, copy)
  const faq = buildFaq(app, copy)
  const related = relatedZapierApps(app.slug, 6)
  const logo = logoSrc(app)

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to verify ${app.name} emails with Zapier and Giggal.ai`,
    description: `Set up automated email verification for ${app.name}, including catch-all resolution, using the Giggal.ai Zapier integration.`,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
      ...(s.image ? { image: `https://giggal.ai${s.image}` } : {}),
    })),
  }

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Integrations', path: '/integrations' },
          { name: 'Zapier', path: '/integrations/zapier' },
          { name: app.name, path: `/integrations/zapier/${app.slug}` },
        ])}
      />
      <JsonLd data={faqPageLd(faq)} />
      <JsonLd data={howToLd} />
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-14 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] font-bold mb-8">
          <Link href="/integrations" className="text-indigo-600 hover:text-indigo-700">
            Integrations
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/integrations/zapier" className="text-indigo-600 hover:text-indigo-700">
            Zapier
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600">{app.name}</span>
        </nav>

        {/* Three-logo pair: Giggal ⇄ App ⇄ Zapier */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/giggal-catch-all-email-verifier-icon.png"
              alt="Giggal.ai"
              width={40}
              height={40}
              loading="eager"
              decoding="async"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />
          </div>
          <RefreshCw className="w-5 h-5 text-slate-400 shrink-0" aria-hidden="true" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo}
                alt={zapierAppLogoAlt(app.name)}
                width={40}
                height={40}
                loading="eager"
                decoding="async"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-lg"
              />
            ) : (
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo-600 text-white font-black text-lg flex items-center justify-center">
                {app.name[0]}
              </span>
            )}
          </div>
          <RefreshCw className="w-5 h-5 text-slate-400 shrink-0" aria-hidden="true" />
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/integrations/zapier.png"
              alt="Zapier"
              width={40}
              height={40}
              loading="eager"
              decoding="async"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          {app.name} Email Verification <span className="gradient-text">with Zapier</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          {copy.hero(app.name, app.triggerExample)}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-black text-[15px] hover:bg-indigo-700 transition-colors glow-recommendation"
          >
            Start free with 1,000 credits
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={ZAPIER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-300 bg-white text-slate-800 font-bold text-[15px] hover:border-indigo-400 transition-colors"
          >
            View on Zapier
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* How it works + About sidebar */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          <div className="min-w-0">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              How the {app.name} integration works
            </h2>
            <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
              {copy.intro(app.name)} Setup takes about five minutes.
            </p>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
                  <div className="flex gap-5">
                    <span className="w-9 h-9 rounded-full bg-indigo-600 text-white font-black text-[15px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[16px] font-black text-slate-900 mb-1.5">{s.title}</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{s.text}</p>
                      {s.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={s.image}
                          alt={s.imageAlt ?? s.title}
                          width={1736}
                          height={980}
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

            {/* Catch-all positioning callout */}
            <div className="mt-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6">
              <h3 className="text-[15px] font-black text-slate-900 mb-2">
                Powered by a catch-all email verifier, not a standard checker
              </h3>
              <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                Most verifiers stop at a basic SMTP ping. SEG-protected addresses come back
                as unknown, and catch-all domains come back as risky. Giggal.ai verifies
                both. It{' '}
                <Link
                  href="/seg-email-verification"
                  className="font-black text-indigo-600 hover:text-indigo-700"
                >
                  bypasses secure email gateways
                </Link>{' '}
                like Proofpoint and Mimecast, runs deep verification on catch-all domains,
                and confirms the mailbox behind every address coming from {app.name} actually
                exists. Either way you get a clear valid or invalid result, and around 30%
                more of your list stays usable. That is what makes it a catch-all email
                verification tool rather than another checker.{' '}
                <Link
                  href="/catch-all-verification"
                  className="font-black text-indigo-600 hover:text-indigo-700"
                >
                  See how catch-all verification works
                </Link>
                .
              </p>
            </div>
          </div>

          {/* About sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-3">
                About {app.name}
              </p>
              <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-4">{app.about}</p>
              <p className="text-[12px] font-bold text-slate-500 mb-4">
                Category: <span className="text-slate-700">{app.category}</span>
              </p>
              <a
                href={`https://${app.domain.replace(/^(contacts|forms|sheets)\./, 'www.')}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 text-[13px] font-black text-indigo-600 hover:text-indigo-700"
              >
                Visit the {app.name} website <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-3">
                Related integrations
              </p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/integrations/zapier/${r.slug}`}
                      className="text-[13.5px] font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                      {r.name} email verification
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Benefits: category-specific copy */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {copy.benefits.map((b, i) => {
            const Icon = [Zap, ShieldCheck, CheckCircle2][i] ?? Zap
            const tint = [
              'bg-emerald-100 text-emerald-700',
              'bg-indigo-100 text-indigo-700',
              'bg-violet-100 text-violet-700',
            ][i]
            return (
              <div key={b.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${tint}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-[16px] font-black text-slate-900 mb-2">{b.title}</h2>
                <p className="text-[13.5px] text-slate-600 leading-relaxed font-medium">
                  {b.text(app.name)}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-10">
          {app.name} + Giggal.ai FAQ
        </h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 card-vivid-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[15px] font-black text-slate-900">
                {f.q}
                <span className="text-indigo-600 text-xl leading-none group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] text-slate-600 leading-relaxed font-medium">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 pt-6">
        <div className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Verify {app.name} Emails Before They Cost You
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-[15px] leading-relaxed font-medium">
            Wire up {app.name} and Giggal.ai in five minutes. 1,000 free credits, no credit
            card, catch-all verification included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-black text-[15px] hover:bg-indigo-50 transition-colors"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/integrations/zapier"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Zapier integration overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
