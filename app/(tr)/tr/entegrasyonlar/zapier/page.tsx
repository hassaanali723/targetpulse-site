import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { TR } from '@/lib/i18n/integrationPages/tr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/tr/entegrasyonlar/zapier'
export const metadata = integrationMetadata(TR.zapier.meta, PATH, 'integZapier', 'tr')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={TR.common} c={TR.zapier} path={PATH} />
}
