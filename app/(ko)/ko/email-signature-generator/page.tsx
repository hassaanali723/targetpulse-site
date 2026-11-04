import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('ko')

export default function Page() {
  return <EmailSignaturePage locale="ko" />
}
