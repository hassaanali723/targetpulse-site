import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { NL } from '@/lib/i18n/integrationPages/nl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/nl/integraties/zapier'
export const metadata = integrationMetadata(NL.zapier.meta, PATH, 'integZapier', 'nl')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={NL.common} c={NL.zapier} path={PATH} />
}
