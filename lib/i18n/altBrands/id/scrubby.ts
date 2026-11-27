// Indonesian Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). "Quick Verification" and "Deep Verification" stay in English.
// The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'scrubby',
  path: '/id/alternatif-scrubby',
  cluster: 'altScrubby',
  metaTitle: 'Alternatif Scrubby: perbandingan harga Scrubby.io | Giggal.ai',
  ogTitle: 'Alternatif Scrubby untuk email catch-all dan email di balik gateway',
  desc: 'Scrubby mematok US$0,008 per kredit, dan Deep Verification butuh hingga 72 jam. Giggal.ai mengecek email catch-all dan di balik gateway, US$9,90 per 10.000.',
  h1: ['', 'Alternatif Scrubby', ' dengan harga US$9,90 per 10.000 email'],
  heroP:
    'Scrubby memverifikasi email catch-all dan email yang dilindungi gateway. Giggal.ai juga berfokus pada alamat sulit yang sama. Perbedaannya ada pada harga dan cara kerja setiap pemeriksaan. Scrubby mematok US$0,008 per kredit. Giggal.ai mematok US$9,90 per 10.000.',
  bluf: [
    { k: 'Harga', v: '10.000 kredit seharga US$80 di Scrubby dan US$9,90 di Giggal.ai.' },
    { k: 'Pemeriksaan mendalam', v: 'Deep Verification dari Scrubby memakai 3 kredit dan mengirim email sungguhan. Hasil akhirnya butuh waktu hingga 72 jam.' },
    { k: 'Kredit gratis', v: 'Scrubby memberi 200 kredit gratis. Giggal.ai memberi 1.000. Keduanya tidak meminta kartu kredit.' },
    { k: 'Pengembalian dana', v: 'Scrubby menyatakan semua pembelian bersifat final. Giggal.ai mengembalikan kredit untuk hasil tidak diketahui.' },
  ],
  about: {
    heading: 'Apa itu Scrubby?',
    paragraphs: [
      'Scrubby adalah alat verifikasi email dari scrubby.io. Scrubby berfokus pada alamat catch-all dan alamat berisiko yang tidak bisa dipastikan oleh alat verifikasi lain.',
      'Scrubby punya dua jenis pemeriksaan. Quick Verification memakai 1 kredit dan mencakup domain standar, domain catch-all, dan domain yang dilindungi secure email gateway (SEG, gateway keamanan email). Deep Verification memakai 3 kredit. Scrubby mengirim email sungguhan ke setiap alamat dan memberi hasil akhir dalam 72 jam.',
      'Scrubby terhubung dengan alat seperti Clay, Instantly, Smartlead, Apollo, dan HubSpot.',
    ],
  },
  reasons: {
    heading: 'Mengapa tim mencari alternatif Scrubby',
    items: [
      { k: 'Harga', v: 'Harga bayar sesuai pemakaian adalah US$0,008 per kredit. 10.000 pemeriksaan seharga US$80, dan 100.000 seharga US$800.' },
      { k: 'Waktu tunggu', v: 'Hasil Deep Verification butuh waktu hingga 72 jam.' },
      { k: 'Email sungguhan', v: 'Deep Verification mengirim email sungguhan ke setiap alamat di daftar Anda.' },
      { k: 'Tanpa pengembalian dana', v: 'Scrubby menyatakan semua pembelian bersifat final.' },
    ],
  },
  catchAllHeading: 'Scrubby vs Giggal.ai untuk email catch-all dan email di balik gateway',
  catchAllProse:
    'Scrubby dan Giggal.ai sama-sama memberi hasil untuk alamat catch-all dan alamat yang dilindungi gateway. Giggal.ai memakai 1 kredit untuk setiap alamat, tanpa tingkat pemeriksaan yang lebih dalam. Giggal.ai mengecek alamat di balik 15 gateway yang disebutkan namanya, termasuk Proofpoint, Mimecast, dan Barracuda. Jika Giggal.ai tidak mendapat jawaban, kreditnya dikembalikan.',
  pricingHeading: 'Perbandingan harga Scrubby dan Giggal.ai',
  pricingProse:
    'Harga bayar sesuai pemakaian Scrubby adalah US$0,008 per kredit, jadi 10.000 kredit seharga US$80. Paket bulanannya adalah Starter seharga US$47 untuk 6.000 kredit, Growth seharga US$97 untuk 15.000, dan Pro seharga US$497 untuk 100.000. Kredit bayar sesuai pemakaian tidak pernah kedaluwarsa, dan kredit paket terbawa ke bulan berikutnya.',
  pricingExtra: [
    'Satu Deep Verification memakai 3 kredit, jadi 10.000 pemeriksaan mendalam memakai 30.000 kredit. Giggal.ai menjual 10.000 kredit seharga US$9,90 dan 100.000 seharga US$76.',
  ],
  strengths: {
    heading: 'Kapan Scrubby cocok',
    intro: 'Scrubby punya kelebihan yang perlu Anda ketahui:',
  },
  others: {
    heading: 'Alternatif Scrubby lainnya',
    intro: 'Alat berikut juga memberi hasil untuk alamat catch-all. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'no2bounce', text: 'Mengirim pesan uji untuk memastikan kotak masuk catch-all. 10.000 kredit seharga US$20 dan tidak pernah kedaluwarsa.' },
      { name: 'Listmint', text: 'Mengecek alamat catch-all secara manual. Paket Starter seharga US$99 per bulan untuk 20.000 kredit standar dan 5.000 kredit catch-all.' },
      { name: 'Allegrow', text: 'Memberi hasil valid atau tidak valid untuk kontak catch-all, dan menyebutkan Proofpoint serta Mimecast. Paket Starter seharga US$99 per bulan.' },
    ],
  },
  testHeading: 'Uji Giggal.ai pada alamat catch-all Anda',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek dengan Scrubby.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan hasilnya dengan hasil Scrubby untuk alamat catch-all yang sama.',
  ],
  ctaHeadline: 'Cek alamat sulit yang sama dengan harga US$9,90 per 10.000',
  faqs: [
    {
      q: 'Berapa harga Scrubby?',
      a: 'Harga bayar sesuai pemakaian Scrubby adalah US$0,008 per kredit, atau US$80 untuk 10.000. Paket bulanan mulai dari US$47 untuk 6.000 kredit. Deep Verification memakai 3 kredit per email.',
    },
    {
      q: 'Apa itu Deep Verification dari Scrubby?',
      a: 'Ini adalah pemeriksaan Scrubby yang lebih lambat untuk alamat yang sulit. Biayanya 3 kredit. Pemeriksaan ini mengirim email sungguhan ke setiap alamat dan memberi hasil akhir dalam 72 jam.',
    },
    {
      q: 'Apakah Scrubby punya uji coba gratis?',
      a: 'Ya. Scrubby memberi 200 kredit gratis tanpa kartu kredit. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit.',
    },
    {
      q: 'Apakah Giggal.ai alternatif Scrubby yang baik?',
      a: 'Ya. Keduanya memberi hasil untuk alamat catch-all dan alamat di balik gateway. Giggal.ai mematok US$9,90 per 10.000 kredit dan mengembalikan kredit untuk hasil tidak diketahui.',
    },
  ],
  breadcrumb: 'Alternatif Scrubby',
}

export default cfg
