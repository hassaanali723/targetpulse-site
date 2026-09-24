import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_FR } from '@/lib/i18n/alternatives/fr'

const cfg = ALT_FR.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
