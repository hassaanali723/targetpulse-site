import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { DE } from '@/lib/i18n/integrationPages/de'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/de/integrationen/zapier'
export const metadata = integrationMetadata(DE.zapier.meta, PATH, 'integZapier', 'de')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={DE.common} c={DE.zapier} path={PATH} />
}
