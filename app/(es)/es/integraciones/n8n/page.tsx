import N8nPage from '@/components/integrations/pages/N8nPage'
import { ES } from '@/lib/i18n/integrationPages/es'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/es/integraciones/n8n'
export const metadata = integrationMetadata(ES.n8n.meta, PATH, 'integN8n', 'es')

export default function N8nIntegracionPage() {
  return <N8nPage common={ES.common} c={ES.n8n} path={PATH} />
}
