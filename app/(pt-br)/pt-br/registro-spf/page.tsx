import SpfCheckerPage, { spfCheckerMetadata } from '@/components/tools/SpfChecker/SpfCheckerPage'

export const metadata = spfCheckerMetadata('pt-br')

export default function Page() {
  return <SpfCheckerPage locale="pt-br" />
}
