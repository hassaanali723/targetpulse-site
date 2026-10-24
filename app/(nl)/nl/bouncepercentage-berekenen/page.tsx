import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('nl')

export default function Page() {
  return <BounceRateCalculatorPage locale="nl" />
}
