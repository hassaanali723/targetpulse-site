import AltPageWideL10n, { altL10nMetadata } from '@/components/l10n/AltPageWide'
import cfg from '@/lib/i18n/altBrands/ko/anymailfinder'

export const metadata = altL10nMetadata(cfg)

export default function Page() {
  return <AltPageWideL10n cfg={cfg} />
}
