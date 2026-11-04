import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_KO } from '@/lib/i18n/apiDocs/ko'

export default function ApiDocsKoPage() {
  return <ApiDocsPage locale="ko" root="/ko/api-docs" t={API_DOCS_KO} />
}
