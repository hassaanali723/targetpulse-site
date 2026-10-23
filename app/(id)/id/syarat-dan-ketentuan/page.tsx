import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Translated clause by clause from the current English /terms-of-service
// (Last Updated: October 22, 2026). The English version is binding; the
// notice at the top of the page says so and links to it.

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan Layanan Verifikasi Email',
  description: 'Syarat dan ketentuan layanan verifikasi email Giggal.ai. Ini terjemahan untuk kemudahan Anda. Jika ada perbedaan, versi bahasa Inggris yang berlaku.',
  alternates: { canonical: '/id/syarat-dan-ketentuan', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'id_ID', title: 'Syarat dan Ketentuan', url: 'https://giggal.ai/id/syarat-dan-ketentuan', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Penerimaan Syarat', paragraphs: [
    'Layanan ini dioperasikan oleh TargetPulse Ltd ("kami"), perusahaan yang terdaftar di Inggris dan Wales dengan nomor 17079825, dengan kantor terdaftar di Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd adalah pengendali data untuk data pribadi yang diproses melalui Giggal.ai. Kontak: info@giggal.ai. Laporan penyalahgunaan: abuse@giggal.ai.',
    'Dengan mengakses dan menggunakan layanan Giggal.ai, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan perjanjian ini. Jika Anda tidak setuju untuk mematuhi hal di atas, jangan gunakan layanan ini.',
    'Syarat dan Ketentuan ini mengatur penggunaan Anda atas layanan Giggal.ai Email Verifier yang dioperasikan oleh TargetPulse Ltd, dengan nama dagang Giggal.ai.',
  ]},
  { heading: '2. Deskripsi Layanan', paragraphs: [
    'Giggal.ai Email Verifier adalah alat berbasis cloud yang membantu tim membersihkan dan memvalidasi daftar email. Pengguna mengunggah file CSV atau alamat email satu per satu. Kami mengecek deliverability (tingkat keterkiriman email), record domain, dan apakah setiap mailbox ada, untuk mengurangi alamat tidak valid dan meningkatkan kualitas daftar. Produk ini dijual sebagai sistem kredit bayar sesuai pemakaian, sehingga pelanggan hanya membayar email yang benar-benar mereka validasi.',
    'Layanan diberikan kepada Anda dengan tunduk pada Syarat dan Ketentuan ini serta syarat dan ketentuan tambahan yang mungkin berlaku.',
  ]},
  { heading: '2.1 Layanan Verifikasi Email', level: 3, paragraphs: ['Layanan utama kami adalah verifikasi dan validasi email, yang mencakup:'], list: [
    'Deteksi gateway: mengidentifikasi secure email gateway (SEG) dan filter pertahanan di batas jaringan',
    'Validasi domain: mengecek apakah domain email ada dan memiliki MX record yang valid',
    'Verifikasi mailbox: memverifikasi apakah alamat email tertentu ada dan dapat menerima email',
    'Deteksi email sekali pakai: mengidentifikasi alamat email sementara atau sekali pakai',
    'Deteksi email berbasis peran: mendeteksi alamat email umum (misalnya info@, support@)',
    'Deteksi catch-all: mengidentifikasi domain yang menerima semua alamat email',
    'Verifikasi real-time: mengecek apakah mailbox penerima ada',
    'Verifikasi massal: memproses ribuan alamat email sekaligus',
  ]},
  { heading: '2.2 Sistem Berbasis Kredit', level: 3, paragraphs: ['Layanan kami berjalan dengan model berbasis kredit, dengan ketentuan berikut:'], list: [
    '1 kredit = 1 verifikasi email: setiap verifikasi alamat email memakai tepat 1 kredit dari saldo akun Anda',
    'Bayar sesuai pemakaian: beli kredit kapan saja dalam paket mulai dari 3.000 hingga 1.000.000 kredit',
    'Langganan berulang: berlangganan paket kredit bulanan berulang dengan diskon 10% dari harga normal',
    'Tanpa masa berlaku: kredit tidak pernah kedaluwarsa dan tetap tersedia di akun Anda sampai dipakai',
    'Uji coba gratis: akun baru mendapat 1.000 kredit gratis untuk mencoba layanan',
  ]},
  { heading: '2.3 Fitur Layanan', level: 3, paragraphs: ['Layanan verifikasi email kami mencakup:'], list: [
    'Akses API real-time untuk verifikasi instan',
    'Kemampuan unggah dan pemrosesan massal',
    'Laporan dan analisis verifikasi yang rinci',
    'Ekspor hasil dalam format CSV, Excel, dan JSON',
    'Deteksi dan penghapusan email duplikat',
    'Alat pembersihan dan segmentasi daftar',
    'Dukungan integrasi melalui API dan sistem pihak ketiga yang kompatibel',
  ]},
  { heading: '3. Akun Pengguna', paragraphs: ['Untuk menggunakan fitur tertentu dari Layanan, Anda harus mendaftar untuk membuat akun. Anda setuju untuk:'], list: [
    'Memberikan informasi yang akurat, terkini, dan lengkap saat pendaftaran',
    'Menjaga dan segera memperbarui informasi akun Anda',
    'Menjaga keamanan kata sandi Anda dan menerima semua risiko akses tanpa izin',
    'Segera memberi tahu kami jika ada penggunaan akun Anda tanpa izin',
    'Bertanggung jawab atas semua aktivitas yang terjadi di akun Anda',
  ]},
  { heading: '4. Ketentuan Pembayaran', paragraphs: ['Pembayaran diproses dengan aman melalui gateway pembayaran resmi kami. Dengan membeli kredit atau layanan, Anda setuju untuk:'], list: [
    'Memberikan informasi pembelian dan akun yang terkini, lengkap, dan akurat',
    'Segera memperbarui informasi akun dan pembayaran Anda bila diperlukan',
    'Membayar semua biaya sesuai harga yang berlaku saat pembelian',
    'Membayar pajak, PPN, atau biaya lain yang berlaku untuk pembelian Anda',
  ]},
  { heading: '4.1 Pilihan Pembelian Kredit', level: 3, paragraphs: ['Anda dapat membeli kredit dengan cara berikut:'], list: [
    'Pembelian satu kali (bayar sesuai pemakaian): beli paket kredit sesuai kebutuhan, dan kredit langsung ditambahkan ke akun Anda',
    'Langganan bulanan berulang: terima kredit secara otomatis setiap bulan dengan diskon 10%',
  ]},
  { heading: '4.2 Harga dan Penagihan', level: 3, paragraphs: [
    'Semua harga ditampilkan dalam USD dan sudah termasuk biaya yang berlaku. Kredit langsung ditambahkan ke akun Anda setelah pembayaran berhasil dikonfirmasi. Semua pembelian kredit tidak dapat dikembalikan, kecuali jika diwajibkan oleh hukum atau dinyatakan secara tegas dalam Kebijakan Pengembalian Dana kami.',
  ]},
  { heading: '4.3 Kredit Uji Coba Gratis', level: 3, paragraphs: ['Pengguna baru mendapat 1.000 kredit uji coba gratis saat mendaftar akun. Kredit uji coba:'], list: [
    'Diberikan tanpa biaya dan tidak memerlukan informasi pembayaran',
    'Berfungsi sama seperti kredit berbayar untuk verifikasi email',
    'Tidak dapat dikembalikan karena diberikan secara gratis',
    'Dapat dipakai untuk memverifikasi hingga 1.000 alamat email',
    'Membantu Anda menilai kualitas layanan kami sebelum membeli',
  ]},
  { heading: '5. Layanan Langganan Berulang', paragraphs: ['Langganan kredit bulanan berulang ditagih secara otomatis setiap bulan. Anda akan ditagih di muka setiap bulan, dan kredit akan ditambahkan ke akun Anda setelah pembayaran berhasil. Ketentuan utamanya:'], list: [
    'Langganan diperpanjang otomatis di akhir setiap siklus penagihan, kecuali dibatalkan',
    'Anda dapat membatalkan langganan kapan saja sebelum tanggal penagihan berikutnya',
    'Pembatalan berlaku di akhir periode penagihan yang sedang berjalan',
    'Kredit yang sudah ditambahkan ke akun Anda tetap tersedia setelah pembatalan',
    'Pelanggan langganan berulang mendapat diskon 10% dibandingkan harga bayar sesuai pemakaian',
  ]},
  { heading: '6. Penggunaan dan Pengelolaan Kredit' },
  { heading: '6.1 Pemakaian Kredit', level: 3, paragraphs: ['Kredit dipakai dengan cara berikut:'], list: [
    'Setiap verifikasi email yang berhasil memakai tepat 1 kredit',
    'Kredit hanya dipotong untuk verifikasi yang selesai',
    'Verifikasi yang gagal karena kesalahan sistem tidak memakai kredit',
    'Email duplikat dalam batch verifikasi yang sama hanya diproses satu kali',
  ]},
  { heading: '6.2 Masa Berlaku dan Pengalihan Kredit', level: 3, paragraphs: ['Kebijakan kredit yang penting:'], list: [
    'Tanpa masa berlaku: kredit tidak pernah kedaluwarsa dan tetap ada di akun Anda tanpa batas waktu',
    'Tidak dapat dialihkan: kredit tidak dapat dipindahkan antarakun',
    'Tidak dapat dikembalikan: setelah dibeli, kredit tidak dapat dikembalikan (lihat Kebijakan Pengembalian Dana untuk pengecualian)',
    'Terikat pada akun: kredit terikat pada akun Anda dan tidak dapat dibagikan',
  ]},
  { id: 'cancellation-policy', heading: '7. Pembatalan dan Pengembalian Dana', paragraphs: ['Anda dapat membatalkan langganan berulang kapan saja melalui pengaturan akun atau dengan menghubungi tim dukungan kami di info@giggal.ai. Setelah pembatalan:'], list: [
    'Langganan Anda tidak akan diperpanjang untuk siklus penagihan berikutnya',
    'Anda tetap memiliki semua kredit di akun Anda',
    'Anda dapat terus memakai kredit yang ada tanpa batasan',
    'Anda tetap dapat membeli paket kredit bayar sesuai pemakaian',
  ], after: ['Pengembalian dana untuk aktivitas tidak biasa atau keadaan luar biasa ditangani sesuai Kebijakan Pengembalian Dana kami. Jika Anda mengalami masalah atau mencurigai aktivitas penipuan, segera hubungi tim dukungan kami untuk ditinjau.']},
  { heading: '8. Kebijakan Penggunaan yang Dapat Diterima', paragraphs: ['Anda setuju untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan semua hukum dan peraturan yang berlaku. Anda setuju untuk tidak menggunakan Layanan:'], list: [
    'Untuk memverifikasi alamat email yang diperoleh tanpa persetujuan atau izin yang semestinya',
    'Untuk mengirim spam atau email yang tidak diminta setelah verifikasi',
    'Untuk melanggar hukum atau peraturan yang berlaku, termasuk CAN-SPAM Act, GDPR, dan CASL',
    'Untuk melanggar atau merugikan hak orang lain',
    'Untuk menyebarkan malware atau kode berbahaya lainnya',
    'Untuk menyamar sebagai orang atau entitas lain',
    'Untuk melakukan aktivitas penipuan atau penyalahgunaan layanan kami',
    'Untuk menjual kembali atau mendistribusikan ulang layanan verifikasi kami tanpa izin',
    'Untuk mencoba merekayasa balik atau membobol sistem verifikasi kami',
    'Untuk membagikan kredensial akun atau kredit Anda kepada pengguna yang tidak berwenang',
  ]},
  { heading: '9. Akurasi dan Keterbatasan Layanan', paragraphs: ['Meskipun kami berusaha mencapai akurasi setinggi mungkin dalam verifikasi email, Anda mengakui dan menyetujui bahwa:'], list: [
    'Verifikasi email tidak dapat menjamin akurasi 100% karena keterbatasan teknis',
    'Sebagian server email dapat memberi respons positif palsu atau negatif palsu',
    'Hasil verifikasi didasarkan pada pengecekan real-time dan dapat berubah seiring waktu',
    'Kami memberikan hasil verifikasi "sebagaimana adanya" dan tidak memberi jaminan apa pun tentang deliverability',
    'Anda bertanggung jawab atas penggunaan data terverifikasi secara sah dan atas semua komunikasi yang mengikutinya',
  ]},
  { heading: '10. Penggunaan yang Sah dan Kepatuhan Pengiriman Pesan', paragraphs: ['Jika Anda menggunakan alamat email terverifikasi untuk pesan outreach, transaksional, atau dukungan, Anda sepenuhnya bertanggung jawab untuk memastikan kepatuhan terhadap semua hukum dan peraturan yang berlaku, termasuk tetapi tidak terbatas pada:'], list: [
    'CAN-SPAM Act (Amerika Serikat)', 'GDPR (Uni Eropa)', 'CASL (Kanada)', 'Hukum antispam dan perlindungan data lain yang berlaku',
  ], after: ['Anda wajib memperoleh persetujuan yang diperlukan dan menyertakan kontrol berhenti berlangganan (opt-out) atau preferensi yang diwajibkan hukum, jika berlaku. Giggal.ai tidak bertanggung jawab atas penggunaan alamat email terverifikasi oleh Anda.']},
  { heading: '11. Kekayaan Intelektual', paragraphs: ['Layanan beserta konten asli, fitur, dan fungsinya dimiliki oleh Giggal.ai dan dilindungi oleh hukum internasional tentang hak cipta, merek dagang, paten, rahasia dagang, dan kekayaan intelektual lainnya. Anda tidak boleh menyalin, mengubah, mendistribusikan, menjual, atau menyewakan bagian mana pun dari layanan kami tanpa izin tertulis sebelumnya.']},
  { heading: '12. Data dan Privasi', paragraphs: [
    'Penggunaan Layanan oleh Anda juga diatur oleh Kebijakan Privasi kami. Kami mengumpulkan, menyimpan, dan memproses data Anda sebagaimana dijelaskan dalam Kebijakan Privasi. Anda tetap memegang semua hak atas data pelanggan dan daftar email Anda, dan kami tidak akan menggunakannya kecuali jika diperlukan untuk menyediakan Layanan atau diwajibkan oleh hukum.',
    'Alamat email yang dikirim untuk verifikasi diproses dengan aman dan tidak disimpan secara permanen. Kami tidak menjual, membagikan, atau menggunakan daftar email Anda untuk tujuan apa pun selain menyediakan layanan verifikasi.',
  ]},
  { heading: '13. Perubahan dan Ketersediaan Layanan', paragraphs: [
    'Kami berhak mengubah atau menghentikan Layanan (atau bagian mana pun darinya), untuk sementara atau secara permanen, dengan atau tanpa pemberitahuan. Kami tidak bertanggung jawab kepada Anda atau pihak ketiga mana pun atas perubahan, penangguhan, atau penghentian Layanan.',
    'Kami berusaha menjaga ketersediaan layanan yang tinggi, tetapi tidak menjamin akses tanpa gangguan. Pemeliharaan terjadwal akan diumumkan sebelumnya jika memungkinkan.',
  ]},
  { heading: '14. Batasan Tanggung Jawab', paragraphs: ['Sejauh diizinkan secara maksimal oleh hukum, dalam keadaan apa pun Giggal.ai, direktur, karyawan, mitra, agen, pemasok, atau afiliasinya tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau ganti rugi yang bersifat hukuman, termasuk tanpa batasan kehilangan keuntungan, data, penggunaan, goodwill, atau kerugian tidak berwujud lainnya, yang timbul dari:'], list: [
    'Akses Anda ke Layanan, penggunaan Layanan, atau ketidakmampuan Anda untuk mengakses atau menggunakan Layanan',
    'Perilaku atau konten pihak ketiga mana pun di Layanan',
    'Konten apa pun yang diperoleh dari Layanan',
    'Akses, penggunaan, atau perubahan tanpa izin atas transmisi atau konten Anda',
    'Hasil verifikasi email yang tidak akurat',
    'Email yang gagal terkirim atau bounce setelah verifikasi',
    'Kredit yang terpakai karena kesalahan atau penyalahgunaan oleh pengguna',
  ]},
  { heading: '15. Penafian Jaminan', paragraphs: [
    'Layanan disediakan "sebagaimana adanya" dan "sebagaimana tersedia" tanpa jaminan apa pun, baik tersurat maupun tersirat. Giggal.ai menyangkal semua jaminan, termasuk tetapi tidak terbatas pada jaminan tersirat atas kelayakan untuk diperdagangkan, kesesuaian untuk tujuan tertentu, dan tidak adanya pelanggaran hak.',
    'Kami tidak menjamin bahwa Layanan akan berjalan tanpa gangguan, tepat waktu, aman, atau bebas dari kesalahan, atau bahwa hasil verifikasi email akan 100% akurat.',
  ]},
  { heading: '16. Ganti Rugi', paragraphs: ['Anda setuju untuk membela, mengganti kerugian, dan membebaskan Giggal.ai serta penerima lisensi dan pemberi lisensinya dari dan terhadap semua klaim, kerusakan, kewajiban, kerugian, tanggung jawab, biaya, atau utang, dan pengeluaran yang timbul dari penggunaan Layanan oleh Anda atau pelanggaran Anda terhadap Syarat dan Ketentuan ini.']},
  { heading: '17. Pengakhiran', paragraphs: ['Kami dapat mengakhiri atau menangguhkan akun dan akses Anda ke Layanan dengan segera, tanpa pemberitahuan sebelumnya atau tanggung jawab, dengan alasan apa pun, termasuk tanpa batasan jika Anda melanggar Syarat dan Ketentuan ini. Setelah pengakhiran:'], list: [
    'Hak Anda untuk menggunakan Layanan langsung berakhir',
    'Kredit yang belum terpakai hangus tanpa pengembalian dana',
    'Langganan berulang akan dibatalkan',
    'Akses ke akun dan data Anda dapat dicabut secara permanen',
  ]},
  { heading: '18. Hukum yang Berlaku', paragraphs: ['Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yurisdiksi tempat Giggal.ai beroperasi, tanpa memperhatikan ketentuan pertentangan hukumnya.']},
  { heading: '19. Penyelesaian Sengketa', paragraphs: ['Setiap sengketa yang timbul dari atau berkaitan dengan Syarat dan Ketentuan ini atau Layanan pertama-tama akan diupayakan penyelesaiannya melalui negosiasi dengan itikad baik. Jika negosiasi gagal, sengketa akan diselesaikan melalui arbitrase yang mengikat sesuai dengan aturan lembaga arbitrase yang sesuai.']},
  { heading: '20. Perubahan Syarat', paragraphs: ['Kami berhak mengubah atau mengganti Syarat dan Ketentuan ini kapan saja atas kebijakan kami sendiri. Jika suatu revisi bersifat material, kami akan memberi pemberitahuan paling sedikit 30 hari sebelum syarat baru berlaku. Apa yang dianggap sebagai perubahan material akan ditentukan atas kebijakan kami sendiri.']},
  { heading: '21. Keterpisahan', paragraphs: ['Jika suatu ketentuan dalam Syarat dan Ketentuan ini dinyatakan tidak dapat diberlakukan atau tidak sah, ketentuan tersebut akan diubah dan ditafsirkan untuk mencapai tujuannya sejauh mungkin menurut hukum yang berlaku, dan ketentuan lainnya tetap berlaku sepenuhnya.']},
  { heading: '22. Informasi Kontak', paragraphs: ['Jika Anda punya pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami di:', 'Email: info@giggal.ai', 'Situs web: https://giggal.ai', 'Dengan menggunakan layanan Giggal.ai, Anda mengakui bahwa Anda telah membaca dan memahami Syarat dan Ketentuan ini dan setuju untuk terikat olehnya.']},
]

export default function SyaratDanKetentuanPage() {
  return (
    <LegalPageL10n
      locale="id"
      path="/id/syarat-dan-ketentuan"
      title="Syarat dan Ketentuan"
      accent="Giggal.ai"
      updated="22 Oktober 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
