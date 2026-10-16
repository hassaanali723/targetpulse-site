import N8nPage from '@/components/integrations/pages/N8nPage'
import { EN } from '@/lib/i18n/integrationPages/en'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/integrations/n8n'
export const metadata = integrationMetadata(EN.n8n.meta, PATH, 'integN8n', 'en')

export default function N8nIntegrationPage() {
  return <N8nPage common={EN.common} c={EN.n8n} path={PATH} />
}
