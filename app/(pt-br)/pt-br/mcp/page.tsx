import McpPage from '@/components/integrations/pages/McpPage'
import { PT_BR } from '@/lib/i18n/integrationPages/pt-br'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/pt-br/mcp'
export const metadata = integrationMetadata(PT_BR.mcp.meta, PATH, 'mcp', 'pt-br')

export default function Page() {
  return <McpPage common={PT_BR.common} c={PT_BR.mcp} path={PATH} />
}
