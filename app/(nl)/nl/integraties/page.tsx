import HubPage from '@/components/integrations/pages/HubPage'
import { NL } from '@/lib/i18n/integrationPages/nl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(NL.hub.meta, '/nl/integraties', 'integrations', 'nl')

export default function IntegrationsPage() {
  return <HubPage common={NL.common} c={NL.hub} />
}
