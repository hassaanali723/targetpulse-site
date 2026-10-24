import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('fr')

export default function Page() {
  return <MxLookupPage locale="fr" />
}
