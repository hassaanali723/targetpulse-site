// Indonesian strings for the shared chrome and the two interactive components.
// One page set for Indonesia (SEO-Plan/i18n-batch2-id plan).
// Register "Anda". Spelling "email" (no hyphen), "alamat email"; the searched
// forms "cek email valid" and "email checker" appear where the keyword plan
// assigns them. Technical terms stay: catch-all, SMTP, MX, DNS, bounce.
// Numbers 1.000 and 10.000, prices US$9,90 (symbol first, currency stays USD).

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'Cek email valid', href: '/id/cek-email-valid' },
  links: [
    { name: 'Catch-all', href: '/id/verifikasi-catch-all' },
    { name: 'Integrasi', href: '/id/integrasi' },
    { name: 'Harga', href: '/id/harga' },
    { name: 'Kontak', href: '/id/kontak' },
  ],
  login: 'Masuk',
  signup: 'Daftar gratis',
  menu: 'Buka menu',
  homeAria: 'Giggal.ai, beranda',
}

export const footer = {
  blurb:
    'Verifikasi email yang memeriksa apakah setiap kotak masuk benar-benar ada, sehingga kampanye Anda sampai ke kotak masuk orang sungguhan. Termasuk pada domain catch-all dan accept-all yang dilewati alat lain.',
  solutions: {
    heading: 'Solusi',
    links: [
      { name: 'Verifikasi catch-all', href: '/id/verifikasi-catch-all' },
      { name: 'Server MCP', href: '/id/mcp' },
    ],
  },
  resources: {
    heading: 'Sumber daya',
    links: [
      { name: 'Blog', href: '/id/blog' },
      { name: 'Glosarium', href: '/id/glosarium' },
      { name: 'Perbandingan alat verifikasi (dalam bahasa Inggris)', href: '/alternatives' },
      { name: 'Alternatif ZeroBounce', href: '/id/alternatif-zerobounce' },
      { name: 'Alternatif NeverBounce', href: '/id/alternatif-neverbounce' },
      { name: 'Alternatif Snov.io', href: '/id/alternatif-snovio' },
      { name: 'Dokumentasi API', href: '/id/dokumentasi-api' },
    ],
  },
  freeTools: {
    heading: 'Alat gratis',
    links: [
      { name: 'Cek email valid', href: '/id/cek-email-valid' },
      { name: 'Cek email sementara', href: '/id/cek-email-sementara' },
      { name: 'Layanan email sementara', href: '/id/email-sementara' },
      { name: 'Penyedia email gratis (dalam bahasa Inggris)', href: '/free-email-providers' },
      { name: 'Ekstraktor email (dalam bahasa Inggris)', href: '/email-extractor' },
      { name: 'Generator DKIM (dalam bahasa Inggris)', href: '/dkim-generator' },
      { name: 'Generator DMARC (dalam bahasa Inggris)', href: '/dmarc-generator' },
      { name: 'Cek MX record (dalam bahasa Inggris)', href: '/mx-lookup' },
      { name: 'SPF checker (dalam bahasa Inggris)', href: '/spf-checker' },
      { name: 'Alamat Gmail dengan + (dalam bahasa Inggris)', href: '/gmail-plus-addressing' },
      { name: 'Kalkulator bounce rate (dalam bahasa Inggris)', href: '/bounce-rate-calculator' },
      { name: 'Kombinasi alamat email (dalam bahasa Inggris)', href: '/email-permutator' },
      { name: 'Generator BIMI (dalam bahasa Inggris)', href: '/bimi-generator' },
      { name: 'Cek kata spam (dalam bahasa Inggris)', href: '/spam-word-checker' },
      { name: 'Pembuat tanda tangan email (dalam bahasa Inggris)', href: '/email-signature-generator' },
    ],
  },
  product: {
    heading: 'Produk',
    // Same order as the English footer: the paid product only.
    links: [
      { name: 'Verifikasi email', href: '/id' },
      { name: 'Verifikasi email massal', href: '/id/verifikasi-email-massal' },
      { name: 'Membersihkan daftar email (dalam bahasa Inggris)', href: '/email-list-cleaning' },
      { name: 'Integrasi', href: '/id/integrasi' },
      { name: 'API verifikasi email (dalam bahasa Inggris)', href: '/email-verification-api' },
      { name: 'Harga', href: '/id/harga' },
    ],
  },
  company: {
    heading: 'Perusahaan',
    links: [
      { name: 'Kontak', href: '/id/kontak' },
      { name: 'Program afiliasi (dalam bahasa Inggris)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'Syarat dan Ketentuan', href: '/id/syarat-dan-ketentuan' },
    { name: 'Kebijakan Privasi', href: '/id/kebijakan-privasi' },
    { name: 'Pengembalian Dana', href: '/id/pengembalian-dana' },
  ],
  legalHeading: 'Legal',
  rights: 'Hak cipta dilindungi undang-undang.',
  operatedBy: 'Giggal.ai dikelola oleh TargetPulse Ltd, London, Inggris Raya.',
  abuseReports: 'Laporkan penyalahgunaan:',
  language: 'Bahasa',
}

export const announcement = {
  text: 'Dapatkan kotak masuk Google dan Outlook khusus dari',
  brand: 'PureMail',
  tail: ', US$2,90 per kotak masuk per bulan.',
  dismiss: 'Tutup pengumuman',
}

export const cta = {
  headline: 'Cek seluruh daftar dan bandingkan hasilnya',
  offer: '1.000 kredit gratis, tanpa kartu kredit.',
  button: 'Mulai gratis',
  trust: ['Coba gratis', 'Kredit tidak kedaluwarsa', 'Kredit kembali untuk hasil tidak diketahui'],
}

export const consoleStrings = {
  header: 'Uji secara real-time',
  live: 'Tes langsung',
  actionLabel: 'Aksi',
  actionTitle: 'Pemeriksaan kotak masuk',
  placeholder: 'Masukkan alamat email yang ingin dicek...',
  ariaInput: 'Alamat email yang ingin dicek',
  button: 'Cek',
  buttonRunning: 'Sedang mengecek',
  diagnostics: 'Status pemeriksaan',
  checks: {
    basic: 'Pemeriksaan dasar',
    dns: 'Mencari server email',
    catchall: 'Pemeriksaan catch-all',
    mailbox: 'Pemeriksaan kotak masuk',
  },
  idleTitle: 'Siap untuk dicek',
  idleText: 'Masukkan alamat email bisnis atau pribadi untuk melihat apakah kotak masuknya ada.',
  spawning: 'MEMULAI PEMERIKSAAN...',
  initLog: '[INIT] Membuka koneksi aman untuk pemeriksaan...',
  limitTitle: 'Batas pemeriksaan gratis tercapai',
  limitText: 'Anda sudah memakai 5 pemeriksaan gratis untuk jam ini. Daftar untuk mendapatkan 1.000 kredit gratis, tanpa kartu kredit, lalu cek seluruh daftar Anda.',
  limitButton: 'Dapatkan 1.000 kredit gratis',
  errorTitle: 'Pemeriksaan gagal',
  errorFailed: 'Pemeriksaan tidak berhasil. Coba lagi dalam beberapa detik.',
  errorUnreachable: 'Layanan verifikasi tidak merespons.',
  invalidSyntax: 'Ini bukan alamat email yang valid.',
  isCatchAll: 'adalah domain catch-all',
  notCatchAll: 'bukan domain catch-all',
  catchAllText: 'Domain ini menerima email untuk alamat apa pun. Jadi pemeriksaan dasar tidak bisa memastikan apakah kotak masuk ini ada.',
  notCatchAllText: 'Di sini pemeriksaan standar bisa diandalkan.',
  resultLabel: 'Hasil',
  verdictTitle: {
    deliverable: 'Valid',
    undeliverable: 'Tidak valid',
    risky: 'Berisiko',
    unknown: 'Tidak diketahui',
    catchall: 'Catch-all',
    error: 'Error',
  },
  verdictLine: {
    deliverable: 'Kotak masuk ini ada.',
    undeliverable: 'Kotak masuk ini tidak ada.',
    risky: 'Server menerima email, tetapi kami tidak bisa memastikan kotak masuk ini sepenuhnya.',
    unknown: 'Kami tidak bisa memastikan kotak masuk ini.',
    catchall: 'Kami tidak bisa memastikan kotak masuk ini.',
    error: '',
  },
}

export const pricing = {
  payg: 'Bayar sesuai pemakaian (pembelian sekali)',
  subscription: 'Langganan bulanan',
  save: 'Hemat 10%',
  colVolume: 'Kredit',
  colRate: 'Harga per kredit',
  colSave: 'Penghematan',
  colTotal: 'Harga total',
  credits: 'kredit',
  popular: 'Paling banyak dipilih',
  perCredit: '/ kredit',
  oneTime: 'sekali bayar',
  perMonth: '/bulan',
  saveBadge: 'Hemat {pct}%',
  buy: 'Beli',
  subscribe: 'Berlangganan',
  noDiscount: 'Tanpa diskon',
  mobVolume: 'Kredit',
  mobRate: 'Harga',
  mobSave: 'Hemat',
  mobPrice: 'Total',
  numberLocale: 'id-ID',
  currencySuffix: false,
  currencyPrefix: 'US$',
  formula: '1 verifikasi email',
  formulaNote: '(termasuk verifikasi catch-all/accept-all)',
  formulaCredit: '1 kredit',
  customTitle: 'Butuh volume khusus?',
  customText: 'Untuk volume besar, kami menyediakan paket khusus dan IP pool tersendiri.',
  customButton: 'Hubungi kami',
}

export const notFound = {
  kicker: '404',
  title: 'Halaman ini tidak ada',
  text: 'Mungkin alamatnya salah ketik atau halamannya sudah dipindahkan. Email checker gratis dan halaman harga hanya satu klik dari sini.',
  primary: 'Cek email valid',
  secondary: 'Kembali ke beranda',
}

export const legal = {
  updated: 'Terakhir diperbarui',
  notice: 'Ini adalah terjemahan untuk memudahkan Anda. Jika ada perbedaan, yang berlaku adalah',
  noticeLink: 'versi bahasa Inggris',
  noticeTail: ', satu-satunya versi yang mengikat secara hukum.',
  breadcrumbHome: 'Beranda',
}

/** Indonesian number formatting: 10.000 and US$9,90 (currency stays USD). */
export function idNumber(n: number, decimals = 0): string {
  return n.toLocaleString('id-ID', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function idUsd(n: number, decimals = 2): string {
  return `US$${idNumber(n, decimals)}`
}

/** 2026-10-23 -> "23 Oktober 2026" */
export function formatDateId(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}
