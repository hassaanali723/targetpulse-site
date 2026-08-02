// Two-column Giggal vs competitor feature table, entirely driven by
// competitorPricing.ts. Yes/No cells use icons; policy cells use the plain
// sentence from the config. "Not published" is shown wherever a fact is unknown.
import { type ReactNode } from 'react'
import { Check, X } from 'lucide-react'
import { type Competitor, giggalTierAt, tierAt, fmtUsd, GIGGAL } from '@/lib/competitorPricing'

function YesNo({ value }: { value: boolean | null }) {
  if (value === null)
    return <span className="text-slate-400 font-semibold text-[13px]">-</span>
  return value ? (
    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[13px]">
      <Check className="w-4 h-4" /> Yes
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-slate-500 font-bold text-[13px]">
      <X className="w-4 h-4" /> No
    </span>
  )
}

export default function ComparisonTable({ competitor }: { competitor: Competitor }) {
  const gPrice = giggalTierAt(10000)
  const cPrice = tierAt(competitor, 10000)

  const rows: { label: string; giggal: ReactNode; competitor: ReactNode }[] = [
    {
      label: 'Price at 10,000 credits',
      giggal: <span className="font-black text-indigo-700">{fmtUsd(gPrice.totalUsd!)}</span>,
      competitor:
        cPrice && cPrice.status !== 'unknown' && cPrice.totalUsd !== null ? (
          <span className="font-bold">{fmtUsd(cPrice.totalUsd)}</span>
        ) : (
          <span className="text-slate-400 font-semibold">-</span>
        ),
    },
    {
      label: 'Confirms catch-all addresses',
      giggal: <YesNo value={GIGGAL.resolvesCatchAll} />,
      competitor: <YesNo value={competitor.resolvesCatchAll} />,
    },
    {
      label: 'Catch-all pricing',
      giggal: <span className="font-semibold text-slate-700">{GIGGAL.catchAllCreditCost}</span>,
      competitor: (
        <span className="font-semibold text-slate-700">{competitor.catchAllCreditCost}</span>
      ),
    },
    {
      label: 'SEG verifier',
      giggal: (
        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[13px]">
          <Check className="w-4 h-4" /> {GIGGAL.segGatewayCount} gateways
        </span>
      ),
      competitor: <YesNo value={competitor.advertisesSegSupport} />,
    },
    {
      label: 'Credit expiry',
      giggal: <span className="font-semibold text-slate-700">{GIGGAL.creditsExpire}</span>,
      competitor: <span className="font-semibold text-slate-700">{competitor.creditsExpire}</span>,
    },
    {
      label: 'Free tier',
      giggal: <span className="font-semibold text-slate-700">{GIGGAL.freeTier}</span>,
      competitor: <span className="font-semibold text-slate-700">{competitor.freeTier}</span>,
    },
    {
      label: 'Charges for unknown results',
      giggal: <YesNo value={false} />,
      competitor: <YesNo value={competitor.chargesForUnknown} />,
    },
    {
      label: 'Accuracy figure',
      giggal: <span className="font-semibold text-slate-700">{GIGGAL.claimedAccuracy}</span>,
      competitor: <span className="font-semibold text-slate-700">{competitor.claimedAccuracy}</span>,
    },
  ]

  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
      <table className="w-full text-left border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-slate-50 border-b-2 border-slate-200">
            <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400 w-[38%]">
              &nbsp;
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
          {rows.map((r) => (
            <tr key={r.label} className="align-top">
              <th
                scope="row"
                className="px-5 py-4 text-[13px] font-bold text-slate-600 text-left"
              >
                {r.label}
              </th>
              <td className="px-5 py-4 text-[13px] text-slate-900">{r.giggal}</td>
              <td className="px-5 py-4 text-[13px] text-slate-900">{r.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
