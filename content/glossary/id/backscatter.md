---
title: Backscatter
description: Apa itu backscatter, kenapa Anda menerima pesan bounce untuk email yang tidak Anda kirim, apakah akun Anda diretas, dan cara menghentikannya di domain Anda.
slug: backscatter
date: 2026-10-23
updated: 2026-10-23
keyword: backscatter email
short: Backscatter adalah pesan bounce yang Anda terima untuk email yang tidak pernah Anda kirim. Seorang spammer memasukkan alamat Anda ke kolom pengirim di email mereka. Saat email itu gagal, pesan bounce kembali kepada Anda.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Jaga bounce Anda sendiri tetap rendah dengan daftar yang bersih
---

## Apa itu backscatter?

Backscatter adalah pesan bounce yang Anda terima untuk email yang tidak pernah Anda kirim.

Awalnya adalah spam. Seorang spammer mengirim ribuan email dan mengetik alamat Anda di kolom pengirim. Banyak email itu dikirim ke alamat yang tidak ada. Server penerima mengirim pesan bounce kembali ke alamat pengirim. Alamat itu milik Anda, jadi pesan bounce masuk ke kotak masuk Anda.

Pesan bounce adalah pemberitahuan otomatis dari server saat email tidak bisa dikirim. Nama resminya adalah [laporan gagal kirim](/glossary/ndr) (non-delivery report atau NDR).

## Contoh sederhana

Begini cara backscatter sampai ke sebuah usaha kecil.

1. **Lena punya toko bunga.** Alamat emailnya hello@flowers.example.
2. **Seorang spammer memakai alamatnya.** Spammer itu mengirim 10.000 email palsu. Setiap email mengaku dikirim dari hello@flowers.example.
3. **Banyak email gagal.** Sekitar sepertiganya dikirim ke alamat yang tidak ada.
4. **Sebagian server menerima dulu dan memeriksa belakangan.** Server ini menerima email, lalu baru tahu bahwa kotak masuknya tidak ada.
5. **Pesan bounce dikirim ke Lena.** Server itu mengirim pemberitahuan bounce ke hello@flowers.example.
6. **Kotak masuk Lena penuh.** Suatu pagi ia menemukan ratusan pesan "Undeliverable" untuk email yang tidak pernah ia tulis.

Angka ini hanya contoh. Polanya sering terjadi.

## Apakah akun saya diretas?

Biasanya tidak. Mengirim email dengan alamat pengirim palsu tidak memerlukan akses ke akun Anda. Ini seperti menulis alamat pengirim orang lain di sebuah amplop. Tidak ada yang perlu kunci rumah orang itu untuk melakukannya.

Periksa folder Terkirim Anda. Jika email itu tidak ada di sana, akun Anda tidak mengirimnya. Jika email itu ada di sana, ganti kata sandi Anda dan aktifkan verifikasi dua langkah.

## Kenapa ini terjadi

Backscatter terjadi karena sebagian server menerima email dulu dan memeriksa alamatnya belakangan. Jika pemeriksaan gagal, server mengirim bounce ke alamat pengirim. Server itu tidak bisa tahu bahwa alamat pengirimnya palsu.

Server yang dikelola dengan baik memeriksa alamat selagi server lain masih terhubung. Jika alamatnya tidak ada, server langsung menolak email itu. Tidak ada pesan bounce yang dibuat, jadi tidak ada backscatter yang sampai ke siapa pun.

## Cara menghentikannya di domain Anda

Anda tidak bisa mencegah spammer mengetik alamat Anda. Anda bisa membuat server penerima menolak email palsu mereka. Caranya dengan tiga record di domain Anda.

| Record | Fungsinya |
|---|---|
| [SPF](/glossary/spf) | Mencantumkan server yang boleh mengirim email atas nama domain Anda |
| [DKIM](/glossary/dkim) | Menambahkan tanda tangan yang membuktikan email benar-benar dari Anda |
| [DMARC](/glossary/dmarc) | Memberi tahu server penerima apa yang harus dilakukan dengan email yang gagal pemeriksaan itu |

Mulai DMARC dengan `p=none` dan baca laporannya. Jika hanya layanan Anda sendiri yang lolos, ubah ke `p=quarantine`, lalu ke `p=reject`. Dengan `p=reject`, server menolak email palsu itu, bukan memantulkannya kepada Anda.

Sampai saat itu, Anda bisa menyaring pesan bounce ke sebuah folder. Jangan membalasnya.

## Kenapa pemilik server perlu peduli

Jika Anda mengelola server email, periksa cara server menangani alamat yang tidak dikenal. Server yang menerima email lalu memantulkannya belakangan akan mengirim backscatter ke orang yang tidak bersalah. Sebagian blocklist mencantumkan server seperti ini, misalnya daftar di backscatterer.org. Jika server Anda masuk blocklist, email Anda sendiri bisa gagal terkirim.

## Bagaimana alat verifikasi membantu

[Verifikasi email](/) tidak menghentikan backscatter, karena Anda tidak mengirim email itu. Verifikasi membantu dengan bounce yang memang Anda sebabkan. Hapus alamat mati dari daftar Anda sebelum mengirim. Dengan begitu, setiap bounce di kotak masuk Anda punya penjelasan.
