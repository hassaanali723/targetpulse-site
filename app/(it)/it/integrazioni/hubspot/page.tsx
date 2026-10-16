import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { IT } from '@/lib/i18n/integrationPages/it'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/it/integrazioni/hubspot'
export const metadata = integrationMetadata(IT.hubspot.meta, PATH, 'integHubspot', 'it')

export default function HubspotIntegrazionePage() {
  return <HubspotPage common={IT.common} c={IT.hubspot} path={PATH} />
}
