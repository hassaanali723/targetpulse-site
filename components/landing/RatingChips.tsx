import { Star } from 'lucide-react'
import { getSourceForgeStats, PRODUCT_HUNT_RATING, CAPTERRA_RATING, G2_RATING } from '@/lib/reviewStats'

// The row of review-site rating chips (SourceForge, Product Hunt, Capterra,
// G2), the same chips /email-checker shows under its tool. SourceForge is read
// live (lib/reviewStats.ts); the others are typed in there. Visual only, no
// rating markup (site rule C10).
// Text defaults to English; translated pages pass their own, plus
// decimalComma for languages that write 4,9 instead of 4.9.
export default async function RatingChips({
  className = '',
  reviews = (n) => `${n} reviews`,
  ratedAria = (rating, platform) => `Giggal.ai rated ${rating} out of 5 on ${platform}`,
  decimalComma = false,
}: {
  className?: string
  reviews?: (count: number) => string
  ratedAria?: (rating: string, platform: string) => string
  decimalComma?: boolean
}) {
  const sourceforge = await getSourceForgeStats()
  const chips = [
    { name: 'SourceForge', logo: '/reviews/sourceforge-logo.svg', href: 'https://sourceforge.net/software/product/Giggal.ai/', rating: sourceforge.rating, note: `SourceForge · ${reviews(sourceforge.count)}` },
    { name: 'Product Hunt', logo: '/reviews/producthunt-logo.svg', href: 'https://www.producthunt.com/products/giggal-ai/reviews', rating: PRODUCT_HUNT_RATING, note: 'Product Hunt' },
    { name: 'Capterra', logo: '/reviews/capterra-logo.svg', href: 'https://www.capterra.com/p/10053924/Giggal-ai/', rating: CAPTERRA_RATING, note: 'Capterra' },
    { name: 'G2', logo: '/reviews/G2_logo.svg', href: 'https://www.g2.com/products/giggal/reviews', rating: G2_RATING, note: 'G2' },
  ]
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2.5 ${className}`}>
      {chips.map((r) => (
        <a
          key={r.name}
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ratedAria(r.rating.toFixed(1), r.name)}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white pl-2 pr-3.5 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-indigo-200 hover:shadow-[0_6px_16px_-8px_rgba(79,70,229,0.35)] transition-all"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={r.logo} alt="" aria-hidden="true" width={20} height={20} loading="lazy" decoding="async" className="w-5 h-5 object-contain" />
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          <span className="text-[13px] font-extrabold text-slate-900 tabular-nums">{decimalComma ? r.rating.toFixed(1).replace('.', ',') : r.rating.toFixed(1)}</span>
          <span className="text-[12.5px] font-medium text-slate-500 group-hover:text-slate-700">{r.note}</span>
        </a>
      ))}
    </div>
  )
}
