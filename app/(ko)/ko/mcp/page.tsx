import McpPage from '@/components/integrations/pages/McpPage'
import { KO } from '@/lib/i18n/integrationPages/ko'
import { integrationMetadata } from '@/lib/i18n/integrationPages/meta'

const PATH = '/ko/mcp'
export const metadata = integrationMetadata(KO.mcp.meta, PATH, 'mcp', 'ko')

export default function Page() {
  return <McpPage common={KO.common} c={KO.mcp} path={PATH} />
}
