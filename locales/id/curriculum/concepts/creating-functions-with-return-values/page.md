---
title: "Menambahkan Return ke Fungsi"
description: "Memakai kata kunci `return` untuk memberi fungsimu saluran keluaran yang menyerahkan nilainya kembali ke pemanggil."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Sekarang kamu sudah tahu cara membuat fungsi dengan maupun tanpa input. Tinggal satu hal terakhir yang perlu dipelajari, dan setelah itu kamu akan jadi ahli pembuat fungsi. Hal itu adalah cara memberi fungsimu saluran keluaran.

Kamu sudah banyak memakai fungsi yang mengembalikan sesuatu. `isAlienAbove` (apakah ada alien di atas) memberimu nilai benar atau salah. `Math.randomInt(1, 10)` (Math artinya matematika; randomInt artinya bilangan bulat acak) memberimu angka acak.

Saat Jiki memakai fungsi-fungsi itu, ada sesuatu yang muncul keluar dari saluran keluaran, lalu bisa dia pakai.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki mengambil sebuah nilai yang muncul dari saluran keluaran sebuah mesin"
  width="500"
  height="312"
/>

Jadi untuk melakukannya, kita butuh satu kata kunci baru lagi, yaitu kata kunci `return`.

Kata kunci `return` memberi tahu Mini Jiki untuk mendorong sesuatu keluar dari saluran.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mini Jiki di dalam mesin mendorong nilai 42 keluar melalui saluran"
  width="500"
  height="335"
/>

Mari kita buat sebuah fungsi, dan kita beri nama `meaningOfLife` (makna hidup). Tugas fungsi ini selalu hanya mengembalikan angka `42`. Fungsi ini tidak punya input. Kita tulis seperti ini:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Mesin meaningOfLife mengirim angka 42 keluar dari salurannya"
  width="500"
  height="323"
/>

Sekarang di mana pun kita memakai `meaningOfLife()` dalam kode, kita akan menerima angka `42` untuk dipakai seperti nilai lain pada umumnya. Kita bisa menaruhnya di dalam kotak dengan `let`, meneruskannya sebagai input ke fungsi lain, atau membandingkannya dalam percabangan `if`.

Fungsi yang punya return juga bisa menerima input. Kamu mungkin menulis fungsi `ageBracket(age)` (kelompok usia) yang mengembalikan `"Sorry, too young"` kalau `age` di bawah 18, dan `"Welcome"` kalau tidak. Siapa pun yang memanggilnya akan menerima string yang dikembalikan fungsi itu.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Nilai usia dimasukkan ke lubang input mesin supaya mesin bisa memutuskan apa yang akan dikembalikan"
  width="487"
  height="400"
/>

Beginilah cara kerja pemrograman pada intinya. Kita membuat banyak blok bangunan kecil seperti ini, lalu menyusunnya menjadi program.
