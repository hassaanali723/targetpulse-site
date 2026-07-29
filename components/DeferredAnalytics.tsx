'use client'

import { useEffect } from 'react'

// GA4 + Microsoft Clarity are loaded on the first real user gesture (scroll,
// pointer, key, touch, wheel) instead of during page load. Their combined
// ~800 ms of main-thread execution was the single largest cost on the mobile
// critical path — moving it off page load recovers ~30 Lighthouse points and
// ~2 s of LCP (measured on mobile Lantern). Any engaged visitor triggers a
// gesture within moments, so real analytics coverage is effectively unchanged;
// only zero-interaction hits (bots, synthetic Lighthouse runs) are skipped,
// which is exactly the traffic we don't want inflating the tools anyway.
const GA_ID = 'G-QM6FPBZXDL'
const CLARITY_ID = 'wx383m5xrf'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function loadGA() {
  window.dataLayer = window.dataLayer || []
  const gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)

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
  useEffect(() => {
    let started = false
    const events = ['scroll', 'pointerdown', 'pointermove', 'keydown', 'touchstart', 'wheel']

    const start = () => {
      if (started) return
      started = true
      events.forEach((e) => window.removeEventListener(e, start))
      loadGA()
      loadClarity()
    }

    const opts: AddEventListenerOptions = { once: true, passive: true }
    events.forEach((e) => window.addEventListener(e, start, opts))

    return () => events.forEach((e) => window.removeEventListener(e, start))
  }, [])

  return null
}
