import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('de')

export default function Page() {
  return <DmarcGeneratorPage locale="de" />
}
