import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('ko')

export default function Page() {
  return <MxLookupPage locale="ko" />
}
