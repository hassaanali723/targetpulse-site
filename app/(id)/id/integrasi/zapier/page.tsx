import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { ID } from '@/lib/i18n/integrationPages/id'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/id/integrasi/zapier'
export const metadata = integrationMetadata(ID.zapier.meta, PATH, 'integZapier', 'id')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={ID.common} c={ID.zapier} path={PATH} />
}
