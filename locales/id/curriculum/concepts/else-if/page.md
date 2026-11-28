---
title: "Menggunakan rantai `else if`"
description: "Merangkai klausa `else if` untuk memeriksa beberapa kondisi secara berurutan, dan hanya menjalankan blok pertama yang kondisinya bernilai benar."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Kamu sudah melihat bagaimana `if` dan `else` memberimu dua jalur: lakukan satu hal saat sebuah kondisi bernilai benar, lakukan hal lain saat salah. Tapi bagaimana kalau kemungkinannya lebih dari dua?

Bayangkan penjaga pintu kita sedang menjual tiket. Kalau umurmu di bawah tiga belas tahun, kamu dapat tiket anak. Antara tiga belas sampai dua puluh, kamu dapat tiket remaja. Dua puluh ke atas, tiket dewasa. Jadi sekarang ada tiga hasil yang berbeda. Untuk itu, kita bisa menambahkan percabangan `if` lagi setelah `else`. Jadi kita bisa bilang, “Kalau ini, lakukan ini. Kalau bukan, tapi yang itu, lakukan itu. Kalau bukan keduanya, lakukan hal yang satu lagi.” Nah, dalam contoh ini, Jiki akan melihat `if` dan memeriksa kondisi pertama. Apakah enam belas kurang dari tiga belas? Tidak. Jadi dia lanjut ke `else if`. Apakah enam belas kurang dari dua puluh? Ya, benar. Jadi dia menjalankan blok itu dan memberikan tiket remaja. Tapi sampai di situ saja. Dia tidak memeriksa apa pun lagi. Dia sama sekali tidak melihat `else` terakhir itu. Begitu Jiki menemukan kondisi yang bernilai benar, dia menjalankan blok itu, dan melewati semua yang ada di bawahnya.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="Tiga tiket bertuliskan CHILD, TEEN, dan ADULT, satu untuk setiap hasil dari pemeriksaan usia"
  width="500"
  height="142"
/>

Inilah hal kunci yang perlu dipahami. Hanya satu blok yang akan dijalankan. Jiki menelusuri rantai ini dari atas ke bawah, menemukan kondisi pertama yang benar, menjalankan blok itu, lalu beranjak.

Sekarang, ada satu hal yang benar-benar perlu dipahami, karena inilah yang sering bikin orang tersandung. Ada perbedaan yang halus tapi sangat penting antara menulis dua percabangan `if` terpisah dan menggunakan `else if`. Jadi bayangkan kita membuat program yang memberikan hadiah dasar atau hadiah bonus tergantung skor seseorang. Perhatikan dua kemungkinan ini. Yang satu memakai `else if`, yang lain memakai dua percabangan `if` terpisah. Apa yang akan terjadi secara berbeda?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

Jadi pada kasus pertama, dengan `else if`, kita memeriksa apakah skornya tinggi lalu memberikan hadiah bonus, dan setelah itu bagian `else if` tidak dijalankan. Jadi orang yang skornya di atas seratus hanya mendapat hadiah bonus.

Tapi pada contoh kedua, kedua `if` itu sepenuhnya independen. Keduanya akan dijalankan dan keduanya bernilai benar. Jadi orang ini mendapat dua hadiah. Pada contoh pertama, satu hadiah. Pada contoh kedua, dua hadiah. Luangkan waktu sebentar untuk benar-benar memastikan kamu memahaminya.

Menarik juga untuk dicatat bahwa keduanya bisa saja benar, tergantung bagaimana permainannya dirancang. Mungkin pesertanya mendapat hadiah biasa plus hadiah bonus, atau mungkin hadiahnya hanya dinaikkan menjadi hadiah bonus. Tidak ada yang benar atau salah dari kedua potongan kode itu. Keduanya sama-sama berguna, hanya saja pada situasi yang berbeda. Tapi kamu perlu tahu mana yang ingin kamu pakai.
