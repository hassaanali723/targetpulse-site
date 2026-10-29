import SpfCheckerPage, { spfCheckerMetadata } from '@/components/tools/SpfChecker/SpfCheckerPage'

export const metadata = spfCheckerMetadata('ja')

export default function Page() {
  return <SpfCheckerPage locale="ja" />
}
