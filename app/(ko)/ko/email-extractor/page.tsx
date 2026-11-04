import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('ko')

export default function Page() {
  return <EmailExtractorPage locale="ko" />
}
