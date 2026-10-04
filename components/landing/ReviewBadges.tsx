import { Check } from 'lucide-react'
import { CAPTERRA_RATING, PRODUCT_HUNT_RATING, PRODUCT_HUNT_REVIEWS, type ReviewStats } from '@/lib/reviewStats'

// Review section: one card in the brand gradient (indigo to emerald). Left: the heading and a laurel per
// review platform (score, stars, logo, review count). Right: four short
// reasons to try Giggal.ai, each a fact the site already states.
//
// SourceForge numbers are read live (lib/reviewStats.ts) and passed in;
// Product Hunt shows a rounded count; Capterra shows its score (typed in, see
// lib/reviewStats.ts) without a count. G2 has no public feed and we have no
// current G2 score we can confirm, so its laurel shows stars and "verified
// user reviews" instead of a number. Visual only: no rating markup (C10).
// Trustpilot has no laurel (too few reviews to show a score); it keeps a
// small "leave a review" link so reviews can still come in.

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
    name: 'Capterra',
    logo: '/reviews/capterra-logo.svg',
    href: 'https://www.capterra.com/p/10053924/Giggal-ai/',
    rating: CAPTERRA_RATING,
    reviews: null,
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
  // Four short reasons, shown with ticks on the right of the card.
  points: { title: string; text: string }[]
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
  points: [
    { title: '1,000 free credits', text: 'No card needed to start.' },
    { title: 'Credits never expire', text: 'Buy once and use them when you need them.' },
    { title: 'Real answers on catch-all', text: 'Valid or invalid, not "risky".' },
    { title: 'No charge for unknown results', text: 'You only pay for a clear result.' },
  ],
}

// One side of a laurel wreath: leaves along a curved stem. The right side is
// the same drawing mirrored.
function LaurelSide({ flip = false }: { flip?: boolean }) {
  const leaves = [
    { x: 16, y: 74, r: -20 },
    { x: 9, y: 62, r: -38 },
    { x: 5, y: 49, r: -58 },
    { x: 5, y: 36, r: -78 },
    { x: 9, y: 23, r: -100 },
    { x: 16, y: 12, r: -122 },
  ]
  return (
    <svg
      viewBox="0 0 30 90"
      className={`w-5 h-[72px] shrink-0 text-indigo-300/70 ${flip ? '-scale-x-100' : ''}`}
      aria-hidden="true"
    >
      <path d="M24 86 C 8 70, 2 44, 14 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx="7" ry="3.2" transform={`rotate(${l.r} ${l.x} ${l.y})`} fill="currentColor" />
      ))}
    </svg>
  )
}

// Five stars, the last one filled to the decimal (4.9 fills 90% of it).
function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className="relative w-3.5 h-3.5">
            <svg viewBox="0 0 20 20" className="absolute inset-0 w-full h-full text-amber-200">
              <path fill="currentColor" d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8z" />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-amber-400">
                <path fill="currentColor" d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8z" />
              </svg>
            </span>
          </span>
        )
      })}
    </span>
  )
}

export default function ReviewBadges({
  strings: s = REVIEW_BADGES_EN,
  sourceforge,
}: {
  strings?: ReviewBadgeStrings
  sourceforge: ReviewStats
}) {
  return (
    <section className="cv-section max-w-6xl mx-auto px-6 py-20 md:py-24">
      <div className="relative isolate overflow-clip rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 px-5 py-12 sm:px-10 md:px-14 md:py-16 shadow-[0_24px_60px_-30px_rgba(79,70,229,0.25)]">
        {/* Brand light: soft indigo top left, emerald bottom right, the same
            pair as the hero and the logo. */}
        <div aria-hidden="true" className="absolute -top-32 -left-32 -z-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_65%)]" />
        <div aria-hidden="true" className="absolute -bottom-32 -right-32 -z-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.16),transparent_65%)]" />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          {/* Left: heading and laurels. */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">{s.heading}</h2>

            <div className="mt-10 mx-auto grid w-fit grid-cols-2 justify-items-center gap-x-4 sm:gap-x-8 gap-y-8">
              {platforms(sourceforge).map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.readOn(p.name)}
                  className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex items-center">
                    <LaurelSide />
                    <span className="flex w-[100px] flex-col items-center gap-1.5">
                      {p.rating !== null ? (
                        <>
                          <span className="text-2xl font-extrabold leading-none text-slate-900 tabular-nums">{s.rating(p.rating)}</span>
                          <Stars rating={p.rating} />
                        </>
                      ) : (
                        <>
                          <Stars rating={5} />
                        </>
                      )}
                      <span className="mt-1 flex items-center gap-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.logo} alt="" aria-hidden="true" width={20} height={20} loading="lazy" decoding="async" className="w-4 h-4 object-contain" />
                        <span className="whitespace-nowrap text-[12.5px] font-bold text-slate-800">{p.name}</span>
                      </span>
                    </span>
                    <LaurelSide flip />
                  </span>
                  <span className="mt-2 text-xs leading-snug font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">
                    {p.reviews !== null ? s.reviews(p.reviews) : s.verified}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-500">
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
          </div>

          {/* Right: four reasons with ticks. */}
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {s.points.map((pt) => (
              <li key={pt.title} className="flex items-start gap-4">
                <Check className="mt-0.5 w-7 h-7 shrink-0 text-emerald-500" strokeWidth={3} aria-hidden="true" />
                <p className="text-base leading-relaxed text-slate-600">
                  <strong className="block text-lg font-bold text-slate-900">{pt.title}</strong>
                  {pt.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
