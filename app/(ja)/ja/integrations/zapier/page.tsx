import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { JA } from '@/lib/i18n/integrationPages/ja'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ja/integrations/zapier'
export const metadata = integrationMetadata(JA.zapier.meta, PATH, 'integZapier', 'ja')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={JA.common} c={JA.zapier} path={PATH} />
}
