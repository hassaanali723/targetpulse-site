'use client'

import React, { useState } from 'react'
import { ArrowUpRight, MailCheck, ListChecks, FileDown, Coins, Workflow, BookOpen } from 'lucide-react'
import {
  ZAPIER_WORKFLOWS,
  ZAPIER_GUIDE_STEPS,
  ZAPIER_ACTIONS,
  ZAPIER_APP_URL,
  SIGNUP_URL,
  type ZapierWorkflow,
} from '@/lib/integrations'

// Small partner-app logo for a workflow row: local file, CDN fallback,
// lettermark last.
function AppMark({ w }: { w: ZapierWorkflow }) {
  const [failed, setFailed] = useState(false)
  const src = w.icon ?? (w.iconSlug ? `https://cdn.simpleicons.org/${w.iconSlug}` : null)

  if (!src || failed) {
    return (
      <span
        className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black text-white shrink-0"
        style={{ backgroundColor: w.brandColor ?? '#4F46E5' }}
        aria-hidden="true"
      >
        {w.apps[0]}
      </span>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={36}
      height={36}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-9 h-9 rounded-lg object-contain bg-white border border-slate-200 p-1 shrink-0"
      aria-hidden="true"
    />
  )
}

const TABS = [
  { id: 'workflows', label: 'Workflows', icon: Workflow },
  { id: 'guide', label: 'Integration Guide', icon: BookOpen },
] as const

type TabId = (typeof TABS)[number]['id']

export default function ZapierTabs() {
  const [tab, setTab] = useState<TabId>('workflows')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
      {/* ── Left: sticky app card ── */}
      <aside className="lg:sticky lg:top-28 bg-white border-2 border-slate-200 rounded-3xl p-8 card-vivid-shadow text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/integrations/giggal-catch-all-email-verification-zapier.png"
          alt="Zapier"
          width={112}
          height={112}
          loading="lazy"
          decoding="async"
          className="w-28 h-28 mx-auto rounded-2xl object-contain mb-5"
        />
        <h2 className="text-xl font-black text-slate-900 mb-1">Zapier</h2>
        <p className="text-[13px] text-slate-500 font-medium mb-6">
          Connect Giggal.ai to 8,000+ apps
        </p>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-5 py-3 rounded-xl bg-indigo-600 text-white font-black text-[14px] hover:bg-indigo-700 transition-colors mb-3"
        >
          Try it free
        </a>
        <a
          href={ZAPIER_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-[13px] font-bold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          View on Zapier <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <div className="border-t border-slate-100 mt-6 pt-6 text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-3">
            4 supported actions
          </p>
          <div className="space-y-3.5">
            {ZAPIER_ACTIONS.map((a, i) => {
              const Icon = [MailCheck, ListChecks, FileDown, Coins][i] ?? MailCheck
              return (
                <div key={a.name} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] font-black text-slate-900">{a.name}</p>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </aside>

      {/* ── Right: tabs ── */}
      <div className="min-w-0">
        {/* Tab bar */}
        <div className="flex gap-1.5 border-b-2 border-slate-200 mb-8" role="tablist">
          {TABS.map((t) => {
            const Icon = t.icon
            const active = tab === t.id
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 text-[14px] font-black rounded-t-xl border-b-2 -mb-0.5 transition-colors ${
                  active
                    ? 'text-indigo-700 border-indigo-600 bg-indigo-50/60'
                    : 'text-slate-500 border-transparent hover:text-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Workflows tab */}
        {tab === 'workflows' && (
          <div className="space-y-3">
            {ZAPIER_WORKFLOWS.map((w) => (
              <div
                key={w.title}
                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border-2 border-slate-200 rounded-2xl p-5 card-vivid-shadow"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <AppMark w={w} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/giggal-catch-all-email-verifier-icon.png"
                    alt="Giggal.ai"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="w-9 h-9 rounded-lg object-contain bg-white border border-slate-200 p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-black text-slate-900 leading-snug">{w.title}</h3>
                  <p className="text-[12.5px] text-slate-500 font-bold mt-0.5">{w.apps}</p>
                  <p className="text-[13px] text-slate-600 font-medium mt-1.5 leading-relaxed">
                    {w.description}
                  </p>
                </div>
                <a
                  href={w.url ?? ZAPIER_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900 text-white font-black text-[13px] hover:bg-indigo-600 transition-colors"
                >
                  Use this workflow
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Integration guide tab */}
        {tab === 'guide' && (
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
              Connecting Giggal.ai with Zapier
            </h3>
            <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
              The whole setup takes about five minutes. As an example, say you want to verify
              every email address submitted through a form before it reaches your CRM.
            </p>
            <ol className="space-y-4">
              {ZAPIER_GUIDE_STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow"
                >
                  <div className="flex gap-5">
                    <span className="w-9 h-9 rounded-full bg-indigo-600 text-white font-black text-[15px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[16px] font-black text-slate-900 mb-1.5">{s.title}</h4>
                      <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                        {s.text}
                      </p>
                      {s.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={s.image}
                          alt={s.imageAlt ?? s.title}
                          width={1747}
                          height={987}
                          loading="lazy"
                          decoding="async"
                          className="mt-4 w-full h-auto rounded-xl border border-slate-200"
                        />
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6">
              <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                Stuck on any step? Our team replies fast.{' '}
                <a href="/contact-us" className="font-black text-indigo-600 hover:text-indigo-700">
                  Talk to us
                </a>{' '}
                or check the{' '}
                <a href="/public/docs" className="font-black text-indigo-600 hover:text-indigo-700">
                  API reference
                </a>{' '}
                for the full response format.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
