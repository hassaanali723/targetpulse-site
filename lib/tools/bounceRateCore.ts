/**
 * Bounce rate maths for the email and website (GA4) calculators.
 * Formulas and provider limits are from each provider's own documentation,
 * checked on 2026-10-13 (sources in targetpulse-seo/plans/26-bounce-rate-calculator-plan.md).
 * No path-alias imports, so the file also runs under plain Node for quick tests.
 */

export class BounceInputError extends Error {}

export interface EmailBounceInput {
  sent: number
  hard: number
  soft: number
}

export interface EmailBounceResult {
  sent: number
  hard: number
  soft: number
  bounced: number
  delivered: number
  /** (hard + soft) ÷ sent, in percent. How Mailchimp, Klaviyo and Mailgun count it. */
  rate: number
  hardRate: number
  softRate: number
  deliveredRate: number
  /** bounced ÷ delivered, in percent, for tools that divide by delivered emails. */
  rateOfDelivered: number | null
}

const whole = (n: number) => Number.isFinite(n) && n >= 0 && Math.floor(n) === n

export function emailBounce({ sent, hard, soft }: EmailBounceInput): EmailBounceResult {
  if (!whole(sent) || sent === 0) throw new BounceInputError('Enter how many emails you sent, as a whole number above 0.')
  if (!whole(hard) || !whole(soft)) throw new BounceInputError('Bounces have to be whole numbers, 0 or more.')
  const bounced = hard + soft
  if (bounced > sent) throw new BounceInputError('There are more bounces than emails sent. Check the numbers.')
  const delivered = sent - bounced
  const pct = (n: number, d: number) => (n / d) * 100
  return {
    sent,
    hard,
    soft,
    bounced,
    delivered,
    rate: pct(bounced, sent),
    hardRate: pct(hard, sent),
    softRate: pct(soft, sent),
    deliveredRate: pct(delivered, sent),
    rateOfDelivered: delivered > 0 ? pct(bounced, delivered) : null,
  }
}

export interface ProviderLimit {
  name: string
  /** Which bounces the provider's number is about. */
  counts: 'hard' | 'all'
  limit: number
  /** limit: a hard line; review: the account gets reviewed or may be suspended; guidance: a recommendation. */
  kind: 'limit' | 'review' | 'guidance'
  /** gte: reaching the number counts as over ("below 2%", "5% or more"); gt: only going past it ("above 2%"). */
  overWhen: 'gte' | 'gt'
  what: string
  source: string
}

// Ordered from the strictest number to the loosest.
export const PROVIDER_LIMITS: ProviderLimit[] = [
  { name: 'Amazon SES (recommended)', counts: 'hard', limit: 2, kind: 'guidance', overWhen: 'gte', what: 'Asks you to keep the bounce rate below 2%. Only hard bounces count.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  { name: 'Brevo', counts: 'hard', limit: 2, kind: 'review', overWhen: 'gt', what: 'A hard bounce rate above 2% can lead to suspension.', source: 'https://help.brevo.com/hc/en-us/articles/360020418259' },
  { name: 'HubSpot', counts: 'hard', limit: 5, kind: 'review', overWhen: 'gte', what: 'A hard bounce rate of 5% in a month can lead to suspension.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
  { name: 'SendGrid', counts: 'hard', limit: 5, kind: 'guidance', overWhen: 'gte', what: 'Recommends hard bounces from fewer than 5% of attempted messages.', source: 'https://www.twilio.com/docs/sendgrid/ui/analytics-and-reporting/bounce-and-block-classifications' },
  { name: 'Amazon SES (review)', counts: 'hard', limit: 5, kind: 'review', overWhen: 'gte', what: 'At 5% or more, the account is placed under review.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  { name: 'Postmark', counts: 'all', limit: 10, kind: 'limit', overWhen: 'gte', what: 'Asks for bounces under 10% of all emails sent and pauses accounts over that.', source: 'https://postmarkapp.com/support/article/does-postmark-have-a-daily-send-limit' },
  { name: 'Amazon SES (may pause)', counts: 'hard', limit: 10, kind: 'limit', overWhen: 'gte', what: 'At 10% or more, SES may pause sending.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
]

export interface LimitCheck extends ProviderLimit {
  /** The rate this provider's number is compared against. */
  yourRate: number
  over: boolean
  /** Exactly at the limit (over for "below" limits, still fine for "above" limits). */
  atLimit: boolean
  /** How many more bounces of the counted kind fit under the limit (negative when over). */
  room: number
}

export function checkLimits(r: EmailBounceResult): LimitCheck[] {
  return PROVIDER_LIMITS.map((p) => {
    const counted = p.counts === 'hard' ? r.hard : r.bounced
    const yourRate = (counted / r.sent) * 100
    // Integer maths (limits are whole percents), so 2 of 100 is exactly 2%.
    const cap = p.limit * r.sent
    const over = p.overWhen === 'gte' ? counted * 100 >= cap : counted * 100 > cap
    const allowed = p.overWhen === 'gte' ? Math.ceil(cap / 100) - 1 : Math.floor(cap / 100)
    return { ...p, yourRate, over, atLimit: counted * 100 === cap, room: allowed - counted }
  })
}

export interface WebsiteBounceResult {
  sessions: number
  engaged: number
  bounceRate: number
  engagementRate: number
}

/** GA4: bounce rate = (sessions − engaged sessions) ÷ sessions = 1 − engagement rate. */
export function websiteBounce(sessions: number, engaged: number): WebsiteBounceResult {
  if (!whole(sessions) || sessions === 0) throw new BounceInputError('Enter the number of sessions, as a whole number above 0.')
  if (!whole(engaged)) throw new BounceInputError('Engaged sessions have to be a whole number, 0 or more.')
  if (engaged > sessions) throw new BounceInputError('Engaged sessions can’t be more than total sessions. Check the numbers.')
  const engagementRate = (engaged / sessions) * 100
  return { sessions, engaged, bounceRate: 100 - engagementRate, engagementRate }
}

/** 2 decimals below 10%, 1 decimal above, with trailing zeros removed. */
export function formatPct(n: number): string {
  const s = n.toFixed(n < 10 ? 2 : 1)
  return `${s.replace(/\.?0+$/, '')}%`
}
