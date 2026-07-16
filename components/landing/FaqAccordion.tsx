'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]))

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="space-y-5">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden card-vivid-shadow">
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full p-6 text-left font-extrabold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
            >
              <span className="text-base">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t-2 border-slate-100">
                <p className="pt-4">{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
