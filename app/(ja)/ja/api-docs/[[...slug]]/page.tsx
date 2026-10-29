import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_JA } from '@/lib/i18n/apiDocs/ja'

export default function ApiDocsJaPage() {
  return <ApiDocsPage locale="ja" root="/ja/api-docs" t={API_DOCS_JA} />
}
