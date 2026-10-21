import McpPage from '@/components/integrations/pages/McpPage'
import { PL } from '@/lib/i18n/integrationPages/pl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pl/mcp'
export const metadata = integrationMetadata(PL.mcp.meta, PATH, 'mcp', 'pl')

export default function Page() {
  return <McpPage common={PL.common} c={PL.mcp} path={PATH} />
}
