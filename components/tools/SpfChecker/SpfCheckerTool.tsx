'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  Loader2,
  Copy,
  Check,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Info,
  Server,
  ArrowRight,
  ChevronDown,
  Plus,
  X,
} from 'lucide-react'
import {
  checkSpf,
  checkSpfDraft,
  fetchSpfRecord,
  buildSpfRecord,
  recordToBuildOptions,
  subtreeLookups,
  SpfInputError,
  LOOKUP_LIMIT,
  VOID_LIMIT,
  type SpfCheckResult,
  type SpfIssue,
  type SpfNode,
  type SpfTerm,
  type SpfQualifier,
} from '@/lib/tools/spfCheckerCore'
import { DnsLookupError } from '@/lib/tools/dnsOverHttps'
import { SPF_SENDERS, SPF_NOT_NEEDED, senderName, unneededInclude } from '@/lib/tools/spfSenders'

const EXAMPLES = ['google.com', 'microsoft.com', 'github.com']

// Issues that make receivers stop with a permerror, so SPF fails for every message.
const PERMERROR = new Set([
  'multiple',
  'unknown-term',
  'bad-syntax',
  'bad-ip',
  'bad-cidr',
  'empty-modifier',
  'duplicate-modifier',
  'include-no-spf',
  'redirect-no-spf',
  'loop',
  'too-deep',
  'too-many-lookups',
  'too-many-voids',
  'mx-over-10',
])

const ALL_LABEL: Record<SpfQualifier, string> = { '-': 'Fail', '~': 'Soft fail', '?': 'Neutral', '+': 'Pass (unsafe)' }

type Tone = 'ok' | 'warn' | 'bad' | 'info'

const TONE = {
  ok: { box: 'bg-emerald-50 border-emerald-200', title: 'text-emerald-900', text: 'text-emerald-800', Icon: CheckCircle2, icon: 'text-emerald-600' },
  warn: { box: 'bg-amber-50 border-amber-200', title: 'text-amber-900', text: 'text-amber-800', Icon: AlertTriangle, icon: 'text-amber-600' },
  bad: { box: 'bg-rose-50 border-rose-200', title: 'text-rose-900', text: 'text-rose-800', Icon: XCircle, icon: 'text-rose-600' },
  info: { box: 'bg-slate-50 border-slate-200', title: 'text-slate-900', text: 'text-slate-700', Icon: MinusCircle, icon: 'text-slate-500' },
}

function allSentence(q: SpfQualifier | null): string {
  if (q === '-') return 'Mail from servers it doesn’t list fails SPF.'
  if (q === '~') return 'Mail from servers it doesn’t list gets a soft fail.'
  return ''
}

// One summary per outcome, written for someone who has never read an SPF record.
function summary(r: SpfCheckResult): { tone: Tone; title: string; text: string } {
  const d = r.domain
  const lookups = `It uses ${r.totalLookups} of the ${LOOKUP_LIMIT} allowed DNS lookups.`
  switch (r.outcome) {
    case 'valid':
      return { tone: 'ok', title: `${d} has a valid SPF record`, text: `${lookups} ${allSentence(r.allQualifier)}`.trim() }
    case 'warnings':
      return {
        tone: 'warn',
        title: `${d} has a working SPF record with warnings`,
        text: `Receivers can use it, but the warnings below weaken it or could break it later. ${lookups}`,
      }
    case 'invalid':
      return r.issues.some((i) => PERMERROR.has(i.code))
        ? {
            tone: 'bad',
            title: `${d}’s SPF record is broken`,
            text: 'Receivers treat a record like this as an error (permerror), so SPF fails for all mail from this domain. The fixes are listed below.',
          }
        : {
            tone: 'bad',
            title: `${d}’s SPF record doesn’t protect the domain`,
            text: `It lets any server on the internet pass SPF, so anyone can send mail that passes as ${d}.`,
          }
    case 'none':
      return {
        tone: 'bad',
        title: `${d} has no SPF record`,
        text: 'Receivers can’t tell which servers may send email for it. Gmail has required SPF or DKIM from every sender since February 2024.',
      }
    case 'nxdomain':
      return { tone: 'bad', title: `${d} doesn’t exist`, text: 'DNS has no record of this domain. Check the spelling.' }
  }
}

function ip4Count(cidr: string): string {
  const n = 2 ** (32 - Number(cidr))
  return n.toLocaleString('en-US')
}

// Plain-English meaning of one part of a record.
function describe(t: SpfTerm, domain: string): string {
  const target = t.value || domain
  if (t.type === 'modifier') {
    if (t.name === 'redirect') return `If nothing above matches, use the SPF record of ${t.value} instead.`
    if (t.name === 'exp') return 'Names a TXT record with a message receivers can show when SPF fails.'
    return 'A setting SPF doesn’t define. Receivers ignore it.'
  }
  if (t.name === 'all') {
    if (t.qualifier === '-') return 'Mail from every other server fails SPF.'
    if (t.qualifier === '~') return 'Mail from every other server gets a soft fail. Receivers usually accept it but treat it with more suspicion.'
    if (t.qualifier === '?') return 'Says nothing about other servers. Their mail gets a neutral result, which counts the same as having no SPF record.'
    return 'Every server on the internet passes SPF. This cancels out the rest of the record.'
  }
  let subject = ''
  let single = false
  if (t.name === 'ip4') {
    single = !t.cidr || t.cidr === '32'
    subject = single ? `The server at ${t.value}` : `Servers in the range ${t.value}/${t.cidr} (${ip4Count(t.cidr)} addresses)`
  } else if (t.name === 'ip6') {
    single = !t.cidr || t.cidr === '128'
    subject = single ? `The server at ${t.value}` : `Servers in the IPv6 range ${t.value}/${t.cidr}`
  } else if (t.name === 'a') {
    subject = `Servers at the IP addresses of ${target}${t.cidr ? ` (widened by ${t.cidr})` : ''}`
  } else if (t.name === 'mx') {
    subject = `The mail servers that receive email for ${target}`
  } else if (t.name === 'include') {
    const who = senderName(t.value)
    subject = `Servers allowed by the SPF record of ${t.value}${who ? ` (${who})` : ''}`
  } else if (t.name === 'ptr') {
    subject = `Servers whose IP address points back to a name under ${target}`
  } else if (t.name === 'exists') {
    return t.value.includes('%')
      ? 'Matches when a DNS lookup built from details of the sending server finds an address. Large senders use this for big server lists.'
      : `Matches when ${t.value} has an IP address.`
  }
  const verb = {
    '+': 'may send',
    '-': single ? 'fails SPF' : 'fail SPF',
    '~': single ? 'gets a soft fail' : 'get a soft fail',
    '?': single ? 'gets a neutral result' : 'get a neutral result',
  }[t.qualifier]
  return `${subject} ${verb}.`
}

function lookupCost(t: SpfTerm, node: SpfNode): number {
  if (t.name === 'include' || t.name === 'redirect') {
    const child = node.children.find((c) => c.domain === t.value.toLowerCase().replace(/\.$/, ''))
    return 1 + (child ? subtreeLookups(child) : 0)
  }
  return t.countsLookup ? 1 : 0
}

// Includes in the domain's own record for services that no longer ask for one.
function unneededNotes(r: SpfCheckResult): SpfIssue[] {
  if (!r.root) return []
  const root = r.root
  return root.terms.flatMap((t) => {
    if (t.name !== 'include') return []
    const u = unneededInclude(t.value)
    if (!u) return []
    const cost = lookupCost(t, root)
    const where = u.subdomainOnly ? ' on a main domain' : ''
    return [
      {
        level: 'info' as const,
        code: 'unneeded-include',
        message: `include:${t.value} (${u.name}) is usually not needed${where}. ${u.reason} Removing it would free ${cost} lookup${cost === 1 ? '' : 's'}.`,
        domain: r.domain,
      },
    ]
  })
}

function NodeTerms({ node, depth }: { node: SpfNode; depth: number }) {
  const [open, setOpen] = useState<Record<number, boolean>>({})
  // A redirect is ignored when the record has "all", so it costs nothing then.
  const hasAll = node.terms.some((t) => t.name === 'all')
  return (
    <div className="divide-y divide-slate-100">
      {depth === 0 && (
        <TermRow raw="v=spf1" meaning="Marks this TXT record as an SPF record. Every SPF record starts with it." cost={0} />
      )}
      {node.terms.map((t, i) => {
        const child =
          t.name === 'include' || t.name === 'redirect'
            ? node.children.find((c) => c.domain === t.value.toLowerCase().replace(/\.$/, ''))
            : undefined
        const cost = t.name === 'redirect' && hasAll ? 0 : lookupCost(t, node)
        return (
          <div key={`${t.raw}-${i}`}>
            <TermRow raw={t.raw} meaning={describe(t, node.domain)} cost={cost}>
              {child?.failure && (
                <p className="mt-1 text-xs font-semibold text-rose-700">
                  {child.domain}: {child.failure}
                </p>
              )}
              {child && !child.failure && child.terms.length > 0 && (
                <button
                  type="button"
                  onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                  aria-expanded={!!open[i]}
                  className="mt-1.5 flex items-start gap-1 text-left text-xs font-bold text-indigo-600 hover:text-indigo-700"
                >
                  <ChevronDown className={`w-3.5 h-3.5 mt-px shrink-0 transition-transform ${open[i] ? 'rotate-180' : ''}`} />
                  {open[i] ? 'Hide' : 'Show'} what {child.domain} contains
                </button>
              )}
            </TermRow>
            {child && open[i] && (
              <div className="ml-3 sm:ml-6 mb-3 pl-3 sm:pl-4 border-l-2 border-indigo-100">
                <p className="pt-2 font-mono text-[11px] text-slate-500 break-all">{child.record}</p>
                <NodeTerms node={child} depth={depth + 1} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function TermRow({ raw, meaning, cost, children }: { raw: string; meaning: string; cost: number; children?: React.ReactNode }) {
  return (
    <div className="py-3 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_4.5rem] gap-x-4 gap-y-1">
      <code className="font-mono text-xs sm:text-sm font-semibold text-slate-900 break-all">{raw}</code>
      <span className="sm:order-last text-right font-mono text-xs text-slate-500 whitespace-nowrap">
        {cost > 0 ? `${cost} lookup${cost === 1 ? '' : 's'}` : ''}
      </span>
      <div className="col-span-2 sm:col-span-1 min-w-0">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{meaning}</p>
        {children}
      </div>
    </div>
  )
}

function Meter({ label, used, limit, note }: { label: string; used: number; limit: number; note: string }) {
  const over = used > limit
  const near = !over && used >= limit - 1 && limit > 2
  const color = over ? 'bg-rose-500' : near ? 'bg-amber-500' : 'bg-emerald-500'
  return (
    <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-white">
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
      <div className={`mt-1 text-xl sm:text-2xl font-black ${over ? 'text-rose-600' : 'text-slate-900'}`}>
        {used} <span className="text-sm font-bold text-slate-400">of {limit}</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${Math.min(100, (used / limit) * 100)}%` }} />
      </div>
      <p className="hidden sm:block mt-2 text-xs text-slate-500 leading-relaxed">{note}</p>
    </div>
  )
}

function IssueList({ issues, domain }: { issues: SpfIssue[]; domain: string }) {
  if (issues.length === 0) return null
  const style = {
    error: { box: 'bg-rose-50 border-rose-200 text-rose-900', Icon: XCircle, icon: 'text-rose-600' },
    warning: { box: 'bg-amber-50 border-amber-200 text-amber-900', Icon: AlertTriangle, icon: 'text-amber-600' },
    info: { box: 'bg-slate-50 border-slate-200 text-slate-700', Icon: Info, icon: 'text-slate-500' },
  }
  return (
    <ul className="space-y-2">
      {issues.map((issue, i) => {
        const s = style[issue.level]
        return (
          <li key={`${issue.code}-${i}`} className={`p-3 rounded-xl border text-sm font-medium flex items-start gap-2 ${s.box}`}>
            <s.Icon className={`w-4 h-4 shrink-0 mt-0.5 ${s.icon}`} />
            <span className="min-w-0 break-words">
              {issue.message}
              {issue.domain && issue.domain !== domain && issue.domain !== 'example.com' && (
                <span className="block text-xs opacity-75 mt-0.5 font-mono break-all">in {issue.domain}</span>
              )}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
}

function CopyButton({ text, dark = false }: { text: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        await copyText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }}
      className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold ${
        dark ? 'text-indigo-300 hover:text-white' : 'text-indigo-600 hover:text-indigo-700'
      }`}
    >
      {copied ? <Check className={`w-3.5 h-3.5 ${dark ? 'text-emerald-400' : 'text-emerald-600'}`} /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

const inputClass =
  'w-full text-base sm:text-sm px-4 py-3 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono'

type Mode = 'check' | 'create'

export default function SpfCheckerTool() {
  const [mode, setMode] = useState<Mode>('check')

  // Check
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<SpfCheckResult | null>(null)
  const [inputError, setInputError] = useState('')
  const [lookupError, setLookupError] = useState('')
  const runId = useRef(0)

  // Create
  const [bDomain, setBDomain] = useState('')
  const [loadNote, setLoadNote] = useState<{ tone: Tone; text: string } | null>(null)
  const [loadingRecord, setLoadingRecord] = useState(false)
  const [includes, setIncludes] = useState<string[]>([])
  const [otherInclude, setOtherInclude] = useState('')
  const [ipText, setIpText] = useState('')
  const [useA, setUseA] = useState(false)
  const [useMx, setUseMx] = useState(false)
  const [extra, setExtra] = useState<string[]>([])
  const [allQ, setAllQ] = useState<'-' | '~'>('~')
  const [showMore, setShowMore] = useState(false)
  const [draft, setDraft] = useState<SpfCheckResult | null>(null)
  const [draftChecking, setDraftChecking] = useState(false)
  const [draftError, setDraftError] = useState('')

  const run = useCallback(async (value: string) => {
    const id = ++runId.current
    setInputError('')
    setLookupError('')
    setLoading(true)
    try {
      const r = await checkSpf(value)
      if (id !== runId.current) return
      setResult(r)
      // Shareable URL: /spf-checker?domain=example.com runs the same check.
      window.history.replaceState(null, '', `?domain=${encodeURIComponent(r.domain)}`)
    } catch (err) {
      if (id !== runId.current) return
      setResult(null)
      if (err instanceof SpfInputError) setInputError(err.message)
      else if (err instanceof DnsLookupError && err.message.includes('didn\'t answer'))
        setLookupError(`${err.message} Receivers get the same temporary error (temperror) right now. Try again in a few minutes.`)
      else setLookupError('We couldn’t reach the DNS services. Check your connection and try again.')
    } finally {
      if (id === runId.current) setLoading(false)
    }
  }, [])

  // Run the check from a shared link.
  useEffect(() => {
    const d = new URLSearchParams(window.location.search).get('domain')
    if (d) {
      setInput(d)
      run(d)
    }
  }, [run])

  // The builder's record, rebuilt on every change.
  const ips = useMemo(
    () =>
      ipText
        .split(/[\s,;]+/)
        .map((s) => s.replace(/^ip[46]:/i, '').trim())
        .filter(Boolean),
    [ipText]
  )
  const record = useMemo(
    () =>
      buildSpfRecord({
        includes,
        ip4: ips.filter((ip) => !ip.includes(':')),
        ip6: ips.filter((ip) => ip.includes(':')),
        a: useA,
        mx: useMx,
        extra,
        all: allQ,
      }),
    [includes, ips, useA, useMx, extra, allQ]
  )
  const noSenders = includes.length === 0 && ips.length === 0 && !useA && !useMx && extra.length === 0

  // Check the draft against live DNS a moment after the user stops changing it.
  useEffect(() => {
    if (mode !== 'create') return
    let cancelled = false
    setDraftChecking(true)
    const t = setTimeout(async () => {
      try {
        const r = await checkSpfDraft(bDomain, record)
        if (!cancelled) {
          setDraft(r)
          setDraftError('')
        }
      } catch (err) {
        if (!cancelled) {
          setDraft(null)
          setDraftError(err instanceof SpfInputError ? '' : 'We couldn’t reach the DNS services to count the lookups. Check your connection.')
        }
      } finally {
        if (!cancelled) setDraftChecking(false)
      }
    }, 600)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [mode, record, bDomain])

  const toggleInclude = (inc: string) =>
    setIncludes((list) => (list.includes(inc) ? list.filter((x) => x !== inc) : [...list, inc]))

  const addOtherInclude = () => {
    const values = otherInclude
      .split(/[\s,;]+/)
      .map((s) => s.replace(/^include:/i, '').replace(/\.$/, '').toLowerCase())
      .filter((s) => /^[^\s.@/:]+(\.[^\s.@/:]+)+$/.test(s))
    if (values.length === 0) return
    setIncludes((list) => [...list, ...values.filter((v) => !list.includes(v))])
    setOtherInclude('')
  }

  const loadRecord = async (value: string) => {
    if (!value.trim()) return
    setLoadingRecord(true)
    setLoadNote(null)
    try {
      const f = await fetchSpfRecord(value)
      setBDomain(f.domain)
      if (f.status === 'nxdomain') {
        setLoadNote({ tone: 'bad', text: `${f.domain} doesn’t exist in DNS. Check the spelling.` })
      } else if (f.status === 'none' || !f.record) {
        setLoadNote({ tone: 'info', text: `${f.domain} has no SPF record yet. Pick your senders below to create one.` })
      } else {
        const o = recordToBuildOptions(f.record)
        if (!o) {
          setLoadNote({
            tone: 'warn',
            text: `${f.domain} uses a redirect in its SPF record (${f.record}). The form can’t edit that safely, so change it by hand.`,
          })
        } else {
          setIncludes(o.includes)
          setIpText([...o.ip4, ...o.ip6].join('\n'))
          setUseA(o.a)
          setUseMx(o.mx)
          setExtra(o.extra)
          setAllQ(o.all)
          if (o.ip4.length + o.ip6.length > 0 || o.a || o.mx) setShowMore(true)
          const multiple = f.status === 'multiple' ? ' It has more than one SPF record, so we loaded the first. Delete the others after you publish this one.' : ''
          const changed = o.changedAll ? ' Its ending was not ~all or -all, so we changed it to ~all.' : ''
          setLoadNote({
            tone: f.status === 'multiple' || o.changedAll ? 'warn' : 'ok',
            text: `We loaded the current record for ${f.domain}. Add or remove senders, then replace the old record with the new one.${multiple}${changed}`,
          })
        }
      }
    } catch (err) {
      setLoadNote({
        tone: 'bad',
        text: err instanceof SpfInputError ? err.message : 'We couldn’t reach the DNS services. Check your connection and try again.',
      })
    } finally {
      setLoadingRecord(false)
    }
  }

  const startCreate = (domain: string) => {
    setMode('create')
    setBDomain(domain)
    loadRecord(domain)
  }

  const checkPublished = () => {
    const d = bDomain.trim()
    setMode('check')
    if (d) {
      setInput(d)
      run(d)
    }
  }

  const s = result ? summary(result) : null
  const tone = s ? TONE[s.tone] : null
  const notes = result ? unneededNotes(result) : []
  // The builder always ends with "all", so the no-all warning can't apply there.
  const draftIssues = (draft?.issues ?? []).filter((i) => i.code !== 'no-all')
  const draftLookups = draft?.totalLookups ?? 0
  const tabClass = (m: Mode) =>
    `flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
      mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">

      <div className="p-5 md:p-8 space-y-6">
        <div role="tablist" aria-label="SPF tool mode" className="inline-flex w-full sm:w-auto p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" role="tab" aria-selected={mode === 'check'} onClick={() => setMode('check')} className={tabClass('check')}>
            Check<span className="hidden sm:inline"> SPF record</span>
          </button>
          <button type="button" role="tab" aria-selected={mode === 'create'} onClick={() => setMode('create')} className={tabClass('create')}>
            Create<span className="hidden sm:inline"> SPF record</span>
          </button>
        </div>

        {mode === 'check' && (
          <div role="tabpanel" className="space-y-6">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                run(input)
              }}
              className="space-y-2"
            >
              <label htmlFor="spf-domain" className="block text-sm font-bold text-slate-900">
                Domain or email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="spf-domain"
                  type="text"
                  inputMode="url"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="example.com"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  className={`flex-1 ${inputClass} ${inputError ? 'border-rose-400' : 'border-slate-300'}`}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors shadow-sm disabled:opacity-60"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  Check SPF record
                </button>
              </div>
              {inputError ? (
                <p className="text-sm text-rose-600 font-semibold">{inputError}</p>
              ) : (
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>Try:</span>
                  {EXAMPLES.map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      onClick={() => {
                        setInput(ex)
                        run(ex)
                      }}
                      className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-semibold"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              )}
            </form>

            <div aria-live="polite" className="space-y-5">
              {lookupError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-800 font-medium flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{lookupError}</span>
                </div>
              )}

              {result && s && tone && (
                <>
                  <div className={`p-4 md:p-5 rounded-xl border flex items-start gap-3 ${tone.box}`}>
                    <tone.Icon className={`w-6 h-6 shrink-0 mt-0.5 ${tone.icon}`} />
                    <div className="min-w-0">
                      <h3 className={`text-base md:text-lg font-bold break-words ${tone.title}`}>{s.title}</h3>
                      <p className={`text-sm leading-relaxed mt-1 ${tone.text}`}>{s.text}</p>
                    </div>
                  </div>

                  {result.record && (
                    <div className="bg-slate-900 rounded-xl p-4 md:p-5">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">SPF record for {result.domain}</span>
                        <CopyButton text={result.record} dark />
                      </div>
                      <code className="block font-mono text-sm text-emerald-300 font-semibold break-all">{result.record}</code>
                    </div>
                  )}

                  {result.root && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      <Meter
                        label="DNS lookups"
                        used={result.totalLookups}
                        limit={LOOKUP_LIMIT}
                        note="include, a, mx, ptr, exists and redirect each cost one, including inside includes."
                      />
                      <Meter
                        label="Void lookups"
                        used={result.voidLookups}
                        limit={VOID_LIMIT}
                        note="Lookups that found nothing. More than 2 can make receivers fail SPF."
                      />
                      <div className="col-span-2 sm:col-span-1 p-3 sm:p-4 rounded-xl border border-slate-200 bg-white">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Servers not listed</div>
                        <div className="mt-1 text-xl sm:text-2xl font-black text-slate-900">
                          {result.allQualifier ? ALL_LABEL[result.allQualifier] : 'Not set'}
                        </div>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                          {result.allQualifier
                            ? `Set by ${result.allQualifier}all at the end of the record.`
                            : 'The record has no all at the end, so other servers get a neutral result.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {result.issues.length + notes.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {result.issues.some((i) => i.level !== 'info') ? 'What to fix' : 'Notes'}
                      </h3>
                      <IssueList issues={[...result.issues, ...notes]} domain={result.domain} />
                    </div>
                  )}

                  {result.root && (
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 hidden sm:grid grid-cols-[minmax(0,14rem)_minmax(0,1fr)_4.5rem] gap-x-4">
                        <span>Part</span>
                        <span>What it means</span>
                        <span className="text-right">Cost</span>
                      </div>
                      <div className="sm:hidden bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        What each part means
                      </div>
                      <div className="px-4">
                        <NodeTerms node={result.root} depth={0} />
                      </div>
                    </div>
                  )}

                  {result.outcome === 'none' && (
                    <div className="space-y-4">
                      {result.nearMisses.length > 0 && (
                        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                          <p className="text-sm font-bold text-amber-900">
                            We found a TXT record that looks like a broken SPF record:
                          </p>
                          {result.nearMisses.map((t) => (
                            <code key={t} className="block font-mono text-xs text-amber-900 bg-white/70 border border-amber-200 rounded-lg p-2 break-all">
                              {t}
                            </code>
                          ))}
                          <p className="text-sm text-amber-900 leading-relaxed">
                            {result.nearMisses.some((t) => /^v=spf2/i.test(t))
                              ? 'A record starting with v=spf2.0 belongs to Sender ID, an old system receivers no longer check. An SPF record must start with exactly v=spf1.'
                              : 'Receivers ignore it, because an SPF record must start with exactly v=spf1 followed by a space.'}
                          </p>
                        </div>
                      )}
                      {!result.hasMx && (
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {result.domain} has no MX records either, so it may not be used for email at all. A domain that never sends
                          email can publish <code className="font-mono font-semibold text-slate-900">v=spf1 -all</code>. That tells
                          receivers no server may send for it, which makes it harder to fake.
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={() => startCreate(result.domain)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        Create an SPF record for {result.domain}
                      </button>
                    </div>
                  )}

                  {(result.outcome === 'warnings' || result.outcome === 'invalid') && result.root && (
                    <button
                      type="button"
                      onClick={() => startCreate(result.domain)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700"
                    >
                      Load this record into the SPF creator to fix it
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    Answered by {result.resolver || 'public DNS'}
                  </p>

                  {result.root && (
                    <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-base font-bold">SPF doesn’t stop bounces</h3>
                        <p className="text-sm text-slate-300">
                          SPF shows that your mail comes from your servers. Mail sent to addresses that don’t exist still bounces, and a high bounce rate hurts delivery.
                        </p>
                      </div>
                      <Link
                        href="/bulk-email-verifier"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm whitespace-nowrap"
                      >
                        Verify an email list
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {mode === 'create' && (
          <div role="tabpanel" className="space-y-7">
            {/* Step 1: domain */}
            <div className="space-y-2">
              <label htmlFor="spf-build-domain" className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <StepNumber n={1} />
                Your domain
              </label>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  loadRecord(bDomain)
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  id="spf-build-domain"
                  type="text"
                  inputMode="url"
                  value={bDomain}
                  onChange={(e) => setBDomain(e.target.value)}
                  placeholder="example.com"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  className={`flex-1 ${inputClass} border-slate-300`}
                />
                <button
                  type="submit"
                  disabled={loadingRecord || !bDomain.trim()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-indigo-400 text-slate-800 font-bold text-sm disabled:opacity-50"
                >
                  {loadingRecord ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  Load current record
                </button>
              </form>
              {loadNote ? (
                <p className={`text-sm leading-relaxed font-medium ${TONE[loadNote.tone].text}`}>{loadNote.text}</p>
              ) : (
                <p className="text-xs text-slate-500 leading-relaxed">
                  If your domain already has an SPF record, load it and add the new sender to it. You can also skip this step.
                </p>
              )}
            </div>

            {/* Step 2: senders */}
            <fieldset className="min-w-0 space-y-3">
              <legend className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <StepNumber n={2} />
                Which services send email from your domain?
              </legend>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tick every service that sends mail with your domain in the address. The number is how many of the 10 allowed DNS lookups each one uses.
              </p>
              {(['mailbox', 'service'] as const).map((group) => (
                <div key={group} className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {group === 'mailbox' ? 'Email providers' : 'Sending, marketing and support tools'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {SPF_SENDERS.filter((x) => x.group === group).map((x) => {
                      const on = includes.includes(x.include)
                      return (
                        <label
                          key={x.include}
                          className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                            on ? 'border-indigo-500 bg-indigo-50/60' : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={() => toggleInclude(x.include)}
                            className="w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                          />
                          <span className="min-w-0 flex-1">
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-slate-900">{x.name}</span>
                              <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                                {x.lookups} lookup{x.lookups === 1 ? '' : 's'}
                              </span>
                            </span>
                            <span className="block font-mono text-[11px] text-slate-500 break-all">include:{x.include}</span>
                            {x.note && <span className="block text-[11px] text-slate-500 mt-1 leading-relaxed">{x.note}</span>}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* Includes that aren't in the list, typed or loaded */}
              {includes.filter((inc) => !SPF_SENDERS.some((x) => x.include === inc)).length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {includes
                    .filter((inc) => !SPF_SENDERS.some((x) => x.include === inc))
                    .map((inc) => (
                      <span key={inc} className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-xs">
                        <span className="font-mono font-semibold text-indigo-800 break-all">include:{inc}</span>
                        {senderName(inc) && <span className="text-indigo-600">({senderName(inc)})</span>}
                        <button type="button" onClick={() => toggleInclude(inc)} aria-label={`Remove include:${inc}`} className="p-0.5 rounded hover:bg-indigo-100">
                          <X className="w-3.5 h-3.5 text-indigo-700" />
                        </button>
                      </span>
                    ))}
                </div>
              )}
              {includes
                .map((inc) => ({ inc, u: unneededInclude(inc) }))
                .filter((x) => x.u)
                .map(({ inc, u }) => (
                  <p key={inc} className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg p-2.5 leading-relaxed">
                    <span className="font-mono font-semibold">include:{inc}</span> ({u!.name}) is usually not needed
                    {u!.subdomainOnly ? ' on a main domain' : ''}. {u!.reason}
                  </p>
                ))}
              <details className="group rounded-xl border border-slate-200 bg-slate-50/70">
                <summary className="cursor-pointer list-none px-3.5 py-2.5 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform group-open:rotate-180" />
                  Using Mailchimp, SendGrid, Brevo or similar? They may not need an include.
                </summary>
                <ul className="px-3.5 pb-3 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  {SPF_NOT_NEEDED.map((u) => (
                    <li key={u.name}>
                      <span className="font-bold text-slate-800">{u.name}:</span> {u.reason}
                    </li>
                  ))}
                </ul>
              </details>
              <div className="space-y-1.5">
                <label htmlFor="spf-other-include" className="block text-xs font-bold text-slate-700">
                  Another service not listed here
                </label>
                <div className="flex gap-2">
                  <input
                    id="spf-other-include"
                    type="text"
                    value={otherInclude}
                    onChange={(e) => setOtherInclude(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addOtherInclude()
                      }
                    }}
                    placeholder="spf.example-service.com"
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    className="flex-1 min-w-0 text-base sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                  />
                  <button
                    type="button"
                    onClick={addOtherInclude}
                    className="inline-flex items-center gap-1.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-indigo-400 text-slate-800 font-bold text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
                <p className="text-xs text-slate-500">Copy the include value from the service’s setup guide.</p>
              </div>

              {/* Own servers */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  aria-expanded={showMore}
                  className="flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 text-left"
                >
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showMore ? 'rotate-180' : ''}`} />
                  Do you also send from your own server?
                </button>
                {showMore && (
                  <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="spf-ips" className="block text-xs font-bold text-slate-700">
                        IP addresses of servers that send your mail
                      </label>
                      <textarea
                        id="spf-ips"
                        rows={3}
                        value={ipText}
                        onChange={(e) => setIpText(e.target.value)}
                        placeholder={'192.0.2.10\n198.51.100.0/24\n2001:db8::/32'}
                        spellCheck={false}
                        className="w-full text-base sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                      />
                      <p className="text-xs text-slate-500">One per line. IPv4 and IPv6 both work, and so do ranges like /24.</p>
                    </div>
                    <label className="flex items-start gap-2.5 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useA}
                        onChange={(e) => setUseA(e.target.checked)}
                        className="w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                      />
                      <span>
                        <span className="font-bold text-slate-800">The server my domain points to sends mail</span>{' '}
                        <span className="font-mono text-[11px] text-slate-400">a</span>
                        <span className="block text-xs text-slate-500 mt-0.5">Adds the IP address of your domain itself. Uses 1 lookup.</span>
                      </span>
                    </label>
                    <label className="flex items-start gap-2.5 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useMx}
                        onChange={(e) => setUseMx(e.target.checked)}
                        className="w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                      />
                      <span>
                        <span className="font-bold text-slate-800">My incoming mail servers also send mail</span>{' '}
                        <span className="font-mono text-[11px] text-slate-400">mx</span>
                        <span className="block text-xs text-slate-500 mt-0.5">
                          Adds the servers in your MX records. Uses 1 lookup. Not needed for Google Workspace or Microsoft 365, whose includes already cover sending.
                        </span>
                      </span>
                    </label>
                  </div>
                )}
              </div>

              {extra.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="text-xs font-bold text-slate-700">Kept from your current record</p>
                  <div className="flex flex-wrap gap-2">
                    {extra.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 rounded-lg bg-white border border-slate-300 text-xs">
                        <span className="font-mono font-semibold text-slate-800 break-all">{t}</span>
                        <button type="button" onClick={() => setExtra((list) => list.filter((x) => x !== t))} aria-label={`Remove ${t}`} className="p-0.5 rounded hover:bg-slate-100">
                          <X className="w-3.5 h-3.5 text-slate-600" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </fieldset>

            {/* Step 3: other servers */}
            <fieldset className="min-w-0 space-y-3">
              <legend className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <StepNumber n={3} />
                What should happen to mail from servers you didn’t list?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  [
                    {
                      q: '~',
                      title: 'Soft fail',
                      tag: '~all',
                      text: 'Receivers accept the mail but treat it with more suspicion. Google and M3AAWG recommend this ending.',
                    },
                    {
                      q: '-',
                      title: 'Fail',
                      tag: '-all',
                      text: 'Tells receivers the mail is not authorized. Microsoft recommends it once DKIM and DMARC are set up. Some receivers then reject mail before DMARC runs, so it never appears in DMARC reports.',
                    },
                  ] as const
                ).map((opt) => {
                  const selected = allQ === opt.q
                  return (
                    <label
                      key={opt.q}
                      className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                        selected ? 'border-indigo-500 bg-indigo-50/60 ring-1 ring-indigo-500' : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input type="radio" name="spf-all" value={opt.q} checked={selected} onChange={() => setAllQ(opt.q)} className="sr-only" />
                      <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selected ? 'border-indigo-600' : 'border-slate-300'}`}>
                          {selected && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                        </span>
                        {opt.title}
                        <span className="font-mono text-[11px] font-semibold text-slate-400">{opt.tag}</span>
                      </span>
                      <span className="block text-xs text-slate-600 leading-relaxed mt-2">{opt.text}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            {/* The record */}
            <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 space-y-4 shadow-md">
              <div>
                <h3 className="text-base md:text-lg font-bold text-white">Your SPF record</h3>
                <p className="text-xs md:text-sm text-slate-400 mt-0.5">Add it to your domain’s DNS as a TXT record.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-[110px_1fr_1fr] gap-3">
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Type</div>
                  <div className="font-mono text-sm text-slate-100">TXT</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Name / Host</div>
                  <div className="font-mono text-sm text-slate-100">@</div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                  <div className="text-xs text-slate-400 leading-relaxed">
                    Some DNS hosts want the domain itself instead of @, or an empty name field.
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-3 flex items-start justify-between gap-3 p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Value</div>
                    <div className="font-mono text-sm text-emerald-300 font-semibold break-all select-all">{record}</div>
                  </div>
                  <CopyButton text={record} dark />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className={`font-bold ${draftLookups > LOOKUP_LIMIT ? 'text-rose-300' : draftLookups >= LOOKUP_LIMIT - 1 ? 'text-amber-300' : 'text-emerald-300'}`}>
                  {draftLookups} of {LOOKUP_LIMIT} DNS lookups
                </span>
                {draftChecking && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Counting against live DNS
                  </span>
                )}
              </div>
            </div>

            {noSenders && (
              <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  No senders picked yet. A record with no senders says that no server may send for the domain. That is right only
                  for a domain that never sends email, and then it should end in <span className="font-mono font-semibold">-all</span>.{' '}
                  {allQ !== '-' && (
                    <button type="button" onClick={() => setAllQ('-')} className="text-indigo-600 font-semibold hover:underline">
                      This domain never sends email
                    </button>
                  )}
                </span>
              </p>
            )}
            {draftError && <p className="text-sm text-rose-700 font-medium">{draftError}</p>}
            <IssueList issues={draftIssues} domain={draft?.domain ?? ''} />

            {/* What to do next */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6 space-y-3">
              <h3 className="text-base font-bold text-slate-900">How to add it</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                <li>Sign in where you manage your domain’s DNS. This is usually the company you bought the domain from.</li>
                <li>
                  Look for a TXT record that starts with v=spf1. If there is one, replace its value with the record above. Don’t add a
                  second SPF record, because two records break SPF for all your mail.
                </li>
                <li>If there isn’t one, add a new TXT record with the name and value above, then save.</li>
                <li>
                  Wait a few minutes, then{' '}
                  <button type="button" onClick={checkPublished} className="text-indigo-600 font-semibold hover:underline">
                    check the published record
                  </button>
                  . Set up DKIM and DMARC too, with the{' '}
                  <Link href="/dkim-generator" className="text-indigo-600 font-semibold hover:underline">
                    DKIM generator
                  </Link>{' '}
                  and the{' '}
                  <Link href="/dmarc-generator" className="text-indigo-600 font-semibold hover:underline">
                    DMARC generator
                  </Link>
                  .
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="w-6 h-6 shrink-0 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">{n}</span>
  )
}
