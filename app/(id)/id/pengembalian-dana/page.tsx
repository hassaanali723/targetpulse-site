import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Translated clause by clause from the current English /refund-policy
// (Last Updated: October 22, 2026). The English version is binding; the
// notice at the top of the page says so and links to it.

export const metadata: Metadata = {
  title: 'Kebijakan Pengembalian Dana Kredit Verifikasi Email',
  description: 'Kapan Giggal.ai mengembalikan dana kredit: kredit uji coba, pembelian satu kali, langganan, pengecualian, dan jangka waktu. Versi bahasa Inggris yang berlaku.',
  alternates: { canonical: '/id/pengembalian-dana', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'id_ID', title: 'Kebijakan Pengembalian Dana', url: 'https://giggal.ai/id/pengembalian-dana', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Ringkasan', paragraphs: [
    'Di Giggal.ai, kami berusaha memberikan layanan verifikasi email yang sangat baik. Kebijakan Pengembalian Dana ini menjelaskan keadaan ketika pengembalian dana dapat diberikan untuk layanan berbasis kredit kami.',
    'Kami hanya menyediakan layanan verifikasi email digital dan tidak menjual atau mengirim barang fisik.',
  ]},
  { heading: '2. Cara Kerja Sistem Kredit Kami', paragraphs: ['Giggal.ai menggunakan sistem berbasis kredit untuk verifikasi email:'], list: [
    '1 kredit = 1 validasi email: setiap verifikasi alamat email memakai 1 kredit dari akun Anda',
    'Bayar sesuai pemakaian: beli kredit dalam jumlah besar kapan saja (paket mulai dari 3.000 hingga 1.000.000 kredit)',
    'Kredit berulang: berlangganan paket kredit bulanan berulang dengan diskon 10%',
    'Tanpa masa berlaku: kredit tidak pernah kedaluwarsa dan tetap ada di akun Anda sampai dipakai',
  ]},
  { heading: '3. Kredit Uji Coba Gratis', paragraphs: ['Pengguna baru mendapat 1.000 kredit uji coba gratis untuk mencoba layanan verifikasi email kami. Harap diperhatikan:'], list: [
    'Kredit uji coba diberikan gratis tanpa pembayaran apa pun',
    'Kredit uji coba tidak dapat dikembalikan karena diberikan secara gratis',
    'Kredit uji coba mengikuti aturan validasi yang sama dengan kredit berbayar',
    'Kredit uji coba dapat dipakai untuk memverifikasi 1.000 alamat email',
  ]},
  { heading: '4. Kebijakan Pengembalian Dana untuk Pembelian Kredit' },
  { heading: '4.1 Kredit Bayar Sesuai Pemakaian (Pembelian Satu Kali)', level: 3, paragraphs: ['Kredit yang dibeli melalui paket bayar sesuai pemakaian pada umumnya tidak dapat dikembalikan setelah pembelian selesai karena:'], list: [
    'Kredit langsung ditambahkan ke akun Anda dan bisa segera dipakai',
    'Kredit tidak kedaluwarsa dan nilainya tetap tanpa batas waktu',
    'Anda bebas memakainya kapan saja',
  ]},
  { heading: '4.2 Langganan Kredit Berulang', level: 3, paragraphs: ['Untuk langganan kredit bulanan berulang:'], list: [
    'Kredit ditagih dan ditambahkan ke akun Anda setiap bulan',
    'Anda dapat membatalkan langganan kapan saja sebelum siklus penagihan berikutnya',
    'Kredit yang sudah ditambahkan ke akun Anda tidak dapat dikembalikan',
    'Pembatalan berlaku di akhir periode penagihan Anda yang sedang berjalan',
    'Kredit yang belum terpakai dari bulan-bulan sebelumnya tetap ada di akun Anda setelah pembatalan',
  ]},
  { heading: '5. Keadaan Luar Biasa dan Dukungan', paragraphs: ['Kebijakan standar kami adalah kredit tidak dapat dikembalikan, tetapi kami memahami bahwa situasi yang tidak biasa dapat terjadi. Dalam kasus:'], list: [
    'Kesalahan teknis yang menyebabkan pemotongan kredit yang salah',
    'Kegagalan layanan yang membuat validasi email tidak dapat dilakukan',
    'Tagihan ganda atau kesalahan penagihan',
    'Aktivitas akun yang tidak biasa atau dugaan penipuan',
    'Keadaan luar biasa lainnya',
  ], after: ['Segera hubungi tim dukungan kami di info@giggal.ai. Kami akan meninjau kasus Anda secara menyeluruh dan dapat memberikan pengembalian dana atau penyesuaian kredit kasus per kasus, atas kebijakan kami.']},
  { heading: '6. Masalah Kualitas Layanan', paragraphs: ['Jika Anda mengalami masalah teknis atau gangguan layanan yang menghalangi verifikasi email:'], list: [
    'Kredit tidak akan dipotong untuk validasi yang gagal karena kesalahan sistem kami',
    'Laporkan setiap masalah validasi segera kepada tim dukungan kami',
    'Kami dapat menambahkan kredit kompensasi ke akun Anda untuk gangguan layanan',
    'Gangguan yang berlangsung lama dapat memenuhi syarat untuk pengembalian dana sebagian, atas kebijakan kami',
  ]},
  { heading: '7. Pengakhiran Akun dan Pelanggaran', paragraphs: ['Jika akun Anda diakhiri karena pelanggaran Syarat dan Ketentuan atau Kebijakan Penggunaan yang Dapat Diterima kami:'], list: [
    'Tidak ada pengembalian dana untuk kredit yang belum terpakai',
    'Akses ke akun Anda dan sisa kredit akan dicabut secara permanen',
    'Langganan berulang akan langsung dibatalkan',
  ]},
  { heading: '8. Cara Meminta Pengembalian Dana atau Melaporkan Masalah', paragraphs: [
    'Untuk meminta pengembalian dana atau melaporkan aktivitas tidak biasa, hubungi tim dukungan kami:',
    'Email: info@giggal.ai',
    'Subjek: Refund Request / Issue Report',
    'Sertakan informasi berikut dalam permintaan Anda:',
  ], list: [
    'Alamat email akun Anda',
    'ID transaksi atau nomor pesanan',
    'Penjelasan rinci tentang masalah atau aktivitas tidak biasa',
    'Tanggal dan waktu kejadian (jika ada)',
    'Tangkapan layar atau bukti yang mendukung klaim Anda (jika ada)',
    'Jumlah kredit yang terdampak',
  ]},
  { heading: '9. Jangka Waktu Pemrosesan Pengembalian Dana', paragraphs: ['Jika permintaan pengembalian dana Anda disetujui:'], list: [
    'Kami akan meninjau kasus Anda dalam 2 sampai 3 hari kerja',
    'Anda akan menerima jawaban melalui email tentang keputusannya',
    'Pengembalian dana yang disetujui akan diproses dalam 5 sampai 10 hari kerja',
    'Dana dikembalikan ke metode pembayaran awal melalui pemroses pembayaran kami',
    'Mungkin perlu tambahan 5 sampai 7 hari kerja sampai dana muncul di rekening Anda, tergantung penyedia pembayaran Anda',
  ]},
  { heading: '10. Chargeback', paragraphs: ['Jika Anda mengajukan chargeback (pembatalan tagihan melalui bank) atau sengketa pembayaran ke bank atau penyedia pembayaran Anda tanpa menghubungi kami terlebih dahulu untuk menyelesaikan masalahnya:'], list: [
    'Kami berhak menutup akun Anda secara permanen',
    'Anda akan dilarang menggunakan layanan kami di masa mendatang',
    'Semua sisa kredit akan hangus',
    'Kami akan memberikan bukti kepada pemroses pembayaran untuk membela tagihan tersebut',
  ], after: ['Kami sangat menyarankan Anda menghubungi tim dukungan kami terlebih dahulu. Kami berkomitmen menyelesaikan masalah secara adil dan cepat.']},
  { heading: '11. Pengalihan Kredit dan Berbagi Akun', paragraphs: ['Kredit tidak dapat dialihkan antarakun. Pengembalian dana tidak diberikan untuk:'], list: [
    'Kredit yang dibeli di akun yang salah',
    'Permintaan untuk memindahkan kredit ke akun lain',
    'Pelanggaran aturan berbagi akun',
  ]},
  { heading: '12. Perubahan pada Kebijakan Ini', paragraphs: ['Kami berhak mengubah Kebijakan Pengembalian Dana ini kapan saja. Perubahan langsung berlaku setelah dipasang di situs web kami. Jika Anda terus menggunakan layanan kami setelah ada perubahan, berarti Anda menerima kebijakan yang baru.']},
  { heading: '13. Informasi Kontak', paragraphs: [
    'Jika Anda punya pertanyaan tentang Kebijakan Pengembalian Dana ini atau membutuhkan bantuan, hubungi kami:',
    'Email: info@giggal.ai',
    'Situs web: https://giggal.ai',
    'Tim dukungan kami berkomitmen menanggapi kekhawatiran Anda dan mencari solusi yang adil. Kami biasanya menjawab semua pertanyaan dalam 24 sampai 48 jam.',
    'Kebijakan Pengembalian Dana ini adalah bagian dari Syarat dan Ketentuan kami. Dengan menggunakan layanan Giggal.ai, Anda mengakui bahwa Anda telah membaca dan memahami kebijakan ini.',
  ]},
]

export default function PengembalianDanaPage() {
  return (
    <LegalPageL10n
      locale="id"
      path="/id/pengembalian-dana"
      title="Kebijakan Pengembalian Dana"
      accent="untuk kredit"
      updated="22 Oktober 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
