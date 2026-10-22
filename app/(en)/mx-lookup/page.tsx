import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('en')

export default function Page() {
  return <MxLookupPage locale="en" />
}
