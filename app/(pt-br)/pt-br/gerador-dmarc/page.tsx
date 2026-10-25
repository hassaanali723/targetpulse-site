import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('pt-br')

export default function Page() {
  return <DmarcGeneratorPage locale="pt-br" />
}
