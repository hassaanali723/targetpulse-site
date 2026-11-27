// Indonesian Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/id/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'id',
  slug: 'allegrow',
  path: '/id/alternatif-allegrow',
  cluster: 'altAllegrow',
  metaTitle: 'Alternatif Allegrow: perbandingan harga Allegrow | Giggal.ai',
  ogTitle: 'Alternatif Allegrow yang Anda bayar per email',
  desc: 'Harga Allegrow mulai US$99 per bulan untuk 5.000 kontak. Giggal.ai mengecek email catch-all dan email di balik gateway, US$9,90 per 10.000, tanpa kedaluwarsa.',
  h1: ['', 'Alternatif Allegrow', ' yang Anda bayar per email'],
  heroP:
    'Allegrow adalah platform verifikasi email dan deliverability (tingkat keterkiriman email) untuk tim penjualan. Allegrow dijual sebagai paket bulanan mulai US$99 untuk 5.000 kontak. Giggal.ai memverifikasi email dengan kredit sekali bayar. 10.000 kredit seharga US$9,90 dan tidak pernah kedaluwarsa.',
  bluf: [
    { k: 'Penagihan', v: 'Allegrow dijual sebagai paket bulanan. Kredit Giggal.ai dibeli sekali.' },
    { k: 'Harga', v: 'Allegrow Starter seharga US$99 per bulan untuk 5.000 kontak. Harga Giggal.ai US$9,90 untuk 10.000.' },
    { k: 'Catch-all', v: 'Keduanya memberi hasil valid atau tidak valid untuk alamat catch-all. Keduanya menyebutkan dukungan untuk Proofpoint dan Mimecast.' },
    { k: 'Alat tambahan', v: 'Allegrow juga memantau inbox placement dan kesehatan domain. Giggal.ai tidak.' },
  ],
  about: {
    heading: 'Apa itu Allegrow?',
    paragraphs: [
      'Allegrow adalah platform verifikasi email B2B untuk tim penjualan dan tim pendapatan. Allegrow memverifikasi kontak, termasuk alamat catch-all, dan memberi hasil valid atau tidak valid. Menurut Allegrow, alatnya tidak pernah mengirim email untuk memverifikasi alamat catch-all.',
      'Allegrow juga memantau reputasi pengirim dan inbox placement untuk kotak masuk yang terhubung. Allegrow terintegrasi dengan Outreach, Salesloft, HubSpot, Apollo, ZoomInfo, dan Clay.',
      'Allegrow menyediakan laporan SOC 2, dan SSO sebagai tambahan pada paket tertingginya.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Harga Allegrow tahun 2026',
  pricingProse:
    'Allegrow Starter seharga US$99 per bulan untuk 5.000 kontak. Kontak tambahan seharga US$8 per 1.000. Scale Plus Unlimited seharga US$1.340 per bulan, ditagih tahunan, tanpa batas kredit. Paket API diberi harga atas permintaan.',
  pricingExtra: [
    'Jadi 10.000 kontak per bulan pada paket Starter menjadi US$139. Ini hitungan kami dari tarif yang dipublikasikan, bukan paket yang dicantumkan. Giggal.ai menjual 10.000 kredit seharga US$9,90 dan 100.000 kredit seharga US$76, sekali bayar.',
  ],
  reasons: {
    heading: 'Mengapa tim mencari alternatif Allegrow',
    items: [
      { k: 'Biaya bulanan', v: 'Starter seharga US$99 setiap bulan. Tim yang memverifikasi hanya beberapa kali setahun membayar untuk bulan yang tidak dipakai.' },
      { k: 'Integrasi', v: 'Integrasi bawaan untuk HubSpot, Outreach, dan Salesloft ada di Scale Plus. Starter terhubung ke Clay lewat API key.' },
      { k: 'Batas uji coba', v: 'Uji coba 14 hari mencakup 1.000 alamat, tanpa integrasi dan tanpa akses API.' },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai untuk email catch-all dan email di balik gateway',
  catchAllProse:
    'Allegrow dan Giggal.ai sama-sama memberi hasil valid atau tidak valid untuk alamat catch-all. Keduanya juga menyebutkan Proofpoint dan Mimecast di antara secure email gateway (gateway keamanan email) yang alamat di baliknya bisa dicek. Perbedaan utamanya ada pada penagihan. Allegrow memakai jatah kontak bulanan. Giggal.ai menagih 1 kredit per alamat dari kredit yang tidak pernah kedaluwarsa.',
  strengths: {
    heading: 'Kelebihan Allegrow',
    intro: 'Allegrow mencakup lebih dari verifikasi. Allegrow adalah pilihan yang lebih baik untuk kebutuhan berikut:',
  },
  others: {
    heading: 'Alternatif Allegrow lainnya',
    intro: 'Alat berikut juga memverifikasi alamat catch-all. Harga diambil dari situs masing-masing vendor pada 27 November 2026.',
    items: [
      { name: 'Scrubby', text: 'Mengecek domain catch-all dan domain yang dilindungi gateway. Harga bayar sesuai pemakaian adalah US$0,008 per kredit, dan paket bulanan mulai US$47.' },
      { name: 'Listmint', text: 'Mengecek alamat catch-all dari kumpulan kredit terpisah. Starter seharga US$99 per bulan untuk 20.000 kredit standar dan 5.000 kredit catch-all.' },
      { name: 'Bounceless', text: 'Menyertakan bukti catch-all dalam pemeriksaan 1 kredit, dan punya alat inbox placement. 10.000 kredit seharga US$29.' },
    ],
  },
  testHeading: 'Uji Giggal.ai dengan hasil Allegrow Anda',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek di Allegrow.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan hasil catch-all dengan hasil Allegrow untuk kontak yang sama.',
  ],
  ctaHeadline: 'Verifikasi alamat sulit yang sama, dengan harga per email',
  faqs: [
    {
      q: 'Berapa harga Allegrow?',
      a: 'Allegrow Starter seharga US$99 per bulan untuk 5.000 kontak, dengan kontak tambahan seharga US$8 per 1.000. Scale Plus Unlimited seharga US$1.340 per bulan, ditagih tahunan. Paket API diberi harga atas permintaan.',
    },
    {
      q: 'Apakah Allegrow punya uji coba gratis?',
      a: 'Ya. Allegrow punya uji coba 14 hari untuk hingga 1.000 alamat, tanpa kartu kredit. Integrasi dan akses API tidak termasuk dalam uji coba.',
    },
    {
      q: 'Apakah Giggal.ai alternatif Allegrow yang baik?',
      a: 'Ya, jika Anda hanya butuh verifikasi. Giggal.ai memberi hasil untuk alamat catch-all dan alamat di balik gateway dengan harga US$9,90 per 10.000. Giggal.ai tidak memantau inbox placement atau reputasi pengirim.',
    },
    {
      q: 'Apakah Allegrow mengirim email untuk memverifikasi alamat catch-all?',
      a: 'Tidak. Menurut Allegrow, alatnya tidak pernah mengirim email untuk memverifikasi alamat catch-all.',
    },
    {
      q: 'Apakah Allegrow punya paket tanpa batas?',
      a: 'Ya. Scale Plus Unlimited seharga US$1.340 per bulan, ditagih tahunan, dengan verifikasi tanpa batas lewat integrasi atau CSV. Giggal.ai tidak punya paket tanpa batas.',
    },
  ],
  breadcrumb: 'Alternatif Allegrow',
}

export default cfg
