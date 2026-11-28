---
title: "`while` döngülerini anlamak"
description: "Bir koşul doğru kaldığı sürece çalışmaya devam eden döngü."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

Sırada öğreneceğimiz döngü while döngüsü.

Bu, “Bir koşul doğru olduğu sürece döngüyü çalıştır” demek. Diyelim ki Space Invaders'ta yalnızca beş kez ateş edilebileceğini söyleyen bir kural var. O zaman burada, “ateş sayısı beşten az olduğu sürece, oyunun oynanmasına izin veren bir döngüyü çalıştır” diyen bir döngümüz olur.

```javascript
while (numShots < 5) {
  // uzaylıyı vur
  numShots++
}
```

Her ateş edişte `numShots` değerini bir artırırız ve sonunda beşe ulaşırız, döngü de sona erer.

Şimdi, while döngülerinin bir sorunu var: döngünün hiç bitmemesine yol açan bug'ların ortaya çıkması oldukça kolay.

Bu tür döngülere sonsuz döngü (İngilizce: _infinite loops_) denir ve bunlar programlardaki en yaygın bug'lardan biridir.

Bilgisayarınız yavaşladığında, fanları dönmeye başladığında, her yer gürültüye boğulduğunda, bunun nedeni genellikle birinin kodunda hiç bitmeyen bir sonsuz döngü bırakmış olmasıdır.
