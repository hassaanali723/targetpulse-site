---
title: "Apa arti Cleaned di Mailchimp?"
seoTitle: "Arti Cleaned di Mailchimp: Penyebab dan yang Harus Dilakukan"
description: "Cleaned di Mailchimp berarti alamat terkena hard bounce atau soft bounce berulang, jadi Mailchimp berhenti mengirim. Penyebab, dampak biaya dan langkah Anda."
slug: arti-cleaned-di-mailchimp
date: 2026-10-23
updated: 2026-10-23
keyword: arti cleaned di mailchimp
image: /blog/covers/id/arti-cleaned-di-mailchimp.webp
imageAlt: Panduan status Cleaned di audience Mailchimp dengan penyebab bounce dan perbedaan antar status
cta: Temukan alamat tidak valid sebelum Mailchimp menandainya Cleaned
---

Cleaned di Mailchimp berarti Mailchimp berhenti mengirim ke alamat itu karena alamat tersebut terkena hard bounce, atau terlalu sering terkena soft bounce. Mailchimp menganggap alamat itu tidak valid. Namanya sering membingungkan, karena cleaned terdengar seperti Mailchimp merapikan atau memperbaiki sesuatu untuk Anda. Kenyataannya, tidak ada yang diperbaiki. Kontak itu tetap ada di audience Anda dengan tanda Cleaned, tidak bisa menerima email apa pun dari Anda, dan tidak dihitung dalam batas kontak bulanan Anda.

## Kenapa Mailchimp menandai alamat sebagai Cleaned

Hard bounce adalah kegagalan pengiriman permanen, saat server penerima langsung menolak email. Alasan umum menurut Mailchimp adalah kotak masuk yang tidak ada dan server penerima yang memblokir pengiriman secara permanen. Salah ketik seperti con alih-alih com, dan alamat lama milik orang yang sudah keluar dari perusahaan, adalah contoh yang umum. Pada sebagian besar kasus, Mailchimp langsung dan otomatis menandai alamat yang terkena hard bounce sebagai Cleaned. Alamat itu dikeluarkan dari setiap kampanye berikutnya ke audience Anda.

Soft bounce bekerja dengan cara berbeda karena merupakan kegagalan pengiriman sementara. Saat sebuah alamat terkena soft bounce, Mailchimp mencoba mengirim lagi pada pengiriman berikutnya, bukan langsung memutusnya. Namun jika alamat itu terus gagal, Mailchimp mengubahnya menjadi hard bounce dan menandainya Cleaned. Mailchimp memakai hitungan tertentu untuk proses ini. Alamat ditandai Cleaned setelah 7 soft bounce jika kontak itu tidak punya aktivitas pelanggan sebelumnya. Untuk kontak yang punya aktivitas pelanggan sebelumnya, batasnya sampai 15 soft bounce.

Mailchimp menyebut beberapa alasan pesan kampanye bisa terkena soft bounce. Kotak masuk penerima mungkin penuh, tidak aktif atau salah dikonfigurasi. Server emailnya mungkin sedang mati atau offline, atau kampanye Anda mengirim terlalu banyak email ke server itu dalam waktu singkat. Alasan soft bounce lainnya adalah pesan yang terlalu besar, domain yang untuk sementara tidak ada, filter konten, atau pesan yang tidak bisa diteruskan. Email juga bisa terkena soft bounce jika tidak memenuhi syarat antivirus, antispam atau syarat pengirim di server tujuan, atau jika pesan itu [gagal DMARC](/blog/spf-dkim-dmarc-explained).

Mailchimp menyatakan tidak bisa memprediksi apakah email akan bounce sebelum Anda mengirimnya. Menurut Mailchimp, setiap penyedia layanan email menolak email berdasarkan aturannya sendiri. Setelah pengiriman kampanye selesai, bukti bounce tetap tersedia di laporan email Mailchimp Anda selama 30 hari setelah pengiriman. Anda bisa membaca lebih lanjut cara server email menggolongkan masalah pengiriman dalam panduan kami tentang [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce), atau membaca panduan Mailchimp tentang [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Cleaned dibandingkan unsubscribed, archived dan jenis kontak lainnya

Mailchimp membagi kontak ke dalam beberapa kategori. Kategori itu menentukan apakah kontak bisa menerima pesan dan apakah Anda membayar untuknya:

| Status | Artinya | Bisa menerima | Dihitung dalam batas kontak |
| --- | --- | --- | --- |
| Subscribed | Memilih untuk menerima kampanye email Anda | Email marketing, SMS marketing, iklan, email transaksional | Ya |
| Unsubscribed | Memilih berhenti menerima kampanye marketing Anda | Iklan dan email transaksional | Ya |
| Non-subscribed | Pernah berinteraksi dengan Anda (toko, integrasi atau impor) tetapi tidak pernah opt-in | Iklan dan email transaksional | Ya |
| Cleaned | Alamat terkena hard bounce atau soft bounce berulang, tidak dapat dikirimi | Tidak ada | Tidak |
| Pending | Mengisi formulir pendaftaran tetapi belum mengonfirmasi double opt-in | Tidak ada | Tidak |
| Archived | Dikeluarkan dari audience aktif, data profil tetap disimpan | Tidak ada | Tidak |
| Deleted | Dihapus permanen, tidak bisa dibatalkan | Tidak ada | Tidak |

Status cleaned dan unsubscribed sama-sama membuat Anda tidak bisa mengirim kampanye marketing ke sebuah alamat email. Namun perbedaannya penting untuk tagihan bulanan Anda. Unsubscribed adalah pilihan pelanggan, dan Mailchimp tetap menghitung kontak itu dalam batas kontak bulanan Anda. Cleaned adalah keputusan Mailchimp setelah pengiriman gagal. Alamat itu tidak bisa menerima apa pun, dan Mailchimp tidak menagih biaya untuknya. Kontak pending yang tetap belum dikonfirmasi otomatis dihapus dari audience Anda setelah 60 hari. Akun dengan paket berbayar lama yang dibuat sebelum 15 Mei 2019 mungkin punya aturan batas kontak yang berbeda.

## Apa yang dilakukan dengan kontak Cleaned

Mailchimp menyarankan untuk mengarsipkan kontak Cleaned, bukan menghapusnya. Pengarsipan menyimpan riwayat kontak dan menyimpan catatan alamat yang buruk itu di audience Anda. Menurut Mailchimp, ini membantu Anda agar tidak mengirim lagi ke alamat itu dan terkena bounce. Mailchimp menyarankan penghapusan kontak hanya untuk permintaan kepatuhan GDPR, karena penghapusan menghilangkan catatan secara permanen dan tidak bisa dibatalkan. Mengarsipkan kontak Cleaned tidak akan menurunkan tagihan bulanan Anda, karena alamat Cleaned memang tidak dihitung dalam batas paket Anda. Mailchimp menjelaskan kebijakan ini di dokumentasinya, [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Untuk meninjau atau mengekspor semua alamat Cleaned dari audience Mailchimp Anda, pisahkan alamat itu dengan segmen:

1. Buka tab Audience di dashboard Mailchimp Anda dan klik Segments.
2. Klik Create segment.
3. Atur kriteria segmen agar Email subscription status adalah salah satu dari Cleaned.
4. Klik Use segment, beri nama segmen, lalu simpan.
5. Buka segmen yang tersimpan, klik Export segment, dan konfirmasi permintaan ekspor.
6. Klik View exports di banner notifikasi, lalu klik Download CSV untuk menyimpan file.

Jika kontak ditandai Cleaned karena salah ketik sederhana, seperti user@gmai.com atau name@conpany.com, Anda tidak bisa mengedit catatan kontak yang ada. Untuk memperbaikinya, tambahkan alamat email yang sudah benar sebagai kontak baru. Mailchimp tidak menagih biaya untuk alamat Cleaned, jadi menyimpan catatan asli yang salah ketik tidak membebani Anda.

Alamat email yang valid kadang tetap terkena hard bounce. Sebelum mengambil tindakan, periksa alasan bounce di laporan kampanye Anda. Firewall perusahaan yang ketat atau filter spam mungkin menolak pesan dengan balasan SMTP seperti Denied, Unacceptable Content atau Blocked. Di lingkungan perusahaan, filter perusahaan bisa memblokir semua alamat IP pengiriman Mailchimp. Tim IT penerima bisa memperbaikinya dengan menambahkan alamat IP Mailchimp ke allowlist mereka. Dalam kasus lain, penyedia layanan email besar mungkin memblokir Anda untuk sementara. Menurut Mailchimp, blokir itu bisa dicabut dalam satu atau dua hari setelah keluhan spam berkurang. Anda bisa mendiagnosis balasan error tertentu dari server dengan [membaca pesan bounce](/blog/550-5-7-1-error). Jika alamat itu pasti valid dan hambatan pengirimannya sudah hilang, kontak itu harus mendaftar lagi lewat formulir pendaftaran Anda untuk masuk kembali ke audience. Mailchimp tidak mengizinkan Anda mengubah sendiri kontak Cleaned kembali menjadi Subscribed.

## Saat banyak kontak ditandai Cleaned sekaligus

Jika kampanye terakhir membuat banyak kontak ditandai Cleaned sekaligus, akun Anda bisa terancam ditangguhkan secara otomatis. Mailchimp otomatis menangguhkan akun saat satu pengiriman melewati batas industri untuk bounce, berhenti berlangganan atau keluhan penyalahgunaan. Menurut Mailchimp, penyedia layanan internet dan organisasi antispam mewajibkan Mailchimp menegakkan batas ini. Jika Mailchimp menangguhkan akun Anda, pengiriman dinonaktifkan selama tim kepatuhan memeriksanya. Login, panggilan API dan akses data tetap berjalan normal.

Daftar lama biasanya menjadi penyebabnya, karena orang berganti pekerjaan, meninggalkan kotak masuk dan menutup akun. Jika Anda sudah lama tidak mengirim email ke audience Anda, Mailchimp menyarankan konfirmasi ulang kontak sebelum menjadwalkan kampanye besar. Caranya, minta pelanggan memastikan bahwa mereka masih ingin menerima pesan Anda.

Mailchimp juga sangat menyarankan autentikasi domain pengiriman Anda, [mengonfigurasi DMARC](/blog/what-is-a-dmarc-record), dan tidak pernah memakai alamat email gratis dari Gmail atau Yahoo sebagai alamat From.

## Cara mencegah kontak ditandai Cleaned

Cara paling langsung untuk mencegah alamat ditandai Cleaned adalah memverifikasi daftar sebelum Anda mengimpornya atau mengirim kampanye. Alat verifikasi email menguji apakah setiap kotak masuk benar-benar ada di server tujuan sebelum kampanye dikirim. Dengan begitu, alamat tidak valid tidak terkena bounce di akun Anda. Di sinilah [Giggal bisa terhubung ke Mailchimp](/integrations) dengan API key. Giggal mengimpor kontak subscribed dari audience Anda, memeriksa apakah setiap kotak masuk ada, dan memastikan status alamat di [domain catch-all](/catch-all-verification). Setelah verifikasi selesai, Anda mengunduh hasilnya sebagai file CSV, lalu mengarsipkan atau mengubah alamat yang buruk menjadi unsubscribed secara manual di Mailchimp. Giggal tidak mengubah apa pun di audience Mailchimp Anda.

Verifikasi sebelum mengirim menjaga bounce tetap rendah. Jika Anda punya segmen lama yang sudah lama tidak menerima email, periksa dengan alat verifikasi atau kirim kampanye konfirmasi ulang sebelum memasukkannya ke newsletter utama. Pastikan record autentikasi domain Anda tetap valid di DNS, karena kegagalan kecocokan DMARC adalah salah satu pemicu soft bounce yang diakui Mailchimp. Ingat bahwa memverifikasi audience tidak akan memulihkan kontak yang sudah ditandai Cleaned oleh Mailchimp. Setelah sebuah alamat mendapat status Cleaned, Mailchimp hanya mengizinkan orang itu kembali lewat pendaftaran baru di formulir pendaftaran Anda.

## Pertanyaan yang sering diajukan

**Apakah kontak Cleaned dihitung dalam tagihan Mailchimp saya?**
Tidak. Kontak Cleaned tidak dihitung dalam batas kontak bulanan Anda, dan Mailchimp tidak menagih biaya untuknya. Dari semua jenis kontak, hanya kontak subscribed, unsubscribed dan non-subscribed yang dihitung dalam batas kontak paket Anda.

**Bisakah saya mendaftarkan ulang kontak Cleaned?**
Tidak. Anda tidak bisa mengubah kontak Cleaned kembali menjadi subscribed secara manual dari dashboard Mailchimp. Pelanggan harus mengisi ulang datanya lewat formulir pendaftaran yang di-host Mailchimp atau formulir yang dipasang di situs Anda untuk opt-in kembali.

**Berapa kali soft bounce sebelum Mailchimp menandai kontak sebagai Cleaned?**
Mailchimp menandai alamat sebagai Cleaned setelah 7 soft bounce jika kontak itu tidak punya catatan aktivitas pelanggan sebelumnya. Jika kontak punya aktivitas pelanggan sebelumnya, Mailchimp mengizinkan sampai 15 soft bounce sebelum mengubah alamat itu menjadi hard bounce dan menandainya Cleaned.

**Haruskah saya menghapus kontak Cleaned?**
Tidak. Mailchimp menyarankan untuk mengarsipkan kontak Cleaned, bukan menghapusnya. Pengarsipan menyimpan catatan di audience Anda. Menurut Mailchimp, ini membantu Anda agar tidak mengirim lagi ke alamat itu dan terkena bounce. Mailchimp menyarankan penghapusan kontak hanya untuk keperluan GDPR.

**Kenapa Mailchimp menandai Cleaned alamat yang saya tahu valid?**
Alamat email yang valid bisa terkena hard bounce jika filter spam atau firewall perusahaan memblokir server Mailchimp dengan respons SMTP seperti Denied atau Blocked. Jika penerima meminta administrator jaringannya memasukkan alamat IP pengiriman Mailchimp ke allowlist, penerima itu bisa bergabung kembali ke audience Anda lewat formulir pendaftaran.

Tanda Cleaned adalah cara Mailchimp melindungi reputasi pengirim Anda setelah masalah terjadi. Verifikasi lebih dulu mencegah bounce terjadi sama sekali. Periksa daftar pelanggan Anda dengan [Giggal.ai](/email-list-cleaning) (dalam bahasa Inggris) sebelum pengiriman berikutnya, untuk menemukan alamat tidak valid sebelum Mailchimp menandainya Cleaned.
