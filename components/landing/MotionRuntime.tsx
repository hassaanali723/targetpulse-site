'use client'

import { useEffect } from 'react'

// One small script that drives the home page motion. No animation library:
// every effect is CSS, and this only feeds it a few values.
//
//   [data-inview]   gets .is-in the first time it scrolls into view, which
//                   starts its CSS animation (the demos play when seen).
//   [data-count]    counts up from zero to its own text when first seen.
//   [data-spotlight] gets --mx/--my, the pointer position inside it, for a
//                   light that follows the mouse.
//   [data-tilt]     gets --rx/--ry, a small 3D tilt toward the pointer.
//
// Pages render complete without this script: final numbers, final states, no
// hidden content. It adds .motion-ready to <html> before any start state is
// applied, so nothing is ever hidden unless this script is running. Pointer
// effects run only on a real mouse; everything is skipped under
// prefers-reduced-motion. Listeners are passive and writes are batched into
// one animation frame.

function countUp(el: HTMLElement) {
  const final = el.textContent ?? ''
  const m = /^(\D*?)(\d[\d.,\u00a0\u202f ]*\d|\d)([\s\S]*)$/.exec(final)
  if (!m) return
  const [, head, num, tail] = m
  // A separator followed by exactly 1 or 2 digits at the end is a decimal
  // mark (98.5, 98,5). Any other separator groups thousands (1,000, 1.000).
  const dec = /[.,](\d{1,2})$/.exec(num)
  const decimals = dec ? dec[1].length : 0
  const decMark = dec ? num[num.length - decimals - 1] : ''
  const intPart = dec ? num.slice(0, num.length - decimals - 1) : num
  const group = /\d([^\d])\d{3}$/.exec(intPart)?.[1] ?? ''
  const target = Number(intPart.replace(/\D/g, '') + (decimals ? '.' + dec![1] : ''))
  if (!Number.isFinite(target) || target === 0) return

  const fmt = (v: number) => {
    const fixed = v.toFixed(decimals)
    const [i, f] = fixed.split('.')
    const grouped = group ? i.replace(/\B(?=(\d{3})+(?!\d))/g, group) : i
    return head + grouped + (f ? decMark + f : '') + tail
  }
  const duration = 1400
  const start = performance.now()
  el.textContent = fmt(0)
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 4)
    el.textContent = t < 1 ? fmt(target * eased) : final
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function MotionRuntime() {
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    root.classList.add('motion-ready')

    // In-view triggers and count-ups.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          io.unobserve(el)
          el.classList.add('is-in')
          if (!reduce) el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    document.querySelectorAll('[data-inview]').forEach((el) => io.observe(el))

    // Pointer effects: real mouse only.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduce || !finePointer) return () => io.disconnect()

    let frame = 0
    let last: PointerEvent | null = null
    const touched = new Set<HTMLElement>()

    const apply = () => {
      frame = 0
      const ev = last
      if (!ev) return
      const target = ev.target as Element | null
      const active = new Set<HTMLElement>()
      const spot = target?.closest<HTMLElement>('[data-spotlight]')
      if (spot) {
        const r = spot.getBoundingClientRect()
        spot.style.setProperty('--mx', `${ev.clientX - r.left}px`)
        spot.style.setProperty('--my', `${ev.clientY - r.top}px`)
        spot.classList.add('is-lit')
        active.add(spot)
      }
      const tilt = target?.closest<HTMLElement>('[data-tilt]')
      if (tilt) {
        const r = tilt.getBoundingClientRect()
        const x = (ev.clientX - r.left) / r.width - 0.5
        const y = (ev.clientY - r.top) / r.height - 0.5
        tilt.style.setProperty('--ry', `${(x * 5).toFixed(2)}deg`)
        tilt.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`)
        tilt.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`)
        tilt.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`)
        tilt.classList.add('is-tilting')
        active.add(tilt)
      }
      // Reset whatever the pointer has left.
      touched.forEach((el) => {
        if (active.has(el)) return
        el.classList.remove('is-lit', 'is-tilting')
        el.style.removeProperty('--rx')
        el.style.removeProperty('--ry')
        touched.delete(el)
      })
      active.forEach((el) => touched.add(el))
    }

    const onMove = (ev: PointerEvent) => {
      last = ev
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      last = null
      touched.forEach((el) => {
        el.classList.remove('is-lit', 'is-tilting')
        el.style.removeProperty('--rx')
        el.style.removeProperty('--ry')
      })
      touched.clear()
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      io.disconnect()
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
