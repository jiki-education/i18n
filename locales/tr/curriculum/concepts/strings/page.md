---
title: "Karakter dizilerine giriş"
description: "Jiki'nin kâğıda yazdığı, tırnak içine alınmış metin parçaları (bir harf, bir kelime, bir cümle ya da koca bir paragraf)."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Bir sayı kullanmak istediğinizde o sayıyı olduğu gibi yazmanız yeterli; Jiki ne demek istediğinizi anlar. Peki ya bir harf, bir kelime ya da bir cümle kullanmak isterseniz? Örneğin `rectangle` (dikdörtgen) ya da `circle` (daire) fonksiyonunda rengi belirttiğiniz fazladan bir girdi olsa ne olurdu? Rengi makineye verebilmek için nasıl yazardık? Sadece `green` (yeşil) ya da `blue` (mavi) kelimesini yazarsak Jiki bunu raflardaki bir makineyi kastettiğimiz sanır ve şöyle der: “green diye bir makine yok. Ne yapacağımı bilemiyorum.”

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki, rectangle makinesinin yanında kafası karışmış bir halde duruyor, başının üstünde soru işaretleri var"
  width="446"
  height="400"
/>

Yani bir kuralımız var: metin kullanmamız gerektiğinde onu tırnak içine, çift tırnak içine alırız. Bir şeyi bu şekilde tırnak içine aldığınızda Jiki bir kâğıt çıkarır ve tırnakların arasına yazdığınız her neyse onu o kâğıda yazar. Biz de bu kâğıt parçalarına karakter dizisi (İngilizce: _string_) diyoruz.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki bir kâğıda green kelimesini yazıyor, o kâğıt da bir karakter dizisine dönüşüyor"
  width="398"
  height="400"
/>

Karakter dizileri tek bir harf, bir kelime, bir cümle, bir paragraf, hatta bir kitap olabilir. Kural şu: metinse tırnak içine alırız ve o artık bir karakter dizisi olur.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="Farklı uzunluktaki karakter dizilerini tırnak içinde gösteren bir beyaz tahta: tek bir harf, bir kelime, bir cümle ve çok satırlı bir adres"
  width="500"
  height="398"
/>

Diyelim mavi bir dikdörtgen istiyoruz. O zaman sol konumu, üst konumu, genişliği ve yüksekliği için sayıları yazarız. Beşinci girdi içinse tırnak içinde `"blue"` yazarız.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki makineyi raftan indirir ve ilk dört para deliğine birkaç madeni para atar. Sonra bir kâğıda blue yazar, o kâğıdı beşinci para deliğine koyar ve makineyi çalıştırır.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki mavi kâğıdı rectangle makinesinin beşinci para deliğine veriyor, ilk dört para deliğinde 10, 20, 30, 40 madeni paraları duruyor"
  width="500"
  height="392"
/>

Karakter dizisi, insanların ilk başta biraz gözünü korkutan o teknik kelimelerden biri. Ama aslında tek anlamı metin. Çok çabuk alışırsınız. Bunda sihirli hiçbir şey yok.
