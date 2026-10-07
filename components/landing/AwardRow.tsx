'use client'

// Award badges for inner pages (tool pages), as a slow carousel. The home page
// uses AwardShelf, which fans the set out across the hero edge.
//
// The badge in the centre is shown larger; about six are in view on desktop,
// three on phones. It moves one badge every few seconds, pauses on hover or
// focus, stops while off screen, and does not move at all for visitors who
// ask for reduced motion. Only transform and opacity animate.
//
// Endless loop: the list is rendered three times. After it slides into the
// first or last copy, it jumps back to the same badge in the middle copy with
// the transition switched off, so the jump cannot be seen.
//
// Same local SVGs and review links as AwardShelf (see the notes there on why
// the vendor embed script is not used).

import { useEffect, useRef, useState } from 'react'

const SF = 'https://sourceforge.net/software/product/Giggal.ai/?pk_campaign=badge&pk_source=vendor'
const SD = 'https://slashdot.org/software/p/Giggal.ai/?pk_campaign=badge&pk_source=vendor'
const TBS = 'https://topbusinesssoftware.com/products/Giggal.ai/reviews/?pk_campaign=badge&pk_source=vendor'

const BADGES = [
  { file: 'tbs-most-loved', alt: 'Most Loved, Top Business Software', href: TBS, w: 600, h: 600 },
  { file: 'sourceforge-customers-love-us', alt: 'Customers Love Us, SourceForge', href: SF, w: 339, h: 299 },
  { file: 'slashdot-users-love-us', alt: 'Users Love Us, Slashdot', href: SD, w: 322, h: 361 },
  { file: 'sourceforge-top-performer-summer-2026', alt: 'Top Performer Summer 2026, SourceForge', href: SF, w: 371, h: 371 },
  { file: 'sourceforge-leader-summer-2026', alt: 'Leader Summer 2026, SourceForge', href: SF, w: 286, h: 303 },
  { file: 'slashdot-leader-summer-2026', alt: 'Leader Summer 2026, Slashdot', href: SD, w: 133, h: 149 },
  { file: 'tbs-top-rated-summer-2026', alt: 'Top Rated Summer 2026, Top Business Software', href: TBS, w: 600, h: 600 },
  { file: 'slashdot-top-performer-summer-2026', alt: 'Top Performer Summer 2026, Slashdot', href: SD, w: 286, h: 303 },
  { file: 'tbs-high-achiever-summer-2026', alt: 'High Achiever Summer 2026, Top Business Software', href: TBS, w: 600, h: 600 },
]

const N = BADGES.length
const LOOP = [...BADGES, ...BADGES, ...BADGES]
const STEP_MS = 2600
const EASE = '700ms cubic-bezier(0.22, 0.61, 0.36, 1)'

export default function AwardRow() {
  // Index into LOOP of the centred badge. Starts on the first badge of the
  // middle copy, so the server and client render the same thing.
  const [i, setI] = useState(N)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [onScreen, setOnScreen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !onScreen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setInterval(() => {
      if (!document.hidden) setI((v) => v + 1)
    }, STEP_MS)
    return () => window.clearInterval(t)
  }, [paused, onScreen])

  // Turn the transition back on two frames after a silent jump.
  useEffect(() => {
    if (animate) return
    let r2 = 0
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setAnimate(true))
    })
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
    }
  }, [animate])

  const onTrackEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    if (i >= 2 * N) {
      setAnimate(false)
      setI(i - N)
    } else if (i < N) {
      setAnimate(false)
      setI(i + N)
    }
  }

  const active = ((i % N) + N) % N

  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        Giggal.ai is rated a{' '}
        <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
          Leader on SourceForge and Slashdot
        </span>
      </h2>

      <div
        ref={ref}
        className="relative mt-6 h-[180px] sm:h-[210px] overflow-hidden [--slot:118px] sm:[--slot:150px] lg:[--slot:160px] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="absolute left-1/2 top-0 flex h-full items-center"
          style={{
            transform: `translateX(calc((${-i} - 0.5) * var(--slot)))`,
            transition: animate ? `transform ${EASE}` : 'none',
          }}
          onTransitionEnd={onTrackEnd}
        >
          {LOOP.map((b, k) => {
            const d = Math.abs(k - i)
            const copy = k < N || k >= 2 * N
            return (
              <div key={k} className="flex shrink-0 justify-center" style={{ width: 'var(--slot)' }}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={copy ? -1 : undefined}
                  aria-hidden={copy ? true : undefined}
                  className="block"
                  style={{
                    transform: `scale(${d === 0 ? 1.3 : 0.9})`,
                    opacity: d >= 3 ? 0.6 : 1,
                    transition: animate ? `transform ${EASE}, opacity ${EASE}` : 'none',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/badges/${b.file}.svg`}
                    alt={copy ? '' : `Giggal.ai: ${b.alt}`}
                    width={b.w}
                    height={b.h}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-[84px] sm:h-[104px] lg:h-[112px] w-auto max-w-[calc(var(--slot)-24px)] object-contain"
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {BADGES.map((b, k) => (
          <button
            key={b.file}
            type="button"
            aria-label={`Show ${b.alt}`}
            aria-current={k === active ? true : undefined}
            onClick={() => setI(N + k)}
            className={`h-2 rounded-full transition-all duration-300 ${
              k === active ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
