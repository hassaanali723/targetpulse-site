import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

export type Source = 'producthunt' | 'g2' | 'sourceforge'
const SOURCE_LABEL: Record<Source, string> = {
  producthunt: 'Product Hunt',
  g2: 'G2',
  sourceforge: 'SourceForge',
}

// Product Hunt quotes were originally written under our previous name
// (TargetPulse) and have been updated in-place to say "Giggal" post-rebrand.
// G2 and SourceForge reviews are all native to the Giggal.ai profile.
export interface Review { name: string; avatar?: string; quote: string; url: string; source: Source; rating?: number }

const AVATAR_TINTS = [
  'bg-indigo-100 text-indigo-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-violet-100 text-violet-700',
]
function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}
function tint(name: string) {
  let sum = 0
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i)
  return AVATAR_TINTS[sum % AVATAR_TINTS.length]
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => {
        // fill fraction of this star: 1 = full, 0 = empty, 0.5 = half
        const fill = Math.max(0, Math.min(1, count - i))
        return (
          <div key={i} className="relative w-3.5 h-3.5">
            <Star className="absolute inset-0 w-3.5 h-3.5 text-slate-300 fill-slate-200" />
            {fill > 0 && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function Card({ r }: { r: Review }) {
  return (
    <a
      href={r.url}
      target="_blank"
      // Dozens of cards point at the same two review listings. The platform
      // badges above already carry one followed link each, so the card links
      // are nofollow: they exist for the reader, not for link equity.
      rel="nofollow noopener noreferrer"
      className="shrink-0 w-[320px] sm:w-[360px] h-[220px] bg-white border-2 border-slate-200 rounded-3xl p-6 card-vivid-shadow hover:border-indigo-500 transition-colors flex flex-col"
    >
      <div className="flex items-center gap-3.5 mb-3">
        {r.avatar ? (
          <Image
            src={r.avatar}
            alt={r.name}
            width={44}
            height={44}
            loading="lazy"
            className="w-11 h-11 rounded-full object-cover shrink-0 bg-slate-100"
          />
        ) : (
          <span className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-sm font-black ${tint(r.name)}`}>
            {initials(r.name)}
          </span>
        )}
        <div className="leading-snug min-w-0">
          <span className="text-sm font-black text-slate-900 block truncate">{r.name}</span>
          <span className="text-[11px] text-slate-500 font-bold block">via {SOURCE_LABEL[r.source]}</span>
        </div>
      </div>
      <Stars count={r.rating ?? 5} />
      <p className="text-sm text-slate-600 leading-relaxed font-semibold line-clamp-4">&ldquo;{r.quote}&rdquo;</p>
    </a>
  )
}
