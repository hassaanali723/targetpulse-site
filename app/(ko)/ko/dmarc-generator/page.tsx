import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('ko')

export default function Page() {
  return <DmarcGeneratorPage locale="ko" />
}
