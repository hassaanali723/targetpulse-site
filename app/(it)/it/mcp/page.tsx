import McpPage from '@/components/integrations/pages/McpPage'
import { IT } from '@/lib/i18n/integrationPages/it'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/it/mcp'
export const metadata = integrationMetadata(IT.mcp.meta, PATH, 'mcp', 'it')

export default function McpPageIt() {
  return <McpPage common={IT.common} c={IT.mcp} path={PATH} />
}
