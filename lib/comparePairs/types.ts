// Hand-written content for the /compare pairs that are indexed on their own
// merit (2026-10-22). The generated engine in lib/compare.ts still supplies the
// fact table; these entries replace its templated intro, sections, FAQ and
// metadata so each indexed page reads as its own article.
//
// Every fact must come from lib/competitorPricing.ts or lib/compareProfiles.ts.
// Writing rules: plain English, no em or en dashes, no "cheaper/cheapest"
// verdicts, no banned words (see CLAUDE.md).
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface PairSection {
  heading: string
  paragraphs: string[]
  // Optional Giggal.ai callout under the section. Omit both to show none.
  giggalEdgeLabel?: string
  giggalEdge?: string
}

export interface PairContent {
  metaTitle: string // 50 to 64 characters, rendered as the absolute <title>
  metaDescription: string // 120 to 160 characters
  ogTitle: string
  intro: string // hero paragraph under the H1 "A vs B"
  sections: PairSection[]
  faqs: FaqItem[]
}
