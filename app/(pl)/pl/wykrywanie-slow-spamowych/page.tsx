import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('pl')

export default function Page() {
  return <SpamWordCheckerPage locale="pl" />
}
