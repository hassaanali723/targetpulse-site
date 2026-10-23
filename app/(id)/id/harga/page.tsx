import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Indonesian pricing page. Title starts with the planned "Harga verifikasi
// email" (SEO-Plan/i18n-batch2-id-keyword-plan.md section 2) and adds the
// 10.000-credit price. Money is written US$9,90 (terminology sheet).

const PATH = '/id/harga'
const TITLE = 'Harga Verifikasi Email: 10.000 kredit untuk US$9,90'
const DESC =
  'Harga verifikasi email: US$9,90 untuk 10.000 kredit, hingga US$0,0007 per alamat. Beli satu kali atau berlangganan dengan diskon 10%. Kredit tidak kedaluwarsa.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: 'Harga verifikasi email',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Harga',
  h1Lead: 'Harga',
  h1Accent: 'verifikasi email',
  intro: (
    <>
      Anda hanya membayar yang Anda pakai. Tanpa langganan wajib, tanpa biaya tersembunyi, dan kredit tidak kedaluwarsa.
      Anda mulai dengan <strong className="text-indigo-600 font-extrabold">1.000 kredit uji coba gratis</strong>, tanpa kartu kredit.
    </>
  ),
  contactHref: '/id/kontak',
  includedTitle: 'Semua fitur ada di setiap paket',
  includedText: 'Semua fitur, di setiap paket. Tanpa tingkatan dan tanpa fitur yang dikunci.',
  features: [
    'Pengecekan mailbox',
    'Pengecekan domain dan MX record',
    'Deteksi gateway keamanan email (SEG)',
    'Deteksi email sekali pakai',
    'Deteksi alamat email berbasis peran',
    'Verifikasi catch-all',
    'Unggah dan verifikasi massal',
    'Ekspor ke CSV, Excel, dan JSON',
    'Hapus alamat duplikat',
    'Laporan verifikasi yang rinci',
    'Kredit yang tidak kedaluwarsa',
  ],
  rulesTitle: 'Harga yang mudah dipahami',
  rulesText: 'Empat aturan membuat harga tetap jelas dan bisa diprediksi.',
  rules: [
    { title: '1 kredit = 1 alamat', body: 'Setiap pengecekan memakai tepat satu kredit dari saldo Anda. Ini juga berlaku untuk alamat catch-all dan alamat di balik gateway keamanan email.' },
    { title: 'Diskon volume', body: 'Makin banyak kredit yang Anda beli, makin murah harga per kredit: dari US$0,0017 sampai US$0,0007.' },
    { title: 'Diskon 10% dengan langganan', body: 'Dengan langganan bulanan, Anda otomatis hemat 10% untuk setiap paket.' },
    { title: 'Kredit tidak kedaluwarsa', body: 'Pakai kapan saja. Kredit tetap ada di akun Anda selama Anda membutuhkannya.' },
  ],
  faqTitle: 'Pertanyaan yang sering diajukan',
  faqText: 'Kredit, pembayaran, dan pengembalian dana.',
  faq: [
    { q: 'Metode pembayaran apa yang diterima?', a: 'Semua kartu kredit dan kartu debit utama, melalui Stripe. Harga dalam dolar AS. Bank Anda yang menerapkan kurs.' },
    { q: 'Bisakah saya membatalkan langganan kapan saja?', a: 'Bisa, kapan saja. Semua kredit tetap ada di akun Anda dan Anda tidak membayar apa pun lagi.' },
    { q: 'Apa yang terjadi jika kredit saya habis?', a: 'Anda bisa membeli kredit baru kapan saja. Saldo Anda langsung diperbarui.' },
    { q: 'Apakah saya bisa mendapat pengembalian dana?', a: 'Pada dasarnya kredit tidak dapat dikembalikan. Kasus luar biasa kami tinjau satu per satu. Untuk hasil "tidak diketahui", kredit Anda dikembalikan. Rinciannya ada di kebijakan pengembalian dana.' },
    { q: 'Apakah ada pembelian minimum?', a: 'Paket terkecil adalah 3.000 kredit (US$5,00). Sebelum membeli, Anda mendapat 1.000 kredit uji coba gratis.' },
    { q: 'Apakah kredit bisa kedaluwarsa?', a: 'Tidak pernah. Kredit tetap ada di akun Anda sampai Anda memakainya.' },
  ],
  ctaTitle: 'Mulai dengan 1.000 kredit gratis',
  ctaText: 'Tanpa kartu kredit. Cek alamat email pertama Anda secara gratis dan lihat hasilnya dalam beberapa detik.',
  ctaButton: 'Ambil kredit gratis',
  ctaHref: '/id/daftar',
}

export default function HargaPage() {
  return <PricingPageL10n locale="id" content={content} />
}
