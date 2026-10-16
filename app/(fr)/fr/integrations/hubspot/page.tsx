import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { FR } from '@/lib/i18n/integrationPages/fr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/fr/integrations/hubspot'
export const metadata = integrationMetadata(FR.hubspot.meta, PATH, 'integHubspot', 'fr')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={FR.common} c={FR.hubspot} path={PATH} />
}
