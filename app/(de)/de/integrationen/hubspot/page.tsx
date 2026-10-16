import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { DE } from '@/lib/i18n/integrationPages/de'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/de/integrationen/hubspot'
export const metadata = integrationMetadata(DE.hubspot.meta, PATH, 'integHubspot', 'de')

export default function HubspotIntegrationPage() {
  return <HubspotPage common={DE.common} c={DE.hubspot} path={PATH} />
}
