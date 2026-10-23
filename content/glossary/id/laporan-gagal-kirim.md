---
title: Laporan gagal kirim (NDR)
description: Apa itu laporan gagal kirim, siapa yang mengirimnya, cara membaca kode dan bagian di dalamnya, dan apa yang harus dilakukan saat menerimanya. Dengan contoh.
slug: laporan-gagal-kirim
date: 2026-10-23
updated: 2026-10-23
keyword: laporan gagal kirim email
short: Laporan gagal kirim, atau NDR (non-delivery report), adalah email otomatis yang memberi tahu bahwa pesan yang Anda kirim tidak terkirim. Laporan ini menyebut alamat yang gagal dan memberi kode yang menjelaskan alasannya. Sebagian besar orang menyebutnya pesan bounce.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Hapus alamat yang akan mengirimkan NDR kepada Anda
---

## Apa itu laporan gagal kirim?

Laporan gagal kirim, atau NDR (non-delivery report), adalah email otomatis yang memberi tahu bahwa sebuah pesan tidak terkirim. Laporan ini datang beberapa detik atau beberapa jam setelah Anda mengirim.

Sebagian besar orang menyebutnya pesan bounce. Nama teknisnya dalam standar email adalah delivery status notification, atau DSN. Artinya pemberitahuan status pengiriman. Ketiga nama itu berarti sama.

NDR biasanya datang dari alamat seperti `MAILER-DAEMON@` atau `postmaster@`. Ini adalah pengirim otomatis di sebuah server email. Tidak ada yang menulis pesan ini secara manual. Sebuah program yang disebut [mailer-daemon](/glossary/mailer-daemon) yang membuatnya.

## Contoh sederhana

Begini cara NDR sampai kepada Anda.

1. **Ana mengirim invoice.** Ana bekerja di bagian pembukuan. Ia mengirim invoice ke klien di mark@oldfirm.example.
2. **Alamatnya sudah tidak ada.** Mark keluar dari perusahaan itu tahun lalu. Kotak masuknya sudah dihapus.
3. **Server menolak email.** Server email oldfirm.example tidak punya kotak masuk untuk Mark. Server menolak email itu.
4. **NDR datang.** Semenit kemudian, Ana menerima email berjudul "Undeliverable" atau "Delivery Status Notification (Failure)".
5. **Ana membaca kodenya.** Di dalamnya ia menemukan `550 5.1.1`. Kode ini berarti alamatnya tidak ada.
6. **Ana memperbaikinya.** Ia meminta alamat kontak baru kepada klien dan mengirim invoice ke sana.

NDR tidak menyebabkan masalah itu. NDR hanya memberi tahu Ana tentang masalahnya.

## Isi sebuah NDR

Sebagian besar NDR punya bagian yang sama, meskipun tampilannya berbeda di setiap program email.

| Bagian | Yang ditunjukkan |
|---|---|
| **Alamat yang gagal** | Alamat yang tidak bisa menerima email Anda |
| **Kode error** | Kode singkat, misalnya `550 5.1.1`, yang menjelaskan masalahnya |
| **Pesan server** | Kalimat dari server penerima, misalnya "user unknown" (pengguna tidak dikenal) |
| **Email asli Anda** | Sering dilampirkan, agar Anda melihat apa yang gagal |

## Cara membaca kodenya

Digit pertama kode memberi tahu jenis masalahnya.

| Digit pertama | Jenis | Artinya | Yang harus dilakukan |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | Kegagalannya permanen. Alamatnya mungkin tidak ada, atau server memblokir Anda. | Jangan kirim lagi ke alamat itu sebelum Anda tahu yang mana penyebabnya. |
| **4** | [Soft bounce](/glossary/soft-bounce) | Kegagalannya sementara. Kotak masuk mungkin penuh atau server sedang sibuk. | Tunggu. Server email Anda akan mencoba lagi sendiri. |

Dua contoh yang umum:

- `550 5.1.1` berarti alamatnya tidak ada. Hapus dari daftar Anda.
- `452 4.2.2` berarti kotak masuknya penuh. Coba lagi nanti.

## Jika Anda menerima NDR untuk email yang tidak Anda kirim

Kadang Anda menerima NDR untuk email yang tidak pernah Anda tulis. Ini disebut [backscatter](/glossary/backscatter). Seorang spammer memasukkan alamat Anda ke kolom pengirim, emailnya gagal, dan NDR dikirim kepada Anda. Biasanya akun Anda tidak diretas. Terbitkan SPF, DKIM, dan DMARC record untuk domain Anda. Dengan begitu, server penerima bisa menolak email palsu, bukan mengirim NDR kepada Anda.

## Kenapa NDR penting bagi pengirim

Setiap NDR dari alamat mati merugikan Anda. Penyedia kotak masuk seperti Google dan Microsoft mencatat berapa banyak email Anda yang dikirim ke alamat yang tidak ada. Banyak NDR dengan `5.1.1` memberi tahu mereka bahwa daftar Anda sudah lama.

**Contoh:** sebuah toko mengirim penawaran ke 5.000 kontak lama. Jika 400 NDR kembali, itu berarti 8% dari daftar. Banyak platform pengiriman meninjau atau menghentikan sementara akun dengan angka seperti ini. Angka ini hanya contoh.

## Bagaimana alat verifikasi membantu

Sebuah [email checker](/email-checker) menanyakan sebuah alamat ke server penerima sebelum Anda mengirim. Server memberi jawaban yang sama dengan yang akan dicantumkannya di NDR. Bedanya, tidak ada email yang dikirim. Jadi tidak ada yang bounce, dan reputasi Anda tidak dirugikan.
