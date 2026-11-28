---
title: "Menggunakan `repeat` tanpa angka"
description: "Membiarkan tanda kurung pada perulangan `repeat` tetap kosong sehingga Jiki terus berjalan sampai ada sesuatu yang menyuruhnya berhenti."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Sejauh ini, setiap kali kamu memakai perulangan `repeat`, kamu selalu menuliskan angka yang menentukan berapa kali pengulangan itu terjadi. Ulangi lima kali, 10 kali, 40 kali. Kadang-kadang kamu juga memakai variabel untuk melakukannya. Tapi kamu selalu memberi tahu Jiki dengan pasti berapa kali perulangan itu harus dijalankan. Sayangnya, kadang kita tidak tahu sebelumnya berapa kali kita perlu mengulang. Coba ingat lagi soal labirin. Jauh di awal kursus ini, kamu menyelesaikan labirin dengan menuliskan langkah-langkah tertentu. Kamu bisa melihat labirinnya, menghitung langkahnya, lalu menuliskan jumlah gerakan yang tepat.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Sebuah labirin yang jalannya bisa dilihat karakternya, langkahnya bisa dihitung, lalu gerakan yang tepat bisa dituliskan"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Tapi bagaimana kalau aku bilang, “Tuliskan kode yang bisa menyelesaikan labirin apa pun yang kuberikan padamu?” Labirin itu mungkin butuh 10 langkah, atau 50, atau 200. Kamu sama sekali tidak tahu sebelumnya.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Beberapa labirin berbeda dengan bentuk dan ukuran yang beragam, dengan Jiki yang bingung memikirkan cara menyelesaikan semuanya"
  width="402"
  height="400"
/>

Jadi kamu butuh cara untuk sekadar menyuruh Jiki terus berjalan. Terus periksa jalan mana yang bisa kamu lewati, terus ambil keputusan, terus melangkah maju, berulang-ulang sampai selesai.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki berlari di atas treadmill, terus berjalan berulang-ulang"
  width="428"
  height="400"
/>

Dan caranya sangat sederhana. Cukup jangan beri angka pada kata kunci `repeat`. Biarkan saja tanda kurungnya kosong. Kalau kamu melakukannya, Jiki akan terus berjalan sampai ada sesuatu yang menyuruhnya berhenti. Nanti kita akan membahas apa saja “sesuatu” itu. Tapi untuk sekarang, dia akan terus berjalan sampai latihannya selesai, atau sampai dia merasa sudah berjalan sangat lama, ingin istirahat, dan memutuskan sudah cukup.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki terkulai kelelahan di atas treadmill setelah berjalan sangat lama, siap menyerah dan beristirahat"
  width="500"
  height="378"
/>
