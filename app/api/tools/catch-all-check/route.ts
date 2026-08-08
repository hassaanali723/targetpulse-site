import { NextResponse } from 'next/server'
import { EMAIL_RE, invalidSyntax, runVerification, type VerifyResult } from '@/lib/publicVerify'

/**
 * Free catch-all checker endpoint for /tools/catch-all-email-checker.
 *
 * Same verification as the homepage console (shared `lib/publicVerify`), but
 * with a tighter public-abuse policy because each check runs a real SMTP + deep
 * catch-all verification that costs infrastructure:
 *
 *   - 5 checks per IP per rolling 24 hours. Over the limit we return a friendly
 *     `limited: true` payload (HTTP 200), NOT an error, so the tool can show a
 *     sign-up CTA instead of a red error state.
 *   - Results are cached per email address for 24h. A repeat check of the same
 *     address returns the cached result and does NOT consume the daily quota or
 *     a backend verification.
 *
 * The maps are in-memory and per-instance. Giggal.ai runs this site as a single
 * long-lived Railway service, so the counters persist across requests. If it is
 * ever scaled to multiple instances the limit becomes per-instance; move the
 * counter to Redis at that point.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000
const MAX_PER_DAY = 5

// ip -> timestamps of *counted* checks in the current window
const hits = new Map<string, number[]>()
// normalized email -> cached verification result
const cache = new Map<string, { at: number; result: VerifyResult }>()

const LIMIT_MESSAGE =
  'You have used your 5 free checks for today. Sign up for 1,000 free credits, no card required, to verify your whole list.'

function recentHits(ip: string): number[] {
  const now = Date.now()
  return (hits.get(ip) || []).filter((t) => now - t < DAY_MS)
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
    // Syntax failures never touch the backend, so they are free and uncounted.
    return NextResponse.json(invalidSyntax(email))
  }

  const key = email.toLowerCase()

  // Cached address — free, does not touch the quota or the backend.
  const cached = cache.get(key)
  if (cached && Date.now() - cached.at < DAY_MS) {
    return NextResponse.json({ ...cached.result, cached: true })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  const counted = recentHits(ip)
  if (counted.length >= MAX_PER_DAY) {
    hits.set(ip, counted)
    return NextResponse.json({ limited: true, message: LIMIT_MESSAGE })
  }

  const out = await runVerification(email, ip)
  if (!out.ok) {
    // Backend failures do not burn the caller's daily allowance.
    return NextResponse.json({ error: out.error }, { status: out.status })
  }

  // Success: cache the result and count this check against the daily limit.
  cache.set(key, { at: Date.now(), result: out.result })
  counted.push(Date.now())
  hits.set(ip, counted)

  return NextResponse.json(out.result)
}
