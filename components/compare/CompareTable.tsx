// Three-way comparison table for /compare pages: C1 | C2 | Giggal.ai (the
// Giggal column is tinted and emphasised). Driven entirely by the serialisable
// rows the compare engine returns. No client JS.
import { Check, X } from 'lucide-react'
import type { CmpValue, CmpRow } from '@/lib/compare'

function Cell({ v, strong }: { v: CmpValue; strong?: boolean }) {
  if (v.kind === 'bool') {
    if (v.yes === null) return <span className="text-slate-400 font-semibold text-[13px]">-</span>
    return v.yes ? (
      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[13px]">
        <Check className="w-4 h-4" /> Yes
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-slate-500 font-bold text-[13px]">
        <X className="w-4 h-4" /> No
      </span>
    )
  }
  return (
    <span className={strong ? 'font-black text-indigo-700' : 'font-semibold text-slate-700'}>
      {v.text}
    </span>
  )
}

export default function CompareTable({
  aName,
  bName,
  rows,
}: {
  aName: string
  bName: string
  rows: CmpRow[]
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
      <table className="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr className="bg-slate-50 border-b-2 border-slate-200">
            <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400 w-[28%]">
              &nbsp;
            </th>
            <th className="px-5 py-3 text-[13px] font-bold text-slate-600 text-left">{aName}</th>
            <th className="px-5 py-3 text-[13px] font-bold text-slate-600 text-left">{bName}</th>
            <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50/60 border-l border-indigo-100">
              Giggal.ai
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.label} className="align-top">
              <th scope="row" className="px-5 py-4 text-[13px] font-bold text-slate-600 text-left">
                {r.label}
              </th>
              <td className="px-5 py-4 text-[13px] text-slate-900">
                <Cell v={r.a} />
              </td>
              <td className="px-5 py-4 text-[13px] text-slate-900">
                <Cell v={r.b} />
              </td>
              <td className="px-5 py-4 text-[13px] text-slate-900 bg-indigo-50/40 border-l border-indigo-100">
                <Cell v={r.giggal} strong />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
