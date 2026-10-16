import HubPage from '@/components/integrations/pages/HubPage'
import { DE } from '@/lib/i18n/integrationPages/de'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(DE.hub.meta, '/de/integrationen', 'integrations', 'de')

export default function IntegrationsPage() {
  return <HubPage common={DE.common} c={DE.hub} />
}
