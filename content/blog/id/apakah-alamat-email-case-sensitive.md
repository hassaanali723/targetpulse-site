---
title: "Apakah Alamat Email Case Sensitive?"
seoTitle: "Apakah Alamat Email Case Sensitive? (Gmail dan Outlook)"
description: "Umumnya tidak. Gmail dan Outlook mengabaikan huruf besar, tetapi standar mengizinkan bagian sebelum @ case sensitive. Kapan ini penting dan cara menyimpannya."
slug: apakah-alamat-email-case-sensitive
date: 2026-10-23
updated: 2026-10-23
keyword: apakah alamat email case sensitive
image: /blog/covers/id/apakah-alamat-email-case-sensitive.webp
imageAlt: Sampul tentang case sensitive pada alamat email dengan aturan untuk domain, Gmail, Outlook, dan database
cta: Cek apakah sebuah alamat email benar-benar ada
---

Alamat email umumnya tidak case sensitive, artinya tidak membedakan huruf besar dan huruf kecil. Jika Anda mengetik John.Smith@gmail.com atau john.smith@gmail.com, email tetap masuk ke kotak masuk yang sama. Bagian sesudah @ sama sekali mengabaikan huruf besar. Pengecualiannya ada di bagian sebelum @. Secara teknis, standar email mengizinkan server menganggap Smith dan smith sebagai dua orang yang berbeda. Hal ini perlu Anda ketahui jika Anda mengelola formulir pendaftaran atau daftar email.

## Bagian sesudah @ tidak pernah membedakan huruf besar

Nama domain sesudah tanda @ tidak pernah case sensitive. RFC 5321 menyatakan bahwa domain mailbox mengikuti aturan DNS biasa, dan DNS tidak membedakan huruf besar dan kecil. Artinya, GMAIL.COM, Gmail.com, dan gmail.com mengarah ke server email yang sama persis. Anda bisa mengetik domain dengan huruf besar atau kecil tanpa mengubah tujuan pesan Anda.

## Apakah email case sensitive sebelum @?

Local-part, yaitu nama pengguna di sebelah kiri @, bekerja dengan cara lain. Menurut RFC 5321 bagian 2.4, "local-part sebuah mailbox HARUS diperlakukan sebagai case sensitive." Server yang meneruskan pesan Anda wajib mempertahankan huruf besar dan huruf kecil persis seperti yang ditulis. Server penerima yang menyimpan mailbox itulah yang memutuskan apakah `Smith` dan `smith` milik dua orang yang berbeda.

Bagian yang sama juga memperingatkan bahwa "memanfaatkan sifat case sensitive pada local-part mailbox menghambat interoperabilitas dan tidak dianjurkan." Bayangkan dua rekan kerja di satu perusahaan, JSmith@ dan jsmith@, dan betapa seringnya email mereka akan tertukar. Penyedia besar menghindari masalah itu dengan mengabaikan huruf besar sepenuhnya.

## Gmail dan Outlook

Penyedia yang menangani sebagian besar email pribadi memilih untuk mengabaikan huruf besar sepenuhnya. Para product expert di komunitas bantuan Gmail menegaskan bahwa Gmail mengabaikan huruf besar, baik saat Anda membuat akun maupun saat email masuk. Entah seseorang menulis ke `JaneDoe@gmail.com` atau `janedoe@gmail.com`, Google mengirim keduanya ke mailbox yang sama. Google juga menganggap `@googlemail.com` dan `@gmail.com` sebagai alamat yang sama.

Gmail juga mengabaikan titik pada alamat pribadi, jadi `jane.doe@gmail.com` dan `janedoe@gmail.com` masuk ke kotak masuk yang sama. Namun jangan menganggap aturan ini berlaku di mana saja. Dokumentasi Google menyatakan bahwa titik tetap berpengaruh pada akun Google Workspace yang dikelola lewat domain kantor atau sekolah. Titik dan huruf besar adalah dua aturan yang terpisah. Jadi jangan menganggap penyedia lain mengabaikan titik hanya karena Gmail melakukannya.

Jawaban Microsoft mirip. Dalam sebuah balasan di forum dukungan Microsoft, seorang penjawab menjelaskan bahwa bagian sesudah @ tidak pernah case sensitive, bahwa huruf besar pada nama pengguna bergantung pada penyedia, dan bahwa penyedia besar seperti Outlook dan Gmail mengabaikannya. Balasan yang sama menambahkan bahwa beberapa perusahaan memang menjalankan server sendiri yang case sensitive.

## Kapan huruf besar masih bisa menimbulkan masalah

Masalah paling sering muncul saat login. Misalnya Anda mendaftar sebagai `Sarah@example.com` di ponsel karena keyboard otomatis membuat huruf pertama menjadi kapital. Lalu Anda login dengan mengetik `sarah@example.com`. Sistem yang dibuat secara sederhana akan menjawab bahwa akun tidak ditemukan. Pengguna tidak mengubah alamatnya, tetapi formulir login membandingkan teks dengan membedakan huruf besar secara ketat.

Daftar email dan CRM punya versi masalah sendiri. Jika seseorang mendaftar sebagai `Bob@company.com` dan kemudian mengunduh panduan sebagai `bob@company.com`, banyak platform menghitungnya sebagai dua lead terpisah. Angka Anda jadi terlalu besar, dan orang menerima kampanye ganda. Hapus data ganda tanpa membedakan huruf besar sebelum Anda [memverifikasi atau mengirim](/email-list-cleaning) (dalam bahasa Inggris) ke daftar pemasaran.

Lalu ada server perusahaan yang jarang ditemui, yang memang membedakan huruf besar secara ketat. Ini pengecualian yang disebut dalam balasan Microsoft tadi. Jika seorang kontak menulis alamatnya sebagai `M.MacDonald@specialtycorp.com` di kartu nama, pertahankan huruf besar itu saat Anda mengirim email kepadanya. Cara ini tidak merugikan sistem standar, dan menghindari masalah pengiriman pada sistem yang membedakan huruf besar.

## Jika Anda menyimpan alamat email

Jika Anda membangun aplikasi web atau mengelola database kontak, pakai pendekatan yang mempertahankan huruf asli. Simpan alamat persis seperti yang diketik pengguna, tetapi lakukan semua perbandingan, pencarian, dan pemeriksaan keunikan dengan huruf kecil.

Dengan menyimpan input asli, Anda menghormati tampilan yang dipilih pengguna di profil dan header email. Normalisasi ke huruf kecil mencegah akun ganda. Jika seseorang mendaftar sebagai `IStillUse@AOL.COM`, jangan paksa nama tampilannya menjadi huruf kecil. Namun anggap `iSTilLUSE@aol.com` sebagai data ganda dari alamat itu.

Untuk menjaga keunikan di PostgreSQL, buat index pada ekspresi huruf kecil, bukan unique constraint biasa:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL juga menyediakan extension `citext`, yang membandingkan string tanpa membedakan huruf besar. Di MySQL, collation default (`utf8mb4_0900_ai_ci`) sudah tidak membedakan huruf besar. Jadi unique key standar sudah menangani perbedaan huruf besar tanpa fungsi tambahan.

Waspadai jebakan konversi ke huruf kecil di bahasa backend, terutama Java. Di Java, memanggil `email.toLowerCase()` memakai locale default server. Pada locale Turki, huruf Latin kapital `I` berubah menjadi `ı` (huruf i kecil tanpa titik), bukan `i`. Akibatnya alamat seperti `INFO@example.com` menjadi rusak. Untuk mencegah bug ini, berikan `Locale.ROOT`:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

`toLowerCase()` di JavaScript aman dari jebakan ini karena memakai pemetaan default Unicode, bukan pengaturan locale host. Hanya `toLocaleLowerCase()` yang bergantung pada locale.

Untuk menangkap format yang rusak dan input yang salah sebelum masuk ke database, validasi alamat dengan [API validasi email](/email-validation-api) (dalam bahasa Inggris) saat pendaftaran. API ini menangkap salah ketik dan domain mati selagi orang itu masih ada di halaman.

## Pertanyaan yang sering diajukan

**Apakah Gmail case sensitive?**
Tidak. Gmail mengabaikan huruf besar saat pembuatan akun dan saat pengiriman pesan. Jika alamat Anda john.doe@gmail.com, Anda akan menerima pesan yang dikirim ke JOHN.DOE@gmail.com dan John.Doe@googlemail.com. Anda tidak bisa mendaftarkan akun baru yang hurufnya hanya berbeda besar kecilnya dari pengguna yang sudah ada.

**Apakah berpengaruh jika saya mengetik alamat email dengan huruf besar?**
Untuk pengiriman biasa ke kotak masuk pribadi dan bisnis, huruf besar tidak akan menghalangi pengiriman. Server email penerima mengabaikan huruf besar dan mengirim pesan seperti biasa. Anda hanya perlu berhati-hati dengan formulir login yang membandingkan alamat email sebagai string yang harus sama persis.

**Apakah email ID case sensitive?**
Dalam praktiknya, tidak. Email ID hanyalah nama lain untuk alamat email, dan Gmail, Outlook, serta penyedia besar lainnya mengabaikan huruf besar di dalamnya. Standar email memang mengizinkan server membedakan huruf besar sebelum @, tetapi hal itu jarang terjadi. Jadi menulis ID Anda dengan huruf besar agar mudah dibaca sangat kecil kemungkinannya membuat Anda kehilangan email.

**Apakah saya harus menyimpan alamat email dengan huruf kecil?**
Bandingkan dan buat index alamat email dengan huruf kecil untuk mencegah akun ganda dan login yang gagal. Simpan juga huruf besar asli dari pengguna di kolom tampilan, agar notifikasi tetap rapi. Jika Anda hanya bisa menyimpan satu kolom, simpan alamat seperti yang diketik dan bandingkan dengan lower() agar Anda tidak kehilangan aslinya.

**Apakah huruf besar bisa membuat email bounce?**
Sangat jarang. Hal ini hanya terjadi pada server yang tidak biasa, yang diatur untuk menganggap Admin@ dan admin@ sebagai mailbox terpisah. Jika alamat dengan huruf besar mengalami bounce, cari penyebab lain lebih dulu, seperti salah ketik atau mailbox yang sudah tidak ada. Kode di pesan bounce memberi tahu Anda penyebabnya, seperti dijelaskan di [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

Huruf besar tidak akan menghalangi email sampai, tetapi [salah ketik](/email-checker) bisa. Jika Anda membersihkan daftar kontak sebelum pengiriman berikutnya, periksa daftar itu dengan [Giggal.ai](/email-list-cleaning) (dalam bahasa Inggris) untuk menemukan mailbox mati dan domain rusak lebih dulu.
