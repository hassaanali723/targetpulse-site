import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('en')

export default function Page() {
  return <EmailExtractorPage locale="en" />
}
