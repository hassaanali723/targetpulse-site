// The hand-written /compare pairs. A slug listed here is indexed (see
// lib/indexPolicy.ts) and its page uses this content in place of the template.
import type { PairContent } from './types'
import { VERIFIERS_A } from './verifiersA'
import { VERIFIERS_B } from './verifiersB'
import { PLATFORMS } from './platforms'
import { PLATFORMS_B } from './platformsB'
import { BATCH3_A } from './batch3A'
import { BATCH3_B } from './batch3B'
import { BATCH3_C } from './batch3C'
import { BATCH3_D } from './batch3D'

export type { PairContent, PairSection } from './types'

export const PAIR_CONTENT: Record<string, PairContent> = {
  ...VERIFIERS_A,
  ...VERIFIERS_B,
  ...PLATFORMS,
  ...PLATFORMS_B,
  // 2026-11-27: 20 more pairs taken out of noindex with hand-written content.
  ...BATCH3_A,
  ...BATCH3_B,
  ...BATCH3_C,
  ...BATCH3_D,
}

// Pairs written on 2026-11-27, for the sitemap lastmod.
export const BATCH3_SLUGS: ReadonlySet<string> = new Set(
  Object.keys({ ...BATCH3_A, ...BATCH3_B, ...BATCH3_C, ...BATCH3_D }),
)

export function getPairContent(versus: string): PairContent | undefined {
  return PAIR_CONTENT[versus]
}
