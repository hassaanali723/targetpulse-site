'use client'

import { useState } from 'react'
import { Shield, Users, AlertTriangle, Ghost, Headphones, Server, CheckCircle2, XCircle, Clock } from 'lucide-react'

export function G2DualTrackExplorer() {
  const [track, setTrack] = useState<'vendors' | 'reviewers'>('vendors')

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_36px_-16px_rgba(15,23,42,0.1)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">Select Your G2 Prospecting Track</h3>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            G2 exports present two distinct verification risks depending on whether you contact SaaS vendors or past software reviewers.
          </p>
        </div>
        <div className="inline-flex rounded-xl bg-slate-100 p-1 shrink-0">
          <button
            type="button"
            onClick={() => setTrack('vendors')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              track === 'vendors' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Track A: Software Vendors
          </button>
          <button
            type="button"
            onClick={() => setTrack('reviewers')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              track === 'reviewers' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Track B: Past Reviewers
          </button>
        </div>
      </div>

      {track === 'vendors' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Gateway Barrier</div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">Mimecast &amp; Proofpoint SEGs</div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Many SaaS vendors filter inbound mail through Secure Email Gateways that return Unknown or deceptive acceptances to ordinary checkers.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Server Behavior</div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">Catch-All Tech Domains</div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              SaaS teams often set catch-all rules so sales inquiries never bounce. Generic verifiers label every address Risky and leave you guessing.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-5">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Giggal.ai Verification</div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">98.5% Accuracy Resolution</div>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed font-medium">
              Checks behind Mimecast, Proofpoint, and Barracuda gateways and resolves catch-all mailboxes directly to Deliverable or Undeliverable.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5">
            <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">Job Transitions</div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">Reviewer Email Decay</div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Reviewers sign in with corporate emails when reviewing software. When they switch employers months later, those accounts deactivate.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Corporate Changes</div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">Acquisitions &amp; Rebrands</div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              Acquired tech brands redirect web URLs while deprovisioning legacy employee aliases, causing silent bounces on old contact lists.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-5">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Giggal.ai Verification</div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">Live Mailbox Handshake</div>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed font-medium">
              Confirms whether the specific employee mailbox still exists without sending an email, cutting bounces to protect your sender reputation.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export function CapterraDeepDiveTabs() {
  const [tab, setTab] = useState<'syntax' | 'zombie' | 'support'>('syntax')

  const tabs = [
    {
      id: 'syntax' as const,
      label: 'Malformed Tracking & Syntax Scrub',
      Icon: AlertTriangle,
      rawExample: 'vendor@b2b-app.example?utm_source=capterra',
      issue: 'Scrapers grabbing directory CTAs or parameter-laden links frequently pollute email columns with query strings or malformed syntax.',
      cleanResult: 'Status: Undeliverable -> RFC Syntax Check Flagged & Removed',
      impact: 'Prevents broken scraper rows from stalling CRM or sequencer imports.',
    },
    {
      id: 'zombie' as const,
      label: 'Retired Software Domain Check',
      Icon: Ghost,
      rawExample: 'contact@retired-app.example (Inactive product listing)',
      issue: 'Discontinued software tools often stay listed in directory categories long after operations stop and domain DNS/MX records expire.',
      cleanResult: 'Status: Undeliverable -> No Active MX Record Found',
      impact: 'Eliminates dead domains before sending so campaigns avoid 550 bounce penalties.',
    },
    {
      id: 'support' as const,
      label: 'Support & Billing Role Segregation',
      Icon: Headphones,
      rawExample: 'support@b2b-tool.example (Extracted from listing page)',
      issue: 'Vendor listings commonly surface shared mailboxes like support@, help@, or billing@ rather than software buyers.',
      cleanResult: 'Flag: role_account = true -> Segregate from Personal Outreach',
      impact: 'Lets outbound teams separate shared ticketing desks from personal decision-makers.',
    },
  ]

  const current = tabs.find((t) => t.id === tab) ?? tabs[0]

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_36px_-16px_rgba(15,23,42,0.1)]">
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-100">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              tab === id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 items-center">
        <div className="space-y-3">
          <h3 className="text-xl font-extrabold text-slate-900">{current.label}</h3>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">{current.issue}</p>
          <p className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5">
            {current.impact}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-5 text-xs font-mono space-y-3">
          <div>
            <span className="text-rose-400 font-bold uppercase tracking-wider block mb-1">Illustrative Scrape Row</span>
            <div className="rounded-lg bg-slate-800/90 border border-slate-700 p-3 text-slate-300 break-all">
              {current.rawExample}
            </div>
          </div>
          <div>
            <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-1">Giggal.ai Output</span>
            <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/30 p-3 text-emerald-300 break-all">
              {current.cleanResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GoodFirmsGreylistTimeline() {
  const [step, setStep] = useState<number>(0)

  const steps = [
    {
      num: '01',
      title: 'Shared Linux Probe Sent',
      code: 'CONNECT mail.offshore-dev.example:25',
      desc: 'Many international IT consultancies use shared cPanel or Plesk mail hosting configured with anti-spam greylisting.',
      legacyOutcome: 'Basic verifiers send one probe and expect an immediate 250 or 550 reply.',
      giggalOutcome: 'Giggal.ai performs standard DNS, MX, and server connection checks cleanly.',
    },
    {
      num: '02',
      title: 'Host Issues 451 Deferral',
      code: '451 4.7.1 Service temporarily unavailable - try again later',
      desc: 'Greylisting temporarily asks unfamiliar mail clients to wait and try again later rather than rejecting the user permanently.',
      legacyOutcome: 'Many tools mislabel deferred greylist hosts as Invalid, deleting live agencies, and still charge you a credit.',
      giggalOutcome: 'Giggal.ai honestly marks deferred addresses as Unknown instead of guessing Invalid.',
    },
    {
      num: '03',
      title: 'Unknown Credit Refunded',
      code: 'STATUS: unknown -> 1 credit refunded automatically',
      desc: 'Because the host intentionally deferred the reply during greylisting, retrying after the cooldown gives a definitive result.',
      legacyOutcome: 'You lose both valid offshore IT leads and the verification credits you paid.',
      giggalOutcome: 'Every Unknown credit is refunded automatically so you can retry those rows later at zero extra cost.',
    },
  ]

  const current = steps[step]

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_36px_-16px_rgba(15,23,42,0.1)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-6 border-b border-slate-100">
        {steps.map((s, idx) => (
          <button
            key={s.num}
            type="button"
            onClick={() => setStep(idx)}
            className={`text-left p-4 rounded-2xl border transition-all ${
              step === idx
                ? 'border-indigo-500 bg-indigo-50/70 shadow-sm'
                : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-black uppercase tracking-wider ${step === idx ? 'text-indigo-600' : 'text-slate-400'}`}>
                Step {s.num}
              </span>
              <Clock className={`w-4 h-4 ${step === idx ? 'text-indigo-600' : 'text-slate-400'}`} />
            </div>
            <div className="text-sm font-extrabold text-slate-900 mt-1">{s.title}</div>
          </button>
        ))}
      </div>

      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 rounded-2xl bg-slate-900 p-5 text-xs font-mono text-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-indigo-300 font-bold">
            <Server className="w-4 h-4" />
            <span>Host Protocol Response</span>
          </div>
          <div className="rounded-lg bg-slate-800 border border-slate-700 p-3 text-emerald-300">
            {current.code}
          </div>
          <p className="font-sans text-xs text-slate-400 pt-1 leading-relaxed">{current.desc}</p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5">
            <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <XCircle className="w-4 h-4" />
              <span>Typical Tool Problem</span>
            </div>
            <p className="text-sm text-slate-700 font-medium mt-2 leading-relaxed">{current.legacyOutcome}</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Giggal.ai Policy</span>
            </div>
            <p className="text-sm text-slate-800 font-semibold mt-2 leading-relaxed">{current.giggalOutcome}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
