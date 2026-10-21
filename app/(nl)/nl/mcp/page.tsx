import McpPage from '@/components/integrations/pages/McpPage'
import { NL } from '@/lib/i18n/integrationPages/nl'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/nl/mcp'
export const metadata = integrationMetadata(NL.mcp.meta, PATH, 'mcp', 'nl')

export default function Page() {
  return <McpPage common={NL.common} c={NL.mcp} path={PATH} />
}
