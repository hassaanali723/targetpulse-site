import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Giggal.ai for support, inquiries, or any questions about our email verification tool. We typically respond within 24 hours.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Contact Us - Giggal.ai Email Verifier',
    description: 'Get in touch with Giggal.ai for support, inquiries, or any questions about our email verification tool.',
    url: 'https://giggal.ai/contact-us',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
