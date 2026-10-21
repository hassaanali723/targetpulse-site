import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_PL } from '@/lib/i18n/apiDocs/pl'

export default function DokumentacjaApiPage() {
  return <ApiDocsPage locale="pl" root="/pl/dokumentacja-api" t={API_DOCS_PL} />
}
