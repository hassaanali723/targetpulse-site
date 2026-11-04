import AltPageL10n, { altL10nMetadata } from '@/components/l10n/AltPage'
import { ALT_KO } from '@/lib/i18n/alternatives/ko'

const cfg = ALT_KO.zerobounce

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageL10n cfg={cfg} />
}
