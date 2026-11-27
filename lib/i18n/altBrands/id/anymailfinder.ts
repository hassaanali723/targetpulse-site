// Indonesian Anymail Finder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). Numbers come from
// lib/competitorPricing.ts; the competitor's words from lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'anymailfinder',
  path: '/id/alternatif-anymailfinder',
  cluster: 'altAnymailfinder',
  metaTitle: 'Alternatif Anymailfinder untuk verifikasi email | Giggal.ai',
  ogTitle: 'Alternatif Anymailfinder untuk memverifikasi daftar email',
  desc: 'Mencari alternatif Anymailfinder? Bandingkan harga Anymail Finder dengan Giggal.ai, alat verifikasi email bayar sesuai pemakaian, US$9,90 per 10.000 kredit.',
  h1: ['', 'Alternatif Anymailfinder', ' untuk daftar yang sudah Anda miliki'],
  heroP:
    'Anymail Finder dibuat untuk mencari alamat email. Alat verifikasinya adalah fitur tambahan yang dibayar lewat paket bulanan. Jika daftar Anda sudah ada dan Anda hanya perlu memverifikasinya, Giggal.ai melakukannya dengan harga US$9,90 per 10.000 email, tanpa langganan.',
  bluf: [
    { k: 'Fungsi utama', v: 'Anymail Finder mencari email. Giggal.ai memverifikasi email yang sudah Anda miliki.' },
    { k: 'Harga', v: 'Satu pemeriksaan verifikasi memakai 0,2 kredit, dengan paket mulai US$29 per bulan. Harga Giggal.ai US$9,90 untuk 10.000, sekali bayar.' },
    { k: 'Kredit', v: 'Kredit Anymail Finder kedaluwarsa jika Anda berhenti berlangganan. Kredit Giggal.ai tidak pernah kedaluwarsa.' },
    { k: 'Tidak diketahui', v: 'Anymail Finder menagih setiap pemeriksaan. Giggal.ai mengembalikan kredit untuk hasil tidak diketahui.' },
  ],
  about: {
    heading: 'Apa itu Anymail Finder?',
    paragraphs: [
      'Anymail Finder, yang juga ditulis Anymailfinder, adalah email finder untuk penjualan B2B. Anda memasukkan nama dan perusahaan, lalu alat ini memberikan email kerja yang sudah diverifikasi. Alat ini juga bisa mencari berdasarkan domain, jabatan, atau URL LinkedIn.',
      'Anymail Finder punya ekstensi Chrome, unggahan massal hingga 100.000 baris, dan API. Mencari email seseorang memakai 1 kredit, dan kredit hanya dipakai jika email yang terverifikasi ditemukan.',
      'Anymail Finder juga punya alat verifikasi email untuk daftar dari sumber lain. Setiap pemeriksaan memakai 0,2 kredit dan selalu ditagih. Hasilnya valid, berisiko, atau tidak valid.',
    ],
  },
  reasons: {
    heading: 'Mengapa orang mencari alternatif Anymailfinder',
    items: [
      { k: 'Paket bulanan', v: 'Kredit Anda hanya bertahan selama Anda berlangganan. Jika Anda berhenti, kreditnya kedaluwarsa di akhir periode tagihan.' },
      { k: 'Per pemeriksaan', v: 'Alat verifikasinya menagih 0,2 kredit untuk setiap pemeriksaan, termasuk alamat yang tidak bisa dipastikan.' },
      { k: 'Kartu untuk uji coba', v: 'Uji coba 7 hari meminta kartu kredit. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit.' },
      { k: 'Gateway', v: 'Anymail Finder tidak menyebutkan dukungan untuk secure email gateway (gateway keamanan email) seperti Proofpoint atau Mimecast.' },
    ],
  },
  catchAllHeading: 'Cara Anymail Finder dan Giggal.ai menangani email catch-all',
  catchAllProse:
    'Menurut Anymail Finder, sebagian besar alamat catch-all diverifikasi sebagai valid atau tidak valid. Sedikit alamat yang tidak bisa dijangkau tetap berlabel berisiko. Giggal.ai juga memberi hasil untuk alamat catch-all, dengan 1 kredit per alamat. Giggal.ai juga mengecek di balik 15 secure email gateway yang disebutkan namanya. Jika Giggal.ai tidak mendapat jawaban, hasilnya tidak diketahui dan kreditnya dikembalikan kepada Anda.',
  pricingHeading: 'Harga Anymail Finder untuk verifikasi email',
  pricingProse:
    'Anymail Finder menjual paket bulanan dari US$29 untuk 400 kredit hingga US$799 untuk 100.000 kredit. Pembayaran tahunan menghemat 33%. Satu pemeriksaan verifikasi memakai 0,2 kredit, jadi 10.000 pemeriksaan memakai 2.000 kredit.',
  pricingExtra: [
    'Artinya, 10.000 pemeriksaan per bulan masuk paket US$89, dan 100.000 pemeriksaan masuk paket US$299. Kredit yang tidak terpakai terbawa selama Anda tetap berlangganan. Giggal.ai menjual 10.000 kredit seharga US$9,90 dan 100.000 kredit seharga US$76, sekali bayar, tanpa masa kedaluwarsa.',
  ],
  strengths: {
    heading: 'Kapan Anymail Finder menjadi pilihan yang lebih baik',
    intro: 'Anymail Finder melakukan hal yang tidak dilakukan Giggal.ai. Pilih Anymail Finder untuk kebutuhan berikut:',
  },
  others: {
    heading: 'Alternatif Anymailfinder lainnya',
    intro: 'Alat berikut mencari email, memverifikasinya, atau keduanya. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'Findymail', text: 'Mencari dan memverifikasi email, dengan ekstensi Chrome untuk LinkedIn dan Sales Navigator. Starter seharga US$99 per bulan untuk 5.000 kredit finder dan 5.000 kredit verifier.' },
      { name: 'LeadMagic', text: 'Platform data B2B dengan pencarian email, nomor ponsel, dan validasi. Validasi memakai 0,25 kredit per hasil yang jelas, dengan paket mulai US$99 per bulan.' },
      { name: 'Scrubby', text: 'Alat verifikasi untuk alamat catch-all dan alamat yang dilindungi gateway. Harga kredit bayar sesuai pemakaian adalah US$0,008 per kredit, dan kreditnya tidak pernah kedaluwarsa.' },
    ],
  },
  testHeading: 'Cek hasil ekspor Anymail Finder dengan Giggal.ai',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek di Anymail Finder.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris yang ditandai berisiko oleh Anymail Finder dengan hasil dari Giggal.ai.',
  ],
  ctaHeadline: 'Verifikasi email yang sudah Anda temukan',
  faqs: [
    {
      q: 'Apa alternatif Anymailfinder terbaik?',
      a: 'Tergantung pada kebutuhannya. Untuk mencari email, lihat Findymail atau LeadMagic. Untuk memverifikasi daftar yang sudah Anda miliki, harga Giggal.ai US$9,90 per 10.000 kredit, tanpa langganan dan dengan kredit yang tidak pernah kedaluwarsa.',
    },
    {
      q: 'Berapa harga Anymail Finder?',
      a: 'Paket bulanannya mulai US$29 untuk 400 kredit hingga US$799 untuk 100.000 kredit. Pembayaran tahunan menghemat 33%. Memverifikasi email dari sumber lain memakai 0,2 kredit.',
    },
    {
      q: 'Apakah Anymail Finder punya uji coba gratis?',
      a: 'Ya. Ada uji coba 7 hari dengan 100 kredit. Anda memasukkan kartu kredit, yang dicek tetapi tidak ditagih. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit.',
    },
    {
      q: 'Apakah Giggal.ai bisa mencari alamat email seperti Anymail Finder?',
      a: 'Tidak. Giggal.ai hanya memverifikasi alamat yang sudah Anda miliki. Pakai email finder lebih dulu, lalu verifikasi daftarnya dengan Giggal.ai sebelum Anda mengirim.',
    },
    {
      q: 'Apakah kredit Anymail Finder kedaluwarsa?',
      a: 'Kredit terbawa tanpa batas selama paket Anda aktif. Jika Anda berhenti berlangganan, kreditnya kedaluwarsa di akhir periode tagihan. Kredit Giggal.ai tidak pernah kedaluwarsa.',
    },
  ],
  breadcrumb: 'Alternatif Anymail Finder',
}

export default cfg
