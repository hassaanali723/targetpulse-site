'use client'

import { useState } from 'react'
import { MarqueeRow, type Review } from './ReviewCard'

// Sprint 0 item 5b: the wall server-renders nine reviews; the rest of the pool
// stays out of the HTML until the reader asks for it. When opened, they slide
// in two more rows, the same way as the wall above.
// The rows mount on the first click (so they stay out of the first HTML) and
// then open and close with a height and fade transition.
export default function ReviewWallMore({
  reviews,
  showAll = 'Show all {n} more reviews',
  showFewer = 'Show fewer reviews',
}: {
  reviews: Review[]
  // "{n}" is replaced with the number of hidden reviews
  showAll?: string
  showFewer?: string
}) {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  if (reviews.length === 0) return null
  const half = Math.ceil(reviews.length / 2)

  const toggle = () => {
    if (open) return setOpen(false)
    if (mounted) return setOpen(true)
    // First open: mount collapsed, then expand on the next frames so the
    // transition runs.
    setMounted(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)))
  }

  return (
    <div>
      {mounted && (
        <div
          aria-hidden={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-700 ease-in-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <MarqueeRow items={reviews.slice(0, half)} duration="44s" />
            <MarqueeRow items={reviews.slice(half)} reverse duration="40s" />
          </div>
        </div>
      )}
      <div className="mt-4 text-center px-6">
        <button
          type="button"
          aria-expanded={open}
          onClick={toggle}
          className="inline-flex items-center rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-900 hover:border-indigo-500 transition-colors"
        >
          {open ? showFewer : showAll.replace('{n}', String(reviews.length))}
        </button>
      </div>
    </div>
  )
}
