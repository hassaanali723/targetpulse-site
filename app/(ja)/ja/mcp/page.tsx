import McpPage from '@/components/integrations/pages/McpPage'
import { JA } from '@/lib/i18n/integrationPages/ja'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ja/mcp'
export const metadata = integrationMetadata(JA.mcp.meta, PATH, 'mcp', 'ja')

export default function Page() {
  return <McpPage common={JA.common} c={JA.mcp} path={PATH} />
}
