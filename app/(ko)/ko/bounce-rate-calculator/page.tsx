import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('ko')

export default function Page() {
  return <BounceRateCalculatorPage locale="ko" />
}
