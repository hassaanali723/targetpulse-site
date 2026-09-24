import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_IT } from '@/lib/i18n/alternatives/it'

const cfg = ALT_IT.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
