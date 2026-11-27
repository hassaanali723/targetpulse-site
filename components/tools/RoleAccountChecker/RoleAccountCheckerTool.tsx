'use client'

import React, { useState, useMemo, useRef } from 'react'
import {
  Users,
  ShieldAlert,
  Download,
  Upload,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Trash2,
  FileSpreadsheet,
  ArrowRight,
  Info,
  Check,
  Search,
} from 'lucide-react'
import {
  classifyRoleBatch,
  generateExportCsv,
  type RoleCategory,
  type RoleClassifiedItem,
  type RoleAuditSummary,
} from '@/lib/tools/roleAccountCheckerPure'

const SAMPLE_LIST = `john.smith@acmecorp.com
support@acmecorp.com
sarah.connor@cyberdyne.io
sales@cyberdyne.io
info@cloudtech.net
abuse@spamfilter.org
noreply@notifications.service.com
billing@cloudtech.net
postmaster@mailserver.com
alex.kumar@fintechscale.co
team@venturecapital.com
admin.davidson@enterprise.org
careers@startupgrowth.io
helpdesk@internetservice.com
invalid-address-without-at`

export default function RoleAccountCheckerTool() {
  const [inputText, setInputText] = useState('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedType, setCopiedType] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Derived or executed classification
  const classification = useMemo(() => {
    if (!inputText.trim()) return null
    return classifyRoleBatch(inputText)
  }, [inputText])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    setIsProcessing(true)

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      setInputText(content || '')
      setIsProcessing(false)
    }
    reader.onerror = () => {
      setIsProcessing(false)
      alert('Failed to read the file. Please check file permissions.')
    }
    reader.readAsText(file)
  }

  const handleLoadSample = () => {
    setInputText(SAMPLE_LIST)
    setFileName('sample_b2b_list.txt')
  }

  const handleClear = () => {
    setInputText('')
    setFileName(null)
    setSearchQuery('')
    setCategoryFilter('all')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleExport = (mode: 'personal_only' | 'personal_and_smb' | 'full_audit') => {
    if (!classification || classification.items.length === 0) return
    const csvContent = generateExportCsv(classification.items, mode)
    if (!csvContent) return

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `giggal_${mode}_${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    setCopiedType(mode)
    setTimeout(() => setCopiedType(null), 2000)
  }

  // Filtered display items
  const filteredItems = useMemo(() => {
    if (!classification) return []
    return classification.items.filter((item: RoleClassifiedItem) => {
      // Category filter
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return false
      }
      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        return (
          item.normalizedEmail.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          (item.matchedPrefix && item.matchedPrefix.toLowerCase().includes(q))
        )
      }
      return true
    })
  }, [classification, categoryFilter, searchQuery])

  const summary = classification?.summary

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Input Workbench Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Role-Based Email Classifier & List Cleaner
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Filter out RFC 2142 role accounts, spam traps, and generic inboxes before launching cold campaigns.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleLoadSample}
              type="button"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              Load Sample List
            </button>
            {inputText && (
              <button
                onClick={handleClear}
                type="button"
                className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value)
                setFileName(null)
              }}
              placeholder={`Paste a list of email addresses, comma-separated emails, or paste CSV rows here...
Example:
john.doe@company.com
sales@company.com
support@company.com
abuse@company.com`}
              rows={7}
              className="w-full font-mono text-sm p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.txt,.tsv"
                onChange={handleFileUpload}
                className="hidden"
                id="role-checker-file-upload"
              />
              <label
                htmlFor="role-checker-file-upload"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Upload className="w-4 h-4 text-slate-500" />
                {fileName ? `File: ${fileName}` : 'Upload CSV / TXT list'}
              </label>
              {fileName && (
                <span className="text-xs text-slate-500 font-mono">
                  {classification?.summary.totalProcessed || 0} rows found
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Processes 100% locally in your browser. No emails sent to servers.
            </p>
          </div>
        </div>
      </div>

      {/* Results Overview */}
      {summary && (
        <div className="space-y-6">
          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-medium text-slate-500">Total Valid Emails</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">
                  {summary.totalProcessed}
                </span>
                {summary.duplicatesCount > 0 && (
                  <span className="text-xs text-slate-400">
                    ({summary.duplicatesCount} dupes merged)
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-emerald-200/60 shadow-sm">
              <span className="text-xs font-medium text-emerald-700">Personal (Safe to Cold Email)</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-emerald-600">
                  {summary.personalCount}
                </span>
                <span className="text-xs font-semibold text-emerald-600">
                  {summary.totalProcessed > 0
                    ? Math.round((summary.personalCount / summary.totalProcessed) * 100)
                    : 0}
                  %
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200/60 shadow-sm">
              <span className="text-xs font-medium text-amber-700">Role & Generic Inboxes</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-600">
                  {summary.generalBusinessCount + summary.supportOpsCount + summary.complianceSecurityCount + summary.automatedSystemCount}
                </span>
                <span className="text-xs font-semibold text-amber-600">
                  {summary.rolePercentage}%
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-rose-200/60 shadow-sm">
              <span className="text-xs font-medium text-rose-700">Critical Risk (Abuse / No-Reply)</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-rose-600">
                  {summary.complianceSecurityCount + summary.automatedSystemCount}
                </span>
                <span className="text-xs text-rose-500">high trap risk</span>
              </div>
            </div>
          </div>

          {/* Export Action Bar */}
          <div className="bg-white text-slate-900 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-200 shadow-sm">
            <div>
              <h3 className="font-semibold text-base text-slate-900 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                Export Cleaned Lists
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Download filtered CSVs ready for your cold email sender or outreach platform.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              <button
                type="button"
                onClick={() => handleExport('personal_only')}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm flex items-center gap-1.5"
              >
                {copiedType === 'personal_only' ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Download className="w-4 h-4 text-emerald-100" />
                )}
                Personal Only ({summary.personalCount})
              </button>

              <button
                type="button"
                onClick={() => handleExport('personal_and_smb')}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all flex items-center gap-1.5"
              >
                {copiedType === 'personal_and_smb' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Download className="w-4 h-4 text-slate-600" />
                )}
                Personal + Sales/SMB ({summary.personalCount + summary.generalBusinessCount})
              </button>

              <button
                type="button"
                onClick={() => handleExport('full_audit')}
                className="px-3.5 py-2 text-xs font-medium rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all flex items-center gap-1.5"
              >
                {copiedType === 'full_audit' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Download className="w-4 h-4 text-slate-600" />
                )}
                Full Audit CSV
              </button>
            </div>
          </div>

          {/* Interactive Table with Category Pills */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Filter and Search header */}
            <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    categoryFilter === 'all'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({summary.totalProcessed})
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('personal')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    categoryFilter === 'personal'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  Personal ({summary.personalCount})
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('general_business')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    categoryFilter === 'general_business'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  Sales / Business ({summary.generalBusinessCount})
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('support_ops')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    categoryFilter === 'support_ops'
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  Support / Ops ({summary.supportOpsCount})
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('compliance_security')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    categoryFilter === 'compliance_security'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                  }`}
                >
                  Compliance / Abuse ({summary.complianceSecurityCount})
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('automated_system')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    categoryFilter === 'automated_system'
                      ? 'bg-rose-600 text-white'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  No-Reply ({summary.automatedSystemCount})
                </button>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search emails or prefixes..."
                  className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto max-h-[500px]">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-slate-50 text-slate-500 sticky top-0 z-10 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold">Email Address</th>
                    <th className="py-2.5 px-4 font-semibold">Classification</th>
                    <th className="py-2.5 px-4 font-semibold">Cold Outreach Action</th>
                    <th className="py-2.5 px-4 font-semibold">Technical Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredItems.slice(0, 500).map((item: RoleClassifiedItem, idx: number) => {
                    return (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-4 font-mono font-medium text-slate-900">
                          {item.normalizedEmail}
                        </td>
                        <td className="py-2.5 px-4">
                          {item.category === 'personal' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              Personal
                            </span>
                          )}
                          {item.category === 'general_business' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800">
                              General / Sales
                            </span>
                          )}
                          {item.category === 'support_ops' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">
                              Support / Ops
                            </span>
                          )}
                          {item.category === 'compliance_security' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 text-purple-800">
                              <ShieldAlert className="w-3 h-3 text-purple-600" />
                              RFC 2142 Abuse
                            </span>
                          )}
                          {item.category === 'automated_system' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800">
                              <AlertCircle className="w-3 h-3 text-rose-600" />
                              No-Reply
                            </span>
                          )}
                          {item.category === 'invalid' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-200 text-slate-700">
                              Invalid Format
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-4">
                          {item.recommendedAction === 'keep' && (
                            <span className="text-emerald-700 font-semibold">
                              Keep (Safe)
                            </span>
                          )}
                          {item.recommendedAction === 'segment_smb' && (
                            <span className="text-blue-700 font-medium">
                              Segment for SMB
                            </span>
                          )}
                          {item.recommendedAction === 'suppress' && (
                            <span className="text-amber-700 font-medium">
                              Suppress
                            </span>
                          )}
                          {item.recommendedAction === 'remove' && (
                            <span className="text-rose-700 font-semibold">
                              Remove Immediately
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-4 text-slate-500 max-w-xs truncate" title={item.explanation}>
                          {item.explanation}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              {filteredItems.length > 500 && (
                <div className="p-3 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-200">
                  Showing first 500 rows. Use export buttons to download all {filteredItems.length} rows.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Educational Banner */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/50 to-slate-50 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Need Full SMTP Mailbox Verification & Deliverability Protection?
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              Role account filtering is step one. Giggal checks live SMTP handshakes, catch-all domains, spam trap signatures, and MX reachability with 98.5% verified deliverability. Get 1,000 free credits upon sign up.
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
