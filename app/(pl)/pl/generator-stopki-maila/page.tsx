import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('pl')

export default function Page() {
  return <EmailSignaturePage locale="pl" />
}
