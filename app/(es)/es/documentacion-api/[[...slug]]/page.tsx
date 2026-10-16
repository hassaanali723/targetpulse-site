import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_ES } from '@/lib/i18n/apiDocs/es'

export default function DocumentacionApiPage() {
  return <ApiDocsPage locale="es" root="/es/documentacion-api" t={API_DOCS_ES} />
}
