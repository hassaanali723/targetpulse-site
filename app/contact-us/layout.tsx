import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Giggal.ai for support, inquiries, or any questions about our email verification tool. We typically respond within 24 hours.',
  keywords: [
    'contact Giggal.ai',
    'email verifier support',
    'email verification help',
    'Giggal.ai support',
    'email verification tool support',
    'bulk email verifier help',
  ],
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Us - Giggal.ai Email Verifier',
    description: 'Get in touch with Giggal.ai for support, inquiries, or any questions about our email verification tool.',
    url: 'https://targetpulse.net/contact-us',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
