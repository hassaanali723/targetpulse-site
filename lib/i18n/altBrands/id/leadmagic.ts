// Indonesian LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'leadmagic',
  path: '/id/alternatif-leadmagic',
  cluster: 'altLeadmagic',
  metaTitle: 'Alternatif LeadMagic: perbandingan harga LeadMagic | Giggal.ai',
  ogTitle: 'Alternatif LeadMagic khusus untuk verifikasi email',
  desc: 'Harga LeadMagic mulai US$99 per bulan untuk 5.000 kredit bersama. Giggal.ai memverifikasi email dengan harga US$9,90 per 10.000 kredit yang tidak kedaluwarsa.',
  h1: ['', 'Alternatif LeadMagic', ' khusus untuk verifikasi email'],
  heroP:
    'LeadMagic adalah platform data B2B. Validasi email adalah salah satu produknya, dan memakai satu kumpulan kredit bulanan bersama produk lain. Jika Anda hanya perlu memverifikasi daftar email, Giggal.ai mengerjakan satu tugas itu. Harganya US$9,90 per 10.000 email, sekali bayar.',
  bluf: [
    { k: 'Apa itu', v: 'LeadMagic menjual data kontak dan data perusahaan. Giggal.ai hanya memverifikasi alamat email.' },
    { k: 'Harga', v: 'Harga LeadMagic mulai US$99 per bulan. Harga Giggal.ai US$9,90 untuk 10.000 kredit, sekali bayar.' },
    { k: 'Kredit gratis', v: 'LeadMagic tidak memberi kredit gratis. Giggal.ai memberi 1.000 kredit tanpa kartu kredit.' },
    { k: 'Catch-all', v: 'Keduanya memberi hasil untuk alamat catch-all. Giggal.ai juga mengecek di balik 15 gateway email yang disebutkan namanya.' },
  ],
  about: {
    heading: 'Apa itu LeadMagic?',
    paragraphs: [
      'LeadMagic adalah platform data B2B untuk tim penjualan. LeadMagic mencari email kerja dan nomor ponsel, lalu menambahkan data perusahaan ke data kontak. LeadMagic juga memantau perpindahan kerja dan aktivitas iklan.',
      'Validasi email adalah salah satu produk di dalam LeadMagic. Hasilnya valid, tidak valid, atau tidak diketahui. Hasil yang jelas memakai 0,25 kredit, dan hasil tidak diketahui gratis. Validasi catch-all adalah produk terpisah yang memakai kredit yang sama.',
      'Tim memakai LeadMagic lewat aplikasi web, REST API, CLI, atau server MCP. LeadMagic terhubung ke alat seperti Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier, dan Make.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Harga LeadMagic tahun 2026',
  pricingProse:
    'LeadMagic adalah langganan bulanan. Essential seharga US$99 untuk 5.000 kredit. Growth seharga US$249 untuk 20.000, Professional US$499 untuk 50.000, dan Ultimate US$849 untuk 100.000. Semua produk memakai kredit yang sama.',
  pricingExtra: [
    'Dengan 0,25 kredit per validasi, paket US$99 mencakup 20.000 pemeriksaan per bulan. Untuk 100.000 pemeriksaan per bulan, Anda butuh Professional seharga US$499. Pembayaran tahunan memberi dua bulan gratis. Kredit bulanan yang tidak terpakai terbawa ke bulan berikutnya, hingga dua kali jatah bulanan.',
    'Giggal.ai tidak memakai langganan. 10.000 kredit seharga US$9,90, 100.000 kredit seharga US$76, dan satu juta kredit seharga US$680. Kreditnya tidak pernah kedaluwarsa.',
  ],
  reasons: {
    heading: 'Mengapa tim mencari alternatif LeadMagic',
    items: [
      { k: 'Tagihan bulanan', v: 'LeadMagic menagih setiap bulan, termasuk di bulan saat Anda tidak memverifikasi apa pun. Kredit Giggal.ai dibeli sekali.' },
      { k: 'Kredit bersama', v: 'Validasi dan pengayaan data memakai kredit yang sama. Membersihkan daftar yang besar membuat kredit untuk mencari kontak berkurang.' },
      { k: 'Tanpa uji gratis', v: 'LeadMagic tidak memberi kredit gratis. Anda harus membayar sebelum bisa mengujinya pada daftar Anda sendiri.' },
      { k: 'Gateway', v: 'LeadMagic tidak menyebutkan dukungan untuk secure email gateway (gateway keamanan email) seperti Proofpoint atau Mimecast.' },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai untuk alamat catch-all',
  catchAllProse:
    'Pada domain catch-all, LeadMagic memberi hasil valid, tidak valid, atau tidak diketahui, dan tidak menagih hasil tidak diketahui. Giggal.ai juga memberi hasil untuk alamat catch-all, dengan 1 kredit per alamat. Giggal.ai juga mengecek alamat di balik 15 secure email gateway, seperti Proofpoint, Mimecast, dan Barracuda. Gateway ini menerima setiap alamat pada awalnya. Karena itu pemeriksaan dasar tidak bisa membedakan alamat asli dari alamat palsu.',
  strengths: {
    heading: 'Kelebihan LeadMagic',
    intro: 'LeadMagic adalah pilihan yang lebih baik jika Anda membutuhkan hal berikut:',
  },
  others: {
    heading: 'Alternatif LeadMagic lainnya',
    intro: 'Jika Anda butuh pencarian dan verifikasi dalam satu alat, berikut pilihan lainnya. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'Findymail', text: 'Email finder yang juga memverifikasi. Paket Starter seharga US$99 per bulan untuk 5.000 kredit finder dan 5.000 kredit verifier. Findymail menjanjikan bounce rate di bawah 5%.' },
      { name: 'Anymail Finder', text: 'Email finder dengan alat verifikasi terpisah. Satu pemeriksaan memakai 0,2 kredit, dan paketnya mulai US$29 per bulan untuk 400 kredit.' },
      { name: 'no2bounce', text: 'Alat verifikasi dengan kredit bayar sesuai pemakaian yang tidak pernah kedaluwarsa. 10.000 kredit seharga US$20.' },
    ],
  },
  testHeading: 'Uji Giggal.ai pada daftar yang sudah dicek LeadMagic',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek di LeadMagic.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris catch-all dengan hasil LeadMagic untuk alamat yang sama.',
  ],
  ctaHeadline: 'Verifikasi daftar Anda tanpa paket bulanan',
  faqs: [
    {
      q: 'Berapa harga LeadMagic?',
      a: 'Harga LeadMagic mulai US$99 per bulan untuk 5.000 kredit. Paketnya naik hingga US$849 per bulan untuk 100.000 kredit. Validasi email memakai 0,25 kredit per hasil yang jelas, jadi paket US$99 mencakup 20.000 pemeriksaan.',
    },
    {
      q: 'Apakah LeadMagic punya paket gratis?',
      a: 'Tidak. Menurut LeadMagic, tidak ada kredit gratis. Fitur Search-nya punya uji coba 14 hari. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit, yang bisa dipakai untuk unggahan massal.',
    },
    {
      q: 'Apakah Giggal.ai alternatif LeadMagic yang baik?',
      a: 'Ya, jika Anda hanya butuh verifikasi email. Giggal.ai memverifikasi daftar, memberi hasil untuk alamat catch-all, dan harganya US$9,90 per 10.000. Giggal.ai tidak mencari email atau nomor telepon, jadi tidak menggantikan produk data LeadMagic.',
    },
    {
      q: 'Apakah LeadMagic menagih hasil tidak diketahui?',
      a: 'Tidak. LeadMagic menagih 0,25 kredit untuk hasil yang jelas dan tidak menagih apa pun untuk hasil tidak diketahui. Giggal.ai juga mengembalikan kredit jika hasilnya tidak diketahui.',
    },
    {
      q: 'Apakah LeadMagic sepadan jika hanya untuk verifikasi email?',
      a: 'Sepadan jika Anda memakai produk datanya setiap bulan. Untuk verifikasi saja, Anda membayar minimal US$99 per bulan. Giggal.ai menjual 10.000 pemeriksaan seharga US$9,90, sekali bayar.',
    },
    {
      q: 'Apakah uji catch-all dari LeadMagic netral?',
      a: 'Tidak. LeadMagic memublikasikannya pada Februari 2026 dan menempatkan dirinya di posisi pertama. Anggap uji ini sebagai uji dari vendor. Giggal.ai tidak termasuk alat yang diuji.',
    },
  ],
  breadcrumb: 'Alternatif LeadMagic',
}

export default cfg
