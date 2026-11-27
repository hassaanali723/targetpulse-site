'use client'

import React, { useState } from 'react'
import {
  Globe,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  Loader2,
  Server,
  ArrowRight,
  Info,
} from 'lucide-react'
import type { IpReputationAnalysis, DnsblResultItem } from '@/lib/tools/ipReputationPure'

const SAMPLE_IPS = [
  { label: 'Google Mail', ip: '209.85.220.41' },
  { label: 'Microsoft 365', ip: '40.107.1.1' },
  { label: 'SendGrid Outbound', ip: '149.72.100.25' },
  { label: 'Reserved / Bogon', ip: '192.168.1.1' },
]

export default function IpReputationCheckerTool() {
  const [ipInput, setIpInput] = useState('209.85.220.41')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<IpReputationAnalysis | null>(null)

  const handleCheck = async (ipToCheck?: string) => {
    const targetIp = (ipToCheck || ipInput).trim()
    if (!targetIp) return

    setIsLoading(true)
    setErrorMsg(null)
    setAnalysis(null)

    try {
      const res = await fetch('/api/tools/ip-reputation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip: targetIp }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to inspect IP reputation.')
      }
      setAnalysis(data)
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'An error occurred during DNSBL query.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Search and Workbench Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-600" />
              Mail IP Reputation & DNSBL Lookup
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Verify if your sending IP is listed on major email blacklists, check FCrDNS compliance, and protect inbox delivery.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Quick Presets:</span>
            {SAMPLE_IPS.map((sample) => (
              <button
                key={sample.ip}
                type="button"
                onClick={() => {
                  setIpInput(sample.ip)
                  handleCheck(sample.ip)
                }}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {sample.label}
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleCheck()
          }}
          className="mt-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Server className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="Enter IPv4 or IPv6 address (e.g. 209.85.220.41)"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !ipInput.trim()}
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-sm shrink-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Checking DNSBLs...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Inspect IP
                </>
              )}
            </button>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </form>
      </div>

      {/* Analysis Display */}
      {analysis && (
        <div className="space-y-6">
          {/* Bogon Notice */}
          {analysis.isBogon && (
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold">Reserved / Bogon IP Address</h3>
                  <p className="text-xs mt-1 leading-relaxed text-amber-700">
                    The IP address <code className="font-mono font-semibold">{analysis.ip}</code> is classified as a reserved or private address ({analysis.bogonReason}). Public DNSBL blacklists do not track private or non-routable addresses. Check the public IP address of your mail gateway or SMTP relay.
                  </p>
                </div>
              </div>
            </div>
          )}

          {!analysis.isBogon && (
            <>
              {/* Score and Status Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Score Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 ${
                      analysis.score >= 90
                        ? 'bg-emerald-100 text-emerald-700'
                        : analysis.score >= 70
                          ? 'bg-blue-100 text-blue-700'
                          : analysis.score >= 45
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {analysis.score}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500">Reputation Score</span>
                    <h3 className="text-lg font-bold text-slate-900 capitalize">
                      {analysis.overallStatus === 'excellent' && 'Excellent Deliverability'}
                      {analysis.overallStatus === 'good' && 'Good Reputation'}
                      {analysis.overallStatus === 'warning' && 'Deliverability Warning'}
                      {analysis.overallStatus === 'poor' && 'Critical Listings Detected'}
                    </h3>
                  </div>
                </div>

                {/* DNSBL Listings Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      analysis.listedCount === 0
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    {analysis.listedCount === 0 ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : (
                      <ShieldAlert className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500">DNSBL Blacklists</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {analysis.listedCount === 0
                        ? '0 Listings (Clean)'
                        : `${analysis.listedCount} Active Listing${analysis.listedCount > 1 ? 's' : ''}`}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Checked {analysis.totalChecked} recognized real-time zones
                    </p>
                  </div>
                </div>

                {/* FCrDNS Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      analysis.fcrdns.isValid
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-amber-100 text-amber-600'
                    }`}
                  >
                    {analysis.fcrdns.isValid ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <AlertTriangle className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500">FCrDNS Compliance</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {analysis.fcrdns.isValid ? 'Valid FCrDNS' : 'FCrDNS Failed'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {analysis.fcrdns.isValid
                        ? 'PTR and forward A match'
                        : 'Google/Yahoo mandate failure'}
                    </p>
                  </div>
                </div>
              </div>

              {/* FCrDNS Technical Details Accordion */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-600" />
                    Forward Confirmed Reverse DNS (FCrDNS) Verification
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      analysis.fcrdns.isValid
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {analysis.fcrdns.isValid ? 'Compliant' : 'Non-Compliant'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {analysis.fcrdns.summary}
                </p>
                {analysis.fcrdns.ptrRecords.length > 0 && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-mono space-y-1">
                    <div className="text-slate-500">
                      Reverse PTR: {analysis.fcrdns.ptrRecords.join(', ')}
                    </div>
                    {Object.entries(analysis.fcrdns.forwardIpsMap).map(([host, ips]) => (
                      <div key={host} className="text-slate-700">
                        {host} → {ips.length > 0 ? ips.join(', ') : 'No forward A/AAAA record'}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* DNSBL Breakdown Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    DNSBL Blacklist Inspection Matrix
                  </h3>
                  <span className="text-xs text-slate-500">
                    Real-time query via authoritative nameservers
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-semibold">List & Zone</th>
                        <th className="py-3 px-4 font-semibold">Type</th>
                        <th className="py-3 px-4 font-semibold">Result</th>
                        <th className="py-3 px-4 font-semibold">Response Code</th>
                        <th className="py-3 px-4 font-semibold">Technical Detail</th>
                        <th className="py-3 px-4 font-semibold">Delist Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {analysis.results.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/50">
                          <td className="py-3 px-4">
                            <div className="font-semibold text-slate-900">{item.name}</div>
                            <div className="font-mono text-[11px] text-slate-400">{item.zone}</div>
                          </td>
                          <td className="py-3 px-4 capitalize font-medium text-slate-500">
                            {item.category}
                          </td>
                          <td className="py-3 px-4">
                            {item.status === 'clean' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                Clean
                              </span>
                            )}
                            {item.status === 'listed' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800">
                                <XCircle className="w-3 h-3 text-rose-600" />
                                Listed
                              </span>
                            )}
                            {item.status === 'policy_warning' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">
                                <AlertTriangle className="w-3 h-3 text-amber-600" />
                                Policy Block (PBL)
                              </span>
                            )}
                            {item.status === 'unverified' && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                                Unverified
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 font-mono font-medium">
                            {item.responseCode || 'NXDOMAIN'}
                            {item.subList && <span className="ml-1 text-slate-400">({item.subList})</span>}
                          </td>
                          <td className="py-3 px-4 text-slate-500 max-w-xs truncate" title={item.explanation}>
                            {item.explanation}
                          </td>
                          <td className="py-3 px-4">
                            {item.status === 'listed' || item.status === 'policy_warning' ? (
                              <a
                                href={item.delistUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline"
                              >
                                Delist Form
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <a
                                href={item.delistUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600"
                              >
                                Info
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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
              Protecting Outbound Sender Reputation & Clean Deliverability
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              Clean IPs require clean recipient lists. Sending cold emails to bad addresses, spam traps, or invalid mailboxes quickly leads to DNSBL blacklisting. Giggal verifies email lists with 98.5% deliverability.
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
