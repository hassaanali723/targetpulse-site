'use client'

import React from 'react'
import {
  Globe, ShieldCheck, Mail, CheckCircle2, AlertCircle,
  AlertTriangle, Sparkles,
} from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const signals = [
  {
    Icon: Mail,
    label: 'True Mailbox Existence',
    desc: 'We confirm the actual mailbox exists, not just whether the domain accepts everything blindly.',
  },
  {
    Icon: Globe,
    label: 'Domain Trust Signals',
    desc: 'Reviews SPF, DKIM, DMARC, SSL and domain reputation to score how trustworthy the domain itself is.',
  },
  {
    Icon: ShieldCheck,
    label: 'SEG and Gateway Handling',
    desc: 'Verifies addresses protected by Secure Email Gateways such as Mimecast, Proofpoint, and Barracuda.',
  },
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
                Beyond Standard Checks
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-slate-900 mb-6 leading-[1.05]">
              Don&apos;t let catch-all domains
              <span className="block text-primary-600">leave you guessing</span>
            </h2>

            <p className="text-[17px] text-slate-500 mb-4 leading-relaxed">
              Most email tools mark catch-all and accept-all domains as Unknown and stop there.
              Giggal.ai goes deeper, confirming the true existence of each mailbox, including
              addresses protected by Secure Email Gateways.
            </p>
            <p className="text-[17px] text-slate-500 mb-10 leading-relaxed">
              Every catch-all email gets a clear verdict: Valid or Invalid. No more guesswork.
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
              href="/catch-all-verification"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-primary-700 text-white rounded-xl font-semibold text-[15px] transition-colors duration-200"
            >
              <Sparkles className="h-4 w-4" />
              Learn about Catch-All Verification
            </a>
          </div>

          {/* ── Right: 2-card comparison (typical verifier vs Giggal.ai) ── */}
          <div className="space-y-5">
            {/* Typical verifier card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">A typical verifier</div>
              <div className="text-[14px] font-semibold text-slate-700 mb-4">48,028 emails verified</div>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-2.5">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Deliverable</span>
                  </div>
                  <span className="text-[17px] font-extrabold text-emerald-700">31,566</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-4 py-2.5">
                  <div className="flex items-center gap-2 text-rose-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Undeliverable</span>
                  </div>
                  <span className="text-[17px] font-extrabold text-rose-700">5,982</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-orange-50 border border-orange-100 px-4 py-2.5">
                  <div className="flex items-center gap-2 text-orange-700">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Catch-all</span>
                  </div>
                  <span className="text-[17px] font-extrabold text-orange-700">10,480</span>
                </div>
              </div>
            </div>

            {/* Giggal.ai card */}
            <div className="rounded-2xl border-2 border-primary-300/70 bg-gradient-to-br from-primary-50 via-white to-primary-50/30 p-5 md:p-6 shadow-[0_4px_28px_rgba(41,92,81,0.10)] relative">
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                  <Sparkles className="w-2.5 h-2.5" />
                  GIGGAL.AI
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-wider text-primary-700 mb-2 mt-1">With catch-all verification</div>
              <div className="text-[14px] font-semibold text-slate-700 mb-4">48,028 emails verified</div>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-2.5">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Valid</span>
                  </div>
                  <span className="text-[17px] font-extrabold text-emerald-700">39,950</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-4 py-2.5">
                  <div className="flex items-center gap-2 text-rose-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Invalid</span>
                  </div>
                  <span className="text-[17px] font-extrabold text-rose-700">8,078</span>
                </div>
              </div>

              <p className="mt-4 text-[12px] text-primary-800 font-medium leading-relaxed">
                Around 8,400 more deliverable contacts recovered from the catch-all pile.
                Every address gets a clear verdict.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
