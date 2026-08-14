// Side-by-side cost at 10k / 100k / 1M: Giggal against one competitor. Every
// number is read from competitorPricing.ts. Unknown tiers render "Not
// published"; estimate tiers render the number with a footnote marker.
import {
  type Competitor,
  giggalTierAt,
  tierAt,
  fmtCredits,
  fmtUsd,
} from '@/lib/competitorPricing'
import LastVerifiedNote from './LastVerifiedNote'

const VOLUMES = [10000, 100000, 1000000]

export default function PricingLadder({ competitor }: { competitor: Competitor }) {
  const hasEstimate = competitor.tiers.some((t) => t.status === 'estimate')

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-200">
              <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">
                Volume
              </th>
              <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-indigo-600">
                Giggal.ai
              </th>
              <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">
                {competitor.name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {VOLUMES.map((credits) => {
              const g = giggalTierAt(credits)
              const c = tierAt(competitor, credits)
              return (
                <tr key={credits}>
                  <td className="px-5 py-4 text-sm font-bold text-slate-700">
                    {fmtCredits(credits)}
                  </td>
                  <td className="px-5 py-4 text-sm font-black text-indigo-700">
                    {g.totalUsd !== null ? fmtUsd(g.totalUsd) : '-'}
                  </td>
                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    {c && c.status !== 'unknown' && c.totalUsd !== null ? (
                      <>
                        {fmtUsd(c.totalUsd)}
                        {c.perMonth && (
                          <span className="text-[11px] font-semibold text-slate-400 ml-0.5">
                            /mo
                          </span>
                        )}
                        {c.status === 'estimate' && (
                          <sup className="text-[10px] text-slate-400 ml-0.5">est</sup>
                        )}
                      </>
                    ) : (
                      <span className="text-slate-400 font-semibold">{c?.note ?? '-'}</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {hasEstimate && (
        <p className="text-[11px] text-slate-400 font-medium">
          <sup>est</sup> Estimate from third-party sources, not confirmed on {competitor.name}’s
          pricing page.
        </p>
      )}

      {competitor.pricingBasisNote && (
        <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
          {competitor.pricingBasisNote}
        </p>
      )}

      <LastVerifiedNote competitor={competitor} />
    </div>
  )
}
