import { NextResponse } from 'next/server'
import { EMAIL_RE, invalidSyntax, runVerification } from '@/lib/publicVerify'

/**
 * Public "real-time verifier" endpoint for the landing-page console.
 *
 * It proxies the backend's public validator `POST /api/public/validate-email`
 * (via the shared `lib/publicVerify` mapping) so the console's verdicts match
 * giggal.ai exactly, including the deep catch-all flow that resolves to
 * valid/invalid.
 *
 * Required env (server-only):
 *   BACKEND_URL   e.g. http://localhost:5050 (dev) or the Railway backend URL.
 *                 Falls back to NEXT_PUBLIC_BACKEND_URL if set.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// ---- naive per-instance rate limit (demo abuse guard) -------------------
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_PER_WINDOW = 15
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  arr.push(now)
  hits.set(ip, arr)
  return arr.length > MAX_PER_WINDOW
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
    return NextResponse.json(invalidSyntax(email))
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again in a few minutes.' }, { status: 429 })
  }

  const out = await runVerification(email, ip)
  if (!out.ok) {
    return NextResponse.json({ error: out.error }, { status: out.status })
  }
  return NextResponse.json(out.result)
}
