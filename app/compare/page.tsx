import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd } from '@/lib/schema'
import { versusSlug } from '@/lib/compare'
import { getCompetitor } from '@/lib/competitorPricing'

export const metadata: Metadata = {
  title: { absolute: 'Compare Email Verification Tools | Giggal.ai' },
  description:
    'Pick any two email verification tools and see how they compare on price, catch-all handling and accuracy, with Giggal.ai on every page.',
  alternates: { canonical: '/compare' },
  openGraph: {
    title: 'Compare Email Verification Tools',
    description:
      'See how the top email verification tools compare on price, catch-all handling and accuracy, with Giggal.ai on every page.',
    url: 'https://giggal.ai/compare',
    type: 'website',
  },
}

const FEATURED: [string, string][] = [
  ['zerobounce', 'neverbounce'],
  ['bounceban', 'bouncer'],
  ['zerobounce', 'millionverifier'],
  ['hunter', 'snovio'],
  ['hunter', 'apollo'],
  ['emailable', 'kickbox'],
  ['millionverifier', 'reoon'],
  ['scrubby', 'bounceban'],
]

const sectionTitle = 'text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'

export default function CompareHub() {
  const featured = FEATURED.map(([a, b]) => ({
    slug: versusSlug(a, b),
    label: `${getCompetitor(a).name} vs ${getCompetitor(b).name}`,
  }))

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbTrailLd([{ name: 'Compare', path: '/compare' }])} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Compare{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            email verification tools
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Pick any two email verification tools and see how they compare on price, catch-all handling
          and accuracy. Giggal.ai is on every page too, so you always have a third option to weigh.
        </p>
      </section>

      {/* ── FEATURED ─────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        <h2 className={sectionTitle}>Popular comparisons</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {featured.map((f) => (
            <Link
              key={f.slug}
              href={`/compare/${f.slug}`}
              className="flex items-center justify-between gap-3 rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 hover:border-indigo-300 hover:text-indigo-700 transition-all card-vivid-shadow"
            >
              {f.label}
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── BROWSE BY TOOL ───────────────────────────────────────
          This used to list all 351 pairs inline. That divided the hub's link
          value 351 ways, which Google read as a signal these pages did not
          matter — 129 of them were never crawled. The full index now lives one
          hop away: /alternatives ranks every tool, and each tool's own page
          carries its head-to-head links. Same destinations, far fewer links
          competing for the same authority. */}
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-6 border-t border-slate-200">
        <h2 className={sectionTitle}>Browse every comparison by tool</h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
          Every verifier we track has its own page, with a full list of its head-to-head
          matchups against the rest, plus pricing and catch-all handling side by side.
        </p>
        <Link
          href="/alternatives"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-sm shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all"
        >
          Compare verifiers
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
