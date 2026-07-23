'use client'

import React, { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronDown, Search, ArrowRight } from 'lucide-react'

const BASE_URL = 'https://api.giggal.ai/v1'
const APP_URL = 'https://emailverifier.giggal.ai'
const DOCS_ROOT = '/public/docs'

// ─── Types ─────────────────────────────────────────────────────────────

type HttpMethod = 'GET' | 'POST'

interface Param {
  name: string
  type: string
  required?: boolean
  description: string
  example?: string
}

interface ResponseSample {
  code: string
  body: string
}

interface Endpoint {
  id: string
  method: HttpMethod
  path: string
  title: string
  description: React.ReactNode
  params?: Param[]
  bodyParams?: Param[]
  responses: ResponseSample[]
}

interface SidebarGroup {
  id: string
  label: string
  endpoints: Endpoint[]
}

// ─── Real request / response samples ───────────────────────────────────

const singleEmailResponse = `{
  "success": true,
  "data": {
    "email": "info@giggal.ai",
    "is_valid": true,
    "status": "deliverable",
    "risk_level": "low",
    "deliverability_score": 89,
    "details": {
      "general": {
        "domain": "giggal.ai",
        "reason": "Mailbox confirmed deliverable",
        "validation_method": "smtp"
      },
      "attributes": {
        "free_email": false,
        "role_account": false,
        "disposable": false,
        "catch_all": true,
        "has_plus_tag": false,
        "mailbox_full": false,
        "no_reply": false
      },
      "mail_server": {
        "smtp_provider": "google",
        "mx_record": "aspmx.l.google.com",
        "implicit_mx": null
      },
      "blacklist": {
        "is_blacklisted": false,
        "blacklists_found": [],
        "blacklist_reasons": [],
        "reputation_score": 100,
        "last_checked": "2026-07-23T20:47:15.540Z"
      },
      "sub_status": null
    },
    "catch_all_score": 89,
    "catch_all_verdict": "valid"
  },
  "meta": {
    "creditsUsed": 1
  }
}`

const unauthorizedResponse = `{
  "success": false,
  "message": "Missing API key"
}`

const insufficientCreditsResponse = `{
  "success": false,
  "error": "Insufficient credits for this verification"
}`

const invalidEmailResponse = `{
  "success": false,
  "error": "Invalid email format"
}`

const jobCreatedSample = `{
  "success": true,
  "data": {
    "jobId": "api_job_6a627dd94559c7cd818d8fc9",
    "status": "processing",
    "name": "July prospect list",
    "submittedEmails": 19,
    "totalEmails": 19,
    "acceptedEmails": 19,
    "rejectedEmails": 0,
    "processedEmails": 0,
    "progress": { "total": 19, "processed": 0, "percentage": 0 },
    "requestId": "e8044428-e49f-4aa2-9900-e29d73fd4071",
    "batchIds": [
      "a639b1de-0e3a-4f8a-882d-95cee9db3f99",
      "c2760ed9-eced-4222-939b-3fa4151bde93"
    ],
    "createdAt": "2026-07-23T20:47:21.908Z",
    "updatedAt": "2026-07-23T20:47:22.040Z",
    "completedAt": null,
    "resultsExpiresAt": null,
    "resultsExpired": false,
    "error": null
  },
  "meta": {
    "idempotentReplay": false,
    "acceptedEmails": 19,
    "rejectedEmails": 0,
    "duplicateEmails": 0,
    "invalidEmails": 0
  }
}`

const jobStatusSample = `{
  "success": true,
  "data": {
    "jobId": "api_job_6a627dd94559c7cd818d8fc9",
    "status": "completed",
    "name": "July prospect list",
    "submittedEmails": 19,
    "totalEmails": 19,
    "acceptedEmails": 19,
    "rejectedEmails": 0,
    "processedEmails": 19,
    "progress": { "total": 19, "processed": 19, "percentage": 100 },
    "requestId": "e8044428-e49f-4aa2-9900-e29d73fd4071",
    "batchIds": [
      "a639b1de-0e3a-4f8a-882d-95cee9db3f99",
      "c2760ed9-eced-4222-939b-3fa4151bde93"
    ],
    "createdAt": "2026-07-23T20:47:21.908Z",
    "updatedAt": "2026-07-23T20:48:00.848Z",
    "completedAt": "2026-07-23T20:48:00.840Z",
    "resultsExpiresAt": "2026-07-25T20:48:00.840Z",
    "resultsExpired": false,
    "error": null
  }
}`

const jobResultsSample = `{
  "success": true,
  "data": {
    "job": {
      "jobId": "api_job_6a627dd94559c7cd818d8fc9",
      "status": "completed",
      "name": "July prospect list",
      "totalEmails": 19,
      "processedEmails": 19,
      "completedAt": "2026-07-23T20:48:00.840Z",
      "resultsExpiresAt": "2026-07-25T20:48:00.840Z"
    },
    "results": [
      {
        "email": "hassaan@targetpulse.net",
        "status": "deliverable",
        "is_valid": true,
        "risk_level": "high",
        "deliverability_score": 88,
        "details": {
          "general": {
            "domain": "targetpulse.net",
            "reason": "All validations passed",
            "validation_method": "smtp"
          },
          "attributes": {
            "free_email": false,
            "role_account": false,
            "disposable": false,
            "catch_all": true,
            "has_plus_tag": false,
            "mailbox_full": false,
            "no_reply": false
          },
          "mail_server": {
            "smtp_provider": "google",
            "mx_record": "aspmx.l.google.com",
            "implicit_mx": null
          },
          "blacklist": {
            "is_blacklisted": false,
            "blacklists_found": [],
            "reputation_score": 100,
            "last_checked": "2026-07-23T20:47:22.665Z"
          },
          "sub_status": null
        }
      },
      {
        "email": "zain@targetpulse.net",
        "status": "deliverable",
        "is_valid": true,
        "risk_level": "low",
        "deliverability_score": 100,
        "details": { "general": { "domain": "targetpulse.net", "reason": "2.1.5 OK", "validation_method": "smtp" }, "...": "..." }
      }
    ],
    "pagination": {
      "total": 19,
      "page": 1,
      "limit": 25,
      "pages": 1
    }
  }
}`

const catchAllCreatedSample = `{
  "success": true,
  "data": {
    "taskId": "catchall_e4194da2-c118-47c2-84bf-9c25ce8a363e",
    "sourceJobId": "api_job_6a627dd94559c7cd818d8fc9",
    "fileId": "api_job_6a627dd94559c7cd818d8fc9",
    "status": "processing",
    "name": "Catch-all round for July list",
    "totalEmails": 8,
    "processedEmails": 0,
    "progress": { "total": 8, "processed": 0, "percentage": 0 },
    "requestId": "4e7596e0-c51e-4b05-b4e9-4b8a681041fd",
    "batchIds": ["7d2b1f03-68dd-4687-be95-fcc4fbabc2e7"],
    "creditsUsed": 0,
    "creditsRequired": 16,
    "creditsPerEmail": 2,
    "verdictCounts": { "valid": 0, "invalid": 0 },
    "initiatedVia": "developer_api",
    "createdAt": "2026-07-23T20:50:51.468Z",
    "updatedAt": "2026-07-23T20:50:51.662Z",
    "lastUpdated": "2026-07-23T20:50:51.468Z"
  },
  "meta": {
    "idempotentReplay": false
  }
}`

const catchAllStatusSample = `{
  "success": true,
  "data": {
    "taskId": "catchall_e4194da2-c118-47c2-84bf-9c25ce8a363e",
    "sourceJobId": "api_job_6a627dd94559c7cd818d8fc9",
    "fileId": "api_job_6a627dd94559c7cd818d8fc9",
    "status": "completed",
    "name": "Catch-all round for July list",
    "totalEmails": 8,
    "processedEmails": 8,
    "progress": { "total": 8, "processed": 8, "percentage": 100 },
    "requestId": "4e7596e0-c51e-4b05-b4e9-4b8a681041fd",
    "batchIds": ["7d2b1f03-68dd-4687-be95-fcc4fbabc2e7"],
    "creditsUsed": 16,
    "creditsRequired": 16,
    "creditsPerEmail": 2,
    "verdictCounts": { "valid": 1, "invalid": 7 },
    "initiatedVia": "developer_api",
    "createdAt": "2026-07-23T20:50:51.468Z",
    "updatedAt": "2026-07-23T20:50:56.646Z",
    "lastUpdated": "2026-07-23T20:50:56.583Z"
  }
}`

const catchAllResultsSample = `{
  "success": true,
  "data": {
    "task": {
      "taskId": "catchall_e4194da2-c118-47c2-84bf-9c25ce8a363e",
      "status": "completed",
      "totalEmails": 8,
      "verdictCounts": { "valid": 1, "invalid": 7 }
    },
    "results": [
      {
        "email": "hassaan@targetpulse.net",
        "score": 88,
        "verdict": "valid",
        "is_actually_catchall": true,
        "breakdown": {
          "domain_triage": {
            "score": 16,
            "max": 25,
            "signals": [
              "provider:google",
              "auth:partial",
              "spf:strict",
              "mx:multiple",
              "ssl:valid",
              "a_records",
              "tld:trusted"
            ],
            "ssl_cert_age_days": 22
          },
          "domain_age": {
            "score": 12,
            "max": 15,
            "signals": ["age:9y"]
          }
        }
      },
      {
        "email": "zain@targetpulse.net",
        "score": 9,
        "verdict": "invalid",
        "is_actually_catchall": true,
        "breakdown": {
          "domain_triage": {
            "score": 23,
            "max": 25,
            "signals": ["provider:google", "auth:spf+dkim+dmarc", "dmarc:reject"],
            "ssl_cert_age_days": 53
          },
          "domain_age": {
            "score": 15,
            "max": 15,
            "signals": ["age:11y"]
          }
        }
      }
    ],
    "pagination": {
      "total": 8,
      "page": 1,
      "limit": 25,
      "pages": 1
    }
  }
}`

const catchAllCsvSample = `Email,Score,Verdict
"hassaan@targetpulse.net",88,"valid"
"zain@targetpulse.net",9,"invalid"
"info@giggal.ai",8,"invalid"
"hassaan@targetpulse.net",6,"invalid"
"zain@targetpulse.net",3,"invalid"
"info@giggal.ai",8,"invalid"
"hassaan@targetpulse.net",6,"invalid"
"zain@targetpulse.net",9,"invalid"`

const creditsResponse = `{
  "success": true,
  "data": {
    "balance": 145,
    "availableCredits": 145,
    "reservedCredits": 0,
    "totalPurchased": 1000,
    "totalConsumed": 92100,
    "transactionCount": 247,
    "lastTransactionAt": "2026-07-20T21:52:27.374Z"
  }
}`

const notFoundResponse = `{
  "success": false,
  "error": "Developer API job not found"
}`

const rateLimitResponse = `{
  "success": false,
  "message": "Developer API rate limit exceeded"
}`

const missingEmailsResponse = `{
  "success": false,
  "error": "A non-empty emails array is required"
}`

const groups: SidebarGroup[] = [
  {
    id: 'single-verification',
    label: 'Single verification',
    endpoints: [
      {
        id: 'verify-single',
        method: 'POST',
        path: '/v1/verify',
        title: 'Verify a single email',
        description: 'Verify one email address synchronously. Costs 1 credit. When the domain is catch-all, deep verification runs in-line and the response includes catch_all_score plus catch_all_verdict.',
        bodyParams: [
          { name: 'email', type: 'string', required: true, description: 'The email address to verify.', example: 'info@giggal.ai' },
        ],
        responses: [
          { code: '200', body: singleEmailResponse },
          { code: '400', body: invalidEmailResponse },
          { code: '401', body: unauthorizedResponse },
          { code: '402', body: insufficientCreditsResponse },
        ],
      },
    ],
  },
  {
    id: 'bulk-verification',
    label: 'Bulk verification',
    endpoints: [
      {
        id: 'submit-batch',
        method: 'POST',
        path: '/v1/verify-batch',
        title: 'Submit a bulk verification job',
        description: 'Submit up to 50,000 emails per job. Processing is asynchronous — poll GET /v1/jobs/:jobId for progress. Pass an Idempotency-Key header to safely retry job creation without double charges.',
        bodyParams: [
          { name: 'emails', type: 'string[]', required: true, description: 'Array of email addresses to verify. Max 50,000 per job. Duplicates and invalid syntax are stripped server-side.' },
          { name: 'name', type: 'string', description: 'Optional human-readable label for the job. Shown in your dashboard.' },
        ],
        responses: [
          { code: '202', body: jobCreatedSample },
          { code: '400', body: missingEmailsResponse },
          { code: '401', body: unauthorizedResponse },
          { code: '402', body: insufficientCreditsResponse },
          { code: '429', body: rateLimitResponse },
        ],
      },
      {
        id: 'get-job',
        method: 'GET',
        path: '/v1/jobs/:jobId',
        title: 'Get bulk job status',
        description: 'Poll to check progress. Status transitions: processing → completed (or failed). Recommended polling interval: 10–15 seconds. Small batches (< 50 emails) typically finish inside 30 seconds.',
        params: [
          { name: 'jobId', type: 'string', required: true, description: 'The job ID returned from POST /v1/verify-batch.' },
        ],
        responses: [
          { code: '200', body: jobStatusSample },
          { code: '404', body: notFoundResponse },
        ],
      },
      {
        id: 'get-job-results',
        method: 'GET',
        path: '/v1/jobs/:jobId/results',
        title: 'Get bulk job results',
        description: 'Once status is "completed", fetch per-email results. Results are paginated — pass page and limit query params. Results are retained for 48 hours (see resultsExpiresAt on the job).',
        params: [
          { name: 'jobId', type: 'string', required: true, description: 'The job ID.' },
          { name: 'page', type: 'integer', description: 'Page number, defaults to 1.' },
          { name: 'limit', type: 'integer', description: 'Results per page, defaults to 25, max 500.' },
        ],
        responses: [
          { code: '200', body: jobResultsSample },
          { code: '404', body: notFoundResponse },
          { code: '409', body: `{\n  "success": false,\n  "error": "Developer API job is not completed yet",\n  "status": "processing"\n}` },
          { code: '410', body: `{\n  "success": false,\n  "error": "Developer API job results have expired"\n}` },
        ],
      },
    ],
  },
  {
    id: 'catchall-verification',
    label: 'Catch-all verification',
    endpoints: [
      {
        id: 'start-catchall',
        method: 'POST',
        path: '/v1/catchall',
        title: 'Start a catch-all verification task',
        description: 'Kick off deep catch-all verification for a completed bulk job. Only addresses flagged as catch-all in the source job are re-checked. Billed at 2 credits per address (see creditsRequired in the response).',
        bodyParams: [
          { name: 'jobId', type: 'string', required: true, description: 'A completed bulk verification job ID. Only catch-all addresses from that job will be deep-verified.' },
          { name: 'name', type: 'string', description: 'Optional human-readable label for the task.' },
        ],
        responses: [
          { code: '202', body: catchAllCreatedSample },
          { code: '400', body: `{\n  "success": false,\n  "error": "jobId is required"\n}` },
          { code: '401', body: unauthorizedResponse },
          { code: '402', body: insufficientCreditsResponse },
          { code: '404', body: notFoundResponse },
          { code: '409', body: `{\n  "success": false,\n  "error": "Developer API job is not completed yet",\n  "status": "processing"\n}` },
          { code: '410', body: `{\n  "success": false,\n  "error": "Developer API job results have expired"\n}` },
        ],
      },
      {
        id: 'get-catchall',
        method: 'GET',
        path: '/v1/catchall/:taskId',
        title: 'Get catch-all task status',
        description: 'Poll to check progress and live verdictCounts. Catch-all tasks usually resolve in a few seconds to a few minutes depending on volume.',
        params: [
          { name: 'taskId', type: 'string', required: true, description: 'The task ID returned from POST /v1/catchall.' },
        ],
        responses: [
          { code: '200', body: catchAllStatusSample },
          { code: '404', body: `{\n  "success": false,\n  "error": "Catch-all task not found"\n}` },
        ],
      },
      {
        id: 'catchall-results',
        method: 'GET',
        path: '/v1/catchall/:taskId/results',
        title: 'Get catch-all task results',
        description: 'Fetch paginated per-email verdicts with the underlying scoring breakdown (domain triage signals and domain age).',
        params: [
          { name: 'taskId', type: 'string', required: true, description: 'The task ID.' },
          { name: 'page', type: 'integer', description: 'Page number, defaults to 1.' },
          { name: 'limit', type: 'integer', description: 'Results per page, defaults to 25, max 500.' },
          { name: 'verdict', type: 'string', description: 'Filter by verdict: valid | invalid.' },
        ],
        responses: [
          { code: '200', body: catchAllResultsSample },
          { code: '404', body: `{\n  "success": false,\n  "error": "Catch-all task not found"\n}` },
        ],
      },
      {
        id: 'catchall-download',
        method: 'GET',
        path: '/v1/catchall/:taskId/download',
        title: 'Download catch-all results as CSV',
        description: 'Downloads all results for a completed catch-all task as a CSV file with Email, Score, Verdict columns. Content-Type is text/csv.',
        params: [
          { name: 'taskId', type: 'string', required: true, description: 'The task ID.' },
          { name: 'verdict', type: 'string', description: 'Filter by verdict: valid | invalid.' },
        ],
        responses: [
          { code: '200', body: catchAllCsvSample },
          { code: '404', body: `{\n  "success": false,\n  "error": "Catch-all task not found"\n}` },
        ],
      },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    endpoints: [
      {
        id: 'get-credits',
        method: 'GET',
        path: '/v1/credits',
        title: 'Get current credit balance',
        description: 'Returns your account balance including available, reserved (held for in-flight jobs), and lifetime totals. Verifications that come back as "unknown" are refunded automatically and reflected here.',
        responses: [
          { code: '200', body: creditsResponse },
          { code: '401', body: unauthorizedResponse },
        ],
      },
    ],
  },
]

// ─── URL sync helper ───────────────────────────────────────────────────
// Clicking an in-page link like `/public/docs/verify-single` should NOT
// trigger a full navigation — we just scroll to the section and swap
// the URL. Direct visits with a slug scroll on mount.

function useSectionRouter() {
  useEffect(() => {
    const path = window.location.pathname
    if (!path.startsWith(DOCS_ROOT)) return
    const slug = path.slice(DOCS_ROOT.length).replace(/^\/+/, '').split('/')[0]
    if (!slug) return
    // Wait a tick so the DOM is laid out and sticky offsets are correct.
    const t = window.setTimeout(() => {
      const el = document.getElementById(slug)
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 60)
    return () => window.clearTimeout(t)
  }, [])

  return useCallback((id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const nextPath = `${DOCS_ROOT}/${id}`
    if (window.location.pathname !== nextPath) {
      window.history.replaceState(null, '', nextPath)
    }
  }, [])
}

// ─── Helper components ────────────────────────────────────────────────

const methodStyles: Record<HttpMethod, string> = {
  GET: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  POST: 'bg-indigo-100 text-indigo-800 border-indigo-200',
}

function MethodBadge({ method, size = 'sm' }: { method: HttpMethod; size?: 'sm' | 'md' }) {
  const sizeClass = size === 'md'
    ? 'text-[11px] px-2.5 py-1'
    : 'text-[9px] px-1.5 py-0.5'
  return (
    <span className={`inline-flex items-center rounded font-black uppercase tracking-wider border ${sizeClass} ${methodStyles[method]}`}>
      {method}
    </span>
  )
}

function ParamRow({ p }: { p: Param }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-6 py-4 border-b border-slate-100 last:border-0">
      <div>
        <div className="font-mono text-[13px] font-semibold text-slate-900 break-all">{p.name}</div>
        {p.required && (
          <div className="text-[10px] font-black uppercase tracking-wider text-rose-600 mt-1">Required</div>
        )}
      </div>
      <div>
        <div className="text-[12px] font-mono text-slate-500 mb-1">{p.type}</div>
        <div className="text-[13px] text-slate-700 leading-relaxed">{p.description}</div>
      </div>
    </div>
  )
}

const responseCodeStyles: Record<string, string> = {
  '2': 'bg-emerald-950 text-emerald-300 border-emerald-800',
  '4': 'bg-rose-950 text-rose-300 border-rose-800',
  '5': 'bg-amber-950 text-amber-300 border-amber-800',
}

function ResponsePanel({ endpoint }: { endpoint: Endpoint }) {
  const [activeCode, setActiveCode] = useState(endpoint.responses[0].code)
  const active = endpoint.responses.find((r) => r.code === activeCode) || endpoint.responses[0]

  return (
    <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2 flex-wrap">
        <MethodBadge method={endpoint.method} size="md" />
        <code className="text-[12px] font-mono text-slate-300 font-semibold break-all">{endpoint.path}</code>
      </div>
      <div className="px-4 py-3">
        <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
          Response samples
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {endpoint.responses.map((r) => {
            const isActive = r.code === activeCode
            const codeStyle = responseCodeStyles[r.code[0]] || responseCodeStyles['4']
            return (
              <button
                key={r.code}
                onClick={() => setActiveCode(r.code)}
                className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded border transition-colors ${
                  isActive
                    ? codeStyle
                    : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
                }`}
              >
                {r.code}
              </button>
            )
          })}
        </div>
        <pre className="text-[12px] leading-relaxed text-slate-100 font-mono overflow-x-auto max-h-[400px] overflow-y-auto">
          <code>{active.body}</code>
        </pre>
      </div>
    </div>
  )
}

function EndpointSection({ endpoint }: { endpoint: Endpoint }) {
  const hasBody = endpoint.bodyParams && endpoint.bodyParams.length > 0
  const hasParams = endpoint.params && endpoint.params.length > 0

  return (
    <section id={endpoint.id} className="scroll-mt-24 py-10 border-b border-slate-200">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_460px] gap-8">
        <div className="min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <MethodBadge method={endpoint.method} size="md" />
            <code className="text-[13px] font-mono text-slate-900 font-semibold break-all">{endpoint.path}</code>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight">{endpoint.title}</h2>
          <p className="text-[14px] text-slate-600 leading-relaxed mb-6">{endpoint.description}</p>

          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-1">
            Authorizations
          </div>
          <div className="text-[13px] font-mono text-slate-700 mb-6">api_key_auth</div>

          {hasParams && (
            <>
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 border-b border-slate-200 pb-2 mb-2">
                Path & query parameters
              </div>
              {endpoint.params!.map((p) => <ParamRow key={p.name} p={p} />)}
            </>
          )}

          {hasBody && (
            <>
              <div className={`text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 border-b border-slate-200 pb-2 mb-2 ${hasParams ? 'mt-8' : ''}`}>
                Request body
              </div>
              {endpoint.bodyParams!.map((p) => <ParamRow key={p.name} p={p} />)}
            </>
          )}
        </div>

        <aside className="xl:sticky xl:top-24 xl:self-start">
          <ResponsePanel endpoint={endpoint} />
        </aside>
      </div>
    </section>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────

function Sidebar({ goTo }: { goTo: (id: string, e?: React.MouseEvent) => void }) {
  const [query, setQuery] = useState('')
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    new Set(groups.map((g) => g.id))
  )

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return groups
    const q = query.toLowerCase()
    return groups
      .map((g) => ({
        ...g,
        endpoints: g.endpoints.filter(
          (e) =>
            e.title.toLowerCase().includes(q) ||
            e.path.toLowerCase().includes(q) ||
            g.label.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.label.toLowerCase().includes(q) || g.endpoints.length > 0)
  }, [query])

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <aside className="hidden lg:block w-[280px] flex-shrink-0">
      <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col border-r border-slate-200 pr-4">
        <div className="relative py-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <nav className="flex-1 overflow-y-auto py-2 space-y-0.5">
          <a
            href={`${DOCS_ROOT}/introduction`}
            onClick={(e) => goTo('introduction', e)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-700 hover:text-indigo-700 hover:bg-slate-100 transition-colors"
          >
            Introduction
          </a>
          <a
            href={`${DOCS_ROOT}/authentication`}
            onClick={(e) => goTo('authentication', e)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-700 hover:text-indigo-700 hover:bg-slate-100 transition-colors"
          >
            Authentication
          </a>

          {filteredGroups.map((group) => {
            const isOpen = openGroups.has(group.id)
            return (
              <div key={group.id}>
                <div className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-700 hover:text-indigo-700 hover:bg-slate-100 transition-colors">
                  <a
                    href={`${DOCS_ROOT}/${group.id}`}
                    onClick={(e) => goTo(group.id, e)}
                    className="flex-1"
                  >
                    {group.label}
                  </a>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleGroup(group.id) }}
                    aria-label={isOpen ? 'Collapse' : 'Expand'}
                    className="ml-2"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? '' : '-rotate-90'}`} />
                  </button>
                </div>
                {isOpen && group.endpoints.length > 0 && (
                  <div className="ml-1 mt-0.5 space-y-0.5 border-l-2 border-slate-100">
                    {group.endpoints.map((ep) => (
                      <a
                        key={ep.id}
                        href={`${DOCS_ROOT}/${ep.id}`}
                        onClick={(e) => goTo(ep.id, e)}
                        className="flex items-start gap-2 pl-3 pr-2 py-1.5 rounded-r-md text-[12px] text-slate-600 hover:text-indigo-700 hover:bg-slate-100 transition-colors"
                      >
                        <MethodBadge method={ep.method} />
                        <span className="flex-1 leading-snug">{ep.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <a
            href={`${DOCS_ROOT}/errors`}
            onClick={(e) => goTo('errors', e)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-700 hover:text-indigo-700 hover:bg-slate-100 transition-colors"
          >
            Errors &amp; rate limits
          </a>
        </nav>
      </div>
    </aside>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────

export default function ApiReferencePage() {
  const goTo = useSectionRouter()

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-24">
        <div className="flex gap-8">
          <Sidebar goTo={goTo} />

          <div className="flex-1 min-w-0 pb-24">
            {/* Hero */}
            <section className="pt-6 pb-10 border-b border-slate-200">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
                Giggal.ai API Reference
              </h1>
              <p className="text-[15px] text-slate-600 leading-relaxed max-w-2xl">
                Verify single emails, run bulk batches, and deep-check catch-all and SEG-protected
                addresses. All endpoints use JSON, are authenticated with an API key, and are
                billed per successful verification.
              </p>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24 py-10 border-b border-slate-200 space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Introduction</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                The Giggal.ai API lets you verify single email addresses, run bulk batches of up to
                50,000 emails per job, and deep-check catch-all and SEG-protected addresses via a
                simple JSON REST API. Every successful verification costs credits from your account.
              </p>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Base URL
                </div>
                <code className="block text-[13px] font-mono bg-slate-100 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 break-all">
                  {BASE_URL}
                </code>
              </div>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Get an API key
                </div>
                <p className="text-[14px] text-slate-600 mb-2 leading-relaxed">
                  Create an API key from your Giggal.ai dashboard under Settings → API Keys. Each
                  key is scoped to your account, tracks its own usage, and can be revoked at any time.
                </p>
                <a
                  href={`${APP_URL}/settings/api-keys`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-[14px]"
                >
                  Open API Keys settings <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Response envelope
                </div>
                <p className="text-[14px] text-slate-600 mb-2 leading-relaxed">
                  Every response follows a consistent JSON envelope:
                </p>
                <pre className="text-[12px] font-mono bg-slate-950 text-slate-100 rounded-lg px-4 py-3 overflow-x-auto">
                  <code>{`// Success
{ "success": true, "data": { ... }, "meta": { ... } }

// Error
{ "success": false, "error": "Human-readable error message" }`}</code>
                </pre>
              </div>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Quick start — verify one email with cURL
                </div>
                <pre className="text-[12px] font-mono bg-slate-950 text-slate-100 rounded-lg px-4 py-3 overflow-x-auto">
                  <code>{`curl -X POST ${BASE_URL}/verify \\
  -H "Authorization: Bearer tp_live_xxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"email":"info@giggal.ai"}'`}</code>
                </pre>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication" className="scroll-mt-24 py-10 border-b border-slate-200 space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Authentication</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Pass your API key with every request via one of two headers. Either works.
              </p>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Option 1 — Bearer token
                </div>
                <pre className="text-[12px] font-mono bg-slate-950 text-slate-100 rounded-lg px-4 py-3 overflow-x-auto">
                  <code>{`Authorization: Bearer tp_live_xxxxxxxxxxxxxxxxxxxxxxxxx`}</code>
                </pre>
              </div>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Option 2 — X-API-Key header
                </div>
                <pre className="text-[12px] font-mono bg-slate-950 text-slate-100 rounded-lg px-4 py-3 overflow-x-auto">
                  <code>{`X-API-Key: tp_live_xxxxxxxxxxxxxxxxxxxxxxxxx`}</code>
                </pre>
              </div>

              <p className="text-[13px] text-slate-500 leading-relaxed">
                Missing, invalid, or revoked keys return HTTP 401. Never expose API keys in
                client-side code — proxy calls through your backend instead.
              </p>

              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 mb-2">
                  Idempotency (bulk & catch-all)
                </div>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-2">
                  For <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">POST /v1/verify-batch</code> and <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">POST /v1/catchall</code>, pass an <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">Idempotency-Key</code> header. Retries with the same key return the original response without creating a duplicate job or double-charging credits.
                </p>
                <pre className="text-[12px] font-mono bg-slate-950 text-slate-100 rounded-lg px-4 py-3 overflow-x-auto">
                  <code>{`Idempotency-Key: 2026-07-24-list-batch-42`}</code>
                </pre>
              </div>
            </section>

            {groups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <section className="pt-10 pb-2">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{group.label}</h2>
                  <p className="text-[14px] text-slate-500 mt-2">
                    {group.endpoints.length} endpoint{group.endpoints.length > 1 ? 's' : ''} in this group.
                  </p>
                </section>
                {group.endpoints.map((ep) => (
                  <EndpointSection key={ep.id} endpoint={ep} />
                ))}
              </div>
            ))}

            {/* Errors & rate limits */}
            <section id="errors" className="scroll-mt-24 py-10 border-b border-slate-200 space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Errors &amp; rate limits</h2>

              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead className="bg-slate-50/60 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-4 py-3 font-black text-slate-700 uppercase text-[10px] tracking-wider">Status</th>
                      <th className="text-left px-4 py-3 font-black text-slate-700 uppercase text-[10px] tracking-wider">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">200 OK</td><td className="px-4 py-3 text-slate-600">Request succeeded (synchronous verification or status/results fetch).</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">202 Accepted</td><td className="px-4 py-3 text-slate-600">Async job or task created and queued.</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">400 Bad Request</td><td className="px-4 py-3 text-slate-600">Missing or invalid parameters (bad email format, empty emails array, missing jobId).</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">401 Unauthorized</td><td className="px-4 py-3 text-slate-600">Missing, invalid, or revoked API key.</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">402 Payment Required</td><td className="px-4 py-3 text-slate-600">Insufficient credits for the requested operation.</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">404 Not Found</td><td className="px-4 py-3 text-slate-600">Job or task ID does not exist under your account.</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">409 Conflict</td><td className="px-4 py-3 text-slate-600">Job is not in the required state (e.g. requesting results before completion).</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">410 Gone</td><td className="px-4 py-3 text-slate-600">Job results have passed the 48-hour retention window.</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">429 Too Many Requests</td><td className="px-4 py-3 text-slate-600">Rate limit exceeded — back off and retry.</td></tr>
                    <tr><td className="px-4 py-3 font-mono font-semibold text-slate-900">500 / 502 / 503</td><td className="px-4 py-3 text-slate-600">Server or upstream verification service is temporarily unavailable.</td></tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Rate limits</h3>
                <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">
                  Every response includes <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">RateLimit-Limit</code>, <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">RateLimit-Remaining</code>, and <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">RateLimit-Reset</code> headers (RFC casing) so you can pace requests. <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">RateLimit-Reset</code> is the number of seconds until the current window resets.
                </p>
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <table className="w-full text-[13px]">
                    <thead className="bg-slate-50/60 border-b border-slate-200">
                      <tr>
                        <th className="text-left px-4 py-3 font-black text-slate-700 uppercase text-[10px] tracking-wider">Category</th>
                        <th className="text-left px-4 py-3 font-black text-slate-700 uppercase text-[10px] tracking-wider">Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="px-4 py-3 text-slate-700">All endpoints (default)</td><td className="px-4 py-3 font-mono text-slate-900">300 requests / 15 minutes</td></tr>
                      <tr><td className="px-4 py-3 text-slate-700">Batch creation (POST /v1/verify-batch, POST /v1/catchall)</td><td className="px-4 py-3 font-mono text-slate-900">30 requests / 15 minutes</td></tr>
                      <tr><td className="px-4 py-3 text-slate-700">Job polling (GET /v1/jobs/:id, GET /v1/jobs/:id/results)</td><td className="px-4 py-3 font-mono text-slate-900">600 requests / 15 minutes</td></tr>
                      <tr><td className="px-4 py-3 text-slate-700">Max emails per bulk job</td><td className="px-4 py-3 font-mono text-slate-900">50,000</td></tr>
                      <tr><td className="px-4 py-3 text-slate-700">Job results retention</td><td className="px-4 py-3 font-mono text-slate-900">48 hours</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[13px] text-slate-600 mt-3 leading-relaxed">
                  The three-tier split exists because polling naturally happens more often than batch creation — you might poll every few seconds while a job runs, so <span className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">600 / 15 min</span> ({'≈'} 40/min) gives you room without hammering the backend.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">429 response format</h3>
                <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">
                  When you hit a rate limit, the API returns HTTP 429 with this body:
                </p>
                <pre className="text-[12px] font-mono bg-slate-950 text-slate-100 rounded-lg px-4 py-3 overflow-x-auto">
                  <code>{`{
  "success": false,
  "message": "Developer API rate limit exceeded"
}`}</code>
                </pre>
                <p className="text-[13px] text-slate-500 mt-2 leading-relaxed">
                  Back off using the <code className="font-mono text-[12px] bg-slate-100 px-1.5 py-0.5 rounded">RateLimit-Reset</code> header value (seconds until the window resets) before retrying.
                </p>
              </div>

              <p className="text-[13px] text-slate-600">
                Need higher limits? <Link href="/contact-us" className="text-indigo-600 hover:text-indigo-700 font-bold">Talk to us</Link> — we routinely lift limits for verified integration partners.
              </p>
            </section>

            {/* Final CTA */}
            <section className="rounded-2xl bg-indigo-600 text-white p-8 md:p-10 mt-10">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Ready to integrate?</h3>
              <p className="text-indigo-100 max-w-2xl mb-6 text-[15px] leading-relaxed">
                Create your API key in seconds. Free trial credits included so you can wire it up
                end-to-end before spending a cent.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`${APP_URL}/settings/api-keys`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-black text-[14px] hover:bg-indigo-50 transition-colors"
                >
                  Get your API key
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-[14px] hover:bg-white/10 transition-colors"
                >
                  Talk to our team
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
