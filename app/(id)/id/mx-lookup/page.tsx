import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('id')

export default function Page() {
  return <MxLookupPage locale="id" />
}
