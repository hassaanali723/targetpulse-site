'use client'

import { useState } from 'react'
import Link from 'next/link'

// Category filter chips for the glossary hub, with the term grid under them.
// Every term is in the server HTML ("All" is the default), so search engines
// and visitors without JavaScript see the full list; the chips only show or
// hide categories in the browser.

export type GlossaryGroup = {
  id: string
  label: string
  items: { href: string; title: string; short: string }[]
}

export default function GlossaryFilter({ groups, allLabel }: { groups: GlossaryGroup[]; allLabel: string }) {
  const [active, setActive] = useState<string>('all')
  const shown = active === 'all' ? groups : groups.filter((g) => g.id === active)
  const chips = [{ id: 'all', label: allLabel }, ...groups.map((g) => ({ id: g.id, label: g.label }))]

  return (
    <>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label={allLabel}>
        {chips.map((c) => {
          const on = c.id === active
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c.id)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition-colors ${
                on
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:text-indigo-700'
              }`}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <div className="mt-12 space-y-14">
        {shown.map((g) => (
          <div key={g.id}>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">{g.label}</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="block h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-900/5"
                  >
                    <span className="block text-base font-black tracking-tight text-slate-900">{t.title}</span>
                    <span className="mt-2 block text-sm font-medium leading-relaxed text-slate-600 line-clamp-3">{t.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
