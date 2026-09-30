import { NextResponse } from 'next/server'
import { EMAIL_RE, invalidSyntax, runVerification, getVisitorIp } from '@/lib/publicVerify'

/**
 * Public "real-time verifier" endpoint for the landing-page console.
 *
 * It proxies the backend's public validator `POST /api/public/validate-email`
 * (via the shared `lib/publicVerify` mapping) so the console's verdicts match
 * giggal.ai exactly, including the deep catch-all flow that resolves to
 * valid/invalid.
 *
 * Rate limiting: the backend's guest limit (5 checks per visitor IP per
 * hour) is the only limit. The visitor's IP is passed through so the backend
 * counts per visitor. A backend 429 is returned as a `limited: true` payload
 * (HTTP 200) so the console shows the sign-up card, same as the tool routes.
 * There is no site-side limiter.
 *
 * Required env (server-only):
 *   BACKEND_URL         e.g. http://localhost:5050 (dev) or the Railway backend URL.
 *                       Falls back to NEXT_PUBLIC_BACKEND_URL if set.
 *   PUBLIC_SITE_TOKEN   lets the backend trust the forwarded visitor IP.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

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

  const out = await runVerification(email, getVisitorIp(req))
  if (!out.ok) {
    if (out.status === 429) {
      // Backend guest limit. Soft response so the console shows the CTA.
      return NextResponse.json({ limited: true, message: out.error })
    }
    return NextResponse.json({ error: out.error }, { status: out.status })
  }
  return NextResponse.json(out.result)
}
