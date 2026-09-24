import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_PT_BR } from '@/lib/i18n/alternatives/pt-br'

const cfg = ALT_PT_BR.snovio

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
