---
title: "Membangun array"
description: "Memulai dengan array kosong dan memakai `push` untuk menambahkan item satu per satu sambil menelusuri data."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Sejauh ini, kamu sudah bekerja dengan array yang nilainya langsung ditentukan di awal dan tidak berubah. Tapi bagaimana kalau kamu ingin menambahkan sesuatu ke array seiring waktu? Nah, untuk itu, array punya method bernama `push` (mendorong).

Push punya satu input, yaitu hal yang ingin kamu tempelkan di ujung array. Jadi dalam kasus ini, kita ingin mendorong kata `"Isaac"` ke ujung array yang sudah berisi `"DJ"` dan `"Bethany"`.

Untuk melakukannya, Jiki mengeluarkan array itu dari kotak, menempelkan `"Isaac"` di ujung rantai, lalu memasukkan semuanya kembali ke dalam kotak. Perhatikan bahwa berbeda dengan sebelumnya pada string, di mana Jiki membuat string baru setiap kali, di sini dia benar-benar mengubah array itu.

Salah satu pola yang akan sering kamu lihat dalam pemrograman adalah memulai dengan array kosong lalu membangunnya sedikit demi sedikit. Bayangkan kita punya daftar nama yang panjang dan kita ingin menelusurinya satu per satu. Setiap kali kita menemukan nama yang merupakan mentor, kita tambahkan ke array kita.

Pola perulangan dan penambahan seperti ini akan sering kamu pakai.
