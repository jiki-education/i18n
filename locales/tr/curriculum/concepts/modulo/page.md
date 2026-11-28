---
title: "Kalanları Bulmak için `%` Operatörünü Kullanma"
description: "Bölmeden sonra geriye kalanı bulmak için `%` operatörünü kullanma; bu genellikle bir sayının çift mi tek mi olduğunu kontrol etmek için kullanılır."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Şimdiye kadar aritmetik yaparken toplama, çıkarma, çarpma ve bölmeyi kullandık. Şimdi bir tane daha tanıtacağız: kalan (İngilizce: _remainder_) operatörü.

Kalan operatörü, iki sayıyı böldüğümüzde mantıken geriye kalanı verir ve bunu yüzde işaretiyle yazarız. Yani şöyle yazarsak:

```javascript
10 % 4 // 2
```

diyoruz ya da soruyoruz: “10'u 4'e böldüğümüzde geriye ne kalır?” Cevap iki. Elimizde 10 şeker ya da fındık olduğunu ve bunları dört kişiye eşit olarak paylaştırmak istediğimizi düşünelim. Herkes iki tane alır ve sonunda iki tane artar. İşte o artan kısım kalandır. Yüzde işaretinin bize verdiği şey budur.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Dört kişi arasında eşit olarak paylaşılan on şekerlik bir sıra; kalan olarak iki şeker artıyor"
  width="500"
  height="22"
/>

Bunu kodda oldukça sık kullanmamızın bir nedeni, bir şeyin eşit bölünüp bölünmediğini anlayabilmemizdir. Bununla ilgili en sık karşılaşacağımız kalıp da bir sayının çift mi tek mi olduğunu bulmaktır. Bildiğiniz gibi çift sayıların hepsi ikiye eşit bölünür. Tek sayıların hepsinde ise ikiye böldüğünüzde bir kalır.

Yani dört, altı ya da sekiz alırsanız, bunları ikiye böldüğünüzde hiçbir şey artmaz; beş, yedi ve dokuzda ise ikiye böldüğünüzde sonunda hep bir artar. Dolayısıyla `if something % 2 === 0` yazarak “Bu şey çift bir sayı mı?” diye soruyoruz. Bu, pek çok şey için işe yarar. Farklı renklerde çizgiler oluşturmak ya da bir kuyruğu ikiye bölüp size doğru gelen herkesi iki yoldan birine göndermek gibi.

Şunu da belirtelim: insanların bu kalan operatöründen modulo operatörü diye bahsettiğini duyabilirsiniz. Modulo ile kalan temelde aynı şeydir. Muhtemelen hiçbir zaman endişelenmeniz gerekmeyecek bazı küçük farklar var, o yüzden şimdilik onu kalan operatörü olarak düşünelim; böyle çok daha kolay.
