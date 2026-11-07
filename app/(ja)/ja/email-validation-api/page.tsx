import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('ja')

export default function Page() {
  return <ValidationApiPage locale="ja" />
}
