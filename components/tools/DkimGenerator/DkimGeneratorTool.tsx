'use client'

import React, { useState } from 'react'
import {
  KeyRound,
  ShieldCheck,
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
  type DkimKeySize,
  type DkimGeneratedKeys,
} from '@/lib/tools/dkimGeneratorCore'

export default function DkimGeneratorTool() {
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
      setErrorMsg(selVal.error || 'Invalid selector')
      return
    }

    const domVal = validateDomain(domain)
    if (!domVal.valid) {
      setErrorMsg(domVal.error || 'Invalid domain')
      return
    }

    setIsGenerating(true)
    try {
      const result = await generateDkimKeys(domain, selector, keySize)
      setKeys(result)
    } catch (err: any) {
      console.error('DKIM generation failed:', err)
      setErrorMsg(err.message || 'Key generation failed')
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
    const bundleText = `DKIM SETUP INSTRUCTIONS FOR ${keys.domain.toUpperCase()}
Generated via Giggal.ai client-side DKIM generator

==================================================
1. DNS TXT RECORD
==================================================
Host / Name:
${keys.dnsRecordName}
(or Fully Qualified Domain Name: ${keys.dnsRecordFqdn})

TXT Record Value (Single String):
${keys.dnsRecordValue}

TXT Record Value (255-character Split / Quoted):
${keys.dnsRecordChunked}

BIND Zone Format:
${keys.bindRecord}

==================================================
2. PRIVATE KEY (Install in mail server or MTA)
==================================================
Format: PKCS#1 (Traditional RSA)
${keys.privateKeyPkcs1Pem}

Format: PKCS#8 (Standard)
${keys.privateKeyPkcs8Pem}

==================================================
IMPORTANT DEPLOYMENT NOTES:
- Add the DNS TXT record and verify its propagation BEFORE enabling DKIM signing in your mail server.
- Keep the private key confidential. Never share it or publish it in DNS.
`
    const blob = new Blob([bundleText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${keys.domain}-${keys.selector}-dkim-instructions.txt`
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
          <span>Generated client-side via Web Crypto API. Your private key never touches any server.</span>
        </div>
        <span className="hidden sm:inline text-slate-400 text-xs">Zero network transmission</span>
      </div>

      <div className="p-5 md:p-8 space-y-6">
        {/* Form Inputs */}
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Domain */}
            <div>
              <label htmlFor="dkim-domain" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Domain Name
              </label>
              <input
                id="dkim-domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com"
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">The sending domain for your outgoing mail</p>
            </div>

            {/* Selector */}
            <div>
              <label htmlFor="dkim-selector" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                DKIM Selector
              </label>
              <input
                id="dkim-selector"
                type="text"
                value={selector}
                onChange={(e) => setSelector(e.target.value)}
                placeholder="s2026a"
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                required
              />
              <p className="text-[11px] text-slate-500 mt-1">Identifies this key pair in DNS (e.g. s2026a)</p>
            </div>

            {/* Key Size */}
            <div>
              <label htmlFor="dkim-keysize" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Key Size
              </label>
              <select
                id="dkim-keysize"
                value={keySize}
                onChange={(e) => setKeySize(Number(e.target.value) as DkimKeySize)}
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-slate-700"
              >
                <option value={2048}>2048 bits (Recommended)</option>
                <option value={1024}>1024 bits (Legacy compatibility)</option>
                <option value={4096}>4096 bits (High security)</option>
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                {keySize === 1024
                  ? 'Legacy length, weak against modern cryptanalysis'
                  : keySize === 4096
                  ? 'Exceeds standard 512-byte UDP DNS packet limits'
                  : 'Industry standard for modern mailbox providers'}
              </p>
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
                  <span>Generating RSA key pair in browser...</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>Generate DKIM keys</span>
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
                  <h3 className="text-base font-bold text-white">DNS TXT Record</h3>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md font-mono">
                    {keys.keySize} bits ({keys.recordCharCount} chars)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 hidden sm:inline">Format:</span>
                  <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setDnsFormat('single')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        dnsFormat === 'single' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Single string
                    </button>
                    <button
                      type="button"
                      onClick={() => setDnsFormat('chunked')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        dnsFormat === 'chunked' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      255-char split
                    </button>
                    <button
                      type="button"
                      onClick={() => setDnsFormat('bind')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        dnsFormat === 'bind' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      BIND zone
                    </button>
                  </div>
                </div>
              </div>

              {/* Record Name / Host */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Record Name / Host:
                  </label>
                  <button
                    type="button"
                    onClick={() => handleCopy(keys.dnsRecordName, 'host')}
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
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 font-mono text-xs sm:text-sm text-slate-100 flex items-center justify-between overflow-x-auto">
                  <span className="select-all">{keys.dnsRecordName}</span>
                  <span className="text-slate-500 text-xs hidden md:inline ml-4 shrink-0">
                    (or {keys.dnsRecordFqdn})
                  </span>
                </div>
              </div>

              {/* Record Value */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Record Value (TXT):
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
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy value</span>
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
                    Use this chunked format if your DNS provider (e.g. GoDaddy, Namecheap) limits single TXT strings to 255 characters.
                  </p>
                )}
              </div>
            </div>

            {/* 2. Private Key Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-base font-bold text-slate-900">Private Key</h3>
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
                      PKCS#1 (RSA)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPrivateKeyFormat('pkcs8')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        privateKeyFormat === 'pkcs8' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-600'
                      }`}
                    >
                      PKCS#8
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
                        <span>Hide</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Show</span>
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
                      <span>Click to reveal private key</span>
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
                        <span className="text-emerald-600">Copied key</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy private key</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={downloadPrivateKey}
                    className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download key file</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={downloadBundle}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download setup bundle (.txt)</span>
                </button>
              </div>

              {/* Warning note */}
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-800 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Important deployment rules:</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-amber-900/90 font-medium">
                  <li>Keep this private key confidential. Only configure it inside your mail transfer agent (MTA) or email delivery platform.</li>
                  <li>Publish the DNS TXT record first. Sending signed emails before DNS propagates will cause authentication failures and bounces.</li>
                  <li>Most mail software (Postfix, OpenDKIM, cPanel, Exim) expects the traditional PKCS#1 RSA format.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
