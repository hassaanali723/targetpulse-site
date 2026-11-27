// Indonesian Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'mailfloss',
  path: '/id/alternatif-mailfloss',
  cluster: 'altMailfloss',
  metaTitle: 'Alternatif Mailfloss: harga dan catch-all | Giggal.ai',
  ogTitle: 'Alternatif Mailfloss yang mengecek email catch-all',
  desc: 'Mailfloss membersihkan daftar di platform email setiap hari, tetapi hanya menandai email catch-all. Giggal.ai memberi hasilnya dengan harga US$9,90 per 10.000.',
  h1: ['', 'Alternatif Mailfloss', ' untuk pembersihan daftar satu kali'],
  heroP:
    'Mailfloss terhubung dengan platform email marketing Anda dan membersihkan daftar setiap hari. Mailfloss menandai alamat catch-all, tetapi tidak memastikannya. Giggal.ai memverifikasi daftar yang Anda unggah dan memberi hasil untuk alamat catch-all, dengan harga US$9,90 per 10.000 email.',
  bluf: [
    { k: 'Cara kerja', v: 'Mailfloss membersihkan daftar Anda di dalam platform email Anda. Giggal.ai mengecek daftar yang Anda unggah atau kirim lewat API.' },
    { k: 'Catch-all', v: 'Mailfloss menandai alamat catch-all. Giggal.ai memberi hasil untuk alamat tersebut.' },
    { k: 'Harga', v: 'Kredit prabayar Mailfloss seharga US$40 per 10.000. Harga Giggal.ai US$9,90.' },
    { k: 'Pemakaian gratis', v: 'Mailfloss memberi 500 pemeriksaan gratis per bulan. Giggal.ai memberi 1.000 satu kali, tanpa kartu kredit.' },
  ],
  about: {
    heading: 'Apa itu Mailfloss?',
    paragraphs: [
      'Mailfloss adalah layanan untuk membersihkan daftar email. Mailfloss terhubung dengan 41 platform email, seperti Mailchimp, Klaviyo, HubSpot, dan ActiveCampaign. Setelah itu, Mailfloss menghapus alamat tidak valid dari daftar Anda setiap hari.',
      'Mailfloss juga memperbaiki salah ketik yang umum pada alamat email. Mailfloss punya API real-time, webhook, dan widget formulir.',
      'Mailfloss menjual langganan bulanan dan kredit prabayar. Kredit prabayar tidak pernah kedaluwarsa.',
    ],
  },
  reasons: {
    heading: 'Mengapa orang mencari alternatif Mailfloss',
    items: [
      { k: 'Catch-all', v: 'Mailfloss menandai alamat catch-all. Mailfloss tidak memastikan apakah kotak masuknya ada.' },
      { k: 'Kartu untuk uji coba', v: 'Uji coba 7 hari untuk langganan membutuhkan kartu kredit.' },
      { k: 'Batas platform', v: 'Paket Lite terhubung dengan 1 platform email, dan paket Business dengan 10.' },
      { k: 'Harga', v: 'Kredit prabayar seharga US$40 per 10.000 dan US$300 per 100.000.' },
    ],
  },
  catchAllHeading: 'Cara Mailfloss dan Giggal.ai menangani email catch-all',
  catchAllProse:
    'Mailfloss menandai alamat catch-all dan menyerahkan keputusannya kepada Anda. Giggal.ai mengecek alamat tersebut lebih lanjut dan memberikan salah satu dari empat hasil, dengan biaya 1 kredit per alamat. Giggal.ai juga mengecek alamat di balik 15 secure email gateway (gateway keamanan email) yang disebutkan namanya.',
  pricingHeading: 'Perbandingan harga Mailfloss dan Giggal.ai',
  pricingProse:
    'Langganan Mailfloss terdiri dari Lite seharga US$29 per bulan untuk 10.000 kredit, Business seharga US$59 untuk 25.000, dan Pro seharga US$209 untuk 125.000. Kredit prabayar seharga US$8 untuk 1.000, US$40 untuk 10.000, US$300 untuk 100.000, dan US$1.200 untuk satu juta.',
  pricingExtra: [
    'Setiap akun Mailfloss juga mendapat 500 verifikasi gratis per bulan. Giggal.ai menjual 10.000 kredit seharga US$9,90 dan satu juta seharga US$680, tanpa langganan.',
  ],
  strengths: {
    heading: 'Kapan Mailfloss cocok',
    intro: 'Mailfloss bisa melakukan beberapa hal yang tidak dilakukan Giggal.ai:',
  },
  others: {
    heading: 'Alternatif Mailfloss lainnya',
    intro: 'Alat verifikasi ini juga membersihkan daftar pemasaran. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Terhubung dengan lebih dari 50 alat pemasaran. 10.000 kredit permanen seharga US$60.' },
      { name: 'Bounceless', text: '10.000 kredit seharga US$29, dengan 1.000 kredit gratis per bulan jika Anda memakai email kerja.' },
      { name: 'no2bounce', text: 'Terhubung dengan HubSpot, Klaviyo, dan Zoho. 10.000 kredit seharga US$20 dan tidak pernah kedaluwarsa.' },
    ],
  },
  testHeading: 'Uji Giggal.ai pada hasil ekspor dari platform email Anda',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek dengan Mailfloss.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris catch-all dengan alamat yang ditandai oleh Mailfloss.',
  ],
  ctaHeadline: 'Dapatkan hasil untuk alamat catch-all, bukan sekadar tanda',
  faqs: [
    {
      q: 'Berapa harga Mailfloss?',
      a: 'Langganan mulai dari US$29 per bulan untuk 10.000 kredit. Kredit prabayar seharga US$40 untuk 10.000 dan US$1.200 untuk satu juta, dan kredit ini tidak pernah kedaluwarsa.',
    },
    {
      q: 'Apakah Mailfloss punya paket gratis?',
      a: 'Ya. Setiap akun mendapat 500 verifikasi gratis per bulan. Langganan juga punya uji coba 7 hari yang membutuhkan kartu kredit.',
    },
    {
      q: 'Apakah Mailfloss memverifikasi email catch-all?',
      a: 'Mailfloss hanya menandainya. Mailfloss tidak memastikan apakah kotak masuknya ada. Giggal.ai memberi hasil untuk alamat catch-all dengan biaya 1 kredit per alamat.',
    },
    {
      q: 'Apakah Giggal.ai membersihkan daftar di platform email saya seperti Mailfloss?',
      a: 'Tidak. Giggal.ai bekerja lewat unggahan, API, Zapier, n8n, dan HubSpot. Giggal.ai tidak menjalankan pembersihan harian di dalam platform email Anda.',
    },
  ],
  breadcrumb: 'Alternatif Mailfloss',
}

export default cfg
