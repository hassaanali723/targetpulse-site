import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_PL } from '@/lib/i18n/alternatives/pl'

const cfg = ALT_PL.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
