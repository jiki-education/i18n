---
title: "Scope"
description: "Memahami bagaimana tanda kurung kurawal membuat set raknya sendiri, sehingga variabel hanya hidup selama bloknya berjalan."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Bayangkan sebuah code yang menggambar lingkaran di posisi berbeda setiap kali dijalankan, dan kita ingin menggambar 10 lingkaran di posisi yang berbeda-beda. Kita bisa menggabungkannya dengan sebuah perulangan. Tapi bagi kamu yang memperhatikan dengan saksama, mungkin kamu menyadari ada sesuatu yang aneh di sini.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Di awal, aku bilang ada aturan bahwa kotak-kotak di rak Jiki harus punya nama yang unik,

dan kata kunci `let` itu membuat kotak baru setiap kali kamu memakainya.

Tapi karena `let`-nya ada di dalam perulangan, Jiki akan membuat kotak baru setiap kali perulangan itu berjalan.

Jadi, apakah code-nya salah, atau ada sesuatu aneh lain yang terjadi di sini?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki tampak bingung, bertanya-tanya apakah code-nya salah"
  width="384"
  height="400"
/>

Nah, ternyata code-nya baik-baik saja. Ini JavaScript yang sepenuhnya valid, dan semua ini berjalan karena sebuah konsep yang disebut _scope_ (cakupan), atau scoping.

Scope adalah sesuatu yang pada awalnya mungkin terasa cukup sederhana, tapi aku jamin ini akan bikin kamu pusing selama sisa kariermu. Bahkan developer paling senior pun pernah bermasalah dengan scope, dan JavaScript adalah salah satu bahasa yang paling rumit soal ini. Aku bilang begini supaya nanti, waktu kamu menemui masalah dengan scope, kamu tidak merasa rendah diri. Tapi juga, perhatikan betul bagian ini karena ini penting.

Saat kamu melihat tanda kurung kurawal di dalam code, tanda itu membuat apa yang disebut scope baru. Apa maksudnya? Nah, kamu bisa membayangkan Jiki membuat satu set rak kecil baru di tempat kerjanya setiap kali dia melihat tanda kurung kurawal. Dan kotak apa pun yang dia buat saat bekerja, saat menjalankan code di dalam tanda kurung kurawal itu, kotak-kotak itu, kotak-kotak baru itu, diletakkan di set rak kecil yang baru, bukan di rak utama.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Rak utama Jiki di samping set rak baru yang lebih kecil yang dibuat oleh sebuah tanda kurung kurawal"
  width="500"
  height="205"
/>

Dan saat Jiki sampai di tanda kurung kurawal penutup yang sesuai, dia membuang semua kotak yang ada di set rak kedua ini.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki membuang kotak-kotak dari set rak kedua ke tempat sampah saat dia mencapai tanda kurung kurawal penutup"
  width="500"
  height="237"
/>

Jadi setiap kali kita punya perulangan seperti ini, kita bisa membuat kotak yang umurnya hanya sepanjang satu kali jalannya perulangan. Kotak `left` (kiri) dan kotak `top` (atas) yang kamu lihat di sini hanya bertahan sampai kita mencapai tanda kurung kurawal penutup, lalu keduanya dibuang. Dan Jiki mencapai tanda kurung kurawal penutup itu setiap kali perulangan berjalan. Berarti 10 kali dalam program ini. Jadi 10 kali juga dia membuat kotak bernama `left`, lalu membuangnya lagi.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Dua kotak berlabel left dan top yang hanya bertahan untuk satu iterasi perulangan"
  width="500"
  height="187"
/>

Jadi, saat kamu membuat sebuah variabel, kamu harus memutuskan berapa lama variabel itu mau kamu pertahankan. Kalau kamu ingin variabel itu hidup lama, dia harus diletakkan di luar tanda kurung kurawal mana pun. Kalau kamu ingin variabel itu hanya bertahan untuk satu iterasi, satu kali jalannya perulangan, letakkan saja di dalam tanda kurung kurawal. Kamu lihat kan, betapa semua ini bisa jadi agak membingungkan? Jadi, satu aturan sederhana yang bisa kamu pakai saat masih mulai adalah menaruh semua variabelmu di dekat bagian atas code, di luar tanda kurung kurawal, lalu hanya memperbarui nilainya di dalam kurung. Misalnya, code di atas bisa kita tulis dengan hanya satu kotak `left` dan satu kotak `top` yang diisi nol di awal, lalu diperbarui setiap kali di dalam perulangan. Itu juga sepenuhnya valid. Tidak ada yang benar atau salah. Ada praktik terbaik, tapi nanti kita akan mempelajarinya. Untuk sekarang, bereksperimenlah, bersenang-senanglah, lihat mana yang paling nyaman buatmu, dan coba jangan terlalu khawatir soal ini.
