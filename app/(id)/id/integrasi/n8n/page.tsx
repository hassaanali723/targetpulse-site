import N8nPage from '@/components/integrations/pages/N8nPage'
import { ID } from '@/lib/i18n/integrationPages/id'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/id/integrasi/n8n'
export const metadata = integrationMetadata(ID.n8n.meta, PATH, 'integN8n', 'id')

export default function N8nIntegrationPage() {
  return <N8nPage common={ID.common} c={ID.n8n} path={PATH} />
}
