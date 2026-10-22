'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import {
  Upload,
  FileText,
  Copy,
  Check,
  Download,
  Trash2,
  Filter,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  FileSpreadsheet,
} from 'lucide-react'
import {
  extractEmails,
  type ExtractorOptions,
  type ExtractionResult,
} from '@/lib/tools/emailExtractorCore'
import { extractorToolStrings } from '@/lib/i18n/tools/extractorToolStrings'
import type { Locale } from '@/lib/i18n/clusters'
import type { ExtractorWorkerRequest, ExtractorWorkerResponse } from './extractor.worker'

// The external sign-up page; the same for every language.
const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'

export default function EmailExtractorTool({ locale = 'en' }: { locale?: Locale }) {
  // The wording lives in lib/i18n/tools/extractorToolStrings.ts.
  const t = extractorToolStrings(locale)
  const [inputText, setInputText] = useState('')
  const [fileNameList, setFileNameList] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isReadingFile, setIsReadingFile] = useState(false)
  const [isWorkerBusy, setIsWorkerBusy] = useState(false)
  const [progressMsg, setProgressMsg] = useState('')

  // Options
  const [deduplicate, setDeduplicate] = useState(true)
  const [lowercaseWholeAddress, setLowercaseWholeAddress] = useState(false)
  const [writtenOutObfuscation, setWrittenOutObfuscation] = useState(false)
  const [excludeRoleBased, setExcludeRoleBased] = useState(false)
  const [sortBy, setSortBy] = useState<'none' | 'alpha' | 'domain'>('none')
  const [includeDomainsInput, setIncludeDomainsInput] = useState('')
  const [excludeDomainsInput, setExcludeDomainsInput] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Copy feedback
  const [copiedType, setCopiedType] = useState<'newline' | 'comma' | null>(null)

  // Pagination
  const [page, setPage] = useState(1)
  const pageSize = 100

  const fileInputRef = useRef<HTMLInputElement>(null)
  const workerRef = useRef<Worker | null>(null)
  const reqIdRef = useRef(0)
  // The latest request, so a worker failure can rerun it on the main thread.
  const lastReqRef = useRef<{ text: string; opts: ExtractorOptions } | null>(null)

  const [extractionResult, setExtractionResult] = useState<ExtractionResult>({
    items: [],
    totalFound: 0,
    uniqueCount: 0,
    topDomains: [],
  })

  // Set up Web Worker for non-blocking extraction
  useEffect(() => {
    let worker: Worker
    try {
      // Keep this exact `new Worker(new URL(..., import.meta.url))` form.
      // Webpack only bundles the worker file when it sees this pattern.
      worker = new Worker(new URL('./extractor.worker.ts', import.meta.url))
    } catch {
      workerRef.current = null
      return
    }

    // If the worker fails, stop using it and finish the latest request on
    // the main thread, so the loading overlay can never stay up.
    const fallBackToMainThread = () => {
      worker.terminate()
      workerRef.current = null
      const last = lastReqRef.current
      if (last) setExtractionResult(extractEmails(last.text, last.opts))
      setIsWorkerBusy(false)
    }

    // The worker sends no text. A failure carries a code (reply.code), and the
    // tool answers it by finishing on the main thread, with no message to show.
    worker.onmessage = (e: MessageEvent<ExtractorWorkerResponse>) => {
      const reply = e.data
      if (reply.id !== reqIdRef.current) return
      if (reply.success && reply.result) {
        setExtractionResult(reply.result)
        setIsWorkerBusy(false)
      } else {
        fallBackToMainThread()
      }
    }
    worker.onerror = fallBackToMainThread

    workerRef.current = worker

    return () => {
      worker.terminate()
    }
  }, [])

  // Parse filters
  const options: ExtractorOptions = useMemo(
    () => ({
      deduplicate,
      lowercaseWholeAddress,
      writtenOutObfuscation,
      sortBy,
      excludeRoleBased,
      includeDomains: includeDomainsInput
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      excludeDomains: excludeDomainsInput
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    }),
    [
      deduplicate,
      lowercaseWholeAddress,
      writtenOutObfuscation,
      sortBy,
      excludeRoleBased,
      includeDomainsInput,
      excludeDomainsInput,
    ]
  )

  // Run extraction via Web Worker (or synchronous fallback)
  const runExtraction = useCallback(
    (text: string, opts: ExtractorOptions) => {
      if (!text.trim()) {
        setExtractionResult({ items: [], totalFound: 0, uniqueCount: 0, topDomains: [] })
        setIsWorkerBusy(false)
        return
      }

      const currentId = ++reqIdRef.current
      lastReqRef.current = { text, opts }
      if (workerRef.current) {
        setIsWorkerBusy(true)
        const request: ExtractorWorkerRequest = { id: currentId, rawText: text, options: opts }
        workerRef.current.postMessage(request)
      } else {
        const res = extractEmails(text, opts)
        setExtractionResult(res)
      }
    },
    []
  )

  useEffect(() => {
    runExtraction(inputText, options)
  }, [inputText, options, runExtraction])

  const totalPages = Math.max(1, Math.ceil(extractionResult.items.length / pageSize))
  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize
    return extractionResult.items.slice(start, start + pageSize)
  }, [extractionResult.items, page, pageSize])

  // Handle file uploads
  const handleFiles = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return

    setIsReadingFile(true)
    setProgressMsg(t.readingFiles)
    const names: string[] = []
    let combinedText = inputText ? inputText + '\n' : ''

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        names.push(file.name)
        setProgressMsg(t.readingFile(file.name, i + 1, files.length))

        const ext = file.name.split('.').pop()?.toLowerCase() || ''

        if (ext === 'xlsx' || ext === 'xls') {
          const buffer = await file.arrayBuffer()
          const XLSX = await import('xlsx')
          const workbook = XLSX.read(buffer, { type: 'array' })
          for (const sheetName of workbook.SheetNames) {
            const sheet = workbook.Sheets[sheetName]
            const csv = XLSX.utils.sheet_to_csv(sheet)
            combinedText += csv + '\n'
          }
        } else {
          const text = await file.text()
          combinedText += text + '\n'
        }
      }

      setInputText(combinedText)
      setFileNameList((prev) => Array.from(new Set([...prev, ...names])))
      setPage(1)
    } catch (err) {
      console.error('File parsing error:', err)
      alert(t.fileError)
    } finally {
      setIsReadingFile(false)
      setProgressMsg('')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  // Copy helpers
  const copyEmails = async (separator: '\n' | ', ') => {
    const list = extractionResult.items.map((i) => i.email).join(separator)
    if (!list) return

    try {
      await navigator.clipboard.writeText(list)
      setCopiedType(separator === '\n' ? 'newline' : 'comma')
      setTimeout(() => setCopiedType(null), 2500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = list
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedType(separator === '\n' ? 'newline' : 'comma')
      setTimeout(() => setCopiedType(null), 2500)
    }
  }

  // Export TXT
  const downloadTxt = () => {
    const content = extractionResult.items.map((i) => i.email).join('\n')
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = t.fileTxt
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Export CSV
  const downloadCsv = () => {
    const rows = [t.csvHeader]
    for (const item of extractionResult.items) {
      rows.push(`"${item.email}","${item.domain}","${item.tld}"`)
    }
    // Localized headers carry accents (Domínio); the byte order mark makes Excel read the file as UTF-8.
    // English keeps its original bytes.
    const content = (locale === 'en' ? '' : '﻿') + rows.join('\r\n')
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = t.fileCsv
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    setInputText('')
    setFileNameList([])
    setPage(1)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">

      <div className="p-5 md:p-8 space-y-6">
        {/* Input section: Drag & Drop + Textarea */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="extractor-input" className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              {t.inputLabel}
            </label>
            {inputText && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                {t.clearAll}
              </button>
            )}
          </div>

          {/* Drag & drop box */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-indigo-500 bg-indigo-50/50 ring-4 ring-indigo-500/10'
                : 'border-slate-300 hover:border-slate-400 bg-slate-50/70 hover:bg-slate-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".txt,.csv,.tsv,.log,.md,.json,.xml,.html,.htm,.eml,.vcf,.xlsx,.xls"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
              className="hidden"
              id="file-upload-input"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-slate-700">
                {t.dropBefore}
                <span className="text-indigo-600 underline">{t.dropLink}</span>
                {t.dropAfter || null}
              </p>
              <p className="text-xs text-slate-500">
                {t.supports}
              </p>
            </div>
          </div>

          {/* Uploaded files chips */}
          {fileNameList.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {fileNameList.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                >
                  {name.endsWith('.xlsx') || name.endsWith('.xls') ? (
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <FileText className="w-3.5 h-3.5 text-indigo-600" />
                  )}
                  {name}
                </span>
              ))}
            </div>
          )}

          {/* Large Text Area */}
          <div className="relative">
            <textarea
              id="extractor-input"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value)
                setPage(1)
              }}
              placeholder={t.placeholder}
              rows={6}
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-mono"
            />
            {(isReadingFile || isWorkerBusy) && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center gap-3 text-indigo-600 font-semibold text-sm">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{progressMsg || t.processing}</span>
              </div>
            )}
          </div>
        </div>

        {/* Options & Filters Bar */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-700">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={deduplicate}
                  onChange={(e) => {
                    setDeduplicate(e.target.checked)
                    setPage(1)
                  }}
                  className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <span>{t.optDeduplicate}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={lowercaseWholeAddress}
                  onChange={(e) => {
                    setLowercaseWholeAddress(e.target.checked)
                    setPage(1)
                  }}
                  className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <span>{t.optLowercase}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={writtenOutObfuscation}
                  onChange={(e) => {
                    setWrittenOutObfuscation(e.target.checked)
                    setPage(1)
                  }}
                  className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <span>{t.optWrittenOut}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={excludeRoleBased}
                  onChange={(e) => {
                    setExcludeRoleBased(e.target.checked)
                    setPage(1)
                  }}
                  className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <span>{t.optHideRole}</span>
              </label>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <span>{t.sortLabel}</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as 'none' | 'alpha' | 'domain')
                    setPage(1)
                  }}
                  className="text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="none">{t.sortNone}</option>
                  <option value="alpha">{t.sortAlpha}</option>
                  <option value="domain">{t.sortDomain}</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`text-xs font-semibold px-3 py-1 rounded-lg border flex items-center gap-1 transition-colors ${
                  showFilters || includeDomainsInput || excludeDomainsInput
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {t.domainFilters}
              </button>
            </div>
          </div>

          {/* Collapsible domain filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.includeLabel}</label>
                <input
                  type="text"
                  value={includeDomainsInput}
                  onChange={(e) => {
                    setIncludeDomainsInput(e.target.value)
                    setPage(1)
                  }}
                  placeholder={t.includePlaceholder}
                  className="w-full text-xs px-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.excludeLabel}</label>
                <input
                  type="text"
                  value={excludeDomainsInput}
                  onChange={(e) => {
                    setExcludeDomainsInput(e.target.value)
                    setPage(1)
                  }}
                  placeholder={t.excludePlaceholder}
                  className="w-full text-xs px-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Area */}
        {extractionResult.items.length > 0 ? (
          <div className="space-y-6 pt-2">
            {/* Counts & Actions Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 text-white">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-black text-emerald-400">
                    {extractionResult.items.length.toLocaleString()}
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    {deduplicate ? t.uniqueAddresses : t.addressesListed}
                  </div>
                </div>
                {deduplicate && extractionResult.totalFound > extractionResult.items.length && (
                  <div className="border-l border-slate-700 pl-6">
                    <div className="text-2xl font-black text-slate-400">
                      {extractionResult.totalFound.toLocaleString()}
                    </div>
                    <div className="text-xs font-medium text-slate-400">{t.totalDetected}</div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyEmails('\n')}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  {copiedType === 'newline' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyList}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => copyEmails(', ')}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  {copiedType === 'comma' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyComma}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={downloadTxt}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadTxt}</span>
                </button>

                <button
                  type="button"
                  onClick={downloadCsv}
                  className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadCsv}</span>
                </button>
              </div>
            </div>

            {/* Top Domains Chips */}
            {extractionResult.topDomains.length > 0 && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">{t.topDomains}</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {extractionResult.topDomains.slice(0, 10).map((td) => (
                    <span
                      key={td.domain}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      <span>{td.domain}</span>
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded text-[11px] font-mono">
                        {td.count}
                      </span>
                    </span>
                  ))}
                  {extractionResult.topDomains.length > 10 && (
                    <span className="text-xs text-slate-500 self-center">
                      {t.moreDomains(extractionResult.topDomains.length - 10)}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Results Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto max-h-96">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold sticky top-0">
                    <tr>
                      <th className="py-2.5 px-4 w-12 text-slate-400">{t.thIndex}</th>
                      <th className="py-2.5 px-4">{t.thEmail}</th>
                      <th className="py-2.5 px-4">{t.thDomain}</th>
                      <th className="py-2.5 px-4 hidden md:table-cell">{t.thTld}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white font-mono text-xs">
                    {paginatedItems.map((item, idx) => {
                      const absoluteIdx = (page - 1) * pageSize + idx + 1
                      return (
                        <tr key={item.email + absoluteIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2 px-4 text-slate-400 font-sans">{absoluteIdx}</td>
                          <td className="py-2 px-4 font-semibold text-slate-900 select-all">
                            {item.email}
                          </td>
                          <td className="py-2 px-4 text-slate-600 select-all">
                            {item.domain}
                          </td>
                          <td className="py-2 px-4 text-slate-500 hidden md:table-cell">
                            .{item.tld}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span>
                    {t.showing(
                      (page - 1) * pageSize + 1,
                      Math.min(page * pageSize, extractionResult.items.length),
                      extractionResult.items.length
                    )}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={page <= 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className="p-1 rounded border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-2 font-semibold">
                      {page} / {totalPages}
                    </span>
                    <button
                      type="button"
                      disabled={page >= totalPages}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      className="p-1 rounded border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Next-Step Panel */}
            <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-xl p-5 md:p-6 border border-indigo-800/60 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">{t.nextTitle}</h3>
                  <p className="text-xs md:text-sm text-slate-300 max-w-xl">{t.nextText}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href={SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs md:text-sm transition-colors whitespace-nowrap"
                  >
                    <span>{t.verifyButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href={t.checkOneHref}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs md:text-sm transition-colors whitespace-nowrap border border-slate-700"
                  >
                    <span>{t.checkOneButton}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          inputText.trim() && (
            <div className="text-center py-8 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-sm">
              {t.noResults}
            </div>
          )
        )}
      </div>
    </div>
  )
}
