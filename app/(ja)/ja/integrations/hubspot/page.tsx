import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { JA } from '@/lib/i18n/integrationPages/ja'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ja/integrations/hubspot'
export const metadata = integrationMetadata(JA.hubspot.meta, PATH, 'integHubspot', 'ja')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={JA.common} c={JA.hubspot} path={PATH} />
}
