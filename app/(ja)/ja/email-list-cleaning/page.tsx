import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('ja')

export default function Page() {
  return <ListCleaningPage locale="ja" />
}
