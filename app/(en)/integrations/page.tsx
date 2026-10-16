import HubPage from '@/components/integrations/pages/HubPage'
import { EN } from '@/lib/i18n/integrationPages/en'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(EN.hub.meta, '/integrations', 'integrations', 'en')

export default function IntegrationsPage() {
  return <HubPage common={EN.common} c={EN.hub} />
}
