import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('ja')

export default function Page() {
  return <EmailExtractorPage locale="ja" />
}
