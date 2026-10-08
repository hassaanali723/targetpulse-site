'use client'

import React, { useState, useMemo } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Search,
  Sparkles,
  Info,
  Type,
  Link2,
  Trash2,
} from 'lucide-react'
import {
  checkSpamIssues,
  type SpamCheckResult,
  type Finding,
} from '@/lib/tools/spamWordCheckerCore'

export default function SpamWordCheckerTool() {
  const [subject, setSubject] = useState('')
  const [preview, setPreview] = useState('')
  const [body, setBody] = useState('')
  const [hasChecked, setHasChecked] = useState(false)

  // Run check
  const analysis: SpamCheckResult | null = useMemo(() => {
    if (!hasChecked && !subject.trim() && !body.trim()) return null
    return checkSpamIssues({
      subject,
      preview,
      body,
    })
  }, [subject, preview, body, hasChecked])

  const handleRunCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setHasChecked(true)
  }

  const handleClear = () => {
    setSubject('')
    setPreview('')
    setBody('')
    setHasChecked(false)
  }

  // Highlight body text with matches
  const highlightedBody = useMemo(() => {
    if (!analysis || !body.trim()) return null

    const text = analysis.cleanedBodyText
    const bodyMatches = analysis.wordMatches.filter((m) => m.field === 'body')
    if (bodyMatches.length === 0) return text

    // Sort matches by index
    const sorted = [...bodyMatches].sort((a, b) => a.index - b.index)

    const chunks: React.ReactNode[] = []
    let lastIndex = 0

    sorted.forEach((m, idx) => {
      if (m.index < lastIndex) return // Skip overlapping

      if (m.index > lastIndex) {
        chunks.push(text.slice(lastIndex, m.index))
      }

      const matchText = text.slice(m.index, m.index + m.length)
      chunks.push(
        <mark
          key={`match-${idx}-${m.index}`}
          title={`${m.category}: ${m.alternative ? `Try "${m.alternative}"` : 'Consider plainer phrasing'}`}
          className="bg-amber-200/80 text-amber-950 px-1 py-0.5 rounded font-medium cursor-help"
        >
          {matchText}
        </mark>
      )
      lastIndex = m.index + m.length
    })

    if (lastIndex < text.length) {
      chunks.push(text.slice(lastIndex))
    }

    return chunks
  }, [analysis, body])

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
        <form onSubmit={handleRunCheck} className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="swc-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Subject Line <span className="text-red-500">*</span>
              </label>
              <span className={`text-[11px] font-medium ${subject.length > 60 ? 'text-amber-600 font-semibold' : 'text-slate-400'}`}>
                {subject.length}/60 chars {subject.length > 60 ? '(readability caution)' : ''}
              </span>
            </div>
            <input
              id="swc-subject"
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
                setHasChecked(true)
              }}
              placeholder="e.g. Quick question about our proposal"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
            />
          </div>

          <div>
            <label htmlFor="swc-preview" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preview Text <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="swc-preview"
              type="text"
              value={preview}
              onChange={(e) => {
                setPreview(e.target.value)
                setHasChecked(true)
              }}
              placeholder="e.g. A brief follow-up on our conversation last week"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="swc-body" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Email Body <span className="text-slate-400 font-normal lowercase">(plain text or copied HTML)</span>
              </label>
              {body.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs text-slate-400 hover:text-red-600 transition flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>
            <textarea
              id="swc-body"
              rows={8}
              value={body}
              onChange={(e) => {
                setBody(e.target.value)
                setHasChecked(true)
              }}
              placeholder="Paste your email draft or newsletter HTML here..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-sans leading-relaxed"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={!subject.trim() && !body.trim()}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition"
            >
              <Search className="w-4 h-4" />
              <span>Check Email Copy</span>
            </button>
          </div>
        </form>

        {/* ANALYSIS OUTPUT */}
        {analysis && (
          <div className="pt-6 border-t border-slate-200 space-y-6">
            {/* Plain Summary Badge (No numeric score) */}
            <div
              className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                analysis.verdict === 'Looks clean'
                  ? 'border-emerald-200 bg-emerald-50/60'
                  : analysis.verdict === 'Needs work'
                  ? 'border-red-200 bg-red-50/60'
                  : 'border-amber-200 bg-amber-50/60'
              }`}
            >
              <div className="flex items-center gap-3">
                {analysis.verdict === 'Looks clean' && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                )}
                {analysis.verdict === 'A few things to fix' && (
                  <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                )}
                {analysis.verdict === 'Needs work' && (
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                )}

                <div>
                  <h3
                    className={`text-base font-bold ${
                      analysis.verdict === 'Looks clean'
                        ? 'text-emerald-950'
                        : analysis.verdict === 'Needs work'
                        ? 'text-red-950'
                        : 'text-amber-950'
                    }`}
                  >
                    Summary: {analysis.verdict}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">{analysis.summaryText}</p>
                </div>
              </div>

              {/* Stats pill */}
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <span>{analysis.stats.bodyWords} words</span>
                <span>·</span>
                <span>{analysis.stats.linkCount} links</span>
                <span>·</span>
                <span>{analysis.findings.length} findings</span>
              </div>
            </div>

            {/* Highlighted Body Preview */}
            {body.trim() && (
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Highlighted Copy Preview
                </span>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 max-h-64 overflow-y-auto font-sans text-xs text-slate-800 leading-relaxed whitespace-pre-wrap select-text">
                  {highlightedBody}
                </div>
                <p className="text-[11px] text-slate-400">
                  Hover over highlighted words to see the category and suggested plainer alternative.
                </p>
              </div>
            )}

            {/* Grouped Findings */}
            <div className="space-y-5">
              {/* Worth Fixing */}
              {analysis.worthFixing.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[11px] font-bold">
                      Worth fixing ({analysis.worthFixing.length})
                    </span>
                    <span className="text-xs text-slate-500">Items that frequently trigger filter scrutiny</span>
                  </div>

                  <div className="border border-red-200/80 rounded-xl divide-y divide-red-100 bg-white overflow-hidden shadow-sm">
                    {analysis.worthFixing.map((f) => (
                      <div key={f.id} className="p-4 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-red-900">
                            {f.type === 'structural' ? f.title : `Spam word: "${f.phrase}" (${f.field})`}
                          </p>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                            {f.type === 'structural' ? 'Formatting' : f.category}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{f.reason}</p>
                        <p className="text-indigo-700 font-semibold leading-relaxed">
                          Suggestion: {f.suggestion}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Worth a Look */}
              {analysis.worthALook.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                      Worth a look ({analysis.worthALook.length})
                    </span>
                    <span className="text-xs text-slate-500">
                      Context-dependent words and readability recommendations
                    </span>
                  </div>

                  <div className="border border-amber-200/80 rounded-xl divide-y divide-amber-100 bg-white overflow-hidden shadow-sm">
                    {analysis.worthALook.map((f) => (
                      <div key={f.id} className="p-4 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-amber-950">
                            {f.type === 'structural'
                              ? f.categoryLabel === 'readability'
                                ? f.title.toLowerCase().startsWith('readability')
                                  ? f.title
                                  : `Readability: ${f.title}`
                                : f.title
                              : `Phrase in body: "${f.phrase}"`}
                          </p>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                            {f.type === 'structural'
                              ? f.categoryLabel === 'readability'
                                ? 'Readability note'
                                : 'Formatting'
                              : f.category}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{f.reason}</p>
                        <p className="text-indigo-700 font-semibold leading-relaxed">
                          Suggestion: {f.suggestion}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* If zero findings */}
              {analysis.findings.length === 0 && (
                <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p>
                    No spam trigger phrases or structural warnings detected. Your subject line and copy follow clean standards.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
