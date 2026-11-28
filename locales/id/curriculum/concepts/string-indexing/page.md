---
title: "Pengindeksan string"
description: "Menggunakan tanda kurung siku dan nomor posisi untuk mengambil satu huruf dari sebuah string. Ingat bahwa posisi dimulai dari nol."
en_md5: cd31e0366b3090b358494667003f54c9
---

Bayangkan kamu punya namaku, Jeremy, dan kamu ingin mengambil inisial J-ku dari situ. Bagaimana caranya, ya?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki sedang berpikir cara mengambil satu huruf dari sebuah string"
  width="361"
  height="353"
/>

Nah, kamu bisa membayangkan string sebagai rangkaian huruf. Jadi `"Jeremy"` punya enam huruf, J-E-R-E-M-Y, dan setiap huruf punya posisinya sendiri. `"J"` ada di posisi pertama, `"y"` ada di posisi terakhir.

Sekarang, di JavaScript dan sebagian besar bahasa pemrograman, posisi-posisi ini dimulai dari nol. Jadi huruf pertama `"J"` ada di posisi nol, lalu berikutnya `"e"` di posisi satu, `"r"` di posisi dua, `"e"` di posisi tiga, `"m"` di posisi empat, dan `"y"` di posisi lima.

Nah, mulai dari nol ini lumayan aneh, dan jujur saja, hidup kita akan lebih mudah kalau kita mulai menghitung dari satu, seperti di dunia normal. Tapi kita tidak begitu. Di sebagian besar bahasa pemrograman, kita justru mulai menghitung dari nol, jadi kamu tinggal menghafalnya.

Jadi kalau kita ingin mengambil huruf di posisi tertentu, kita bisa memakai tanda kurung siku dengan nomornya di dalamnya.

Jadi kalau kita menulis `"Jeremy"[0]`, maksudnya berikan aku huruf pertama dari kata `"Jeremy"`.

Kalau kita menulis `"Jeremy"[1]`, maksudnya berikan aku huruf kedua.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Dan kita juga bisa melakukannya dengan variabel. Jadi kalau kita membuat variabel bernama `name` dan mengisi nilainya dengan string `"Jeremy"`, kita bisa menulis `name[0]`, dan kita akan mendapatkan `"J"` lagi.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Satu hal yang perlu kamu pahami: yang kamu dapatkan dari `name[0]` hanyalah string lain. Selembar kertas lain yang bertuliskan J. Tidak ada yang istimewa dari hasil itu. Itu string, sama seperti `"Jeremy"` juga string.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki memegang selembar kertas baru yang hanya bertuliskan huruf J"
  width="500"
  height="289"
/>

Kebetulan saja kertas itu berisi satu huruf, bukan enam.

Dan melakukan ini sama sekali tidak memengaruhi string aslinya. Kita tidak sedang mencabut huruf J atau semacamnya. Kita hanya mencari huruf mana yang kita mau, lalu membuat string baru yang berisi huruf itu.
