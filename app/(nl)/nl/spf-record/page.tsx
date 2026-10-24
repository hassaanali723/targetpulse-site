import SpfCheckerPage, { spfCheckerMetadata } from '@/components/tools/SpfChecker/SpfCheckerPage'

export const metadata = spfCheckerMetadata('nl')

export default function Page() {
  return <SpfCheckerPage locale="nl" />
}
