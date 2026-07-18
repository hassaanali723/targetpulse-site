import React from 'react'
import { Star } from 'lucide-react'

const phUrl = (id: number) =>
  `https://www.producthunt.com/products/targetpulse/reviews?review=${id}&utm_source=badge-testimonial-wall&utm_medium=badge`
const tpUrl = (id: string) => `https://uk.trustpilot.com/reviews/${id}`
const G2_REVIEWS_URL = 'https://www.g2.com/products/targetpulse-email-verifier/reviews'

type Source = 'producthunt' | 'g2' | 'trustpilot'
const SOURCE_LABEL: Record<Source, string> = {
  producthunt: 'Product Hunt',
  g2: 'G2',
  trustpilot: 'Trustpilot',
}

// Real reviews (verbatim). Quotes mention "TargetPulse" — the product's name at
// review time — kept unedited so the testimonials stay authentic.
interface Review { name: string; avatar?: string; quote: string; url: string; source: Source }

// All reviews in one pool; ordering is handled by interleaveByPlatform() below.
const ALL_REVIEWS: Review[] = [
  // ── Product Hunt ──
  { source: 'producthunt', name: 'Hazel Peterson', avatar: 'https://ph-avatars.imgix.net/10026924/original.jpeg', url: phUrl(574596), quote: 'TargetPulse Email Verifier is fantastic because it makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results and the easy-to-use experience make it a valuable tool for maintaining better email deliverability and reaching more real prospects.' },
  { source: 'producthunt', name: 'Austin Long', avatar: 'https://ph-avatars.imgix.net/10026697/original.jpeg', url: phUrl(574543), quote: 'TargetPulse is fantastic because it takes the guesswork out of email verification. We can quickly check our lists, remove risky addresses, and send campaigns with more confidence.' },
  { source: 'producthunt', name: 'Kevin Morris', avatar: 'https://ph-avatars.imgix.net/10026569/original.jpeg', url: phUrl(574516), quote: 'Instead of guessing whether a list is clean, we can verify addresses before sending and feel confident about our campaigns.' },
  { source: 'producthunt', name: 'Harper Caldwell', avatar: 'https://ph-avatars.imgix.net/10022812/original.jpeg', url: phUrl(573469), quote: "It just quietly handles one of the most important and most tedious parts of email marketing. Before every campaign, I know my list is clean: no fake addresses, no disposable emails, no spam traps waiting to tank my reputation." },
  { source: 'producthunt', name: 'James Turner', avatar: 'https://ph-avatars.imgix.net/10026277/original.jpeg', url: phUrl(574386), quote: "TargetPulse stands out because it does exactly what we need without making the process complicated. It's fast, accurate, and easy to use, so we can verify our email lists in just a few minutes." },
  { source: 'producthunt', name: 'Emily Watson', avatar: 'https://ph-avatars.imgix.net/10023037/original.jpeg', url: phUrl(573525), quote: 'We chose TargetPulse because it was easy to get started, the verification results were fast, and the accuracy gave us confidence in our email lists.' },
  { source: 'producthunt', name: 'Madison Perez', avatar: 'https://ph-avatars.imgix.net/10026434/original.jpeg', url: phUrl(574460), quote: 'TargetPulse is fantastic because it makes email verification simple and reliable.' },
  { source: 'producthunt', name: 'Madison Reynolds', avatar: 'https://ph-avatars.imgix.net/10022617/original.jpeg', url: phUrl(573425), quote: "It's fast, easy to use, and gives us reliable results before we launch a campaign. Since we started using it, we've seen fewer bounces and have much more confidence in the quality of our email lists." },
  { source: 'producthunt', name: 'Lily Peterson', avatar: 'https://ph-avatars.imgix.net/9995945/original.png', url: phUrl(566845), quote: 'Its the experience and features. I ran into issues a couple of times with a high bounce rate but the support team resolved my issues instantly. The only thing I would suggest improving is SEG email verification.' },
  { source: 'producthunt', name: 'Henry Martinez', avatar: 'https://ph-avatars.imgix.net/10004720/29177f2d-e723-45c5-b0be-71a232e996a7.png', url: phUrl(568827), quote: 'I like the catch all verification service.' },
  // ── Trustpilot ──
  { source: 'trustpilot', name: 'Frank Robinson', avatar: 'https://user-images.trustpilot.com/66691191c485c06d5e1ebf8a/73x73.png', url: tpUrl('6a59b8b33b3380c138c4cfa5'), quote: "We just started using Targetpulse. So far, I can say we're very impressed. Seemingly accurate catch all detection and good accuracy when removing bad emails. So far, we've seen less than 2% bounce rate which is better than other Email solutions we've tried. Would recommend to give it a go." },
  { source: 'trustpilot', name: 'Carlos Smith', url: tpUrl('6a591c513798b207609ddcf6'), quote: 'I switched from Reoon to TargetPulse. I was able to drop my bounce rate from 4% to 1.5%. Very satisfied.' },
  { source: 'trustpilot', name: 'Connor Nicholson', url: tpUrl('6a567933d05d47524be965c8'), quote: "It has accurate catch-all email verification and that option is included in the general email verification. That's one of my favorite features." },
  // ── G2 (verbatim from g2.com/products/targetpulse-email-verifier/reviews) ──
  { source: 'g2', name: 'Ian G.', url: G2_REVIEWS_URL, quote: `Honestly, it's how it handles catch-all emails. Anyone doing cold outreach knows that catch-alls are the fastest way to ruin your domain reputation because most verifiers just give up and label them "risky" TargetPulse actually gives you a clear score on them so you know if you can safely send or not. Our hard bounces have dropped to basically nothing (well under 2%) since we started running our lists through it. It's just super accurate and doesn't miss the sneaky bad data that other tools skate over.` },
  { source: 'g2', name: 'Jason F.', url: G2_REVIEWS_URL, quote: `I like the catch-all verification functionality the most. No other tool on the market can do catch-all validation, so this is the only one that can accurately verify catch-all emails, which increases my TAM size. It increased my valid emails percentage and got my bounce rate under 3%. I also like the clean UI. The pricing is lesser than competitor tools. The initial setup was very easy. I switched from NeverBounce mainly because of the catch-all validation, and now I use TargetPulse Email Verifier only for verifying my lists.` },
  { source: 'g2', name: 'Madison R.', url: G2_REVIEWS_URL, quote: `Honestly, what I like best is how fast and accurate the verification results are. I upload my list, and within minutes I get a clear breakdown valid, invalid, catch-all, disposable so I'm not wasting time guessing which contacts are worth reaching out to.` },
  { source: 'g2', name: 'Natalie W.', url: G2_REVIEWS_URL, quote: `Honestly it does what it says. that's the best part. I see many tools coming into this industry who make false claims and disappear from the market in a month. But it says it verifiers catch-all emails efficiently and it does!` },
  { source: 'g2', name: 'Alexander H.', url: G2_REVIEWS_URL, quote: `What I like most is how simple and reliable it is. I can upload a list, get the results quickly, and know which addresses are safe to send to. It saves us time, helps keep our bounce rates low, and gives us more confidence before every campaign.` },
  { source: 'g2', name: 'Jana S.', url: G2_REVIEWS_URL, quote: `I really value TargetPulse Email Verifier for its very affordable catch-all email validation and high accuracy. The support is 10/10 and the UI is clean, which makes it easier to navigate around, clean, and download the lead lists. The initial setup was very easy, and I appreciate how efficiently it integrates into our workflow.` },
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

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
      ))}
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
          // eslint-disable-next-line @next/next/no-img-element
          <img src={r.avatar} alt={r.name} className="w-11 h-11 rounded-full object-cover shrink-0 bg-slate-100" />
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
      <Stars />
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
    <section id="reviews" className="pt-12 pb-24 border-t border-slate-200 space-y-12 overflow-hidden">
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
