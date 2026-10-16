import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_FR } from '@/lib/i18n/apiDocs/fr'

export default function DocumentationApiPage() {
  return <ApiDocsPage locale="fr" root="/fr/documentation-api" t={API_DOCS_FR} />
}
