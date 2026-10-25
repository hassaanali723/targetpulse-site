import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('it')

export default function Page() {
  return <EmailExtractorPage locale="it" />
}
