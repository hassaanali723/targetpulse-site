---
title: Greylisting
description: Apa itu greylisting, kenapa server menolak email pertama Anda dan menerima yang kedua, berapa lama biasanya penundaannya, dan pengaruhnya pada hasil verifikasi.
slug: greylisting
date: 2026-10-23
updated: 2026-10-23
keyword: greylisting
short: Greylisting adalah pertahanan terhadap spam. Server email menolak email pertama dari pengirim yang belum dikenalnya, lalu menerima email yang sama saat pengirim mencoba lagi beberapa menit kemudian. Server email sungguhan mencoba lagi, tetapi sebagian besar perangkat lunak spam tidak.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Dapatkan jawaban yang jelas untuk alamat yang menerapkan greylisting pada pemeriksaan Anda
---

## Apa itu greylisting?

Greylisting adalah pertahanan terhadap spam yang bekerja dengan penundaan. Server email menolak email pertama dari pengirim baru dan menerimanya pada percobaan kedua. Cara ini dijelaskan di RFC 6647.

Pertama, beberapa istilah. Server adalah komputer yang menyala terus dan menangani email. Alamat IP adalah angka yang mengenali sebuah server di internet. Spam adalah email massal yang tidak diinginkan.

Server penerima yang memakai greylisting menyimpan catatan setiap pengirim yang pernah dilihatnya. Server melihat tiga hal:

1. alamat IP pengirim;
2. alamat pengirim;
3. alamat penerima.

Jika server belum pernah melihat kombinasi ini, server menolak email dengan error sementara. Server email yang diatur dengan benar memasukkan email ke antrean dan mencoba lagi. Antrean adalah daftar email yang sedang menunggu untuk dikirim oleh server. Sebagian besar perangkat lunak spam hanya mengirim sekali dan tidak mencoba lagi.

Saat percobaan ulang datang, server menerima email dan menyimpan pengirim di catatannya. Setelah itu, email dari pengirim yang sama diterima pada percobaan pertama.

## Contoh sederhana

Berikut greylisting dari sisi pengirim.

1. **Nina mengirim email ke pemasok baru.** Nina bekerja di sebuah kafe. Pukul 9.00 ia mengirim email ke orders@supplier.example untuk pertama kalinya.
2. **Server pemasok belum mengenalnya.** Server itu belum pernah melihat kombinasi server Nina, alamat Nina, dan penerima ini.
3. **Server mengirim error sementara.** Server menjawab `451` dengan pesan seperti "greylisted, try again later".
4. **Server Nina menunggu.** Server email Nina menyimpan email di antreannya. Nina tidak melihat apa pun.
5. **Server mencoba lagi.** Sekitar pukul 9.15, server Nina mengirim email yang sama lagi.
6. **Email diterima.** Server pemasok melihat percobaan kedua. Server menerima email dan menyimpan data Nina.
7. **Lain kali tidak ada penundaan.** Saat Nina mengirim email ke pemasok minggu depan, email diterima pada percobaan pertama.

Program spam yang mengirim ribuan email biasanya tidak mencoba untuk kedua kalinya. Jadi, emailnya tidak pernah sampai.

## Seperti apa tampilannya bagi pengirim

Percobaan pertama mendapat kode yang diawali angka 4. Biasanya `450` atau `451`, dengan pesan seperti "greylisted, try again later". Server email Anda memperlakukannya sebagai [soft bounce](/glossary/soft-bounce) dan mencoba lagi sesuai jadwalnya sendiri. Soft bounce adalah kegagalan pengiriman sementara.

Server penerima menentukan berapa lama harus menunggu sebelum menerima percobaan ulang. Sekitar 15 menit adalah hal yang umum. Sebagian server memakai penundaan yang lebih singkat atau lebih lama.

Biasanya Anda tidak menyadari greylisting. Email sampai beberapa menit lebih lambat. Jika alat Anda menampilkan pemberitahuan bounce, pemberitahuan itu hilang dengan sendirinya.

## Kapan greylisting berpengaruh

Greylisting tidak memengaruhi kampanye biasa. Greylisting berpengaruh dalam dua kasus.

**Email yang terikat waktu.** Reset kata sandi atau kode sekali pakai yang datang 15 menit terlambat tidak berguna bagi pengguna. Karena itu, pengirim email transaksional kadang meminta domain penerima memasukkan alamat IP mereka ke daftar izin (allow list). Email transaksional adalah email yang dikirim karena sesuatu yang dilakukan pengguna, seperti struk atau kode login.

**Contoh:** Leo meminta kode login ke sebuah situs web. Kode itu dikirim ke alamat kantornya, yang memakai greylisting. Kode itu sampai 15 menit kemudian. Saat itu Leo sudah berhenti mencoba login.

**Verifikasi.** Alat verifikasi memeriksa sebuah alamat dengan memulai percakapan SMTP dan berhenti sebelum mengirim apa pun. SMTP adalah cara standar server email berkomunikasi satu sama lain untuk mengirim email. Di server yang memakai greylisting, percobaan pertama mendapat jawaban `4xx`, yaitu kode yang diawali angka 4. Alat verifikasi yang berhenti setelah satu percobaan melaporkan alamat itu sebagai tidak diketahui (unknown). Padahal alamat itu mungkin valid.

## Greylisting dan secure email gateway

Banyak domain perusahaan memakai [secure email gateway](/glossary/secure-email-gateway) seperti Proofpoint atau Mimecast. Secure email gateway, atau gateway keamanan email, adalah layanan keamanan yang memeriksa email perusahaan sebelum sampai ke kotak masuk karyawan. Gateway ini secara bawaan menerapkan greylisting pada pengirim yang tidak dikenal. Ini salah satu alasan pemeriksaan dasar memberi hasil tidak diketahui untuk banyak alamat B2B. Alamat B2B adalah alamat kantor milik orang-orang di perusahaan lain.

## Bagaimana alat verifikasi menanganinya

[Email checker](/email-checker) yang baik memperlakukan jawaban `4xx` sebagai "coba lagi", bukan sebagai hasil. Alat itu menunggu, mencoba lagi dari alamat IP yang sama, dan melaporkan jawaban yang diberikan server setelah penundaan greylisting. Giggal.ai melakukan ini saat menangani domain yang memakai gateway. Dengan cara ini, Giggal.ai memberi hasil valid atau tidak valid, sementara pemeriksaan dengan satu percobaan memberi hasil tidak diketahui.

Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal yang sama untuk setiap alamat di daftar. [Verifikasi email](/) tidak bisa mematikan greylisting. Verifikasi menunggu penundaan selesai, lalu melaporkan apakah setiap alamat ada.
