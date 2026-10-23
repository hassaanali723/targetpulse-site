---
title: Soft bounce
description: Apa itu soft bounce, penyebab umum beserta kodenya, berapa lama alat pengirim mencoba lagi, dan kapan Anda harus menghapus alamat yang terus soft bounce.
slug: soft-bounce
date: 2026-10-23
updated: 2026-10-23
keyword: soft bounce
short: Soft bounce adalah email yang kali ini tidak terkirim karena masalah sementara. Alamatnya nyata. Kotak masuk penuh, server sedang sibuk, atau server meminta Anda mencoba lagi nanti.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Lihat alamat mana yang nyata sebelum Anda mengirim
---

## Apa itu soft bounce?

Soft bounce adalah email yang kali ini tidak terkirim, tetapi mungkin terkirim nanti. Masalahnya bersifat sementara. Server penerima mengizinkan Anda mencoba lagi.

Pertama, beberapa istilah. Server adalah komputer yang menyala terus dan menangani email untuk sebuah domain. Domain adalah bagian alamat setelah tanda @, seperti example.com. Bounce adalah pesan otomatis yang memberi tahu bahwa sebuah email tidak terkirim.

Standar email RFC 5321 menyebut soft bounce sebagai balasan negatif sementara. Kode di pesan bounce diawali angka 4. Contoh: `452 4.2.2`. Kode yang diawali angka 5 adalah [hard bounce](/glossary/hard-bounce). Hard bounce bersifat permanen.

## Contoh sederhana

Berikut soft bounce biasa dari awal sampai akhir.

1. **Lucy mengirim invoice.** Lucy punya usaha jasa kebersihan. Pada hari Senin ia mengirim invoice ke klien di james@example.com.
2. **Kotak masuknya penuh.** James tidak menghapus email selama bertahun-tahun. Kotak masuknya tidak punya ruang lagi.
3. **Server menolaknya untuk sementara.** Server menjawab dengan kode yang diawali angka 4. Artinya "jangan sekarang, coba lagi nanti".
4. **Alat Lucy mencoba lagi.** Alat pengirimnya menunggu dan mengirim invoice itu lagi beberapa jam kemudian. Alat itu melakukannya sendiri.
5. **James membersihkan kotak masuknya.** Pada Selasa pagi, James menghapus email lama.
6. **Percobaan berikutnya berhasil.** Invoice sampai pada Selasa sore. Lucy tidak perlu melakukan apa pun.

Alamat itu sejak awal nyata. Hanya waktunya yang tidak tepat.

## Penyebab umum

Setiap penyebab punya kodenya sendiri. Berikut yang umum.

- **Kotak masuk penuh.** Gmail mengembalikan `452 4.2.2 The recipient's inbox is out of storage space`. Orang itu perlu menghapus sebagian email. Inilah yang terjadi pada James di atas.
- **Terlalu banyak email terlalu cepat.** Gmail mengembalikan `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail mengembalikan `421 4.7.28` saat terlalu banyak email datang dari alamat IP Anda. Alamat IP adalah angka yang mengenali server asal email Anda. Contoh: sebuah toko mengirim email diskon besar ke semua pelanggan Gmail-nya sekaligus, dan Gmail memintanya memperlambat pengiriman.
- **Greylisting.** Server menolak email pertama dari pengirim yang belum dikenalnya. Server menerima email yang sama pada percobaan kedua. Lihat [greylisting](/glossary/greylisting).
- **Server mati atau lambat.** Kode `421` berarti server tidak tersedia. Kode `4.4.1` atau `4.4.2` berarti koneksi gagal atau waktunya habis. Contoh: server email sebuah perusahaan kecil dimatikan selama satu jam untuk perbaikan.
- **Email kedaluwarsa.** Kode `4.4.7` berarti server Anda sudah mencoba lagi selama seluruh masa percobaan ulangnya, lalu berhenti. RFC 5321 menyatakan bahwa server sebaiknya mencoba lagi selama sekitar empat sampai lima hari.

## Apa yang dilakukan alat pengirim Anda

Alat pengirim Anda mencoba lagi soft bounce secara otomatis. Setiap alat punya aturannya sendiri.

| Alat | Yang dilakukannya |
|---|---|
| SendGrid | Mencoba lagi hingga 72 jam. |
| HubSpot | Menandai email sebagai tertunda hingga 72 jam. Setelah itu mencatat soft bounce. |
| Mailchimp | Mengubah alamat menjadi hard bounce setelah 7 soft bounce jika kontak tidak pernah membuka email. Jika kontak pernah membuka email sebelumnya, batasnya 15 soft bounce. |

Soft bounce yang sama bisa diberi label berbeda di alat yang berbeda. Baca kode di pesan bounce, bukan labelnya.

## Apa yang harus dilakukan dengan soft bounce

1. **Jangan lakukan apa pun dulu.** Biarkan alat pengirim Anda mencoba lagi. Satu soft bounce itu wajar.
2. **Pantau alamat itu di pengiriman berikutnya.** Catat apakah alamat itu bounce lagi minggu depan, dan minggu sesudahnya.
3. **Hapus jika terus bounce.** Hapus alamat yang mengalami soft bounce di beberapa pengiriman berturut-turut. Batas Mailchimp sebanyak 7 soft bounce adalah aturan yang aman.

**Contoh:** Anda mengirim newsletter mingguan. Satu alamat mengembalikan "kotak masuk penuh" setiap minggu selama enam minggu. Kotak masuk itu sebenarnya tidak penuh. Tidak ada yang memakainya. Hapus alamat itu.

## Bagaimana alat verifikasi menanganinya

Alat verifikasi terhubung ke server email sebelum Anda mengirim. Jika server menjawab dengan kode 4xx, yaitu kode apa pun yang diawali angka 4, alat verifikasi mencoba lagi. Jika jawabannya tetap sama, alat verifikasi menandai alamat itu sebagai tidak diketahui (unknown), bukan valid. Tidak diketahui berarti kotak masuknya ada, tetapi mungkin tidak sedang menerima email. Panduan [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) menjelaskan setiap kode dan apa yang harus dilakukan.

Sebuah [email verifier](/email-checker) menjalankan pengujian ini untuk satu alamat. Alat [verifikasi email massal](/bulk-email-verifier) menjalankannya untuk seluruh daftar. [Verifikasi email](/) tidak bisa mengosongkan kotak masuk yang penuh atau menyalakan server yang mati. Verifikasi memberi tahu alamat mana yang ada sebelum Anda mengirim, dan alamat mana yang perlu diperiksa ulang.
