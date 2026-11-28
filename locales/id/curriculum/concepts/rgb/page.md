---
title: "Warna RGB"
description: "Mencampur cahaya merah, hijau, dan biru dari 0 sampai 255 untuk membuat warna apa pun yang kamu inginkan di layar."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB memungkinkan kita membayangkan warna sebagai campuran merah, hijau, dan biru. Itulah kepanjangan RGB: merah (bahasa Inggris: _red (R)_), hijau (bahasa Inggris: _green (G)_), biru (bahasa Inggris: _blue (B)_). Kalau kamu ingat pelajaran mencampur cat di sekolah, idenya mirip, hanya saja kita tidak mencampur cat, melainkan cahaya.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Tiga lingkaran cahaya merah, hijau, dan biru yang saling tumpang tindih dan bercampur menghasilkan kuning, magenta, sian, dan putih"
  width="500"
  height="390"
/>

Di banyak latihan, kamu akan menemui sebuah fungsi bernama `rgb(red, green, blue)`. Fungsi itu menerima tiga angka sebagai input, satu untuk merah, satu untuk hijau, satu untuk biru, lalu mengembalikan sebuah warna.

Angka yang bisa kamu pakai sebagai input berkisar dari nol sampai `255`. Nol berarti tanpa warna itu sama sekali, dan `255` berarti campurkan warna itu sebanyak mungkin. Jadi kalau kita memakai fungsi `rgb` dengan `255`, nol, dan nol sebagai input, artinya kita minta semua warna merahnya. Ingat, `255` adalah angka terbesar yang bisa kamu masukkan di situ. Tapi kita tidak mau hijau atau biru sama sekali, jadi keduanya nol. Hasilnya kita dapat merah, dan merah itu bisa kita simpan di sebuah variabel lalu kita pakai di fungsi `circle` seperti yang sudah kita lakukan dengan string berisi nama warna. Lalu bagaimana kalau kita memakai fungsi `rgb` dengan nol, `255`, nol? Sekarang artinya tanpa merah, semua hijau, tanpa biru. Jadi kita dapat lingkaran hijau. Bagaimana kalau kita mau kuning? Kuning adalah campuran merah dan hijau. Jadi kita bisa minta semua merah, semua hijau, dan tanpa biru, dan hasilnya kuning. Kita juga bisa memakai angka yang lebih kecil. Kalau kita mau sedikit merah, tanpa hijau, dan banyak biru, kita akan dapat ungu. Lalu banyak merah, sedikit hijau, biru yang agak banyak, hasilnya merah muda. Nah, itulah RGB. Kita mencampur merah, hijau, dan biru untuk mendapatkan kombinasi yang berbeda-beda.

```javascript
rgb(255, 0, 0) // merah
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Lingkaran merah yang dihasilkan oleh rgb(255, 0, 0), semua merah tanpa hijau atau biru"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // kuning
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Lingkaran kuning yang dihasilkan oleh rgb(255, 255, 0), semua merah dan semua hijau tanpa biru"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // merah muda
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Lingkaran merah muda yang dihasilkan oleh rgb(230, 50, 170), banyak merah, sedikit hijau, dan biru yang agak banyak"
  width="436"
  height="400"
/>

RGB sangat berguna ketika kamu ingin mengatur satu komponen tertentu: seberapa banyak merah, seberapa banyak hijau, seberapa banyak biru.
