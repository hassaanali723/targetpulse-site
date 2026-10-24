import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('pt-br')

export default function Page() {
  return <MxLookupPage locale="pt-br" />
}
