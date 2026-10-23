import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_ID } from '@/lib/i18n/alternatives/id'

const cfg = ALT_ID.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
