import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('id')

export default function Page() {
  return <ValidationApiPage locale="id" />
}
