import { Star, ArrowRight } from 'lucide-react'
import { PRODUCT_HUNT_RATING, PRODUCT_HUNT_REVIEWS, type ReviewStats } from '@/lib/reviewStats'

// One plain card per review platform: name, score, stars, review count and a
// link to the reviews. SourceForge numbers are read live (lib/reviewStats.ts)
// and passed in; Product Hunt shows a rounded count. A platform with
// `rating: null` shows the link only.
// Trustpilot has no card (too few reviews to show a score); it keeps a small
// "leave a review" link under the cards so reviews can still come in.
type Platform = {
  name: string
  logo: string
  href: string
  rating: number | null
  reviews: string | null
}

const platforms = (sourceforge: ReviewStats): Platform[] => [
  {
    name: 'Product Hunt',
    logo: '/reviews/producthunt-logo.svg',
    href: 'https://www.producthunt.com/products/giggal-ai/reviews',
    rating: PRODUCT_HUNT_RATING,
    reviews: PRODUCT_HUNT_REVIEWS,
  },
  {
    name: 'SourceForge',
    logo: '/reviews/sourceforge-logo.svg',
    href: 'https://sourceforge.net/software/product/Giggal.ai/',
    rating: sourceforge.rating,
    reviews: String(sourceforge.count),
  },
  {
    name: 'G2',
    logo: '/reviews/G2_logo.svg',
    href: 'https://www.g2.com/products/giggal/reviews',
    rating: null,
    reviews: null,
  },
]

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/giggal.ai'

// Visible text, so a localized home can pass its own.
export interface ReviewBadgeStrings {
  heading: string
  readOn: (platform: string) => string
  rating: (n: number) => string
  reviews: (n: string) => string
  verified: string
  read: string
  used: string
  leave: string
}

export const REVIEW_BADGES_EN: ReviewBadgeStrings = {
  heading: 'Reviewed by Real Teams',
  readOn: (platform) => `Read Giggal.ai reviews on ${platform}`,
  rating: (n) => n.toFixed(1),
  reviews: (n) => `${n} reviews`,
  verified: 'Verified user reviews',
  read: 'Read reviews',
  used: 'Used Giggal.ai?',
  leave: 'Leave a review on Trustpilot',
}

export default function ReviewBadges({
  strings: s = REVIEW_BADGES_EN,
  sourceforge,
}: {
  strings?: ReviewBadgeStrings
  sourceforge: ReviewStats
}) {
  return (
    <section className="cv-section max-w-5xl mx-auto px-6 py-20 md:py-24">
      <div className="sr-rise text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{s.heading}</h2>
      </div>

      <div className="sr-stagger grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {platforms(sourceforge).map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.readOn(p.name)}
            data-spotlight
            className="spotlight relative group bg-white border border-slate-200 hover:border-indigo-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(79,70,229,0.35)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt="" aria-hidden="true" width={32} height={32} loading="lazy" className="w-8 h-8 object-contain" />
              <span className="text-base font-bold text-slate-900">{p.name}</span>
            </div>

            {p.rating !== null ? (
              <>
                <p className="mt-5 text-4xl font-extrabold text-slate-900 leading-none">
                  {s.rating(p.rating)}
                  <span className="text-lg font-semibold text-slate-400"> / 5</span>
                </p>
                <div className="mt-3 flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {p.reviews !== null && <p className="mt-2 text-sm text-slate-500">{s.reviews(p.reviews)}</p>}
              </>
            ) : (
              <>
                <div className="mt-5 flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-slate-500">{s.verified}</p>
              </>
            )}

            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:underline">
              {s.read}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        {s.used}{' '}
        <a
          href={TRUSTPILOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-slate-700 hover:text-indigo-600 hover:underline"
        >
          {s.leave}
        </a>
      </p>
    </section>
  )
}
