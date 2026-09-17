import Link from 'next/link'
import { versusSlug } from '@/lib/compare'
import { ALL_COMPETITOR_SLUGS, getCompetitor } from '@/lib/competitorPricing'
import { isAltIndexed, isCompareIndexed } from '@/lib/indexPolicy'

// Head-to-head links for one brand.
//
// Comparison pages used to be reachable only from /compare, a single hub
// carrying ~351 links, which left each of them with a fraction of its link
// value too small for Google's crawl scheduler to act on — 129 were never
// fetched. Linking each comparison from both brand pages it involves gives
// every one of them two contextual parents instead of one overloaded hub.
//
// Pairs come from ALL_COMPETITOR_SLUGS via versusSlug(), the same source that
// drives /compare and the sitemap, so a new competitor shows up here with no
// edit to this file.

export default function HeadToHeadComparisons({ slug }: { slug: string }) {
  const self = getCompetitor(slug)

  // An indexed brand page links only the indexed pairs (C7, Sprint 0 item 4):
  // 26 links to noindexed pages would waste most of the page's link value.
  // Noindexed tier-C pages keep the full block.
  const indexedPage = isAltIndexed(slug)
  const links = ALL_COMPETITOR_SLUGS.filter((other) => other !== slug)
    .filter((other) => !indexedPage || isCompareIndexed(versusSlug(slug, other)))
    .map((other) => ({
    slug: versusSlug(slug, other),
    // Anchor always reads "{This brand} vs {Other}" no matter which side is
    // canonically first in the URL, so the text stays natural on the page it
    // sits on.
    label: `${self.name} vs ${getCompetitor(other).name}`,
  }))

  if (!links.length) return null

  return (
    <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        {self.name} head-to-head comparisons
      </h2>
      <p className="text-base text-slate-600 leading-relaxed font-medium max-w-2xl">
        See how {self.name} stacks up against the verifiers we track most, with
        Giggal.ai on each page as a third option. The full grid is on the{' '}
        <Link href="/compare" className="text-indigo-600 font-bold hover:underline">comparison hub</Link>.
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={l.slug}
            href={`/compare/${l.slug}`}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-700 transition-all"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
