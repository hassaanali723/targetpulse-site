import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('it')

export default function Page() {
  return <MxLookupPage locale="it" />
}
