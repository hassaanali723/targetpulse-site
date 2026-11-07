import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { TR } from '@/lib/i18n/integrationPages/tr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/tr/entegrasyonlar/hubspot'
export const metadata = integrationMetadata(TR.hubspot.meta, PATH, 'integHubspot', 'tr')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={TR.common} c={TR.hubspot} path={PATH} />
}
