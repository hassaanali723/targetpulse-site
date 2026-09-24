import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_ES } from '@/lib/i18n/alternatives/es'

const cfg = ALT_ES.zerobounce

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
