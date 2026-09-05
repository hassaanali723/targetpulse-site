// Full-journey GA4 instrumentation.
//
// Design constraint that shapes this whole file: GA4 allows only 500 distinct
// event NAMES per property, and silently drops new ones past the cap. So we
// deliberately emit a SMALL fixed set of names (click, scroll_depth, engage,
// form_submit, ...) and put the specificity in PARAMETERS instead. Never add a
// per-button event name — put it in `label`.
//
// Everything here is delegated from a handful of listeners on document/window,
// so coverage does not depend on individual components opting in and there is
// no per-element listener cost.

type Params = Record<string, unknown>

/** Fire a GA4 event. No-ops safely until gtag has loaded. */
export function track(name: string, params: Params = {}): void {
  if (typeof window === 'undefined') return
  // dataLayer exists before gtag.js finishes downloading; pushes queue up and
  // flush on load, so events fired early are not lost.
  window.gtag?.('event', name, { ...params, page_path: location.pathname })
}

// ── helpers ─────────────────────────────────────────────────────────────

/** Readable label for an element: its own text, else aria-label/title/alt. */
function labelFor(el: HTMLElement): string {
  const explicit =
    el.getAttribute('data-track') ||
    el.getAttribute('aria-label') ||
    el.getAttribute('title')
  if (explicit) return explicit.slice(0, 100)
  const img = el.querySelector('img')
  const alt = img?.getAttribute('alt')
  if (alt) return alt.slice(0, 100)
  return (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100) || '(no text)'
}

/** Nearest landmark/section so we know WHERE on the page the click happened. */
function sectionFor(el: HTMLElement): string {
  const holder = el.closest('[data-section],section,header,footer,nav,aside')
  if (!holder) return 'body'
  return (
    holder.getAttribute('data-section') ||
    holder.getAttribute('id') ||
    holder.tagName.toLowerCase()
  ).slice(0, 60)
}

function isOutbound(href: string): boolean {
  try {
    return new URL(href, location.href).hostname !== location.hostname
  } catch {
    return false
  }
}

// ── 1. clicks — one delegated listener covers every element on the site ──

function initClicks(): void {
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null
      if (!target?.closest) return

      // Walk up to the meaningful interactive ancestor, so a click on the
      // <span> inside a <button> is attributed to the button.
      const el = target.closest(
        'a,button,[role="button"],[data-track],input[type="submit"],summary'
      ) as HTMLElement | null
      if (!el) return

      const tag = el.tagName.toLowerCase()
      const href = el.getAttribute('href') || ''
      const label = labelFor(el)
      const section = sectionFor(el)

      const base: Params = { label, section, tag }

      if (href && isOutbound(href)) {
        // Outbound gets its own name because it usually ends the session —
        // it is the handoff into the app / an integration partner.
        track('outbound_click', {
          ...base,
          link_url: href,
          link_domain: (() => {
            try {
              return new URL(href, location.href).hostname
            } catch {
              return 'unknown'
            }
          })(),
        })
        return
      }

      track('click', { ...base, link_url: href || undefined })
    },
    // passive: never block the interaction we are measuring.
    { capture: true, passive: true }
  )
}

// ── 2. scroll depth — how far down the page they actually got ───────────

function initScrollDepth(): void {
  const marks = [25, 50, 75, 90, 100]
  let fired: number[] = []

  const check = () => {
    const doc = document.documentElement
    const scrollable = doc.scrollHeight - window.innerHeight
    if (scrollable <= 0) return
    const pct = Math.min(100, Math.round((window.scrollY / scrollable) * 100))
    for (const m of marks) {
      if (pct >= m && !fired.includes(m)) {
        fired.push(m)
        track('scroll_depth', { percent: m })
      }
    }
  }

  // rAF-throttled: at most one measurement per frame regardless of scroll rate.
  let queued = false
  window.addEventListener(
    'scroll',
    () => {
      if (queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        check()
      })
    },
    { passive: true }
  )

  // Reset per route so depth is measured per page, not per session.
  resetScroll = () => {
    fired = []
  }
}

let resetScroll: (() => void) | null = null

// ── 3. engagement time — how long they actually stayed, per page ─────────

function initEngagement(): void {
  let start = Date.now()
  let accrued = 0
  let visible = !document.hidden

  const flush = (reason: string) => {
    if (visible) accrued += Date.now() - start
    visible = false
    const seconds = Math.round(accrued / 1000)
    // Sub-second views are bounces/prefetches; not worth a hit.
    if (seconds < 1) return
    track('engage', { seconds, reason })
    accrued = 0
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      flush('hidden')
    } else {
      visible = true
      start = Date.now()
    }
  })

  // pagehide is the only reliably-fired terminal event on mobile Safari;
  // beforeunload does not fire there.
  window.addEventListener('pagehide', () => flush('exit'))

  resetEngagement = () => {
    accrued = 0
    start = Date.now()
    visible = !document.hidden
  }
}

let resetEngagement: (() => void) | null = null

// ── 4. forms ────────────────────────────────────────────────────────────

function initForms(): void {
  document.addEventListener(
    'submit',
    (e) => {
      const form = e.target as HTMLFormElement | null
      if (!form || form.tagName !== 'FORM') return
      track('form_submit', {
        label: form.getAttribute('data-track') || form.getAttribute('name') || form.id || 'form',
        section: sectionFor(form),
      })
    },
    { capture: true, passive: true }
  )
}

// ── 5. frustration + intent signals ─────────────────────────────────────

function initSignals(): void {
  // Rage click: 3+ clicks in the same small area inside 1s. Strong signal that
  // something looks interactive but isn't, or is broken.
  let hits: { x: number; y: number; t: number }[] = []
  document.addEventListener(
    'click',
    (e) => {
      const now = Date.now()
      hits = hits.filter((h) => now - h.t < 1000)
      hits.push({ x: e.clientX, y: e.clientY, t: now })
      const near = hits.filter(
        (h) => Math.abs(h.x - e.clientX) < 40 && Math.abs(h.y - e.clientY) < 40
      )
      if (near.length >= 3) {
        hits = []
        const el = e.target as HTMLElement
        track('rage_click', { label: labelFor(el), section: sectionFor(el) })
      }
    },
    { capture: true, passive: true }
  )

  // Copying text is a real intent signal on a marketing site (pricing, API
  // snippets, support email).
  document.addEventListener('copy', () => {
    const sel = (window.getSelection()?.toString() || '').trim()
    if (sel.length < 3) return
    track('text_copy', { length: sel.length, snippet: sel.slice(0, 60) })
  })

  // Uncaught JS errors — these silently kill conversions otherwise.
  window.addEventListener('error', (e) => {
    track('js_error', { message: String(e.message).slice(0, 150) })
  })
}

// ── 6. acquisition — where they came from ───────────────────────────────

function trackAcquisition(): void {
  const p = new URLSearchParams(location.search)
  const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const params: Params = {}
  for (const k of utm) {
    const v = p.get(k)
    if (v) params[k] = v
  }
  const ref = document.referrer
  if (ref && !ref.includes(location.hostname)) {
    try {
      params.referrer_domain = new URL(ref).hostname
    } catch {
      /* malformed referrer — ignore */
    }
  }
  if (Object.keys(params).length) track('acquisition', params)
}

// ── init / route changes ────────────────────────────────────────────────

let started = false

/** Called once, after gtag.js has been injected. */
export function initAnalytics(): void {
  if (started || typeof window === 'undefined') return
  started = true
  initClicks()
  initScrollDepth()
  initEngagement()
  initForms()
  initSignals()
  trackAcquisition()
}

/**
 * Called on every client-side route change. GA4 enhanced measurement only
 * fires page_view on history changes if that setting is on, so we send it
 * explicitly — a duplicate is far less costly than a missing pageview.
 */
export function trackPageView(path: string): void {
  resetScroll?.()
  resetEngagement?.()
  track('page_view', { page_path: path, page_title: document.title })
}
