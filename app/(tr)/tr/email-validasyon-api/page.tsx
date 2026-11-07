import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('tr')

export default function Page() {
  return <ValidationApiPage locale="tr" />
}
