import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('es')

export default function Page() {
  return <ValidationApiPage locale="es" />
}
