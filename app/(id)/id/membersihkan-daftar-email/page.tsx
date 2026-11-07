import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('id')

export default function Page() {
  return <ListCleaningPage locale="id" />
}
