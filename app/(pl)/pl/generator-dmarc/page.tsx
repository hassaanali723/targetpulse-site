import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('pl')

export default function Page() {
  return <DmarcGeneratorPage locale="pl" />
}
