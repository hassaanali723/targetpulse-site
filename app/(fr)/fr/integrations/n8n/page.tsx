import N8nPage from '@/components/integrations/pages/N8nPage'
import { FR } from '@/lib/i18n/integrationPages/fr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/fr/integrations/n8n'
export const metadata = integrationMetadata(FR.n8n.meta, PATH, 'integN8n', 'fr')

export default function N8nIntegrationPage() {
  return <N8nPage common={FR.common} c={FR.n8n} path={PATH} />
}
