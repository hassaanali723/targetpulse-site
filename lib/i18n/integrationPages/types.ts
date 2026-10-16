// Content shapes for the integration pages (hub, Zapier, n8n, HubSpot, MCP).
// One object per page per language; the page components in
// components/integrations/pages render them, so every language shares one
// layout.
//
// RICH TEXT: any string typed `Rich` may hold [anchor](/path) links and
// `code` spans. Links are written with the target language's own path
// (for example /it/verifica-email); English-only pages keep the English path.
//
// COPY RULES (all languages): plain literal sentences, no em dashes, no
// "verdict", facts only. Catch-all costs the same 1 credit as any address.

import type { Locale } from '@/lib/i18n/clusters'

export type Rich = string

export interface Faq {
  q: string
  /** Plain text, also used for FAQPage JSON-LD. */
  a: string
}

export interface Step {
  title: string
  text: Rich
  image?: string
  imageAlt?: string
}

export interface PageMeta {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
}

export interface CtaBlock {
  title: string
  text: string
  primary: string
  secondary: string
}

/** Strings shared by every integration page in one language. */
export interface CommonStrings {
  locale: Locale
  /** Path of the integrations hub in this language. */
  hubPath: string
  hubCrumb: string
  /** Path of this language's email checker tool page. */
  checkerPath: string
  signupLabel: string
  getStarted: string
  allIntegrations: string
  ogLocale?: string
}

// ── Hub ─────────────────────────────────────────────────────────────────────

export interface GridStrings {
  searchPlaceholder: string
  searchAria: string
  connectionAria: string
  connection: { all: string; direct: string; zapier: string; api: string; mcp: string }
  categoryAria: string
  allCategories: string
  /** Category name translations; missing keys fall back to English. */
  categories: Record<string, string>
  prevPage: string
  nextPage: string
  pagination: string
  /** "Showing {from}-{to} of {total} integrations" */
  showing: string
  noMatchTitle: string
  noMatchText: Rich
  /** Card description per integration slug; missing keys fall back to English. */
  descriptions: Record<string, string>
  /** Description for programmatic Zapier app cards. {name} is replaced. */
  zapierAppDescription: string
  logoAlt: string
}

export interface HubContent {
  meta: PageMeta
  h1Lead: string
  h1Accent: string
  intro: Rich
  waysTitle: string
  waysIntro: string
  ways: { label: string; title: string; text: Rich }[]
  grid: GridStrings
  appListTitle: string
  /** {count} is replaced. */
  appListIntro: string
  apiTitle: string
  apiText: Rich
  apiCta: string
  apiHref: string
}

// ── Zapier ──────────────────────────────────────────────────────────────────

export interface ZapierContent {
  meta: PageMeta
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: Rich
  viewOnZapier: string
  tabsTitle: string
  tabsIntro: string
  tabs: {
    cardSubtitle: string
    tryFree: string
    actionsTitle: string
    actions: { name: string; description: string }[]
    workflowsTab: string
    guideTab: string
    workflows: { title: string; description: string }[]
    workflowCta: string
    guideTitle: string
    guideIntro: string
    steps: Step[]
    help: Rich
  }
  why: { title: string; text: Rich }[]
  appsTitle: string
  appsIntro: string
  /** Category name translations for the app directory. */
  categories: Record<string, string>
  faqTitle: string
  faq: Faq[]
  howToName: string
  howToDescription: string
  cta: CtaBlock
}

// ── n8n ─────────────────────────────────────────────────────────────────────

export interface N8nContent {
  meta: PageMeta
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: Rich
  viewOnNpm: string
  opsTitle: string
  opsIntro: string
  ops: { name: string; detail: string }[]
  installTitle: string
  installIntro: string
  installSteps: Step[]
  batchTitle: string
  batchIntro: string
  batchSteps: Step[]
  calloutTitle: string
  calloutText: Rich
  faqTitle: string
  faq: Faq[]
  howToName: string
  howToDescription: string
  cta: CtaBlock
}

// ── HubSpot ─────────────────────────────────────────────────────────────────

export interface HubspotContent {
  meta: PageMeta
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: Rich
  openDashboard: string
  capsTitle: string
  capsIntro: string
  caps: { name: string; detail: string }[]
  stepsTitle: string
  stepsIntro: string
  steps: Step[]
  calloutTitle: string
  calloutText: Rich
  propsTitle: string
  propsIntro: string
  propsHead: [string, string, string]
  /** [property name, type, meaning]. Property names stay as HubSpot shows them. */
  props: [string, string, string][]
  scopesTitle: string
  scopesIntro: string
  scopes: [string, string][]
  scopesNote: string
  faqTitle: string
  faq: Faq[]
  howToName: string
  howToDescription: string
  cta: CtaBlock
}

// ── MCP ─────────────────────────────────────────────────────────────────────

export interface McpContent {
  meta: PageMeta
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: Rich
  urlLabel: string
  /** Button that opens the Giggal.ai listing in Claude's connector directory. */
  directoryLabel: string
  points: string[]
  /** Heading and line above the per-client setup panel. */
  setupTitle: string
  setupSubtitle: string
  toolsTitle: string
  toolsIntro: string
  tools: { tool: string; title: string; body: string }[]
  whyTitle: string
  why: Rich[]
  faqTitle: string
  faq: Faq[]
  howToName: string
  howToDescription: string
  setupSteps: { name: string; text: string }[]
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

export interface IntegrationPagesContent {
  common: CommonStrings
  hub: HubContent
  zapier: ZapierContent
  n8n: N8nContent
  hubspot: HubspotContent
  mcp: McpContent
}
