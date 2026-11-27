'use client'

import React, { useState } from 'react'
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Copy,
  Check,
  Loader2,
  ArrowRight,
  Info,
  ShieldAlert,
  Mail,
  Layers,
  FileCode,
} from 'lucide-react'
import { checkDmarcDomain, type DmarcCheckOutcome } from '@/lib/tools/dmarcCheckerCore'
import { parseDmarcRecord, type DmarcValidationResult } from '@/lib/tools/dmarcCheckerPure'

const SAMPLE_DOMAINS = [
  { label: 'Google (p=reject)', domain: 'google.com' },
  { label: 'GitHub (p=reject)', domain: 'github.com' },
  { label: 'Subdomain Fallback', domain: 'news.google.com' },
]

export default function DmarcCheckerTool() {
  const [mode, setMode] = useState<'domain' | 'draft'>('domain')
  const [domainInput, setDomainInput] = useState('google.com')
  const [draftInput, setDraftInput] = useState(
    'v=DMARC1; p=reject; sp=reject; pct=100; rua=mailto:dmarc-reports@example.com; adkim=r; aspf=r;'
  )
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [outcome, setOutcome] = useState<DmarcCheckOutcome | null>(null)
  const [draftValidation, setDraftValidation] = useState<DmarcValidationResult | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCheck = async (dom?: string) => {
    const val = (dom || domainInput).trim()
    if (!val) return

    setIsLoading(true)
    setErrorMsg(null)
    setOutcome(null)

    try {
      const res = await checkDmarcDomain(val)
      setOutcome(res)
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to look up DMARC record.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleValidateDraft = () => {
    if (!draftInput.trim()) return
    setErrorMsg(null)
    const res = parseDmarcRecord(draftInput.trim(), 'example.com', 1)
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

  const activeValidation = mode === 'domain' ? outcome?.validation : draftValidation

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Search / Workbench Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              DMARC Record Checker & DMARCbis Validator
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Verify your DMARC policy, enforce p=reject anti-spoofing protection, and check Google/Yahoo compliance.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setMode('domain')
                setErrorMsg(null)
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                mode === 'domain'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lookup Domain
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
              Validate Draft Record
            </button>
          </div>
        </div>

        {mode === 'domain' ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleCheck()
            }}
            className="mt-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="Enter domain name (e.g. yourcompany.com)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !domainInput.trim()}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-sm shrink-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Querying _dmarc...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Inspect DMARC
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-400 font-medium">Quick Examples:</span>
              {SAMPLE_DOMAINS.map((sample) => (
                <button
                  key={sample.domain}
                  type="button"
                  onClick={() => {
                    setDomainInput(sample.domain)
                    handleCheck(sample.domain)
                  }}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  {sample.label}
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
              placeholder="Paste raw DMARC TXT record (e.g. v=DMARC1; p=reject; rua=mailto:...)"
              rows={3}
              className="w-full font-mono text-sm p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={handleValidateDraft}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
            >
              Parse & Validate Syntax
            </button>
          </div>
        )}
      </div>

      {/* Analysis Presentation */}
      {activeValidation && (
        <div className="space-y-6">
          {/* Org Domain Fallback Notice */}
          {outcome?.fallbackToOrgDomain && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Subdomain Organizational Fallback:</span> No dedicated DMARC record was found at <code className="font-mono">{outcome.queriedHost}</code>. As specified in RFC 7489 Section 6.6.3 and DMARCbis RFC 9989, receivers fall back to the policy published at the organizational domain <code className="font-mono">{outcome.effectiveHost}</code>.
              </div>
            </div>
          )}

          {/* Missing Record State */}
          {!activeValidation.isValid && activeValidation.errors.some((e) => e.includes('empty')) && (
            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                No DMARC Record Found at {outcome?.queriedHost}
              </div>
              <p className="text-xs text-rose-700 leading-relaxed">
                This domain has not published a DMARC policy. Anyone can forge emails appearing to originate from this domain without failing receiver security checks. Google and Yahoo require all bulk senders to publish a valid DMARC record.
              </p>
            </div>
          )}

          {/* Score & Policy Overview Cards */}
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
                    <span className="text-xs font-medium text-slate-500">Compliance Score</span>
                    <h3 className="text-base font-bold text-slate-900 capitalize">
                      {activeValidation.enforcementStatus === 'enforced' && 'Fully Enforced'}
                      {activeValidation.enforcementStatus === 'partial' && 'Partial Protection'}
                      {activeValidation.enforcementStatus === 'monitoring' && 'Monitoring Only'}
                    </h3>
                  </div>
                </div>

                {/* Primary Policy Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Domain Policy (p=)</span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span
                      className={`text-xl font-mono font-bold capitalize ${
                        activeValidation.policy === 'reject'
                          ? 'text-emerald-600'
                          : activeValidation.policy === 'quarantine'
                            ? 'text-blue-600'
                            : 'text-amber-600'
                      }`}
                    >
                      p={activeValidation.policy}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({activeValidation.percentage}% filtered)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {activeValidation.policy === 'reject' && 'Rejects unauthenticated messages.'}
                    {activeValidation.policy === 'quarantine' && 'Sends unauthenticated mail to spam.'}
                    {activeValidation.policy === 'none' && 'Observes without enforcing policy.'}
                  </p>
                </div>

                {/* Subdomain Policy Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Subdomain Policy (sp=)</span>
                  <div className="mt-1">
                    <span className="text-xl font-mono font-bold text-slate-900 capitalize">
                      sp={activeValidation.subdomainPolicy}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Controls mail sent from *.
                    {outcome?.domain || 'domain.com'}
                  </p>
                </div>

                {/* Alignment Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Alignment Modes</span>
                  <div className="mt-1 flex items-center gap-3 text-xs font-mono">
                    <div>
                      <span className="text-slate-400">DKIM: </span>
                      <span className="font-semibold text-slate-800">
                        {activeValidation.adkim}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">SPF: </span>
                      <span className="font-semibold text-slate-800">
                        {activeValidation.aspf}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Relaxed allows subdomains to match
                  </p>
                </div>
              </div>

              {/* Raw Record Display */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-emerald-600" />
                    Published DMARC TXT Record
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
                    DMARC Tag Breakdown & Syntax Validation
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
                          <td className="py-2.5 px-4 font-mono text-emerald-700 font-medium">
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

              {/* Reporting Destinations & Consent Checks */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  Aggregate Reporting Destinations (rua)
                </h3>
                {activeValidation.rua.length === 0 ? (
                  <p className="text-xs text-amber-600">
                    No rua reporting destination configured. You will not receive DMARC deliverability reports from major mailbox providers.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {activeValidation.rua.map((r, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="font-mono text-slate-800">
                          {r.email}
                        </div>
                        <div>
                          {r.isExternal ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800">
                              External Domain (Requires consent at {r.reportAuthorizationRecord})
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                              Same Domain Authorized
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
              Complete Cold Email Authentication & Inbox Deliverability
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              DMARC prevents spoofing, but delivering high-converting cold email campaigns requires clean prospect data. Verify contact lists with Giggal to maintain 98.5% deliverability.
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
