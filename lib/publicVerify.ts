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

// Call the backend public validator and map the result. Returns a structured
// outcome; the caller decides the HTTP status. `ip` is forwarded so the backend
// rate-limits per visitor.
export async function runVerification(email: string, ip: string): Promise<VerifyOutcome> {
  const base = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL
  if (!base) {
    return { ok: false, status: 503, error: 'Verification service is not configured.' }
  }

  const controller = new AbortController()
  // The public validator runs SMTP + deep catch-all verification — give it room.
  const timeout = setTimeout(() => controller.abort(), 60_000)
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/api/public/validate-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': ip,
      },
      cache: 'no-store',
      signal: controller.signal,
      body: JSON.stringify({ email }),
    })

    const json = await res.json().catch(() => null)

    if (res.status === 429) {
      return {
        ok: false,
        status: 429,
        error: json?.message || 'Guest limit reached — 5 verifications per hour. Sign up for unlimited.',
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
      { step: 'basic', text: `[BASIC] Checking syntax and structure for ${email}...`, level: 'info' },
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
  const DOMAIN = domain.toUpperCase()
  const status: string = (data?.status || 'unknown').toString()
  const score: number = Number.isFinite(data?.deliverability_score) ? data.deliverability_score : 0
  const catchAll = !!attrs.catch_all
  const catchAllVerdict: string | null = data?.catch_all_verdict ?? null
  const provider: string | null = mail.smtp_provider || null
  const mx: string | null = mail.mx_record || mail.implicit_mx || null

  const logs: VerifyResult['logs'] = []
  const steps: VerifyResult['steps'] = { basic: 'ok', dns: 'ok', catchall: 'ok', mailbox: 'ok' }

  // Step 1 — syntax
  logs.push({ step: 'basic', text: `[BASIC] Validating syntax and domain structure...`, level: 'info' })
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
    text: `[SUCCESS] Secure SMTP channel active${provider ? ` — ${provider}` : ''}${mx ? ` (${mx})` : ''}.`,
    level: 'success',
  })

  // Step 3 — catch-all (the backend resolved it; reflect that here)
  logs.push({ step: 'catchall', text: `[CATCH-ALL] Probing recipient acceptance policy...`, level: 'info' })
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
  logs.push({ step: 'mailbox', text: `[SMTP] Querying recipient socket deliverability state...`, level: 'info' })

  let verdict: VerifyResult['verdict']
  if (status === 'deliverable') {
    logs.push({ step: 'mailbox', text: `[SUCCESS] Server accepted recipient — mailbox is active.`, level: 'success' })
    steps.mailbox = 'ok'
    verdict = {
      type: 'deliverable',
      title: 'Deliverable',
      desc: catchAll
        ? 'Verified deliverable on a catch-all domain via deep verification — safe to send.'
        : 'SMTP validation passed. The mailbox is fully active.',
      score,
    }
  } else if (status === 'undeliverable') {
    logs.push({ step: 'mailbox', text: `[FAILED] Server rejected recipient — mailbox not found.`, level: 'error' })
    steps.mailbox = 'error'
    verdict = {
      type: 'undeliverable',
      title: 'Undeliverable',
      desc: attrs.disposable
        ? 'This is a disposable email address.'
        : catchAll
          ? 'Deep catch-all verification found no active mailbox — this address will bounce.'
          : "This mailbox doesn't exist — sending here will bounce.",
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
        ? "Catch-all domain — we couldn't confirm this specific mailbox."
        : "Inconclusive — the mail server didn't give a clear answer.",
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
