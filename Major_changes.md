**Pricing changes in web app.**

**New Pricing Structure:**
- **Tiers** (highest threshold ≤ credits wins):
  - 10,000 credits → $5.00
  - 30,000 credits → $10.00
  - 100,000 credits → $20.00
  - 300,000 credits → $40.00
  - 500,000 credits → $60.00
  - 1,000,000 credits → $100.00

- **Soft Limits:**
  - Minimum: **10,000 credits** ($5.00)
  - Maximum: **5,000,000 credits** — above this triggers alert: "For purchases over 5,000,000 credits, please contact us to arrange a custom deal."

**Frontend Changes:**
- `frontend/src/constants/pricing.ts`:
  - Updated `PRICING_TIERS` array with new 6-tier structure
  - Added `MIN_CREDITS = 10000`, `MAX_CREDITS = 5000000`
  - Updated `clampCredits()` to enforce min/max
  - Simplified `getPricePerCredit()` to single rule (no more buffer logic)

- `frontend/src/app/(dashboard)/pricing/page.tsx`:
  - Input field: `min={MIN_CREDITS}`, `max={MAX_CREDITS}`, updated placeholder
  - Blur handler: shows alert if value > MAX_CREDITS, then caps to MAX_CREDITS
  - Removed `isCustomInput` state and buffer logic
  - All pricing uses unified `getPricePerCredit(selectedCredits)` function

**Backend Changes:**
- `backend/routes/payments.js`:
  - Updated `PRICING_TIERS_USD` array with new 6-tier structure
  - Added `MIN_CREDITS = 10000`, `MAX_CREDITS = 5000000`
  - Simplified `getPricePerCreditUSD()` (removed buffer logic)
  - Updated all 4 route handlers to validate: `creditsInt >= MIN_CREDITS && creditsInt <= MAX_CREDITS`
    - `/create-checkout-session` (Stripe)
    - `/create-lemon-checkout` (LemonSqueezy)
    - `/crypto/estimate` (crypto price estimate)
    - `/crypto/create-payment` (crypto payment)
  - All reject out-of-range requests with `400 Bad Request`

**How to Update Product Site (targetpulse-site repo):**
Open `../targetpulse-site` and update the pricing display with the new tier structure:
```
1. New minimum: $5 (10k credits)
2. New maximum: $5,000,000 (custom deal)
3. New tiers: $5, $10, $20, $40, $60, $100 (at 10k, 30k, 100k, 300k, 500k, 1M credits)
4. Remove any old pricing mentions ($27.50, etc.)
```

**Test Cases:**
- Click tier buttons → exact rates apply ✓
- Type 10,000 in input → $5.00 ✓
- Type 30,001 in input → gets 30k rate ($10.00) ✓
- Type 5,000,001 → alert shown, input capped to 5M ✓
- Backend rejects < 10,000 or > 5,000,000 ✓

---

## Product Site (targetpulse-site) — Major Changes

### Pricing Display Overhaul
- Replaced custom credit calculator on both home page and `/pricing` page with a fixed 8-tier package grid.
- New packages: 10K ($9.90), 30K ($28), 50K ($39), 100K ($76 — **Best Value / Popular**), 300K ($222), 500K ($360), 800K ($559), 1M ($680).
- Added Pay-As-You-Go / Subscription toggle with a 10% subscription discount.
- Each card now shows tier tag (Starter, Growth, Popular, Teams, Scale), savings % vs baseline, and a "Get started →" footer arrow.
- Removed all calculator UI and old pricing references ($27.50 etc.).

### Navbar
- Removed the Sign Up button — kept a single "Sign in" CTA (green gradient pill) linking to `https://emailverifier.targetpulse.net/sign-in`.
- Added "Earn with us" nav link → `/affiliates` (positioned after "Talk to us").

### New Home Sections
- **`components/HomeCatchAllSection.tsx`** — AI catch-all detection showcase placed above Real-Time Verification. Includes three signal explanations (Domain Intelligence, AI Pattern Analysis, Mailbox Behavior) and a demo result card with stats and per-email confidence rows.
- **`components/HomeIntegrationsSection.tsx`** — 14-logo integration grid (Mailchimp, Mailgun, Mailjet, SendGrid, ActiveCampaign, Campaign Monitor, GetResponse, AWeber, MailerLite, Drip, Elastic Email + 3 "Soon": HubSpot, Zoho CRM, Reply). Sits below the pricing section.
- **`components/HomeComparisonSection.tsx`** — TargetPulse vs NeverBounce vs ZeroBounce price comparison cards (10K, 100K, 1M tiers) with "Nx cheaper" and "You save $X" indicators. Below pricing.

### Hero Verification Diagram (`HomeHeroWithVerification`)
- Rebuilt the check-cards → logo → outcomes diagram as a mind-map: vertical "bus" line on each side, short horizontal branch off every card, animated dashed stub between bus and central TargetPulse logo.
- Added a "Credits Refunded" emerald badge + explanation line on the **Unknown** outcome card, surfacing the policy of refunding credits for unverifiable results.

### Stats Section (`HomeFeatureShowcase`)
- Replaced the flat one-row stat bar with four motion cards (stagger-in, gradient-text values, bordered icon squares, hover corner-glow and bottom accent bar slide).

### New Page: `/affiliates`
- Full affiliate program page (`app/affiliates/page.tsx`) with: hero + stat strip, 4 benefits (20% recurring · no cap · 3-month attribution · monthly payouts), 3 how-it-works steps, earnings example table, "who it's for" audience cards (Email marketers / Agencies / Course creators / SaaS communities), 7-question FAQ accordion, and final CTA banner.
- Program details: **20% recurring** commission, **3-month attribution window**, monthly payouts via PayPal or Wise, **$50 minimum payout**.
- Signup URL constant `AFFILIATE_SIGNUP_URL = 'https://targetpulse.endorsely.com/'`. Endorsely is the underlying provider but is not surfaced anywhere in user-facing copy.

### Brand Assets
- Added `public/integrations/` containing 14 brand-logo PNGs (128px) used by the Integrations section.

### Mobile Responsiveness
- Added viewport meta via `viewport` export in `app/layout.tsx` (`width: 'device-width', initialScale: 1`) — fixed pages being rendered at a fake 980px width on mobile.
- Added `overflow-x: hidden` on `html` and `body` in `globals.css` plus `overflow-hidden` on the showcase section.
- Hero: hidden decorative floating icons on mobile, shrunk h1 from `text-5xl` → `text-[2.5rem]`, reduced section padding.
- Real-Time demo card: stacked progress circle above the stats grid on mobile, truncated long filename, made download button text shorter on mobile ("Download Verified Emails"), `min-w-0` on grid items.
- Floating badges ("Real-Time", "Still Processing…", "AI Scored", "247 catch-all addresses scored"): on mobile they sit fully outside the card (above / below) with `bottom-full` / `top-full` + margin; desktop keeps the overhanging look.
- Cut excessive vertical padding across all home sections on mobile (`py-24` → `py-14 md:py-24`, etc.).
