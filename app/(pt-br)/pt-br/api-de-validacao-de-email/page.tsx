import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('pt-br')

export default function Page() {
  return <ValidationApiPage locale="pt-br" />
}
