import HubPage from '@/components/integrations/pages/HubPage'
import { PT_BR } from '@/lib/i18n/integrationPages/pt-br'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(PT_BR.hub.meta, '/pt-br/integracoes', 'integrations', 'pt-br')

export default function IntegrationsPage() {
  return <HubPage common={PT_BR.common} c={PT_BR.hub} />
}
