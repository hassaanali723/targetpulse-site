// Award badges from SourceForge, Slashdot and Top Business Software, shown
// on the edge of the home hero: on desktop they fan out in an arc across the
// line where the dark hero meets the page; on phones they run as a slow strip.
//
// The SVGs are the vendors' own badge images (b.sf-syn.com/badge_img/4117310/
// ...), saved in public/badges so the page loads no third-party script. Their
// embed script would also inject aggregateRating markup, which this site does
// not use (ratings collected on other sites, site rule C10). Each badge links
// to its review page with the vendor's badge campaign tag, as the embed does.
//
// Motion is CSS only (globals.css, "Award shelf"): a lift on hover, and the
// slow strip on phones. The arc itself stays still, for speed.

const SF = 'https://sourceforge.net/software/product/Giggal.ai/?pk_campaign=badge&pk_source=vendor'
const SD = 'https://slashdot.org/software/p/Giggal.ai/?pk_campaign=badge&pk_source=vendor'
const TBS = 'https://topbusinesssoftware.com/products/Giggal.ai/reviews/?pk_campaign=badge&pk_source=vendor'

type Badge = { file: string; alt: string; href: string; w: number; h: number; tone: 'sf' | 'sd' | 'tbs' }

// Left to right. SourceForge Leader sits in the centre; colours alternate.
const BADGES: Badge[] = [
  { file: 'tbs-most-loved', alt: 'Most Loved, Top Business Software', href: TBS, w: 600, h: 600, tone: 'tbs' },
  { file: 'sourceforge-customers-love-us', alt: 'Customers Love Us, SourceForge', href: SF, w: 339, h: 299, tone: 'sf' },
  { file: 'slashdot-users-love-us', alt: 'Users Love Us, Slashdot', href: SD, w: 322, h: 361, tone: 'sd' },
  { file: 'sourceforge-top-performer-summer-2026', alt: 'Top Performer Summer 2026, SourceForge', href: SF, w: 371, h: 371, tone: 'sf' },
  { file: 'sourceforge-leader-summer-2026', alt: 'Leader Summer 2026, SourceForge', href: SF, w: 286, h: 303, tone: 'sf' },
  { file: 'slashdot-leader-summer-2026', alt: 'Leader Summer 2026, Slashdot', href: SD, w: 133, h: 149, tone: 'sd' },
  { file: 'tbs-top-rated-summer-2026', alt: 'Top Rated Summer 2026, Top Business Software', href: TBS, w: 600, h: 600, tone: 'tbs' },
  { file: 'slashdot-top-performer-summer-2026', alt: 'Top Performer Summer 2026, Slashdot', href: SD, w: 286, h: 303, tone: 'sd' },
  { file: 'tbs-high-achiever-summer-2026', alt: 'High Achiever Summer 2026, Top Business Software', href: TBS, w: 600, h: 600, tone: 'tbs' },
]

const CENTER = Math.floor(BADGES.length / 2)

function BadgeLink({ b, i, arc, dup = false }: { b: Badge; i: number; arc: boolean; dup?: boolean }) {
  const d = i - CENTER
  const style = arc
    ? {
        // The arc: badges drop lower and lean outwards the further they are
        // from the centre; the centre one is a little larger.
        ['--y' as string]: `${d * d * 4.5}px`,
        ['--rot' as string]: `${d * 3}deg`,
        ['--s' as string]: d === 0 ? '1.18' : '1',
      }
    : undefined
  const src = `/badges/${b.file}.svg`
  return (
    <div className={arc ? 'award-slot' : 'award-slot-strip'} style={style}>
      <a
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={dup ? -1 : undefined}
        className={`award award-${b.tone}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={dup ? '' : `Giggal.ai: ${b.alt}`} width={b.w} height={b.h} loading="lazy" decoding="async" draggable={false} />
      </a>
    </div>
  )
}

export default function AwardShelf() {
  return (
    <section className="award-shelf relative z-10 -mt-20 md:-mt-28 md:pb-10">
      {/* Desktop: the arc. */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 items-start justify-center gap-3 lg:gap-5">
        {BADGES.map((b, i) => (
          <BadgeLink key={b.file} b={b} i={i} arc />
        ))}
      </div>

      {/* Phones: a slow strip, with the list repeated once for a seamless loop. */}
      <div className="md:hidden award-strip-viewport">
        <div className="award-strip-track">
          {[...BADGES, ...BADGES].map((b, i) => (
            <div key={`${b.file}-${i}`} aria-hidden={i >= BADGES.length ? true : undefined}>
              <BadgeLink b={b} i={i} arc={false} dup={i >= BADGES.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
