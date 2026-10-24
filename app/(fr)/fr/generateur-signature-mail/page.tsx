import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('fr')

export default function Page() {
  return <EmailSignaturePage locale="fr" />
}
