import HubspotPage from '@/components/integrations/pages/HubspotPage'
import { ES } from '@/lib/i18n/integrationPages/es'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/es/integraciones/hubspot'
export const metadata = integrationMetadata(ES.hubspot.meta, PATH, 'integHubspot', 'es')

export default function HubspotIntegracionPage() {
  return <HubspotPage common={ES.common} c={ES.hubspot} path={PATH} />
}
