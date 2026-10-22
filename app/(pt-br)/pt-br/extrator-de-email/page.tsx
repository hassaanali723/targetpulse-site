import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('pt-br')

export default function Page() {
  return <EmailExtractorPage locale="pt-br" />
}
