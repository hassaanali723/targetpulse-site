import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { NL } from '@/lib/i18n/integrationPages/nl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/nl/integraties/hubspot'
export const metadata = integrationMetadata(NL.hubspot.meta, PATH, 'integHubspot', 'nl')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={NL.common} c={NL.hubspot} path={PATH} />
}
