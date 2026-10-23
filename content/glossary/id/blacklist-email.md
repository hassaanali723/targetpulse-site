---
title: Blacklist email
description: Apa itu blacklist email, bedanya blacklist IP dan blacklist domain, kenapa pengirim masuk daftar, cara memeriksa IP atau domain Anda, dan cara keluar darinya.
slug: blacklist-email
date: 2026-10-23
updated: 2026-10-23
keyword: blacklist email
short: Blacklist email adalah daftar publik berisi alamat IP atau domain yang diketahui mengirim spam. Server email penerima memeriksa daftar ini dan memblokir atau menyaring email dari pengirim yang tercantum. Spamhaus mengelola beberapa daftar yang paling dikenal.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Hapus alamat mati yang bisa membawa Anda ke spam trap dan blacklist
---

## Apa itu blacklist email?

Blacklist email adalah daftar pengirim yang diketahui mengirim spam. Pengirim bisa dicantumkan berdasarkan alamat IP atau domainnya. Alamat IP adalah angka yang mengenali sebuah server di internet. Domain adalah nama setelah tanda @ di alamat email, seperti example.com.

Organisasi seperti Spamhaus menyusun daftar ini dan menerbitkannya. Server email di perusahaan dan penyedia email memeriksa setiap email yang masuk dengan satu daftar atau lebih. Jika pengirimnya tercantum, server bisa menolak email itu atau mengirimnya ke spam.

Sebagian besar blacklist diterbitkan melalui DNS, sistem direktori publik di internet. Daftar yang diterbitkan dengan cara ini disebut [DNSBL](/glossary/dnsbl).

## Contoh: email mulai bounce

Sebuah perusahaan bernama Orbit mengirim invoice dari server emailnya sendiri. Pada suatu Senin, banyak pelanggan mengatakan mereka tidak pernah menerima invoice. Kofi, yang mengurus IT di Orbit, membaca pesan bounce. Beberapa di antaranya berbunyi seperti ini:

`554 5.7.1 Service unavailable; Client host [192.0.2.25] blocked using zen.spamhaus.org`

Pesan itu menyebut Spamhaus. Kofi mencari alamat IP `192.0.2.25` di situs web Spamhaus. Alamat itu tercantum. Lalu ia menemukan penyebabnya. Selama akhir pekan, akun seorang karyawan diretas dan dipakai untuk mengirim ribuan email spam.

Kofi mengganti kata sandi dan menghentikan spam itu. Lalu ia meminta Spamhaus menghapus pencantuman itu. Setelah dihapus, invoice Orbit kembali terkirim.

## Blacklist IP vs blacklist domain

| Jenis | Yang dicantumkan | Yang diperiksa server penerima |
| --- | --- | --- |
| Blacklist IP | Alamat IP server pengirim | Server yang terhubung untuk mengirim email |
| Blacklist domain | Nama domain | Domain di alamat pengirim dan di tautan dalam email |

Spamhaus mengelola kedua jenis. Domain Blocklist miliknya, yang disebut DBL, mencantumkan domain. Daftar lainnya, seperti SBL dan XBL, mencantumkan alamat IP.

## Blacklist atau blocklist?

Kedua kata itu berarti sama. Spamhaus sekarang memakai kata "blocklist". Banyak alat dan orang masih menyebut "blacklist email", dan Anda juga bisa melihat kata "denylist". Lihat [blocklist](/glossary/blocklist).

## Kenapa pengirim masuk daftar

- **Spam trap.** Mengirim ke [spam trap](/glossary/spam-trap), yaitu alamat yang ada hanya untuk menangkap pengirim dengan daftar yang buruk. Daftar lama dan daftar yang dibeli sering berisi spam trap.
- **Keluhan spam.** Banyak penerima menandai email Anda sebagai spam.
- **Akun atau server yang diretas.** Seseorang mengambil alih sebuah akun dan mengirim spam darinya, seperti di contoh Orbit.
- **Volume yang tiba-tiba dari IP baru.** Alamat IP baru yang langsung mengirim banyak email terlihat seperti perilaku spammer.
- **Komputer yang terinfeksi.** Perangkat lunak berbahaya di komputer kantor Anda mengirim spam melalui jaringan Anda.

## Cara memeriksa apakah Anda masuk blacklist email

1. Cari alamat IP dan domain pengirim Anda. ESP atau tim IT Anda bisa memberi tahu.
2. Masukkan keduanya ke alat cek blacklist seperti MXToolbox. Alat ini memeriksa banyak daftar sekaligus.
3. Jika sebuah daftar menunjukkan Anda tercantum, buka situs web daftar itu. Pastikan pencantumannya dan baca alasannya.
4. Baca pesan bounce Anda. Pesan blokir sering menyebut nama daftarnya, seperti di contoh Orbit.

Tidak semua daftar punya dampak yang sama. Sebagian daftar kecil hanya dipakai oleh sedikit server email. Pencantuman di Spamhaus lebih berpengaruh, karena banyak server email memeriksa Spamhaus.

## Cara keluar dari blacklist

1. **Perbaiki penyebabnya dulu.** Ganti kata sandi yang diretas, bersihkan komputer yang terinfeksi, atau berhenti mengirim ke daftar yang buruk. Jika penyebabnya masih ada, Anda akan dicantumkan lagi.
2. **Pakai halaman penghapusan dari daftar itu.** Sebagian besar daftar punya formulir untuk meminta penghapusan, yang sering disebut delisting.
3. **Jelaskan apa yang sudah Anda perbaiki.** Sebagian daftar menanyakan apa yang terjadi dan apa yang Anda ubah.
4. **Tunggu hasilnya.** Sebagian daftar menghapus Anda secara otomatis setelah beberapa waktu tanpa spam. Daftar lain bertindak berdasarkan permintaan Anda.
5. **Pantau pengiriman Anda sesudahnya.** Periksa pesan bounce dan alat cek blacklist lagi selama beberapa minggu.

## Blacklist email dan verifikasi email

Spam trap adalah salah satu penyebab pengirim masuk blacklist, dan spam trap ditemukan di antara alamat lama, alamat yang dibeli, atau alamat yang salah ketik. Sebuah [email checker](/email-checker) menemukan alamat yang sudah tidak ada, sebelum alamat itu didaur ulang menjadi spam trap. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal ini untuk seluruh daftar dan juga menandai alamat dengan domain yang salah ketik. Verifikasi tidak bisa mengenali setiap spam trap, karena sebagian spam trap adalah kotak masuk yang berfungsi. Namun [verifikasi email](/) yang rutin menghapus alamat mati. Ini menurunkan bounce dan risiko Anda mengirim ke spam trap daur ulang.
