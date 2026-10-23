import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Indonesian catch-all page. Title and H1 from the keyword plan
// ("Verifikasi Catch-All: cek alamat email catch-all",
// SEO-Plan/i18n-batch2-id-keyword-plan.md section 2). "Apa itu email
// catch-all" is answered in the first H2.

const PATH = '/id/verifikasi-catch-all'
const TITLE = 'Verifikasi Catch-All: cek alamat email catch-all'
const DESC =
  'Verifikasi catch-all: valid atau tidak valid untuk domain catch-all dan accept-all, juga di balik Mimecast dan Proofpoint. Akurasi 98,5%, 1 kredit per alamat.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Verifikasi catch-all',
  h1Accent: 'Verifikasi catch-all',
  h1Tail: 'dengan hasil yang jelas untuk setiap alamat',
  intro:
    'Sebagian besar alat verifikasi berhenti di domain catch-all dan accept-all. Giggal.ai mengecek apakah setiap mailbox benar-benar ada, juga di balik gateway keamanan email seperti Mimecast dan Proofpoint. Akurasinya 98,5%.',
  toolLine: (
    <>
      Ingin mengecek satu alamat saja? Gunakan{' '}
      <Link href="/id/cek-email-valid" className="text-indigo-600 font-bold hover:underline">email checker gratis</Link>.
    </>
  ),
  ctaPrimary: 'Cek alamat catch-all',
  ctaSecondary: { label: 'Lihat harga', href: '/id/harga' },
  ctaNote: 'Anda mulai dengan 1.000 kredit gratis. Tanpa kartu kredit.',
  card: {
    kicker: 'Verifikasi mendalam aktif', title: 'Hasil daftar', file: 'kontak_2026.csv',
    valid: '39.113', invalid: '10.508', risky: '0',
    note: 'Dalam daftar rata-rata, sekitar 30% alamat ada di domain catch-all. Kami mengecek alamat itu satu per satu. Sebagian besar ternyata valid.',
    labels: { valid: 'Valid', invalid: 'Tidak valid', risky: 'Berisiko' },
  },
  whatKicker: 'Latar belakang',
  whatTitle: 'Apa itu email catch-all?',
  whatParas: [
    'Domain catch-all menerima semua email yang masuk, juga untuk alamat yang tidak ada. Server memberi konfirmasi umum untuk setiap alamat. Karena itu, pengecekan biasa tidak bisa melihat apakah ada mailbox asli di balik alamat tersebut.',
    'Dalam daftar bisnis rata-rata, sekitar 30% kontak ada di domain catch-all. Sebagian besar alat mengenali pola ini lalu berhenti. Alat-alat itu menandai semuanya sebagai berisiko atau tidak diketahui. Anda pun memegang daftar kontak yang panjang dan tidak bisa Anda pakai dengan yakin.',
    'Lalu Anda punya dua pilihan, dan keduanya buruk. Anda tetap mengirim dan mengambil risiko bounce, spam trap (alamat jebakan spam), dan reputasi yang turun. Atau Anda menghapus kontak itu dan kehilangan pelanggan yang asli. Verifikasi catch-all menyelesaikan masalah ini: kami mengecek apakah mailbox benar-benar ada, bukan menebak.',
  ],
  sameH3: 'Catch-all dan accept-all adalah hal yang sama',
  sameParas: [
    'Sebagian alat menulis "accept all", yang lain "catch-all" atau "catchall". Semuanya berarti pengaturan yang sama: domain yang server emailnya menjawab 250 OK untuk setiap penerima. Apa pun label yang dipakai alat Anda sebelumnya, solusinya sama. Solusi itu ada di halaman ini.',
  ],
  howKicker: 'Cara kerjanya',
  howTitle: 'Cara Giggal.ai mengecek alamat catch-all',
  howText: 'Setiap alamat catch-all melewati beberapa pengecekan. Bersama-sama, pengecekan ini memberi satu hasil yang jelas. Anda melihat valid atau tidak valid, bukan laporan teknis.',
  signals: [
    { title: 'Pengecekan mailbox yang mendalam', body: 'Kami mengecek apakah setiap mailbox benar-benar ada, bukan hanya apakah domainnya menerima semua email. Pengecekan biasa melihat konfirmasi umum lalu berhenti. Kami terus mengecek sampai ada jawaban yang jelas.' },
    { title: 'Sinyal kepercayaan domain', body: 'Kami memeriksa pengaturan setiap domain: record SPF, DKIM, dan DMARC, sertifikat SSL, dan reputasi hosting. Domain yang diatur dengan baik jauh lebih sering punya mailbox asli.' },
    { title: 'Gateway keamanan email', body: 'Alamat di balik gateway seperti Mimecast, Proofpoint, dan Barracuda kami cek secara langsung. Gateway tidak lagi menyembunyikan apakah ada mailbox asli di balik alamat itu.' },
  ],
  compareKicker: 'Hasil yang jelas',
  compareTitle: 'Dari menebak menjadi hasil yang pasti',
  compareText: 'Perbedaan antara alat verifikasi biasa dan Giggal.ai pada daftar yang sama berisi 48.000 alamat.',
  compare: {
    typicalLabel: 'Alat verifikasi biasa', giggalLabel: 'Giggal.ai', count: '48.028 alamat dicek', catchAllLabel: 'Catch-all',
    typical: ['31.566', '5.982', '10.480'], giggal: ['39.950', '8.078', '0'],
    typicalNote: 'Lebih dari 10.000 kontak catch-all yang tidak bisa Anda kirimi email dengan yakin. Sekitar 80% asli, tetapi Anda tidak tahu yang mana.',
    giggalNote: 'Sekitar 8.400 kontak tambahan yang dapat dikirim dari kelompok catch-all. Setiap alamat punya hasil yang jelas.',
  },
  whoKicker: 'Untuk siapa',
  whoTitle: 'Siapa yang memakai verifikasi catch-all',
  audience: [
    { title: 'Tim outreach', body: 'Anda hanya mengirim email ke kontak yang sudah diverifikasi. Bounce lebih sedikit, balasan lebih banyak, dan domain pengirim tetap sehat.' },
    { title: 'Agensi', body: 'Bersihkan daftar setiap klien dengan alat yang sama. Laporan dan deliverability (tingkat keterkiriman email) tetap bisa diprediksi.' },
    { title: 'Sales operations', body: 'Simpan di CRM hanya kontak yang benar-benar menerima rangkaian email dan pembaruan Anda.' },
    { title: 'Newsletter', body: 'Lindungi angka open rate dan click rate Anda. Hapus alamat yang terlihat asli tetapi tidak pernah menerima email.' },
  ],
  faqTitle: 'Pertanyaan yang sering diajukan',
  faq: [
    { q: 'Apa itu domain catch-all?', a: 'Domain yang menerima semua email, juga untuk alamat yang tidak ada. Server menjawab "ya, alamat ini ada" untuk setiap alamat. Karena itu, pengecekan biasa tidak bisa melihat apakah mailbox tertentu benar-benar asli.' },
    { q: 'Apakah verifikasi catch-all memakai kredit tambahan?', a: 'Tidak. Biayanya 1 kredit per alamat, sama seperti pengecekan biasa.' },
    { q: 'Seberapa akurat verifikasi catch-all?', a: 'Sekitar 98,5% pada daftar email bisnis. Kami tidak menebak dari jawaban server yang dangkal. Kami mengecek apakah mailbox benar-benar ada. Karena itu, hasilnya tetap benar pada saat Anda mengirim.' },
    { q: 'Apakah sisa daftar jadi lebih lambat?', a: 'Tidak. Pengecekan catch-all berjalan bersamaan dengan verifikasi biasa, bukan sesudahnya. Seluruh daftar selesai dalam waktu yang sama.' },
    { q: 'Bisakah saya hanya mengecek alamat catch-all dari daftar yang sudah dibersihkan di tempat lain?', a: 'Bisa. Di dashboard, buka Catch-All Detection. Tempel atau unggah hanya alamat yang ingin Anda cek, lalu mulai verifikasi. Harganya sama: 1 kredit per alamat.' },
    { q: 'Bagaimana jika pengecekan catch-all memberi hasil "tidak diketahui"?', a: 'Ini jarang terjadi. Jika kami tidak mendapat hasil, kredit Anda dikembalikan secara otomatis. Anda hanya membayar pengecekan yang memberi hasil.' },
  ],
  ctaHeadline: 'Cek satu daftar dan bandingkan hasilnya',
}

export default function VerifikasiCatchAllPage() {
  return <CatchAllPageL10n locale="id" content={content} />
}
