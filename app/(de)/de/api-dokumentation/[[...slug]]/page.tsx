import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_DE } from '@/lib/i18n/apiDocs/de'

export default function ApiDokumentationPage() {
  return <ApiDocsPage locale="de" root="/de/api-dokumentation" t={API_DOCS_DE} />
}
