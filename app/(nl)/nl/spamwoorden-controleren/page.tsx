import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('nl')

export default function Page() {
  return <SpamWordCheckerPage locale="nl" />
}
