import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('fr')

export default function Page() {
  return <SpamWordCheckerPage locale="fr" />
}
