import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('ja')

export default function Page() {
  return <DmarcGeneratorPage locale="ja" />
}
