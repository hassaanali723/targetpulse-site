import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('nl')

export default function Page() {
  return <DmarcGeneratorPage locale="nl" />
}
