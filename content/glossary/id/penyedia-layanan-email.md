---
title: Penyedia layanan email (ESP)
description: Apa itu penyedia layanan email, contohnya seperti Mailchimp dan SendGrid, bedanya ESP dengan Gmail atau Outlook, dan kenapa ESP memantau bounce Anda.
slug: penyedia-layanan-email
date: 2026-10-23
updated: 2026-10-23
keyword: penyedia layanan email
short: Penyedia layanan email, atau ESP (email service provider), adalah perusahaan yang layanannya mengirim email untuk Anda. Bisnis memakainya untuk mengirim newsletter, struk, dan reset kata sandi ke banyak orang. Mailchimp, Brevo, dan SendGrid adalah contohnya.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Verifikasi daftar Anda sebelum mengunggahnya ke ESP
---

## Apa itu penyedia layanan email (ESP)?

Penyedia layanan email, atau ESP (email service provider), adalah perusahaan yang mengirim email untuk bisnis lain. Email yang dikirim dengan cara ini kadang disebut ESP email. Anda menulis email dan memilih siapa yang menerimanya. Server milik ESP mengirimnya ke setiap alamat. Server adalah komputer yang menyala terus dan melakukan tugas untuk komputer lain.

Bisnis memakai ESP karena kotak masuk biasa tidak dibuat untuk mengirim ke banyak orang. Gmail dan Outlook.com membatasi jumlah email yang bisa dikirim satu akun setiap hari. Keduanya juga tidak punya alat untuk tautan berhenti berlangganan, penanganan bounce, atau laporan kampanye.

## Contoh: toko roti mengirim newsletter

Rosa punya toko roti. Ada 3.000 pelanggan di daftar emailnya. Setiap bulan ia mengirim newsletter tentang kue baru dan jam buka.

Awalnya ia mencoba mengirimnya dari akun Gmail pribadinya. Gmail menghentikannya setelah beberapa ratus email, karena akun pribadi punya batas pengiriman harian. Pelanggannya juga tidak punya cara untuk berhenti berlangganan.

Jadi, ia mendaftar di sebuah ESP. Sekarang ia melakukan ini setiap bulan.

1. Ia mengunggah daftar 3.000 alamat ke ESP.
2. Ia menulis newsletter di editor milik ESP.
3. Ia mengklik kirim. Server ESP mengirim email ke semua 3.000 alamat.
4. ESP menambahkan tautan berhenti berlangganan ke setiap email. ESP menghapus orang yang mengkliknya.
5. Keesokan harinya, ia membaca laporan. Laporan itu menunjukkan berapa email yang bounce, dibuka, dan diklik.

## Contoh penyedia layanan email

| ESP | Umumnya dipakai untuk |
| --- | --- |
| Mailchimp | Newsletter dan kampanye pemasaran |
| Brevo | Kampanye pemasaran dan email transaksional |
| SendGrid | Email transaksional dari aplikasi, dan email pemasaran |
| Amazon SES | Mengirim email dari aplikasi dan situs web |
| Postmark | Email transaksional seperti struk dan reset kata sandi |

## ESP vs penyedia kotak masuk

Keduanya sering tertukar. Tugasnya berbeda.

- **Penyedia layanan email** mengirim email untuk Anda. Contoh: Mailchimp, SendGrid, Amazon SES.
- **Penyedia kotak masuk** menyimpan kotak masuk tempat orang membaca email mereka. Contoh: Gmail, Outlook.com, Yahoo Mail.

Dalam contoh toko roti, ESP mengirim newsletter Rosa. Gmail, Outlook.com, dan Yahoo Mail adalah tempat pelanggannya membacanya. Penyedia kotak masuk menentukan apakah newsletter masuk ke kotak masuk atau ke spam. ESP tidak bisa membuat keputusan itu.

## ESP pemasaran vs ESP transaksional

ESP menangani dua jenis email.

- **Email pemasaran** dikirim ke banyak orang sekaligus, sesuai jadwal Anda. Newsletter dan pengumuman diskon adalah email pemasaran.
- **Email transaksional** dikirim ke satu orang setelah ia melakukan sesuatu. Struk, reset kata sandi, dan info pengiriman barang adalah email transaksional.

Sebagian ESP fokus pada satu jenis. Postmark dan Amazon SES terutama dipakai untuk email transaksional. Mailchimp paling dikenal untuk email pemasaran. ESP lain, seperti Brevo dan SendGrid, menyediakan keduanya. Banyak bisnis mengirim kedua jenis ini melalui akun atau layanan yang terpisah. Dengan begitu, masalah pada sebuah kampanye tidak menunda reset kata sandi.

## Apa yang dilakukan penyedia layanan email untuk Anda

- Menjalankan server pengiriman dan perangkat lunak [mail transfer agent](/glossary/mta) di server itu.
- Mengirim setiap email melalui [SMTP](/glossary/smtp), aturan standar yang dipakai server untuk meneruskan email satu sama lain.
- Menambahkan tautan berhenti berlangganan dan menyimpan daftar orang yang sudah berhenti berlangganan.
- Membaca pesan bounce dan berhenti mengirim ke alamat yang mengalami hard bounce.
- Menampilkan laporan tentang open, klik, bounce, dan keluhan spam.
- Membantu Anda memasang SPF dan DKIM, agar email Anda membuktikan bahwa email itu berasal dari domain Anda.

## Kenapa ESP peduli pada bounce Anda

Saat Anda mengirim melalui ESP, Anda memakai server miliknya dan sering kali alamat IP miliknya. Alamat IP adalah angka yang mengenali sebuah server di internet. Jika email Anda bounce atau mendapat keluhan spam, reputasi alamat IP itu turun. Pelanggan lain yang memakai alamat IP yang sama juga bisa terdampak.

Karena itu, banyak ESP memantau bounce rate setiap akun. Jika terlalu tinggi, ESP bisa meninjau akun itu atau menghentikannya sementara. Daftar dengan banyak alamat lama atau salah ketik menghasilkan [bounce rate](/glossary/bounce-rate) yang tinggi.

## Penyedia layanan email dan verifikasi email

Verifikasi daftar Anda sebelum mengunggahnya ke ESP. Sebuah [email checker](/email-checker) memberi tahu apakah satu alamat ada. Alat [verifikasi email massal](/bulk-email-verifier) memeriksa seluruh file, seperti 3.000 alamat milik Rosa, dan menandai alamat yang akan bounce. Anda menghapusnya dan mengunggah daftar yang bersih. Langkah [verifikasi email](/) ini tidak menggantikan ESP Anda, tetapi menurunkan bounce rate dan melindungi akun ESP Anda.
