import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { ES } from '@/lib/i18n/integrationPages/es'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/es/integraciones/zapier'
export const metadata = integrationMetadata(ES.zapier.meta, PATH, 'integZapier', 'es')

export default function ZapierIntegracionPage() {
  return <ZapierPage common={ES.common} c={ES.zapier} path={PATH} />
}
