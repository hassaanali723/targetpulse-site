import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('tr')

export default function Page() {
  return <DmarcGeneratorPage locale="tr" />
}
