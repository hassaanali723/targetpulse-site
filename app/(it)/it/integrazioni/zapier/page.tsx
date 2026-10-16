import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { IT } from '@/lib/i18n/integrationPages/it'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/it/integrazioni/zapier'
export const metadata = integrationMetadata(IT.zapier.meta, PATH, 'integZapier', 'it')

export default function ZapierIntegrazionePage() {
  return <ZapierPage common={IT.common} c={IT.zapier} path={PATH} />
}
