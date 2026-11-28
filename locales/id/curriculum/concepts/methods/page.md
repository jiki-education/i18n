---
title: "Method"
description: 'Fungsi yang dimiliki oleh sebuah nilai dan dipanggil dengan notasi titik, seperti `"Jeremy".includes("e")` atau `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Sejauh ini, saat memikirkan string atau angka, kita membayangkannya sebagai sesuatu yang cukup statis.

Padahal, di dalamnya juga sudah tertanam banyak fungsionalitas yang bisa Jiki gunakan.

Dan ke depannya, kita akan mempelajari fungsionalitas ini, semacam kemampuan yang mereka punya dan bisa sangat memudahkan hidupmu.

Ada dua jenis kemampuan yang akan kita lihat, properti dan _method_.

Method adalah fungsi yang dimiliki oleh string.

Jadi, daripada kita menulis fungsi yang menerima string sebagai input, kita bisa memakai method langsung pada string itu.

Contohnya, ingatkah kamu fungsi untuk memeriksa apakah sebuah string berisi huruf tertentu? Nah, string sebenarnya punya method bernama `includes` (berisi) yang melakukan hal itu, dan kita bisa memakainya dengan sintaks titik yang sama seperti yang kamu lihat pada properti.

Bedanya dengan properti, kalau kita menulisnya, kita tulis seperti fungsi dengan tanda kurung dan input.

Jadi kita bisa menulis:

```javascript
"Jeremy".includes("e") // true
```

Dan kita akan mendapat `true`, karena `"Jeremy"` memang mengandung `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki menuliskan string Jeremy di selembar kertas"
  width="359"
  height="400"
/>

Method berbeda dengan properti karena sifatnya bukan fakta statis. Method itu benar-benar fungsi. Kamu bisa membayangkannya sebagai fungsi yang di dalamnya sudah tersedia sebuah kotak berisi string tersebut.

Cara kerjanya belum terlalu penting untuk sekarang. Kamu belum akan membuatnya sendiri dalam waktu dekat. Yang perlu kamu tahu adalah cara memakainya: tulis titik, lalu sintaks fungsi seperti biasa.

Satu hal yang perlu kamu tahu soal string: method tidak mengubah apa pun di dalam string itu. Contohnya, ada method `toUpperCase` (mengubah ke huruf besar), yang mengembalikan string dengan semua hurufnya kapital. Tapi itu tidak mengubah string aslinya. String itu tetap berisi `"Jeremy"` dengan hanya huruf J kapital. Sebagai gantinya, Jiki membuat string baru yang semuanya kapital.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
