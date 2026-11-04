import N8nPage from '@/components/integrations/pages/N8nPage'
import { KO } from '@/lib/i18n/integrationPages/ko'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ko/integrations/n8n'
export const metadata = integrationMetadata(KO.n8n.meta, PATH, 'integN8n', 'ko')

export default function N8nIntegrationPage() {
  return <N8nPage common={KO.common} c={KO.n8n} path={PATH} />
}
