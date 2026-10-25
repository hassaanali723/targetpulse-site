import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('id')

export default function Page() {
  return <EmailExtractorPage locale="id" />
}
