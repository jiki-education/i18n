---
title: "Menggunakan operator `%` untuk sisa pembagian"
description: "Menggunakan operator `%` untuk mendapatkan sisa setelah pembagian, yang sering dipakai untuk memeriksa apakah sebuah angka genap atau ganjil."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Sejauh ini, kita sudah memakai penjumlahan, pengurangan, perkalian, dan pembagian saat berhitung. Sekarang kita akan mengenalkan satu lagi, yaitu operator sisa (bahasa Inggris: _remainder_).

Operator sisa bertugas memberikan sisa pembagian, secara logis, ketika kamu membagi dua angka, dan kita menulisnya dengan tanda persen. Jadi kalau kita tulis:

```javascript
10 % 4 // 2
```

kita sedang mengatakan atau menanyakan, “Apa yang tersisa ketika 10 dibagi 4?” Dan jawabannya adalah dua. Bayangkan kamu punya 10 permen atau kacang, dan kamu ingin membaginya rata ke empat orang. Setiap orang mendapat dua, lalu di akhir tersisa dua. Nah, bagian yang tersisa itulah yang disebut sisa. Itulah yang diberikan oleh tanda persen ini.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Barisan sepuluh permen yang dibagi rata kepada empat orang, dengan dua permen tersisa sebagai sisa pembagian"
  width="500"
  height="22"
/>

Salah satu alasan kita cukup sering memakai operator ini dalam code adalah karena kita bisa tahu apakah sesuatu habis dibagi atau tidak, dan pola paling umum yang akan kamu lihat adalah menentukan apakah sebuah angka genap atau ganjil. Angka genap, seperti yang kamu tahu, semuanya habis dibagi dua. Angka ganjil selalu menyisakan satu ketika dibagi dua.

Jadi kalau kamu ambil empat, enam, atau delapan, semuanya bisa dibagi dua tanpa sisa. Sedangkan lima, tujuh, dan sembilan, kalau dibagi dua, selalu tersisa satu di akhir. Jadi dengan menulis `if something % 2 === 0`, kita sedang bertanya, “Apakah sesuatu ini angka genap?” Dan itu bisa berguna untuk banyak sekali hal. Bayangkan membuat garis-garis dengan warna berbeda, atau membelah antrean menjadi dua dan mengarahkan setiap orang ke salah satu dari dua jalur saat mereka berjalan ke arahmu.

Satu hal yang perlu diperhatikan, kamu mungkin mendengar orang menyebut kata kunci sisa ini sebagai operator modulo. Modulo dan sisa pada dasarnya sama saja. Ada sedikit perbedaan yang sepertinya tidak perlu kamu khawatirkan, jadi untuk sekarang kita anggap saja ini operator sisa, karena itu jauh lebih mudah.
