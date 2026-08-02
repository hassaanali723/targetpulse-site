// Renders the mandatory "checked on" date next to any competitor pricing, plus
// a nofollow link out to that vendor's live pricing page. Legal fence, section
// 2: every competitor price on the site carries this.
import { type Competitor } from '@/lib/competitorPricing'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// '2026-08-02' -> '2 August 2026'. Parsed by hand so the output is identical on
// server and client regardless of timezone.
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}

export default function LastVerifiedNote({ competitor }: { competitor: Competitor }) {
  return (
    <p className="text-[12px] text-slate-400 font-medium leading-relaxed">
      {competitor.name} pricing checked on {fmtDate(competitor.lastVerified)}. Prices may have
      changed, see{' '}
      <a
        href={competitor.pricingUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="underline hover:text-slate-600 transition-colors"
      >
        {competitor.name}’s pricing page
      </a>
      .
    </p>
  )
}
