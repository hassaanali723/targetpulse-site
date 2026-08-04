import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const phUrl = (id: number) =>
  `https://www.producthunt.com/products/giggal-ai/reviews?review=${id}&utm_source=badge-testimonial-wall&utm_medium=badge`
const G2_REVIEWS_URL = 'https://www.g2.com/products/giggal/reviews'
const SOURCEFORGE_REVIEWS_URL = 'https://sourceforge.net/software/product/Giggal.ai/'

// NOTE: NO Trustpilot reviews here. Trustpilot's Legal Brand Guidelines
// prohibit displaying Trustpilot review content outside their official
// TrustBox widgets — they flagged us for it (Aug 2026). Do not re-add them.
type Source = 'producthunt' | 'g2' | 'sourceforge'
const SOURCE_LABEL: Record<Source, string> = {
  producthunt: 'Product Hunt',
  g2: 'G2',
  sourceforge: 'SourceForge',
}

// Product Hunt quotes were originally written under our previous name
// (TargetPulse) and have been updated in-place to say "Giggal" post-rebrand.
// G2 and SourceForge reviews are all native to the Giggal.ai profile.
interface Review { name: string; avatar?: string; quote: string; url: string; source: Source; rating?: number }

// All reviews in one pool; ordering is handled by interleaveByPlatform() below.
const ALL_REVIEWS: Review[] = [
  // ── Product Hunt ──
  { source: 'producthunt', name: 'Hazel Peterson', avatar: 'https://ph-avatars.imgix.net/10026924/original.jpeg', url: phUrl(574596), quote: 'Giggal Email Verifier is fantastic because it makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results and the easy-to-use experience make it a valuable tool for maintaining better email deliverability and reaching more real prospects.' },
  { source: 'producthunt', name: 'Austin Long', avatar: 'https://ph-avatars.imgix.net/10026697/original.jpeg', url: phUrl(574543), quote: 'Giggal is fantastic because it takes the guesswork out of email verification. We can quickly check our lists, remove risky addresses, and send campaigns with more confidence.' },
  { source: 'producthunt', name: 'Kevin Morris', avatar: 'https://ph-avatars.imgix.net/10026569/original.jpeg', url: phUrl(574516), quote: 'Instead of guessing whether a list is clean, we can verify addresses before sending and feel confident about our campaigns.' },
  { source: 'producthunt', name: 'Harper Caldwell', avatar: 'https://ph-avatars.imgix.net/10022812/original.jpeg', url: phUrl(573469), quote: "It just quietly handles one of the most important and most tedious parts of email marketing. Before every campaign, I know my list is clean: no fake addresses, no disposable emails, no spam traps waiting to tank my reputation." },
  { source: 'producthunt', name: 'James Turner', avatar: 'https://ph-avatars.imgix.net/10026277/original.jpeg', url: phUrl(574386), quote: "Giggal stands out because it does exactly what we need without making the process complicated. It's fast, accurate, and easy to use, so we can verify our email lists in just a few minutes." },
  { source: 'producthunt', name: 'Emily Watson', avatar: 'https://ph-avatars.imgix.net/10023037/original.jpeg', url: phUrl(573525), quote: 'We chose Giggal because it was easy to get started, the verification results were fast, and the accuracy gave us confidence in our email lists.' },
  { source: 'producthunt', name: 'Madison Perez', avatar: 'https://ph-avatars.imgix.net/10026434/original.jpeg', url: phUrl(574460), quote: 'Giggal is fantastic because it makes email verification simple and reliable.' },
  { source: 'producthunt', name: 'Madison Reynolds', avatar: 'https://ph-avatars.imgix.net/10022617/original.jpeg', url: phUrl(573425), quote: "It's fast, easy to use, and gives us reliable results before we launch a campaign. Since we started using it, we've seen fewer bounces and have much more confidence in the quality of our email lists." },
  { source: 'producthunt', name: 'Lily Peterson', avatar: 'https://ph-avatars.imgix.net/9995945/original.png', url: phUrl(566845), quote: 'Its the experience and features. I ran into issues a couple of times with a high bounce rate but the support team resolved my issues instantly. The only thing I would suggest improving is SEG email verification.' },
  { source: 'producthunt', name: 'Henry Martinez', avatar: 'https://ph-avatars.imgix.net/10004720/29177f2d-e723-45c5-b0be-71a232e996a7.png', url: phUrl(568827), quote: 'I like the catch all verification service.' },
  // ── SourceForge (all under sourceforge.net/software/product/Giggal.ai) ──
  // Note: Willie R., George R., Brian S., Robert M., and Linda G. also
  // reviewed on SourceForge but already appear above via G2 — skipped here
  // so the same name never shows twice on the wall.
  { source: 'sourceforge', name: 'James A.', url: SOURCEFORGE_REVIEWS_URL, quote: 'Giggal.ai delivers dependable verification results with a smooth and intuitive workflow. The catch-all verification feature provides useful insights that help reduce uncertainty when reviewing difficult email lists.' },
  { source: 'sourceforge', name: 'Ross A.', url: SOURCEFORGE_REVIEWS_URL, quote: 'One of the biggest strengths of Giggal.ai is how simple it is to use without sacrificing performance. Uploading lists is quick, results are well organized, and the verification process feels smooth from start to finish.' },
  { source: 'sourceforge', name: 'Billy W.', url: SOURCEFORGE_REVIEWS_URL, quote: 'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.' },
  { source: 'sourceforge', name: 'Christina W.', url: SOURCEFORGE_REVIEWS_URL, quote: 'Giggal has helped us build cleaner email lists and run more successful outreach campaigns. Its catch-all email verification is accurate and gives us the confidence to keep valid contacts while removing risky ones before sending.' },
  { source: 'sourceforge', name: 'Reuben W.', url: SOURCEFORGE_REVIEWS_URL, quote: "Giggal's biggest strength is its accurate catch-all email verification. It has helped us confidently identify which catch-all addresses are worth contacting, reducing unnecessary bounces and improving overall email deliverability." },
  { source: 'sourceforge', name: 'Christina B.', url: SOURCEFORGE_REVIEWS_URL, quote: 'The bulk verification feature processes large email lists quickly, and the clear verification results make it easy to decide which contacts are safe to include in campaigns.' },
  { source: 'sourceforge', name: 'Emily H.', url: SOURCEFORGE_REVIEWS_URL, quote: 'What I like most about Giggal.ai is its ability to accurately verify catch-all email addresses, which are often difficult for traditional verification tools to classify.' },
  { source: 'sourceforge', name: 'Harper R.', url: SOURCEFORGE_REVIEWS_URL, quote: 'It has been a valuable tool for verifying catch-all email addresses, which are usually one of the hardest parts of maintaining a clean email list.' },
  // ── G2 (all under g2.com/products/giggal/reviews) ──
  { source: 'g2', name: 'Vernon L.', url: G2_REVIEWS_URL, quote: "Before using it, our team spent hours manually reviewing catch-all addresses or removing them from campaigns because other tools couldn't verify them with confidence. Now we can upload large email lists, verify them in minutes, and move directly into campaign preparation without the extra manual work." },
  { source: 'g2', name: 'Linda G.', url: G2_REVIEWS_URL, rating: 4.5, quote: 'What I like best about Giggal is its accurate catch-all email verification, which helps recover valid business contacts that many other verification tools label as risky or unknown. The bulk verification feature processes large email lists quickly, and the detailed verification results make it easy to filter out invalid, disposable, and role-based addresses before launching a campaign.' },
  { source: 'g2', name: 'Bartholomew A.', url: G2_REVIEWS_URL, quote: "What I like best about Giggal is its catch-all email verification. Before using it, our team spent hours reviewing catch-all addresses manually or excluding them from campaigns because we couldn't verify them with confidence. Now we can upload large email lists, verify them in minutes, and move straight into campaign preparation with clear, actionable results." },
  { source: 'g2', name: 'Willie R.', url: G2_REVIEWS_URL, quote: "What I like best about Giggal is its catch-all email verification, which is more accurate than many other tools I've used. I also use the bulk verification feature regularly because it processes large email lists quickly without sacrificing accuracy." },
  { source: 'g2', name: 'Brian S.', url: G2_REVIEWS_URL, rating: 4.5, quote: "It's one of the few tools I've used that provides reliable insights for catch-all addresses instead of simply marking them as unknown. This helps me make better decisions about which contacts to include in outreach campaigns." },
  { source: 'g2', name: 'George R.', url: G2_REVIEWS_URL, rating: 4.5, quote: "Bulk verification is quick, the interface is clean and intuitive, and the results are well organized. Since using Giggal, we've been able to maintain cleaner email lists, reduce bounce rates, improve inbox placement, and protect our sender reputation. It has become an essential part of our email verification workflow." },
  { source: 'g2', name: 'Alan R.', url: G2_REVIEWS_URL, quote: "Before using it, our team spent a lot of time manually reviewing catch-all addresses or removing them from campaigns because we couldn't trust the results from other verification tools." },
  { source: 'g2', name: 'Robert M.', url: G2_REVIEWS_URL, rating: 4.5, quote: 'What I like best about Giggal is its accurate catch-all email verification. The platform is fast, easy to use, and processes large lists efficiently.' },
]

// Evenly interleave reviews across platforms (stride scheduling) so no single
// platform appears in long runs. Works for any number of platforms/counts —
// so G2 reviews will auto-mix in once they're added to ALL_REVIEWS.
function interleaveByPlatform(reviews: Review[]): Review[] {
  const groups = new Map<Source, Review[]>()
  for (const r of reviews) {
    const g = groups.get(r.source) ?? []
    g.push(r)
    groups.set(r.source, g)
  }
  const entries = Array.from(groups.values(), (items) => ({ items, i: 0 }))
  const out: Review[] = []
  for (let n = 0; n < reviews.length; n++) {
    // Pick the platform whose next item's ideal fractional position is smallest.
    let pick = entries[0]
    let best = Infinity
    for (const e of entries) {
      if (e.i >= e.items.length) continue
      const pos = (e.i + 0.5) / e.items.length
      if (pos < best) { best = pos; pick = e }
    }
    out.push(pick.items[pick.i++])
  }
  return out
}

const MIXED = interleaveByPlatform(ALL_REVIEWS)
const HALF = Math.ceil(MIXED.length / 2)
const ROW_ONE = MIXED.slice(0, HALF)
const ROW_TWO = MIXED.slice(HALF)

const AVATAR_TINTS = [
  'bg-indigo-100 text-indigo-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-violet-100 text-violet-700',
]
function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}
function tint(name: string) {
  let sum = 0
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i)
  return AVATAR_TINTS[sum % AVATAR_TINTS.length]
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => {
        // fill fraction of this star: 1 = full, 0 = empty, 0.5 = half
        const fill = Math.max(0, Math.min(1, count - i))
        return (
          <div key={i} className="relative w-3.5 h-3.5">
            <Star className="absolute inset-0 w-3.5 h-3.5 text-slate-300 fill-slate-200" />
            {fill > 0 && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function Card({ r }: { r: Review }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 w-[320px] sm:w-[360px] h-[220px] bg-white border-2 border-slate-200 rounded-3xl p-6 card-vivid-shadow hover:border-indigo-500 transition-colors flex flex-col"
    >
      <div className="flex items-center gap-3.5 mb-3">
        {r.avatar ? (
          <Image
            src={r.avatar}
            alt={r.name}
            width={44}
            height={44}
            loading="lazy"
            className="w-11 h-11 rounded-full object-cover shrink-0 bg-slate-100"
          />
        ) : (
          <span className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-sm font-black ${tint(r.name)}`}>
            {initials(r.name)}
          </span>
        )}
        <div className="leading-snug min-w-0">
          <span className="text-sm font-black text-slate-900 block truncate">{r.name}</span>
          <span className="text-[11px] text-slate-500 font-bold block">via {SOURCE_LABEL[r.source]}</span>
        </div>
      </div>
      <Stars count={r.rating ?? 5} />
      <p className="text-sm text-slate-600 leading-relaxed font-semibold line-clamp-4">&ldquo;{r.quote}&rdquo;</p>
    </a>
  )
}

function MarqueeRow({ items, reverse, duration }: { items: Review[]; reverse?: boolean; duration: string }) {
  // Render the row twice so translateX(-50%) lands on an identical frame → seamless.
  const doubled = [...items, ...items]
  return (
    <div className="marquee-viewport">
      <div
        className={`marquee-track${reverse ? ' marquee-reverse' : ''}`}
        style={{ animationDuration: duration }}
      >
        {doubled.map((r, i) => (
          <Card key={`${r.url}-${i}`} r={r} />
        ))}
      </div>
    </div>
  )
}

export default function ReviewWall() {
  return (
    <section id="reviews" className="cv-section pt-12 pb-24 border-t border-slate-200 space-y-12 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Proven Impact, Validated by High-Growth Teams</h2>
        <p className="text-sm md:text-base text-slate-600 font-medium">See how product and marketing teams use Giggal.ai to protect their domain health and keep lists clean.</p>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={ROW_ONE} duration="52s" />
        <MarqueeRow items={ROW_TWO} reverse duration="48s" />
      </div>
    </section>
  )
}
