import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Indonesian home. The title follows the keyword plan ("Verifikasi Email dan
// Email Checker", SEO-Plan/i18n-batch2-id-keyword-plan.md section 2).
// "verifikasi email" is mixed intent in Indonesia (account verification), so
// it is used in copy only, and "verifikasi alamat email" goes in an H2. The
// main search demand sits on /id/cek-email-valid. The hero sends the visitor
// to the free checker first and to sign-up second. Only the alternatives
// registered for id are listed.

const DESC =
  'Verifikasi alamat email yang memastikan mailbox ada, juga di domain catch-all. Bounce rate di bawah 3%, verifikasi email massal, API, dan 1.000 kredit gratis.'

const TITLE = 'Verifikasi Email dan Email Checker, juga massal'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/id', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/id',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Verifikasi email',
  h1Accent: 'untuk mengurangi bounce',
  heroSub: (
    <>
      Verifikasi email untuk satu alamat atau seluruh daftar. Anda bisa melihat alamat mana yang benar-benar ada, juga di{' '}
      <Link href="/id/verifikasi-catch-all" className={heroLink}>domain catch-all</Link>.
    </>
  ),
  rating: { on: 'di', reviews: (n) => `(${n} ulasan)` },
  email: { label: 'Alamat email yang ingin dicek', placeholder: 'nama@perusahaan.co.id', button: 'Cek gratis' },
  listQuestion: 'Ingin membersihkan seluruh daftar?',
  listCta: 'Dapatkan 1.000 verifikasi email gratis',
  noCard: 'Tanpa kartu kredit.',
  stats: [
    { n: '500 jt', suf: '+', l: 'Email sudah dicek' },
    { n: '98,5', suf: '%', l: 'Akurasi pada daftar B2B' },
    { pre: '< ', n: '3', suf: '%', l: 'Bounce rate setelah daftar dibersihkan' },
    { n: '1.000', l: 'Kredit gratis, tanpa kartu kredit' },
  ],
  bulk: {
    id: 'massal',
    title: 'Verifikasi alamat email untuk seluruh daftar Anda',
    sub: 'Unggah daftar Anda satu kali. Kami mengecek setiap alamat di dalamnya.',
    points: [
      'Valid atau tidak valid untuk setiap alamat',
      'Hasil yang jelas, juga untuk alamat catch-all',
      'CSV atau Excel, hingga 50.000 alamat per file',
      'Unduh daftar yang sudah bersih setelah selesai',
    ],
  },
  catchAll: {
    title: 'Mengapa alamat catch-all perlu perhatian khusus',
    intro: (
      <>
        Sebagian server email bisnis menerima semua alamat, baik yang asli maupun yang dibuat-buat. Server seperti ini disebut{' '}
        <Link href="/id/verifikasi-catch-all" className={link}>domain catch-all</Link>. Sebagian besar alat verifikasi
        tidak bisa membedakannya. Alat-alat itu menandai alamat ini sebagai &quot;berisiko&quot; dan menyerahkan keputusannya kepada Anda.
      </>
    ),
    others: 'Sebagian besar alat verifikasi',
    othersDetail: 'Catch-all, tanpa hasil yang jelas',
    ourDetail: 'Catch-all, mailbox ditemukan',
    risky: 'Berisiko',
    deliverable: 'Dapat dikirim',
    othersText: 'Sekarang Anda harus memilih: tetap mengirim dan mengambil risiko bounce, atau menghapus kontak yang mungkin asli.',
    ourText: 'Anda tahu alamat itu asli. Anda bisa mengirim email ke alamat itu tanpa ragu.',
  },
  features: {
    title: 'Email checker dan verifikasi email: massal, API, dan integrasi dengan satu saldo',
    intro: 'Unggah daftar, panggil API, atau hubungkan CRM Anda. Setiap cara menjalankan pengecekan alamat email yang sama.',
    items: [
      { title: 'Bersihkan daftar secara massal', body: 'Unggah file CSV atau Excel dan dapatkan hasilnya dalam beberapa menit.', points: ['Hingga 50.000 alamat per file', 'Unduh daftar yang sudah bersih sebagai CSV'], link: 'Bersihkan daftar secara gratis' },
      { title: 'Verifikasi catch-all', body: 'Hasil yang jelas untuk domain catch-all, bukan sekadar "berisiko".', points: ['Satu kredit, sama seperti pengecekan lain', 'Juga untuk alamat di balik gateway seperti Mimecast dan Proofpoint'], link: 'Cara kerja verifikasi catch-all' },
      { title: 'API untuk developer', body: 'Cek alamat email di formulir pendaftaran dan aplikasi Anda.', points: ['Satu alamat atau seluruh daftar per panggilan', 'API key (kunci API) ada di dashboard Anda'], link: 'Dokumentasi API' },
      { title: 'Integrasi dengan CRM dan aplikasi', body: 'Kirim kontak yang sudah bersih ke HubSpot, Mailchimp, dan lainnya.', points: ['Bekerja dengan alat yang sudah Anda pakai', 'Zapier dan n8n untuk semua alat lainnya'], link: 'Lihat semua integrasi' },
      { title: 'Bayar sesuai pemakaian', body: 'Semua harga terbuka untuk umum. Kredit tidak kedaluwarsa.', points: ['Tanpa kewajiban bulanan', 'Beli kredit lagi hanya saat Anda membutuhkannya'], link: 'Lihat semua harga' },
      { title: 'Dukungan prioritas', body: 'Ada masalah? Engineer kami langsung membantu Anda.', points: ['Orang sungguhan, bukan bot', 'Lewat email atau formulir kontak'], link: 'Hubungi tim dukungan' },
    ],
    preview: {
      done: 'Selesai',
      deliverable: 'Dapat dikirim',
      undeliverable: 'Tidak dapat dikirim',
      otherTools: 'Alat lain',
      risky: 'Berisiko',
      credit: '1 kredit',
      email: '1 email',
      creditNote: 'Termasuk verifikasi catch-all',
      reply: '24 jam',
      replyNote: 'Waktu balasan kami yang biasa.',
    },
  },
  pricing: {
    id: 'harga',
    claimTop: 'Harga rendah.',
    claimBottom: 'Nilai yang sepadan.',
    fallbackTitle: 'Harga sederhana dalam dolar AS',
    priceLine: (p) => `${p} untuk 10.000 email, termasuk verifikasi catch-all.`,
    claim: { before: '', link: 'Bandingkan dengan alat verifikasi lain', after: '.' },
    text: 'Anda hanya membayar yang Anda pakai. Kredit tidak kedaluwarsa.',
  },
  switcher: {
    id: 'alternatif',
    title: 'Ingin pindah dari alat verifikasi lain?',
    intro: 'Bandingkan Giggal.ai dengan alat verifikasi email lain dari sisi catch-all, harga, dan akurasi.',
    items: [
      { name: 'ZeroBounce', href: '/id/alternatif-zerobounce', blurb: 'Dapatkan hasil untuk alamat catch-all yang ditandai ZeroBounce sebagai berisiko.' },
      { name: 'NeverBounce', href: '/id/alternatif-neverbounce', blurb: 'Bayar sesuai pemakaian, dengan kredit yang tidak pernah kedaluwarsa.' },
      { name: 'Snov.io', href: '/id/alternatif-snovio', blurb: 'Alat verifikasi tersendiri, bukan modul di dalam platform outreach.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/id/perbandingan/zerobounce-vs-neverbounce', blurb: 'Perbandingan kedua alat dari sisi catch-all, harga, dan kredit.' },
    ],
    all: 'Bandingkan 28 alat verifikasi (dalam bahasa Inggris)',
  },
  integrations: {
    title: 'Hubungkan alat pemasaran Anda',
    sub: 'Giggal.ai bekerja dengan platform CRM dan email marketing utama, dan menyinkronkan kontak yang sudah bersih secara otomatis.',
    more: 'Lebih dari 80 lainnya',
    alt: (n) => `Integrasi ${n} untuk verifikasi email dengan Giggal.ai`,
  },
  reviewBadges: REVIEW_BADGES.id,
  reviewWall: REVIEW_WALL.id,
  mcp: MCP.id,
  faq: {
    title: 'Pertanyaan yang sering diajukan',
    sub: 'Jawaban singkat tentang catch-all, akurasi, harga, dan cara memulai.',
    more: 'Punya pertanyaan lain?',
    moreLink: 'Kirim pesan kepada kami',
    items: [
      {
        q: 'Apa bedanya Giggal.ai dengan alat verifikasi lain?',
        a: 'Giggal.ai memberi hasil yang jelas, valid atau tidak valid, untuk alamat catch-all dan alamat di balik gateway keamanan email (Mimecast, Proofpoint, Barracuda). Alat lain berhenti di sana dengan label "berisiko". Dalam daftar B2B, alamat seperti ini mencakup sekitar sepertiga dari semua alamat.',
      },
      {
        q: 'Seberapa akurat verifikasinya?',
        a: 'Sekitar 98,5% pada daftar email bisnis. Bounce rate biasanya di bawah 3% setelah daftar dibersihkan. Untuk hasil "tidak diketahui", kredit Anda dikembalikan.',
      },
      {
        q: 'Bagaimana cara kerja kredit?',
        a: 'Satu pengecekan memakai satu kredit, untuk semua jenis alamat. Ini juga berlaku untuk alamat catch-all dan alamat di balik gateway. Kredit tidak kedaluwarsa. 1.000 kredit pertama gratis, tanpa kartu kredit.',
      },
      {
        q: 'Bisakah saya mengunggah file?',
        a: 'Bisa. CSV atau Excel, hingga 50.000 alamat per file. Untuk daftar besar pun, hasilnya keluar dalam beberapa menit. Daftar yang sudah bersih bisa Anda unduh sebagai CSV.',
      },
      {
        q: 'Apakah ada API?',
        a: 'Ada, yaitu REST API untuk pengecekan satu alamat dan verifikasi email massal. Ada juga server MCP, jadi Anda bisa mengecek alamat dari Claude, ChatGPT, dan Cursor.',
      },
      {
        q: 'Bisakah saya mengecek satu alamat tanpa akun?',
        a: 'Bisa, dengan email checker gratis. Anda tidak perlu akun atau kartu kredit, dan penerima tidak menerima pesan apa pun.',
      },
    ],
  },
  ctaHeadline: 'Mulai dengan 1.000 verifikasi email gratis',
}

export default function HomeId() {
  return <HomeL10n locale="id" content={content} />
}
