// Indonesian Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'findymail',
  path: '/id/alternatif-findymail',
  cluster: 'altFindymail',
  metaTitle: 'Alternatif Findymail dan harga Findymail | Giggal.ai',
  ogTitle: 'Alternatif Findymail dan perbandingan harganya',
  desc: 'Harga Findymail mulai US$99 per bulan. Bandingkan alternatif dan pesaing Findymail, termasuk Giggal.ai, alat verifikasi email seharga US$9,90 per 10.000 kredit.',
  h1: ['', 'Alternatif Findymail', ' untuk memverifikasi email yang sudah Anda miliki'],
  heroP:
    'Findymail mencari email B2B dan memverifikasinya. Paketnya mulai US$99 per bulan. Jika Anda sudah punya daftar dan hanya perlu memverifikasinya, Giggal.ai melakukannya dengan harga US$9,90 per 10.000 email. Anda membeli kredit sekali, dan kreditnya tidak pernah kedaluwarsa.',
  bluf: [
    { k: 'Fungsi utama', v: 'Findymail mencari email, lalu memverifikasinya. Giggal.ai hanya memverifikasi.' },
    { k: 'Harga', v: 'Harga Findymail mulai US$99 per bulan. Harga Giggal.ai US$9,90 untuk 10.000 kredit, sekali bayar.' },
    { k: 'Kredit gratis', v: 'Findymail memberi 10 kredit gratis. Giggal.ai memberi 1.000, tanpa kartu kredit.' },
    { k: 'Jaminan', v: 'Findymail menjanjikan bounce rate di bawah 5%, dan mengembalikan kredit jika lebih tinggi.' },
  ],
  about: {
    heading: 'Apa itu Findymail?',
    paragraphs: [
      'Findymail adalah email finder B2B. Findymail mencari email kerja dari nama dan perusahaan, URL LinkedIn, atau pencarian Sales Navigator. Setiap email yang ditemukan diverifikasi sebelum Anda menerimanya.',
      'Findymail punya ekstensi Chrome, add-on Google Sheets, unggahan massal, API, dan pencari nomor telepon. Findymail terhubung ke Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead, dan Lemlist, serta alat lain.',
      'Findymail juga menjual kredit verifier untuk daftar dari sumber lain. Menurut Findymail, alatnya memverifikasi email catch-all yang ditandai berisiko oleh alat lain.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Harga Findymail tahun 2026',
  pricingProse:
    'Findymail punya dua jenis paket. Paket berbasis pemakaian terdiri dari Individual seharga US$99 per bulan, Pro US$249, Team US$399, dan Scale US$999. Paket ini mencantumkan jumlah pengguna dan ukuran file, bukan jumlah kredit.',
  pricingExtra: [
    'Paket Starter berbasis kredit seharga US$99 per bulan. Paket ini berisi 5.000 kredit finder dan 5.000 kredit verifier. Volume yang lebih besar masuk Enterprise, dengan harga atas permintaan. Kredit yang tidak terpakai terbawa ke bulan berikutnya, hingga dua kali jatah bulanan.',
    'Giggal.ai tidak punya paket bulanan. 10.000 kredit seharga US$9,90, 100.000 kredit seharga US$76, dan satu juta kredit seharga US$680.',
  ],
  reasons: {
    heading: 'Mengapa tim mencari alternatif Findymail',
    items: [
      { k: 'Hanya verifikasi', v: 'Banyak tim sudah punya daftar. Mereka tidak butuh email finder, hanya alat verifikasi.' },
      { k: 'Volume', v: 'Starter berisi 5.000 kredit verifier per bulan. Volume yang lebih besar butuh penawaran Enterprise.' },
      { k: 'Tagihan bulanan', v: 'Findymail menagih setiap bulan. Kredit Giggal.ai dibeli sekali dan tidak pernah kedaluwarsa.' },
      { k: 'Uji coba kecil', v: 'Findymail memberi 10 kredit gratis. Jumlah itu terlalu sedikit untuk menguji daftar sungguhan.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai untuk email catch-all',
  catchAllProse:
    'Findymail memverifikasi email catch-all yang ditandai berisiko oleh alat lain. Giggal.ai juga memberi hasil untuk alamat catch-all, dengan 1 kredit per alamat. Giggal.ai juga mengecek alamat di balik 15 secure email gateway (gateway keamanan email) yang disebutkan namanya, seperti Proofpoint, Mimecast, dan Barracuda. Findymail tidak menyebutkan dukungan untuk gateway.',
  strengths: {
    heading: 'Kelebihan Findymail',
    intro: 'Findymail adalah pilihan yang lebih baik jika Anda membutuhkan hal berikut:',
  },
  others: {
    heading: 'Alternatif dan pesaing Findymail lainnya',
    intro: 'Alat berikut juga mencari atau memverifikasi email B2B. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Email finder dengan paket mulai US$29 per bulan untuk 400 kredit. Anymail Finder menjanjikan bahwa minimal 97% email yang ditemukannya tidak akan mengalami hard bounce.' },
      { name: 'LeadMagic', text: 'Platform data B2B dengan pencarian email, nomor ponsel, dan data perusahaan. Paketnya mulai US$99 per bulan untuk 5.000 kredit bersama.' },
      { name: 'Allegrow', text: 'Alat verifikasi untuk tim penjualan yang juga memantau inbox placement dan kesehatan domain. Starter seharga US$99 per bulan untuk 5.000 kontak.' },
    ],
  },
  testHeading: 'Verifikasi hasil ekspor Findymail dengan Giggal.ai',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek di Findymail.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris catch-all dengan hasil Findymail untuk kontak yang sama.',
  ],
  ctaHeadline: 'Verifikasi daftar Anda tanpa langganan',
  faqs: [
    {
      q: 'Berapa harga Findymail?',
      a: 'Paket Findymail mulai US$99 per bulan. Paket Starter berbasis kredit berisi 5.000 kredit finder dan 5.000 kredit verifier. Paket berbasis pemakaian berkisar dari US$99 sampai US$999 per bulan. Volume yang lebih besar diberi harga atas permintaan.',
    },
    {
      q: 'Apakah Findymail punya paket gratis?',
      a: 'Findymail memberi 10 kredit gratis untuk uji coba, tanpa kartu kredit. Tidak ada paket gratis yang berkelanjutan. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit.',
    },
    {
      q: 'Apa alternatif Findymail terbaik?',
      a: 'Untuk mencari email, Anymail Finder dan LeadMagic adalah pilihan yang umum. Untuk memverifikasi daftar yang sudah Anda miliki, harga Giggal.ai US$9,90 per 10.000 kredit, tanpa langganan.',
    },
    {
      q: 'Apakah Findymail bagus untuk verifikasi email?',
      a: 'Ya. Findymail memverifikasi setiap email yang ditemukannya dan menjanjikan bounce rate di bawah 5%. Starter berisi 5.000 kredit verifier per bulan, jadi daftar yang besar butuh paket Enterprise atau alat verifikasi lain.',
    },
    {
      q: 'Apakah Giggal.ai bisa mencari email seperti Findymail?',
      a: 'Tidak. Giggal.ai hanya memverifikasi. Cari emailnya lebih dulu, lalu cek daftarnya dengan Giggal.ai sebelum Anda mengirim.',
    },
    {
      q: 'Apakah kredit Findymail kedaluwarsa?',
      a: 'Kredit yang tidak terpakai terbawa dari bulan ke bulan, hingga dua kali jatah bulanan Anda. Kredit Giggal.ai tidak pernah kedaluwarsa.',
    },
  ],
  breadcrumb: 'Alternatif Findymail',
}

export default cfg
