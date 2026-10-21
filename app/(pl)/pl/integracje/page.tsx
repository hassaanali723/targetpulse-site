import HubPage from '@/components/integrations/pages/HubPage'
import { PL } from '@/lib/i18n/integrationPages/pl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(PL.hub.meta, '/pl/integracje', 'integrations', 'pl')

export default function IntegrationsPage() {
  return <HubPage common={PL.common} c={PL.hub} />
}
