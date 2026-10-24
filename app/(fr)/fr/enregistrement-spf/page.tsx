import SpfCheckerPage, { spfCheckerMetadata } from '@/components/tools/SpfChecker/SpfCheckerPage'

export const metadata = spfCheckerMetadata('fr')

export default function Page() {
  return <SpfCheckerPage locale="fr" />
}
