import SpfCheckerPage, { spfCheckerMetadata } from '@/components/tools/SpfChecker/SpfCheckerPage'

export const metadata = spfCheckerMetadata('de')

export default function Page() {
  return <SpfCheckerPage locale="de" />
}
