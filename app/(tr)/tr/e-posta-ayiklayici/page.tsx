import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('tr')

export default function Page() {
  return <EmailExtractorPage locale="tr" />
}
