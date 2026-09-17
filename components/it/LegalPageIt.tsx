import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
export type { LegalSection }
export default function LegalPageIt(props: {
  path: string
  title: string
  accent: string
  updated: string
  englishHref: string
  sections: LegalSection[]
}) {
  return <LegalPageL10n locale="it" {...props} />
}
