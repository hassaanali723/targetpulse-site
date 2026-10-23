---
title: Email spoofing
description: Apa itu email spoofing, contoh email palsu dari CEO, kenapa email memungkinkan hal ini, cara mengenali email spoofing, dan cara melindungi domain Anda.
slug: email-spoofing
date: 2026-10-23
updated: 2026-10-23
keyword: email spoofing
short: Email spoofing adalah mengirim email dengan alamat pengirim palsu, sehingga email terlihat berasal dari orang lain. Penipu memakainya untuk menyamar sebagai bank, pemasok, atau atasan Anda sendiri. SPF, DKIM, dan DMARC adalah record yang menghentikannya untuk sebuah domain.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Verifikasi memeriksa alamat. DMARC memeriksa pengirim
---

## Apa itu email spoofing?

Email spoofing berarti mengirim email dengan alamat pengirim yang palsu. Email itu terlihat berasal dari orang atau perusahaan yang Anda kenal. Padahal, orang lain yang mengirimnya. Penipu memakai spoofing agar orang membayar invoice palsu, memberikan kata sandi, atau membuka file berbahaya.

Email spoofing menampilkan alamat asli di baris From. Baris From adalah nama dan alamat pengirim yang Anda lihat di kotak masuk. Inilah yang membedakan email spoofing dari email yang dikirim dari alamat yang mirip. Keduanya dijelaskan di bawah.

## Contoh: email palsu dari CEO

Sara bekerja di bagian keuangan di sebuah perusahaan yang memakai domain example.com. Domain adalah nama setelah tanda @ di alamat email. Pada pukul 16.00 hari Jumat, Sara menerima email ini.

- **From:** David Brown, david.brown@example.com
- **Subjek:** Pembayaran mendesak hari ini
- **Isi:** "Tolong bayar invoice terlampir ke pemasok baru kita sebelum pukul 17.00. Saya sedang rapat, jadi balas lewat email saja."

David Brown adalah CEO yang sebenarnya, dan alamat itu adalah alamat aslinya. Namun David tidak mengirim email ini. Seorang penipu yang mengirimnya, dari server yang tidak ada hubungannya dengan example.com.

Jika Sara membayar, uangnya masuk ke rekening bank penipu. Penipuan jenis ini sering disebut business email compromise. Penipuan ini berhasil karena emailnya terlihat normal dan meminta tindakan cepat.

## Kenapa email spoofing bisa terjadi

SMTP adalah protokol yang mengirim email antarserver. SMTP pertama kali didefinisikan pada 1982. SMTP tidak memeriksa alamat From. Server email mana pun bisa diatur untuk menulis alamat apa pun di baris itu, dan email tetap akan dikirim.

Jadi, server penerima tidak punya cara bawaan untuk tahu apakah alamat From itu benar. Karena itulah tiga pemeriksaan ditambahkan kemudian. Pemilik domain menerbitkannya di DNS, direktori publik tempat domain mencantumkan pengaturannya.

## Tanda-tanda email spoofing

Email spoofing bisa terlihat benar di setiap detail. Tanda-tanda ini membantu Anda mengenalinya.

- **Alamat Reply-To berbeda.** Klik Balas dan lihat alamatnya. Jika berubah menjadi alamat yang tidak dikenal, email itu mungkin palsu.
- **Pemeriksaannya gagal.** Di Gmail, buka email, klik titik tiga, dan pilih Tampilkan versi asli. Lihat baris SPF, DKIM, dan DMARC. DMARC FAIL adalah peringatan yang kuat.
- **Email meminta uang atau kata sandi dengan cepat.** Permintaan untuk membayar hari ini, mengganti rekening bank, atau login adalah tujuan umum email spoofing.
- **Email meminta Anda menghindari saluran lain.** "Lewat email saja" atau "jangan telepon saya" adalah tanda peringatan.
- **Gaya bahasa atau tanda tangannya tidak sesuai.** Orang yang asli mungkin tidak pernah menulis seperti itu.

## Cara melindungi domain Anda dari spoofing

Anda tidak bisa mencegah seseorang mengetik alamat Anda di baris From. Anda bisa meminta server penerima memblokir email seperti itu. Untuk ini diperlukan tiga DNS record.

1. **SPF** mencantumkan server yang boleh mengirim email atas nama domain Anda. Lihat [SPF record](/glossary/spf).
2. **DKIM** menambahkan tanda tangan ke email asli Anda yang tidak bisa dibuat oleh penipu. Lihat [DKIM](/glossary/dkim).
3. **DMARC** memberi tahu server penerima apa yang harus dilakukan dengan email yang memakai domain Anda di From tetapi gagal kedua pemeriksaan. Lihat [DMARC](/glossary/dmarc).

Dengan DMARC di `p=reject`, server penerima yang mengikuti kebijakan Anda memblokir email spoofing sebelum sampai ke siapa pun. Di `p=none`, DMARC hanya mengirimkan laporan kepada Anda. DMARC tidak menghentikan email itu. Agar DMARC lolos, SPF atau DKIM harus lolos untuk domain yang sama dengan yang tampil di From. Ini disebut [DMARC alignment](/glossary/dmarc-alignment).

## Spoofing vs phishing vs domain tiruan

Kata-kata ini sering tertukar. Artinya berbeda.

| Istilah | Artinya | Contoh |
| --- | --- | --- |
| Email spoofing | Email yang memakai alamat asli Anda di From tanpa izin Anda | From: billing@example.com, dikirim oleh penipu |
| Phishing | Email apa pun yang mencoba menipu Anda agar memberikan uang, data, atau kata sandi | Email palsu "akun Anda dikunci" dengan tautan login |
| Domain tiruan (lookalike domain) | Domain terpisah yang didaftarkan agar mirip dengan domain Anda | exampel.com atau example-billing.com |

Spoofing adalah salah satu cara phishing, dan domain tiruan adalah cara lainnya. DMARC menghentikan spoofing pada domain Anda yang persis. DMARC tidak bisa menghentikan domain tiruan. Penipu memiliki domain itu, jadi mereka bisa memasang SPF, DKIM, dan DMARC record untuk domain itu sendiri.

## Apa yang harus dilakukan jika Anda menerima email spoofing

1. Jangan membalas, mengklik tautan, atau membuka lampiran.
2. Periksa permintaan itu dengan cara lain. Telepon orang itu di nomor yang sudah Anda ketahui, bukan nomor dari email.
3. Laporkan email itu. Di Gmail, pakai menu titik tiga dan pilih Laporkan phishing. Di Outlook, pakai tombol "Report".
4. Jika email itu memakai domain perusahaan Anda, beri tahu tim IT. Mereka bisa memeriksa laporan DMARC Anda.
5. Jika Anda sudah membayar atau memberikan kata sandi, segera hubungi bank Anda atau ganti kata sandi.

## Email spoofing dan verifikasi email

Sebuah [email checker](/email-checker) tidak mendeteksi spoofing. Alat ini memberi tahu apakah sebuah alamat ada dan menerima email, bukan siapa yang benar-benar mengirim pesan. Email spoofing memakai alamat asli, jadi alamat itu tetap akan terbaca valid. Alat [verifikasi email massal](/bulk-email-verifier) membantu di sisi pengiriman Anda sendiri, dengan menghapus alamat mati dari daftar sebelum kampanye. Untuk menghentikan spoofing, pakai SPF, DKIM, dan DMARC, dan pakai [verifikasi email](/) untuk menjaga bounce rate Anda tetap rendah.
