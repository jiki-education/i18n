---
title: "Dictionary"
description: "Halaman buku catatan spiral yang setiap entrinya punya key di sebelah kiri dan nilainya di sebelah kanan, sehingga kamu mendapat data berlabel, bukan sekadar daftar."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Kalau kita punya daftar apa saja, entah daftar mentor, daftar skor, atau daftar bahan masakan, array adalah pilihan andalan kita. Daftar apa pun itu, pakai saja array.

Tapi ada struktur data (bahasa Inggris: _data structure_) lain yang juga sangat umum dipakai kalau kamu butuh sesuatu yang sedikit lebih rumit daripada daftar.

Bayangkan kita ingin menyimpan beberapa informasi tentangku: namaku, umurku, dan tempat aku lahir. Kamu bisa memakai array untuk itu, tapi isinya jadi kurang jelas maksudnya.

Apakah Inggris itu tempat aku lahir atau tempat aku tinggal? Apakah 42 itu umurku atau sesuatu yang lain?

Dan kalau aku ingin memakai data ini, aku harus ingat bahwa posisi pertama untuk name, posisi kedua untuk age, posisi ketiga untuk birthplace. Semuanya agak berantakan, dan itu karena ini sebenarnya bukan daftar. Ini lebih rumit daripada itu. Dan di sinilah _dictionary_ (kamus) berperan. Dictionary adalah struktur data jenis baru. Ini yang kelima bagimu. Kamu sudah punya string, angka, Boolean, array, dan sekarang dictionary.

Dan aku ingin kamu membayangkan dictionary sebagai selembar kertas dari buku catatan spiral.

Di sisi kiri ada judulnya, yaitu kata `"name"`, `"age"`, `"birthplace"`, dan itulah yang kita sebut _key_ (kunci).

Dan di sisi kanan, di samping setiap judul, ada data sebenarnya: `"Jeremy"`, `42`, `"England"`, dan itulah yang kita sebut nilai (bahasa Inggris: _value_).

Sama seperti array, dictionary itu satu benda. Satu halaman dari buku catatan. Dan sama seperti array, Jiki bisa menyimpannya di variabel, di dalam kotak, atau sebagai input untuk sebuah fungsi, atau dia bisa mengeluarkan dictionary dari saluran keluaran. Jadi, seperti inilah bentuk dictionary di dalam code. Kita memakai tanda kurung kurawal untuk menandai awal dan akhirnya, lalu di dalamnya ada pasangan-pasangan: key di sebelah kiri, titik dua, lalu nilainya di sebelah kanan. Dan ada koma di antara setiap pasangan. Jadi saat Jiki melihat ini, dia mengeluarkan buku catatan spiralnya. Dia menulis `name`, `"Jeremy"`, `age`, `42`, dan seterusnya untuk setiap pasangan.

Setelah selesai, dia merobek lembaran itu dan meletakkannya di dalam kotak berlabel `person` (orang).

Ada beberapa aturan yang perlu kamu tahu. Key selalu berupa string. Key harus diapit tanda kutip, dan setiap key harus unik. Kamu tidak bisa punya dua key bernama `name` di dictionary yang sama.

Nilainya boleh sama kalau kamu mau, tapi key-nya harus berbeda.

Dan nilainya bisa apa saja. Bisa string, angka, Boolean, array, atau bahkan dictionary lain.

Kamu juga bisa punya dictionary kosong, sama seperti array kosong, dan kita bisa mulai dari situ lalu menambahinya nanti.

Jadi kamu sudah punya dictionary, tapi bagaimana cara mengambil sesuatu darinya?

Kita memakai sintaks tanda kurung siku yang sama seperti pada array dan string, tapi alih-alih nomor posisi, kita menuliskan key. Jadi kalau kita ingin mengambil nama seseorang dari sebuah dictionary, kita menulis:

```javascript
person["name"] // "Jeremy"
```

Dan itu memberi tahu Jiki untuk mencari di dictionary `person`, menemukan key untuk `"name"`, lalu mengambil nilainya. Jiki pergi ke kotak `person`, mengeluarkan halaman dari buku catatan itu, memeriksa semua key sampai dia menemukan `"name"`, lalu membaca nilainya, `"Jeremy"`, dan meletakkannya di kotak baru bernama `name`.

Tanda kurung siku selalu punya arti yang sama. Kamu sedang merogoh sesuatu dan mengambil isinya. Dengan array dan string, kamu memakai angka untuk menyebut posisi mana yang ingin kamu ambil. Dengan dictionary, kamu memakai string sebagai key.

Idenya sama, hanya sintaksnya sedikit berbeda.
