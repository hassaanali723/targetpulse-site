import SpfCheckerPage, { spfCheckerMetadata } from '@/components/tools/SpfChecker/SpfCheckerPage'

export const metadata = spfCheckerMetadata('en')

export default function Page() {
  return <SpfCheckerPage locale="en" />
}
