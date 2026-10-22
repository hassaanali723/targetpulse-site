import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('de')

export default function Page() {
  return <MxLookupPage locale="de" />
}
