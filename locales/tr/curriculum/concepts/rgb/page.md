---
title: "RGB renkleri"
description: "Ekranda istediğiniz rengi elde etmek için kırmızı, yeşil ve mavi ışığı 0 ile 255 arasında karıştırma."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB, renkleri kırmızı, yeşil ve mavinin bir karışımı olarak düşünmemizi sağlar. RGB'nin açılımı da zaten bu: kırmızı (İngilizce: _red (R)_), yeşil (İngilizce: _green (G)_) ve mavi (İngilizce: _blue (B)_). Okulda boya karıştırdığınızı hatırlıyorsanız fikir aslında benzer, yalnız burada boya yerine ışık karıştırıyoruz.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Kırmızı, yeşil ve mavi ışıktan oluşan, üst üste binen üç daire; karışarak sarıyı, magenta rengini, camgöbeğini ve beyazı oluşturuyor"
  width="500"
  height="390"
/>

Birçok alıştırmada `rgb(red, green, blue)` adında bir fonksiyon olacak. Bu fonksiyon girdi olarak üç sayı alır: biri kırmızı, biri yeşil, biri mavi için. Sonra da geriye bir renk döndürür.

Girdi olarak kullanabileceğiniz sayılar sıfır ile `255` arasında değişir. Sıfır “bu renkten hiç istemiyorum” demek, `255` ise “bu renkten olabildiğince çok karıştır” demek. Yani `rgb` fonksiyonunu `255`, sıfır ve sıfır girdileriyle çağırırsak “bütün kırmızıyı istiyorum” demiş oluruz. Unutmayın, oraya koyabileceğiniz en büyük sayı `255`. Ama yeşil de mavi de istemiyoruz, yani ikisi de sıfır. Böylece kırmızı elde ederiz; bu kırmızıyı bir değişkende saklayıp tıpkı şimdiye kadar adlandırılmış karakter dizileriyle yaptığımız gibi `circle` fonksiyonunda kullanabiliriz. Peki `rgb` fonksiyonunu sıfır, `255`, sıfır ile kullanırsak ne olur? Bu sefer “kırmızı yok, bütün yeşil, mavi yok” demiş oluyoruz. Karşımıza yeşil bir daire çıkar. Peki sarı istersek? Sarı, kırmızı ile yeşilin karışımıdır. Yani “bütün kırmızıyı ver, bütün yeşili ver, mavi istemiyorum” diyebiliriz ve bu bize sarıyı verir. Daha küçük sayılar da kullanabiliriz. Biraz kırmızı, hiç yeşil ve bolca mavi istersek mor elde ederiz. Bolca kırmızı, biraz yeşil, biraz daha fazla mavi ise bize pembe verir. İşte RGB bu. Farklı kombinasyonlar elde etmek için kırmızıyı, yeşili ve maviyi karıştırırız.

```javascript
rgb(255, 0, 0) // kırmızı
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="rgb(255, 0, 0) ile üretilen kırmızı bir daire; tamamı kırmızı, hiç yeşil ya da mavi yok"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // sarı
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="rgb(255, 255, 0) ile üretilen sarı bir daire; tamamı kırmızı ve tamamı yeşil, mavi yok"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // pembe
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="rgb(230, 50, 170) ile üretilen pembe bir daire; bolca kırmızı, biraz yeşil ve bir miktar mavi"
  width="436"
  height="400"
/>

Tek bir bileşeni ayarlamak istediğinizde RGB harikadır: ne kadar kırmızı, ne kadar yeşil, ne kadar mavi.
