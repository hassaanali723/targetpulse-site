import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_NL } from '@/lib/i18n/alternatives/nl'

const cfg = ALT_NL.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
