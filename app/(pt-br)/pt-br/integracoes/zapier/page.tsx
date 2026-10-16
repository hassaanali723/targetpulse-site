import ZapierPage from '@/components/integrations/pages/ZapierPage'
import { PT_BR } from '@/lib/i18n/integrationPages/pt-br'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pt-br/integracoes/zapier'
export const metadata = integrationMetadata(PT_BR.zapier.meta, PATH, 'integZapier', 'pt-br')

export default function ZapierIntegrationPage() {
  return <ZapierPage common={PT_BR.common} c={PT_BR.zapier} path={PATH} />
}
