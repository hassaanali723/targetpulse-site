'use client'

import React from 'react'
import { Globe, Brain, Mail, CheckCircle2, Sparkles } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const signals = [
  {
    Icon: Globe,
    label: 'Domain Intelligence',
    desc: 'Checks SPF, DKIM, DMARC, SSL and domain reputation — scoring how trustworthy the domain itself is.',
  },
  {
    Icon: Brain,
    label: 'AI Pattern Analysis',
    desc: 'Analyses name structure, character patterns and human-likeness using AI scoring models.',
  },
  {
    Icon: Mail,
    label: 'Mailbox Behavior',
    desc: 'Deep SMTP probing reveals how the mail server actually responds to real delivery attempts.',
  },
]

const demoStats = [
  { label: 'High',     count: 89,  color: 'text-emerald-600' },
  { label: 'Medium',   count: 124, color: 'text-blue-600' },
  { label: 'Low',      count: 22,  color: 'text-amber-500' },
  { label: 'Very Low', count: 12,  color: 'text-rose-500' },
]

type Confidence = 'High' | 'Medium' | 'Low' | 'Very Low'

const confidenceCfg: Record<Confidence, { bar: string; badge: string }> = {
  'High':     { bar: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700' },
  'Medium':   { bar: 'bg-blue-500',    badge: 'bg-blue-50 text-blue-700' },
  'Low':      { bar: 'bg-amber-400',   badge: 'bg-amber-50 text-amber-700' },
  'Very Low': { bar: 'bg-rose-500',    badge: 'bg-rose-50 text-rose-700' },
}

const demoRows: {
  email: string; score: number; confidence: Confidence;
  signals?: { label: string; score: string; positive: boolean; desc: string }[]
}[] = [
  {
    email: 'mellis@lpc.com',
    score: 73,
    confidence: 'Medium',
    signals: [
      { label: 'Domain Intelligence', score: '+14/25', positive: true,  desc: 'SPF/DKIM/DMARC configured, valid SSL, reputable TLD.' },
      { label: 'AI Pattern Analysis',  score: '+17/35', positive: true,  desc: 'Professional name format. Human vowel/consonant ratio.' },
      { label: 'Mailbox Behavior',     score: '−8/35',  positive: false, desc: 'Server accepts all addresses. Confidence adjusted.' },
    ],
  },
  { email: 'richard@southwellre.com', score: 71, confidence: 'Medium' },
  { email: 'robert@saws.org',         score: 81, confidence: 'High'   },
  { email: 'maria.k@techdomain.io',   score: 34, confidence: 'Very Low' },
]

export default function HomeCatchAllSection() {
  const reveal = useReveal()

  return (
    <section id="catch-all-detection" className="py-14 md:py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="container-custom">
        <div
          ref={reveal as React.RefObject<HTMLDivElement>}
          className="reveal grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* ── Left: Content ── */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200/60 px-4 py-1.5 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-violet-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                AI-Powered · Beyond Standard Checks
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-slate-900 mb-6 leading-[1.05]">
              Don't let catch-all domains
              <span className="block text-primary-600">leave you guessing</span>
            </h2>

            <p className="text-[17px] text-slate-500 mb-4 leading-relaxed">
              Most email tools mark catch-all domains as "Unknown" and stop there.
              TargetPulse goes deeper — using AI to score each address and tell you
              how likely it is to be a real, active inbox.
            </p>
            <p className="text-[17px] text-slate-500 mb-10 leading-relaxed">
              Every catch-all email gets evaluated across three signals,
              giving you a confidence score you can actually act on.
            </p>

            {/* Signals */}
            <div className="space-y-5 mb-10">
              {signals.map(({ Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-slate-800 mb-0.5">{label}</div>
                    <div className="text-[13px] text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://emailverifier.targetpulse.net/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-primary-700 text-white rounded-xl font-semibold text-[15px] transition-colors duration-200"
            >
              <Sparkles className="h-4 w-4" />
              Try Catch-All Detection
            </a>
          </div>

          {/* ── Right: Demo card ── */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-slate-100 overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div>
                  <div className="text-[13px] font-semibold text-slate-900">Catch-All Detection Results</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">247 of 247 emails scored · 494 credits used</div>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  Completed
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100">
                {demoStats.map(({ label, count, color }) => (
                  <div key={label} className="py-3.5 text-center">
                    <div className={`text-xl font-extrabold ${color}`}>{count}</div>
                    <div className="text-[10px] text-slate-400 font-medium mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1fr_80px_48px_72px] gap-2 px-5 py-2 border-b border-slate-50">
                {['EMAIL', 'SCORE', '', 'CONFIDENCE'].map((h, i) => (
                  <div key={i} className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">{h}</div>
                ))}
              </div>

              {/* Email rows */}
              <div className="divide-y divide-slate-50">
                {demoRows.map((row) => {
                  const cfg = confidenceCfg[row.confidence]
                  return (
                    <div key={row.email}>
                      <div className="grid grid-cols-[1fr_80px_48px_72px] gap-2 items-center px-5 py-3">
                        <span className="text-[12px] text-slate-700 truncate font-medium">{row.email}</span>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${cfg.bar} rounded-full`} style={{ width: `${row.score}%` }} />
                        </div>
                        <span className="text-[13px] font-bold text-slate-900 text-right">{row.score}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full text-center ${cfg.badge}`}>
                          {row.confidence}
                        </span>
                      </div>

                      {/* Expanded signal cards */}
                      {row.signals && (
                        <div className="px-5 pb-4 grid grid-cols-3 gap-2">
                          {row.signals.map((sig) => (
                            <div key={sig.label} className="bg-slate-50 rounded-xl p-3">
                              <div className="flex items-start justify-between gap-1 mb-1.5">
                                <span className="text-[9px] font-semibold text-slate-600 leading-snug">{sig.label}</span>
                                <span className={`text-[10px] font-bold flex-shrink-0 ${sig.positive ? 'text-emerald-600' : 'text-rose-500'}`}>
                                  {sig.score}
                                </span>
                              </div>
                              <p className="text-[9px] text-slate-400 leading-relaxed">{sig.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-3 right-2 md:-top-4 md:-right-4 bg-violet-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 text-[12px] font-bold">
              <Brain className="h-3.5 w-3.5" />
              AI Scored
            </div>
            <div className="absolute -bottom-3 left-2 md:-bottom-3 md:-left-3 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-[12px] max-w-[calc(100%-1rem)]">
              <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0" />
              <span className="font-semibold text-slate-700 truncate">247 catch-all addresses scored</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
