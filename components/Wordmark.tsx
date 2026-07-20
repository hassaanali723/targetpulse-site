import React from 'react'

/**
 * Giggal.ai text wordmark. "Gig" renders in solid ink, "gal.ai" in the
 * indigo → emerald brand gradient (see .brand-wordmark-accent in globals.css).
 * Size/weight come from `className` on the caller (e.g. "text-2xl sm:text-3xl").
 */
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-black tracking-tight text-slate-900 leading-none ${className}`}>
      Gig<span className="brand-wordmark-accent">gal.ai</span>
    </span>
  )
}
