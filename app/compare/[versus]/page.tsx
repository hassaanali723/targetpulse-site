import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbTrailLd } from '@/lib/schema'
import CompareTable from '@/components/compare/CompareTable'
import {
  allPairs,
  parseVersus,
  buildComparison,
  versusSlug,
} from '@/lib/compare'
import { ALL_COMPETITOR_SLUGS, getCompetitor } from '@/lib/competitorPricing'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export function generateStaticParams() {
  return allPairs().map(({ a, b }) => ({ versus: `${a}-vs-${b}` }))
}

export function generateMetadata({ params }: { params: { versus: string } }): Metadata {
  const pair = parseVersus(params.versus)
  if (!pair) return {}
  const c = buildComparison(pair.a, pair.b)
  const url = `https://giggal.ai/compare/${params.versus}`
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: `/compare/${params.versus}` },
    openGraph: { title: c.ogTitle, description: c.metaDescription, url, type: 'website' },
    twitter: { card: 'summary_large_image', title: c.ogTitle, description: c.metaDescription },
  }
}

const sectionTitle = 'text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ComparePage({ params }: { params: { versus: string } }) {
  const pair = parseVersus(params.versus)
  if (!pair) notFound()

  const c = buildComparison(pair.a, pair.b)
  const A = c.a.name
  const B = c.b.name

  // Related comparisons: pair each side with a few other competitors.
  const others = ALL_COMPETITOR_SLUGS.filter((s) => s !== pair.a && s !== pair.b)
  const related = [
    ...others.slice(0, 4).map((s) => ({ a: pair.a, s })),
    ...others.slice(0, 4).map((s) => ({ a: pair.b, s })),
  ].map(({ a, s }) => ({
    slug: versusSlug(a, s),
    label: `${getCompetitor(a).name} vs ${getCompetitor(s).name}`,
  }))

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Compare', path: '/compare' },
          { name: `${A} vs ${B}`, path: `/compare/${params.versus}` },
        ])}
      />
      <JsonLd data={faqPageLd(c.faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          {A} <span className="text-indigo-500">vs</span> {B}
        </h1>
        <p className={`${proseP} max-w-2xl mx-auto`}>{c.intro}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            Start free with 1,000 credits
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/compare"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            All comparisons
          </Link>
        </div>
      </section>

      {/* ── TABLE ────────────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-8 pb-16 space-y-6">
        <h2 className={sectionTitle}>
          How {A}, {B} and Giggal.ai compare
        </h2>
        <CompareTable aName={A} bName={B} rows={c.rows} />
        <p className="text-[12px] text-slate-400 font-medium">
          Every price and policy here comes from the vendor&apos;s own pricing. Where a tool does not
          sell by volume, the cell shows &quot;Quote only&quot;, &quot;Per seat&quot; or its monthly
          plan price instead.
        </p>
      </section>

      {/* ── DIMENSION SECTIONS ───────────────────────────────── */}
      {c.sections.map((s) => (
        <section
          key={s.heading}
          className="cv-section max-w-3xl mx-auto px-6 pt-10 pb-16 border-t border-slate-200 space-y-5"
        >
          <h2 className={sectionTitle}>{s.heading}</h2>
          <p className={proseP}>{s.prose}</p>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3">
            <p className="text-[13px] md:text-sm font-semibold text-slate-700">
              <span className="text-indigo-700 font-black">{s.giggalEdgeLabel}</span>{' '}
              {s.giggalEdge}
            </p>
          </div>
        </section>
      ))}

      {/* ── GIGGAL PROMO BAND ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="rounded-3xl border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-8 md:p-10 text-center card-vivid-shadow space-y-5">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Why teams pick Giggal.ai over both
          </h2>
          <p className={`${proseP} max-w-2xl mx-auto`}>
            {A} and {B} each leave a pile of catch-all and gateway-protected addresses unconfirmed.
            Giggal.ai returns a real result on those at 1.5 credits, verifies behind 15 secure email
            gateways, and publishes a flat $9.90 per 10,000 with credits that never expire.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            Verify 1,000 emails free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-10 pb-16 border-t border-slate-200 space-y-8">
        <h2 className={`${sectionTitle} text-center`}>Frequently asked questions</h2>
        <FaqAccordion items={c.faqs} />
      </section>

      {/* ── RELATED + ALTERNATIVE LINKS ──────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-10 pb-24 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Related comparisons</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/compare/${r.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-all card-vivid-shadow"
            >
              {r.label}
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-500 font-medium">
          Want a direct comparison with Giggal.ai? See the{' '}
          <Link href={`/${pair.a}-alternative`} className="text-indigo-600 font-bold hover:underline">
            {A} alternative
          </Link>{' '}
          and{' '}
          <Link href={`/${pair.b}-alternative`} className="text-indigo-600 font-bold hover:underline">
            {B} alternative
          </Link>{' '}
          pages, or{' '}
          <Link href="/alternatives" className="text-indigo-600 font-bold hover:underline">
            compare every verifier
          </Link>
          .
        </p>
      </section>

      <Footer />
    </main>
  )
}
