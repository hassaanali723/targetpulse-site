import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_IT } from '@/lib/i18n/apiDocs/it'

export default function DocumentazioneApiPage() {
  return <ApiDocsPage locale="it" root="/it/documentazione-api" t={API_DOCS_IT} />
}
