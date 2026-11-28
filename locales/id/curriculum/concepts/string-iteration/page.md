---
title: "Menelusuri string dengan `for ... of`"
description: "Memakai perulangan `for of` untuk menelusuri setiap huruf dalam sebuah string, dan melakukan sesuatu dengan tiap hurufnya satu per satu."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Kamu bisa mengakses satu huruf dari sebuah string dengan tanda kurung siku. Sekarang kita akan melihat bagaimana menelusuri sebuah string, mengeluarkan setiap hurufnya satu per satu.

Dan untuk melakukannya, kita butuh jenis perulangan yang baru. Sejauh ini kita sudah memakai perulangan repeat, dan sekarang kita akan memakai sesuatu yang disebut perulangan `for of` (menelusuri setiap elemen dalam sebuah koleksi, satu per satu). Itu berarti dua kata kunci baru: `for` dan `of`.

Kata kunci `for` adalah salah satu yang akan sering kita jumpai ke depannya. Ia bisa berdiri sendiri, atau dipasangkan dengan `in` atau `of`. Untuk sekarang, kita fokus ke yang terakhir dulu, `of`.

Jadi, mari kita lihat code-nya.

Kita mulai dengan membuat variabel bernama `name` (nama) yang berisi string `"Jeremy"` (nama seseorang). Tidak ada yang baru di sini.

Lalu ada baris perulangannya, dan di situ banyak sekali yang terjadi, jadi mari kita bahas pelan-pelan.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Pertama, ada kata kunci `for`. Itu memberi tahu Jiki bahwa kita ingin melakukan perulangan. Jadi dia melihat ke depan, menemukan `of`, dan tahu bahwa kita ingin melakukan perulangan “for of”.

Artinya, alih-alih memakai perulangan repeat dengan berkata, “Mari kita ulang 10 kali,” kita berkata, “Mari kita telusuri semua huruf dalam string itu.” Itulah arti “for of”.

Lalu ada bagian `let letter` (membuat variabel bernama `letter`). Ini persis sama dengan `let name` di atasnya. Kita hanya membuat sebuah variabel bernama `letter`.

Bedanya, kita tidak menyebutkan secara eksplisit apa isinya, melainkan meminta Jiki memasukkan setiap huruf dalam string itu ke sana satu per satu.

Jadi Jiki melihat `for`, memeriksa `of`, lalu mulai bekerja. Dia melihat huruf pertama dalam string, dalam kasus ini `"J"`, dan menaruhnya di kotak baru bernama `letter`. Omong-omong, namanya boleh apa saja. Tidak harus `letter`. Di sini kita memutuskan untuk menyebutnya `letter`.

Setelah itu dia menjalankan code di dalam tanda kurung kurawal, dan di sini kamu bisa melakukan apa pun yang biasa kamu lakukan di code mana pun. Bedanya hanya satu: blok kode ini akan berjalan sekali untuk setiap huruf dalam string, dan variabel tadi tersedia di dalamnya.

Setiap kali Jiki sampai di tanda kurung kurawal penutup, dia membuang kotak `letter` dan membuat kotak baru yang berisi huruf berikutnya. Jadi pada putaran pertama, dia membuang `"J"` dan menggantinya dengan `"e"` di dalam kotak. Lalu dia melakukan hal yang sama untuk `"r"`, lalu `"e"`, lalu `"m"`, lalu `"y"`. Enam huruf, enam kali putaran. Butuh sedikit waktu untuk terbiasa dengan sintaksisnya, tapi sebenarnya konsepnya tidak sesulit itu.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki membuang kotak huruf yang lama dan memasukkan huruf berikutnya ke kotak baru berlabel letter, berulang untuk setiap huruf dalam string"
  width="500"
  height="168"
/>
