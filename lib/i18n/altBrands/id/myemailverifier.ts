// Indonesian MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). Its prices come from the
// August 2026 check and the page says so. The competitor's words (free tier,
// expiry, strengths) live in lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'myemailverifier',
  path: '/id/alternatif-myemailverifier',
  cluster: 'altMyemailverifier',
  metaTitle: 'Alternatif MyEmailVerifier: harga dan catch-all | Giggal.ai',
  ogTitle: 'Alternatif MyEmailVerifier untuk daftar B2B',
  desc: 'MyEmailVerifier memberi 100 kredit gratis sehari, tetapi hanya memberi status catch-all. Giggal.ai memberi hasil untuk email itu, US$9,90 per 10.000.',
  h1: ['', 'Alternatif MyEmailVerifier', ' untuk daftar B2B dengan domain catch-all'],
  heroP:
    'MyEmailVerifier adalah alat verifikasi email berbiaya rendah dengan 100 kredit gratis per hari. Alat ini memberi alamat catch-all status tersendiri dan tidak memastikannya. Giggal.ai memberi hasil untuk alamat tersebut, dengan harga US$9,90 per 10.000 email.',
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier hanya memberi status catch-all. Giggal.ai memberi hasil.' },
    { k: 'Harga', v: '10.000 kredit seharga US$15 di MyEmailVerifier dan US$9,90 di Giggal.ai.' },
    { k: 'Volume besar', v: 'Satu juta kredit seharga US$349 di MyEmailVerifier dan US$680 di Giggal.ai.' },
    { k: 'Kredit gratis', v: 'MyEmailVerifier memberi 100 per hari. Giggal.ai memberi 1.000 satu kali, tanpa kartu kredit.' },
  ],
  about: {
    heading: 'Apa itu MyEmailVerifier?',
    paragraphs: [
      'MyEmailVerifier adalah layanan verifikasi email dari myemailverifier.com. Layanan ini memverifikasi daftar massal dan email satuan, dan punya API.',
      'MyEmailVerifier memberi 100 kredit gratis setiap hari. Kredit berbayar mulai dari US$4 untuk 1.000 kredit dan tidak pernah kedaluwarsa.',
      'Alamat catch-all dikembalikan dengan status catch-all tersendiri. MyEmailVerifier tidak memastikan apakah kotak masuk tersebut ada.',
    ],
  },
  reasons: {
    heading: 'Mengapa orang mencari alternatif MyEmailVerifier',
    items: [
      { k: 'Catch-all', v: 'Alamat catch-all kembali tanpa jawaban yang jelas. Pada daftar B2B, alamat seperti ini bisa menjadi bagian besar dari daftar.' },
      { k: 'Gateway', v: 'MyEmailVerifier tidak menyebutkan Proofpoint, Mimecast, atau gateway lain yang alamat di baliknya bisa dicek.' },
    ],
  },
  catchAllHeading: 'Email catch-all: MyEmailVerifier vs Giggal.ai',
  catchAllProse:
    'Banyak domain perusahaan menerima semua alamat. Karena itu, pemeriksaan dasar tidak bisa membedakan alamat asli dari alamat palsu. MyEmailVerifier menandai alamat ini sebagai catch-all dan menyerahkan keputusannya kepada Anda. Giggal.ai mengecek alamat ini lebih lanjut dan memberikan salah satu dari empat hasil di bawah, dengan biaya 1 kredit per alamat.',
  pricingHeading: 'Perbandingan harga MyEmailVerifier dan Giggal.ai',
  pricingProse:
    'MyEmailVerifier menjual kredit yang tidak pernah kedaluwarsa. Saat kami mengecek harganya pada Agustus 2026, 1.000 kredit seharga US$4, 10.000 seharga US$15, 100.000 seharga US$99, dan satu juta seharga US$349.',
  pricingExtra: [
    'Giggal.ai menjual 10.000 kredit seharga US$9,90, 100.000 seharga US$76, dan satu juta seharga US$680. Untuk satu juta, MyEmailVerifier lebih murah. Giggal.ai menambahkan hasil untuk alamat catch-all dan alamat di balik gateway.',
  ],
  strengths: {
    heading: 'Kapan MyEmailVerifier cocok',
    intro: 'MyEmailVerifier adalah pilihan yang baik untuk sebagian daftar:',
  },
  others: {
    heading: 'Alternatif MyEmailVerifier lainnya',
    intro: 'Alat verifikasi ini juga punya harga rendah atau kredit gratis harian. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Juga memberi 100 kredit gratis per hari. 10.000 kredit permanen seharga US$60.' },
      { name: 'Bounceless', text: 'Memberi 1.000 kredit gratis per bulan jika Anda memakai email kerja. 10.000 kredit seharga US$29, dan bukti catch-all sudah termasuk.' },
      { name: 'no2bounce', text: '10.000 kredit seharga US$20 dan tidak pernah kedaluwarsa. no2bounce mengirim pesan uji untuk memastikan kotak masuk catch-all.' },
    ],
  },
  testHeading: 'Cek baris catch-all Anda dengan Giggal.ai',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek dengan MyEmailVerifier.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris yang ditandai catch-all oleh MyEmailVerifier.',
  ],
  ctaHeadline: 'Dapatkan hasil untuk alamat catch-all',
  faqs: [
    {
      q: 'Berapa harga MyEmailVerifier?',
      a: 'Saat kami mengecek harganya pada Agustus 2026, 1.000 kredit seharga US$4, 10.000 seharga US$15, 100.000 seharga US$99, dan satu juta seharga US$349. Kreditnya tidak pernah kedaluwarsa.',
    },
    {
      q: 'Apakah MyEmailVerifier gratis?',
      a: 'MyEmailVerifier memberi 100 kredit gratis setiap hari. Kredit harian ini diisi ulang setiap hari dan tidak berakhir setelah masa uji coba. Giggal.ai memberi 1.000 kredit gratis satu kali, tanpa kartu kredit.',
    },
    {
      q: 'Apakah MyEmailVerifier memverifikasi email catch-all?',
      a: 'Alat ini mendeteksi domain catch-all dan memberi status catch-all. Alat ini tidak memastikan kotak masuknya. Giggal.ai memberi hasil untuk alamat catch-all dengan biaya 1 kredit per alamat.',
    },
    {
      q: 'Apakah kredit Giggal.ai kedaluwarsa?',
      a: 'Tidak. Kredit Giggal.ai tidak pernah kedaluwarsa. Kredit MyEmailVerifier juga tidak pernah kedaluwarsa.',
    },
  ],
  breadcrumb: 'Alternatif MyEmailVerifier',
}

export default cfg
