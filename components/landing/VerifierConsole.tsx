'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Mail, Play, Loader2, CircleDashed, CheckCircle2, XCircle, AlertTriangle, Terminal,
} from 'lucide-react'

type CheckStatus = 'idle' | 'running' | 'ok' | 'warn' | 'error'
type ResultType = 'deliverable' | 'catchall' | 'undeliverable'
interface LogLine { text: string; className: string }
interface ResultState { type: ResultType; title: string; desc: string }

const CHECK_ORDER = ['basic', 'bypass', 'catchall', 'existence'] as const
type CheckKey = (typeof CHECK_ORDER)[number]

const CHECK_LABELS: Record<CheckKey, string> = {
  basic: 'Basic validation checks',
  bypass: 'Bypassing SEG gateways',
  catchall: 'Validating catch-all',
  existence: 'Mailbox Existence Check',
}

const INITIAL_CHECKS: Record<CheckKey, CheckStatus> = {
  basic: 'idle', bypass: 'idle', catchall: 'idle', existence: 'idle',
}

const CHECK_COLOR: Record<CheckStatus, string> = {
  idle: 'text-slate-500',
  running: 'text-indigo-400',
  ok: 'text-emerald-400',
  warn: 'text-amber-400',
  error: 'text-rose-400',
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

const RESULT_STYLES: Record<ResultType, {
  wrap: string; icon: string; heading: string; score: string; scoreBox: string; Icon: typeof CheckCircle2;
}> = {
  deliverable: {
    wrap: 'bg-emerald-950/40 border-emerald-900/60 text-emerald-400 shadow-lg shadow-emerald-950/20',
    icon: 'text-emerald-400',
    heading: 'text-emerald-400',
    score: 'Deliverability Score: 100% (Guaranteed Safe)',
    scoreBox: 'text-emerald-500 bg-emerald-950/40 border-emerald-900/50',
    Icon: CheckCircle2,
  },
  catchall: {
    wrap: 'bg-amber-950/40 border-amber-900/60 text-amber-400 shadow-lg shadow-amber-950/20',
    icon: 'text-amber-400',
    heading: 'text-amber-400',
    score: 'Deliverability Score: 85% Heuristic (Safe)',
    scoreBox: 'text-amber-500 bg-amber-950/40 border-amber-900/50',
    Icon: AlertTriangle,
  },
  undeliverable: {
    wrap: 'bg-rose-950/40 border-rose-900/60 text-rose-400 shadow-lg shadow-rose-950/20',
    icon: 'text-rose-400',
    heading: 'text-rose-400',
    score: 'Deliverability Score: 0% (Will Bounce)',
    scoreBox: 'text-rose-500 bg-rose-950/40 border-rose-900/50',
    Icon: XCircle,
  },
}

export default function VerifierConsole() {
  const [email, setEmail] = useState('hr@stripe.com')
  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)
  const [logs, setLogs] = useState<LogLine[]>([])
  const [checks, setChecks] = useState<Record<CheckKey, CheckStatus>>(INITIAL_CHECKS)
  const [result, setResult] = useState<ResultState | null>(null)
  const runIdRef = useRef(0)
  const logScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cancel any in-flight run when the component unmounts
    return () => { runIdRef.current++ }
  }, [])

  useEffect(() => {
    if (logScrollRef.current) logScrollRef.current.scrollTop = logScrollRef.current.scrollHeight
  }, [logs])

  async function runSimulation() {
    const value = email.trim()
    if (!value || running) return

    const runId = ++runIdRef.current
    const alive = () => runId === runIdRef.current

    setRunning(true)
    setStarted(true)
    setResult(null)
    setChecks(INITIAL_CHECKS)
    setLogs([])

    const appendLog = async (text: string, className = 'text-slate-400') => {
      setLogs((prev) => [...prev, { text, className }])
      await sleep(850)
    }
    const setCheck = (key: CheckKey, status: CheckStatus) =>
      setChecks((prev) => ({ ...prev, [key]: status }))

    const finishResult = async (title: string, desc: string, type: ResultType) => {
      await sleep(1000)
      if (!alive()) return
      setLogs([])
      setResult({ type, title, desc })
    }

    const lower = value.toLowerCase()
    let classification: ResultType = 'deliverable'
    if (lower.includes('stripe')) classification = 'catchall'
    else if (lower.includes('nonexistent') || lower.includes('fake-user')) classification = 'undeliverable'

    const domain = (value.split('@')[1] || 'domain.com').toUpperCase()
    const isNonexistent = lower.includes('nonexistent')

    // Step 1 — Basic validation
    setCheck('basic', 'running')
    await appendLog('[BASIC] Starting spelling formats and domain structure checks...'); if (!alive()) return
    await appendLog('[SUCCESS] Basic validation passed. Format is valid.', 'text-emerald-400 font-bold'); if (!alive()) return
    setCheck('basic', 'ok')

    // Step 2 — Bypass SEG gateways
    setCheck('bypass', 'running')
    await appendLog(`[DNS] Finding active mail servers for [${domain}]...`); if (!alive()) return

    if (isNonexistent) {
      await appendLog(`[ERROR] No active mail servers found. Domain [${domain}] does not exist.`, 'text-rose-400 font-bold'); if (!alive()) return
      setCheck('bypass', 'error'); setCheck('catchall', 'error'); setCheck('existence', 'error')
      await finishResult('Undeliverable', 'Server DNS resolution failed. Domain does not exist.', 'undeliverable')
    } else {
      await appendLog('[GATEWAY] Scanning for active secure email filters (SEG)...'); if (!alive()) return
      await appendLog('[SUCCESS] Bypassed filters safely. Secure SMTP channel active.', 'text-emerald-400 font-bold'); if (!alive()) return
      setCheck('bypass', 'ok')

      // Step 3 — Validate catch-all
      setCheck('catchall', 'running')
      await appendLog('[CATCH-ALL] Querying target server global inbox configuration...'); if (!alive()) return

      if (classification === 'catchall') {
        await appendLog('[WARNING] Target server automatically accepts all messages (Catch-All).', 'text-amber-400 font-bold'); if (!alive()) return
        await appendLog('[HEURISTICS] Deploying multi-ping response timing checks...', 'text-indigo-400 font-bold'); if (!alive()) return
        await appendLog('[SUCCESS] Heuristics parsed successfully: Recipient exists.', 'text-emerald-400 font-bold'); if (!alive()) return
        setCheck('catchall', 'warn')
      } else {
        await appendLog('[INFO] Standard non-catch-all routing configuration verified.'); if (!alive()) return
        setCheck('catchall', 'ok')
      }

      // Step 4 — Mailbox existence
      setCheck('existence', 'running')
      await appendLog('[SMTP] Querying recipient socket deliverability state...'); if (!alive()) return

      if (classification === 'catchall') {
        await appendLog('[SUCCESS] Recipient confirmed ACTIVE and 100% safe to outreach.', 'text-emerald-400 font-bold'); if (!alive()) return
        setCheck('existence', 'ok')
        await finishResult('Risky (Catch-All)', 'Mailbox is active but under a corporate catch-all setting.', 'catchall')
      } else if (classification === 'undeliverable') {
        await appendLog('[FAILED] Server explicitly rejected recipient: Recipient unknown.', 'text-rose-400 font-bold'); if (!alive()) return
        setCheck('existence', 'error')
        await finishResult('Undeliverable', 'Mailbox does not exist. Sending here will bounce.', 'undeliverable')
      } else {
        await appendLog('[SUCCESS] Server accepted recipient: Inbox is active and ready.', 'text-emerald-400 font-bold'); if (!alive()) return
        setCheck('existence', 'ok')
        await finishResult('Deliverable', 'SMTP validation passed. The mailbox is fully active.', 'deliverable')
      }
    }

    if (alive()) setRunning(false)
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
        <div className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-mono text-emerald-400 font-bold shrink-0">Active Pool</div>
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
                onKeyDown={(e) => { if (e.key === 'Enter') runSimulation() }}
                placeholder="Email address to verify..."
                aria-label="Email address to verify"
                className="w-full h-11 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-indigo-500 focus:outline-none text-xs font-mono text-slate-100 font-bold"
              />
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
            <button
              onClick={runSimulation}
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
                  Enter a corporate or consumer address in the console input to dump raw SMTP timing logs here.
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
  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4 animate-slide-down">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${s.wrap}`}>
        <Icon className={`w-7 h-7 ${s.icon}`} />
      </div>
      <div className="space-y-1 max-w-sm">
        <h4 className={`text-lg font-black tracking-tight leading-tight ${s.heading}`}>{result.title}</h4>
        <p className="text-xs text-slate-400 font-semibold leading-relaxed">{result.desc}</p>
      </div>
      <div className={`text-[10px] font-mono px-3 py-1 rounded border ${s.scoreBox}`}>
        {s.score}
      </div>
    </div>
  )
}
