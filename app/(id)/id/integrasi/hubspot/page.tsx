import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { ID } from '@/lib/i18n/integrationPages/id'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/id/integrasi/hubspot'
export const metadata = integrationMetadata(ID.hubspot.meta, PATH, 'integHubspot', 'id')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={ID.common} c={ID.hubspot} path={PATH} />
}
