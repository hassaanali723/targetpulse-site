import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('nl')

export default function Page() {
  return <ListCleaningPage locale="nl" />
}
