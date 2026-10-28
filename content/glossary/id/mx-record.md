---
title: MX record
description: Apa itu MX record, cara server email memakainya untuk menemukan tujuan pengiriman, arti angka prioritas, dan arti MX record yang tidak ada bagi alat verifikasi.
slug: mx-record
date: 2026-10-23
updated: 2026-10-23
keyword: mx record
short: MX record adalah pengaturan di sebuah domain yang menyatakan server mana yang menerima email untuk domain itu. Saat Anda mengirim ke name@example.com, server email Anda mencari MX record untuk example.com agar tahu ke mana email harus dikirim.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Cek apakah sebuah alamat bisa menerima email
---

## Apa itu MX record?

MX record adalah pengaturan di sebuah domain yang menyatakan server mana yang menerima emailnya. MX adalah singkatan dari mail exchanger.

Pertama, beberapa istilah. Domain adalah nama seperti example.com. Domain juga merupakan bagian alamat email setelah tanda @. Server adalah komputer yang menyala terus dan menangani email. DNS adalah direktori publik yang menghubungkan nama domain dengan server. Setiap entri di DNS disebut record. Jadi, MX record adalah salah satu jenis DNS record.

MX record sebuah domain mencantumkan server yang menerima email masuk untuk domain itu. Siapa pun bisa mencarinya.

Sebuah domain bisa punya lebih dari satu MX record. Setiap MX record punya angka prioritas. Server dengan angka lebih kecil dicoba lebih dulu. Ini adalah pengaturan yang umum untuk domain Google Workspace:

| prioritas | server email |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Jika server dengan prioritas 1 tidak menjawab, server pengirim mencoba server berikutnya.

## Contoh sederhana

Berikut yang terjadi pada satu email.

1. **Omar menulis email.** Omar ingin mengirim email ke akuntannya di name@example.com. Ia mengklik Kirim.
2. **Server emailnya membaca domain.** Server melihat bahwa alamat itu diakhiri example.com.
3. **Server mencari MX record.** Server bertanya ke DNS server mana yang menerima email untuk example.com.
4. **DNS menjawab.** MX record untuk example.com menyatakan: mail.example.com, prioritas 10.
5. **Server mengirim email.** Server email Omar terhubung ke mail.example.com dan menyerahkan email itu.
6. **Akuntan menerimanya.** Email sampai di kotak masuk akuntan.

Omar tidak pernah melihat langkah-langkah ini. Server emailnya yang melakukannya. Namun tanpa MX record di langkah 4, email itu tidak punya tujuan.

## Cara email memakai MX record

Saat Anda mengirim ke `name@example.com`, server email Anda melakukan tiga hal:

1. Server mencari MX record untuk `example.com`.
2. Server terhubung ke server dengan angka prioritas paling kecil.
3. Server menyerahkan email dengan SMTP. SMTP adalah cara standar server email mengirim email satu sama lain.

RFC 5321, standar email, menjelaskan proses ini. Standar itu juga membahas domain tanpa MX record. Jika domain punya A record biasa, server email memperlakukan record itu sebagai MX record. A record adalah DNS record yang menghubungkan nama domain dengan angka milik satu server, yang disebut alamat IP.

## Apa yang diberitahukan MX record tentang sebuah alamat

MX record adalah pemeriksaan nyata pertama dalam verifikasi email. Pemeriksaan sintaks dilakukan sebelumnya. Pemeriksaan sintaks hanya melihat format, misalnya bahwa alamat punya satu tanda @ dan tidak ada spasi.

Ada tiga kemungkinan hasil dari pencarian MX record:

- **Tidak ada MX record dan tidak ada A record.** Domain tidak bisa menerima email. Setiap alamat di domain itu tidak valid. **Contoh:** seseorang mengetik domain terkenal seperti gmail.com dengan dua huruf tertukar. Salah ketik seperti ini biasanya gagal di langkah ini.
- **Ada MX record.** Domain bisa menerima email. Ini tidak memberi tahu apakah kotak masuk tertentu ada. Untuk itu diperlukan langkah berikutnya: percakapan SMTP dengan server. **Contoh:** example.com punya MX record, tetapi itu tidak membuktikan bahwa kotak masuk anna@example.com nyata.
- **MX record menunjuk ke gateway yang dikenal.** Jika server emailnya Proofpoint, Mimecast, atau Barracuda, domain itu memakai [secure email gateway](/glossary/secure-email-gateway). Gateway adalah layanan keamanan yang memeriksa email perusahaan sebelum sampai ke kotak masuk karyawan. Pemeriksaan kotak masuk bekerja dengan cara berbeda di domain seperti ini.

## Kenapa ini penting bagi pengirim

Siapa pun bisa membaca MX record sebuah domain dengan pencarian DNS. Alat gratis [MX lookup](/mx-lookup) kami menampilkan MX record dari domain mana pun. Saat sebuah perusahaan berganti penyedia email atau tutup, MX record-nya berubah atau hilang. Alamat-alamatnya berhenti berfungsi. Tidak ada yang memberi tahu Anda. Ini penyebab umum [hard bounce](/glossary/hard-bounce) pada daftar lama. Hard bounce adalah email yang ditolak secara permanen.

**Contoh:** Anda bertemu 40 orang dari old-firm.example di sebuah pameran dagang pada 2021. Perusahaan itu tutup pada 2024, dan domainnya tidak lagi punya MX record. Setiap email yang Anda kirim ke 40 kontak itu sekarang bounce.

## Bagaimana alat verifikasi menanganinya

Sebuah [email verifier](/email-checker) mencari MX record lebih dulu. Jika tidak ada MX record, alamat ditandai tidak valid dan tidak ada pemeriksaan lanjutan. Jika ada MX record, alat verifikasi terhubung ke server itu dan bertanya apakah kotak masuknya ada. Pencarian MX juga memberi tahu alat verifikasi jenis server yang dihadapi. Ini penting untuk [domain catch-all](/glossary/catch-all-email) dan gateway.

Alat [verifikasi email massal](/bulk-email-verifier) menjalankan pencarian MX record yang sama untuk setiap domain di daftar Anda. [Verifikasi email](/) memakai MX record untuk menemukan domain yang tidak bisa menerima email, sebelum Anda mengirim ke sana. Verifikasi tidak mengubah apa pun di DNS Anda sendiri.
