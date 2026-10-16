import HubPage from '@/components/integrations/pages/HubPage'
import { FR } from '@/lib/i18n/integrationPages/fr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(FR.hub.meta, '/fr/integrations', 'integrations', 'fr')

export default function IntegrationsPage() {
  return <HubPage common={FR.common} c={FR.hub} />
}
