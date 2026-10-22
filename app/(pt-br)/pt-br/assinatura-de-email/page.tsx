import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('pt-br')

export default function Page() {
  return <EmailSignaturePage locale="pt-br" />
}
