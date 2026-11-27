// Indonesian QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words (free tier, expiry, strengths) live in lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'quickemailverification',
  path: '/id/alternatif-quickemailverification',
  cluster: 'altQuickemailverification',
  metaTitle: 'Alternatif QuickEmailVerification dan harganya | Giggal.ai',
  ogTitle: 'Alternatif QuickEmailVerification yang mengecek catch-all',
  desc: 'QuickEmailVerification mematok US$60 per 10.000 dan hanya memberi status catch-all. Giggal.ai memberi hasil untuk email catch-all, US$9,90 per 10.000.',
  h1: ['', 'Alternatif QuickEmailVerification', ' yang mengecek email catch-all'],
  heroP:
    'QuickEmailVerification adalah alat verifikasi email yang sudah lama ada, dengan 100 kredit gratis per hari. Alat ini menandai alamat catch-all sebagai catch-all lalu berhenti di situ. Giggal.ai memberi hasil untuk alamat tersebut, dengan harga US$9,90 per 10.000 email.',
  bluf: [
    { k: 'Catch-all', v: 'QuickEmailVerification hanya memberi status catch-all. Giggal.ai memberi hasil.' },
    { k: 'Harga', v: '10.000 kredit seharga US$60 di QuickEmailVerification dan US$9,90 di Giggal.ai.' },
    { k: 'Kredit gratis', v: 'QuickEmailVerification memberi 100 per hari. Giggal.ai memberi 1.000 satu kali, tanpa kartu kredit.' },
    { k: 'Masa berlaku', v: 'Kredit bayar sesuai pemakaian di kedua alat tidak pernah kedaluwarsa.' },
  ],
  about: {
    heading: 'Apa itu QuickEmailVerification?',
    paragraphs: [
      'QuickEmailVerification adalah layanan verifikasi email dari quickemailverification.com. Layanan ini memverifikasi daftar massal, email satuan, dan formulir pendaftaran lewat REST API.',
      'Paket gratisnya memberi 100 kredit gratis setiap hari. QuickEmailVerification menyebut layanannya terhubung dengan lebih dari 50 alat pemasaran, termasuk Zapier dan WordPress.',
      'Situsnya menampilkan lencana ISO 27001, GDPR, CCPA, dan HIPAA. QuickEmailVerification mengklaim akurasi 99%.',
    ],
  },
  reasons: {
    heading: 'Mengapa tim mencari alternatif QuickEmailVerification',
    items: [
      { k: 'Catch-all', v: 'Alamat catch-all kembali dengan status catch-all. Anda tetap harus memutuskan apakah akan mengirim email ke alamat itu.' },
      { k: 'Harga', v: '10.000 kredit seharga US$60, dan 100.000 seharga US$320.' },
      { k: 'Gateway', v: 'QuickEmailVerification tidak menyebutkan dukungan untuk secure email gateway (gateway keamanan email) seperti Proofpoint atau Mimecast.' },
    ],
  },
  catchAllHeading: 'Apa yang terjadi pada email catch-all di setiap alat',
  catchAllProse:
    'QuickEmailVerification mengembalikan alamat catch-all dengan status catch-all. Alat ini tidak memastikan kotak masuknya. Pada daftar B2B, banyak alamat bisa tetap tanpa jawaban yang jelas. Giggal.ai mengecek alamat tersebut lebih lanjut dan memberikan salah satu dari empat hasil, dengan biaya 1 kredit per alamat.',
  pricingHeading: 'Perbandingan harga QuickEmailVerification dan Giggal.ai',
  pricingProse:
    'QuickEmailVerification menjual kredit permanen yang tidak pernah kedaluwarsa. 500 kredit seharga US$4, 10.000 seharga US$60, 100.000 seharga US$320, dan satu juta seharga US$1.350. Paket harian gratis memberi 100 kredit per hari.',
  pricingExtra: ['Giggal.ai menjual 10.000 kredit seharga US$9,90, 100.000 seharga US$76, dan satu juta seharga US$680. Kredit Giggal.ai juga tidak pernah kedaluwarsa.'],
  strengths: {
    heading: 'Kapan QuickEmailVerification cocok',
    intro: 'QuickEmailVerification punya kelebihan yang nyata:',
  },
  others: {
    heading: 'Alternatif QuickEmailVerification lainnya',
    intro: 'Alat verifikasi ini menangani alamat catch-all dengan cara yang berbeda. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 kredit seharga US$29, dan bukti catch-all sudah termasuk dalam harga.' },
      { name: 'no2bounce', text: '10.000 kredit seharga US$20. no2bounce mengirim pesan uji untuk memastikan kotak masuk catch-all.' },
      { name: 'Mailfloss', text: 'Membersihkan daftar di dalam 41 platform email setiap hari. Kredit prabayar seharga US$40 per 10.000.' },
    ],
  },
  testHeading: 'Cek ulang baris catch-all Anda dengan Giggal.ai',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek dengan QuickEmailVerification.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Lihat baris yang ditandai catch-all oleh QuickEmailVerification, lalu bandingkan hasilnya.',
  ],
  ctaHeadline: 'Dapatkan hasil untuk alamat yang ditandai catch-all',
  faqs: [
    {
      q: 'Berapa harga QuickEmailVerification?',
      a: 'Kredit permanen mulai dari US$4 untuk 500 kredit. 10.000 kredit seharga US$60, 100.000 seharga US$320, dan satu juta seharga US$1.350. Kredit ini tidak pernah kedaluwarsa.',
    },
    {
      q: 'Apakah QuickEmailVerification gratis?',
      a: 'Ada paket gratis dengan 100 kredit per hari, dan kreditnya diatur ulang setiap hari. Giggal.ai memberi 1.000 kredit gratis satu kali, tanpa kartu kredit, dan kredit itu bisa dipakai untuk unggahan massal.',
    },
    {
      q: 'Apakah QuickEmailVerification memverifikasi email catch-all?',
      a: 'Alat ini mendeteksi domain catch-all dan memberi status catch-all. Alat ini tidak memastikan apakah kotak masuknya ada. Giggal.ai memberi hasil untuk alamat tersebut.',
    },
    {
      q: 'Apakah Giggal.ai alternatif QuickEmailVerification yang baik?',
      a: 'Ya, untuk daftar B2B dengan banyak alamat catch-all. Giggal.ai mematok US$9,90 per 10.000 kredit dan memberi hasil untuk alamat tersebut.',
    },
  ],
  breadcrumb: 'Alternatif QuickEmailVerification',
}

export default cfg
