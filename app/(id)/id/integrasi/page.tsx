import HubPage from '@/components/integrations/pages/HubPage'
import { ID } from '@/lib/i18n/integrationPages/id'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(ID.hub.meta, '/id/integrasi', 'integrations', 'id')

export default function IntegrationsPage() {
  return <HubPage common={ID.common} c={ID.hub} />
}
