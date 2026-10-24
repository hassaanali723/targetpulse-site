import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('es')

export default function Page() {
  return <EmailSignaturePage locale="es" />
}
