// id words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Tidak ada kredit gratis',
    creditsExpire: 'Kredit bulanan yang tidak terpakai terbawa ke bulan berikutnya, hingga 2 kali jatah bulanan',
    catchAllCreditCost: '0,25 kredit per hasil yang jelas; hasil tidak diketahui gratis',
    claimedAccuracy: 'Mengklaim 99,5% untuk validasi',
    pricingBasisNote: 'LeadMagic dijual sebagai langganan bulanan dengan satu kumpulan kredit: Essential US$99 (5.000 kredit), Growth US$249 (20.000), Professional US$499 (50.000), Ultimate US$849 (100.000). Satu validasi dengan hasil yang jelas memakai 0,25 kredit, dan hasil tidak diketahui gratis. Angka di atas adalah paket bulanan terkecil yang mencakup jumlah validasi itu. Pembayaran tahunan memberi dua bulan gratis. Angka Giggal.ai adalah harga sekali bayar sesuai pemakaian.',
    betterFitFor: [
      'Banyak data pengayaan di luar verifikasi: nomor ponsel, data perusahaan, perpindahan kerja, dan data iklan',
      'Memublikasikan data uji catch-all miliknya sendiri, hal yang tidak dilakukan kebanyakan vendor',
      'Tim yang ingin mencari, memperkaya, dan memverifikasi data kontak dalam satu langganan',
      'API untuk developer dengan harga kredit per endpoint',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: 'Uji coba 7 hari dengan 100 kredit; kartu kredit dicek, tetapi tidak ditagih',
    creditsExpire: 'Kredit terbawa tanpa batas selama langganan aktif, dan kedaluwarsa di akhir periode tagihan jika Anda berhenti berlangganan',
    catchAllCreditCost: '0,2 kredit per pemeriksaan, sama seperti verifikasi lain',
    claimedAccuracy: 'Mengklaim akurasi 98,9% pada cakupan 86,4%',
    pricingBasisNote: 'Anymail Finder dijual sebagai langganan bulanan, dengan tingkat kredit dari 400 kredit seharga US$29 per bulan hingga 100.000 kredit seharga US$799. Memverifikasi email yang Anda temukan di tempat lain memakai 0,2 kredit per pemeriksaan. Angka di atas adalah paket bulanan terkecil yang mencakup jumlah pemeriksaan itu. Pembayaran tahunan menghemat 33%. Satu juta pemeriksaan per bulan berada di atas tingkat bulanan tertinggi. Angka Giggal.ai adalah harga sekali bayar sesuai pemakaian.',
    betterFitFor: [
      'Mencari alamat email dari nama dan domain, hal yang tidak dilakukan Giggal.ai',
      'Jaminan pengiriman yang dinyatakan sebesar 97% atau lebih',
      'Kredit yang terbawa tanpa batas selama Anda tetap berlangganan',
      'Merek yang sudah lama berdiri dengan banyak konten yang dipublikasikan',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '10 kredit saat mendaftar, tanpa kartu kredit',
    creditsExpire: 'Kredit yang tidak terpakai terbawa ke bulan berikutnya, hingga dua kali jatah bulanan',
    catchAllCreditCost: '1 kredit, sama seperti verifikasi lain',
    claimedAccuracy: 'Menjamin bounce rate di bawah 5%, dengan pengembalian kredit jika lebih tinggi',
    pricingBasisNote: 'Findymail menjual paket berbasis pemakaian seharga US$99 sampai US$999 per bulan yang tidak menyebutkan jumlah kredit. Ada juga satu paket berbasis kredit, yaitu Starter seharga US$99 per bulan dengan 5.000 kredit finder dan 5.000 kredit verifier. Di atas itu, harga diberikan sebagai Enterprise. Karena itu tidak ada angka yang dipublikasikan untuk 10.000, 100.000, atau satu juta verifikasi per bulan. Angka Giggal.ai adalah harga sekali bayar sesuai pemakaian.',
    betterFitFor: [
      'Mencari alamat email sejak awal, hal yang sama sekali tidak dilakukan Giggal.ai',
      'Jaminan bounce rate dengan pengembalian kredit',
      'Ekstensi Chrome yang mencari dan memverifikasi email di LinkedIn dan Sales Navigator',
      'SOC 2 Type 2 dan hosting di Uni Eropa',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Mulai gratis, jumlahnya tidak dipublikasikan',
    creditsExpire: 'Tidak dipublikasikan',
    catchAllCreditCost: 'Kredit catch-all terpisah: 5.000 per bulan pada paket US$99',
    pricingBasisNote: 'Listmint dijual sebagai langganan bulanan dengan dua kumpulan kredit. Starter seharga US$99 per bulan untuk 20.000 kredit standar dan 5.000 kredit catch-all. Agency seharga US$187 per bulan untuk 50.000 kredit standar dan 10.000 kredit catch-all. Volume yang lebih besar masuk Enterprise, dengan harga atas permintaan. Angka Giggal.ai adalah harga sekali bayar sesuai pemakaian.',
    betterFitFor: [
      'Pemeriksaan catch-all yang menurut Listmint dilakukan secara manual',
      'Verifikasi catch-all secara real-time',
      'Jatah bulanan kredit standar yang besar pada paket awal',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: 'Uji coba 14 hari untuk hingga 1.000 alamat',
    creditsExpire: 'Jatah paket berlaku per bulan; uji coba berakhir setelah 14 hari',
    catchAllCreditCost: '1 kontak dari jatah paket',
    claimedAccuracy: 'Mengklaim 99%',
    pricingBasisNote: 'Allegrow dijual sebagai langganan bulanan. Starter seharga US$99 per bulan untuk 5.000 kontak, dengan kredit tambahan US$8 per 1.000. Jadi 10.000 per bulan menjadi US$139. Ini hitungan kami dari tarif yang dipublikasikan, bukan paket yang dicantumkan Allegrow. Baris 100.000 dan 1.000.000 adalah Scale Plus Unlimited seharga US$1.340 per bulan dengan pembayaran tahunan, yaitu verifikasi tanpa batas. Angka Giggal.ai adalah harga sekali bayar sesuai pemakaian.',
    betterFitFor: [
      'Paket verifikasi tanpa batas, yang tidak ada padanannya di Giggal.ai',
      'Skor reputasi pengirim dan pemantauan inbox placement di samping verifikasi',
      'Integrasi bawaan untuk HubSpot, Outreach, dan Salesloft, dengan SSO dan laporan SOC 2',
      'Studi yang dipublikasikan tentang hasil positif palsu pada alamat fiktif',
    ],
    estimateNote: 'Hitungan kami dari tarif Allegrow yang dipublikasikan, bukan paket yang dicantumkan Allegrow.',
    notes: { unlimited: 'tanpa batas' },
  },
  no2bounce: {
    freeTier: '100 kredit tanpa kartu kredit, dan kreditnya tidak pernah kedaluwarsa',
    creditsExpire: 'Kredit tidak pernah kedaluwarsa, tanpa batas pemakaian bulanan',
    catchAllCreditCost: '1 kredit per email, sama seperti pemeriksaan standar',
    claimedAccuracy: 'Mengklaim 99,6%',
    betterFitFor: [
      'Banyak tingkat harga, dari 10.000 kredit hingga 50 juta',
      'Kredit yang tidak pernah kedaluwarsa, sama seperti di Giggal.ai',
      'Paket bulanan dan tahunan yang 15% dan 20% lebih murah daripada bayar sesuai pemakaian',
      'Email finder dan pencarian domain yang memakai kredit yang sama',
    ],
  },
  quickemailverification: {
    freeTier: '100 kredit per hari, gratis',
    creditsExpire: 'Kredit permanen bayar sesuai pemakaian tidak pernah kedaluwarsa',
    catchAllCreditCost: 'Diberi status catch-all, tidak dipastikan',
    claimedAccuracy: 'Mengklaim 99%',
    betterFitFor: [
      '100 kredit gratis setiap hari, ditambah jatah gratis bulanan',
      'Kredit permanen bayar sesuai pemakaian yang tidak pernah kedaluwarsa',
      'Harga awal yang rendah, mulai US$4 untuk 500 kredit',
      'API real-time yang sudah mapan',
    ],
  },
  myemailverifier: {
    freeTier: '100 kredit per hari, gratis',
    creditsExpire: 'Kredit tidak pernah kedaluwarsa',
    catchAllCreditCost: 'Diberi status catch-all, tidak dipastikan',
    betterFitFor: [
      'Tarif yang diiklankan sangat rendah, US$0,0025 per verifikasi',
      '100 kredit gratis setiap hari, yang diisi ulang dan tidak berakhir setelah masa uji coba',
      'Kredit yang tidak pernah kedaluwarsa, dengan promo kredit bonus untuk volume besar',
      'Riwayat ulasan publik yang baik di G2, Capterra, dan Trustpilot',
    ],
  },
  scrubby: {
    freeTier: '200 kredit',
    creditsExpire: 'Kredit bayar sesuai pemakaian tidak pernah kedaluwarsa; kredit paket terbawa ke bulan berikutnya',
    catchAllCreditCost: '1 kredit untuk Quick Verification; Deep Verification memakai 3 kredit dan butuh hingga 72 jam',
    claimedAccuracy: 'Tidak dipublikasikan di halaman harganya',
    betterFitFor: [
      'Opsi Deep Verification yang mengirim email sungguhan ke alamat yang sulit diverifikasi',
      'Jatah gratis 200 kredit tanpa kartu kredit',
      'Pilihan bayar sesuai pemakaian dan paket bulanan, dengan kredit paket yang terbawa ke bulan berikutnya',
      'Satu fungsi yang terfokus, bukan rangkaian alat yang luas',
    ],
    notes: { 'Quote only': 'Hanya atas permintaan' },
  },
  mailfloss: {
    freeTier: '500 verifikasi per bulan, ditambah uji coba 7 hari untuk langganan',
    creditsExpire: 'Kredit prabayar tidak pernah kedaluwarsa; kredit langganan diatur ulang setiap bulan',
    catchAllCreditCost: 'Ditandai, tidak diselesaikan',
    betterFitFor: [
      'Pembersihan otomatis setiap hari yang terhubung langsung ke platform email Anda',
      '41 integrasi bawaan, termasuk Mailchimp, Klaviyo, dan HubSpot',
      'Langganan yang berjalan sendiri setelah diatur, bukan unggahan manual',
      'Pilihan langganan dan kredit prabayar',
    ],
  },
  bounceless: {
    freeTier: '1.000 kredit per bulan dengan email kerja, tanpa kartu kredit',
    creditsExpire: 'Kredit dari paket sekali beli atau langganan tidak pernah kedaluwarsa',
    catchAllCreditCost: 'Bukti catch-all sudah termasuk dalam pemeriksaan 1 kredit',
    betterFitFor: [
      'Jatah gratis 1.000 kredit setiap bulan dengan email kerja',
      'Paket sekali beli dan langganan bulanan, dengan kredit yang tidak pernah kedaluwarsa',
      'Alat tambahan dalam satu akun: kesehatan pengirim, inbox placement, dan pemeriksaan formulir pendaftaran',
      'Harga rendah untuk volume sangat besar, US$579 untuk satu juta',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: fakta utama`,
  factRows: { price10k: '10.000 pemeriksaan', free: 'Kredit gratis', expiry: 'Masa berlaku kredit', catchAll: 'Catch-all' },
  perMonth: ' per bulan',
  notPublished: 'Tidak dipublikasikan',
}
