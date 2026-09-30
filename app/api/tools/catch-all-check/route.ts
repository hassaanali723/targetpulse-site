import { NextResponse } from 'next/server'
import { EMAIL_RE, invalidSyntax, runVerification, type VerifyResult, getVisitorIp } from '@/lib/publicVerify'

/**
 * Free catch-all checker endpoint for /email-checker.
 *
 * Same verification as the homepage console (shared `lib/publicVerify`).
 *
 *   - The ONLY rate limit is the backend's guest limit (5 checks per IP per
 *     hour). The visitor's IP is forwarded so the backend counts per visitor.
 *     When the backend answers 429 we return a `limited: true` payload
 *     (HTTP 200) so the tool shows a sign-up CTA instead of a red error.
 *     There is no second, site-side quota.
 *   - Results are cached per email address for 24h. A repeat check of the
 *     same address returns the cached result and does not call the backend,
 *     so it does not count against the guest limit.
 *
 * The cache is in-memory and per-instance. Giggal.ai runs this site as a
 * single long-lived Railway service, so it persists across requests.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000

// normalized email -> cached verification result
const cache = new Map<string, { at: number; result: VerifyResult }>()

// Cloudflare-aware; the old x-forwarded-for[0] read was visitor-controlled.
function visitorIp(req: Request): string {
  return getVisitorIp(req)
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

  cache.set(key, { at: Date.now(), result: out.result })
  return NextResponse.json(out.result)
}
