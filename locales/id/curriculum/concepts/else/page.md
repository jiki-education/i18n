---
title: "Kata kunci `else`"
description: "Menambahkan klausa `else` setelah `if` supaya blok kode yang berbeda dijalankan ketika kondisinya ternyata salah."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

Percabangan `if` membuatmu bisa memeriksa kondisi dan menjalankan kode hanya ketika sesuatu bernilai benar. Sekarang, mari kita berkenalan dengan pasangan setia `if`, yaitu `else`.

Dengan percabangan `if` (bahasa Inggris: _if statement_), Jiki menjalankan blok kode ketika kondisinya benar, dan melewati blok kode itu ketika kondisinya salah. Tapi bagaimana kalau kamu ingin Jiki melakukan satu hal ketika kondisinya benar dan hal yang berbeda ketika kondisinya salah? Itulah gunanya `else`. Kita bisa menaruh klausa `else` (bahasa Inggris: _else clause_) setelah tanda kurung kurawal penutup `if`, dan Jiki akan menjalankannya kalau kondisi `if` tersebut salah. Jadi, kembali ke contoh penjaga pintu klub tadi, sekarang kita punya pilihan untuk membukakan pintu atau menyuruh seseorang pergi, yang jelas lebih baik daripada mengabaikannya begitu saja seperti sebelumnya. Bayangkan seperti persimpangan jalan. Jiki sampai di persimpangan ini, dia memeriksa kondisinya, lalu dia bisa mengambil satu jalan kalau kondisinya benar, atau jalan yang lain kalau kondisinya salah. Tapi dia tidak pernah mengambil dua-duanya.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Persimpangan jalan di depan pintu klub: buka pintunya kalau kondisinya benar, suruh orangnya pergi kalau kondisinya salah"
  width="500"
  height="332"
/>

Tapi bagaimana kalau kemungkinannya lebih dari dua? Bayangkan penjaga kita juga menjual tiket. Di bawah tiga belas tahun, kamu dapat tiket anak. Antara tiga belas dan dua puluh tahun, kamu dapat tiket remaja. Dua puluh tahun ke atas, tiket dewasa. Jadi sekarang ada tiga hasil yang berbeda. Untuk ini, kita bisa menambahkan percabangan `if` lagi setelah `else`. Jadi kita bisa bilang, “Kalau ini, lakukan ini. Kalau tidak, jika ini, lakukan itu. Kalau tidak, lakukan hal lain ini.” Jadi dalam contoh ini, Jiki akan melihat `if` dan memeriksa kondisi pertama. Apakah enam belas kurang dari tiga belas? Tidak. Jadi dia lanjut ke `else if`. Apakah enam belas kurang dari dua puluh? Ya, benar. Jadi dia menjalankan blok itu dan memberikan tiket remaja. Tapi setelah itu dia selesai. Dia tidak memeriksa apa pun lagi. Dia sama sekali tidak melihat `else` terakhir itu. Begitu Jiki menemukan kondisi yang benar, dia menjalankan blok itu, dan melewati semua yang ada di bawahnya.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Inilah hal kunci yang perlu dipahami. Hanya satu blok yang akan dijalankan. Jiki menelusuri rangkaian ini dari atas ke bawah, menemukan kondisi pertama yang benar, menjalankan blok itu, lalu melanjutkan.

Sekarang, ada satu hal yang benar-benar perlu dipahami, karena inilah yang sering bikin orang keliru. Ada perbedaan yang halus tapi sangat penting antara menulis dua percabangan `if` terpisah dan memakai `else if`. Jadi bayangkan kita sedang membuat program yang memberikan hadiah biasa atau hadiah bonus tergantung skor seseorang. Lihat dua kemungkinan ini. Yang satu memakai `else if`, yang lain memakai dua percabangan `if` yang terpisah. Apa bedanya hasilnya?

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

Jadi pada kasus pertama, dengan `else if`, kita memeriksa skor tinggi dan memberikan hadiahnya, lalu kita tidak menjalankan `else if` itu. Jadi orang yang skornya di atas seratus hanya mendapat hadiah bonus.

Tapi pada contoh kedua, kedua `if` itu sepenuhnya mandiri. Keduanya akan dijalankan dan keduanya benar. Jadi orang ini mendapat dua hadiah. Pada contoh pertama, satu hadiah. Pada contoh kedua, dua hadiah. Luangkan waktu sebentar untuk benar-benar memastikan kamu paham hal ini.

Menarik juga untuk dicatat bahwa keduanya bisa saja benar, tergantung bagaimana permainannya dirancang. Mungkin peserta mendapat hadiah biasa dan hadiah bonus, atau mungkin hadiahnya hanya ditingkatkan menjadi hadiah bonus. Tidak ada kode yang benar atau salah. Keduanya berguna di situasi yang berbeda. Tapi kamu perlu tahu mana yang ingin kamu pakai.
