import N8nPage from '@/components/integrations/pages/N8nPage'
import { PL } from '@/lib/i18n/integrationPages/pl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pl/integracje/n8n'
export const metadata = integrationMetadata(PL.n8n.meta, PATH, 'integN8n', 'pl')

export default function N8nIntegrationPage() {
  return <N8nPage common={PL.common} c={PL.n8n} path={PATH} />
}
