---
title: "Apa itu secure email gateway (SEG)?"
description: Secure email gateway adalah lapisan penyaring di depan server email perusahaan. Apa fungsinya, siapa pembuatnya, dan kenapa gateway menyulitkan verifikasi.
slug: apa-itu-secure-email-gateway
date: 2026-10-23
keyword: apa itu secure email gateway
image: /blog/covers/id/apa-itu-secure-email-gateway.webp
imageAlt: Secure email gateway yang menjawab atas nama server email dan menyembunyikan status kotak masuk
cta: Verifikasi juga alamat di balik SEG
---

Secure email gateway adalah lapisan penyaring yang berada di depan server email perusahaan dan memeriksa setiap pesan sebelum pesan itu boleh lewat. Mungkin Anda sering melihat SEG di hasil verifikasi dan ingin tahu apa itu secure email gateway secara praktis. Gateway ini adalah pos pemeriksaan yang dilewati email masuk dan email keluar perusahaan. Di pos itu, email dipindai untuk mencari ancaman dan dicocokkan dengan kebijakan perusahaan. Server email di belakangnya tidak pernah melihat pesan yang diputuskan untuk diblokir oleh gateway.

## SEG hanyalah singkatan

SEG adalah singkatan dari secure email gateway, atau gateway keamanan email. Setelah Anda mulai memperhatikan, singkatan ini lebih sering muncul daripada nama lengkapnya. Keduanya dipakai bergantian. Saat alat verifikasi menandai alamat sebagai berada di balik SEG, atau laporan deliverability menyebut penyaringan SEG, yang dimaksud adalah lapisan penyaring yang dijelaskan di sini. Istilahnya terdengar lebih teknis daripada idenya, yaitu penjaga yang ditempatkan di depan ruang surat.

## Apa yang sebenarnya dilakukan gateway

Gateway ada untuk menahan email berbahaya agar tidak masuk dan menahan email sensitif agar tidak keluar. Untuk email masuk, gateway memindai spam, malware dan phishing, lalu mengarantina atau menolak apa pun yang melanggar aturan. Untuk email keluar, gateway menerapkan pencegahan kebocoran data dan kepatuhan. Gateway menghentikan pesan yang bisa membocorkan data pelanggan atau melanggar regulasi. Banyak gateway juga menangani enkripsi dan pengarsipan jangka panjang.

Perusahaan memakai gateway karena menjalankan semua itu di server email sendiri lebih sulit dikelola dan lebih mudah salah. Gateway memusatkan aturan di satu tempat yang harus dilewati setiap pesan.

## Gateway yang paling mungkin Anda temui

Beberapa vendor menguasai bidang ini. Proofpoint, Mimecast, Barracuda dan Cisco IronPort adalah nama yang paling sering Anda temui di domain bisnis, dan masih banyak vendor yang lebih kecil. Kami mengenali total 15 secure email gateway.

Fitur dan harganya berbeda, tetapi dari luar perilakunya sama. Setiap gateway berdiri di depan sistem email yang sebenarnya dan menentukan apa yang sampai ke sana. Karena itu, adanya vendor tertentu hanya memberi tahu Anda bahwa sebuah perusahaan memilih produk itu. Hampir tidak ada informasi lain tentang alamat di belakangnya.

## Gateway bukan penyedia kotak masuk

Gateway mudah tertukar dengan sistem email perusahaan, padahal keduanya lapisan yang terpisah. Sebuah bisnis bisa menjalankan kotak masuknya di Microsoft 365 atau Google Workspace dan tetap memasang gateway dari vendor lain di depannya. Jadi satu perusahaan bisa menyediakan lapisan keamanan, sementara perusahaan lain menyimpan kotak masuknya. Karena itu gateway di jalur email tidak memberi tahu penyedia mana yang benar-benar menyimpan kotak masuk. Produk keamanan di depan juga tidak mengungkapkan apa pun tentang kotak masuk di belakangnya. Kedua pilihan itu dibuat secara terpisah, sering oleh tim yang berbeda dengan anggaran yang berbeda.

## Bagaimana gateway mengubah jalur email

Biasanya pesan langsung masuk ke server email domain. Jika ada gateway, domain mengarahkan jalur emailnya ke gateway, sehingga setiap pesan masuk tiba di gateway lebih dulu. Gateway memeriksa pesan itu. Hanya jika lolos, pesan diteruskan ke server asli tempat kotak masuk berada.

Penerima tidak pernah menyadari semua ini. Bagi pihak luar, gateway itulah sistem email domain, karena hanya bagian itu yang menjawab. Sebagian gateway bahkan sengaja menunda pengirim yang tidak dikenal. Gateway menahan kontak pertama dan baru menjawab dengan benar pada percobaan berikutnya.

## Kenapa gateway mengganggu verifikasi

Verifikasi bergantung pada pertanyaan langsung ke server email dan jawaban langsung darinya. Gateway memutus rantai itu. Karena menjawab atas nama domain, gateway bisa menerima pesan, atau menahannya untuk diperiksa, tanpa pernah mengecek apakah kotak masuk di belakangnya ada.

Jadi alat verifikasi yang bertanya tentang alamat tertentu bisa mendapat respons menerima atau respons yang tidak jelas. Respons itu mencerminkan kebijakan gateway, bukan keadaan kotak masuk. Perilaku penundaan memperburuk keadaan. Percobaan pertama yang ditahan terlihat seperti hasil yang tidak pasti, meskipun kotak masuknya benar-benar nyata. Pemeriksaan standar dijawab oleh pihak yang salah.

Contoh nyata akan membantu. Alat verifikasi mengecek sebuah alamat di domain yang dilindungi gateway. Gateway, yang mengikuti aturannya sendiri untuk pengirim yang tidak dikenal, menerima atau menunda pengecekan itu. Dalam kedua kasus, alat verifikasi mencatat respons yang datang dari gateway, bukan dari server yang tahu apakah kotak masuk itu ada. Kotak masuk yang sebenarnya tidak diuji sama sekali, tetapi pemeriksaan tetap punya jawaban untuk dilaporkan.

## Gateway tidak memberi tahu apakah kotak masuknya nyata

Bagian inilah yang perlu diingat. Adanya gateway menunjukkan bahwa perusahaan serius soal keamanan. Gateway sama sekali tidak menunjukkan apakah alamat tertentu di belakangnya milik kotak masuk yang nyata dan aktif. Alamat yang mati dan alamat yang aktif bisa berada di balik gateway yang sama dan terlihat sama persis dari luar. Itulah alasan alamat yang dilindungi gateway sering berakhir di tumpukan yang belum terjawab bersama domain catch-all.

Bagi marketer, hal ini penting karena menyangkut jangkauan. Di daftar B2B, cukup banyak kontak terbaik Anda berada tepat di balik gateway ini. Mereka adalah kontak di perusahaan yang lebih besar dan lebih peduli keamanan. Jika semuanya Anda abaikan, Anda kehilangan bagian perusahaan besar dari daftar Anda. Jika Anda mengirim tanpa tahu hasilnya, blokir akan merusak reputasi pengirim Anda. Untuk memeriksa satu alamat, Anda bisa [cek email valid](/email-checker) dengan alat gratis kami. Jika daftar Anda penuh dengan alamat seperti ini, berikut cara kami menangani [email yang dilindungi SEG](/seg-email-verification) (dalam bahasa Inggris).
