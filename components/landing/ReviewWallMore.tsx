'use client'

import { useState } from 'react'
import { Card, type Review } from './ReviewCard'

// Sprint 0 item 5b: the wall server-renders nine reviews; the rest of the pool
// stays out of the HTML until the reader asks for it.
export default function ReviewWallMore({ reviews }: { reviews: Review[] }) {
  const [open, setOpen] = useState(false)
  if (reviews.length === 0) return null
  return (
    <div className="max-w-6xl mx-auto px-6 space-y-8">
      {open && (
        <div className="flex flex-wrap justify-center gap-5">
          {reviews.map((r) => (
            <Card key={r.url} r={r} />
          ))}
        </div>
      )}
      <div className="text-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-900 hover:border-indigo-500 transition-colors"
        >
          {open ? 'Show fewer reviews' : `Show all ${reviews.length} more reviews`}
        </button>
      </div>
    </div>
  )
}
