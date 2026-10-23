---
title: SMTP
description: Apa arti SMTP, cara email berpindah dari satu server ke server lain, apa itu server SMTP, port SMTP mana yang dipakai, dan arti balasan error.
slug: smtp
date: 2026-10-23
updated: 2026-10-23
keyword: smtp
short: SMTP adalah singkatan dari Simple Mail Transfer Protocol. SMTP adalah kumpulan aturan yang dipakai server email untuk mengirim email satu sama lain. Setiap email yang Anda kirim berpindah dari server ke server dengan SMTP.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Cek setiap alamat ke server penerima sebelum Anda mengirim
---

## Apa itu SMTP? (Arti SMTP)

SMTP adalah singkatan dari Simple Mail Transfer Protocol. Protokol adalah kumpulan aturan tetap yang diikuti dua komputer untuk berkomunikasi. SMTP adalah kumpulan aturan untuk mengirim email. Versi saat ini didefinisikan di RFC 5321. RFC adalah dokumen publik yang menetapkan standar internet.

Server adalah komputer yang menyala terus dan melakukan tugas untuk komputer lain. Server email mengirim, menerima, atau menyimpan email. Jadi, jawaban singkat untuk "apa itu SMTP" adalah ini. SMTP adalah cara server email meneruskan email satu sama lain.

SMTP hanya memindahkan email. SMTP tidak menampilkan kotak masuk Anda. Protokol lain yang melakukannya, seperti dijelaskan di bawah.

## Contoh: Ana mengirim email ke Ben

Ana memakai Gmail. Ben bekerja di perusahaan bernama Northwind. Alamatnya ben@northwind.com, dan perusahaannya memakai Outlook melalui Microsoft 365. Ana menulis email dan mengklik Kirim. Inilah yang terjadi.

1. Server pengirim Gmail mengambil email Ana.
2. Server membaca bagian setelah tanda @, yaitu northwind.com. Ini adalah domain, nama perusahaan Ben di internet.
3. Server mencari MX record northwind.com di DNS. DNS adalah direktori publik di internet. [MX record](/glossary/mx-record) menyebut server yang menerima email untuk sebuah domain.
4. MX record menunjuk ke server Microsoft. Server Gmail membuka koneksi ke server itu.
5. Server Gmail memperkenalkan diri dengan perintah `EHLO`. Lalu server memberikan alamat pengirim dengan `MAIL FROM`.
6. Server memberikan alamat penerima dengan `RCPT TO:<ben@northwind.com>`.
7. Server Microsoft menjawab `250`. Artinya server menerima email untuk alamat itu.
8. Server Gmail mengirim isi email dengan perintah `DATA`.
9. Server Microsoft menjawab `250` lagi. Server sudah menerima email dan menaruhnya di kotak masuk Ben.
10. Server Gmail mengakhiri koneksi dengan `QUIT`.

Ana dan Ben tidak melihat satu pun langkah ini. Ana melihat "Terkirim", dan Ben melihat email baru.

## Apa itu server SMTP

Server SMTP adalah server yang mengirim atau menerima email dengan SMTP. Dalam contoh tadi, server pengirim Gmail dan server penerima Microsoft sama-sama server SMTP. Perangkat lunak yang berjalan di server itu disebut [mail transfer agent](/glossary/mta), atau MTA.

Anda berurusan dengan server SMTP saat memasang program email atau aplikasi. Misalnya Anda ingin formulir kontak di situs web mengirim email melalui akun Gmail. Formulir itu memerlukan alamat server SMTP Gmail, yaitu `smtp.gmail.com`. Formulir juga memerlukan nomor port, nama pengguna, dan kata sandi. Formulir menyerahkan setiap email ke server itu, dan server meneruskannya.

Bisnis yang mengirim banyak email biasanya memakai [penyedia layanan email](/glossary/esp) seperti SendGrid atau Amazon SES. Layanan ini menjalankan server SMTP untuk pelanggannya.

## Port SMTP: 25, 587, dan 465

Port adalah angka yang memberi tahu server layanan mana yang dituju sebuah koneksi. SMTP memakai tiga nomor port yang umum.

| Port | Kegunaannya | Enkripsi |
| --- | --- | --- |
| 25 | Satu server email mengirim email ke server email lain | Opsional, diaktifkan dengan STARTTLS |
| 587 | Aplikasi atau program email menyerahkan email ke server SMTP-nya sendiri | Diaktifkan dengan STARTTLS sebelum login |
| 465 | Tugas yang sama dengan port 587 | Terenkripsi sejak awal |

STARTTLS adalah perintah yang mengubah koneksi terbuka menjadi koneksi terenkripsi. Enkripsi mengacak isi, sehingga tidak ada yang bisa membacanya di antara kedua server.

Jika Anda memasang aplikasi atau program email, pakai port 587 atau 465. Banyak penyedia internet rumah dan penyedia cloud memblokir koneksi keluar di port 25. Mereka melakukannya untuk mencegah komputer yang terinfeksi mengirim spam.

## SMTP vs IMAP dan POP3

SMTP mengirim email. SMTP tidak memungkinkan Anda membacanya. Dua protokol lain menangani pembacaan.

- **SMTP** mengirim email keluar, dari program ke server Anda dan dari server ke server.
- **IMAP** memungkinkan program email membaca email yang tetap tersimpan di server. Anda melihat kotak masuk yang sama di ponsel dan laptop.
- **POP3** mengunduh email ke satu perangkat. Pengaturan lama sering menghapus email dari server setelahnya.

Jadi, program email seperti Outlook atau Apple Mail memakai dua pengaturan. Program memakai IMAP atau POP3 untuk membaca kotak masuk. Program memakai SMTP untuk mengirim.

## Saat server SMTP menolak

Setiap balasan SMTP diawali kode tiga digit. Digit pertama memberi tahu jenis jawabannya.

- **2xx berarti berhasil.** `250` berarti permintaan diterima.
- **4xx berarti masalah sementara.** Server pengirim mencoba lagi nanti. Contoh: `451`, coba lagi nanti.
- **5xx berarti kegagalan permanen.** Mengirim lagi akan gagal. Contoh: `550 5.1.1`, kotak masuk tidak ada.

Balasan 5xx untuk email sungguhan menjadi [hard bounce](/glossary/hard-bounce). Balasan 4xx adalah [soft bounce](/glossary/soft-bounce). Halaman [kode error SMTP](/glossary/smtp-error-codes) mencantumkan kode yang umum dan arti setiap kode.

Sebagian server sengaja mengirim balasan 4xx kepada pengirim yang belum mereka kenal. Ini disebut [greylisting](/glossary/greylisting). Percobaan pertama gagal, dan percobaan ulang berikutnya diterima.

## SMTP dan verifikasi email

Sebuah [email verifier](/email-checker) memakai percakapan SMTP yang sama seperti contoh di atas, tetapi berhenti sebelum langkah 8. Alat ini menanyakan alamat dengan `RCPT TO`, dan balasan `250` berarti server menerima email untuk alamat itu. Balasan `550 5.1.1` berarti kotak masuk tidak ada. Lalu alat verifikasi mengirim `QUIT`, jadi tidak ada email yang pernah dikirim. Alat [verifikasi email massal](/bulk-email-verifier) menjalankan [verifikasi email](/) ini untuk seluruh daftar, sehingga Anda bisa menghapus alamat yang akan bounce.
