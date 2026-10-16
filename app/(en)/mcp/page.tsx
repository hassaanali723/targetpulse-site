import McpPage from '@/components/integrations/pages/McpPage'
import { EN } from '@/lib/i18n/integrationPages/en'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/mcp'
export const metadata = integrationMetadata(EN.mcp.meta, PATH, 'mcp', 'en')

export default function Page() {
  return <McpPage common={EN.common} c={EN.mcp} path={PATH} />
}
