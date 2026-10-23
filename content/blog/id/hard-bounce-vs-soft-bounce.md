---
title: "Hard Bounce vs Soft Bounce: Arti Masing-Masing dan Yang Perlu Dilakukan"
seoTitle: "Hard Bounce vs Soft Bounce: Perbedaan dan Cara Menanganinya"
description: "Perbedaan hard bounce dan soft bounce dalam bahasa sederhana: cara membaca kode bounce, kenapa alat memberi label berbeda, dan bounce rate yang aman."
slug: hard-bounce-vs-soft-bounce
date: 2026-10-23
updated: 2026-10-23
keyword: perbedaan hard bounce dan soft bounce
image: /blog/covers/id/hard-bounce-vs-soft-bounce.webp
imageAlt: Hard bounce vs soft bounce, angka 5 di kode berarti permanen dan angka 4 berarti coba lagi
cta: Temukan hard bounce sebelum Anda mengirim
---

Hard bounce adalah kegagalan permanen. Alamat email tidak ada, domain tidak ada, atau server penerima sudah memblokir Anda. Jika Anda mengirim lagi, email akan bounce lagi.

Soft bounce adalah kegagalan sementara. Alamatnya nyata, tetapi ada sesuatu yang menghentikan pengiriman untuk saat ini. Kotak masuk penuh, server sedang sibuk, atau server meminta Anda mencoba lagi nanti. Jika Anda mengirim lagi, email sering kali berhasil terkirim.

Itulah definisinya. Ada tiga hal lagi yang perlu Anda ketahui, dan ketiganya lebih penting daripada definisi tadi:

- Setiap alat pengiriman memakai aturan yang berbeda. Bounce yang sama bisa dihitung hard di satu alat dan soft di alat lain.
- Alamat yang benar dan aktif tetap bisa mengalami hard bounce. Ini terjadi saat pengaturan email Anda yang salah, bukan alamatnya.
- Bounce rate yang membuat akun Anda ditangguhkan tidak selalu sama dengan angka di laporan kampanye Anda.

Panduan ini membahas ketiganya.

## Hard bounce vs soft bounce: perbedaannya

| | Hard bounce | Soft bounce |
|---|---|---|
| Artinya | Permanen. Email tidak akan terkirim | Sementara. Email mungkin terkirim pada percobaan berikutnya |
| Kode di pesan bounce | Diawali 5 (550, 5.1.1, 5.7.1) | Diawali 4 (421, 450, 4.2.2) |
| Penyebab umum | Alamat tidak ada, domain tidak ada, pengirim diblokir | Kotak masuk penuh, server sibuk, terlalu banyak email sekaligus |
| Yang dilakukan alat pengiriman Anda | Berhenti mengirim ke alamat itu, biasanya langsung | Mencoba lagi selama beberapa waktu, sering sampai 72 jam |
| Yang perlu Anda lakukan | Hapus alamatnya. Jangan kirim lagi | Tunggu. Hapus hanya jika terus bounce |
| Dampak ke reputasi Anda | Tinggi. Banyak hard bounce memberi tahu penyedia bahwa daftar Anda buruk | Rendah untuk satu bounce. Bertambah jika alamat yang sama terus bounce |

## Apa itu hard bounce?

Hard bounce berarti server penerima menolak email Anda secara permanen. Mencoba lagi tidak akan membantu.

Standar email, RFC 5321, menyebut ini kegagalan permanen. Kalimat persisnya adalah pengirim "should not retry" (sebaiknya tidak mencoba lagi) permintaan yang sama.

Ada dua jenis hard bounce. Keduanya terlihat sama di laporan Anda, tetapi cara memperbaikinya berbeda.

**Jenis pertama: alamatnya buruk.** Mailbox-nya tidak ada. Atau domainnya tidak ada. Atau alamatnya salah eja. Daftar yang sudah diverifikasi seharusnya tidak pernah menghasilkan bounce seperti ini. Berikut contohnya:

- Gmail menulis: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft menulis: `5.1.1 Bad destination mailbox address`
- Microsoft juga menulis: `5.4.1 Recipient address rejected: Access denied`. Dokumentasi Microsoft sendiri menjelaskan kode ini sebagai "the recipient's address doesn't exist" (alamat penerima tidak ada).

Alamat yang ditutup saat seseorang keluar dari pekerjaannya juga termasuk kelompok ini.

**Jenis kedua: Anda diblokir.** Alamatnya nyata. Namun server penerima tidak mau menerima email dari Anda. Bounce seperti ini punya kode yang diawali 5.7:

- [550 5.7.1](/blog/550-5-7-1-error) berarti blokir karena kebijakan.
- `550 5.7.26` berarti Gmail menolak email Anda karena domain Anda tidak diautentikasi.
- `550 5.7.30` berarti email Anda gagal dalam pemeriksaan DKIM.

Alat pengiriman Anda menghitung ini sebagai hard bounce, karena kodenya diawali 5. Namun alamatnya baik-baik saja. Masalahnya ada di sisi Anda. Kami menjelaskan hal ini lebih lanjut di bawah, karena sejak 2025 inilah penyebab hard bounce yang paling cepat bertambah pada daftar yang bersih.

## Apa itu soft bounce?

Soft bounce berarti server penerima menjawab "jangan sekarang". RFC 5321 menyebut ini kegagalan sementara. Kalimatnya: "the error condition is temporary and the action may be requested again" (kondisi error ini sementara dan tindakan boleh diminta lagi). Alat pengiriman Anda membaca jawaban itu dan mencoba lagi nanti.

Berikut penyebab yang umum, beserta kode yang akan Anda lihat:

- **Kotak masuk penuh.** Gmail menulis `452 4.2.2 The recipient's inbox is out of storage space`. Pemiliknya bisa menghapus beberapa email untuk memberi ruang.
- **Terlalu banyak email terlalu cepat.** Gmail menulis `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Atau `421 4.7.28` saat Gmail melihat terlalu banyak email dari alamat IP Anda. Microsoft menulis `4.7.500` sampai `4.7.699 Access denied, please try again later` selagi memeriksa aktivitas Anda.
- **Greylisting.** Sebagian server, dan banyak secure email gateway, menolak email pertama dari pengirim yang belum dikenal. Lalu server menerimanya pada percobaan kedua. Waktu tunggunya biasanya sekitar 15 menit.
- **Server mati.** Kode `421` berarti server tidak tersedia. Kode `4.4.1` atau `4.4.2` berarti koneksi gagal atau timeout.
- **Email kedaluwarsa.** Kode `4.4.7` berarti server Anda terus mencoba, lalu menyerah. RFC 5321 menyebutkan server sebaiknya terus mencoba selama sekitar empat sampai lima hari.

Satu soft bounce itu normal. Soft bounce yang berulang adalah masalah. Jika sebuah kotak masuk selalu "penuh" di setiap pengiriman selama enam minggu, kotak masuk itu sebenarnya tidak penuh. Kotak masuk itu sudah ditinggalkan. Lama-kelamaan, setiap alat pengiriman akan memperlakukannya seperti itu.

## Cara membaca kode di pesan bounce

Setiap pesan bounce punya kode. Setelah Anda bisa membacanya, Anda tidak perlu bergantung pada label dari siapa pun. Anda bisa melihat sendiri apa yang terjadi.

Ada dua kode di setiap pesan.

**Kode pertama terdiri dari tiga angka**, seperti 550 atau 421. Hanya angka pertama yang penting di sini. Angka 4 berarti sementara. Angka 5 berarti permanen.

**Kode kedua terdiri dari tiga angka yang dipisahkan titik**, seperti 5.1.1. Angka pertama mengulang aturan yang sama: 4 berarti sementara, 5 berarti permanen. Angka kedua dan ketiga memberi tahu alasannya:

- `.1.1` berarti mailbox tidak ada (bagian sebelum tanda @ salah).
- `.1.2` berarti domain tidak ada (bagian sesudah tanda @ salah).
- `.2.2` berarti kotak masuk penuh.
- `.7.1` berarti server menolak Anda karena kebijakan.

![Cara membaca kode bounce: angka pertama menunjukkan hard atau soft, kode lengkap menunjukkan alasannya, dan tindakan mengikuti keduanya](/blog/fig-id-bounce-code-reading.webp)
Baca angka pertama untuk mengetahui jenisnya. Baca kode lengkapnya untuk mengetahui alasannya. Lalu bertindak berdasarkan alasan itu.

Tabel di bawah ini berisi kode yang benar-benar akan Anda temui. Teks pesannya disalin dari dokumentasi Gmail dan Microsoft sendiri.

| Kode | Muncul di | Artinya | Jenis | Yang perlu dilakukan |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, sebagian besar server | Mailbox tidak ada | Hard | Hapus alamatnya |
| 5.1.2 | Server mana pun | Domain tidak ada | Hard | Hapus alamatnya |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | Alamat tidak ada | Hard | Hapus alamatnya |
| 550 5.2.1 | Gmail | Akun tidak aktif | Hard | Hapus alamatnya |
| 552 5.2.2 | Gmail | Kotak masuk penuh dan akun tidak aktif | Hard | Hapus alamatnya |
| 452 4.2.2 | Gmail | Kotak masuk penuh | Soft | Tunggu. Hapus jika terus terjadi |
| 450 4.2.1 | Gmail | Orang itu menerima terlalu banyak email | Soft | Tunggu |
| 421 4.7.28 | Gmail | Terlalu banyak email dari IP Anda | Soft | Kirim lebih lambat. Cek daftar Anda |
| 550 5.7.28 | Gmail | Terlalu banyak email tidak diinginkan dari IP Anda | Hard | Berhenti mengirim. Perbaiki daftar dan volume Anda |
| 550 5.7.1 | Gmail, Microsoft | Diblokir karena kebijakan | Hard, tetapi alamatnya baik-baik saja | Cek autentikasi dan reputasi Anda |
| 550 5.7.26 | Gmail | Domain Anda tidak diautentikasi | Hard, tetapi alamatnya baik-baik saja | Pasang SPF dan DKIM |
| 550 5.7.30 | Gmail | Email Anda gagal DKIM | Hard, tetapi alamatnya baik-baik saja | Perbaiki pengaturan DKIM Anda |
| 5.7.23 | Microsoft | Email Anda gagal SPF | Hard, tetapi alamatnya baik-baik saja | Perbaiki SPF record Anda |
| 5.7.606 sampai 5.7.649 | Microsoft | IP pengirim Anda diblokir | Hard, tetapi alamatnya baik-baik saja | Minta Microsoft mencabut blokir, lalu perbaiki penyebabnya |
| 4.7.500 sampai 4.7.699 | Microsoft | Aktivitas mencurigakan, diblokir sementara | Soft | Tunggu. Blokir hilang dengan sendirinya jika Anda pengirim yang sah |
| 4.4.7 | Server mana pun | Email kedaluwarsa setelah dicoba berhari-hari | Soft, tetapi server sudah menyerah | Hapus alamatnya jika terjadi berulang kali |

Lihat kolom terakhir. Dua kode bisa sama-sama hard bounce tetapi butuh tindakan yang berlawanan. Kode `5.1.1` berarti hapus alamatnya. Kode `5.7.26` berarti simpan alamatnya dan perbaiki DNS Anda.

## Kenapa bounce yang sama bisa hard di satu alat dan soft di alat lain

Orang sering membandingkan bounce rate di berbagai alat dan menjadi bingung. Berikut alasannya.

Server penerima mengirim sebuah kode. Hanya itu yang dilakukannya. Alat pengiriman Anda lalu memutuskan apa yang dilakukan dengan kode itu. Setiap alat punya aturan sendiri, dan aturannya berbeda-beda. Panduan Twilio sendiri menyatakan: "not all ISPs adhere to that code consistently" (tidak semua ISP mematuhi kode itu secara konsisten).

Berikut empat alat populer dan aturannya:

| Alat | Yang dilakukan dengan soft bounce | Kapan soft bounce berubah menjadi hard bounce |
|---|---|---|
| Mailchimp | Mencoba lagi dan menyimpan kontak | Setelah 7 soft bounce jika kontak tidak pernah membuka email apa pun. Setelah 15 jika kontak pernah membuka email |
| HubSpot | Menyebutnya "pending" dan mencoba sampai 72 jam. Lalu mencatat soft bounce | Tidak otomatis. Namun HubSpot memasukkan "mailbox full" ke kelompok hard bounce, bukan soft |
| SendGrid | Mencoba lagi sampai 72 jam | Setelah 72 jam, SendGrid berhenti mencoba. Hard bounce masuk ke daftar blokir |
| Amazon SES | Mencoba lagi selama beberapa waktu, lalu memberi tahu bahwa ia berhenti | Tidak pernah otomatis. Hanya hard bounce yang dihitung dalam bounce rate Anda. Balasan otomatis sama sekali tidak dihitung |

![Empat platform pengiriman dan aturan masing-masing tentang kapan soft bounce menjadi hard bounce](/blog/fig-id-bounce-rules-by-platform.webp)
Kode sama, empat aturan berbeda. Jika Anda memindahkan daftar dari Mailchimp ke HubSpot, jumlah hard bounce Anda berubah, walaupun alamatnya tidak berubah.

Jadi kotak masuk penuh adalah soft bounce di Gmail. Di HubSpot, itu hard bounce. Di Amazon SES, itu soft bounce yang tidak pernah menjadi hard. Jika bounce rate Anda berubah setelah berganti alat, cek aturannya sebelum menyalahkan daftar Anda.

Cara mudahnya adalah berhenti memercayai label dan membaca kodenya. Setiap alat mengizinkan Anda mengekspor pesan bounce. Kode di dalamnya sama, apa pun alat yang mengumpulkannya.

## Berapa hard bounce rate yang bisa diterima?

Batasnya ditentukan oleh perusahaan yang mengirimkan email Anda. Sebagian besar tidak memublikasikannya. Amazon SES memublikasikannya, dan angkanya adalah panduan yang baik tentang cara berpikir penyedia email.

| Hard bounce rate | Yang dilakukan Amazon SES |
|---|---|
| Di bawah 2% | Level yang disarankan SES agar Anda tetap di bawahnya "for best results" (untuk hasil terbaik) |
| 5% atau lebih | Akun Anda ditinjau |
| 10% atau lebih | Pengiriman Anda bisa dihentikan sementara sampai Anda memperbaikinya |

Ada dua detail yang penting. SES hanya menghitung hard bounce. Soft bounce dan bounce karena IP diblokir tidak dihitung. SES juga tidak memakai jangka waktu yang tetap. SES melihat jumlah pengiriman Anda yang biasa, sehingga pengirim kecil dinilai dengan cara yang sama seperti pengirim besar.

Keluhan spam biasanya muncul bersama bounce. Pedoman pengirim Google meminta Anda menjaga tingkat keluhan di bawah 0,10 persen dan tidak pernah membiarkannya mencapai 0,30 persen. Amazon SES meninjau akun pada 0,1 persen dan bisa menghentikan sementara akun pada 0,5 persen. Daftar dengan hard bounce di atas 2 persen biasanya juga mendapat keluhan. Keduanya berasal dari penyebab yang sama: orang yang tidak meminta email Anda, dan alamat yang tidak pernah dicek.

Artikel [patokan bounce rate email](/blog/how-to-reduce-email-bounce-rate) merinci batas aman berdasarkan jenis email dan asal daftar.

## Apakah hard bounce harus dihapus dari daftar?

Ya. Segera.

Kalimat persis Amazon adalah: "you should immediately remove the recipient's email address from your mailing list" (Anda harus segera menghapus alamat email penerima dari daftar email Anda). Halaman yang sama memperingatkan bahwa jika Anda terus mengirim ke alamat yang hard bounce, pengiriman Anda bisa dihentikan sementara. Mailchimp bahkan tidak memberi pilihan. Alamat yang hard bounce "cleaned from your audience automatically and immediately" (dihapus dari audiens Anda secara otomatis dan langsung) dan tidak pernah dikirimi email lagi.

Jangan mencoba lagi. Jangan menyimpannya untuk kampanye berikutnya dengan harapan mailbox itu aktif kembali. Alamat `5.1.1` yang bounce bulan lalu akan bounce lagi bulan depan. Setiap percobaan tambahan memberi tahu penyedia mailbox bahwa Anda mengirim ke alamat yang tidak Anda kenal.

Ada satu pengecualian. Jika kodenya `5.7.26`, `5.7.30`, `5.7.23`, atau kode IP diblokir seperti `5.7.6xx`, masalahnya bukan di alamat. Menghapus alamat itu tidak memperbaiki apa pun. Perbaiki autentikasi atau reputasi Anda. Lalu kirim lagi ke alamat yang sama.

Soft bounce kebalikannya. Biarkan saja. Alat pengiriman Anda akan mencoba lagi dengan sendirinya. Jika alat Anda tidak punya aturan untuk bounce yang berulang, buatlah aturannya. Alamat yang soft bounce pada tiga pengiriman berturut-turut dalam satu bulan tidak akan aktif kembali. Aturan tujuh kali dari Mailchimp adalah batas yang aman untuk siapa saja.

## Kenapa alamat yang benar bisa hard bounce?

Karena hard bounce mengukur apakah email diterima. Hard bounce tidak mengukur apakah alamatnya ada. Ada empat hal yang menyebabkan bounce 5xx pada mailbox yang nyata dan aktif.

**Email Anda tidak diautentikasi.** Pada 5 Mei 2025, Microsoft mulai mewajibkan SPF, DKIM, dan DMARC untuk setiap domain yang mengirim lebih dari 5.000 email per hari ke alamat Outlook.com, Hotmail, dan Live. Awalnya Microsoft memindahkan email yang gagal ke folder junk. Lalu Microsoft mulai menolaknya dengan `550 5.7.515 Access denied, sending domain does not meet the required authentication level`. Google mewajibkan tiga record yang sama dari pengirim massal. Kode Gmail `550 5.7.26` dan `550 5.7.30` adalah tampilan record yang hilang dari sisi Anda. Semua kode ini diawali 5. Jadi kode-kode ini masuk ke kolom hard bounce Anda, walaupun alamatnya sebenarnya akan menerima email itu.

**Perusahaan memblokir alamat yang tidak dikenal sejak awal.** Microsoft Exchange bisa diatur untuk menolak alamat apa pun yang tidak ada di direktori perusahaan. Exchange melakukannya dengan `5.4.1 Recipient address rejected: Access denied`. Biasanya, itu memang hard bounce yang sebenarnya. Kadang itu karyawan baru yang mailbox-nya belum ditambahkan. Karena itu, alat verifikasi yang mengecek mailbox-nya langsung memberi jawaban yang lebih baik daripada bounce.

**Ada secure email gateway di depan mailbox.** Banyak perusahaan mengarahkan semua email masuk lewat [secure email gateway](/blog/what-is-a-secure-email-gateway) seperti Proofpoint, Mimecast, atau Barracuda. Gateway menjawab untuk seluruh domain. Gateway memindai setiap email dan menolak apa pun yang melanggar salah satu aturannya, biasanya dengan kode kebijakan `5.7.1`. Itu hard bounce pada mailbox yang sebenarnya ada. Gateway juga menyebabkan bounce yang terlambat. Gateway menerima email di awal tanpa mengecek apakah mailbox-nya ada. Bounce datang beberapa menit atau beberapa jam kemudian, setelah server email di balik gateway tidak menemukan mailbox itu. Laporan Anda menunjukkan hard bounce, tetapi bounce itu datang setelah pengiriman, bukan saat pengiriman.

**Domainnya catch-all.** Ini masalah sebaliknya. [Domain catch-all](/blog/what-is-a-catch-all-email-address) menerima email untuk setiap alamat, nyata atau tidak. Jadi domain ini tidak pernah menjawab `5.1.1` di awal. Email diterima, lalu bounce kemudian, atau dibuang tanpa pemberitahuan. Sekitar 30 persen daftar B2B berada di domain seperti ini. Dari sinilah hard bounce yang tidak terduga berasal.

Jika Anda ingin tahu [kenapa email bounce](/blog/why-cold-emails-bounce) khususnya pada cold outreach, urutan penyebabnya berbeda. Di sana, umur daftar adalah penyebab kerusakan terbesar.

## Cara mencegah hard bounce sebelum mengirim

Hampir setiap `5.1.1` di laporan kampanye sebenarnya bisa dihindari. Mailbox-nya sudah tidak ada sebelum Anda menekan tombol kirim. Verifikasi mengajukan pertanyaan yang sama kepada server penerima seperti yang akan dilakukan bounce, tetapi sebelum kampanye, bukan sesudahnya.

[Email address checker](/email-checker) menjalankan tiga pemeriksaan secara berurutan:

- **Sintaks.** Menangkap kesalahan seperti `name@gmail..com` sebelum Anda membuang satu pengiriman.
- **Domain.** Menangkap salah ketik seperti `gmial.com` dan domain yang sudah kedaluwarsa.
- **Mailbox.** Membuka koneksi ke server penerima dan bertanya apakah server itu akan menerima email untuk alamat yang persis itu. Jika jawabannya `5.1.1`, itu bounce yang sama dengan yang akan Anda dapat dari kampanye. Namun tidak ada reputasi yang hilang, karena tidak ada email yang dikirim.

Verifikasi standar berhenti bekerja di satu tempat. Di domain catch-all, server menjawab ya untuk setiap alamat. Jadi hasil pemeriksaan kembali sebagai "berisiko" atau "accept-all", dan Anda harus menebak. Giggal.ai dibuat untuk mengubah bagian daftar itu menjadi jawaban valid atau tidak valid yang nyata. Halaman [verifikasi catch-all](/catch-all-verification) menjelaskan caranya.

Gateway menimbulkan masalah yang sama. Gateway menerima pertanyaan alat verifikasi untuk setiap alamat, jadi pemeriksaan standar kembali sebagai "tidak diketahui" di sana. Giggal.ai mengecek alamat-alamat ini dengan cara lain. Artikel tentang [verifikasi email di balik secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways) menjelaskan apa yang dilakukan gateway dan bagaimana pemeriksaan bisa melewatinya.

Untuk formulir pendaftaran, tambahkan panggilan [verifikasi real time](/public/docs) saat formulir dikirim. Alamat yang salah ketik akan tertangkap selagi orang itu masih ada di halaman. Inilah satu-satunya langkah yang mengurangi bounce pada daftar yang belum Anda buat.

Lalu tangani dua jenis alamat yang lolos verifikasi tetapi tetap merugikan Anda. Alamat email berbasis peran seperti info@ dan support@ memang ada, jadi lolos verifikasi. Namun tidak ada orang yang memilikinya secara pribadi, dan alamat ini mendapat lebih banyak keluhan. Email sekali pakai lolos selama masih ada, lalu hilang kemudian. Alat verifikasi yang baik menandai keduanya. Khusus untuk daftar [cold email](/blog/good-bounce-rate-for-cold-email), hapus keduanya sebelum pengiriman pertama.

## Pertanyaan yang sering diajukan

**Apa perbedaan hard bounce rate dan soft bounce rate?**
Masing-masing adalah jumlah bounce jenis itu dibagi jumlah email yang Anda kirim. Hard bounce rate adalah angka yang bisa membuat Anda bermasalah, karena angka ini menunjukkan kualitas daftar Anda. Amazon SES, misalnya, hanya menghitung hard bounce saat memutuskan untuk meninjau atau menghentikan sementara sebuah akun. Soft bounce rate lebih banyak menunjukkan kecepatan pengiriman, volume, dan reputasi Anda. Baca angka ini secara terpisah.

**Apakah email yang bounce harus dihapus?**
Hapus hard bounce dengan kode alamat segera: `5.1.1`, `5.1.2`, `5.2.1`, dan sejenisnya. Simpan hard bounce dengan kode autentikasi, yaitu `5.7.26`, `5.7.30`, dan `5.7.23`, lalu perbaiki autentikasi Anda. Simpan soft bounce dan biarkan proses coba ulang berjalan. Hapus alamat yang mengalami soft bounce beberapa kali berturut-turut.

**Apakah soft bounce bisa menjadi hard bounce?**
Bisa, dengan dua cara. Server penerima bisa mengubah jawabannya. Gmail melaporkan kotak masuk penuh sebagai `452 4.2.2` selama akun masih aktif, dan sebagai `552 5.2.2` setelah akun menjadi tidak aktif. Atau alat pengiriman Anda bisa mengubah labelnya. Mailchimp mengubah alamat menjadi hard bounce setelah 7 soft bounce tanpa aktivitas, atau 15 dengan aktivitas.

**Apakah soft bounce merusak reputasi pengirim?**
Satu soft bounce tidak. Soft bounce yang terus-menerus, iya. Penyedia mailbox melihat Anda mengirim berulang kali ke kotak masuk yang tidak bisa menerima email. Soft bounce rate yang tinggi juga sering menjadi peringatan tersendiri. Kode seperti `421 4.7.28` adalah cara penyedia meminta Anda secara langsung untuk memperlambat pengiriman.

**Kenapa email saya hard bounce padahal alamatnya benar?**
Hampir selalu karena autentikasi. Gmail dan Outlook.com sekarang menolak email massal yang tidak punya SPF, DKIM, dan DMARC. Penolakan itu memakai kode 5xx, jadi alat Anda mencatatnya sebagai hard bounce. Cek kodenya. Jika diawali `5.7`, masalahnya bukan di alamat.

Laporan bounce hanya berguna jika Anda bisa membacanya. Baca angka pertama. Lalu baca alasannya. Lalu bertindak berdasarkan alasan itu. Alamat yang akan bounce dengan `5.1.1` adalah bagian yang mudah, karena Anda bisa menemukannya sebelum mengirim. Jalankan daftar Anda di [Giggal.ai](/) lebih dulu. Kolom hard bounce di laporan berikutnya akan sebagian besar berisi hal-hal yang memang tidak bisa Anda ketahui sebelumnya.
