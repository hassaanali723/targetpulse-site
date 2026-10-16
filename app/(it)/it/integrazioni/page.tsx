import HubPage from '@/components/integrations/pages/HubPage'
import { IT } from '@/lib/i18n/integrationPages/it'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/it/integrazioni'
export const metadata = integrationMetadata(IT.hub.meta, PATH, 'integrations', 'it')

export default function IntegrazioniPage() {
  return <HubPage common={IT.common} c={IT.hub} />
}
