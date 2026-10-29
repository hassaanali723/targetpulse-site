import HubPage from '@/components/integrations/pages/HubPage'
import { JA } from '@/lib/i18n/integrationPages/ja'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(JA.hub.meta, '/ja/integrations', 'integrations', 'ja')

export default function IntegrationsPage() {
  return <HubPage common={JA.common} c={JA.hub} />
}
