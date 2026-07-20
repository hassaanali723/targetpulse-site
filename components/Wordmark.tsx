import React from 'react'

/**
 * Giggal.ai text wordmark. "Gig" renders in solid ink, "gal.ai" in the
 * indigo → emerald brand gradient (see .brand-wordmark-accent in globals.css).
 * Size/weight come from `className` on the caller (e.g. "text-2xl sm:text-3xl").
 */
export default function Wordmark({
  className = '',
  tone = 'dark',
}: {
  className?: string
  /** `light` renders "Gig" in white, for dark backgrounds like the footer. */
  tone?: 'dark' | 'light'
}) {
  const ink = tone === 'light' ? 'text-white' : 'text-slate-900'
  return (
    <span className={`font-black tracking-tight leading-none ${ink} ${className}`}>
      Gig<span className="brand-wordmark-accent">gal.ai</span>
    </span>
  )
}
