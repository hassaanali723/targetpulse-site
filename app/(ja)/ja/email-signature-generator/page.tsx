import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('ja')

export default function Page() {
  return <EmailSignaturePage locale="ja" />
}
