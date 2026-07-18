'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Mail, Play, Loader2, CircleDashed, CheckCircle2, XCircle, AlertTriangle, HelpCircle, Terminal,
} from 'lucide-react'

type CheckStatus = 'idle' | 'running' | 'ok' | 'warn' | 'error' | 'skip'
type VerdictType = 'deliverable' | 'catchall' | 'risky' | 'undeliverable' | 'unknown' | 'error'
type LogLevel = 'info' | 'success' | 'warn' | 'error'

interface LogLine { text: string; className: string }
interface ResultState { type: VerdictType; title: string; desc: string; score?: number }

// Shape returned by the /api/verify route (built from the real validation result)
interface ApiLog { step: string; text: string; level: LogLevel }
interface ApiResult {
  email: string
  domain: string
  steps: Record<string, CheckStatus>
  logs: ApiLog[]
  verdict: { type: VerdictType; title: string; desc: string; score: number }
  meta?: { provider: string | null; mxRecord: string | null; disposable: boolean; role: boolean; freeEmail: boolean }
  error?: string
}

const CHECK_ORDER = ['basic', 'dns', 'catchall', 'mailbox'] as const
type CheckKey = (typeof CHECK_ORDER)[number]

const CHECK_LABELS: Record<CheckKey, string> = {
  basic: 'Basic validation checks',
  dns: 'Locating mail servers',
  catchall: 'Validating catch-all',
  mailbox: 'Mailbox existence check',
}

const INITIAL_CHECKS: Record<CheckKey, CheckStatus> = {
  basic: 'idle', dns: 'idle', catchall: 'idle', mailbox: 'idle',
}

const CHECK_COLOR: Record<CheckStatus, string> = {
  idle: 'text-slate-500',
  running: 'text-indigo-400',
  ok: 'text-emerald-400',
  warn: 'text-amber-400',
  error: 'text-rose-400',
  skip: 'text-slate-600',
}

const LOG_COLOR: Record<LogLevel, string> = {
  info: 'text-slate-400',
  success: 'text-emerald-400 font-bold',
  warn: 'text-amber-400 font-bold',
  error: 'text-rose-400 font-bold',
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function CheckIcon({ status }: { status: CheckStatus }) {
  const cls = 'w-3.5 h-3.5 shrink-0'
  switch (status) {
    case 'running': return <Loader2 className={`${cls} animate-spin`} />
    case 'ok': return <CheckCircle2 className={cls} />
    case 'warn': return <AlertTriangle className={cls} />
    case 'error': return <XCircle className={cls} />
    default: return <CircleDashed className={cls} />
  }
}

const RESULT_STYLES: Record<VerdictType, {
  wrap: string; icon: string; heading: string; scoreBox: string; Icon: typeof CheckCircle2;
}> = {
  deliverable: {
    wrap: 'bg-emerald-950/40 border-emerald-900/60 text-emerald-400 shadow-lg shadow-emerald-950/20',
    icon: 'text-emerald-400', heading: 'text-emerald-400',
    scoreBox: 'text-emerald-500 bg-emerald-950/40 border-emerald-900/50', Icon: CheckCircle2,
  },
  catchall: {
    wrap: 'bg-amber-950/40 border-amber-900/60 text-amber-400 shadow-lg shadow-amber-950/20',
    icon: 'text-amber-400', heading: 'text-amber-400',
    scoreBox: 'text-amber-500 bg-amber-950/40 border-amber-900/50', Icon: AlertTriangle,
  },
  risky: {
    wrap: 'bg-amber-950/40 border-amber-900/60 text-amber-400 shadow-lg shadow-amber-950/20',
    icon: 'text-amber-400', heading: 'text-amber-400',
    scoreBox: 'text-amber-500 bg-amber-950/40 border-amber-900/50', Icon: AlertTriangle,
  },
  undeliverable: {
    wrap: 'bg-rose-950/40 border-rose-900/60 text-rose-400 shadow-lg shadow-rose-950/20',
    icon: 'text-rose-400', heading: 'text-rose-400',
    scoreBox: 'text-rose-500 bg-rose-950/40 border-rose-900/50', Icon: XCircle,
  },
  unknown: {
    wrap: 'bg-slate-800/60 border-slate-700 text-slate-300 shadow-lg shadow-slate-950/20',
    icon: 'text-slate-300', heading: 'text-slate-200',
    scoreBox: 'text-slate-400 bg-slate-800/60 border-slate-700', Icon: HelpCircle,
  },
  error: {
    wrap: 'bg-rose-950/40 border-rose-900/60 text-rose-400 shadow-lg shadow-rose-950/20',
    icon: 'text-rose-400', heading: 'text-rose-300',
    scoreBox: 'text-rose-500 bg-rose-950/40 border-rose-900/50', Icon: AlertTriangle,
  },
}

export default function VerifierConsole() {
  const [email, setEmail] = useState('info@giggal.ai')
  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)
  const [logs, setLogs] = useState<LogLine[]>([])
  const [checks, setChecks] = useState<Record<CheckKey, CheckStatus>>(INITIAL_CHECKS)
  const [result, setResult] = useState<ResultState | null>(null)
  const runIdRef = useRef(0)
  const logScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => () => { runIdRef.current++ }, [])
  useEffect(() => {
    if (logScrollRef.current) logScrollRef.current.scrollTop = logScrollRef.current.scrollHeight
  }, [logs])

  async function runProbe() {
    const value = email.trim()
    if (!value || running) return

    const runId = ++runIdRef.current
    const alive = () => runId === runIdRef.current

    setRunning(true)
    setStarted(true)
    setResult(null)
    setChecks(INITIAL_CHECKS)
    setLogs([])

    const appendLog = (text: string, level: LogLevel) =>
      setLogs((prev) => [...prev, { text, className: LOG_COLOR[level] }])
    const setCheck = (key: string, status: CheckStatus) =>
      setChecks((prev) => (key in prev ? { ...prev, [key]: status } : prev))

    // Kick off the real probe. Show the first step as active while we wait.
    setCheck('basic', 'running')
    appendLog('[INIT] Opening secure verification socket...', 'info')

    let data: ApiResult | null = null
    let errorMsg = ''
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      data = await res.json().catch(() => null)
      if (!res.ok || !data || data.error) {
        errorMsg = data?.error || 'Verification failed. Please try again.'
        data = null
      }
    } catch {
      errorMsg = 'Could not reach the verification service.'
    }

    if (!alive()) return

    if (!data) {
      setLogs([])
      setChecks(INITIAL_CHECKS)
      setResult({ type: 'error', title: 'Verification Error', desc: errorMsg })
      setRunning(false)
      return
    }

    // Reset the primed "running" state; drive everything from the real payload.
    setChecks(INITIAL_CHECKS)
    setLogs([])
    await sleep(200)

    let current: string | null = null
    for (const line of data.logs) {
      if (!alive()) return
      if (line.step !== current) {
        if (current) setCheck(current, data.steps[current] ?? 'ok')
        current = line.step
        setCheck(current, 'running')
      }
      appendLog(line.text, line.level)
      await sleep(700)
    }
    if (!alive()) return
    // Finalize every step from the authoritative statuses.
    for (const key of CHECK_ORDER) {
      if (data.steps[key]) setCheck(key, data.steps[key])
    }

    await sleep(850)
    if (!alive()) return
    setLogs([])
    setResult({ ...data.verdict })
    setRunning(false)
  }

  const canRun = email.trim().length > 0 && !running

  return (
    <div className="max-w-5xl mx-auto bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 glow-recommendation text-left">
      {/* Mac-style top status bar */}
      <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center space-x-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Real Time Tester</span>
        <div className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-mono text-emerald-400 font-bold shrink-0">Live Probe</div>
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Sidebar control panel */}
        <div className="lg:col-span-4 bg-slate-900/60 p-6 border-r border-slate-800/60 space-y-6">
          <div className="space-y-1">
            <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Verifier Action</span>
            <h4 className="text-sm font-black text-white">Recipient Handshake</h4>
          </div>

          {/* Input + button */}
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') runProbe() }}
                placeholder="Email address to verify..."
                aria-label="Email address to verify"
                className="w-full h-11 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-indigo-500 focus:outline-none text-xs font-mono text-slate-100 font-bold"
              />
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
            <button
              onClick={runProbe}
              disabled={!canRun}
              className={`w-full h-11 bg-indigo-600 text-xs font-black rounded-xl text-white transition-all flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/10 ${
                canRun ? 'hover:bg-indigo-500 active:bg-indigo-700' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {running
                ? (<><Loader2 className="w-3.5 h-3.5 animate-spin" /> Analyzing...</>)
                : (<><Play className="w-3.5 h-3.5" /> Analyze Handshake</>)}
            </button>
          </div>

          {/* Diagnostics checklist */}
          <div className="border-t border-slate-800/60 pt-5 space-y-3.5">
            <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider block">Diagnostics Status</span>
            <div className="space-y-3 text-xs font-bold font-mono">
              {CHECK_ORDER.map((key) => (
                <div key={key} className={`flex items-center space-x-2 ${CHECK_COLOR[checks[key]]}`}>
                  <CheckIcon status={checks[key]} />
                  <span>{CHECK_LABELS[key]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal log panel */}
        <div className="lg:col-span-8 p-6 flex flex-col justify-between h-80 lg:h-96">
          <div ref={logScrollRef} className="overflow-y-auto space-y-2.5 font-mono text-xs flex-1">
            {result ? (
              <ResultCard result={result} />
            ) : !started ? (
              <div className="h-full flex flex-col justify-center items-center text-center text-slate-500 py-16 space-y-3">
                <Terminal className="w-6 h-6 animate-pulse text-indigo-400" />
                <p className="font-bold text-slate-400">Ready to trace handshakes</p>
                <p className="text-[10px] max-w-xs leading-normal">
                  Enter a corporate or consumer address in the console input to run a live DNS + SMTP probe.
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-indigo-400">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500 font-black">&gt;</span>
                  <span className="animate-pulse">SPAWNING DIAGNOSTIC THREADS...</span>
                </div>
                <div className="space-y-1.5 text-slate-400">
                  {logs.map((line, i) => (
                    <div key={i} className={`flex items-start space-x-2 ${line.className}`}>
                      <span>{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom console info bar */}
          <div className="border-t border-slate-800/60 pt-4 flex items-center justify-between text-[10px] font-mono text-slate-500 shrink-0 mt-4">
            <div className="flex items-center space-x-3">
              <span>SYS_OK: 200</span>
              <span>DELAY: 35ms</span>
            </div>
            <span>STABLE CONNECTION</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResultCard({ result }: { result: ResultState }) {
  const s = RESULT_STYLES[result.type]
  const Icon = s.Icon
  const showScore = typeof result.score === 'number' && result.type !== 'error'
  const scoreLabel =
    result.type === 'deliverable' ? `Deliverability Score: ${result.score}% (Safe)`
      : result.type === 'undeliverable' ? `Deliverability Score: ${result.score}% (Will Bounce)`
        : `Deliverability Score: ${result.score}%`
  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4 animate-slide-down">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${s.wrap}`}>
        <Icon className={`w-7 h-7 ${s.icon}`} />
      </div>
      <div className="space-y-1 max-w-sm">
        <h4 className={`text-lg font-black tracking-tight leading-tight ${s.heading}`}>{result.title}</h4>
        <p className="text-xs text-slate-400 font-semibold leading-relaxed">{result.desc}</p>
      </div>
      {showScore && (
        <div className={`text-[10px] font-mono px-3 py-1 rounded border ${s.scoreBox}`}>
          {scoreLabel}
        </div>
      )}
    </div>
  )
}
