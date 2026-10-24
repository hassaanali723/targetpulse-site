import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('id')

export default function Page() {
  return <EmailSignaturePage locale="id" />
}
