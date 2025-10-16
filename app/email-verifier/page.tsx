import Navbar from '@/components/Navbar'
import EmailVerifierHero from '@/components/EmailVerifier/Hero'
import EmailVerifierFeatures from '@/components/EmailVerifier/Features'
import EmailVerifierHowItWorks from '@/components/EmailVerifier/HowItWorks'
import EmailVerifierStats from '@/components/EmailVerifier/Stats'
import EmailVerifierCTA from '@/components/EmailVerifier/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Email Verifier - Validate Email Lists Instantly | TargetPulse',
  description: 'Verify thousands of emails in seconds. Check deliverability, detect invalid addresses, and improve your email campaign performance with our advanced email verification tool.',
}

export default function EmailVerifierPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Navbar />
      <EmailVerifierHero />
      <EmailVerifierStats />
      <EmailVerifierFeatures />
      <EmailVerifierHowItWorks />
      <EmailVerifierCTA />
      <Footer />
    </main>
  )
}

