'use client'

import React, { useState, useEffect } from 'react'
import { Sparkles, X } from 'lucide-react'

const KEY = 'giggal-rebrand-banner-dismissed'

/**
 * Slim rebrand notice pinned above the navbar on the landing page.
 * Layout offsets (navbar top + hero padding) are driven by the `has-ann`
 * class on the landing <main>, so dismissing the bar reverts them in CSS —
 * see the ".has-ann" rules in globals.css.
 */
export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem(KEY) === '1') {
      setHidden(true)
      document.querySelector('main')?.classList.remove('has-ann')
    }
  }, [])

  const dismiss = () => {
    setHidden(true)
    try { localStorage.setItem(KEY, '1') } catch { /* storage unavailable */ }
    document.querySelector('main')?.classList.remove('has-ann')
  }

  if (hidden) return null

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-10 bg-gradient-to-r from-indigo-600 via-indigo-600 to-emerald-600 text-white">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-center relative">
        <p className="flex items-center gap-2 text-[12px] sm:text-[13px] font-bold tracking-tight text-center">
          <Sparkles className="w-3.5 h-3.5 shrink-0 text-emerald-200" />
          <span>
            <span className="font-black">TargetPulse</span>
            <span className="text-indigo-100 font-semibold"> is now Giggal.ai</span>
            <span className="hidden sm:inline text-indigo-100 font-semibold">. We finally got a name that fits.</span>
          </span>
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-md text-white/80 hover:text-white hover:bg-white/15 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
