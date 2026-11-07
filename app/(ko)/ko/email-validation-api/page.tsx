import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('ko')

export default function Page() {
  return <ValidationApiPage locale="ko" />
}
