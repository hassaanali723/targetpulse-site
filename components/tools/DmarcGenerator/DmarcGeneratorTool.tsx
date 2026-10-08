'use client'

import React, { useState, useMemo } from 'react'
import {
  ShieldCheck,
  Shield,
  Copy,
  Check,
  Download,
  AlertTriangle,
  Info,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Sliders,
  FileCheck,
} from 'lucide-react'
import {
  generateDmarcRecord,
  cleanDmarcRecord,
  type DmarcPolicy,
  type DmarcAlignment,
  type DmarcFailureOption,
  type DmarcTagConfig,
  type CleanedDmarcResult,
} from '@/lib/tools/dmarcGeneratorCore'

export default function DmarcGeneratorTool() {
  const [activeTab, setActiveTab] = useState<'build' | 'clean'>('build')

  // Form state
  const [domain, setDomain] = useState('')
  const [policy, setPolicy] = useState<DmarcPolicy>('none')
  const [subdomainPolicy, setSubdomainPolicy] = useState<DmarcPolicy | 'inherit'>('inherit')
  const [nonExistentSubdomainPolicy, setNonExistentSubdomainPolicy] = useState<DmarcPolicy | 'none_specified'>('none_specified')
  const [aggregateReports, setAggregateReports] = useState('')
  const [failureReports, setFailureReports] = useState('')
  const [dkimAlignment, setDkimAlignment] = useState<DmarcAlignment>('r')
  const [spfAlignment, setSpfAlignment] = useState<DmarcAlignment>('r')
  const [failureOptions, setFailureOptions] = useState<DmarcFailureOption>('0')
  const [testingMode, setTestingMode] = useState(false)
  const [showDefaultTags, setShowDefaultTags] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  // Cleaner mode state
  const [importText, setImportText] = useState('')
  const [cleanerResult, setCleanerResult] = useState<CleanedDmarcResult | null>(null)

  // Copy feedback
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // Apply Presets
  const applyPreset = (preset: 'monitor' | 'quarantine' | 'reject' | 'test-reject') => {
    if (preset === 'monitor') {
      setPolicy('none')
      setSubdomainPolicy('inherit')
      setNonExistentSubdomainPolicy('none_specified')
      setTestingMode(false)
    } else if (preset === 'quarantine') {
      setPolicy('quarantine')
      setSubdomainPolicy('inherit')
      setNonExistentSubdomainPolicy('none_specified')
      setTestingMode(false)
    } else if (preset === 'reject') {
      setPolicy('reject')
      setSubdomainPolicy('inherit')
      setNonExistentSubdomainPolicy('reject')
      setTestingMode(false)
    } else if (preset === 'test-reject') {
      setPolicy('reject')
      setSubdomainPolicy('inherit')
      setNonExistentSubdomainPolicy('reject')
      setTestingMode(true)
    }
  }

  // Generation
  const result = useMemo(() => {
    const config: DmarcTagConfig = {
      domain,
      policy,
      subdomainPolicy,
      nonExistentSubdomainPolicy,
      aggregateReports,
      failureReports,
      dkimAlignment,
      spfAlignment,
      failureOptions,
      testingMode,
      showDefaultTags,
    }
    return generateDmarcRecord(config)
  }, [
    domain,
    policy,
    subdomainPolicy,
    nonExistentSubdomainPolicy,
    aggregateReports,
    failureReports,
    dkimAlignment,
    spfAlignment,
    failureOptions,
    testingMode,
    showDefaultTags,
  ])

  // Cleaner trigger
  const handleClean = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!importText.trim()) return
    const res = cleanDmarcRecord(importText, domain)
    setCleanerResult(res)
  }

  const handleCopy = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldId)
      setTimeout(() => setCopiedField(null), 2500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedField(fieldId)
      setTimeout(() => setCopiedField(null), 2500)
    }
  }

  const downloadDmarcTxt = (recordValue: string) => {
    const domainLabel = domain.trim() ? domain.trim().toUpperCase() : 'YOUR DOMAIN'
    const content = `DMARC RECORD FOR ${domainLabel}
Generated via Giggal.ai client-side DMARC generator (RFC 9989 compliant)

Host / Name:
${result.host}
(FQDN: ${domain.trim() ? result.fqdn : '_dmarc.yourdomain.com.'})

TXT Record Value:
${recordValue}

Type: TXT
TTL: 3600 (or DNS default)
`
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${domain.trim() || 'dmarc'}-record.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
      {/* Privacy guarantee banner */}
      <div className="bg-slate-900 text-slate-300 px-5 py-2.5 text-xs md:text-sm font-medium flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Runs entirely in your browser. No DNS queries or domains leave your computer.</span>
        </div>
        <span className="hidden sm:inline text-slate-400 text-xs">Zero network transmission</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50 px-5 pt-3 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('build')}
          className={`px-4 py-2.5 text-xs md:text-sm font-bold rounded-t-xl transition-colors border-t border-x ${
            activeTab === 'build'
              ? 'bg-white text-indigo-600 border-slate-200 -mb-px'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Build DMARC record
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('clean')
            if (!cleanerResult && importText.trim()) handleClean()
          }}
          className={`px-4 py-2.5 text-xs md:text-sm font-bold rounded-t-xl transition-colors border-t border-x flex items-center gap-1.5 ${
            activeTab === 'clean'
              ? 'bg-white text-indigo-600 border-slate-200 -mb-px'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Import &amp; clean old record (RFC 9989)</span>
        </button>
      </div>

      <div className="p-5 md:p-8 space-y-6">
        {activeTab === 'build' ? (
          <>
            {/* Presets Bar */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Recommended Policy Presets:
              </span>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  onClick={() => applyPreset('monitor')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    policy === 'none' && !testingMode
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">1. Monitor</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">p=none (No mail rejected)</div>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset('quarantine')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    policy === 'quarantine' && !testingMode
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">2. Quarantine</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">p=quarantine (Spam folder)</div>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset('reject')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    policy === 'reject' && !testingMode
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">3. Reject</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">p=reject (Block spoofing)</div>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset('test-reject')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    testingMode
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>4. Test Reject</span>
                    <span className="px-1 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[9px] font-extrabold">
                      RFC 9989
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">p=reject; t=y (Testing flag)</div>
                </button>
              </div>
            </div>

            {/* Core Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <label htmlFor="dmarc-domain" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Domain Name
                </label>
                <input
                  id="dmarc-domain"
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="example.com"
                  className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                  required
                />
              </div>

              <div>
                <label htmlFor="dmarc-policy" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Policy (p=)
                </label>
                <select
                  id="dmarc-policy"
                  value={policy}
                  onChange={(e) => setPolicy(e.target.value as DmarcPolicy)}
                  className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-slate-800"
                >
                  <option value="none">none (Collect reports only, do not block)</option>
                  <option value="quarantine">quarantine (Route unauthenticated mail to spam)</option>
                  <option value="reject">reject (Drop unauthenticated mail completely)</option>
                </select>
              </div>
            </div>

            {/* Reporting Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dmarc-rua" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Aggregate Report Email (rua=)
                </label>
                <input
                  id="dmarc-rua"
                  type="text"
                  value={aggregateReports}
                  onChange={(e) => setAggregateReports(e.target.value)}
                  placeholder="dmarc@example.com"
                  className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Receives daily XML summaries of pass/fail counts from mailbox providers
                </p>
              </div>

              <div>
                <label htmlFor="dmarc-ruf" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Failure / Forensic Email (ruf=, optional)
                </label>
                <input
                  id="dmarc-ruf"
                  type="text"
                  value={failureReports}
                  onChange={(e) => setFailureReports(e.target.value)}
                  placeholder="dmarc-forensics@example.com"
                  className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Individual failure reports (most providers omit for recipient privacy)
                </p>
              </div>
            </div>

            {/* Advanced Settings Toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{showAdvanced ? 'Hide advanced RFC 9989 tags' : 'Show advanced RFC 9989 tags (sp, np, t, alignments)'}</span>
              </button>

              {showAdvanced && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Subdomain policy */}
                  <div>
                    <label htmlFor="dmarc-sp" className="block text-xs font-bold text-slate-700 mb-1">
                      Subdomain Policy (sp=)
                    </label>
                    <select
                      id="dmarc-sp"
                      value={subdomainPolicy}
                      onChange={(e) => setSubdomainPolicy(e.target.value as DmarcPolicy | 'inherit')}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                    >
                      <option value="inherit">Inherit primary policy (Omit sp)</option>
                      <option value="none">none</option>
                      <option value="quarantine">quarantine</option>
                      <option value="reject">reject</option>
                    </select>
                  </div>

                  {/* Non-existent subdomain policy */}
                  <div>
                    <label htmlFor="dmarc-np" className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <span>Non-existent subdomains (np=)</span>
                      <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1 rounded font-bold">New</span>
                    </label>
                    <select
                      id="dmarc-np"
                      value={nonExistentSubdomainPolicy}
                      onChange={(e) => setNonExistentSubdomainPolicy(e.target.value as DmarcPolicy | 'none_specified')}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                    >
                      <option value="none_specified">Omit (Default)</option>
                      <option value="reject">reject (Protect unregistered subdomains)</option>
                      <option value="quarantine">quarantine</option>
                      <option value="none">none</option>
                    </select>
                  </div>

                  {/* Testing mode */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <span>Testing Mode (t=y)</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1 rounded font-bold">RFC 9989</span>
                    </label>
                    <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs font-semibold text-slate-700">
                      <input
                        type="checkbox"
                        checked={testingMode}
                        onChange={(e) => setTestingMode(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                      />
                      <span>Enable t=y test mode flag</span>
                    </label>
                  </div>

                  {/* DKIM Alignment */}
                  <div>
                    <label htmlFor="dmarc-adkim" className="block text-xs font-bold text-slate-700 mb-1">
                      DKIM Alignment (adkim=)
                    </label>
                    <select
                      id="dmarc-adkim"
                      value={dkimAlignment}
                      onChange={(e) => setDkimAlignment(e.target.value as DmarcAlignment)}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                    >
                      <option value="r">Relaxed (r - Default, recommended)</option>
                      <option value="s">Strict (s - Exact domain match)</option>
                    </select>
                  </div>

                  {/* SPF Alignment */}
                  <div>
                    <label htmlFor="dmarc-aspf" className="block text-xs font-bold text-slate-700 mb-1">
                      SPF Alignment (aspf=)
                    </label>
                    <select
                      id="dmarc-aspf"
                      value={spfAlignment}
                      onChange={(e) => setSpfAlignment(e.target.value as DmarcAlignment)}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                    >
                      <option value="r">Relaxed (r - Default, recommended)</option>
                      <option value="s">Strict (s - Exact domain match)</option>
                    </select>
                  </div>

                  {/* Failure option */}
                  <div>
                    <label htmlFor="dmarc-fo" className="block text-xs font-bold text-slate-700 mb-1">
                      Forensic Option (fo=)
                    </label>
                    <select
                      id="dmarc-fo"
                      value={failureOptions}
                      onChange={(e) => setFailureOptions(e.target.value as DmarcFailureOption)}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                    >
                      <option value="0">0 (Report only if both SPF and DKIM fail)</option>
                      <option value="1">1 (Report if either SPF or DKIM fails)</option>
                      <option value="d">d (Report if DKIM fails)</option>
                      <option value="s">s (Report if SPF fails)</option>
                    </select>
                  </div>

                  {/* Show default tags toggle */}
                  <div className="md:col-span-3 pt-3 border-t border-slate-200">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 select-none">
                      <input
                        type="checkbox"
                        checked={showDefaultTags}
                        onChange={(e) => setShowDefaultTags(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                      />
                      <span>Show default tags (adkim=r, aspf=r, fo=0, t=n, psd=u)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Generated Output Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 space-y-4 shadow-md pt-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h3 className="text-base font-bold text-white">Generated DMARC DNS Record</h3>
                </div>

                <button
                  type="button"
                  onClick={() => downloadDmarcTxt(result.record)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt</span>
                </button>
              </div>

              {/* Host / Name */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Host / Name:
                  </label>
                  <button
                    type="button"
                    onClick={() => handleCopy(result.host, 'host')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                  >
                    {copiedField === 'host' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy host</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 font-mono text-xs sm:text-sm text-slate-100 flex items-center justify-between">
                  <span className="select-all">{result.host}</span>
                  <span className="text-slate-500 text-xs hidden md:inline ml-4">
                    (or {domain.trim() ? result.fqdn : '_dmarc.yourdomain.com.'})
                  </span>
                </div>
              </div>

              {/* Record Value */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    TXT Value:
                  </label>
                  <button
                    type="button"
                    onClick={() => handleCopy(result.record, 'record')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                  >
                    {copiedField === 'record' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy record</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3.5 bg-slate-950/80 rounded-lg border border-slate-800 font-mono text-xs sm:text-sm text-emerald-300 break-all select-all font-semibold">
                  {result.record}
                </div>
              </div>

              {/* Warnings */}
              {result.warnings.length > 0 && (
                <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-lg space-y-1">
                  {result.warnings.map((w) => (
                    <div key={w} className="text-xs text-amber-300 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* External Domain Consent Records (RFC 7489 / RFC 9989) */}
            {result.externalConsentRecords.length > 0 && (
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>External Reporting Consent Records Required (RFC 7489 / 9989)</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  Your DMARC report address points to a domain different from your policy domain. To prevent abuse, receiving mail servers will NOT send reports to external domains unless the destination domain publishes this authorization record:
                </p>
                {result.externalConsentRecords.map((cr) => (
                  <div key={cr.destinationDomain} className="p-3 bg-white border border-amber-200 rounded-lg space-y-2">
                    <div className="text-xs font-semibold text-slate-800">
                      Publish on DNS of destination domain: <span className="font-mono text-indigo-600 font-bold">{cr.destinationDomain}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                        <span className="text-slate-500 mr-2">Host:</span>
                        <span className="text-slate-800 select-all font-semibold">{cr.host}</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                        <span className="text-slate-500 mr-2">Value:</span>
                        <span className="text-emerald-700 select-all font-semibold">{cr.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Tab 2: Cleaner Mode */
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="dmarc-import" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Paste existing DMARC record to clean:
              </label>
              <textarea
                id="dmarc-import"
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder="v=DMARC1; p=quarantine; pct=50; ri=86400; rf=afrf; rua=mailto:dmarc@example.com"
                rows={3}
                className="w-full text-xs sm:text-sm font-mono p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => handleClean()}
                disabled={!importText.trim()}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Clean to RFC 9989 standard</span>
              </button>
            </div>

            {cleanerResult && (
              <div className="space-y-4 pt-2">
                {/* Cleaned record box */}
                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4" />
                      Cleaned RFC 9989 Record:
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(cleanerResult.cleanedRecord, 'cleanedRecord')}
                      className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                    >
                      {copiedField === 'cleanedRecord' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy record</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-3 bg-slate-950 font-mono text-xs sm:text-sm text-emerald-300 rounded-lg select-all">
                    {cleanerResult.cleanedRecord}
                  </div>
                </div>

                {/* Explanation of changes */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Changes Applied ({cleanerResult.changes.length}):
                  </span>
                  <div className="space-y-2">
                    {cleanerResult.changes.map((c) => (
                      <div
                        key={c.tag + c.explanation}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              c.action === 'removed'
                                ? 'bg-rose-100 text-rose-700'
                                : c.action === 'modernized'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {c.action}
                          </span>
                          <span className="font-mono font-bold text-slate-900">{c.tag}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium">{c.explanation}</p>
                      </div>
                    ))}
                    {cleanerResult.changes.length === 0 && (
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                        Record is already clean and follows RFC 9989 specifications.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
