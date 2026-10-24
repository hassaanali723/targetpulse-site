import MxLookupPage, { mxLookupMetadata } from '@/components/tools/MxLookup/MxLookupPage'

export const metadata = mxLookupMetadata('es')

export default function Page() {
  return <MxLookupPage locale="es" />
}
