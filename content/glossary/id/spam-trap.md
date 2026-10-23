---
title: Spam trap
description: Apa itu spam trap, dengan contoh. Tiga jenisnya, cara spam trap masuk ke daftar Anda, apa yang terjadi jika Anda mengirim ke sana, dan cara menghindarinya.
slug: spam-trap
date: 2026-10-23
updated: 2026-10-23
keyword: spam trap
short: Spam trap adalah alamat email yang tidak dipakai oleh orang sungguhan. Alamat ini ada hanya untuk menangkap pengirim yang mengirim email tanpa izin. Jika Anda mengirim email ke spam trap, itu menunjukkan bahwa daftar Anda dibeli, disalin dari situs web, atau lama tidak dibersihkan.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Hapus alamat mati sebelum menjadi spam trap
---

## Apa itu spam trap?

Spam trap adalah alamat email yang terlihat biasa, tetapi tidak dibaca oleh orang sungguhan. Tidak pernah ada yang mendaftar newsletter dengan alamat itu. Tidak pernah ada yang memberikannya kepada sebuah perusahaan.

Jadi, jika ada email yang sampai ke alamat itu, organisasi yang mengelola spam trap mengetahui satu hal dengan pasti. Pengirim tidak mendapatkan alamat itu dari pemiliknya. Pengirim membelinya, menyalinnya dari situs web, atau menyimpannya terlalu lama di daftar lama.

Siapa yang mengelola spam trap? Dokumentasi Amazon untuk layanan pengiriman emailnya (Amazon SES) menyatakan bahwa spam trap dikelola oleh penyedia layanan internet, penyedia kotak masuk seperti layanan email gratis yang besar, dan organisasi antispam. Alamatnya sengaja dirahasiakan. Jika pengirim mengetahuinya, mereka cukup menghapusnya.

## Contoh sederhana

Begini cara sebuah perusahaan mengirim email ke spam trap tanpa menyadarinya.

1. **Sebuah toko membeli daftar.** "Shop Online Ltd" membeli daftar berisi 10.000 alamat email dari situs web yang menjual data kontak.
2. **Daftar itu berisi spam trap.** Salah satu alamatnya adalah info@hidden-page.example. Sebuah organisasi spam trap menaruhnya di halaman web bertahun-tahun lalu, di tempat yang akan ditemukan alat pengumpul alamat. Tidak pernah ada orang yang memakainya.
3. **Toko itu mengirim promosi.** Email dikirim ke semua 10.000 alamat, termasuk spam trap.
4. **Tidak ada yang terlihat salah.** Spam trap tidak bounce. Email diterima seperti email lain. Toko itu tidak melihat pesan error.
5. **Spam trap mencatat pengirimnya.** Organisasi yang mengelola spam trap mencatat server pengirim dan domain toko itu.
6. **Masalah muncul belakangan.** Beberapa hari kemudian, lebih banyak email toko itu masuk ke folder spam. Sebagian pelanggan berhenti menerima konfirmasi pesanan. Toko itu tidak tahu penyebabnya.

Toko itu tidak pernah melihat pesan "Anda mengenai spam trap". Toko itu hanya melihat akibatnya.

## Tiga jenis spam trap

### 1. Pristine trap (tidak pernah dipakai siapa pun)

Alamat ini dibuat hanya untuk menjadi spam trap. Alamat ini disembunyikan di halaman web, di tempat yang akan ditemukan alat penyalin alamat dari internet (disebut alat scraping).

**Contoh:** alamat seperti contact-7731@some-domain.example muncul di kode sebuah halaman web. Pengunjung sungguhan tidak pernah melihatnya. Alat scraping mengumpulkannya.

Hanya daftar yang dibeli atau hasil scraping yang berisi pristine trap. Orang yang mendaftar di situs web Anda tidak mungkin menjadi pristine trap.

### 2. Recycled trap (alamat lama yang kembali sebagai spam trap)

Alamat ini dulu adalah alamat nyata. Lalu pemiliknya berhenti memakainya. Dalam waktu lama, penyedia email memantulkan setiap email yang dikirim ke sana, artinya email dikembalikan sebagai tidak dapat dikirim. Setelah itu, penyedia mengaktifkan kembali alamat itu sebagai spam trap.

Amazon menggambarkan alamat ini sebagai alamat "yang dulu valid, tetapi sudah tidak dipakai (dan terus bounce) dalam waktu lama".

**Contoh:** Sarah mendaftar newsletter Anda pada 2019 dengan sarah.m@oldjob.example. Ia keluar dari pekerjaan itu. Alamatnya mulai bounce, tetapi Anda terus mengirim. Bertahun-tahun kemudian, alamat itu berubah menjadi spam trap. Email Anda berikutnya masuk ke sana.

Daftar yang tidak pernah dibersihkan lama-kelamaan mengumpulkan recycled trap.

### 3. Typo trap (salah ketik di domain)

Spam trap ini berada di domain yang terlihat seperti domain terkenal dengan sedikit salah ketik. Domain adalah bagian setelah tanda @.

**Contoh:** seseorang mengetik alamatnya di formulir pendaftaran Anda dengan satu huruf yang salah di domainnya. Domain itu terlihat hampir sama dengan domain penyedia email besar, tetapi bukan. Jika domain yang salah ketik itu dikelola sebagai spam trap, setiap email yang Anda kirim ke alamat itu tercatat.

Typo trap menangkap pengirim yang tidak pernah memeriksa apa yang diketik orang di formulir mereka.

## Apa yang terjadi jika Anda mengirim ke spam trap

Anda tidak mendapat bounce. Spam trap menerima email seperti kotak masuk biasa. Lalu organisasi yang mengelolanya mencatat data pengiriman Anda, seperti alamat IP (angka yang mengenali server asal email Anda) dan domain Anda.

Yang terjadi selanjutnya tergantung pada siapa yang mengelola spam trap:

- **Alamat IP atau domain Anda bisa dimasukkan ke [blacklist](/glossary/email-blacklist).** Banyak server email memeriksa daftar ini dan menolak email dari pengirim yang tercantum.
- **Reputasi Anda di penyedia email itu bisa turun.** Setelah itu, lebih banyak email Anda masuk ke spam.
- **Layanan pengiriman email Anda bisa meninjau akun Anda.** Layanan itu bisa menghentikan sementara pengiriman Anda sampai Anda memperbaiki daftar.

Berapa kali email Anda harus masuk ke spam trap sampai ada dampaknya? Amazon tidak memberi angka. Amazon menyatakan bahwa "bahkan sedikit spam trap yang terkena bisa berdampak sangat buruk".

## Cara menjauhkan spam trap dari daftar Anda

Tidak ada yang bisa memberi Anda daftar alamat spam trap. Alamatnya rahasia. Jadi, Anda melindungi daftar Anda dengan kebiasaan yang baik:

1. **Jangan pernah membeli, menyewa, atau melakukan scraping alamat email.** Hanya dengan cara ini pristine trap masuk ke sebuah daftar.
2. **Segera hapus setiap alamat yang mengalami [hard bounce](/glossary/hard-bounce).** Hard bounce berarti alamatnya tidak ada. Amazon meminta Anda menghapus alamat seperti ini "jauh sebelum alamat itu diubah menjadi spam trap".
3. **Berhenti mengirim email ke orang yang tidak membuka atau mengklik selama berbulan-bulan.** Recycled trap bersembunyi di antara alamat lama yang diam.
4. **Periksa alamat saat orang mendaftar.** Salah ketik yang tertangkap di halaman pendaftaran tidak akan pernah menjadi typo trap di daftar Anda.

## Spam trap dan verifikasi email

Sebuah [email verifier](/email-checker) tidak bisa mengenali setiap spam trap. Recycled trap adalah kotak masuk sungguhan yang menerima email, jadi alamat itu bisa lolos pemeriksaan sebagai valid. Berhati-hatilah dengan alat apa pun yang menjanjikan bisa menemukan semua spam trap.

Yang dilakukan [verifikasi email](/) adalah menghapus alamat yang akan menjadi spam trap. Verifikasi menemukan alamat yang sudah tidak ada, sehingga Anda bisa menghapusnya sebelum penyedia mendaur ulangnya. Verifikasi juga menangkap domain yang salah ketik sebelum email pertama Anda dikirim. Untuk membersihkan seluruh daftar sekaligus, unggah daftar itu ke alat [verifikasi email massal](/bulk-email-verifier). Verifikasi tidak membuat daftar yang dibeli menjadi aman. Tidak membeli daftar adalah sebuah keputusan, bukan sebuah pemeriksaan.
