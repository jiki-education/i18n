---
title: "Karakter dizilerinde indeksleme"
description: "Köşeli parantezler ve bir konum numarası kullanarak bir karakter dizisinden tek bir harf çekme. Konumların sıfırdan başladığını unutmayın."
en_md5: cd31e0366b3090b358494667003f54c9
---

Adımın Jeremy olduğunu ve ondan baş harfim olan J'yi çıkarmak istediğinizi düşünün. Bunu nasıl yaparız?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki'nin bir karakter dizisinden tek bir harfi nasıl çıkaracağını düşünmesi"
  width="361"
  height="353"
/>

Bir karakter dizisini harflerden oluşan bir sıra olarak düşünebilirsiniz. Yani `"Jeremy"` altı harften oluşur, J-E-R-E-M-Y, ve her birinin bir konumu vardır. `"J"` ilk konumda, `"y"` ise son konumda.

JavaScript'te ve çoğu programlama dilinde bu konumlar sıfırdan başlar. Yani ilk harf `"J"` sıfırıncı konumda, sonra `"e"` birinci konumda, `"r"` ikinci konumda, `"e"` üçüncü konumda, `"m"` dördüncü konumda ve `"y"` beşinci konumda.

Şimdi, sıfırdan başlama meselesi gerçekten tuhaf ve dürüst olmak gerekirse normal dünyadaki gibi birden saymaya başlasak hayat daha kolay olurdu. Ama öyle değil. Çoğu programlama dilinde bunun yerine sıfırdan saymaya başlarız, o yüzden bunu öğrenmeniz gerekiyor.

Belirli bir konumdaki harfi almak istersek, içine sayıyı yazdığımız köşeli parantezleri kullanabiliriz.

Yani `"Jeremy"[0]` dersek, `"Jeremy"` kelimesinin ilk harfini ver demiş oluruz.

`"Jeremy"[1]` dersek de ikinci harfini ver demiş oluruz.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Bunu değişkenlerle de yapabiliriz. `name` (ad) adında bir değişken oluşturup değerini `"Jeremy"` karakter dizisine ayarlarsak, `name[0]` yazabiliriz ve yine `"J"` elde ederiz.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Netleştirmemiz gereken bir şey var: `name[0]` ifadesinden geri aldığınız şey yalnızca başka bir karakter dizisi. Üzerinde J yazan başka bir kağıt parçası. Özel bir yanı yok. Tıpkı `"Jeremy"` nasıl bir karakter dizisiyse, o da bir karakter dizisi.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki'nin üzerinde yalnızca J harfi olan yepyeni bir kağıt parçası tutması"
  width="500"
  height="289"
/>

Sadece altı yerine tek bir harf taşıyor.

Bunu yapmak orijinal karakter dizisini hiç etkilemez. Yani J'yi oradan koparıp almıyoruz falan. Sadece harflerden hangisini istediğimizi buluyoruz ve onunla yeni bir karakter dizisi oluşturuyoruz.
