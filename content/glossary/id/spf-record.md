---
title: SPF record
description: Apa itu SPF record, seperti apa bentuknya, cara server penerima memeriksanya, batas sepuluh pencarian DNS, dan kode bounce yang muncul saat pemeriksaan gagal.
slug: spf-record
date: 2026-10-23
updated: 2026-10-23
keyword: spf record
short: SPF record adalah sebaris teks di domain Anda yang mencantumkan server yang boleh mengirim email atas nama domain itu. Server penerima memeriksanya untuk memastikan bahwa email yang mengaku dari domain Anda memang dikirim oleh salah satu server Anda.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Autentikasi mengatasi satu jenis bounce. Verifikasi mengatasi jenis yang lain
---

## Apa itu SPF record?

SPF record adalah sebaris teks di domain Anda yang mencantumkan server yang boleh mengirim email atas nama domain itu. SPF adalah singkatan dari Sender Policy Framework. SPF didefinisikan di RFC 7208.

Pertama, beberapa istilah. Domain adalah nama setelah tanda @ di alamat email, seperti example.com. Server adalah komputer yang mengirim atau menerima email. DNS adalah direktori publik tempat domain menerbitkan pengaturannya. Setiap pengaturan disebut record. SPF record adalah sebuah [DNS TXT record](/glossary/dns-txt-record), yaitu DNS record yang berisi teks biasa.

SPF record sederhana terlihat seperti ini:

`v=spf1 include:_spf.google.com -all`

Setiap bagian punya arti:

- `v=spf1` menyatakan bahwa ini adalah SPF record.
- `include:_spf.google.com` menyatakan bahwa setiap server yang dicantumkan Google boleh mengirim untuk domain ini.
- `-all` menyatakan: tolak email dari semua server lain.
- `~all` adalah akhiran yang lebih lunak. Artinya: anggap email dari server lain mencurigakan, tetapi jangan ditolak.

## Contoh sederhana

Begini cara satu SPF record melindungi sebuah usaha kecil.

1. **Sebuah toko roti memakai Google Workspace.** Rosa's Bakery mengirim email dari rosa@bakery.example melalui Google Workspace.
2. **Toko itu menerbitkan SPF record.** Record itu berbunyi `v=spf1 include:_spf.google.com -all`. Artinya hanya server Google yang boleh mengirim email untuk bakery.example.
3. **Rosa mengirim email ke pelanggan.** Email keluar dari salah satu server Google.
4. **Server pelanggan memeriksa.** Server mencari SPF record untuk bakery.example. Server Google diizinkan, jadi hasilnya pass.
5. **Seseorang mengirim email palsu.** Seorang penipu mengirim email yang mengaku dari bakery.example. Email itu datang dari server yang tidak ada di record.
6. **Pemeriksaan gagal.** Record diakhiri `-all`, jadi server pelanggan bisa menolak email palsu itu.

## Cara server penerima memeriksanya

Saat email datang, server penerima membaca domain di [Return-Path](/glossary/return-path). Return-Path adalah alamat tujuan pengiriman bounce. Bounce adalah pesan otomatis yang memberi tahu pengirim bahwa sebuah email tidak terkirim.

Server mengambil SPF record untuk domain itu. Lalu server memeriksa apakah alamat IP yang mengirim email ada di record. Alamat IP adalah angka yang menjadi identitas sebuah server di internet. Ada tiga hasil yang umum:

- **Pass.** Alamat IP ada di record. Email datang dari server yang diizinkan.
- **Fail.** Alamat IP tidak ada di record dan record diakhiri `-all`. Server bisa menolak email itu.
- **Softfail.** Alamat IP tidak ada di record dan record diakhiri `~all`. Server menerima email, tetapi menandainya sebagai mencurigakan.

Microsoft Exchange Online menolak email yang gagal dengan `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail mengembalikan `550 5.7.26` untuk email yang sama sekali tidak punya autentikasi. Kedua kode diawali angka 5. Alat pengirim Anda mencatatnya sebagai [hard bounce](/glossary/hard-bounce), meskipun alamatnya tidak bermasalah.

## Siapa yang memerlukan SPF record

Setiap pengirim email massal memerlukannya. Panduan pengirim dari Google mewajibkan SPF dan DKIM bagi pengirim 5.000 pesan atau lebih per hari ke Gmail. Panduan itu juga mewajibkan DMARC. Microsoft mewajibkan tiga record yang sama untuk domain yang mengirim lebih dari 5.000 email per hari ke Outlook.com, Hotmail, dan Live. Microsoft mulai menegakkannya pada 5 Mei 2025.

Jika Anda mengirim lebih sedikit dari itu, record ini tetap penting. Tanpa record ini, email Anda lebih mungkin masuk ke folder spam.

## Batas sepuluh pencarian DNS

RFC 7208 membatasi pemeriksaan SPF hingga sepuluh pencarian DNS (DNS lookup). Pencarian adalah satu pertanyaan yang diajukan server penerima ke DNS. Setiap `include:`, `a`, `mx`, dan `redirect` di record Anda dihitung sebagai satu pencarian. Pencarian di dalam record yang Anda sertakan juga dihitung. Jika totalnya lebih dari sepuluh, pemeriksaan menghasilkan error permanen. Sebagian besar server penerima memperlakukan error ini sebagai fail.

Ini adalah penyebab paling umum SPF record rusak. Sebuah perusahaan menambahkan alat email ke record satu per satu. Saat pencarian kesebelas ditambahkan, seluruh record berhenti bekerja. [SPF checker](/spf-checker) menghitung pencarian di record Anda, termasuk pencarian di dalam setiap include.

**Contoh:** SPF record sebuah perusahaan menyertakan email kantornya, alat newsletter, alat help desk, dan alat invoice. Sebagian dari record itu menyertakan record lain di dalamnya. Bersama-sama, semuanya memerlukan 11 pencarian. Sejak hari itu, pemeriksaan SPF gagal untuk email perusahaan, bahkan untuk email yang dikirim dari kantornya sendiri.

## SPF adalah salah satu dari tiga record

- SPF memeriksa server mana yang mengirim email.
- [DKIM](/glossary/dkim) memeriksa bahwa email tidak diubah setelah dikirim.
- [DMARC](/glossary/dmarc) menghubungkan kedua pemeriksaan itu dengan alamat From yang dilihat pembaca. DMARC juga memberi tahu server penerima apa yang harus dilakukan saat pemeriksaan gagal.

Sebuah domain memerlukan ketiganya. Panduan [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) menunjukkan seperti apa kode kegagalan di laporan bounce.

## SPF record dan verifikasi email

SPF record membuktikan server mana yang boleh mengirim email untuk domain Anda. SPF record tidak membuktikan bahwa alamat penerima ada. Email yang diautentikasi dengan benar ke alamat mati tetap bounce. Sebuah [email checker](/email-checker) menanyakan ke server penerima apakah sebuah kotak masuk ada sebelum Anda mengirim. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal yang sama untuk seluruh daftar. SPF record yang benar membantu mencegah bounce karena autentikasi seperti `5.7.23`, dan [verifikasi email](/) menemukan alamat yang akan bounce dengan kode seperti `5.1.1`.
