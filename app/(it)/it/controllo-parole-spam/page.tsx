import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('it')

export default function Page() {
  return <SpamWordCheckerPage locale="it" />
}
