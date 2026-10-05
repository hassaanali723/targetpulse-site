// Shared server-side email verification logic.
//
// Both the landing-page console (`/api/verify`) and the free catch-all tool
// (`/api/tools/catch-all-check`) proxy the SAME backend endpoint,
// `POST /api/public/validate-email`, and map its result into the step/verdict
// shape the console renders. Keeping the mapping here means the two routes can
// never drift apart on how a verdict is derived.
//
// Server-only: this calls an internal backend with a server-side URL and must
// never be imported into a client component.

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The visitor's real IP for per-visitor quotas and for the backend's
 * per-guest rate limit. giggal.ai is proxied by Cloudflare, which sets
 * cf-connecting-ip to the true client and cannot be spoofed through the edge.
 * The x-forwarded-for fallback is for local dev only: its first entry is
 * whatever the client chose to send.
 */
export function getVisitorIp(req: Request): string {
  return (
    req.headers.get('cf-connecting-ip')?.trim() ||
    req.headers.get('x-real-ip')?.trim() ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  )
}

export type StepStatus = 'ok' | 'warn' | 'error' | 'skip'
export type LogLevel = 'info' | 'success' | 'warn' | 'error'
export type VerdictType = 'deliverable' | 'catchall' | 'risky' | 'undeliverable' | 'unknown'

export interface VerifyResult {
  email: string
  domain: string
  // True when the domain accepts mail for every recipient. Surfaced explicitly
  // so the catch-all tool can show it as a distinct step before the verdict.
  catchAll: boolean
  steps: Record<'basic' | 'dns' | 'catchall' | 'mailbox', StepStatus>
  logs: { step: string; text: string; level: LogLevel }[]
  verdict: { type: VerdictType; title: string; desc: string; score: number }
  meta: { provider: string | null; mxRecord: string | null; disposable: boolean; role: boolean; freeEmail: boolean }
}

export type VerifyOutcome =
  | { ok: true; result: VerifyResult }
  | { ok: false; status: number; error: string }

// Console output when the backend flags the domain as disposable. The backend
// answers from its list before any DNS or SMTP work, so the log must not claim
// a mail-server lookup happened. The backend reports these as undeliverable
// with a score of 0; we mirror that verdict.
export function disposableResult(email: string, domain: string): VerifyResult {
  const DOMAIN = domain.toUpperCase()
  return {
    email,
    domain,
    catchAll: false,
    steps: {
      basic: 'ok',
      dns: 'skip',
      catchall: 'skip',
      mailbox: 'error',
    },
    logs: [
      { step: 'basic', text: `[BASIC] Validating address format and domain for ${email}...`, level: 'info' },
      { step: 'basic', text: `[SUCCESS] Address format is valid.`, level: 'success' },
      { step: 'disposable', text: `[DISPOSABLE] Checking ${DOMAIN} against the disposable mail registry...`, level: 'info' },
      { step: 'disposable', text: `[WARNING] ${DOMAIN} is a disposable or temporary mail service.`, level: 'warn' },
      { step: 'mailbox', text: `[RESULT] Mailbox check skipped. Disposable addresses are reported as undeliverable.`, level: 'error' },
    ],
    verdict: {
      type: 'undeliverable',
      title: 'Disposable Email',
      desc: 'This domain is a disposable or temporary mail service.',
      score: 0,
    },
    meta: {
      provider: null,
      mxRecord: null,
      disposable: true,
      role: false,
      freeEmail: false,
    },
  }
}

// Call the backend public validator and map the result. Returns a structured
// outcome; the caller decides the HTTP status. `ip` is forwarded so the backend
// rate-limits per visitor.
export async function runVerification(email: string, ip: string): Promise<VerifyOutcome> {
  // Disposable detection happens in the backend (single source of truth,
  // refreshed on a schedule). It short-circuits before any mailbox check, so
  // there is nothing to save by checking locally, and a local copy drifts.
  const base = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL
  if (!base) {
    return { ok: false, status: 503, error: 'Verification service is not configured.' }
  }

  const controller = new AbortController()
  // The public validator runs mailbox check + deep catch-all verification — give it room.
  const timeout = setTimeout(() => controller.abort(), 60_000)
  try {
    // The backend limits guests to 5 checks per hour per IP. Every visitor
    // of this site reaches it from the same server IP, so we pass the
    // visitor's IP explicitly. The backend honours X-Visitor-IP only when
    // X-Site-Token matches its PUBLIC_SITE_TOKEN; without the token all site
    // visitors would share one bucket.
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-Forwarded-For': ip,
    }
    const siteToken = process.env.PUBLIC_SITE_TOKEN
    if (siteToken) {
      headers['X-Site-Token'] = siteToken
      headers['X-Visitor-IP'] = ip
    } else {
      console.warn('[verify] PUBLIC_SITE_TOKEN is not set; backend will rate-limit all site visitors as one IP')
    }

    const res = await fetch(`${base.replace(/\/$/, '')}/api/public/validate-email`, {
      method: 'POST',
      headers,
      cache: 'no-store',
      signal: controller.signal,
      body: JSON.stringify({ email }),
    })

    const json = await res.json().catch(() => null)

    if (res.status === 429) {
      return {
        ok: false,
        status: 429,
        error: json?.message || 'Guest limit reached for now. Sign up for 1,000 free credits and unlimited checks.',
      }
    }
    if (!res.ok || !json?.success || !json?.data) {
      console.error('[verify] backend error', res.status, JSON.stringify(json).slice(0, 300))
      return { ok: false, status: 502, error: json?.error || 'Verification failed. Please try again.' }
    }

    return { ok: true, result: mapResult(email, json.data) }
  } catch (err) {
    const aborted = err instanceof Error && err.name === 'AbortError'
    console.error('[verify] request failed', aborted ? 'timeout' : err)
    return {
      ok: false,
      status: 504,
      error: aborted ? 'Verification timed out. Please try again.' : 'Could not reach the verification service.',
    }
  } finally {
    clearTimeout(timeout)
  }
}

export function invalidSyntax(email: string): VerifyResult {
  const domain = email.split('@')[1] || ''
  return {
    email,
    domain,
    catchAll: false,
    steps: { basic: 'error', dns: 'skip', catchall: 'skip', mailbox: 'skip' },
    logs: [
      { step: 'basic', text: `[BASIC] Checking address format and domain for ${email}...`, level: 'info' },
      { step: 'basic', text: `[FAILED] Address is not a valid email format.`, level: 'error' },
    ],
    verdict: { type: 'undeliverable', title: 'Invalid Email', desc: 'The address is not a valid email format.', score: 0 },
    meta: { provider: null, mxRecord: null, disposable: false, role: false, freeEmail: false },
  }
}

// Map the backend public-validator result (same shape as giggal.ai) into the
// console's step/verdict structure. `data.status` is already the FINAL verdict —
// the backend has resolved catch-all to valid/invalid before we see it.
export function mapResult(email: string, data: any): VerifyResult {
  const details = data?.details ?? {}
  const attrs = details.attributes ?? {}
  const mail = details.mail_server ?? {}
  const general = details.general ?? {}

  const domain: string = (general.domain || email.split('@')[1] || '').toString()
  if (attrs.disposable) {
    // Backend flagged the domain as disposable: keep the dedicated console
    // output for that verdict.
    return disposableResult(email, domain)
  }
  const DOMAIN = domain.toUpperCase()
  const status: string = (data?.status || 'unknown').toString()
  const score: number = Number.isFinite(data?.deliverability_score) ? data.deliverability_score : 0
  const catchAll = !!attrs.catch_all
  const catchAllVerdict: string | null = data?.catch_all_verdict ?? null
  const provider: string | null = mail.smtp_provider || null
  const mx: string | null = mail.mx_record || mail.implicit_mx || null

  const logs: VerifyResult['logs'] = []
  const steps: VerifyResult['steps'] = { basic: 'ok', dns: 'ok', catchall: 'ok', mailbox: 'ok' }

  // Step 1 — address format
  logs.push({ step: 'basic', text: `[BASIC] Validating address format and domain structure...`, level: 'info' })
  logs.push({ step: 'basic', text: `[SUCCESS] Address format is valid.`, level: 'success' })

  // Step 2 — mail servers
  logs.push({ step: 'dns', text: `[DNS] Locating active mail servers for [${DOMAIN}]...`, level: 'info' })
  const hasMx = !!(mx || provider)
  if (!hasMx) {
    logs.push({ step: 'dns', text: `[ERROR] No mail servers found. Domain does not accept email.`, level: 'error' })
    steps.dns = 'error'
    steps.catchall = 'error'
    steps.mailbox = 'error'
    return {
      email, domain, catchAll: false, steps, logs,
      verdict: { type: 'undeliverable', title: 'Undeliverable', desc: "This domain has no mail servers, so email can't be delivered.", score },
      meta: metaOf(attrs, provider, mx),
    }
  }
  logs.push({
    step: 'dns',
    text: `[SUCCESS] Mail server reachable${provider ? `, ${provider}` : ''}${mx ? ` (${mx})` : ''}.`,
    level: 'success',
  })

  // Step 3 — catch-all (the backend resolved it; reflect that here)
  logs.push({ step: 'catchall', text: `[CATCH-ALL] Checking recipient acceptance policy...`, level: 'info' })
  if (catchAll) {
    logs.push({ step: 'catchall', text: `[WARNING] Domain accepts all recipients (catch-all).`, level: 'warn' })
    logs.push({ step: 'catchall', text: `[VERIFY] Running deep catch-all verification (domain + directory signals)...`, level: 'info' })
    if (catchAllVerdict === 'valid') {
      logs.push({ step: 'catchall', text: `[SUCCESS] Deep verification: recipient confirmed active.`, level: 'success' })
    } else if (catchAllVerdict === 'invalid') {
      logs.push({ step: 'catchall', text: `[RESULT] Deep verification: no active mailbox found.`, level: 'warn' })
    }
    steps.catchall = 'warn'
  } else {
    logs.push({ step: 'catchall', text: `[INFO] Standard mailbox routing (not catch-all).`, level: 'info' })
    steps.catchall = 'ok'
  }

  // Step 4 — final verdict (driven by the backend's resolved status)
  logs.push({ step: 'mailbox', text: `[CHECK] Checking if mailbox exists...`, level: 'info' })

  let verdict: VerifyResult['verdict']
  if (status === 'deliverable') {
    logs.push({ step: 'mailbox', text: `[SUCCESS] Server accepted recipient, mailbox is active.`, level: 'success' })
    steps.mailbox = 'ok'
    verdict = {
      type: 'deliverable',
      title: 'Deliverable',
      desc: catchAll
        ? 'Verified deliverable on a catch-all domain via deep verification, safe to send.'
        : 'Mailbox verified. The mailbox is fully active.',
      score,
    }
  } else if (status === 'undeliverable') {
    logs.push({ step: 'mailbox', text: `[FAILED] Server rejected recipient, mailbox not found.`, level: 'error' })
    steps.mailbox = 'error'
    verdict = {
      type: 'undeliverable',
      title: 'Undeliverable',
      desc: attrs.disposable
        ? 'This is a disposable email address.'
        : catchAll
          ? 'Deep catch-all verification found no active mailbox, so this address will bounce.'
          : "This mailbox doesn't exist, so sending here will bounce.",
      score,
    }
  } else if (status === 'risky') {
    logs.push({ step: 'mailbox', text: `[WARNING] Recipient accepted but flagged risky.`, level: 'warn' })
    steps.mailbox = 'warn'
    verdict = { type: 'risky', title: 'Risky', desc: 'The mailbox accepted mail, but deliverability confidence is low.', score }
  } else {
    logs.push({ step: 'mailbox', text: `[INCONCLUSIVE] The server did not confirm the mailbox.`, level: 'warn' })
    steps.mailbox = 'warn'
    verdict = {
      type: 'unknown',
      title: 'Unknown',
      desc: catchAll
        ? "Catch-all domain, so we couldn't confirm this specific mailbox."
        : "Inconclusive, the mail server didn't give a clear answer.",
      score,
    }
  }

  return { email, domain, catchAll, steps, logs, verdict, meta: metaOf(attrs, provider, mx) }
}

function metaOf(attrs: any, provider: string | null, mx: string | null): VerifyResult['meta'] {
  return {
    provider,
    mxRecord: mx,
    disposable: !!attrs.disposable,
    role: !!attrs.role_account,
    freeEmail: !!attrs.free_email,
  }
}
