import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('pl')

export default function Page() {
  return <EmailExtractorPage locale="pl" />
}
