import McpPage from '@/components/integrations/pages/McpPage'
import { DE } from '@/lib/i18n/integrationPages/de'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/de/mcp'
export const metadata = integrationMetadata(DE.mcp.meta, PATH, 'mcp', 'de')

export default function Page() {
  return <McpPage common={DE.common} c={DE.mcp} path={PATH} />
}
