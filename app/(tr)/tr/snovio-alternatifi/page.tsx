import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_TR } from '@/lib/i18n/alternatives/tr'

const cfg = ALT_TR.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
