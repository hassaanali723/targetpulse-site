import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('de')

export default function Page() {
  return <SpamWordCheckerPage locale="de" />
}
