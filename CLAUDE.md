# Giggal.ai site — working rules

Giggal.ai is the brand and product (email verification SaaS). The legal entity is
TargetPulse Ltd. Next.js 14 App Router, Tailwind. Language route groups:
`(en) (it) (de) (es) (pt-br) (fr)`.

## Page layout: section widths must align with the navbar

The navbar sits in a `max-w-6xl mx-auto px-6` container. Every marketing page must
line its content up with that container, so box edges match the logo on the left and
the Sign up button on the right. Getting this wrong is the most common layout bug.

Use these widths on `<section>` (or the inner `mx-auto` container):

- **`max-w-6xl mx-auto px-6`** — the hero, and any section whose body is a **grid of
  cards, a table, a code block, or the pricing table**. These align with the navbar.
- **`max-w-5xl mx-auto px-6`** — the interactive verifier console only.
- **`max-w-3xl mx-auto px-6`** — **pure reading prose** (paragraphs and bullet lists
  with no cards) and the **FAQ**. Narrower on purpose, for line length.
- **`max-w-2xl mx-auto`** — a short intro line placed under a centered H2, nested
  inside a wider section.

Do not use `max-w-4xl` or `max-w-5xl` for card or table sections. That is what makes
boxes look too narrow and misaligned with the header.

Reference pages that are already correct: `app/(en)/page.tsx` (home) and
`app/(en)/disposable-email-checker/page.tsx`. Match their width pattern on any new or
edited page.

## Writing style: plain English, meaningful, keyword-aware

All user-facing and SEO copy follows these rules. The user has corrected AI-style
copy many times; treat this as strict.

- **Plain, literal English.** Short sentences, roughly 10 to 16 words. One idea per
  sentence. No metaphors, idioms, or dramatic or poetic phrasing.
- **No em dashes (`—`), ever.** Use a period or a comma.
- **Banned words and phrases:** verdict (use "result"), glance, elegant, seamless,
  effortless, unlock, unleash, supercharge, leverage, robust, cutting-edge,
  game-changer, elevate, delve, realm. No AI framing lines such as "that's the part
  most tools skip" or "here's the thing".
- **Every heading and sentence must mean something** and should carry the page's
  target keywords where it reads naturally. No filler, no hype. A heading has to make
  literal sense on its own (for example, write the real differentiator, not a vague
  phrase like "keeps your real catch-all leads").
- Facts only. If a number or claim is not sourced, do not state it.

## Guardrails

- **Never `git push` without explicit per-push approval.** The `giggal-revamp` branch
  auto-deploys to production. The user runs commits and pushes.
- **Do not run `npm run build` while the dev server is running.** Use
  `npx tsc --noEmit` to type-check.
- The local dev server for this repo runs on **port 3002**.
- Disposable detection and rate limiting live in the backend, not in this repo. The
  site calls the backend public validator through `lib/publicVerify.ts`. See
  `docs/DISPOSABLE_CHECK_GUIDE.md`.
- Translations exist for it, de, es, pt-br, fr. New marketing pages are English first;
  translate only when asked.
