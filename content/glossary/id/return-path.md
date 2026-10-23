---
title: Return-Path
description: Apa itu alamat Return-Path, bedanya dengan alamat From, ke mana pesan bounce dikirim, dan kenapa SPF dan DMARC memeriksanya. Dengan contoh sederhana.
slug: return-path
date: 2026-10-23
updated: 2026-10-23
keyword: return path
short: Return-Path adalah alamat tujuan pesan bounce. Server pengirim yang menentukannya, dan alamat ini sering berbeda dari alamat From yang Anda lihat di kotak masuk. SPF memeriksa domain di Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Hapus alamat mati sebelum bounce
---

## Apa itu Return-Path?

Return-Path adalah alamat tujuan pesan bounce. Pesan bounce adalah pemberitahuan otomatis dari server saat email tidak bisa dikirim.

Setiap email punya dua alamat pengirim. Yang pertama adalah alamat **From**. Ini adalah nama dan alamat yang dilihat pembaca di kotak masuknya. Yang kedua adalah **Return-Path**. Pembaca tidak melihatnya. Server email yang memakainya.

Bayangkan sebuah surat kertas. Surat di dalam amplop mencantumkan nama Anda di bagian atas. Itu adalah alamat From. Amplop punya alamat pengirim di pojoknya. Kantor pos hanya memakainya saat surat tidak bisa diantar. Itu adalah Return-Path.

Return-Path juga disebut envelope sender atau alamat bounce. Server pengirim memberikannya ke server penerima di awal pengiriman. Lalu server penerima menuliskannya ke sebuah baris di bagian atas email yang diawali `Return-Path:`.

## Contoh sederhana

Begini cara Return-Path bekerja saat sebuah email bounce.

1. **Tom mengirim newsletter.** Tom punya toko roti. Ia mengirim newsletter bulanan melalui penyedia layanan email. Penyedia ini adalah perusahaan yang mengirim email massal untuk Anda.
2. **Dua alamat ditetapkan.** Alamat From adalah tom@bakery.example. Penyedia menetapkan Return-Path ke alamat bounce miliknya sendiri, misalnya bounces@mail.provider.example.
3. **Seorang pelanggan sudah pindah.** Seorang pelanggan di daftar pindah kerja. Alamat lamanya sudah tidak ada.
4. **Bounce dikirim ke Return-Path.** Server penerima mengirim pemberitahuan bounce ke bounces@mail.provider.example, bukan ke Tom.
5. **Penyedia menindaklanjutinya.** Penyedia membaca bounce itu dan berhenti mengirim ke alamat tersebut. Tom tidak pernah melihat pemberitahuan itu.

Inilah sebabnya bounce dari newsletter sering tidak sampai ke kotak masuk Anda sendiri. Bounce dikirim ke Return-Path, dan penyedia Anda yang menanganinya.

## Return-Path vs alamat From

| | Alamat From | Return-Path |
|---|---|---|
| **Siapa yang melihatnya** | Pembaca, di kotak masuknya | Server email |
| **Siapa yang menetapkannya** | Anda, atau aplikasi email Anda | Server pengirim |
| **Gunanya** | Menunjukkan siapa yang mengirim email | Menerima pesan bounce |
| **Diperiksa oleh SPF** | Tidak | Ya |

Kedua alamat bisa sama. Saat Anda mengirim email biasa dari Gmail atau Outlook, keduanya biasanya sama. Saat Anda mengirim melalui penyedia, keduanya biasanya berbeda.

## Cara menemukan Return-Path sebuah email

Buka header lengkap email itu. Di Gmail, buka email, klik titik tiga, dan pilih **Tampilkan versi asli**. Di Outlook, buka properti pesan ("Properties"). Cari baris seperti ini di bagian atas:

`Return-Path: <bounces@mail.provider.example>`

## Kenapa ini penting untuk SPF dan DMARC

[SPF](/glossary/spf) adalah aturan di domain Anda yang mencantumkan server yang boleh mengirim email Anda. SPF memeriksa domain di Return-Path. SPF tidak memeriksa alamat From.

[DMARC](/glossary/dmarc) menambahkan pengujian kedua. DMARC bertanya apakah domain yang lolos SPF sama dengan domain di alamat From. Jika penyedia Anda memakai domain Return-Path miliknya sendiri, SPF bisa lolos untuk penyedia, tetapi tidak cocok dengan domain From Anda.

Banyak penyedia mengizinkan Anda menetapkan Return-Path di domain Anda sendiri. Ini sering disebut custom bounce domain. Dengan pengaturan ini, SPF lolos untuk domain Anda sendiri, dan DMARC bisa menghitung hasil itu.

**Contoh:** alamat From milik Tom ada di bakery.example. Penyedianya mengizinkan Tom menetapkan Return-Path ke bounces.bakery.example. Sekarang domain yang lolos SPF sama dengan domain di alamat From.

## Bagaimana alat verifikasi membantu

Setiap bounce dari daftar Anda dikirim ke Return-Path. Penyedia Anda menghitungnya. Jika terlalu banyak yang kembali, banyak penyedia menghentikan sementara akun Anda atau meminta Anda membersihkan daftar.

Sebuah [email checker](/email-checker) menanyakan ke server penerima apakah sebuah alamat ada sebelum Anda mengirim apa pun. Alamat mati dihapus lebih dulu, jadi jauh lebih sedikit bounce yang sampai ke Return-Path.
