import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_ID } from '@/lib/i18n/apiDocs/id'

export default function DokumentasiApiPage() {
  return <ApiDocsPage locale="id" root="/id/dokumentasi-api" t={API_DOCS_ID} />
}
