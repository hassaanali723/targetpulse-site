import N8nPage from '@/components/integrations/pages/N8nPage'
import { NL } from '@/lib/i18n/integrationPages/nl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/nl/integraties/n8n'
export const metadata = integrationMetadata(NL.n8n.meta, PATH, 'integN8n', 'nl')

export default function N8nIntegrationPage() {
  return <N8nPage common={NL.common} c={NL.n8n} path={PATH} />
}
