import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('nl')

export default function Page() {
  return <EmailExtractorPage locale="nl" />
}
