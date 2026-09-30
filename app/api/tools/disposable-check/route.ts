import { NextResponse } from 'next/server'
import { EMAIL_RE, invalidSyntax, runVerification, type LogLevel, type StepStatus, type VerifyResult, getVisitorIp } from '@/lib/publicVerify'

/**
 * Free disposable email checker endpoint for /disposable-email-checker.
 *
 * Same policy as the catch-all tool (`/api/tools/catch-all-check`):
 *
 *   - Every address goes to the backend public validator through the shared
 *     `runVerification`. The backend owns the disposable-domain list (100,000+
 *     domains, refreshed every six hours, admin overrides) and answers
 *     disposable domains before any SMTP work. For other domains it runs its
 *     full check. There is no local copy of the list: a copy kept here
 *     drifted and reported real throwaway domains as fine.
 *     See docs/DISPOSABLE_CHECK_GUIDE.md.
 *   - This route reports ONLY the disposable answer. The backend response
 *     also carries the deliverability verdict, but this tool must not show
 *     it (that is the verifier's job), so the steps and logs returned here
 *     cover two checks: syntax and the disposable registry.
 *   - The ONLY rate limit is the backend's guest limit (5 checks per IP per
 *     hour). A backend 429 becomes a `limited: true` payload (HTTP 200) so
 *     the console shows a sign-up CTA. No second, site-side quota.
 *   - Results are cached per address for 24h. Repeats are free.
 *   - Other backend errors are returned as errors. We never invent a result
 *     when the backend did not answer.
 *
 * The cache is in-memory and per-instance, same as the catch-all route.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000

// Shape the disposable console renders. `steps` has only the two checks
// this tool performs, so the sidebar never shows a mailbox check that did
// not happen.
interface DisposableToolResult {
  email: string
  domain: string
  disposable: boolean
  steps: Record<'basic' | 'disposable', StepStatus>
  logs: { step: string; text: string; level: LogLevel }[]
  verdict: VerifyResult['verdict']
  meta: VerifyResult['meta']
}

// normalized email -> cached result
const cache = new Map<string, { at: number; result: DisposableToolResult }>()

// Cloudflare-aware; the old x-forwarded-for[0] read was visitor-controlled.
function visitorIp(req: Request): string {
  return getVisitorIp(req)
}

// Reduce the backend's full result to the disposable answer.
function toToolResult(r: VerifyResult): DisposableToolResult {
  const disposable = !!r.meta.disposable
  const DOMAIN = r.domain.toUpperCase()
  return {
    email: r.email,
    domain: r.domain,
    disposable,
    steps: { basic: 'ok', disposable: disposable ? 'error' : 'ok' },
    logs: [
      { step: 'basic', text: `[BASIC] Validating syntax and structure for ${r.email}...`, level: 'info' },
      { step: 'basic', text: `[SUCCESS] Address format is valid.`, level: 'success' },
      { step: 'disposable', text: `[DISPOSABLE] Checking ${DOMAIN} against the disposable mail registry...`, level: 'info' },
      disposable
        ? { step: 'disposable', text: `[RESULT] ${DOMAIN} is a disposable or temporary mail service.`, level: 'error' }
        : { step: 'disposable', text: `[RESULT] ${DOMAIN} is not a known disposable mail service.`, level: 'success' },
    ],
    verdict: disposable
      ? { type: 'undeliverable', title: 'Disposable Email', desc: 'This domain is a disposable or temporary mail service.', score: 0 }
      : { type: 'unknown', title: 'Not Disposable', desc: 'This domain is not a known disposable mail service.', score: 0 },
    meta: r.meta,
  }
}

export async function POST(req: Request) {
  let email = ''
  try {
    const body = await req.json()
    email = String(body?.email ?? '').trim()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (!email) return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    // Syntax failures never touch the backend, so they are free.
    return NextResponse.json(invalidSyntax(email))
  }

  const key = email.toLowerCase()

  // Cached address: free, does not touch the backend or its guest limit.
  const cached = cache.get(key)
  if (cached && Date.now() - cached.at < DAY_MS) {
    return NextResponse.json({ ...cached.result, cached: true })
  }

  const out = await runVerification(email, visitorIp(req))
  if (!out.ok) {
    if (out.status === 429) {
      // Backend guest limit. Soft response so the console shows the CTA.
      return NextResponse.json({ limited: true, message: out.error })
    }
    return NextResponse.json({ error: out.error }, { status: out.status })
  }

  const result = toToolResult(out.result)
  cache.set(key, { at: Date.now(), result })
  return NextResponse.json(result)
}
