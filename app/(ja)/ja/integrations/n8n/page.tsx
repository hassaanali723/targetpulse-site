import N8nPage from '@/components/integrations/pages/N8nPage'
import { JA } from '@/lib/i18n/integrationPages/ja'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ja/integrations/n8n'
export const metadata = integrationMetadata(JA.n8n.meta, PATH, 'integN8n', 'ja')

export default function N8nIntegrationPage() {
  return <N8nPage common={JA.common} c={JA.n8n} path={PATH} />
}
