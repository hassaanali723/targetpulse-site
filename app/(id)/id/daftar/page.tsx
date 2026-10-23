import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/id/daftar'
const DESC =
  'Buat akun Giggal.ai dalam beberapa detik. Anda mendapat 1.000 kredit gratis, tanpa kartu kredit. Cek domain catch-all dengan akurasi 98,5%.'

export const metadata: Metadata = {
  title: { absolute: 'Buat akun: dapatkan 1.000 verifikasi email gratis | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: 'Buat akun: 1.000 verifikasi email gratis',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Daftar',
  h1Lead: 'Buat akun Anda',
  h1Accent: 'dan mulai dengan 1.000 kredit',
  intro: 'Buat akun Giggal.ai dalam waktu kurang dari 30 detik. 1.000 pengecekan pertama gratis. Ini juga berlaku untuk domain catch-all dan accept-all yang ditandai "berisiko" oleh alat lain. Untuk saat ini, dashboard tersedia dalam bahasa Inggris.',
  ctaPrimary: 'Buat akun gratis',
  pricingLabel: 'Lihat harga',
  pricingHref: '/id/harga',
  trustPoints: ['Tanpa kartu kredit', 'Kredit tidak kedaluwarsa', 'Bisa berhenti kapan saja'],
  perksKicker: 'Yang Anda dapatkan',
  perksTitle: 'Semua yang Anda butuhkan untuk membersihkan daftar email',
  perksText: 'Akses penuh ke semua fitur selama uji coba gratis. Tanpa fitur yang dikunci dan tanpa syarat tersembunyi.',
  perks: [
    { title: '1.000 kredit gratis', body: '1.000 pengecekan pertama gratis. Tanpa kartu kredit, dan kredit tidak kedaluwarsa.' },
    { title: 'Hasil secara real-time', body: 'Unggah daftar dan lihat hasilnya muncul baris demi baris.' },
    { title: 'Verifikasi catch-all', body: 'Hasil yang jelas, valid atau tidak valid, untuk domain catch-all tempat alat lain berhenti.' },
    { title: 'Bayar sesuai pemakaian', body: 'Mulai dari US$5 untuk 3.000 kredit. Kredit tidak kedaluwarsa dan Anda bisa berhenti kapan saja.' },
  ],
  ctaTitle: 'Siap membersihkan daftar email Anda?',
  ctaText: 'Pendaftaran hanya butuh 30 detik. 1.000 pengecekan pertama gratis.',
  ctaButton: 'Daftar gratis',
}

export default function DaftarPage() {
  return <SignupPageL10n locale="id" content={content} />
}
