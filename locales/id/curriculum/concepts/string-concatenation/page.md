---
title: "Penggabungan string"
description: "Menggabungkan string dengan `+` untuk melekatkan teks tetap dan variabel menjadi satu string yang lebih panjang."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Kamu sudah tahu apa itu string. String itu seperti potongan kertas yang bertuliskan teks.

Sejauh ini, semua string yang kamu pakai adalah string yang kamu tulis langsung. Tapi bagaimana kalau kamu ingin menyusun string berdasarkan variabel atau kondisi? Bagaimana caranya?

Ada dua cara.

Cara pertama disebut penggabungan string (bahasa Inggris: _string concatenation_), yaitu istilah yang terdengar mentereng dan agak membingungkan untuk sekadar menyebut “menggabungkan dua string”.

Bayangkan kamu punya dua kata, `"hello"` dan `"world"` (dunia), dan kamu ingin membuat string yang berisi `"hello world"`.

Kamu bisa saja langsung menulis `"hello world"` sebagai satu string, tapi kamu juga bisa menulis `"hello " + "world"`, dan hasilnya adalah string yang sama.

Nah, jelas dalam kasus ini cara itu belum begitu berguna. Tapi bagaimana kalau kita punya variabel yang berisi nama seseorang dan kita ingin menyapa orang itu?

Jadi, bayangkan kita punya variabel bernama `name` (nama), yang kadang berisi `"Jeremy"` (nama orang) dan kadang berisi `"Jiki"` (nama karakter). Kita ingin mengucapkan `"hello Jeremy"` atau `"hello Jiki"` dengan menggunakan variabel itu.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki memegang kotak berlabel name yang bisa berisi nilai yang berbeda-beda"
  width="207"
  height="400"
/>

Nah, kita bisa melakukannya dengan konsep penggabungan ini:

```javascript
"hello " + name // "hello Jeremy" atau "hello Jiki"
```

Hasilnya nanti `"hello Jeremy"` atau `"hello Jiki"`, atau sapaan untuk siapa pun juga, tergantung apa yang ada di dalam kotak `name`.
