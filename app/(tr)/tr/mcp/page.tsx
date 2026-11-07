import McpPage from '@/components/integrations/pages/McpPage'
import { TR } from '@/lib/i18n/integrationPages/tr'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/tr/mcp'
export const metadata = integrationMetadata(TR.mcp.meta, PATH, 'mcp', 'tr')

export default function Page() {
  return <McpPage common={TR.common} c={TR.mcp} path={PATH} />
}
