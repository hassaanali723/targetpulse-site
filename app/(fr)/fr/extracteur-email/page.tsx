import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('fr')

export default function Page() {
  return <EmailExtractorPage locale="fr" />
}
