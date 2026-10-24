import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('it')

export default function Page() {
  return <EmailSignaturePage locale="it" />
}
