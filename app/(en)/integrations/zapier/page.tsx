import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { EN } from '@/lib/i18n/integrationPages/en'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/integrations/zapier'
export const metadata = integrationMetadata(EN.zapier.meta, PATH, 'integZapier', 'en')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={EN.common} c={EN.zapier} path={PATH} />
}
