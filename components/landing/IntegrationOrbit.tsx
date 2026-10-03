import Link from 'next/link'
import { Plus } from 'lucide-react'

// Integrations as an orbit: the Giggal.ai mark in the centre, partner logos
// circling it on two rings, with light pulses running along the spokes.
// The linked logos are the same links and alt text as the old tile grid; the
// extra logos on the outer ring are decorative (alt="", not links).
//
// Sizes use container query units, so the orbit scales with its box on any
// screen. The rings turn with CSS only and pause on hover so a logo can be
// clicked. Styles: globals.css, "Home motion, part 5".

export interface OrbitItem {
  name: string
  src: string
  href: string
  alt: string
  featured?: boolean
}

const EXTRA_LOGOS = ['salesforce', 'mailerlite', 'getresponse', 'aweber', 'mailgun', 'zohocrm'].map(
  (s) => `/integrations/giggal-catch-all-email-verification-${s}.png`,
)

export default function IntegrationOrbit({
  items,
  more,
}: {
  items: OrbitItem[]
  more: { href: string; label: string; hrefLang?: string }
}) {
  // Inner ring: the two featured partners plus the next two. Outer ring: the
  // rest, spaced out with the decorative logos.
  const inner = items.slice(0, 4)
  const outer: ({ kind: 'link'; item: OrbitItem } | { kind: 'logo'; src: string })[] = []
  const rest = items.slice(4)
  const slots = rest.length + EXTRA_LOGOS.length
  for (let i = 0, a = 0, b = 0; i < slots; i++) {
    if (i % 2 === 0 && a < rest.length) outer.push({ kind: 'link', item: rest[a++] })
    else if (b < EXTRA_LOGOS.length) outer.push({ kind: 'logo', src: EXTRA_LOGOS[b++] })
    else outer.push({ kind: 'link', item: rest[a++] })
  }

  const node = (item: OrbitItem) => (
    <Link
      href={item.href}
      title={item.name}
      className={`orbit-tile group ${item.featured ? 'orbit-tile-featured' : ''}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} width={32} height={32} loading="lazy" decoding="async" alt={item.alt} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
      <span className="sr-only">{item.name}</span>
    </Link>
  )

  return (
    <div className="flex flex-col items-center">
      <div className="orbit" data-inview>
        {/* Rings and spokes, drawn once and turned with the logos. */}
        <div aria-hidden="true" className="orbit-ring orbit-ring-inner" />
        <div aria-hidden="true" className="orbit-ring orbit-ring-outer" />

        <div className="orbit-track orbit-track-inner">
          {inner.map((item, i) => (
            <div
              key={item.name}
              className="orbit-slot"
              style={{ ['--a' as string]: `${(360 / inner.length) * i + 20}deg`, ['--r' as string]: '25cqw', ['--d' as string]: `${i * 0.7}s` }}
            >
              <span aria-hidden="true" className="orbit-spoke" />
              <div className="orbit-pos">
                <div className="orbit-upright">{node(item)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="orbit-track orbit-track-outer">
          {outer.map((o, i) => (
            <div key={i} className="orbit-slot" style={{ ['--a' as string]: `${(360 / outer.length) * i}deg`, ['--r' as string]: '43cqw' }}>
              <div className="orbit-pos">
                <div className="orbit-upright">
                  {o.kind === 'link' ? (
                    node(o.item)
                  ) : (
                    <span aria-hidden="true" className="orbit-tile orbit-tile-ghost">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={o.src} width={28} height={28} loading="lazy" decoding="async" alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centre: the Giggal.ai mark with spreading rings. */}
        <div aria-hidden="true" className="orbit-core">
          <span className="orbit-core-wave" />
          <span className="orbit-core-wave orbit-core-wave-2" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/giggal-catch-all-email-verifier-icon.png" width={56} height={56} loading="lazy" decoding="async" alt="" className="relative w-10 h-10 md:w-14 md:h-14 object-contain" />
        </div>
      </div>

      <Link
        href={more.href}
        hrefLang={more.hrefLang}
        className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-black text-slate-600 hover:border-indigo-500 hover:text-indigo-700 transition-colors"
      >
        <Plus className="w-4 h-4" />
        {more.label}
      </Link>
    </div>
  )
}
