import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { PL } from '@/lib/i18n/integrationPages/pl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pl/integracje/hubspot'
export const metadata = integrationMetadata(PL.hubspot.meta, PATH, 'integHubspot', 'pl')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={PL.common} c={PL.hubspot} path={PATH} />
}
