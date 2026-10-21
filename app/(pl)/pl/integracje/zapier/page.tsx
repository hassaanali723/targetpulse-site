import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { PL } from '@/lib/i18n/integrationPages/pl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pl/integracje/zapier'
export const metadata = integrationMetadata(PL.zapier.meta, PATH, 'integZapier', 'pl')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={PL.common} c={PL.zapier} path={PATH} />
}
