import McpPage from '@/components/integrations/pages/McpPage'
import { ES } from '@/lib/i18n/integrationPages/es'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/es/mcp'
export const metadata = integrationMetadata(ES.mcp.meta, PATH, 'mcp', 'es')

export default function McpPageEs() {
  return <McpPage common={ES.common} c={ES.mcp} path={PATH} />
}
