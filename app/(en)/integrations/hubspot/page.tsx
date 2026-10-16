import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { EN } from '@/lib/i18n/integrationPages/en'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/integrations/hubspot'
export const metadata = integrationMetadata(EN.hubspot.meta, PATH, 'integHubspot', 'en')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={EN.common} c={EN.hubspot} path={PATH} />
}
