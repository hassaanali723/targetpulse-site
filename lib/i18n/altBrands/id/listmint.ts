// Indonesian Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'listmint',
  path: '/id/alternatif-listmint',
  cluster: 'altListmint',
  metaTitle: 'Alternatif Listmint: verifikasi email catch-all | Giggal.ai',
  ogTitle: 'Alternatif Listmint untuk verifikasi email catch-all',
  desc: 'Harga Listmint US$99 per bulan dengan 5.000 kredit catch-all. Giggal.ai mengecek catch-all dengan 1 kredit per email, US$9,90 per 10.000, tanpa kedaluwarsa.',
  h1: ['', 'Alternatif Listmint', ' dengan satu kumpulan kredit'],
  heroP:
    'Listmint adalah alat verifikasi email yang berfokus pada alamat catch-all. Setiap paketnya dibagi menjadi kredit standar dan kumpulan kredit catch-all yang lebih kecil. Giggal.ai memakai satu kumpulan kredit. Satu pemeriksaan catch-all memakai 1 kredit, sama seperti email lain.',
  bluf: [
    { k: 'Kredit', v: 'Listmint punya dua kumpulan kredit. Giggal.ai punya satu, dengan 1 kredit per email.' },
    { k: 'Harga', v: 'Listmint Starter seharga US$99 per bulan. Harga Giggal.ai US$9,90 untuk 10.000 kredit, sekali bayar.' },
    { k: 'Catch-all', v: 'Listmint Starter memberi 5.000 kredit catch-all per bulan. Giggal.ai tidak punya batas terpisah.' },
    { k: 'Gateway', v: 'Giggal.ai mengecek alamat di balik 15 gateway email yang disebutkan namanya. Listmint tidak menyebutkan satu pun.' },
  ],
  about: {
    heading: 'Apa itu Listmint?',
    paragraphs: [
      'Listmint adalah layanan verifikasi email dari listmint.io. Listmint menjalankan pemeriksaan SMTP standar dan pemeriksaan catch-all terpisah. Menurut Listmint, alamat catch-all diverifikasi secara manual.',
      'Kredit catch-all Listmint lebih mahal daripada kredit standarnya. Karena itu setiap paket berisi kumpulan kredit standar yang besar dan kumpulan kredit catch-all yang lebih kecil.',
      'Listmint juga menyatakan bisa memverifikasi alamat catch-all secara real-time.',
    ],
  },
  reasons: {
    heading: 'Mengapa orang mencari alternatif Listmint',
    items: [
      { k: 'Batas catch-all', v: 'Starter berisi 5.000 kredit catch-all per bulan. Satu daftar B2B yang besar bisa menghabiskan semuanya.' },
      { k: 'Paket bulanan', v: 'Listmint ditagih setiap bulan. Kredit Giggal.ai dibeli sekali dan tidak pernah kedaluwarsa.' },
      { k: 'Volume', v: 'Paket terbesar yang dicantumkan adalah Agency, dengan 50.000 kredit standar. Lebih dari itu butuh penawaran Enterprise.' },
      { k: 'Gateway', v: 'Listmint tidak menyebutkan secure email gateway (gateway keamanan email) apa pun yang bisa dicek di baliknya.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai untuk alamat catch-all',
  catchAllProse:
    'Listmint menagih pemeriksaan catch-all dari kumpulan kredit terpisah. Pada paket Starter seharga US$99, kumpulan itu berisi 5.000 kredit per bulan. Giggal.ai tidak punya kumpulan terpisah. Setiap alamat memakai 1 kredit, baik catch-all maupun bukan. Jika Giggal.ai tidak mendapat jawaban, hasilnya tidak diketahui dan kreditnya dikembalikan.',
  pricingHeading: 'Harga Listmint dibandingkan Giggal.ai',
  pricingProse:
    'Listmint Starter seharga US$99 per bulan untuk 20.000 kredit standar dan 5.000 kredit catch-all. Agency seharga US$187 per bulan untuk 50.000 kredit standar dan 10.000 kredit catch-all. Harga Enterprise diberikan atas permintaan.',
  pricingExtra: [
    'Giggal.ai tidak punya tingkatan paket. 10.000 kredit seharga US$9,90 dan 100.000 kredit seharga US$76. Anda bisa memakai kredit mana pun untuk alamat catch-all.',
  ],
  strengths: {
    heading: 'Kapan Listmint cocok',
    intro: 'Listmint masuk akal jika Anda menginginkan hal berikut:',
  },
  others: {
    heading: 'Alternatif Listmint lainnya',
    intro: 'Alat verifikasi berikut juga memberi hasil untuk alamat catch-all. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'Scrubby', text: 'Mengecek domain catch-all dan domain yang dilindungi gateway dengan 1 kredit. Deep Verification memakai 3 kredit dan mengirim email sungguhan. Harga bayar sesuai pemakaian adalah US$0,008 per kredit.' },
      { name: 'no2bounce', text: 'Mengirim pesan uji untuk memastikan kotak masuk catch-all. 10.000 kredit bayar sesuai pemakaian seharga US$20 dan tidak pernah kedaluwarsa.' },
      { name: 'Allegrow', text: 'Memberi hasil valid atau tidak valid untuk kontak catch-all, untuk tim penjualan. Starter seharga US$99 per bulan untuk 5.000 kontak.' },
    ],
  },
  testHeading: 'Cek daftar dari Listmint dengan Giggal.ai',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek di Listmint.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris catch-all dengan hasil dari Listmint.',
  ],
  ctaHeadline: 'Cek email catch-all tanpa batas kredit terpisah',
  faqs: [
    {
      q: 'Berapa harga Listmint?',
      a: 'Listmint Starter seharga US$99 per bulan dengan 20.000 kredit standar dan 5.000 kredit catch-all. Agency seharga US$187 per bulan dengan 50.000 kredit standar dan 10.000 kredit catch-all. Harga Enterprise diberikan atas permintaan.',
    },
    {
      q: 'Mengapa Listmint punya kredit catch-all terpisah?',
      a: 'Menurut Listmint, kredit catch-all lebih mahal daripada kredit SMTP biasa karena pemeriksaan catch-all butuh lebih banyak kerja. Giggal.ai menagih 1 kredit untuk setiap alamat, termasuk catch-all.',
    },
    {
      q: 'Apakah Giggal.ai alternatif Listmint yang baik?',
      a: 'Ya, jika Anda memverifikasi daftar dengan banyak alamat catch-all. Giggal.ai tidak punya batas catch-all terpisah dan tidak punya paket bulanan. Harganya US$9,90 per 10.000 kredit.',
    },
    {
      q: 'Apakah Listmint punya uji coba gratis?',
      a: 'Listmint menawarkan cara mulai gratis, tetapi tidak menyebutkan jumlah kredit yang diberikan. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit.',
    },
  ],
  breadcrumb: 'Alternatif Listmint',
}

export default cfg
