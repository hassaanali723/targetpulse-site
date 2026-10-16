import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { PT_BR } from '@/lib/i18n/integrationPages/pt-br'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pt-br/integracoes/hubspot'
export const metadata = integrationMetadata(PT_BR.hubspot.meta, PATH, 'integHubspot', 'pt-br')

export default function HubSpotIntegrationPage() {
  return <HubspotPage common={PT_BR.common} c={PT_BR.hubspot} path={PATH} />
}
