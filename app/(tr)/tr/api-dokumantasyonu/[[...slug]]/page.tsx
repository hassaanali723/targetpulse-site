import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_TR } from '@/lib/i18n/apiDocs/tr'

export default function ApiDokumantasyonuPage() {
  return <ApiDocsPage locale="tr" root="/tr/api-dokumantasyonu" t={API_DOCS_TR} />
}
