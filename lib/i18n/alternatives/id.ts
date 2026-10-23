// Indonesian alternative pages (plans/15): translations of the English pages,
// same sections and FAQ. The searched form "alternatif <merek>" leads the title
// and H1. Numbers 10.000, prices US$9,90 (currency stays USD). Register "Anda".
// Only the three clusters registered for id: zerobounce, neverbounce, snovio.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const zerobounce: AltL10nConfig = {
  locale: 'id',
  slug: 'zerobounce',
  path: '/id/alternatif-zerobounce',
  cluster: 'altZerobounce',
  metaTitle: 'Alternatif ZeroBounce: harga dan catch-all | Giggal.ai',
  ogTitle: 'Alternatif ZeroBounce untuk daftar dengan alamat catch-all',
  desc: 'ZeroBounce mematok US$129 per 10.000 dan memberi catch-all skor 1 sampai 10, bukan hasil. Giggal.ai seharga US$9,90 dan memastikannya. 1.000 kredit gratis.',
  h1: ['', 'Alternatif ZeroBounce', ' yang benar-benar mengecek alamat catch-all'],
  heroP: 'Pekerjaan yang sama dengan sepersepuluh harganya. Anda mendapat jawaban yang jelas, valid atau tidak valid, sedangkan ZeroBounce hanya memberi skor 1 sampai 10. US$9,90 per 10.000 kredit dibandingkan US$129.',
  bluf: [
    { k: 'Harga', v: 'US$9,90 dibandingkan US$129 per 10.000 kredit. Selisihnya tetap ada di setiap tingkat volume.' },
    { k: 'Catch-all', v: 'Kami memberi hasil valid atau tidak valid. ZeroBounce memberi skor 1 sampai 10, bukan jawaban.' },
    { k: 'Minimum', v: 'Di sini tidak ada pembelian minimum, Anda mulai dengan 1.000 kredit gratis. ZeroBounce mewajibkan minimal 2.000 kredit seharga US$39.' },
    { k: 'Uji coba', v: '1.000 kredit gratis yang bisa dipakai untuk unggahan massal, tanpa kartu kredit.' },
  ],
  pricingFirst: true,
  pricingHeading: 'Perbandingan harga ZeroBounce dan Giggal.ai',
  pricingProse: 'ZeroBounce punya pembelian minimum 2.000 kredit dan langganan US$99 per bulan. Giggal.ai tidak punya keduanya. Anda membeli kredit, menyimpannya selama yang Anda mau, dan mulai dengan 1.000 kredit gratis.',
  pricingProseAfterLadder: true,
  catchAllHeading: 'Cara Giggal.ai mengecek alamat catch-all',
  catchAllProse: 'Pada domain catch-all, server menerima alamat apa pun. ZeroBounce memberi alamat tersebut skor 1 sampai 10 lewat AI Scoring, bukan memastikannya. Kami mengirim alamat ini ke pemeriksaan terpisah dan memberikan salah satu dari empat hasil.',
  catchAllProse2: 'Dalam uji LeadMagic, ZeroBounce menyelesaikan 12% alamat catch-all.',
  benchmark: true,
  featureNote: 'Akurasi 99,6% milik ZeroBounce adalah klaim vendor, bukan angka hasil pengukuran.',
  testSteps: [
    'Ekspor daftar yang biasanya Anda kirim ke ZeroBounce.',
    'Unggah daftar itu di sini dan cek dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Bandingkan baris yang berlabel Catch-All. Hitung berapa banyak yang kembali dengan hasil yang jelas.',
  ],
  faqs: [
    { q: 'Bagaimana perbandingan harganya?', a: 'US$9,90 dibandingkan US$129 untuk 10.000 kredit, US$76 dibandingkan US$649 untuk 100.000, dan US$680 dibandingkan US$3.199 untuk satu juta. Tanggal kedua harga tercantum di tabel.' },
    { q: 'Apakah ZeroBounce punya pembelian minimum?', a: 'Ya, 2.000 kredit seharga US$39. Giggal.ai tidak punya pembelian minimum dan Anda mulai dengan 1.000 kredit gratis, tanpa kartu kredit. Kredit di kedua alat tidak kedaluwarsa.' },
    { q: 'Apa yang dilakukan Giggal.ai pada alamat catch-all yang hanya diberi skor oleh ZeroBounce?', a: 'Giggal.ai memberi tahu apakah kotak masuknya nyata, dapat dikirim atau tidak dapat dikirim, bukan sekadar label Catch-All. Setiap pemeriksaan di Giggal.ai memakai tepat 1 kredit.' },
    { q: 'Seberapa akurat Giggal.ai untuk alamat catch-all?', a: 'Giggal.ai memverifikasi dengan akurasi 98,5%. Giggal.ai memberi hasil yang jelas, dapat dikirim atau tidak dapat dikirim, untuk alamat catch-all dan alamat di balik SEG yang oleh kebanyakan alat hanya ditandai tanpa dipastikan.' },
    { q: 'Bisakah saya mencoba Giggal.ai sebelum membayar?', a: 'Bisa. Ada 1.000 kredit gratis, tanpa kartu kredit, yang bisa dipakai untuk unggahan massal. Cek ulang daftar yang sudah Anda bersihkan dengan ZeroBounce dan bandingkan baris yang berlabel Catch-All.' },
  ],
  ctaHeadline: 'Lihat alamat yang ditandai Catch-All oleh ZeroBounce dan dipastikan oleh Giggal',
  breadcrumb: 'Alternatif ZeroBounce',
}

const neverbounce: AltL10nConfig = {
  locale: 'id',
  slug: 'neverbounce',
  path: '/id/alternatif-neverbounce',
  cluster: 'altNeverbounce',
  metaTitle: 'Alternatif NeverBounce: harga dan akurasi | Giggal.ai',
  ogTitle: 'Alternatif NeverBounce yang benar-benar mengecek alamat catch-all',
  desc: 'NeverBounce mematok US$50 per 10.000 dan hanya menyelesaikan 8% catch-all dalam satu uji. Giggal.ai seharga US$9,90 dan memastikannya. 1.000 kredit gratis.',
  h1: ['', 'Alternatif NeverBounce', ' yang benar-benar mengecek alamat catch-all'],
  heroP: 'NeverBounce hanya menyelesaikan sedikit alamat catch-all, 8% dalam uji LeadMagic, dan mematok US$50 per 10.000. Giggal.ai memastikan alamat ini sebagai valid atau tidak valid, seharga US$9,90.',
  bluf: [
    { k: 'Harga', v: 'US$50 untuk 10.000 dibandingkan US$9,90 dari kami, dan US$2.500 dibandingkan US$680 untuk satu juta.' },
    { k: 'Catch-all', v: 'Kami memberi hasil valid atau tidak valid. NeverBounce hanya menyelesaikan sedikit (8% terselesaikan, LeadMagic).' },
    { k: 'Kredit', v: 'Tidak pernah kedaluwarsa. Kredit NeverBounce kedaluwarsa 12 bulan setelah pembelian.' },
    { k: 'Uji coba', v: '1.000 kredit gratis yang bisa dipakai untuk unggahan massal, tanpa kartu kredit.' },
  ],
  catchAllHeading: 'Cara Giggal.ai mengecek alamat catch-all',
  catchAllProse: 'NeverBounce menandai alamat catch-all sebagai Accept-All dan hanya menyelesaikan sedikit, 8% dalam uji LeadMagic. Kami mengirim alamat ini ke pemeriksaan terpisah dan memberikan salah satu dari empat hasil.',
  benchmark: true,
  pricingHeading: 'Perbandingan harga NeverBounce dan Giggal.ai',
  pricingProse: 'NeverBounce mematok US$50 untuk 10.000, US$400 untuk 100.000, dan US$2.500 untuk satu juta. Giggal.ai seharga US$9,90, US$76, dan US$680 untuk jumlah yang sama, tanpa pembelian minimum dan tanpa langganan bulanan.',
  featureNote: 'Tanda strip berarti angka yang tidak dipublikasikan, seperti besar paket gratis NeverBounce. Kami tidak mengisinya dengan perkiraan.',
  testSteps: [
    'Ekspor daftar yang sudah Anda bersihkan dengan NeverBounce.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Lihat baris yang ditandai Catch-All oleh NeverBounce. Hitung berapa banyak yang nyata.',
  ],
  faqs: [
    { q: 'Bagaimana perbandingan harganya?', a: 'NeverBounce mematok US$50 per 10.000 dibandingkan US$9,90 di Giggal.ai, dan US$2.500 dibandingkan US$680 untuk satu juta. Keduanya memublikasikan semua tingkat harganya, jadi Anda bisa memeriksa angkanya sendiri.' },
    { q: 'Apa yang dilakukan Giggal.ai pada alamat catch-all yang ditandai NeverBounce?', a: 'Giggal.ai memberi tahu apakah kotak masuknya nyata, dapat dikirim atau tidak dapat dikirim, bukan label Accept-All. Dalam uji LeadMagic, NeverBounce menyelesaikan 8% alamat catch-all. Setiap pemeriksaan di Giggal.ai memakai tepat 1 kredit.' },
    { q: 'Bagaimana masa berlaku kredit Giggal.ai dibandingkan NeverBounce?', a: 'Kredit Giggal.ai tidak pernah kedaluwarsa. Kredit NeverBounce kedaluwarsa 12 bulan setelah pembelian, seperti tertulis di halaman harga NeverBounce sendiri.' },
    { q: 'Apakah Giggal.ai punya API?', a: 'Ya. Giggal.ai punya dokumentasi API publik dan server MCP, sehingga Anda bisa memverifikasi dari alat dan alur kerja Anda sendiri.' },
    { q: 'Bisakah saya mencoba Giggal.ai sebelum beralih?', a: 'Bisa. Ada 1.000 kredit gratis, tanpa kartu kredit, untuk unggahan massal. Cek ulang daftar yang sudah Anda bersihkan dengan NeverBounce dan lihat baris yang berlabel Catch-All.' },
  ],
  ctaHeadline: 'Ubah baris Catch-All dari NeverBounce menjadi hasil yang jelas',
  breadcrumb: 'Alternatif NeverBounce',
}

const snovio: AltL10nConfig = {
  locale: 'id',
  slug: 'snovio',
  path: '/id/alternatif-snovio',
  cluster: 'altSnovio',
  metaTitle: 'Alternatif Snov.io untuk verifikasi email | Giggal.ai',
  ogTitle: 'Alternatif Snov.io yang dibuat khusus untuk verifikasi',
  desc: 'Snov.io memotong verifikasi dari kredit untuk pencarian dan outreach. Giggal.ai mengecek alamat catch-all seharga US$9,90 per 10.000. 1.000 kredit gratis.',
  h1: ['', 'Alternatif Snov.io', ' yang dibuat khusus untuk verifikasi'],
  heroP: 'Snov.io menggabungkan pencarian, verifikasi, dan pengiriman dalam satu platform berbasis kredit. Jika yang Anda butuhkan adalah verifikasi, Giggal.ai adalah alat verifikasi tersendiri yang benar-benar mengecek alamat catch-all, dengan harga publik US$9,90 per 10.000.',
  bluf: [
    { k: 'Fungsi', v: 'Snov.io adalah paket untuk pencarian dan outreach. Kami memverifikasi, termasuk alamat catch-all.' },
    { k: 'Catch-all', v: 'Kami memberi hasil valid atau tidak valid. Snov.io menandai alamatnya lalu berhenti di situ.' },
    { k: 'Penagihan', v: 'Snov.io memotong verifikasi dari kredit langganan Anda. Di sini Anda membayar sesuai pemakaian, mulai US$9,90 per 10.000.' },
    { k: 'Uji coba', v: '1.000 kredit gratis yang bisa dipakai untuk unggahan massal, tanpa kartu kredit.' },
  ],
  catchAllHeading: 'Cara Giggal.ai mengecek alamat catch-all',
  catchAllProse: 'Snov.io memverifikasi sebagai bagian dari proses outreach yang lebih luas, dengan satu kredit per pemeriksaan. Pada domain catch-all, Snov.io menandai alamatnya, bukan memastikan kotak masuknya. Giggal.ai dibuat khusus untuk verifikasi. Giggal.ai mengirim alamat ini ke pemeriksaan terpisah dan memberikan salah satu dari empat hasil. Giggal.ai juga memverifikasi alamat di balik secure email gateway.',
  pricingHeading: 'Perbandingan harga Snov.io dan Giggal.ai',
  pricingProse: 'Snov.io dijual sebagai langganan bulanan dengan kredit bersama, satu kredit per pemeriksaan. Paket terkecil untuk 10.000 pemeriksaan per bulan adalah Pro M seharga US$189 per bulan. Untuk 100.000, paketnya Ultra seharga US$738 per bulan (sekitar 25% lebih murah dengan pembayaran tahunan). Satu juta per bulan masuk paket khusus. Kredit yang tidak terpakai terbawa ke bulan berikutnya selama langganan aktif. Giggal.ai menagih sesuai pemakaian: US$9,90 untuk 10.000, US$76 untuk 100.000, dan US$680 untuk satu juta, tanpa komitmen bulanan.',
  featureNote: 'Snov.io ditagih per bulan. Karena itu angkanya adalah paket terkecil untuk volume tersebut, bukan harga sekali bayar. Satu juta per bulan masuk paket khusus.',
  testSteps: [
    'Ekspor daftar yang sudah Anda cek dengan Snov.io.',
    'Cek daftar itu di sini dengan 1.000 kredit gratis. Tanpa kartu kredit.',
    'Lihat baris yang ditandai catch-all oleh Snov.io. Hitung berapa banyak yang nyata.',
  ],
  faqs: [
    { q: 'Apakah Giggal.ai alternatif yang baik untuk Snov.io dalam hal verifikasi?', a: 'Jika Anda butuh verifikasi, ya. Giggal.ai adalah alat verifikasi tersendiri yang benar-benar mengecek alamat catch-all dan juga memverifikasi di balik secure email gateway, dengan bayar sesuai pemakaian mulai US$9,90 per 10.000. Snov.io juga mencari alamat email dan mengelola outreach. Giggal.ai tidak melakukan itu.' },
    { q: 'Apakah Giggal.ai mencari alamat email atau mengirim kampanye seperti Snov.io?', a: 'Tidak. Giggal.ai hanya alat verifikasi. Jika Anda ingin pencarian, verifikasi, dan pengiriman dalam satu platform, Snov.io lebih cocok. Jika Anda ingin verifikasi murni yang memberi hasil untuk alamat catch-all, Giggal.ai dibuat untuk itu.' },
    { q: 'Bagaimana Giggal.ai menangani alamat catch-all yang hanya ditandai oleh Snov.io?', a: 'Snov.io menandai catch-all tanpa memastikan kotak masuknya. Giggal.ai memberi hasil yang jelas, dapat dikirim atau tidak dapat dikirim, dengan biaya tetap 1 kredit per alamat email.' },
    { q: 'Bagaimana perbandingan harganya?', a: 'Snov.io memotong setiap pemeriksaan dari kredit langganan Anda, mulai US$39 per bulan untuk 1.000 kredit (US$29,25 dengan pembayaran tahunan). Giggal.ai menagih sesuai pemakaian, US$9,90 per 10.000, tanpa komitmen bulanan dan dengan kredit yang tidak pernah kedaluwarsa.' },
    { q: 'Bisakah saya mencoba Giggal.ai sebelum beralih?', a: 'Bisa. Ada 1.000 kredit gratis, tanpa kartu kredit, untuk unggahan massal. Cek daftar yang ditandai catch-all oleh Snov.io dan lihat berapa banyak alamat yang mendapat hasil yang jelas.' },
  ],
  ctaHeadline: 'Verifikasi email, tanpa seluruh platform',
  breadcrumb: 'Alternatif Snov.io',
}

export const ALT_ID = { zerobounce, neverbounce, snovio }
