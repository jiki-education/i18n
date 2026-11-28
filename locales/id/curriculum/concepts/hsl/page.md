---
title: "Warna HSL"
description: "Membuat warna dari hue (coraknya, 0–360), saturasi (seberapa pekat, 0–100), dan kecerahan (seberapa terang, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL memberi kita cara yang benar-benar berbeda untuk memikirkan warna dibandingkan RGB. HSL adalah singkatan dari _hue_ (H), saturasi (bahasa Inggris: _saturation_ (S)), dan kecerahan (bahasa Inggris: _lightness_ (L)). Kamu punya fungsi bernama `hsl` yang menerima tiga angka: satu untuk hue, satu untuk saturasi, dan satu untuk kecerahan. Fungsi itu akan mengembalikan sebuah warna. Nah, mari kita uraikan arti ketiga kata itu.

```javascript
hsl(hue, saturation, lightness)
```

Hue adalah corak warna yang kamu inginkan, dan nilainya berkisar dari nol sampai 360. Coba bayangkan pelangi. Begini cara saya membayangkannya. Di sebelah kiri ada merah, lalu ada oranye, kuning, hijau, biru, ungu, dan sebenarnya kita kembali lagi ke merah. Jadi kalau kamu menulis nol, kamu mulai dari kiri, dan itu merah. Kalau kamu menulis `120`, kamu meminta warna hijau. `230` adalah biru. Kamu juga bisa membayangkan ini sebagai roda warna, dan itulah sebenarnya arti angka 360: jumlah derajat dalam satu lingkaran penuh. Saya sendiri selalu mencari angkanya kalau butuh, jadi jangan terlalu pusing menghafal semua ini. Tapi senang juga kalau tahu apa yang sebenarnya terjadi. Jadi itulah hue, yaitu coraknya. Selanjutnya ada saturasi, yaitu seberapa pekat warnanya. Nilainya dari nol sampai 100. Di angka nol, kamu hanya mendapat abu-abu. Tidak ada warna sama sekali, tidak ada nadanya sedikit pun. Di angka 100, warnanya jadi penuh, hidup, dan menyala. Lalu ada kecerahan. Kecerahan adalah seberapa terang warnanya, dan nilainya juga dari nol sampai 100. Di angka nol, kamu mendapat hitam. Apa pun hue yang kamu pilih, hasilnya hitam, karena tidak ada cahaya di dalamnya. Di angka 100, kamu mendapat putih. Apa pun yang lain, warnanya penuh cahaya, jadi hasilnya putih. Angka 50 tepat di tengah, warna normal. Jadi kamu bisa membayangkan ini sebagai slider untuk membuat warna lebih terang atau lebih gelap.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Roda warna hue dan pelangi yang menunjukkan 0 adalah merah, 120 hijau, dan 240 biru"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Slider saturasi dari 0 (abu-abu) melewati 50 sampai 100 (warna penuh yang hidup)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Slider kecerahan dari 0 (hitam) melewati 50 sampai 100 (putih)"
  width="500"
  height="398"
/>

Jadi, kalau kita ingin lingkaran merah biasa, yang dengan RGB akan kita tulis sebagai 255, nol, nol (semua merah, tanpa hijau, tanpa biru), di sini kita menggunakan nol, 100, 50. Nol untuk hue merah, 100 untuk saturasi, warna penuh, dan 50 untuk kecerahan, yaitu tingkat kecerahan yang normal. Kalau kita ingin membuatnya jadi lingkaran hijau, kita tinggal mengubah hue-nya menjadi `120`. Kalau kita ingin hijaunya lebih gelap, kita bisa menurunkan kecerahannya sampai `25`.

```javascript
hsl(0, 100, 50) // merah
hsl(120, 100, 50) // hijau
hsl(120, 100, 25) // hijau gelap
```

Kalau kita ingin hijaunya lebih kusam, kita bisa mengurangi sebagian warnanya, sebagian saturasinya, misalnya menurunkannya ke `30`.

Kalau kamu ingin warna merah muda yang terang dan menyala, hue sekitar 300 itu merah muda. Naikkan saturasinya ke 100 supaya benar-benar hidup, lalu tingkatkan juga kecerahannya ke sekitar 60.

HSL cocok sekali kalau kamu ingin memutar-mutar warna. Kalau kamu ingin pelangi, kamu tinggal terus menaikkan hue-nya.
