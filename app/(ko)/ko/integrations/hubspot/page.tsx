import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { KO } from '@/lib/i18n/integrationPages/ko'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ko/integrations/hubspot'
export const metadata = integrationMetadata(KO.hubspot.meta, PATH, 'integHubspot', 'ko')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={KO.common} c={KO.hubspot} path={PATH} />
}
