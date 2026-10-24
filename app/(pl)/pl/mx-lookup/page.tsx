import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('pl')

export default function Page() {
  return <MxLookupPage locale="pl" />
}
