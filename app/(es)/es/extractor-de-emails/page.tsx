import EmailExtractorPage, { emailExtractorMetadata } from '@/components/tools/EmailExtractor/EmailExtractorPage'

export const metadata = emailExtractorMetadata('es')

export default function Page() {
  return <EmailExtractorPage locale="es" />
}
