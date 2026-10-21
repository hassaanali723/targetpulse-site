// The hand-written /compare pairs. A slug listed here is indexed (see
// lib/indexPolicy.ts) and its page uses this content in place of the template.
import type { PairContent } from './types'
import { VERIFIERS_A } from './verifiersA'
import { VERIFIERS_B } from './verifiersB'
import { PLATFORMS } from './platforms'
import { PLATFORMS_B } from './platformsB'

export type { PairContent, PairSection } from './types'

export const PAIR_CONTENT: Record<string, PairContent> = { ...VERIFIERS_A, ...VERIFIERS_B, ...PLATFORMS, ...PLATFORMS_B }

export function getPairContent(versus: string): PairContent | undefined {
  return PAIR_CONTENT[versus]
}
