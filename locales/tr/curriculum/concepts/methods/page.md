---
title: "Metotlar"
description: 'Bir değere ait olan ve nokta gösterimiyle çağrılan fonksiyonlar, `"Jeremy".includes("e")` veya `"Jeremy".toUpperCase()` gibi.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Şu ana kadar karakter dizilerini ya da sayıları düşündüğümüzde, onları oldukça durağan şeyler olarak düşündük.

Öyle olsalar da, içlerine Jiki'nin kullanabileceği bir sürü işlevsellik gömülmüş durumda.

İlerledikçe bu işlevselliği, bir de sahip oldukları ve hayatınızı çok kolaylaştıran bu tür yetenekleri öğreneceğiz.

Bakacağımız iki tür yetenek var: özellikler (İngilizce: _properties_) ve metotlar.

Metotlar, karakter dizisine ait olan fonksiyonlardır.

Yani bir karakter dizisini girdi olarak verdiğimiz bir fonksiyon yazmak yerine, metodu doğrudan karakter dizisinin üzerinde kullanabiliriz.

Örneğin, bir karakter dizisinin içinde belirli bir harf olup olmadığını kontrol eden fonksiyonu hatırlıyor musunuz? Aslında karakter dizilerinin bunu yapan `includes` (içerir) adında bir metodu var ve bunu, özelliklerde gördüğünüz aynı nokta gösterimiyle kullanabiliriz.

Özelliklerden farkı, bunları yazarken fonksiyonlar gibi parantezlerle ve girdilerle yazmamız.

Yani şöyle yazabiliriz:

```javascript
"Jeremy".includes("e") // true
```

Ve geriye `true` döner, çünkü `"Jeremy"` içinde bir `"e"` var.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki'nin bir kâğıda Jeremy karakter dizisini yazması"
  width="359"
  height="400"
/>

Metotlar özelliklerden farklıdır, çünkü onlar durağan olgular değildir. Aslında fonksiyondurlar. Onları, içinde karakter dizisinin bulunduğu hazır bir kutusu olan fonksiyonlar gibi düşünebilirsiniz.

Nasıl çalıştıkları şimdilik pek önemli değil. Onları yazmaya epey bir süre başlamayacaksınız. Bilmeniz gereken tek şey, bir metodu nokta ve ardından normal fonksiyon sözdizimini kullanarak çağırdığınız.

Karakter dizileriyle ilgili bilinmesi gereken bir şey, metotların karakter dizisinin içindeki hiçbir şeyi değiştirmemesidir. Örneğin, tüm harfleri büyük harfe çevrilmiş hâliyle döndüren `toUpperCase` (büyük harfe çevirir) adında bir metot var. Ama bu, özgün karakter dizisini değiştirmez. O hâlâ `"Jeremy"` içeriyor, yalnızca J harfi büyük yazılmış olarak. Jiki bunun yerine tamamı büyük harflerden oluşan yeni bir karakter dizisi oluşturur.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
