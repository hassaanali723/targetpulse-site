'use client'

import React, { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Clock,
  Lock,
  Unlock,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Upload,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  Server,
  Mail,
} from 'lucide-react'
import {
  analyzeEmailHeaders,
  type HeaderAnalysisResult,
  type ReceivedHop,
  type AuthStatus,
} from '@/lib/tools/emailHeaderAnalyzerPure'

const SAMPLE_HEALTHY_GMAIL = `Delivered-To: recipient@acme-corp.com
Received: by 2002:a05:6808:148b:b0:3c8:4e62:9a1e with SMTP id w11csp123;
        Fri, 27 Nov 2026 10:00:04 -0800 (PST)
X-Google-Smtp-Source: AGHT+IF7bF...
X-Received: by 2002:a17:902:c48d:b0:1fa:4a3b:91a2 with SMTP id v13-2002...;
        Fri, 27 Nov 2026 10:00:03 -0800 (PST)
ARC-Seal: i=1; a=rsa-sha256; t=1764266403; cv=none;
        d=google.com; s=arc-20240605;
        b=XyZ...
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20240605;
        h=list-unsubscribe-post:list-unsubscribe:message-id:date:subject:to:from;
        bh=47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=;
        b=AbC...
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@sendgrid.net header.s=s1 header.b=KmN;
       spf=pass (google.com: domain of bounce@em.stripe.com designates 149.72.100.25 as permitted sender) smtp.mailfrom=bounce@em.stripe.com;
       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=stripe.com
Return-Path: <bounce@em.stripe.com>
Received: from o1.ptr9823.stripe.com (o1.ptr9823.stripe.com. [149.72.100.25])
        by mx.google.com with ESMTPS id d23si1234567plm.12.2026.11.27.10.00.02
        for <recipient@acme-corp.com>
        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);
        Fri, 27 Nov 2026 10:00:02 -0800 (PST)
Received-SPF: pass (google.com: domain of bounce@em.stripe.com designates 149.72.100.25 as permitted sender) client-ip=149.72.100.25;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@stripe.com header.s=s2026 header.b=W1X2Y3Z;
       dkim=pass header.i=@sendgrid.net header.s=smtpapi header.b=A1B2C3;
       spf=pass (google.com: domain of bounce@em.stripe.com designates 149.72.100.25 as permitted sender) smtp.mailfrom=bounce@em.stripe.com;
       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=stripe.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=stripe.com;
	s=s2026; t=1764266401;
	h=from:subject:date:message-id:to:list-unsubscribe:list-unsubscribe-post;
	bh=47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=;
	b=W1X2Y3Z...
Received: by filterd2.internal.sendgrid.net with SMTP id abc123def;
        Fri, 27 Nov 2026 18:00:00 +0000 (UTC)
From: "Stripe Billing" <invoices@stripe.com>
Reply-To: support@stripe.com
To: recipient@acme-corp.com
Subject: Your monthly invoice from Stripe
Date: Fri, 27 Nov 2026 18:00:00 +0000
Message-ID: <inv-2026-11-27-001@stripe.com>
List-Unsubscribe: <https://stripe.com/unsub?id=123>, <mailto:unsub@stripe.com>
List-Unsubscribe-Post: List-Unsubscribe=One-Click

Invoice body content...`

const SAMPLE_FORWARDED_ARC = `Delivered-To: final-recipient@company.com
Received: by 2002:a05:6808:148b:b0:3c8:4e62:9a1e with SMTP id w11csp456;
        Fri, 27 Nov 2026 12:00:08 -0800 (PST)
Authentication-Results: mx.google.com;
       dkim=pass header.i=@forwarding-service.org header.s=fwd2026;
       spf=neutral (google.com: 198.51.100.80 is neither permitted nor denied by domain of bounce@forwarding-service.org) smtp.mailfrom=bounce@forwarding-service.org;
       dmarc=pass (p=REJECT dis=NONE) header.from=original-author.com;
       arc=pass (as.1.forwarding-service.org=pass ms.1.forwarding-service.org=pass)
ARC-Seal: i=1; a=rsa-sha256; cv=none; d=forwarding-service.org; s=arc1;
ARC-Authentication-Results: i=1; mx.forwarding-service.org;
       dkim=pass header.i=@original-author.com header.s=s1;
       spf=pass smtp.mailfrom=news@original-author.com;
       dmarc=pass header.from=original-author.com
Received: from relay.forwarding-service.org (relay.forwarding-service.org. [198.51.100.80])
        by mx.google.com with ESMTPS id fwd123;
        Fri, 27 Nov 2026 12:00:05 -0800 (PST)
Received: from outbound.original-author.com ([149.72.50.12])
        by mx.forwarding-service.org with ESMTPS id in987;
        Fri, 27 Nov 2026 12:00:01 -0800 (PST)
From: "Original Author" <newsletter@original-author.com>
Reply-To: newsletter@original-author.com
Return-Path: <bounce@forwarding-service.org>
To: discussion-group@forwarding-service.org
Subject: =?UTF-8?B?QW5ub3VuY2VtZW50OiBOZXcgUHJvZHVjdA==?=
Date: Fri, 27 Nov 2026 20:00:00 +0000
Message-ID: <msg-999@original-author.com>

Group message body...`

const SAMPLE_SPOOF_WARNING = `Delivered-To: ceo@target-company.com
Received: from mail.attacker-vps.net (attacker-vps.net. [198.51.100.99])
        by mail.target-company.com with ESMTP id sp1234;
        Fri, 27 Nov 2026 14:00:00 -0500
Authentication-Results: mail.target-company.com;
       dkim=none;
       spf=fail (target-company.com: 198.51.100.99 is not allowed to send mail for trustedbank.com) smtp.mailfrom=phish@attacker-vps.net;
       dmarc=fail (p=REJECT) header.from=trustedbank.com
From: "Security Team" <security@trustedbank.com>
Reply-To: urgent-update@external-phish.net
Return-Path: <phish@attacker-vps.net>
To: ceo@target-company.com
Subject: URGENT: Verify your corporate bank account
Date: Fri, 27 Nov 2026 19:00:00 +0000
Message-ID: <spoofed-001@attacker-vps.net>

Please click this link immediately...`

export default function EmailHeaderAnalyzerTool() {
  const [rawText, setRawText] = useState('')
  const [activeTab, setActiveTab] = useState<'timeline' | 'auth' | 'metadata' | 'raw'>('timeline')
  const [filterSearch, setFilterSearch] = useState('')
  const [copiedJson, setCopiedJson] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const analysis: HeaderAnalysisResult | null = useMemo(() => {
    if (!rawText.trim()) return null
    try {
      return analyzeEmailHeaders(rawText)
    } catch {
      return null
    }
  }, [rawText])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      if (content) setRawText(content)
    }
    reader.readAsText(file)
  }

  const handleCopyJson = async () => {
    if (!analysis) return
    const jsonStr = JSON.stringify(analysis, null, 2)
    try {
      await navigator.clipboard.writeText(jsonStr)
      setCopiedJson(true)
      setTimeout(() => setCopiedJson(false), 2000)
    } catch {
      // fallback
    }
  }

  const renderStatusBadge = (status: AuthStatus, label?: string) => {
    const text = label || status.toUpperCase()
    if (status === 'pass' || status === 'bestguesspass') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {text}
        </span>
      )
    }
    if (status === 'fail' || status === 'permerror') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
          <XCircle className="w-3.5 h-3.5" />
          {text}
        </span>
      )
    }
    if (status === 'softfail' || status === 'temperror') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5" />
          {text}
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
        <Info className="w-3.5 h-3.5" />
        {text}
      </span>
    )
  }

  return (
    <div className="space-y-8">
      {/* Input Console */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Paste Raw Email Headers</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Paste the source headers from Gmail (Show original), Outlook, Apple Mail, or upload a .eml file.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".eml,.txt,.msg"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-slate-500" />
              Upload .eml
            </button>
            {rawText && (
              <button
                type="button"
                onClick={() => setRawText('')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Textarea */}
        <div className="relative">
          <textarea
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            rows={8}
            placeholder={`Delivered-To: recipient@company.com\nReceived: by 2002:a05:6808:148b with SMTP id...\nAuthentication-Results: mx.google.com; dkim=pass...`}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-4 font-mono text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 transition-all leading-relaxed"
          />
        </div>

        {/* Quick Sample Presets */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Load Sample:</span>
          <button
            type="button"
            onClick={() => setRawText(SAMPLE_HEALTHY_GMAIL)}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
          >
            Google Workspace (Pass)
          </button>
          <button
            type="button"
            onClick={() => setRawText(SAMPLE_FORWARDED_ARC)}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Mailing List with ARC
          </button>
          <button
            type="button"
            onClick={() => setRawText(SAMPLE_SPOOF_WARNING)}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
          >
            Spoof / Unaligned Warning
          </button>
        </div>

        {/* Privacy Note */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
          <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Client-side analysis:</strong> Headers and message metadata are parsed 100% in your browser. No raw email headers or sender data are sent to any server.
          </span>
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Key Result Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* SPF Card */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">SPF Result</span>
                {renderStatusBadge(analysis.summary.spfStatus)}
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">
                {analysis.metadata.returnPathDomain ? `Domain: ${analysis.metadata.returnPathDomain}` : 'Envelope sender SPF check'}
              </p>
            </div>

            {/* DKIM Card */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">DKIM Signature</span>
                {renderStatusBadge(analysis.summary.dkimStatus)}
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">
                {analysis.dkimSignatures.length > 0
                  ? `${analysis.dkimSignatures.length} signature(s) found`
                  : 'Cryptographic header check'}
              </p>
            </div>

            {/* DMARC Card */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">DMARC Policy</span>
                {renderStatusBadge(analysis.summary.dmarcStatus)}
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">
                {analysis.metadata.fromDomain ? `Header From: ${analysis.metadata.fromDomain}` : 'Alignment with visible From'}
              </p>
            </div>

            {/* Transit Time Card */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Transit Latency</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {analysis.summary.totalDelayLabel}
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">
                {analysis.summary.hopCount} server relay hops detected
              </p>
            </div>
          </div>

          {/* Receiver Security Trust Boundary Banner */}
          {analysis.summary.authservId && (
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/60 text-slate-800 flex items-start gap-3 text-xs sm:text-sm">
              <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-slate-900">
                  Authoritative Authentication Server (<code className="font-mono text-indigo-700 bg-indigo-100/80 px-1 py-0.5 rounded">authserv-id</code>): {analysis.summary.authservId}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Under RFC 8601, only the top Authentication-Results header added by your own border mail server is authoritative. Downstream or forwarded headers could have been injected by external senders.
                </p>
              </div>
            </div>
          )}

          {/* Security & Alignment Alerts */}
          {analysis.alerts.length > 0 && (
            <div className="space-y-2">
              {analysis.alerts.map((alert, i) => {
                const isErr = alert.level === 'error'
                const isWarn = alert.level === 'warning'
                return (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${
                      isErr
                        ? 'bg-rose-50 border-rose-200 text-rose-900'
                        : isWarn
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    {isErr ? (
                      <ShieldX className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    ) : isWarn ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <strong className="font-semibold block">{alert.title}</strong>
                      <span className="opacity-90">{alert.detail}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('timeline')}
              className={`pb-3 px-4 border-b-2 transition-colors ${
                activeTab === 'timeline'
                  ? 'border-indigo-600 text-indigo-600 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Hop Timeline ({analysis.hops.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('auth')}
              className={`pb-3 px-4 border-b-2 transition-colors ${
                activeTab === 'auth'
                  ? 'border-indigo-600 text-indigo-600 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Authentication & Alignment
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('metadata')}
              className={`pb-3 px-4 border-b-2 transition-colors ${
                activeTab === 'metadata'
                  ? 'border-indigo-600 text-indigo-600 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Message Details
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('raw')}
              className={`pb-3 px-4 border-b-2 transition-colors ${
                activeTab === 'raw'
                  ? 'border-indigo-600 text-indigo-600 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              All Headers ({analysis.headers.length})
            </button>
          </div>

          {/* Tab 1: Delivery Hop Timeline */}
          {activeTab === 'timeline' && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Chronological Server Relay Path</h3>
                  <p className="text-xs text-slate-500">
                    Followed bottom-to-top according to RFC 5321 (Hop 1 is the sender, final hop is your inbox).
                  </p>
                </div>
                {analysis.summary.allExternalHopsTls && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" /> All External Hops Encrypted
                  </span>
                )}
              </div>

              <div className="divide-y divide-slate-100">
                {analysis.hops.map((hop) => (
                  <div key={hop.hopNumber} className="p-4 md:p-5 hover:bg-slate-50/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          #{hop.hopNumber}
                        </span>
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900">
                              {hop.fromHost || 'Unknown Sender Host'}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                            <span className="font-mono text-xs sm:text-sm text-slate-700">
                              {hop.byHost || 'Unknown Receiver'}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
                            {hop.ip && (
                              <span className="inline-flex items-center gap-1 font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                <Server className="w-3 h-3 text-slate-400" />
                                {hop.ip}
                                {hop.isPublicIp && (
                                  <Link
                                    href={`/ip-reputation-checker?ip=${encodeURIComponent(hop.ip)}`}
                                    className="ml-1 text-indigo-600 hover:text-indigo-800 underline inline-flex items-center"
                                    title="Check IP Blacklist & Reputation"
                                  >
                                    Check IP <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                                  </Link>
                                )}
                              </span>
                            )}

                            {hop.protocol && (
                              <span className="font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                with {hop.protocol}
                              </span>
                            )}

                            {hop.tlsEncrypted ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-medium">
                                <Lock className="w-3 h-3 text-emerald-600" />
                                {hop.tlsDetail || 'TLS'}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 font-medium">
                                <Unlock className="w-3 h-3 text-amber-600" />
                                Plaintext / Unencrypted
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0 pl-10 sm:pl-0">
                        <div
                          className={`text-xs font-bold ${
                            hop.clockSkew ? 'text-amber-600' : 'text-slate-700'
                          }`}
                        >
                          {hop.delayLabel}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {hop.timestampUtc || 'No date recorded'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Authentication & Alignment */}
          {activeTab === 'auth' && (
            <div className="space-y-6">
              {/* Authentication Results Blocks */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Parsed Authentication Methods</h3>
                {analysis.authResults.map((block, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">
                        Evaluated by MTA: <code className="font-mono text-indigo-700">{block.authservId}</code>
                      </span>
                      {block.isTopMost && (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase">
                          Authoritative Inbound MTA
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {block.methods.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 bg-white rounded-lg border border-slate-200/80 flex items-start justify-between">
                          <div>
                            <span className="font-mono text-xs font-bold uppercase text-slate-800">{m.method}</span>
                            <div className="text-xs text-slate-600 mt-0.5 space-y-0.5">
                              {m.domain && <div>Domain: <code className="font-mono text-slate-900">{m.domain}</code></div>}
                              {m.selector && <div>Selector: <code className="font-mono text-slate-900">{m.selector}</code></div>}
                              {m.ip && <div>IP: <code className="font-mono text-slate-900">{m.ip}</code></div>}
                            </div>
                          </div>
                          <div>{renderStatusBadge(m.status)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* DKIM Signatures Details */}
              {analysis.dkimSignatures.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">DKIM Cryptographic Signatures ({analysis.dkimSignatures.length})</h3>
                  <div className="space-y-2">
                    {analysis.dkimSignatures.map((sig, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 text-xs space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-semibold text-slate-800">
                            Signing Domain: <code className="font-mono text-indigo-700">{sig.domain}</code>
                          </span>
                          <span className="text-slate-500 font-mono">
                            Selector: <code className="text-slate-700 font-bold">{sig.selector}</code>
                          </span>
                        </div>
                        {sig.algorithm && <div className="text-slate-500">Algorithm: {sig.algorithm}</div>}
                        {sig.selector && sig.domain && (
                          <div className="pt-1">
                            <Link
                              href={`/dkim-checker?domain=${encodeURIComponent(sig.domain)}&selector=${encodeURIComponent(sig.selector)}`}
                              className="text-indigo-600 hover:text-indigo-800 font-semibold underline inline-flex items-center gap-1"
                            >
                              Verify this DKIM public key in DNS <ExternalLink className="w-3 h-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ARC Chain */}
              {analysis.arcChain.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">Authenticated Received Chain (ARC)</h3>
                  <div className="space-y-2">
                    {analysis.arcChain.map((arc) => (
                      <div key={arc.instance} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">ARC Hop #{arc.instance}</span>
                          <span className="font-mono uppercase text-slate-600 bg-slate-200 px-2 py-0.5 rounded text-[10px]">
                            cv={arc.sealStatus || 'none'}
                          </span>
                        </div>
                        {arc.sealDomain && <div className="text-slate-600">Sealed by: {arc.sealDomain} (s={arc.sealSelector})</div>}
                        {arc.aarSummary && <div className="text-slate-500 font-mono text-[11px] truncate">{arc.aarSummary}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Message Metadata */}
          {activeTab === 'metadata' && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-50/80 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900">Sender & Envelope Metadata</h3>
              </div>
              <div className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">From (Header Sender)</span>
                  <span className="sm:col-span-2 font-mono text-slate-900 break-all">{analysis.metadata.fromRaw || 'Not specified'}</span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">Reply-To</span>
                  <span className="sm:col-span-2 font-mono text-slate-900 break-all">{analysis.metadata.replyToRaw || 'Same as From'}</span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">Return-Path (Envelope MAIL FROM)</span>
                  <span className="sm:col-span-2 font-mono text-slate-900 break-all">{analysis.metadata.returnPathRaw || 'Not specified'}</span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">Subject</span>
                  <span className="sm:col-span-2 text-slate-900 font-semibold">{analysis.metadata.subject || '(No subject)'}</span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">Date</span>
                  <span className="sm:col-span-2 text-slate-700">{analysis.metadata.dateRaw || 'Not specified'}</span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">Message-ID</span>
                  <span className="sm:col-span-2 font-mono text-slate-600 text-xs break-all">{analysis.metadata.messageId || 'Missing'}</span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-1">
                  <span className="text-slate-500 font-semibold">List-Unsubscribe (RFC 8058)</span>
                  <div className="sm:col-span-2 space-y-1">
                    <span className="font-mono text-slate-700 text-xs break-all block">{analysis.metadata.listUnsubscribe || 'None'}</span>
                    {analysis.metadata.hasOneClickUnsubscribe && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        <Check className="w-3 h-3 text-emerald-600" /> Supports One-Click Unsubscribe
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: All Raw Headers */}
          {activeTab === 'raw' && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs space-y-3 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <input
                  type="text"
                  placeholder="Filter headers (e.g. dkim, received, authentication)..."
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 w-full sm:w-72"
                />
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors shrink-0"
                >
                  {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  {copiedJson ? 'Copied JSON' : 'Copy JSON Report'}
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto font-mono text-xs">
                {analysis.headers
                  .filter((h) => !filterSearch || h.name.toLowerCase().includes(filterSearch.toLowerCase()) || h.rawValue.toLowerCase().includes(filterSearch.toLowerCase()))
                  .map((h, i) => (
                    <div key={i} className="py-2.5 px-2 hover:bg-slate-50/70 transition-colors">
                      <span className="font-bold text-slate-900">{h.name}:</span>{' '}
                      <span className="text-slate-700 break-all">{h.decodedValue}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
