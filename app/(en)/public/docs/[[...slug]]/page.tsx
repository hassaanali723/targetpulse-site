import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_EN } from '@/lib/i18n/apiDocs/en'

export default function ApiReferencePage() {
  return <ApiDocsPage locale="en" root="/public/docs" t={API_DOCS_EN} />
}
