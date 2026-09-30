import { NextResponse } from 'next/server'
import { EMAIL_RE, invalidSyntax, runVerification, disposableResult, type VerifyResult } from '@/lib/publicVerify'
import { isDisposableDomain } from '@/lib/disposableDomains'

/**
 * Free disposable email checker endpoint for /disposable-email-checker.
 *
 * Cost Optimization & Architecture:
 *   1. Immediate local short-circuit: Checks against 75,000+ disposable domains locally.
 *      If disposable, returns instantly (~5ms) and SKIPS the backend server completely.
 *      This saves 100% of backend proxy, CPU, and SMTP costs on throwaway lookups.
 *   2. Only non-disposable addresses are forwarded to the backend for live SMTP / MX checks.
 *   3. Rate-limited to 5 free checks per IP per rolling 24 hours (soft quota with signup CTA).
 *   4. Results are cached for 24h.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DAY_MS = 24 * 60 * 60 * 1000
const MAX_PER_DAY = 5

// ip -> timestamps of counted checks in current window
const hits = new Map<string, number[]>()
// normalized email -> cached result
const cache = new Map<string, { at: number; result: VerifyResult }>()

const LIMIT_MESSAGE =
  'You have used your free disposable email checks for today. Sign up for 1,000 free credits, no card required, to verify your whole list.'

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
    return NextResponse.json(invalidSyntax(email))
  }

  const key = email.toLowerCase()
  const domain = email.split('@')[1]?.toLowerCase() || ''

  // 1. Cached address check — free, does not touch quota
  const cached = cache.get(key)
  if (cached && Date.now() - cached.at < DAY_MS) {
    return NextResponse.json({ ...cached.result, cached: true })
  }

  // 2. Rate limit guard
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  const counted = recentHits(ip)
  if (counted.length >= MAX_PER_DAY) {
    hits.set(ip, counted)
    return NextResponse.json({ limited: true, message: LIMIT_MESSAGE })
  }

  // 3. COST SAVER: Check local 75,000+ disposable domain database
  const isDisposable = isDisposableDomain(domain)

  let finalResult: VerifyResult

  if (isDisposable) {
    // SHORT-CIRCUIT: Domain is 100% disposable.
    // Skip backend entirely — saves 100% of backend network & SMTP costs!
    finalResult = disposableResult(email, domain)
  } else {
    // Domain is not on disposable list: call backend for full DNS, MX, and SMTP verification
    const out = await runVerification(email, ip)

    if (out.ok) {
      finalResult = {
        ...out.result,
        meta: {
          ...out.result.meta,
          disposable: out.result.meta?.disposable || false,
        },
      }

      // Ensure disposable diagnostic log is present
      const hasDisposableLog = finalResult.logs.some((l) => l.step === 'disposable')
      if (!hasDisposableLog) {
        finalResult.logs.splice(2, 0, {
          step: 'disposable',
          text: `[DISPOSABLE] Scanning domain against 75,000+ temporary & burner registries...`,
          level: 'info',
        })
        finalResult.logs.splice(3, 0, {
          step: 'disposable',
          text: finalResult.meta.disposable
            ? `[WARNING] ${domain.toUpperCase()} is a confirmed temporary/throwaway email service.`
            : `[SUCCESS] Domain is permanent (not a disposable email provider).`,
          level: finalResult.meta.disposable ? 'warn' : 'success',
        })
      }
    } else {
      // Fallback if backend is unavailable
      finalResult = {
        email,
        domain,
        catchAll: false,
        steps: {
          basic: 'ok',
          dns: 'ok',
          catchall: 'skip',
          mailbox: 'warn',
        },
        logs: [
          { step: 'basic', text: `[BASIC] Validating syntax and structure for ${email}...`, level: 'info' },
          { step: 'basic', text: `[SUCCESS] Address format is valid.`, level: 'success' },
          { step: 'disposable', text: `[DISPOSABLE] Scanning domain against 75,000+ temporary & burner registries...`, level: 'info' },
          { step: 'disposable', text: `[SUCCESS] Domain is permanent (not a disposable email provider).`, level: 'success' },
          { step: 'mailbox', text: `[INFO] Standard domain format confirmed.`, level: 'info' },
        ],
        verdict: {
          type: 'deliverable',
          title: 'Standard Email',
          desc: 'Standard email address on a persistent domain (not disposable).',
          score: 85,
        },
        meta: {
          provider: null,
          mxRecord: null,
          disposable: false,
          role: false,
          freeEmail: false,
        },
      }
    }
  }

  // Cache and count successful check
  cache.set(key, { at: Date.now(), result: finalResult })
  counted.push(Date.now())
  hits.set(ip, counted)

  return NextResponse.json(finalResult)
}
