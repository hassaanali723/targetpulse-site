import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_NL } from '@/lib/i18n/apiDocs/nl'

export default function ApiDocumentatiePage() {
  return <ApiDocsPage locale="nl" root="/nl/api-documentatie" t={API_DOCS_NL} />
}
