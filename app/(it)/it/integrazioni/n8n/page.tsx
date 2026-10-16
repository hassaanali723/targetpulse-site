import N8nPage from '@/components/integrations/pages/N8nPage'
import { IT } from '@/lib/i18n/integrationPages/it'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/it/integrazioni/n8n'
export const metadata = integrationMetadata(IT.n8n.meta, PATH, 'integN8n', 'it')

export default function N8nIntegrazionePage() {
  return <N8nPage common={IT.common} c={IT.n8n} path={PATH} />
}
