'use client'

import React, { useState } from 'react'
import {
  KeyRound,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Copy,
  Check,
  Loader2,
  ArrowRight,
  ShieldAlert,
  Server,
  Layers,
  FileCode,
  Link2,
} from 'lucide-react'
import { checkDkimSelector, type DkimCheckOutcome } from '@/lib/tools/dkimCheckerCore'
import { parseDkimRecord, type DkimValidationResult } from '@/lib/tools/dkimCheckerPure'

const SAMPLE_PRESETS = [
  { label: 'Google Mail', selector: '20230601', domain: 'google.com' },
  { label: 'GitHub', selector: 'pf2014', domain: 'github.com' },
]

export default function DkimCheckerTool() {
  const [mode, setMode] = useState<'selector' | 'draft'>('selector')
  const [selectorInput, setSelectorInput] = useState('20230601')
  const [domainInput, setDomainInput] = useState('google.com')
  const [draftInput, setDraftInput] = useState(
    'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyY0bH+Uf7kQ64d9lD83cQZf+hI8k1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghij==;'
  )
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [outcome, setOutcome] = useState<DkimCheckOutcome | null>(null)
  const [draftValidation, setDraftValidation] = useState<DkimValidationResult | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCheck = async (sel?: string, dom?: string) => {
    const s = (sel || selectorInput).trim()
    const d = (dom || domainInput).trim()
    if (!s || !d) return

    setIsLoading(true)
    setErrorMsg(null)
    setOutcome(null)

    try {
      const res = await checkDkimSelector(s, d)
      setOutcome(res)
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to look up DKIM selector.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleValidateDraft = () => {
    if (!draftInput.trim()) return
    setErrorMsg(null)
    const res = parseDkimRecord(draftInput.trim(), 'custom', 'example.com')
    setDraftValidation(res)
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const activeValidation = mode === 'selector' ? outcome?.validation : draftValidation

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Search / Workbench Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-emerald-600" />
              DKIM Record Checker & Key Strength Inspector
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Verify your DKIM selector, inspect RSA 2048-bit key strength, and chase CNAME delegation in real time.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setMode('selector')
                setErrorMsg(null)
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                mode === 'selector'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inspect Selector
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('draft')
                setErrorMsg(null)
                if (!draftValidation) handleValidateDraft()
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                mode === 'draft'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Validate Draft Key
            </button>
          </div>
        </div>

        {mode === 'selector' ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleCheck()
            }}
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Selector Name (s=)
                </label>
                <input
                  type="text"
                  value={selectorInput}
                  onChange={(e) => setSelectorInput(e.target.value)}
                  placeholder="e.g. 20230601, google, s1"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="sm:col-span-5">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Domain Name (d=)
                </label>
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="e.g. google.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="sm:col-span-3 flex items-end">
                <button
                  type="submit"
                  disabled={isLoading || !selectorInput.trim() || !domainInput.trim()}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Resolving...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Check DKIM
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-400 font-medium">Quick Examples:</span>
              {SAMPLE_PRESETS.map((sample) => (
                <button
                  key={sample.domain}
                  type="button"
                  onClick={() => {
                    setSelectorInput(sample.selector)
                    setDomainInput(sample.domain)
                    handleCheck(sample.selector, sample.domain)
                  }}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  {sample.label} ({sample.selector})
                </button>
              ))}
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
          </form>
        ) : (
          <div className="mt-6 space-y-4">
            <textarea
              value={draftInput}
              onChange={(e) => setDraftInput(e.target.value)}
              placeholder="Paste raw DKIM public key record (e.g. v=DKIM1; k=rsa; p=MIIBIj...)"
              rows={4}
              className="w-full font-mono text-sm p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={handleValidateDraft}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
            >
              Validate Key Syntax & Bit Length
            </button>
          </div>
        )}
      </div>

      {/* Analysis Presentation */}
      {activeValidation && (
        <div className="space-y-6">
          {/* CNAME Delegation Trace Banner */}
          {outcome && outcome.cnameChain.length > 0 && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs space-y-1.5">
              <div className="font-semibold flex items-center gap-1.5">
                <Link2 className="w-4 h-4 text-blue-600" />
                CNAME Delegation Traced:
              </div>
              <div className="font-mono text-[11px] text-blue-800 space-y-1">
                <div>{outcome.queriedHost}</div>
                {outcome.cnameChain.map((target, idx) => (
                  <div key={idx} className="pl-4 flex items-center gap-1 text-slate-600">
                    <span>↳ CNAME to:</span>
                    <span className="font-semibold text-blue-700">{target}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Missing Record State */}
          {!activeValidation.isValid && activeValidation.errors.some((e) => e.includes('empty')) && (
            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                No DKIM Record Found at {outcome?.queriedHost}
              </div>
              <p className="text-xs text-rose-700 leading-relaxed">
                The DNS query returned no TXT or CNAME record for selector <code className="font-mono font-bold">{outcome?.selector}</code> on domain <code className="font-mono font-bold">{outcome?.domain}</code>. Check that your selector is spelled correctly or that DNS propagation has completed.
              </p>
            </div>
          )}

          {/* Key Overview Cards */}
          {activeValidation.isValid && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Score Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 ${
                      activeValidation.complianceScore >= 90
                        ? 'bg-emerald-100 text-emerald-700'
                        : activeValidation.complianceScore >= 60
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {activeValidation.complianceScore}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500">Security Score</span>
                    <h3 className="text-base font-bold text-slate-900 capitalize">
                      {activeValidation.publicKey.securityRating === 'secure' && 'Highly Secure'}
                      {activeValidation.publicKey.securityRating === 'adequate_legacy' && 'Legacy Acceptable'}
                      {activeValidation.publicKey.securityRating === 'insecure' && 'Weak Key'}
                    </h3>
                  </div>
                </div>

                {/* Key Bit Length Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Key Length & Type</span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-mono font-bold text-slate-900">
                      {activeValidation.publicKey.bitLength || 'Unknown'} bits
                    </span>
                    <span className="text-xs font-semibold uppercase text-emerald-600">
                      {activeValidation.keyType}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {activeValidation.publicKey.bitLength === 2048 && '2048-bit (Industry Standard)'}
                    {activeValidation.publicKey.bitLength === 1024 && '1024-bit (Minimum Legacy)'}
                    {activeValidation.publicKey.bitLength === 256 && 'Ed25519 (Modern Curve)'}
                  </p>
                </div>

                {/* Status / Revocation Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Status & Revocation</span>
                  <div className="mt-1 flex items-center gap-1.5">
                    {activeValidation.publicKey.isRevoked ? (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-rose-600">
                        <XCircle className="w-4 h-4" />
                        Revoked Key
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" />
                        Active & Valid
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {activeValidation.flags.testing ? 'Testing mode active (t=y)' : 'Production enforcement'}
                  </p>
                </div>

                {/* Modulus Exponent Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Public Exponent</span>
                  <div className="mt-1 font-mono font-bold text-lg text-slate-900">
                    {activeValidation.publicKey.exponent || 'N/A'}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Standard F4 value (0x010001)
                  </p>
                </div>
              </div>

              {/* Raw Record Display */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-emerald-600" />
                    Published DKIM Public Key Record
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(activeValidation.rawRecord)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Record
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 font-mono text-xs text-slate-800 break-all select-all border border-slate-100">
                  {activeValidation.rawRecord}
                </div>
              </div>

              {/* Tag Breakdown Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    RFC 6376 DKIM Tag Breakdown
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Tag</th>
                        <th className="py-2.5 px-4 font-semibold">Configured Value</th>
                        <th className="py-2.5 px-4 font-semibold">Standard Purpose</th>
                        <th className="py-2.5 px-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {activeValidation.tags.map((t) => (
                        <tr key={t.tag} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-4 font-mono font-bold text-slate-900">
                            {t.tag}
                          </td>
                          <td className="py-2.5 px-4 font-mono text-emerald-700 font-medium max-w-md truncate" title={t.value}>
                            {t.value}
                          </td>
                          <td className="py-2.5 px-4 text-slate-600">
                            {t.description}
                          </td>
                          <td className="py-2.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Valid
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cryptographic Key Details Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Cryptographic Key Evaluation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeValidation.publicKey.details}
                </p>
              </div>

              {/* Actionable Recommendations */}
              {activeValidation.recommendations.length > 0 && (
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    Recommended Actions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-800 list-disc list-inside">
                    {activeValidation.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Deliverability CTA */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/50 to-slate-50 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Maximize Cold Email Deliverability with Giggal
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              DKIM signature verification proves your emails were not altered in transit. Pair your authenticated domain with Giggal verified contact lists for 98.5% deliverability.
            </p>
          </div>
          <a
            href="https://giggal.ai"
            className="shrink-0 px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm flex items-center gap-1.5"
          >
            Start Free on Giggal
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
