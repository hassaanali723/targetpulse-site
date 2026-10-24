import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('nl')

export default function Page() {
  return <MxLookupPage locale="nl" />
}
