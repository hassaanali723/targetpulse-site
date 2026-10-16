import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { FR } from '@/lib/i18n/integrationPages/fr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/fr/integrations/zapier'
export const metadata = integrationMetadata(FR.zapier.meta, PATH, 'integZapier', 'fr')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={FR.common} c={FR.zapier} path={PATH} />
}
