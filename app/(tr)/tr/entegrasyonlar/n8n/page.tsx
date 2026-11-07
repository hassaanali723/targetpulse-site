import N8nPage from '@/components/integrations/pages/N8nPage'
import { TR } from '@/lib/i18n/integrationPages/tr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/tr/entegrasyonlar/n8n'
export const metadata = integrationMetadata(TR.n8n.meta, PATH, 'integN8n', 'tr')

export default function N8nIntegrationPage() {
  return <N8nPage common={TR.common} c={TR.n8n} path={PATH} />
}
