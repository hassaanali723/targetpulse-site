'use client'

import React, { useId, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

function renderAnswer(text: string) {
  if (!text.includes('[') || !text.includes('](')) return text
  const parts: React.ReactNode[] = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const label = match[1]
    const href = match[2]
    parts.push(
      <Link key={match.index} href={href} className="text-indigo-600 font-semibold hover:underline">
        {label}
      </Link>
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return <>{parts}</>
}

export interface FaqItem { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]))
  const uid = useId()

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
        const btnId = `${uid}-q-${i}`
        const panelId = `${uid}-a-${i}`
        return (
          <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden card-vivid-shadow">
            <button
              id={btnId}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full p-6 text-left font-extrabold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
            >
              <span className="text-base">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {/* Answer is ALWAYS rendered (present in server HTML for SEO + FAQ
                structured data). It is collapsed visually only, by animating the
                grid row from 0fr to 1fr with the content clipped by overflow.
                No conditional render, no display:none. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t-2 border-slate-100">
                  <p className="pt-4">{renderAnswer(item.a)}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
