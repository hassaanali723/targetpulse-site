import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('en')

export default function Page() {
  return <ListCleaningPage locale="en" />
}
