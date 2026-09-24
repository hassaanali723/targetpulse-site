import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_DE } from '@/lib/i18n/alternatives/de'

const cfg = ALT_DE.neverbounce

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
