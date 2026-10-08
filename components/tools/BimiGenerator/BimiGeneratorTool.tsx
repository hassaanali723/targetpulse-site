'use client'

import React, { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Upload,
  Info,
  ShieldCheck,
  Sparkles,
  FileCode,
  Image as ImageIcon,
} from 'lucide-react'
import {
  validateBimiUrl,
  generateBimiRecord,
  checkBimiSvg,
  type SvgCheckResult,
} from '@/lib/tools/bimiGeneratorCore'

export default function BimiGeneratorTool() {
  const [activeTab, setActiveTab] = useState<'record' | 'checker' | 'readiness'>('record')

  // Record Builder State
  const [domain, setDomain] = useState('')
  const [selector, setSelector] = useState('default')
  const [logoUrl, setLogoUrl] = useState('')
  const [certificateUrl, setCertificateUrl] = useState('')
  const [leaveLogoEmpty, setLeaveLogoEmpty] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // SVG Checker State
  const [svgInputText, setSvgInputText] = useState('')
  const [svgFileResult, setSvgFileResult] = useState<SvgCheckResult | null>(null)
  const [svgPreviewUrl, setSvgPreviewUrl] = useState<string | null>(null)
  const svgFileInputRef = useRef<HTMLInputElement>(null)

  // Readiness Checklist State
  const [dmarcEnforced, setDmarcEnforced] = useState(false)
  const [spfDkimAligned, setSpfDkimAligned] = useState(false)
  const [logoChecked, setLogoChecked] = useState(false)
  const [certType, setCertType] = useState<'none' | 'CMC' | 'VMC'>('none')

  // Copy helper
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

  // URL validations
  const logoUrlValidation = useMemo(() => {
    if (!logoUrl.trim()) return { valid: true }
    return validateBimiUrl(logoUrl, 'svg')
  }, [logoUrl])

  const certUrlValidation = useMemo(() => {
    if (!certificateUrl.trim()) return { valid: true }
    return validateBimiUrl(certificateUrl, 'pem')
  }, [certificateUrl])

  // Generated Record
  const bimiRecord = useMemo(() => {
    if (!domain.trim()) return null
    return generateBimiRecord({
      domain,
      selector,
      logoUrl,
      certificateUrl,
      leaveLogoEmpty,
    })
  }, [domain, selector, logoUrl, certificateUrl, leaveLogoEmpty])

  // SVG Checker run
  const runSvgCheck = (rawSvg: string, byteSize?: number) => {
    if (!rawSvg.trim()) {
      setSvgFileResult(null)
      if (svgPreviewUrl) URL.revokeObjectURL(svgPreviewUrl)
      setSvgPreviewUrl(null)
      return
    }

    const result = checkBimiSvg(rawSvg, byteSize)
    setSvgFileResult(result)

    // Revoke old blob
    if (svgPreviewUrl) {
      URL.revokeObjectURL(svgPreviewUrl)
    }

    try {
      const blob = new Blob([rawSvg], { type: 'image/svg+xml' })
      const blobUrl = URL.createObjectURL(blob)
      setSvgPreviewUrl(blobUrl)
    } catch {
      setSvgPreviewUrl(null)
    }

    // Auto update checklist if passed
    if (result.passedAll) {
      setLogoChecked(true)
    }
  }

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (svgPreviewUrl) URL.revokeObjectURL(svgPreviewUrl)
    }
  }, [svgPreviewUrl])

  // Handle SVG file upload
  const handleSvgFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const byteSize = file.size
    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      if (text) {
        setSvgInputText(text)
        runSvgCheck(text, byteSize)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Tab Switcher */}
      <div className="flex border-b border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab('record')}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            activeTab === 'record'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>Record Builder</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('checker')}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            activeTab === 'checker'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>SVG Logo Checker</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('readiness')}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            activeTab === 'readiness'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Readiness Checklist</span>
        </button>
      </div>

      {/* TAB 1: RECORD BUILDER */}
      {activeTab === 'record' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bimi-domain" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Domain <span className="text-red-500">*</span>
              </label>
              <input
                id="bimi-domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
              />
            </div>

            <div>
              <label htmlFor="bimi-selector" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Selector <span className="text-slate-400 font-normal lowercase">(default: default)</span>
              </label>
              <input
                id="bimi-selector"
                type="text"
                value={selector}
                onChange={(e) => setSelector(e.target.value)}
                placeholder="default"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
              />
              {selector && selector !== 'default' && (
                <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  Mail needs a BIMI-Selector header for a non-default selector.
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="bimi-logo" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Logo URL <span className="text-slate-400 font-normal lowercase">(must start with https:// and end in .svg)</span>
            </label>
            <input
              id="bimi-logo"
              type="url"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="https://example.com/bimi/logo.svg"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
            />
            {logoUrl && !logoUrlValidation.valid && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                {logoUrlValidation.error}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="bimi-cert" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Certificate URL <span className="text-slate-400 font-normal lowercase">(optional; must start with https:// and end in .pem)</span>
            </label>
            <input
              id="bimi-cert"
              type="url"
              value={certificateUrl}
              onChange={(e) => setCertificateUrl(e.target.value)}
              placeholder="https://example.com/bimi/cert.pem"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
            />
            {certificateUrl && !certUrlValidation.valid && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                {certUrlValidation.error}
              </p>
            )}
          </div>

          {/* Toggle when certificate URL is entered */}
          {certificateUrl.trim().length > 0 && (
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50 space-y-2">
              <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={leaveLogoEmpty}
                  onChange={(e) => setLeaveLogoEmpty(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Leave l= empty (the logo is inside the certificate)</span>
              </label>
              <p className="text-[11px] text-slate-500 pl-6">
                Google&apos;s examples show both forms: some certificates embed the logo within the PEM payload.
              </p>
            </div>
          )}

          {/* OUTPUT BOX */}
          {bimiRecord && (
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Publish this DNS TXT Record</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Host */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase text-slate-500">Host / Name</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(bimiRecord.hostFull, 'host')}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1"
                    >
                      {copiedField === 'host' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedField === 'host' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="font-mono text-xs font-semibold text-slate-900 break-all select-all">
                    {bimiRecord.hostFull}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Short form for panels that append domain: <code className="bg-slate-200/70 px-1 py-0.5 rounded">{bimiRecord.hostShort}</code>
                  </p>
                </div>

                {/* Record Type */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-slate-500">Record Type</span>
                  <p className="font-mono text-xs font-bold text-slate-900">TXT</p>
                  <p className="text-[11px] text-slate-500">TTL: 3600 (1 hour recommended)</p>
                </div>
              </div>

              {/* TXT Value */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-slate-500">TXT Record Value</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(bimiRecord.recordValue, 'val')}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1"
                  >
                    {copiedField === 'val' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'val' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs font-semibold text-indigo-950 break-all select-all">
                  {bimiRecord.recordValue}
                </div>
              </div>

              {/* Zone file line */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-slate-500">Zone-File Format</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(bimiRecord.zoneFileLine, 'zone')}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1"
                  >
                    {copiedField === 'zone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'zone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg font-mono text-xs text-emerald-400 break-all select-all">
                  {bimiRecord.zoneFileLine}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SVG LOGO CHECKER */}
      {activeTab === 'checker' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Upload SVG Logo File or Paste SVG Code
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  ref={svgFileInputRef}
                  type="file"
                  accept=".svg,image/svg+xml"
                  onChange={handleSvgFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => svgFileInputRef.current?.click()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-sm"
                >
                  <Upload className="w-4 h-4 text-slate-500" />
                  <span>Upload SVG File</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="bimi-svg-paste" className="block text-xs font-semibold text-slate-600 mb-1">
                Or paste SVG markup:
              </label>
              <textarea
                id="bimi-svg-paste"
                rows={5}
                value={svgInputText}
                onChange={(e) => {
                  setSvgInputText(e.target.value)
                  runSvgCheck(e.target.value)
                }}
                placeholder="<svg xmlns='http://www.w3.org/2000/svg' version='1.2' baseProfile='tiny-ps' viewBox='0 0 100 100'>..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>
          </div>

          {/* SVG Preview and Results */}
          {svgFileResult && (
            <div className="pt-6 border-t border-slate-200 space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl border border-slate-200 bg-slate-50">
                {/* Safe Preview via Blob URL img */}
                {svgPreviewUrl && (
                  <div className="w-32 h-32 rounded-xl border border-slate-300 bg-white p-2 flex items-center justify-center shadow-inner shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svgPreviewUrl}
                      alt="SVG Preview"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                        svgFileResult.passedAll
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {svgFileResult.passedAll ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Passes All Tiny PS Rules</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          <span>Does Not Meet Tiny PS Rules</span>
                        </>
                      )}
                    </span>
                    <span className="text-xs text-slate-500">
                      File size: {(svgFileResult.byteSize / 1024).toFixed(1)} KB
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {svgFileResult.passedAll
                      ? 'Your SVG logo meets the specifications for mailbox providers and certificate authorities.'
                      : 'Review the failing items below to make your logo compliant before publishing.'}
                  </p>
                </div>
              </div>

              {/* 11 Checks List */}
              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 bg-white overflow-hidden">
                {svgFileResult.checks.map((c) => (
                  <div key={c.id} className="p-3.5 flex items-start gap-3 text-xs">
                    {c.isWarning ? (
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    ) : c.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-0.5">
                      <p
                        className={`font-semibold ${
                          c.isWarning ? 'text-amber-800' : c.passed ? 'text-slate-800' : 'text-red-700'
                        }`}
                      >
                        {c.title}
                      </p>
                      <p className="text-slate-500 text-[11px] leading-relaxed">{c.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: READINESS CHECKLIST */}
      {activeTab === 'readiness' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">BIMI Deployment Readiness</h3>
            <p className="text-xs text-slate-500">
              Check off your prerequisites to determine where your brand logo will appear.
            </p>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
              <input
                type="checkbox"
                checked={dmarcEnforced}
                onChange={(e) => setDmarcEnforced(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mt-0.5"
              />
              <div className="text-xs space-y-0.5">
                <span className="font-semibold text-slate-800">
                  DMARC at quarantine or reject
                </span>
                <p className="text-slate-500">
                  BIMI requires policy enforcement. Need a record? Use our{' '}
                  <Link href="/dmarc-generator" className="text-indigo-600 font-semibold hover:underline">
                    DMARC generator
                  </Link>
                  .
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
              <input
                type="checkbox"
                checked={spfDkimAligned}
                onChange={(e) => setSpfDkimAligned(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mt-0.5"
              />
              <div className="text-xs space-y-0.5">
                <span className="font-semibold text-slate-800">
                  SPF and DKIM pass and align
                </span>
                <p className="text-slate-500">
                  Mail headers must authenticate cleanly with the domain in the From address.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
              <input
                type="checkbox"
                checked={logoChecked}
                onChange={(e) => setLogoChecked(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mt-0.5"
              />
              <div className="text-xs space-y-0.5">
                <span className="font-semibold text-slate-800">
                  Logo passes the checker
                </span>
                <p className="text-slate-500">
                  SVG Tiny PS compliant, square viewBox, no script or raster elements.
                </p>
              </div>
            </label>
          </div>

          {/* Certificate Selection */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Certificate Level
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'none', label: 'None (Self-hosted SVG only)' },
                { id: 'CMC', label: 'CMC (Common Mark Certificate)' },
                { id: 'VMC', label: 'VMC (Verified Mark Certificate)' },
              ].map((item) => (
                <label
                  key={item.id}
                  className={`p-3 rounded-lg border text-xs font-semibold cursor-pointer transition flex items-center gap-2 ${
                    certType === item.id
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="certLevel"
                    value={item.id}
                    checked={certType === item.id}
                    onChange={() => setCertType(item.id as 'none' | 'CMC' | 'VMC')}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Where logo can appear outcome panel */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-900 text-white space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-bold text-white">Where your logo can appear:</h4>
            </div>

            <div className="text-xs text-slate-300 space-y-2">
              {certType === 'VMC' && (
                <p className="font-semibold text-emerald-400">
                  With VMC: Gmail with checkmark, Apple Mail, and providers that support BIMI
                </p>
              )}

              {certType === 'CMC' && (
                <p className="font-semibold text-sky-400">
                  With CMC: Gmail without checkmark, not Apple Mail
                </p>
              )}

              {certType === 'none' && (
                <p className="font-semibold text-slate-300">
                  With none: only providers that accept records without a certificate, such as Yahoo and Fastmail
                </p>
              )}

              {(!dmarcEnforced || !spfDkimAligned || !logoChecked) && (
                <p className="text-amber-400 text-[11px] pt-1">
                  Note: Prerequisites must be met first. If DMARC is not at quarantine or reject, no provider will display your logo.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
