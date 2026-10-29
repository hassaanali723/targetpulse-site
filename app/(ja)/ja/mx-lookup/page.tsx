import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('ja')

export default function Page() {
  return <MxLookupPage locale="ja" />
}
