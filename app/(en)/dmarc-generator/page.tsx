import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('en')

export default function Page() {
  return <DmarcGeneratorPage locale="en" />
}
