import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Translated clause by clause from the current English /privacy-policy
// (Last Updated: October 1, 2026). The English version is binding; the
// notice at the top of the page says so and links to it.

export const metadata: Metadata = {
  title: 'Kebijakan Privasi Layanan Verifikasi Email',
  description: 'Cara Giggal.ai memproses data pribadi dan alamat yang diverifikasi. Ini terjemahan untuk kemudahan Anda. Jika ada perbedaan, versi bahasa Inggris yang berlaku.',
  alternates: { canonical: '/id/kebijakan-privasi', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'id_ID', title: 'Kebijakan Privasi', url: 'https://giggal.ai/id/kebijakan-privasi', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Pendahuluan', paragraphs: [
    'Layanan ini dioperasikan oleh TargetPulse Ltd ("kami"), perusahaan yang terdaftar di Inggris dan Wales dengan nomor 17079825, dengan kantor terdaftar di Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd adalah pengendali data untuk data pribadi yang diproses melalui Giggal.ai. Kontak: info@giggal.ai. Laporan penyalahgunaan: abuse@giggal.ai.',
    'Giggal.ai ("kami") berkomitmen melindungi privasi Anda. Kebijakan Privasi ini menjelaskan cara kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan layanan verifikasi email dan situs web kami.',
  ]},
  { heading: '2. Informasi yang Kami Kumpulkan' },
  { heading: '2.1 Informasi Pribadi', level: 3, paragraphs: ['Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela kepada kami saat Anda:'], list: [
    'Mendaftar untuk membuat akun', 'Membeli kredit verifikasi atau langganan', 'Menghubungi dukungan pelanggan kami', 'Mengirim daftar email untuk diverifikasi', 'Menggunakan formulir kontak atau dukungan di situs web kami',
  ], after: ['Informasi ini dapat mencakup nama, alamat email, pengenal akun, detail perusahaan (opsional), dan metadata transaksi. Detail kartu pembayaran ditangani oleh pemroses pembayaran kami dan tidak kami simpan.']},
  { heading: '2.2 Data Autentikasi dan Teknis', level: 3, paragraphs: ['Kami menggunakan Clerk untuk pendaftaran akun dan login (termasuk login dengan Google dan pendaftaran dengan email dan kata sandi). Melalui proses autentikasi ini, kami mengumpulkan dan memproses:'], list: [
    'Pengenal akun (seperti ID pengguna, nama, dan alamat email)',
    'Penyedia autentikasi dan metode login (Google atau email dan kata sandi)',
    'Metadata aktivitas login (seperti waktu login)',
    'Data teknis terkait keamanan (seperti alamat IP dan user agent) yang dipakai untuk melindungi akun dan mencegah penyalahgunaan',
    'Cookie atau token sesi yang diperlukan agar Anda tetap login dengan aman',
  ]},
  { heading: '2.3 Data Verifikasi Email', level: 3, paragraphs: ['Saat Anda menggunakan layanan verifikasi email kami, kami mengumpulkan dan memproses:'], list: [
    'Alamat email yang dikirim untuk diverifikasi',
    'Hasil dan status verifikasi (valid, tidak valid, catch-all, sekali pakai, dan lainnya)',
    'Daftar email massal yang diunggah untuk diproses',
    'Data penggunaan API dan riwayat verifikasi',
  ]},
  { heading: '3. Cara Kami Menggunakan Informasi Anda', paragraphs: ['Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:'], list: [
    'Menyediakan dan memelihara layanan kami', 'Memproses transaksi Anda dan mengelola langganan', 'Mengirim pemberitahuan terkait layanan kepada Anda', 'Memberikan dukungan pelanggan',
    'Meningkatkan dan mengoptimalkan layanan kami', 'Mendeteksi dan mencegah penipuan dan penyalahgunaan', 'Memenuhi kewajiban hukum', 'Menganalisis pola dan tren penggunaan',
  ]},
  { heading: '4. Dasar Hukum Pemrosesan (GDPR)', paragraphs: ['Jika Anda berasal dari Wilayah Ekonomi Eropa (EEA), dasar hukum kami untuk mengumpulkan dan menggunakan informasi Anda bergantung pada data dan konteksnya:'], list: [
    'Pelaksanaan kontrak: pemrosesan diperlukan untuk menjalankan layanan kami',
    'Kepentingan yang sah: pemrosesan dilakukan untuk kepentingan bisnis kami yang sah',
    'Persetujuan: Anda telah memberi persetujuan secara tegas untuk tujuan tertentu',
    'Kewajiban hukum: pemrosesan diperlukan untuk mematuhi hukum',
  ]},
  { heading: '5. Berbagi dan Pengungkapan Data' },
  { heading: '5.1 Penyedia Layanan', level: 3, paragraphs: ['Kami membagikan informasi Anda dengan penyedia layanan pihak ketiga yang menjalankan layanan atas nama kami:'], list: [
    'Pemroses pembayaran (gateway pembayaran resmi kami)', 'Penyedia autentikasi (seperti Clerk)', 'Penyedia cloud hosting', 'Penyedia keamanan dan pemantauan', 'Alat dukungan pelanggan',
  ]},
  { heading: '5.2 Persyaratan Hukum', level: 3, paragraphs: ['Kami dapat mengungkapkan informasi Anda jika diwajibkan oleh hukum atau sebagai tanggapan atas permintaan yang sah dari otoritas publik (misalnya perintah pengadilan atau surat panggilan).']},
  { heading: '5.3 Pengalihan Bisnis', level: 3, paragraphs: ['Jika kami terlibat dalam merger, akuisisi, atau penjualan aset, informasi Anda dapat dialihkan sebagai bagian dari transaksi tersebut.']},
  { heading: '6. Keamanan Data', paragraphs: ['Kami menerapkan langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi Anda, termasuk:'], list: [
    'Enkripsi data saat dikirim dan saat disimpan', 'Penilaian keamanan secara berkala', 'Kontrol akses dan autentikasi', 'Pusat data yang aman', 'Pelatihan karyawan tentang perlindungan data',
  ], after: ['Namun, tidak ada metode pengiriman melalui internet yang 100% aman, dan kami tidak dapat menjamin keamanan mutlak.']},
  { heading: '7. Penyimpanan Data', paragraphs: ['Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam Kebijakan Privasi ini, kecuali jika hukum mewajibkan atau mengizinkan masa penyimpanan yang lebih lama. Jika kami tidak lagi membutuhkan informasi Anda, kami akan menghapus atau menganonimkannya dengan aman.']},
  { heading: '8. Hak Anda', paragraphs: ['Tergantung lokasi Anda, Anda mungkin memiliki hak berikut:'], list: [
    'Akses: meminta akses ke informasi pribadi Anda',
    'Koreksi: meminta koreksi atas informasi yang tidak akurat',
    'Penghapusan: meminta penghapusan informasi Anda',
    'Portabilitas: meminta salinan data Anda dalam format yang dapat dipindahkan',
    'Pembatasan: meminta pembatasan pemrosesan',
    'Keberatan: menyatakan keberatan atas pemrosesan informasi Anda',
    'Penarikan persetujuan: menarik persetujuan jika pemrosesan didasarkan pada persetujuan',
  ], after: ['Untuk menggunakan hak ini, hubungi kami di info@giggal.ai.']},
  { heading: '9. Cookie dan Teknologi Pelacakan', paragraphs: ['Kami menggunakan cookie dan teknologi pelacakan serupa untuk melacak aktivitas di situs web kami dan menyimpan informasi tertentu. Anda dapat mengatur browser Anda untuk menolak semua cookie atau untuk memberi tahu saat cookie dikirim. Namun, jika Anda tidak menerima cookie, Anda mungkin tidak dapat menggunakan sebagian layanan kami.']},
  { heading: '10. Tautan Pihak Ketiga', paragraphs: ['Situs web kami dapat berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi situs eksternal tersebut. Kami menyarankan Anda membaca kebijakan privasi setiap situs pihak ketiga yang Anda kunjungi.']},
  { heading: '11. Privasi Anak', paragraphs: ['Layanan kami tidak ditujukan untuk orang di bawah usia 18 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda mengetahui bahwa seorang anak telah memberikan informasi pribadi kepada kami, hubungi kami, dan kami akan mengambil langkah untuk menghapus informasi tersebut.']},
  { heading: '12. Transfer Data Internasional', paragraphs: ['Informasi Anda dapat ditransfer ke dan disimpan di komputer yang berada di luar negara bagian, provinsi, negara, atau yurisdiksi pemerintahan Anda, tempat hukum perlindungan data mungkin berbeda. Kami memastikan ada perlindungan yang sesuai untuk transfer tersebut.']},
  { heading: '13. Hak Privasi California (CCPA)', paragraphs: ['Jika Anda penduduk California, Anda memiliki hak khusus atas informasi pribadi Anda:'], list: [
    'Hak untuk mengetahui informasi pribadi apa yang dikumpulkan',
    'Hak untuk mengetahui apakah informasi pribadi dijual atau diungkapkan',
    'Hak untuk menolak penjualan informasi pribadi',
    'Hak atas penghapusan informasi pribadi',
    'Hak untuk tidak didiskriminasi karena menggunakan hak CCPA',
  ]},
  { heading: '14. Perubahan pada Kebijakan Privasi Ini', paragraphs: ['Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang setiap perubahan dengan memasang Kebijakan Privasi yang baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui". Kami menyarankan Anda meninjau Kebijakan Privasi ini secara berkala untuk melihat perubahan.']},
  { heading: '15. Hubungi Kami', paragraphs: ['Jika Anda punya pertanyaan tentang Kebijakan Privasi ini, hubungi kami:', 'Email: info@giggal.ai', 'Situs web: https://giggal.ai', 'Dengan menggunakan layanan Giggal.ai, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini dan menyetujui ketentuannya.']},
]

export default function KebijakanPrivasiPage() {
  return (
    <LegalPageL10n
      locale="id"
      path="/id/kebijakan-privasi"
      title="Kebijakan Privasi"
      accent="Giggal.ai"
      updated="1 Oktober 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
