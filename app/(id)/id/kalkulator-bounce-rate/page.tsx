import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('id')

export default function Page() {
  return <BounceRateCalculatorPage locale="id" />
}
