---
title: Hard bounce
description: Apa itu hard bounce, kode mana yang berarti hard bounce, dua jenis hard bounce, dan apa yang harus dilakukan untuk setiap jenis. Dengan contoh sederhana.
slug: hard-bounce
date: 2026-10-23
updated: 2026-10-23
keyword: hard bounce
short: Hard bounce adalah email yang ditolak secara permanen oleh server penerima. Alamatnya tidak ada, domainnya tidak ada, atau server memblokir email Anda. Jika Anda mengirim email yang sama lagi, email itu akan gagal lagi.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Temukan alamat yang akan hard bounce sebelum Anda mengirim
---

## Apa itu hard bounce?

Hard bounce adalah email yang tidak terkirim dan tidak akan pernah terkirim. Server penerima menolaknya. Jika Anda mengirimnya lagi, server akan menolaknya lagi.

Pertama, beberapa istilah. Server adalah komputer yang menyala terus dan menangani email untuk sebuah domain. Domain adalah bagian alamat setelah tanda @, seperti example.com. Bounce adalah pesan otomatis yang memberi tahu bahwa sebuah email tidak terkirim.

Setiap pesan bounce berisi kode. Standar email RFC 5321 menyebut hard bounce sebagai balasan negatif permanen. Kodenya diawali angka 5. Contoh: `550 5.1.1`. Kode yang diawali angka 4 adalah [soft bounce](/glossary/soft-bounce). Soft bounce bersifat sementara, jadi percobaan berikutnya mungkin berhasil.

## Contoh sederhana

Begini cara hard bounce terjadi pada daftar biasa.

1. **Tom mengumpulkan sebuah alamat.** Tom punya toko buku online kecil. Pada 2022, seorang pelanggan mendaftar dengan ben@company.example.
2. **Pelanggan itu keluar dari pekerjaannya.** Pada 2025, Ben keluar dari Company Ltd. Perusahaan menutup kotak masuknya.
3. **Tom mengirim newsletter.** Alat pengirimnya mengirim newsletter ke ben@company.example.
4. **Server menolaknya.** Server email di company.example tidak punya kotak masuk untuk Ben lagi. Server menjawab dengan kode `550 5.1.1`.
5. **Tom menerima pesan bounce.** Alat pengirimnya mencatat hard bounce untuk alamat itu.
6. **Tom menghapus alamat itu.** Kotak masuk lama Ben tidak akan kembali. Mengirim ke sana lagi hanya akan gagal lagi.

Tom tidak melakukan kesalahan saat mengumpulkan alamat itu. Alamat itu nyata pada 2022. Alamat itu berhenti berfungsi kemudian, dan tidak ada yang memberi tahu Tom.

## Dua jenis hard bounce

Kedua jenis ini muncul sebagai "hard bounce" di laporan kampanye Anda. Penyebab dan cara memperbaikinya berbeda.

### Jenis 1: alamatnya bermasalah

Kotak masuknya tidak ada, domainnya tidak ada, atau alamatnya salah ketik. Alamat yang ditutup saat seorang karyawan keluar dari perusahaan, seperti alamat Ben, juga termasuk kelompok ini.

Penyedia besar menuliskannya dengan cara masing-masing:

- Gmail mengembalikan `550 5.1.1 The email account that you tried to reach does not exist`.
- Microsoft mengembalikan `5.1.1 Bad destination mailbox address`.

**Contoh:** seorang pelanggan ingin mengetik anna@example.com tetapi mengetik ana@example.com. Tidak ada kotak masuk bernama "ana". Server mengembalikan hard bounce.

### Jenis 2: email Anda diblokir

Alamatnya nyata, tetapi server menolak email dari Anda. Kode ini diawali `5.7`.

- `550 5.7.26` dari Gmail berarti domain Anda tidak diautentikasi. Autentikasi berarti record di domain Anda yang membuktikan bahwa email benar-benar dari Anda.
- `5.7.23` dari Microsoft berarti email Anda gagal pemeriksaan SPF. SPF adalah salah satu record itu. SPF mencantumkan server yang boleh mengirim email atas nama domain Anda.

Alat pengirim Anda menghitung ini sebagai hard bounce karena kodenya diawali angka 5. Namun alamatnya tidak bermasalah. Masalahnya ada di pengaturan email Anda.

**Contoh:** Maria membuat domain baru, maria-design.example. Ia mengirim email ke klien di Gmail sebelum menambahkan record autentikasi apa pun. Gmail mengembalikan `550 5.7.26`. Alamat klien itu berfungsi. Yang perlu diperbaiki adalah pengaturan milik Maria.

## Kenapa hard bounce penting

Penyedia kotak masuk adalah perusahaan yang menjalankan kotak masuk, seperti Google dan Microsoft. Mereka menghitung seberapa sering Anda mengirim ke alamat yang tidak ada. Banyak hard bounce memberi tahu mereka bahwa daftar Anda tidak diperiksa.

Layanan pengiriman email juga memantau angka ini. Bounce rate adalah persentase email Anda yang bounce. Misalnya, 50 bounce dari 1.000 email berarti bounce rate 5 persen. Amazon SES, layanan Amazon untuk mengirim email, memublikasikan batasnya:

| Bounce rate | Yang dilakukan Amazon SES |
|---|---|
| Di bawah 2 persen | Ini tingkat yang disarankan |
| 5 persen | Akun ditinjau |
| 10 persen | Akun bisa dihentikan sementara |

Jadi, satu hard bounce bukan masalah. Daftar yang penuh alamat mati adalah masalah.

## Apa yang harus dilakukan dengan hard bounce

Pertama, baca kode di pesan bounce. Kode itu memberi tahu jenis hard bounce yang Anda alami.

1. **Kodenya `5.1.1`, `5.1.2`, atau error alamat lainnya.** Hapus alamat itu dari daftar Anda sekarang. Jangan mengirim ke sana lagi. Mailchimp menghapus alamat seperti ini dari audiens Anda secara otomatis. Amazon meminta pengirim menghapusnya "segera".
2. **Kodenya diawali `5.7`.** Simpan alamat itu. Perbaiki SPF, DKIM, dan DMARC record Anda, atau reputasi pengirim Anda. Reputasi pengirim adalah cara penyedia menilai Anda, berdasarkan pengiriman Anda sebelumnya. Lalu kirim lagi ke alamat yang sama.

Tabel lengkap kode dan apa yang harus dilakukan untuk setiap kode ada di panduan [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Bagaimana alat verifikasi menanganinya

Alat verifikasi menanyakan hal yang sama ke server penerima sebelum Anda mengirim. Sebuah [email verifier](/email-checker) terhubung ke server email. Alat itu bertanya apakah server menerima email untuk alamat yang persis itu, lalu berhenti sebelum ada email yang dikirim. Jika server menjawab `550 5.1.1`, alat verifikasi menandai alamat itu sebagai tidak valid. Anda menghapusnya sebelum kampanye. Tidak ada email yang dikirim, jadi reputasi Anda tidak terpengaruh.

Untuk memeriksa seluruh daftar sekaligus, unggah daftar itu ke alat [verifikasi email massal](/bulk-email-verifier). [Verifikasi email](/) menemukan masalah Jenis 1: alamat yang tidak ada. Verifikasi tidak bisa mencegah hard bounce Jenis 2, karena penyebabnya ada di pengaturan email Anda sendiri.
