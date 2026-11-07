import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('ko')

export default function Page() {
  return <ListCleaningPage locale="ko" />
}
