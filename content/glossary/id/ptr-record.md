---
title: PTR record
description: Apa itu PTR record, kenapa server email memeriksanya, apa yang terjadi jika alamat IP pengirim tidak punya PTR record, dan cara memasangnya.
slug: ptr-record
date: 2026-10-23
updated: 2026-10-23
keyword: ptr record
short: PTR record adalah DNS record yang menghubungkan alamat IP dengan nama server. PTR record adalah kebalikan dari DNS record biasa. Server email memeriksa PTR record dari alamat IP yang mengirim kepada mereka, dan sebagian menolak email dari alamat IP tanpa PTR record.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Periksa daftar Anda, bukan hanya DNS Anda
---

## Apa itu PTR record?

PTR record adalah pengaturan yang menghubungkan alamat IP dengan nama server. PTR adalah singkatan dari pointer.

Pertama, beberapa istilah. Server adalah komputer yang menyala terus, misalnya untuk mengirim email. Alamat IP adalah angka yang mengenali sebuah server di internet, seperti `203.0.113.10`. Hostname adalah nama satu server, seperti `mail.example.com`. DNS adalah direktori publik yang menghubungkan nama dan angka. Setiap entri di DNS disebut record.

DNS record biasa menghubungkan sebuah nama dengan alamat IP. Misalnya, `mail.example.com` menunjuk ke `203.0.113.10`. PTR record melakukan kebalikannya. PTR record menghubungkan `203.0.113.10` dengan `mail.example.com`. Ini disebut reverse DNS.

PTR record tidak berada di DNS domain Anda. PTR record berada di zona DNS terpisah milik pemilik alamat IP. Zona adalah kumpulan DNS record yang dikendalikan oleh satu pemilik. Pemiliknya biasanya perusahaan hosting atau penyedia email Anda. Untuk memasang atau mengubah PTR record, Anda perlu memintanya kepada mereka.

## Contoh sederhana

Berikut yang terjadi saat server pengirim tidak punya PTR record.

1. **Sebuah perusahaan memasang server email.** Green Garden Ltd menjalankan server emailnya sendiri di alamat IP `203.0.113.10`.
2. **Perusahaan mengirim email.** Server mengirim newsletter ke seorang pelanggan dengan alamat Gmail.
3. **Gmail mencari PTR record.** Gmail melihat alamat IP `203.0.113.10`. Gmail bertanya ke DNS nama apa yang dimiliki IP itu.
4. **Tidak ada jawaban.** Belum ada yang memasang PTR record untuk alamat IP itu.
5. **Gmail menolak email.** Gmail mengembalikan kode `550 5.7.25`. Pesannya menyatakan bahwa alamat IP pengirim tidak punya PTR record.
6. **Green Garden memperbaikinya.** Perusahaan meminta perusahaan hostingnya memasang PTR record untuk `203.0.113.10` ke `mail.greengarden.example`.
7. **Email berikutnya lolos pemeriksaan ini.** Gmail mencari PTR record lagi dan menemukan nama yang menunjuk kembali ke alamat IP yang sama.

Alamat pelanggan itu sejak awal tidak bermasalah. Hanya pengaturan pengirim yang belum lengkap.

## Kenapa server email memeriksanya

Saat server Anda terhubung ke server penerima, server penerima melihat alamat IP Anda. Server penerima mencari PTR record untuk IP itu. Lalu server memeriksa dua hal:

1. Apakah alamat IP punya PTR record?
2. Apakah hostname di PTR record menunjuk kembali ke alamat IP yang sama?

**Contoh:** PTR record untuk `203.0.113.10` menyatakan `mail.greengarden.example`. DNS record biasa untuk `mail.greengarden.example` menyatakan `203.0.113.10`. Keduanya saling menunjuk, jadi kedua jawabannya ya.

Jika keduanya benar, pengirim terlihat seperti server email sungguhan yang sengaja dipasang oleh seseorang. Jika tidak ada PTR record, pengirim terlihat seperti salah satu dari tiga hal ini:

- koneksi internet rumah;
- komputer yang terinfeksi;
- server yang tidak pernah diatur oleh siapa pun.

Spam sering datang dari sumber seperti ini.

## Apa yang terjadi tanpa PTR record

Sebagian penyedia menolak email itu. Daftar error Gmail mencantumkan `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Ini adalah penolakan permanen. Alat pengirim Anda mencatatnya sebagai [hard bounce](/glossary/hard-bounce), meskipun alamatnya ada. Hard bounce adalah email yang ditolak secara permanen.

Penyedia lain menerima email itu, tetapi memberinya skor lebih rendah. Skor lebih rendah berarti email lebih mungkin masuk ke folder spam. Jadi, PTR record yang tidak ada bisa merugikan Anda bahkan saat tidak ada pesan error.

## Cara memasang PTR record

1. Cari alamat IP yang dipakai untuk mengirim email Anda.
2. Pilih hostname yang akan ditunjuk. Contoh: `mail.example.com`.
3. Pastikan hostname itu punya DNS record biasa yang menunjuk ke alamat IP yang sama.
4. Minta perusahaan hosting atau penyedia email Anda memasang PTR record untuk alamat IP itu ke hostname tersebut.
5. Jalankan pencarian reverse DNS pada alamat IP itu. Hasilnya harus menampilkan hostname yang Anda pilih di langkah 2.

Jika Anda mengirim melalui Google Workspace, Microsoft 365, SendGrid, atau Amazon SES, penyedia itulah pemilik alamat IP pengirim. PTR record sudah dipasang. Anda hanya perlu memasang PTR record jika Anda menjalankan server email sendiri atau memakai alamat IP khusus. Alamat IP khusus (dedicated IP) adalah alamat yang hanya dipakai perusahaan Anda untuk mengirim email.

## PTR record dan verifikasi

PTR record berkaitan dengan alamat IP pengirim. PTR record tidak berkaitan dengan alamat penerima. Sebuah [email checker](/email-checker) tidak memerlukan PTR record Anda untuk memverifikasi daftar Anda. Alat [verifikasi email massal](/bulk-email-verifier) juga tidak memerlukannya.

Alat verifikasi memang memerlukan PTR record di setiap alamat IP miliknya sendiri. Tanpa PTR record, server penerima menolak berkomunikasi dengannya. Ini salah satu alasan layanan verifikasi mendapat jawaban yang berbeda dari skrip yang dijalankan di laptop. [Verifikasi email](/) memeriksa bahwa alamat di daftar Anda ada. PTR record Anda sendiri adalah pengaturan terpisah yang Anda perbaiki bersama perusahaan hosting atau penyedia email Anda.
