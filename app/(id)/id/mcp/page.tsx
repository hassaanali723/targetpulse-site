import McpPage from '@/components/integrations/pages/McpPage'
import { ID } from '@/lib/i18n/integrationPages/id'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/id/mcp'
export const metadata = integrationMetadata(ID.mcp.meta, PATH, 'mcp', 'id')

export default function Page() {
  return <McpPage common={ID.common} c={ID.mcp} path={PATH} />
}
