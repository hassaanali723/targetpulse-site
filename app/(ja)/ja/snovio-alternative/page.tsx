import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_JA } from '@/lib/i18n/alternatives/ja'

const cfg = ALT_JA.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
