'use client'

import React, { useState } from 'react'
import {
  KeyRound,
  Copy,
  Check,
  Download,
  Eye,
  EyeOff,
  AlertTriangle,
  FileCode2,
  RefreshCw,
  HelpCircle,
} from 'lucide-react'
import {
  generateDkimKeys,
  validateSelector,
  validateDomain,
  DkimError,
  type DkimKeySize,
  type DkimGeneratedKeys,
} from '@/lib/tools/dkimGeneratorCore'
import { dkimToolStrings, dkimErrorText } from '@/lib/i18n/tools/dkimToolStrings'
import type { Locale } from '@/lib/i18n/clusters'

// The order of the key size options. Their labels live in lib/i18n/tools/dkimToolStrings.ts.
const KEY_SIZES: DkimKeySize[] = [2048, 1024, 4096]

export default function DkimGeneratorTool({ locale = 'en' }: { locale?: Locale }) {
  const t = dkimToolStrings(locale)
  const [domain, setDomain] = useState('')
  const [selector, setSelector] = useState('')
  const [keySize, setKeySize] = useState<DkimKeySize>(2048)

  const [isGenerating, setIsGenerating] = useState(false)
  const [keys, setKeys] = useState<DkimGeneratedKeys | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  // UI view states
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [privateKeyFormat, setPrivateKeyFormat] = useState<'pkcs1' | 'pkcs8'>('pkcs1')
  const [dnsFormat, setDnsFormat] = useState<'single' | 'chunked' | 'bind'>('single')

  // Copy states
  const [copiedField, setCopiedField] = useState<string | null>(null)

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

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setErrorMsg('')

    const selVal = validateSelector(selector)
    if (!selVal.valid) {
      setErrorMsg(dkimErrorText(t, { ...selVal, message: selVal.error }, t.invalidSelector))
      return
    }

    const domVal = validateDomain(domain)
    if (!domVal.valid) {
      setErrorMsg(dkimErrorText(t, { ...domVal, message: domVal.error }, t.invalidDomain))
      return
    }

    setIsGenerating(true)
    try {
      const result = await generateDkimKeys(domain, selector, keySize)
      setKeys(result)
    } catch (err: any) {
      console.error('DKIM generation failed:', err)
      setErrorMsg(dkimErrorText(t, err instanceof DkimError ? err : { message: err?.message }, t.generationFailed))
    } finally {
      setIsGenerating(false)
    }
  }

  // Download private key
  const downloadPrivateKey = () => {
    if (!keys) return
    const content =
      privateKeyFormat === 'pkcs1' ? keys.privateKeyPkcs1Pem : keys.privateKeyPkcs8Pem
    const blob = new Blob([content], { type: 'application/x-pem-file;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${keys.selector}.private.key`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Download complete setup instructions bundle
  const downloadBundle = () => {
    if (!keys) return
    const bundleText = t.bundleText(keys)
    const blob = new Blob([bundleText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = t.bundleFileName(keys.domain, keys.selector)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">

      <div className="p-5 md:p-8 space-y-6">
        {/* Form Inputs */}
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Domain */}
            <div>
              <label htmlFor="dkim-domain" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.domainLabel}
              </label>
              <input
                id="dkim-domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder={t.domainPlaceholder}
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">{t.domainHelp}</p>
            </div>

            {/* Selector */}
            <div>
              <label htmlFor="dkim-selector" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.selectorLabel}
              </label>
              <input
                id="dkim-selector"
                type="text"
                value={selector}
                onChange={(e) => setSelector(e.target.value)}
                placeholder={t.selectorPlaceholder}
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">{t.selectorHelp}</p>
            </div>

            {/* Key Size */}
            <div>
              <label htmlFor="dkim-keysize" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.keySizeLabel}
              </label>
              <select
                id="dkim-keysize"
                value={keySize}
                onChange={(e) => setKeySize(Number(e.target.value) as DkimKeySize)}
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-slate-700"
              >
                {KEY_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {t.keySizeOptions[size]}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1">{t.keySizeHelp[keySize]}</p>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{t.generating}</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>{t.generate}</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Results view */}
        {keys && (
          <div className="space-y-6 pt-4 border-t border-slate-200">
            {/* 1. DNS TXT Record Card */}
            <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 space-y-4 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h3 className="text-base font-bold text-white">{t.dnsTitle}</h3>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md font-mono">
                    {t.keyInfo(keys.keySize, keys.recordCharCount)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 hidden sm:inline">{t.formatLabel}</span>
                  <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setDnsFormat('single')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        dnsFormat === 'single' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {t.formatSingle}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDnsFormat('chunked')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        dnsFormat === 'chunked' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {t.formatChunked}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDnsFormat('bind')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        dnsFormat === 'bind' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {t.formatBind}
                    </button>
                  </div>
                </div>
              </div>

              {/* Record Name / Host */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.hostLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => handleCopy(keys.dnsRecordName, 'host')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                  >
                    {copiedField === 'host' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyHost}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 font-mono text-xs sm:text-sm text-slate-100 flex items-center justify-between overflow-x-auto">
                  <span className="select-all">{keys.dnsRecordName}</span>
                  <span className="text-slate-500 text-xs hidden md:inline ml-4 shrink-0">
                    {t.orFqdn(keys.dnsRecordFqdn)}
                  </span>
                </div>
              </div>

              {/* Record Value */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.valueLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const val =
                        dnsFormat === 'single'
                          ? keys.dnsRecordValue
                          : dnsFormat === 'chunked'
                          ? keys.dnsRecordChunked
                          : keys.bindRecord
                      handleCopy(val, 'dnsValue')
                    }}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                  >
                    {copiedField === 'dnsValue' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyValue}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 font-mono text-xs text-emerald-300 break-all max-h-40 overflow-y-auto select-all whitespace-pre-wrap">
                  {dnsFormat === 'single' && keys.dnsRecordValue}
                  {dnsFormat === 'chunked' && keys.dnsRecordChunked}
                  {dnsFormat === 'bind' && keys.bindRecord}
                </div>
                {dnsFormat === 'chunked' && (
                  <p className="text-[11px] text-slate-400">
                    {t.chunkedNote}
                  </p>
                )}
              </div>
            </div>

            {/* 2. Private Key Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-base font-bold text-slate-900">{t.privateKeyTitle}</h3>
                </div>

                <div className="flex items-center gap-2">
                  {/* Format toggle: PKCS#1 vs PKCS#8 */}
                  <div className="flex bg-slate-200/80 p-0.5 rounded-lg text-xs font-semibold text-slate-700">
                    <button
                      type="button"
                      onClick={() => setPrivateKeyFormat('pkcs1')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        privateKeyFormat === 'pkcs1' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-600'
                      }`}
                    >
                      {t.pkcs1Label}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPrivateKeyFormat('pkcs8')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        privateKeyFormat === 'pkcs8' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-600'
                      }`}
                    >
                      {t.pkcs8Label}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowPrivateKey(!showPrivateKey)}
                    className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    {showPrivateKey ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>{t.hide}</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.show}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Private Key Display Box */}
              <div className="relative">
                <pre
                  className={`p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto max-h-48 transition-all ${
                    !showPrivateKey ? 'filter blur-sm select-none' : 'select-all'
                  }`}
                >
                  {privateKeyFormat === 'pkcs1' ? keys.privateKeyPkcs1Pem : keys.privateKeyPkcs8Pem}
                </pre>
                {!showPrivateKey && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setShowPrivateKey(true)}
                      className="px-4 py-2 bg-slate-900/90 text-white text-xs font-bold rounded-lg border border-slate-700 shadow-md hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{t.reveal}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Actions row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const priv =
                        privateKeyFormat === 'pkcs1'
                          ? keys.privateKeyPkcs1Pem
                          : keys.privateKeyPkcs8Pem
                      handleCopy(priv, 'privateKey')
                    }}
                    className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    {copiedField === 'privateKey' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">{t.copiedKey}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyPrivateKey}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={downloadPrivateKey}
                    className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t.downloadKey}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={downloadBundle}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadBundle}</span>
                </button>
              </div>

              {/* Warning note */}
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-800 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{t.rulesTitle}</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-amber-900/90 font-medium">
                  {t.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
