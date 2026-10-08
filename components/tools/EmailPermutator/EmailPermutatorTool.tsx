'use client'

import React, { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import {
  Copy,
  Check,
  Download,
  Upload,
  RefreshCw,
  Search,
  ExternalLink,
  Users,
  User,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react'
import {
  cleanDomain,
  isValidDomain,
  parseDomains,
  generatePermutations,
  parseCsvRows,
  detectCsvColumns,
  type GeneratedEmail,
} from '@/lib/tools/emailPermutatorCore'

export default function EmailPermutatorTool() {
  const [mode, setMode] = useState<'single' | 'bulk'>('single')

  // Single mode state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [nickname, setNickname] = useState('')
  const [domainsInput, setDomainsInput] = useState('')

  // Bulk mode state
  const [csvText, setCsvText] = useState('')
  const [bulkRows, setBulkRows] = useState<string[][]>([])
  const [colFirst, setColFirst] = useState(0)
  const [colLast, setColLast] = useState(1)
  const [colDomain, setColDomain] = useState(2)
  const [hasHeader, setHasHeader] = useState(true)
  const [isProcessingBulk, setIsProcessingBulk] = useState(false)
  const [bulkResults, setBulkResults] = useState<
    { firstName: string; lastName: string; domain: string; email: string; pattern: string }[]
  >([])

  // UI / Filter / Copy state
  const [results, setResults] = useState<GeneratedEmail[]>([])
  const [searchFilter, setSearchFilter] = useState('')
  const [copiedType, setCopiedType] = useState<'all' | string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Single mode domain validation
  const domainValidation = useMemo(() => {
    if (!domainsInput.trim()) return { valid: [], invalid: [] }
    return parseDomains(domainsInput)
  }, [domainsInput])

  // Handle single mode generation
  const handleGenerateSingle = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!firstName.trim()) return

    const { valid } = parseDomains(domainsInput)
    if (valid.length === 0) return

    const res = generatePermutations({
      firstName: firstName.trim(),
      lastName: lastName.trim() || undefined,
      middleName: middleName.trim() || undefined,
      nickname: nickname.trim() || undefined,
      domains: valid,
    })

    setResults(res)
    setSearchFilter('')
  }

  // Handle Bulk file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      if (text) {
        setCsvText(text)
        processCsvInput(text)
      }
    }
    reader.readAsText(file)
  }

  const processCsvInput = (text: string) => {
    const parsed = parseCsvRows(text)
    if (parsed.length === 0) return
    setBulkRows(parsed.slice(0, 5000))

    const colDetection = detectCsvColumns(parsed[0])
    setHasHeader(colDetection.hasHeader)
    setColFirst(colDetection.firstNameIndex >= 0 ? colDetection.firstNameIndex : 0)
    setColLast(colDetection.lastNameIndex >= 0 ? colDetection.lastNameIndex : 1)
    setColDomain(colDetection.domainIndex >= 0 ? colDetection.domainIndex : 2)
  }

  // Generate Bulk
  const handleGenerateBulk = () => {
    if (bulkRows.length === 0) return
    setIsProcessingBulk(true)

    const startIndex = hasHeader ? 1 : 0
    const rowsToProcess = bulkRows.slice(startIndex, startIndex + 5000)

    const generated: {
      firstName: string
      lastName: string
      domain: string
      email: string
      pattern: string
    }[] = []

    for (const row of rowsToProcess) {
      const fn = row[colFirst]?.trim() || ''
      const ln = colLast >= 0 ? row[colLast]?.trim() || '' : ''
      const domRaw = row[colDomain]?.trim() || ''
      const cleanedD = cleanDomain(domRaw)

      if (!fn || !cleanedD || !isValidDomain(cleanedD)) continue

      const perms = generatePermutations({
        firstName: fn,
        lastName: ln || undefined,
        domains: [cleanedD],
      })

      for (const p of perms) {
        generated.push({
          firstName: fn,
          lastName: ln,
          domain: cleanedD,
          email: p.email,
          pattern: p.pattern,
        })
      }
    }

    setBulkResults(generated)
    setIsProcessingBulk(false)
  }

  // Filtered single results
  const filteredResults = useMemo(() => {
    if (!searchFilter.trim()) return results
    const q = searchFilter.toLowerCase()
    return results.filter((r) => r.email.toLowerCase().includes(q) || r.pattern.toLowerCase().includes(q))
  }, [results, searchFilter])

  // Copy helper
  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2500)
    }
  }

  // Downloads
  const downloadSingleTxt = () => {
    const text = results.map((r) => r.email).join('\n')
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `permutations-${cleanDomain(domainsInput || 'emails')}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadSingleCsv = () => {
    const rows = ['pattern,email,domain']
    for (const r of results) {
      rows.push(`"${r.pattern}","${r.email}","${r.domain}"`)
    }
    const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `permutations-${cleanDomain(domainsInput || 'emails')}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadBulkCsv = () => {
    const rows = ['first_name,last_name,domain,email,pattern']
    for (const r of bulkResults) {
      rows.push(`"${r.firstName}","${r.lastName}","${r.domain}","${r.email}","${r.pattern}"`)
    }
    const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'email-permutator-bulk.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Mode Switcher Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          type="button"
          onClick={() => setMode('single')}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            mode === 'single'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Single Person</span>
        </button>
        <button
          type="button"
          onClick={() => setMode('bulk')}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all border-b-2 ${
            mode === 'bulk'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Bulk CSV</span>
        </button>
      </div>

      {/* SINGLE MODE */}
      {mode === 'single' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <form onSubmit={handleGenerateSingle} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ep-firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="ep-firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                />
              </div>

              <div>
                <label htmlFor="ep-lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Last Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="ep-lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ep-middleName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Middle Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="ep-middleName"
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  placeholder="Marie"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                />
              </div>

              <div>
                <label htmlFor="ep-nickname" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nickname <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="ep-nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Janey"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ep-domains" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Company Domain(s) <span className="text-red-500">*</span>
              </label>
              <input
                id="ep-domains"
                type="text"
                value={domainsInput}
                onChange={(e) => setDomainsInput(e.target.value)}
                placeholder="example.com, acme.org"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
              />
              <p className="text-xs text-slate-500 mt-1.5">
                Separate multiple domains with commas. We strip http://, www., paths, and leading @ automatically.
              </p>
              {domainValidation.invalid.length > 0 && (
                <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Invalid hostnames will be ignored: {domainValidation.invalid.join(', ')}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!firstName.trim() || domainValidation.valid.length === 0}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Generate Formats</span>
            </button>
          </form>

          {/* SINGLE RESULTS */}
          {results.length > 0 && (
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Generated Formats ({results.length})
                  </h3>
                  <p className="text-xs text-slate-500">Ordered with most common company standards first.</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(results.map((r) => r.email).join('\n'), 'all')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    {copiedType === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copiedType === 'all' ? 'Copied All' : 'Copy All'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={downloadSingleTxt}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Download TXT</span>
                  </button>
                  <button
                    type="button"
                    onClick={downloadSingleCsv}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Download CSV</span>
                  </button>
                </div>
              </div>

              {/* Filter */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="Filter generated formats..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Formats scrollable box */}
              <div className="max-h-96 overflow-y-auto border border-slate-200 rounded-xl divide-y divide-slate-100 bg-slate-50/50">
                {filteredResults.map((item, idx) => (
                  <div
                    key={`${item.email}-${idx}`}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-white transition text-xs"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="font-mono text-slate-800 font-semibold truncate select-all">{item.email}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono font-medium text-slate-600">
                        {item.pattern}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.email, item.email)}
                      aria-label={`Copy ${item.email}`}
                      className="p-1.5 text-slate-400 hover:text-indigo-600 transition"
                    >
                      {copiedType === item.email ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>

              {/* Exact Next Step Panel */}
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5 space-y-3">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  These are guesses. Verify them to find the one that exists. On catch-all domains, most checkers report every format as valid.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/sign-up"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    <span>Verify these addresses</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                  <Link
                    href="/email-checker"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition"
                  >
                    <span>Check one address</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* BULK MODE */}
      {mode === 'bulk' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Upload CSV or Paste Rows (Up to 5,000)
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,text/csv,text/plain"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-sm"
                >
                  <Upload className="w-4 h-4 text-slate-500" />
                  <span>Upload CSV File</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="ep-bulk-text" className="block text-xs font-semibold text-slate-600 mb-1">
                Or paste CSV rows:
              </label>
              <textarea
                id="ep-bulk-text"
                rows={5}
                value={csvText}
                onChange={(e) => {
                  setCsvText(e.target.value)
                  processCsvInput(e.target.value)
                }}
                placeholder="First Name,Last Name,Domain&#10;Jane,Doe,example.com&#10;Alex,Smith,acme.org"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>

            {bulkRows.length > 0 && (
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    Loaded {bulkRows.length} rows
                  </span>
                  <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasHeader}
                      onChange={(e) => setHasHeader(e.target.checked)}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>First row is header</span>
                  </label>
                </div>

                {/* Column mapping selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                      First Name Column
                    </label>
                    <select
                      value={colFirst}
                      onChange={(e) => setColFirst(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-800"
                    >
                      {bulkRows[0].map((val, idx) => (
                        <option key={`col-fn-${idx}`} value={idx}>
                          Col {idx + 1}: {val || `(empty)`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                      Last Name Column
                    </label>
                    <select
                      value={colLast}
                      onChange={(e) => setColLast(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-800"
                    >
                      <option value={-1}>(None / Optional)</option>
                      {bulkRows[0].map((val, idx) => (
                        <option key={`col-ln-${idx}`} value={idx}>
                          Col {idx + 1}: {val || `(empty)`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                      Domain Column
                    </label>
                    <select
                      value={colDomain}
                      onChange={(e) => setColDomain(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-800"
                    >
                      {bulkRows[0].map((val, idx) => (
                        <option key={`col-dom-${idx}`} value={idx}>
                          Col {idx + 1}: {val || `(empty)`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateBulk}
                  disabled={isProcessingBulk}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition disabled:opacity-50"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Generate All Permutations</span>
                </button>
              </div>
            )}

            {/* Bulk Results Summary & Download */}
            {bulkResults.length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Generated {bulkResults.length} permutations
                    </h3>
                    <p className="text-xs text-slate-500">
                      Download the CSV with first_name, last_name, domain, email, and pattern columns.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={downloadBulkCsv}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Bulk CSV</span>
                  </button>
                </div>

                {/* Exact Next Step Panel */}
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5 space-y-3">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    These are guesses. Verify them to find the one that exists. On catch-all domains, most checkers report every format as valid.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="/sign-up"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                    >
                      <span>Verify these addresses</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                    <Link
                      href="/email-checker"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition"
                    >
                      <span>Check one address</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
