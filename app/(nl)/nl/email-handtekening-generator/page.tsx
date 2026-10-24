import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('nl')

export default function Page() {
  return <EmailSignaturePage locale="nl" />
}
