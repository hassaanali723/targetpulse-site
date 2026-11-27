// Indonesian Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'bounceless',
  path: '/id/alternatif-bounceless',
  cluster: 'altBounceless',
  metaTitle: 'Alternatif Bounceless: harga Bounceless.io | Giggal.ai',
  ogTitle: 'Alternatif Bounceless dengan verifikasi di balik gateway',
  desc: 'Bounceless mematok US$29 per 10.000 kredit. Giggal.ai mematok US$9,90 dan mengecek email catch-all serta email di balik gateway. Kredit tidak kedaluwarsa.',
  h1: ['', 'Alternatif Bounceless', ' yang juga mengecek email di balik gateway'],
  heroP:
    'Bounceless adalah alat verifikasi email berbiaya rendah dengan paket sekali beli dan paket bulanan. Kini Bounceless menyertakan bukti catch-all dalam pemeriksaan standarnya. Giggal.ai juga memberi hasil untuk alamat catch-all. Selain itu, Giggal.ai mengecek alamat di balik 15 secure email gateway (gateway keamanan email) yang disebutkan namanya.',
  bluf: [
    { k: 'Harga', v: '10.000 kredit seharga US$29 di Bounceless dan US$9,90 di Giggal.ai.' },
    { k: 'Volume besar', v: 'Satu juta kredit seharga US$579 di Bounceless dan US$680 di Giggal.ai.' },
    { k: 'Gateway', v: 'Giggal.ai mengecek alamat di balik 15 gateway email yang disebutkan namanya. Bounceless tidak menyebutkan gateway apa pun.' },
    { k: 'Kredit gratis', v: 'Bounceless memberi 1.000 per bulan jika Anda memakai email kerja. Giggal.ai memberi 1.000 satu kali.' },
  ],
  about: {
    heading: 'Apa itu Bounceless?',
    paragraphs: [
      'Bounceless adalah layanan verifikasi email dari bounceless.io. Layanan ini memverifikasi daftar massal dan email satuan. Bounceless juga menyediakan API dan server MCP.',
      'Akunnya juga mencakup pemeriksaan kesehatan pengirim, inbox placement, dan formulir pendaftaran. Bounceless menyebut punya lebih dari 39.000 akun pelanggan.',
      'Bounceless belum punya integrasi aplikasi bawaan. Bounceless menyediakan panduan CSV dan API untuk alat seperti Mailchimp, HubSpot, dan ActiveCampaign.',
    ],
  },
  reasons: {
    heading: 'Mengapa orang mencari alternatif Bounceless',
    items: [
      { k: 'Gateway', v: 'Bounceless tidak menyebutkan secure email gateway seperti Proofpoint atau Mimecast.' },
      { k: 'Integrasi', v: 'Bounceless belum punya integrasi aplikasi bawaan, hanya panduan CSV dan API.' },
      { k: 'Harga untuk 10.000', v: '10.000 kredit seharga US$29. Giggal.ai mematok US$9,90 untuk jumlah yang sama.' },
      { k: 'Email kerja', v: 'Kredit gratis bulanan membutuhkan email kerja. Alamat email publik tidak mendapat kredit ini.' },
    ],
  },
  catchAllHeading: 'Bounceless vs Giggal.ai untuk alamat catch-all',
  catchAllProse:
    'Bounceless menyertakan bukti catch-all dalam pemeriksaan seharga 1 kredit, dan tidak menagih hasil yang belum dipastikan. Giggal.ai juga memberi hasil untuk alamat catch-all dengan biaya 1 kredit, dan mengembalikan kredit untuk hasil tidak diketahui. Perbedaan utamanya ada pada secure email gateway. Giggal.ai mengecek alamat di balik 15 gateway, termasuk Proofpoint, Mimecast, dan Barracuda.',
  pricingHeading: 'Perbandingan harga Bounceless dan Giggal.ai',
  pricingProse:
    'Harga paket bayar sesuai pemakaian Bounceless adalah US$19 untuk 5.000, US$29 untuk 10.000, US$159 untuk 100.000, dan US$579 untuk satu juta. Paket bulanan mulai dari US$19 untuk 6.500 kredit. Kredit tidak pernah kedaluwarsa, baik dari paket sekali beli maupun paket bulanan.',
  pricingExtra: [
    'Giggal.ai menjual 10.000 kredit seharga US$9,90, 100.000 seharga US$76, dan satu juta seharga US$680. Untuk satu juta, Bounceless lebih murah. Untuk 10.000 dan 100.000, Giggal.ai lebih murah.',
  ],
  strengths: {
    heading: 'Kapan Bounceless cocok',
    intro: 'Bounceless punya kelebihan yang nyata:',
  },
  others: {
    heading: 'Alternatif Bounceless lainnya',
    intro: 'Harga alat verifikasi ini mendekati harga Bounceless. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'no2bounce', text: '10.000 kredit seharga US$20 dan satu juta seharga US$679. Kreditnya tidak pernah kedaluwarsa.' },
      { name: 'QuickEmailVerification', text: 'Memberi 100 kredit gratis setiap hari. 10.000 kredit permanen seharga US$60.' },
      { name: 'Mailfloss', text: 'Terhubung dengan 41 platform email dan menghapus alamat tidak valid setiap hari. 10.000 kredit prabayar seharga US$40.' },
    ],
  },
  testHeading: 'Cek satu daftar dengan Bounceless dan Giggal.ai',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek dengan Bounceless.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris catch-all dengan bukti yang diberikan Bounceless.',
  ],
  ctaHeadline: 'Email catch-all dan email di balik gateway, 1 kredit per alamat',
  faqs: [
    {
      q: 'Berapa harga Bounceless?',
      a: 'Paket bayar sesuai pemakaian Bounceless mulai dari US$19 untuk 5.000 kredit. 10.000 kredit seharga US$29, 100.000 seharga US$159, dan satu juta seharga US$579. Paket bulanan mulai dari US$19 untuk 6.500 kredit.',
    },
    {
      q: 'Apakah Bounceless gratis?',
      a: 'Bounceless memberi 1.000 kredit gratis per bulan jika Anda mendaftar dengan email kerja. Anda tidak perlu kartu kredit. Giggal.ai memberi 1.000 kredit gratis satu kali, tanpa kartu kredit.',
    },
    {
      q: 'Apakah Bounceless memverifikasi email catch-all?',
      a: 'Ya. Bounceless menyertakan bukti catch-all dalam pemeriksaan standarnya seharga 1 kredit, tanpa biaya tambahan. Hasil yang belum dipastikan tidak ditagih.',
    },
    {
      q: 'Apakah Giggal.ai alternatif Bounceless yang baik?',
      a: 'Ya, jika daftar Anda berisi banyak domain perusahaan. Giggal.ai mengecek alamat di balik 15 secure email gateway yang disebutkan namanya. Harganya US$9,90 per 10.000 kredit.',
    },
  ],
  breadcrumb: 'Alternatif Bounceless',
}

export default cfg
