import N8nPage from '@/components/integrations/pages/N8nPage'
import { PT_BR } from '@/lib/i18n/integrationPages/pt-br'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pt-br/integracoes/n8n'
export const metadata = integrationMetadata(PT_BR.n8n.meta, PATH, 'integN8n', 'pt-br')

export default function N8nIntegrationPage() {
  return <N8nPage common={PT_BR.common} c={PT_BR.n8n} path={PATH} />
}
