import HubPage from '@/components/integrations/pages/HubPage'
import { TR } from '@/lib/i18n/integrationPages/tr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(TR.hub.meta, '/tr/entegrasyonlar', 'integrations', 'tr')

export default function IntegrationsPage() {
  return <HubPage common={TR.common} c={TR.hub} />
}
