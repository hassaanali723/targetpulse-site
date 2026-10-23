---
title: Reputasi IP
description: Apa itu reputasi IP email, bedanya IP bersama dan IP khusus, apa yang membangun atau merusaknya, cara memeriksa reputasi IP Anda, dan cara memperbaikinya.
slug: reputasi-ip
date: 2026-10-23
updated: 2026-10-23
keyword: reputasi ip
short: Reputasi IP adalah seberapa besar penyedia kotak masuk seperti Gmail dan Outlook memercayai alamat IP asal email Anda. Alamat IP adalah angka yang mengenali sebuah server di internet. Reputasi IP yang buruk membuat email Anda masuk ke spam atau diblokir.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Jauhkan alamat mati dari daftar Anda untuk melindungi reputasi IP Anda
---

## Apa itu reputasi IP?

Setiap server di internet punya alamat IP. Alamat IP adalah angka, seperti `192.0.2.10`, yang mengenali server itu. Saat Anda mengirim email, email itu keluar dari server dengan sebuah alamat IP.

Penyedia kotak masuk seperti Gmail, Outlook.com, dan Yahoo mencatat email yang datang dari setiap alamat IP. Mereka menghitung berapa email yang bounce dan berapa orang yang menandainya sebagai spam. Mereka juga memeriksa apakah IP itu ada di [blacklist](/glossary/email-blacklist). Dari riwayat ini, mereka menentukan seberapa besar mereka memercayai IP itu. Tingkat kepercayaan itu adalah reputasi IP.

Reputasi IP email yang baik membantu email Anda sampai ke kotak masuk. Reputasi yang buruk membuat email masuk ke folder spam, terkirim lebih lambat, atau ditolak.

## Contoh: dua pengirim di satu IP bersama

ESP adalah perusahaan yang mengirim email untuk pelanggannya, seperti Mailchimp atau SendGrid. Misalnya dua pelanggannya mengirim dari alamat IP yang sama, `192.0.2.10`.

- **Pelanggan A** adalah toko buku. Toko ini mengirim email ke orang yang mendaftar di situs webnya. Sedikit email yang bounce, dan sedikit orang yang mengeluh.
- **Pelanggan B** membeli daftar berisi 50.000 alamat. Ribuan di antaranya bounce. Banyak penerima menekan "Laporkan spam".

Gmail mencatat bounce dan keluhan itu untuk `192.0.2.10`. Reputasi IP itu turun. Sebagian email toko buku sekarang juga bisa masuk ke spam, meskipun toko buku itu tidak melakukan kesalahan apa pun.

ESP berusaha mencegah hal ini. Banyak ESP memantau tingkat bounce dan keluhan setiap pelanggan. Mereka menghentikan sementara akun seperti milik Pelanggan B untuk melindungi pelanggan lain di IP yang sama.

## IP bersama vs IP khusus

| | IP bersama (shared IP) | IP khusus (dedicated IP) |
| --- | --- | --- |
| Siapa yang mengirim darinya | Banyak pelanggan dari ESP yang sama | Hanya Anda |
| Reputasinya bergantung pada | Semua orang yang mengirim darinya | Hanya email Anda |
| Cocok untuk | Pengirim kecil dan menengah | Pengirim besar dengan volume yang stabil |
| Pemasangan | Siap dipakai | Perlu warm-up terlebih dahulu |

IP khusus memberi Anda kendali penuh atas reputasinya. Ini juga berarti email baik milik orang lain tidak membantu Anda. IP khusus yang baru belum punya riwayat, jadi Anda membangun reputasinya secara perlahan.

## Apa yang membangun atau merusak reputasi IP

Hal-hal ini membangun reputasi IP yang baik:

- Mengirim jumlah email yang stabil, tanpa lonjakan tiba-tiba.
- Bounce rate yang rendah, karena daftar Anda bersih.
- Sedikit keluhan spam, karena orang memang meminta email Anda.

Hal-hal ini merusaknya:

- Banyak [hard bounce](/glossary/hard-bounce) dari alamat yang tidak ada.
- Email ke [spam trap](/glossary/spam-trap), yaitu alamat yang ada hanya untuk menangkap pengirim dengan daftar yang buruk.
- Keluhan spam dari orang yang tidak mengharapkan email Anda.
- Tercantum di blacklist seperti Spamhaus.
- Volume email besar dari IP baru yang belum punya riwayat.

## Cara memeriksa reputasi IP Anda

1. Cari IP pengirim Anda. Kirim email ke akun Gmail Anda sendiri, buka, lalu pilih Tampilkan versi asli. Gmail menampilkan alamat IP di samping hasil SPF. ESP Anda juga bisa memberi tahu.
2. Masukkan IP itu ke alat cek blacklist seperti MXToolbox. Alat ini memeriksa IP terhadap banyak blacklist publik sekaligus.
3. Untuk Outlook.com, daftar ke Microsoft SNDS (Smart Network Data Services). Layanan ini menampilkan data tentang email yang dikirim IP Anda ke pengguna Outlook.com.
4. Untuk Gmail, pakai [Google Postmaster Tools](/glossary/postmaster-tools). Layanan ini menampilkan data tentang email yang dikirim domain Anda ke pengguna Gmail.

## Cara memperbaiki reputasi IP Anda

1. Cari dan perbaiki penyebabnya dulu, seperti daftar yang buruk atau akun yang diretas.
2. Hapus alamat yang bounce, dan verifikasi daftar Anda sebelum pengiriman berikutnya.
3. Berhenti mengirim ke orang yang tidak pernah membuka email Anda.
4. Jika IP Anda ada di blacklist, minta penghapusan setelah Anda memperbaiki penyebabnya.
5. Mulai pelan-pelan dengan setiap IP baru. Kirim volume harian yang kecil dan naikkan selama beberapa minggu. Lihat [IP warming](/glossary/ip-warming).

## Reputasi IP vs reputasi domain

Reputasi IP melekat pada alamat server. [Reputasi domain](/glossary/domain-reputation) melekat pada nama setelah tanda @ di alamat email Anda, seperti example.com. Jika Anda pindah ke ESP baru, IP Anda berubah, tetapi domain Anda tetap sama. Penyedia memakai keduanya, dan masalah pada salah satunya bisa mengganggu pengiriman Anda.

## Reputasi IP dan verifikasi email

Bounce dan spam trap sama-sama merusak reputasi IP, dan keduanya berasal dari alamat yang buruk di daftar Anda. Sebuah [email checker](/email-checker) menanyakan ke server penerima apakah sebuah alamat ada sebelum Anda mengirim. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal ini untuk seluruh daftar dan menandai alamat yang akan bounce. Menghapus alamat itu melalui [verifikasi email](/) berarti lebih sedikit bounce yang tercatat untuk IP Anda. Verifikasi tidak bisa menemukan setiap spam trap, karena sebagian spam trap adalah kotak masuk yang berfungsi. Namun verifikasi menghapus alamat mati sebelum alamat itu dijadikan spam trap.
