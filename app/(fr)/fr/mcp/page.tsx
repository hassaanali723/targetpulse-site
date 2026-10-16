import McpPage from '@/components/integrations/pages/McpPage'
import { FR } from '@/lib/i18n/integrationPages/fr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/fr/mcp'
export const metadata = integrationMetadata(FR.mcp.meta, PATH, 'mcp', 'fr')

export default function Page() {
  return <McpPage common={FR.common} c={FR.mcp} path={PATH} />
}
