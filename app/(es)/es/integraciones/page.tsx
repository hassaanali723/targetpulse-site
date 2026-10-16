import HubPage from '@/components/integrations/pages/HubPage'
import { ES } from '@/lib/i18n/integrationPages/es'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

export const metadata = integrationMetadata(ES.hub.meta, '/es/integraciones', 'integrations', 'es')

export default function IntegracionesPage() {
  return <HubPage common={ES.common} c={ES.hub} />
}
