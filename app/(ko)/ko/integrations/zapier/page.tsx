import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { KO } from '@/lib/i18n/integrationPages/ko'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ko/integrations/zapier'
export const metadata = integrationMetadata(KO.zapier.meta, PATH, 'integZapier', 'ko')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={KO.common} c={KO.zapier} path={PATH} />
}
