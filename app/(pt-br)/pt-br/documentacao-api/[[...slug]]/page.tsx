import ApiDocsPage from '@/components/docs/ApiDocsPage'
import { API_DOCS_PT_BR } from '@/lib/i18n/apiDocs/pt-br'

export default function DocumentacaoApiPage() {
  return <ApiDocsPage locale="pt-br" root="/pt-br/documentacao-api" t={API_DOCS_PT_BR} />
}
