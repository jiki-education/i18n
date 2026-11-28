---
title: "Angka acak"
description: "Menggunakan `Math.randomInt` dengan nilai minimum dan maksimum untuk mendapatkan angka yang berbeda setiap kali fungsi dijalankan."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Sering kali dalam pemrograman, kita ingin memakai sebuah fungsi dan mendapatkan angka acak (bahasa Inggris: _random number_) yang berbeda setiap kali.

Ini berguna di berbagai cara dan tempat, tapi terutama dalam kriptografi, tempat kita banyak melakukan hal seperti membuat kode untuk dibagikan antar perangkat, dan kode-kode itu harus acak supaya tidak bisa diretas.

Untuk membantu hal ini, kamu punya sebuah fungsi yang tersedia bernama `Math.randomInt` (Math artinya matematika, randomInt artinya bilangan bulat acak). Kamu mungkin menyadari ada sebuah titik di tengahnya. Saat kamu mendapatkan akses ke lebih banyak fungsi, kita bisa mengelompokkannya ke dalam grup-grup berbeda supaya tetap rapi, dan bagian `Math` (Math adalah singkatan dari matematika) adalah nama grup tempat fungsi ini berada. Ia memberi tahu Jiki bagian rak mana yang harus dilihat, dalam hal ini bagian `Math`. Titik itu artinya masuk ke bagian ini dan temukan fungsinya. Untuk sekarang, jangan terlalu khawatir soal ini. Instruksi latihan akan selalu memberi tahu fungsi apa saja yang tersedia dan cara memakainya. Yang penting untuk dipahami adalah saat Jiki memakai fungsi ini, ia akan mendapatkan angka yang berbeda setiap kali menjalankannya, dengan satu batasan. Fungsi ini punya dua input. Yang pertama adalah angka terkecil yang boleh dikembalikan mesin, dan yang kedua adalah angka terbesar yang boleh dikembalikan mesin. Jadi, kalau kamu memakai fungsi `Math.randomInt` dengan `10` dan `13`, kamu akan selalu mendapatkan `10`, `11`, `12`, atau `13` kembali. Tapi hasilnya akan berbeda setiap kali.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki memanjat tangga menuju bagian Math di rak gudangnya"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Mesin Math.randomInt dengan dua corong input di atasnya"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Mesin Math.randomInt dengan 10 dan 13 di corong inputnya, menghasilkan 10, 11, 12, atau 13"
  width="488"
  height="400"
/>

Jadi, bayangkan kamu ingin menggambar sebuah lingkaran di posisi acak pada kanvas. Kamu bisa memakai `Math.randomInt` untuk mendapatkan nilai `left` dan `top` yang berbeda secara acak setiap kali, tapi dengan batas, misalnya, `10` dan `90`, supaya lingkarannya tidak tumpang tindih dan tidak keluar dari kanvas. Setiap kali kamu menjalankan kode ini, lingkarannya akan digambar di tempat yang sedikit berbeda.
