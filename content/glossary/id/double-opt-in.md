---
title: Double opt-in
description: Apa arti double opt-in, cara kerja email konfirmasi, perbandingan single dan double opt-in, kenapa bisnis memakainya, dan cara memasangnya.
slug: double-opt-in
date: 2026-10-23
updated: 2026-10-23
keyword: double opt in
short: Double opt-in berarti seseorang mendaftar untuk menerima email Anda, lalu mengonfirmasi dengan mengklik tautan di email konfirmasi. Baru setelah klik itu ia ditambahkan ke daftar Anda. Ini menunjukkan bahwa orang itu pemilik alamat tersebut dan ingin menerima email Anda.
related: single-opt-in, list-cleaning, email-hygiene, suppression-list, spam-trap, typo-domain
cta: Tangkap salah ketik saat pendaftaran, sebelum email konfirmasi bounce
---

## Apa itu double opt-in?

Double opt-in adalah cara menambahkan orang ke daftar email dalam dua langkah. Pertama, orang itu memasukkan alamat emailnya di situs web Anda. Kedua, ia mengklik tautan di email yang Anda kirim ke alamat itu. Baru setelah itu alamatnya ditambahkan ke daftar Anda.

Opt in berarti memilih untuk bergabung. "Double" berarti orang itu memilih dua kali, sekali di formulir dan sekali di email. Alamat yang tidak pernah dikonfirmasi tidak pernah ditambahkan.

## Contoh: Maria berlangganan newsletter toko roti

Maria membuka situs web toko roti di dekat rumahnya. Ia ingin menerima newsletter bulanan toko itu.

1. Ia mengetik alamatnya, maria.lopez@gmail.com, di formulir pendaftaran dan mengklik Subscribe.
2. Situs web menampilkan pesan: "Silakan periksa kotak masuk Anda untuk mengonfirmasi email Anda."
3. Semenit kemudian, Maria menerima email dari toko roti itu. Subjeknya "Silakan konfirmasi email Anda".
4. Email itu berisi satu tombol bertuliskan "Ya, daftarkan saya".
5. Maria mengkliknya. Sebuah halaman terbuka dengan tulisan "Terima kasih, Anda sudah berlangganan."
6. Alat email toko roti menambahkan Maria ke daftar. Alat itu mencatat tanggal dan jam kliknya.

Sekarang misalkan Maria tidak sengaja mengetik maria.lopez@gmial.com. Email konfirmasi tidak akan pernah sampai kepadanya. Ia tidak akan pernah mengklik, jadi alamat yang salah tidak akan pernah masuk ke daftar.

## Single opt-in vs double opt-in

Dengan [single opt-in](/glossary/single-opt-in), orang memasukkan alamatnya dan langsung ditambahkan. Tidak ada langkah konfirmasi.

| | Single opt-in | Double opt-in |
| --- | --- | --- |
| Langkah untuk pelanggan | Satu: isi formulir | Dua: isi formulir, lalu klik tautan |
| Pertumbuhan daftar | Lebih cepat, karena semua orang ditambahkan | Lebih lambat, karena sebagian orang tidak pernah mengonfirmasi |
| Alamat yang salah ketik | Masuk ke daftar, lalu bounce | Tidak pernah ditambahkan |
| Pendaftaran palsu oleh bot | Masuk ke daftar | Tidak pernah ditambahkan, kecuali ada yang mengklik tautan |
| Bukti persetujuan | Hanya formulir pendaftaran | Catatan klik konfirmasi |
| Risiko spam trap | Lebih tinggi | Lebih rendah |

## Kenapa bisnis memakai double opt-in

- **Bukti persetujuan.** Persetujuan berarti orang itu setuju menerima email Anda. Dengan double opt-in, bisnis bisa menunjukkan kapan setiap orang mengonfirmasi.
- **Lebih sedikit alamat palsu dan salah ketik.** Alamat yang tidak bisa menerima email tidak pernah mengonfirmasi, jadi tidak pernah masuk ke daftar.
- **Lebih sedikit spam trap.** Alamat di [domain salah ketik](/glossary/typo-domain) mungkin menerima satu email konfirmasi. Namun tidak ada yang mengklik tautannya, jadi alamat itu tidak pernah masuk ke daftar. Hal yang sama berlaku untuk [spam trap](/glossary/spam-trap) lainnya.
- **Pembaca yang mengambil langkah untuk bergabung.** Setiap orang di daftar sudah mengklik tautan untuk mengonfirmasi bahwa mereka ingin menerima email Anda.

## Cara memasang double opt-in di ESP Anda

ESP adalah layanan yang Anda pakai untuk mengirim email ke daftar Anda, seperti Mailchimp atau Brevo. Banyak ESP menyediakan double opt-in sebagai pengaturan. Nama menunya berbeda-beda, tetapi langkahnya mirip.

1. Buka pengaturan daftar, audiens, atau formulir pendaftaran Anda.
2. Aktifkan double opt-in atau email konfirmasi.
3. Ubah isi email konfirmasi. Pakai subjek yang jelas seperti "Silakan konfirmasi email Anda" dan satu tombol besar.
4. Atur halaman yang dilihat orang setelah mereka mengklik.
5. Uji formulir dengan alamat Anda sendiri sebelum menerbitkannya.
6. Pastikan ESP Anda mencatat tanggal dan jam konfirmasi untuk setiap pelanggan.

Buat email konfirmasi tetap singkat. Kirim segera, selagi orang itu masih ingat bahwa ia mendaftar.

## Double opt-in dan verifikasi email

Double opt-in dan verifikasi melakukan tugas yang berbeda, dan keduanya cocok dipakai bersama. Pemeriksaan saat pendaftaran, yaitu pemeriksaan yang sama dengan yang dijalankan [email checker](/email-checker), menangkap salah ketik seperti gmial.com sebelum email konfirmasi bounce. Lalu double opt-in menunjukkan bahwa orang itu pemilik alamat tersebut dan ingin menerima email Anda. Untuk alamat lama yang dikumpulkan sebelum Anda memakai double opt-in, pakai alat [verifikasi email massal](/bulk-email-verifier). Alat ini menghapus alamat yang akan bounce, sebagai bagian dari [verifikasi email](/) yang rutin.
