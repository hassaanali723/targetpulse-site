import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('de')

export default function Page() {
  return <EmailExtractorPage locale="de" />
}
