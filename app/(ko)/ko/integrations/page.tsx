import HubPage from '@/components/integrations/pages/HubPage'
import { KO } from '@/lib/i18n/integrationPages/ko'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(KO.hub.meta, '/ko/integrations', 'integrations', 'ko')

export default function IntegrationsPage() {
  return <HubPage common={KO.common} c={KO.hub} />
}
