import N8nPage from '@/components/integrations/pages/N8nPage'
import { DE } from '@/lib/i18n/integrationPages/de'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/de/integrationen/n8n'
export const metadata = integrationMetadata(DE.n8n.meta, PATH, 'integN8n', 'de')

export default function N8nIntegrationPage() {
  return <N8nPage common={DE.common} c={DE.n8n} path={PATH} />
}
