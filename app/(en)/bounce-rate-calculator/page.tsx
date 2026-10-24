import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('en')

export default function Page() {
  return <BounceRateCalculatorPage locale="en" />
}
