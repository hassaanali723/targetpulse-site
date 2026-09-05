'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { initAnalytics, trackPageView } from '@/lib/analytics'

// GA4 + Microsoft Clarity are loaded on the first real user gesture (scroll,
// pointer, key, touch, wheel) instead of during page load. Their combined
// ~800 ms of main-thread execution was the single largest cost on the mobile
// critical path — moving it off page load recovers ~30 Lighthouse points and
// ~2 s of LCP (measured on mobile Lantern). Any engaged visitor triggers a
// gesture within moments, so real analytics coverage is effectively unchanged;
// only zero-interaction hits (bots, synthetic Lighthouse runs) are skipped,
// which is exactly the traffic we don't want inflating the tools anyway.
// GA4 property "Giggal.ai" (547350178) and its own Clarity project. Both are
// giggal.ai only. targetpulse.net is a separate live site with its own Clarity
// project (wx383m5xrf) and no GA4 tag, so nothing here should ever point at it.
const GA_ID = 'G-QM6FPBZXDL'
const CLARITY_ID = 'y9mq34f1u5'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function loadGA() {
  window.dataLayer = window.dataLayer || []
  // GA4's gtag.js only processes dataLayer entries that are the native
  // `arguments` object. A rest-spread arrow pushes a plain array instead,
  // which gtag.js silently ignores, so no /collect hit is ever sent and GA
  // records nothing. Use the official classic-function form.
  /* eslint-disable prefer-rest-params */
  function gtag() {
    window.dataLayer!.push(arguments)
  }
  /* eslint-enable prefer-rest-params */
  window.gtag = gtag as (...args: unknown[]) => void
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)

  const s = document.createElement('script')
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  s.async = true
  document.head.appendChild(s)
}

function loadClarity() {
  ;(function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    const t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.src = 'https://www.clarity.ms/tag/' + i
    const y = l.getElementsByTagName(r)[0]
    y.parentNode!.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_ID)
}

export default function DeferredAnalytics() {
  const pathname = usePathname()
  // The first render's pathname is already covered by gtag('config'), which
  // sends its own page_view. Only *subsequent* client-side navigations need
  // an explicit one, so skip the initial run to avoid double-counting.
  const firstRun = useRef(true)

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    trackPageView(pathname)
  }, [pathname])

  useEffect(() => {
    let started = false
    const events = ['scroll', 'pointerdown', 'pointermove', 'keydown', 'touchstart', 'wheel']

    const start = () => {
      if (started) return
      started = true
      events.forEach((e) => window.removeEventListener(e, start))
      loadGA()
      loadClarity()
      // Journey instrumentation attaches only after GA exists, so no events
      // are collected into a void. The gesture that triggers this is itself
      // the user's first interaction, so nothing meaningful precedes it.
      initAnalytics()
    }

    const opts: AddEventListenerOptions = { once: true, passive: true }
    events.forEach((e) => window.addEventListener(e, start, opts))

    // Gesture alone under-counts: a visitor who reads the page and leaves
    // without scrolling or tapping was never recorded at all, so bounces and
    // short reads were structurally invisible. Fall back to a timer so every
    // real session is counted. It runs well after LCP, and defers to an idle
    // slot, so the original reason for deferring (keeping ~800 ms of
    // third-party work off the LCP critical path) still holds.
    const idle = (cb: () => void) =>
      'requestIdleCallback' in window
        ? (window as unknown as {
            requestIdleCallback: (c: () => void, o?: { timeout: number }) => void
          }).requestIdleCallback(cb, { timeout: 2000 })
        : cb()

    const timer = window.setTimeout(() => idle(start), 3000)

    return () => {
      window.clearTimeout(timer)
      events.forEach((e) => window.removeEventListener(e, start))
    }
  }, [])

  return null
}
