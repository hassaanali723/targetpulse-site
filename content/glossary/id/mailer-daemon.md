---
title: Mailer-daemon
description: Apa itu pesan mailer-daemon, kenapa Anda menerimanya, cara membaca kodenya, dan apa yang harus dilakukan jika pesan itu datang untuk email yang tak Anda kirim.
slug: mailer-daemon
date: 2026-10-23
updated: 2026-10-23
keyword: mailer daemon
short: Mailer-daemon adalah program di server email yang mengirim pesan otomatis. Sebagian besar pesan ini adalah pemberitahuan bounce. Pesan dari mailer-daemon berarti email yang Anda kirim tidak terkirim.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Hapus alamat yang bounce sebelum Anda mengirim
---

## Apa itu mailer-daemon?

Mailer-daemon adalah program di server email yang mengirim pemberitahuan otomatis. Sebagian besar pemberitahuan ini memberi tahu bahwa email yang Anda kirim tidak terkirim.

Pertama, beberapa istilah. Server adalah komputer yang menyala terus dan menangani email. Daemon adalah program yang berjalan di latar belakang di sebuah server, tanpa ada yang mengawasinya. Jadi, mailer-daemon adalah program latar belakang yang menangani email yang tidak bisa dikirim.

Saat email Anda ditolak, mailer-daemon mengirimkan pemberitahuan kepada Anda. Nama pengirimnya biasanya `MAILER-DAEMON@` diikuti domain server, atau `postmaster@`. Domain adalah bagian alamat setelah tanda @, seperti example.com.

Pemberitahuan ini disebut [laporan gagal kirim](/glossary/ndr) (non-delivery report). Laporan ini memberi tahu alamat mana yang gagal, kapan gagalnya, dan kenapa. Banyak orang menyebutnya pesan bounce.

## Contoh sederhana

Begini pesan mailer-daemon sampai ke kotak masuk Anda.

1. **Priya mengirim penawaran harga.** Priya punya usaha percetakan. Ia mengirim penawaran harga ke klien baru di sam@client.example.
2. **Alamatnya salah.** Alamat asli klien itu adalah sam.lee@client.example. Priya menyalinnya dari kartu nama dan melewatkan ".lee".
3. **Server menolaknya.** Server email di client.example tidak punya kotak masuk bernama "sam". Server menolak email itu.
4. **Sebuah pemberitahuan datang.** Beberapa detik kemudian, Priya menerima email dari MAILER-DAEMON. Email itu menyatakan bahwa emailnya tidak bisa dikirim.
5. **Priya membaca kodenya.** Di dalamnya ia menemukan `550 5.1.1`. Kode ini berarti alamatnya tidak ada.
6. **Priya memperbaikinya.** Ia memeriksa kartu nama, membetulkan alamatnya, dan mengirim penawaran itu lagi.

Mailer-daemon tidak memblokir email Priya. Server lain yang menolaknya. Mailer-daemon hanya memberi tahu Priya.

## Cara membaca pesannya

Bagian penting dari pesan adalah kodenya. Cari angka tiga digit dan angka dengan titik. Contoh: `550 5.1.1`. Digit pertama memberi tahu jenis masalahnya.

| Digit pertama | Jenis | Artinya | Yang harus dilakukan |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | Alamatnya tidak ada, atau server memblokir email Anda. | Jangan kirim lagi sampai Anda tahu yang mana penyebabnya. |
| **4** | [Soft bounce](/glossary/soft-bounce) | Kotak masuk penuh atau server sedang sibuk. | Tunggu. Server email Anda akan mencoba lagi sendiri. |

Teks di samping kode ditulis oleh server penerima. Dua contoh:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Dokumentasi Microsoft menyatakan bahwa ini berarti "alamat penerima tidak ada".

## Pesan mailer-daemon untuk email yang tidak Anda kirim

Kadang Anda menerima pemberitahuan bounce untuk email yang tidak pernah Anda kirim. Ini disebut [backscatter](/glossary/backscatter). Begini kejadiannya.

1. Seorang spammer mengirim ribuan email. Di kolom From, ia mengetik alamat Anda, misalnya info@shop.example.
2. Banyak email itu dikirim ke alamat yang tidak ada.
3. Server penerima menolaknya. Mailer-daemon mereka mengirim setiap pemberitahuan ke alamat From, yaitu alamat Anda.
4. Kotak masuk Anda penuh dengan pemberitahuan mailer-daemon untuk email yang tidak pernah Anda tulis.

Akun Anda tidak diretas. Perbaikannya ada di domain Anda. Terbitkan SPF, DKIM, dan DMARC record. Ini adalah pengaturan di domain Anda yang memberi tahu server penerima email mana yang benar-benar dari Anda. Setelah itu, server penerima bisa menolak email palsu, bukan mengirim pemberitahuan bounce kepada Anda.

## Kenapa ini penting bagi pengirim

Setiap pesan mailer-daemon adalah bounce. Penyedia kotak masuk, seperti Google dan Microsoft, menghitung berapa banyak email Anda yang dikirim ke alamat yang tidak ada. Banyak pemberitahuan `5.1.1` memberi tahu mereka bahwa Anda tidak memeriksa daftar Anda.

**Contoh:** sebuah perusahaan mengirim newsletter ke daftar lama berisi 2.000 kontak. Dua ratus pemberitahuan mailer-daemon kembali, semuanya dengan `5.1.1`. Setiap pemberitahuan adalah tanda bagi penyedia bahwa tidak ada yang membersihkan daftar itu. Angka ini hanya contoh.

## Bagaimana alat verifikasi membantu

Sebuah [email checker](/email-checker) menanyakan ke server penerima apakah server menerima email untuk sebuah alamat. Alat ini melakukannya sebelum Anda mengirim apa pun. Server memberi kode yang sama dengan yang nanti akan dikirim mailer-daemon kepada Anda. Bedanya, tidak ada email yang dikirim dan reputasi Anda tidak terpengaruh.

Alat [verifikasi email massal](/bulk-email-verifier) menjalankan pemeriksaan yang sama untuk setiap alamat di sebuah daftar. [Verifikasi email](/) tidak menghentikan backscatter, karena Anda tidak mengirim email itu. Verifikasi menghentikan pemberitahuan mailer-daemon yang datang dari alamat mati di daftar Anda sendiri.
