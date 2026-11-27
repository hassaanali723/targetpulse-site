'use client'

import React, { useState, useMemo } from 'react'
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Copy,
  Check,
  RotateCcw,
  Info,
  Server,
  Zap,
  Loader2,
  ExternalLink,
} from 'lucide-react'
import {
  prepareSpfFlattening,
  executeSpfFlattening,
  type SpfFlatteningSession,
} from '@/lib/tools/spfFlattenerCore'
import { UDP_SAFE_BYTE_LIMIT } from '@/lib/tools/spfFlattenerPure'

export default function SpfFlattenerTool() {
  const [inputMode, setInputMode] = useState<'domain' | 'draft'>('domain')
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [session, setSession] = useState<SpfFlatteningSession | null>(null)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [copiedType, setCopiedType] = useState<'single' | 'chunked' | null>(null)

  const handleAnalyze = async (valueToUse?: string) => {
    const val = (valueToUse || inputValue).trim()
    if (!val) return
    setIsLoading(true)
    setErrorMsg(null)
    setSession(null)
    try {
      const sess = await prepareSpfFlattening(val, inputMode === 'draft')
      setSession(sess)
      // By default select all candidates where isFlattened is true
      const initialSelected = new Set(
        sess.candidates.filter((c) => c.isFlattened).map((c) => c.id)
      )
      setSelectedIds(initialSelected)
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to inspect SPF record.')
    } finally {
      setIsLoading(false)
    }
  }

  const flattenedResult = useMemo(() => {
    if (!session) return null
    return executeSpfFlattening(session, selectedIds)
  }, [session, selectedIds])

  const toggleCandidate = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleCopy = async (text: string, type: 'single' | 'chunked') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="space-y-8">
      {/* Input Console */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => {
                setInputMode('domain')
                setErrorMsg(null)
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                inputMode === 'domain'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lookup Domain Live
            </button>
            <button
              type="button"
              onClick={() => {
                setInputMode('draft')
                setErrorMsg(null)
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                inputMode === 'draft'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Paste Record Draft
            </button>
          </div>

          {session && (
            <button
              type="button"
              onClick={() => {
                setSession(null)
                setInputValue('')
                setErrorMsg(null)
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAnalyze()
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                inputMode === 'domain'
                  ? 'Enter domain, e.g. company.com'
                  : 'v=spf1 include:_spf.google.com include:sendgrid.net ~all'
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 font-mono transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold px-6 py-3 text-sm shadow-xs transition-colors shrink-0"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Resolving Tree...
              </>
            ) : (
              <>
                <Layers className="w-4 h-4" />
                Flatten Record
              </>
            )}
          </button>
        </form>

        {/* Sample Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="font-bold text-slate-400 uppercase tracking-wider">Try Examples:</span>
          <button
            type="button"
            onClick={() => {
              setInputMode('domain')
              setInputValue('github.com')
              handleAnalyze('github.com')
            }}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            github.com
          </button>
          <button
            type="button"
            onClick={() => {
              setInputMode('domain')
              setInputValue('uber.com')
              handleAnalyze('uber.com')
            }}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            uber.com
          </button>
          <button
            type="button"
            onClick={() => {
              setInputMode('draft')
              const draft =
                'v=spf1 include:_spf.google.com include:servers.mcsv.net include:sendgrid.net ~all'
              setInputValue(draft)
              handleAnalyze(draft)
            }}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            Draft (3 ESP Includes)
          </button>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-900 text-xs sm:text-sm flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Flattening Workbench & Live Results */}
      {session && flattenedResult && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Comparison Scorecard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before Card */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Original Record
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                    session.originalLookups > 10
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {session.originalLookups} DNS Lookups{' '}
                  {session.originalLookups > 10 ? '(Permerror)' : ''}
                </span>
              </div>
              <pre className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs font-mono text-slate-700 overflow-x-auto whitespace-pre-wrap break-all">
                {session.originalRecord}
              </pre>
            </div>

            {/* After Card */}
            <div className="p-5 rounded-2xl border border-indigo-200 bg-indigo-50/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Flattened Record
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                    flattenedResult.lookupCount <= 10
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {flattenedResult.lookupCount} DNS Lookups (Safe)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                <span>
                  Payload: <strong>{flattenedResult.byteLength} bytes</strong>
                </span>
                <span>·</span>
                <span
                  className={
                    flattenedResult.isUnderUdpLimit ? 'text-emerald-700 font-semibold' : 'text-amber-700 font-semibold'
                  }
                >
                  {flattenedResult.isUnderUdpLimit
                    ? `Fits RFC 7208 UDP Target (<= ${UDP_SAFE_BYTE_LIMIT} B)`
                    : `Exceeds ~${UDP_SAFE_BYTE_LIMIT} B UDP Target`}
                </span>
                <span>·</span>
                <span>
                  Authorized IP Ranges: {flattenedResult.ip4Count} IPv4, {flattenedResult.ip6Count} IPv6
                </span>
              </div>
            </div>
          </div>

          {/* Selective Mechanism Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Selective Mechanism Optimization</h3>
                <p className="text-xs text-slate-500">
                  Uncheck includes you prefer to keep dynamic (for example, cloud providers with frequent IP changes).
                </p>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {selectedIds.size} of {session.candidates.filter((c) => c.canFlatten).length} items flattened
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {session.candidates.map((cand) => {
                const isChecked = selectedIds.has(cand.id)
                return (
                  <div
                    key={cand.id}
                    className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                      isChecked ? 'bg-indigo-50/20' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id={cand.id}
                        disabled={!cand.canFlatten}
                        checked={isChecked}
                        onChange={() => toggleCandidate(cand.id)}
                        className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 disabled:opacity-30 cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <label
                          htmlFor={cand.id}
                          className="font-mono text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer flex items-center gap-2"
                        >
                          {cand.raw}
                          <span className="font-sans font-medium text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {cand.type}
                          </span>
                        </label>
                        <div className="text-xs text-slate-500">
                          {cand.canFlatten ? (
                            <span>
                              Provides {cand.ip4List.length} IPv4 and {cand.ip6List.length} IPv6 range(s)
                              {cand.subtreeLookups > 0 && ` · Eliminates ${cand.subtreeLookups} DNS lookup(s)`}
                            </span>
                          ) : (
                            <span className="text-amber-700">{cand.cannotFlattenReason}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-semibold shrink-0 pl-7 sm:pl-0">
                      {isChecked ? (
                        <span className="text-emerald-700 inline-flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Flattened to IPs
                        </span>
                      ) : (
                        <span className="text-slate-400">Kept Dynamic</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Output Display & Copy Cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Ready-to-Publish SPF TXT Record</h4>
                  <p className="text-xs text-slate-500">Single line format for modern DNS control panels.</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(flattenedResult.record, 'single')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {copiedType === 'single' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copied Record
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      Copy Record
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">
                {flattenedResult.record}
              </pre>
            </div>

            {/* Chunked BIND format */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">255-Character Chunked DNS Format</h4>
                  <p className="text-xs text-slate-500">
                    Use if your DNS provider strictly enforces RFC 1035 255-character TXT string limits.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(flattenedResult.chunkedRecord, 'chunked')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {copiedType === 'chunked' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copied Chunks
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      Copy Chunks
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-50 border border-slate-100 font-mono text-xs text-slate-700 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">
                {flattenedResult.chunkedRecord}
              </pre>
            </div>
          </div>

          {/* Static Flattening Risk Warning */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-semibold block">Important Maintenance Notice for Static SPF Records:</strong>
              <p className="leading-relaxed opacity-95">
                Flattening replaces dynamic <code className="font-mono bg-amber-100 px-1 rounded">include:</code> lookups with static IP ranges. If your email provider adds new sending IP ranges in the future, your flattened record will not update automatically. Review your flattened records every 30 to 60 days, or use selective flattening to keep providers like Google Workspace dynamic.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
