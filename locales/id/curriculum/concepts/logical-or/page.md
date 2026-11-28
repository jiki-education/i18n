---
title: "Operator `||` (atau)"
description: "Menggabungkan dua kondisi dengan `||` sehingga seluruh kondisinya bernilai benar ketika setidaknya salah satu bagiannya benar."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Kita juga bisa memakai `or`, dan lagi-lagi, sayangnya, JavaScript tidak punya kata kunci or yang praktis. Sebagai gantinya, kita harus memakai dua garis vertikal (bahasa Inggris: _bars_) yang berdampingan ini untuk berarti “atau”. Kelihatannya aneh, tapi sebenarnya tidak. Kamu akan terbiasa.

Jadi kita bisa bilang, kalau seseorang berusia di atas 20 tahun atau dia memakai pakaian disko, maka dia boleh masuk. Jadi kita akan berpesta seru dengan anak-anak berpakaian disko dan orang dewasa yang berpakaian seadanya, yang kedengarannya masuk akal.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki menyambut campuran anak-anak berpakaian disko dan orang dewasa berpakaian santai yang melewati pintu menuju pesta"
  width="327"
  height="400"
/>

Ada satu hal yang sering bikin orang tersandung, baik pada and maupun or, yaitu setiap sisi dari and/or harus berupa perbandingan yang lengkap. Jadi meskipun kamu membandingkan variabel yang sama di kedua sisi, kamu harus mengulanginya. Kamu tidak bisa menulis `if age is less than 13 or greater than 20`. Kamu harus menulis `if age is less than 13 or age is greater than 20`. Kedua sisinya harus berupa perbandingan yang lengkap.

```javascript
if (age < 13 || age > 20)
```

Kamu perlu memikirkan kapan kedua kondisi sama-sama penting dan kapan hanya salah satunya yang perlu bernilai benar.
