// The four results Giggal returns, shared across the alternative pages. Same
// vocabulary as /seg-email-verification so the pages read as one site. "Unknown"
// appears here only in its real sense (we could not verify, credit refunded);
// it is never used as another tool's catch-all label.
import { CheckCircle2, AlertCircle, AlertTriangle, HelpCircle } from 'lucide-react'

const VERDICTS = [
  {
    Icon: CheckCircle2,
    tint: 'text-emerald-600',
    label: 'Deliverable',
    meaning: 'The mailbox exists and will accept mail',
  },
  {
    Icon: AlertCircle,
    tint: 'text-rose-600',
    label: 'Undeliverable',
    meaning: 'The mailbox does not exist',
  },
  {
    Icon: AlertTriangle,
    tint: 'text-amber-600',
    label: 'Risky',
    meaning: 'The address exists but carries deliverability risk',
  },
  {
    Icon: HelpCircle,
    tint: 'text-slate-500',
    label: 'Unknown',
    meaning: 'We could not verify the address, and the credit is refunded',
  },
]

export default function VerdictExplainer() {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b-2 border-slate-200">
            <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">
              Result
            </th>
            <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">
              Meaning
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {VERDICTS.map(({ Icon, tint, label, meaning }) => (
            <tr key={label}>
              <td className="px-5 py-4 align-top">
                <span className="inline-flex items-center gap-2 text-sm font-black text-slate-900">
                  <Icon className={`w-4 h-4 ${tint}`} />
                  {label}
                </span>
              </td>
              <td className="px-5 py-4 text-[13px] sm:text-sm text-slate-600 font-medium">
                {meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
