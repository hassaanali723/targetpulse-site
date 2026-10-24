import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('es')

export default function Page() {
  return <BounceRateCalculatorPage locale="es" />
}
