---
title: "Kenapa Email Bounce? Penyebab dan Langkah Selanjutnya"
description: Kenapa email bounce, beda hard dan soft bounce, penyebab dari yang paling umum pada cold email, arti email yang bounce, dan apa yang perlu dilakukan.
slug: kenapa-cold-email-bounce
date: 2026-10-23
updated: 2026-10-23
keyword: kenapa email bounce
image: /blog/covers/id/kenapa-cold-email-bounce.webp
imageAlt: "Kode bounce SMTP: 550 5.1.1 hard, 4.x.x soft dan 5.7.1 diblokir"
cta: Turunkan bounce rate Anda sebelum pengiriman berikutnya
---

Cold email bounce saat server penerima menolak pesan dan mengembalikannya, bukan mengirimkannya ke kotak masuk. Cold email adalah email pertama ke orang yang belum pernah berhubungan dengan Anda. Jika Anda baru menjalankan kampanye dan ingin tahu kenapa cold email lebih sering bounce daripada email biasa, sebagian besar penyebabnya ada dua. Anda menghubungi orang yang tidak pernah meminta kabar dari Anda, jadi daftarnya lebih dingin dan kurang akurat. Anda juga mengirim dari domain yang belum punya riwayat dengan server penerima. Alasan-alasan lain ada di bawah dua hal itu.

## Apa itu email yang bounce?

Email yang bounce adalah pesan yang ditolak server email penerima dan dikirim balik dengan kode alasan, bukan dimasukkan ke kotak masuk. Balasannya datang dari server, bukan dari orangnya. Balasan itu tiba sebagai non-delivery report (NDR) di kotak masuk pengirim atau di log bounce alat pengiriman. Kode di laporan itulah bagian yang berguna. Kode 5xx adalah penolakan permanen, sedangkan kode 4xx adalah penolakan sementara. Pertanyaan tentang arti email bounce hampir selalu terjawab dengan membaca kode itu.

## Hard bounce dan soft bounce bukan masalah yang sama

Hal pertama yang perlu diperiksa adalah jenis bounce yang Anda dapat, karena jenisnya menentukan langkah Anda berikutnya.

Hard bounce bersifat permanen. Alamatnya tidak ada, domainnya tidak ada, atau server langsung menolaknya. Pesan yang terkena hard bounce tidak akan pernah terkirim, dan alamat itu harus segera dihapus dari daftar Anda. Soft bounce bersifat sementara. Kotak masuknya penuh, servernya sibuk, atau pesan ditahan untuk diperiksa lebih teliti. Soft bounce kadang selesai dengan sendirinya, dan alat pengiriman biasanya mencoba ulang untuk Anda.

Perbedaan ini penting karena menyangkut reputasi. Penyedia layanan email memperhatikan seberapa sering Anda mengirim ke alamat yang terkena hard bounce. Pola seperti itu menandai Anda sebagai pengirim yang memakai daftar buruk. Satu alamat mati hanyalah gangguan kecil. Satu kampanye yang penuh alamat mati adalah tanda bahaya.

## Penyebab umum, dari yang paling sering

Bounce biasanya berasal dari beberapa penyebab saja. Kira-kira dalam urutan kemunculannya pada kampanye cold email:

- Alamatnya sudah tidak ada. Orang berganti pekerjaan, dan kotak masuknya dihapus, sementara data kontaknya tetap ada di database yang Anda beli atau hasil scraping.
- Domainnya sendiri sudah hilang. Perusahaan kecil tutup, domainnya tidak lagi aktif, dan tidak ada server yang tersisa untuk menerima apa pun.
- Kotak masuknya penuh. Ini umum pada alamat yang tidak terurus atau alamat pribadi, dan biasanya berupa soft bounce.
- Server penerima menolak domain pengiriman Anda. Ini blokir karena reputasi atau kebijakan, bukan masalah pada penerima.
- Greylisting. Server untuk sementara menolak percobaan pertama dari pengirim yang tidak dikenal dan menerima percobaan ulang beberapa menit kemudian.
- Filter spam. Pesan ditolak karena isi atau kebijakan sebelum sampai ke kotak masuk.

Urutannya penting. Dua penyebab teratas, alamat mati dan domain mati, adalah yang bisa ditangkap oleh verifikasi. Keduanya juga paling umum pada daftar yang dibeli atau hasil scraping. Penyebab di bawahnya lebih berkaitan dengan waktu pengiriman dan pengaturan Anda sendiri daripada dengan alamatnya.

Anda sering bisa membaca penyebabnya langsung dari pesan bounce. Baris seperti 550 5.1.1 user unknown adalah hard bounce untuk alamat yang tidak ada. Baris 451 4.7.1 greylisted, try again later adalah penolakan soft yang sementara, dan biasanya selesai saat dicoba ulang. Dengan bisa membaca kodenya, Anda tidak perlu menebak alasannya.

## Apa arti "email bounce back"?

Bounce back adalah sebutan sehari-hari untuk hal yang sama: pesan Anda kembali kepada Anda. Kalimat di laporannya berbeda di setiap penyedia. Gmail menulis "Address not found", Microsoft 365 menulis "Recipient address rejected", dan server bergaya Postfix mengutip baris SMTP mentah, 550 5.1.1 User unknown. Ketiganya berarti kotak masuk itu tidak ada. Bounce back yang menyebut "mailbox full", "greylisted" atau "try again later" bersifat sementara. Biasanya bounce ini selesai saat alat pengiriman Anda mencoba ulang.

## Tidak setiap bounce adalah masalah daftar

Mudah untuk menganggap setiap bounce sebagai alamat yang buruk. Namun cukup banyak bounce pada cold email tidak ada hubungannya dengan daftar Anda. Jika domain pengiriman Anda baru dan belum melalui warm up, server akan mencurigainya dan menolak lebih banyak email Anda. Domain yang benar-benar baru dan mengirim beberapa ratus cold email di hari pertama akan mendapat bounce. Domain berusia enam bulan yang mengirim ke daftar yang sama tidak akan mendapatkannya. Jika record SPF, DKIM atau DMARC Anda tidak ada atau salah disetel, sebagian penyedia menolak Anda bahkan sebelum melihat penerimanya.

Kedua hal itu tidak bisa diperbaiki dengan membersihkan alamat. Itu masalah di sisi pengirim. Bounce-nya terlihat sama persis dengan bounce karena alamat mati, sampai Anda membaca alasan di baliknya.

## Apa yang dilakukan dengan email yang bounce?

Untuk satu alamat, baca kodenya. Kode 5.1.1 atau "user unknown" berarti kotak masuknya sudah tidak ada. Hapus alamat itu. Jika kontak itu penting, cari alamatnya yang sekarang, jangan mencoba ulang. Kode 4.x.x atau "mailbox full" berarti Anda perlu menunggu, karena alat Anda akan mencoba ulang sendiri. Kode 5.7.1 atau "blocked" menunjuk ke domain pengiriman Anda, bukan ke penerima. Jadi periksa SPF, DKIM dan DMARC sebelum mengirim apa pun lagi. Jika Anda tidak yakin apakah sebuah alamat masih aktif, periksa dengan [email checker](/email-checker) sebelum mengirim lagi.

## Apa yang dilakukan setelah kampanye terkena bounce

Mulailah dengan mengeluarkan setiap hard bounce dari daftar Anda dan jangan mengirim ke alamat itu lagi. Jangan mencoba ulang. Jangan juga membiarkannya di daftar untuk pengiriman berikutnya dengan harapan alamat itu pulih. Alamat itu tidak akan pulih, dan setiap percobaan ulang merugikan reputasi Anda. Biarkan soft bounce, karena alat pengiriman Anda menangani percobaan ulangnya.

Lalu lihat perbandingannya. Jika banyak alamat di daftar baru terkena bounce pada pengiriman pertama, daftar itu sudah buruk sebelum Anda memakainya. Solusinya ada di hulu, yaitu di tahap Anda mengumpulkan atau membeli alamat. Membersihkan setelah kejadian membantu pengiriman berikutnya, tetapi tidak menghapus kerugian reputasi dari pengiriman ini.

## Sumber daftar biasanya adalah penyebab sebenarnya

Asal sebuah daftar menentukan seberapa banyak daftar itu akan bounce. Daftar yang Anda ekspor dari CRM sendiri, berisi orang yang pernah membalas Anda, sangat jarang bounce. Daftar hasil scraping dari web atau yang dibeli dari broker jauh lebih sering bounce. Alamatnya dikumpulkan sekali dan tidak pernah diperiksa lagi, dan sebagian sudah mati sejak saat itu. Jika Anda tahu sebuah daftar dibeli atau hasil scraping, anggap sebagian isinya sudah usang. Periksa daftar itu dengan [alat untuk membersihkan daftar email](/email-list-cleaning) (dalam bahasa Inggris) sebelum pengiriman pertama, daripada mengetahuinya dari laporan bounce.

## Kapan verifikasi membantu, dan kapan tidak

Verifikasi menghapus alamat yang akan terkena hard bounce sebelum Anda mengirim. Itulah langkah dengan pengaruh terbesar pada daftar cold email. Memeriksa daftar lebih dulu mengubah tebakan menjadi angka yang pasti. Langkah ini layak dilakukan pada setiap daftar yang tidak Anda bangun sendiri.

Yang tidak bisa dilakukan verifikasi adalah memperbaiki DNS record yang salah disetel atau melakukan warm up pada domain yang baru. Itu masalah pengirim, dan membersihkan daftar tidak menyentuhnya sama sekali. Jadi pisahkan bounce Anda berdasarkan penyebabnya. Jika penyebabnya alamat yang sudah tidak ada, jalankan [verifikasi email](/) pada daftar Anda sebelum pengiriman berikutnya. Jika penyebabnya kegagalan autentikasi atau reputasi, yang perlu diperbaiki adalah domain Anda sendiri, bukan daftarnya.
