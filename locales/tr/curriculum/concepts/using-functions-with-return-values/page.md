---
title: "Bir şey döndüren fonksiyonlar"
description: "Bir fonksiyonun çıkış kaydırağından fırlayan bir değeri yakalayıp kodunuzda kullanmak."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Şimdiye kadar dünyada bir şeyler yapan fonksiyonlara baktık. Mesela `circle` (daire) fonksiyonu bir daire çizer. `move` (götürmek) fonksiyonu karakterinizi götürür. Ama bazı fonksiyonlar farklı çalışır. Dışarıda bir şey yapmak yerine, kodunuzun içinde kullanabileceğiniz bir şey verirler. Bir fonksiyon, kodda kullanması için Jiki'ye bir şey geri verdiğinde, o fonksiyonun bir şey döndürdüğünü (İngilizce: _returning_) söyleriz. Jiki'ye bir şey geri döndürür. Bu makinelerin bir çıkış kaydırağı olduğunu düşünebilirsiniz. Zaten içine bir şeyler koyduğumuz para deliklerimiz var, ama tek bir çıkış deliğimiz ya da içinden bir şeyin geri çıkabildiği bir kaydırağımız da olabilir. Jiki makinenin düğmesine bastığında makine vınlayarak çalışmaya başlar ve sonunda o kaydıraktan bir şey fırlar. Bu bir sayı olabilir. Bir karakter dizisi olabilir. Jiki'nin yakalayıp kullanabileceği bir şeydir.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Yan tarafında bir çıkış kaydırağı olan, bir değeri Jiki'ye geri göndermeye hazır bir makine"
  width="500"
  height="317"
/>

Fonksiyonların çoğu, muhtemelen %95'i, bir şey döndürür. Sizin için biraz hesap yapıp değeri döndürebilirler ya da birkaç karakter dizisini birbirine yapıştırıp ortaya çıkan karakter dizisini size verebilirler. Ya da belki o makineyi her çalıştırdığınızda size şu anki saati verirler. Şimdi sonuncusuna bakalım. Diyelim ki `getCurrentTime` (şu anki saati getirir) adında bir fonksiyonumuz var. Jiki makineyi her çalıştırdığında, çıkış kaydırağından üzerinde saatin yazılı olduğu bir kâğıt kayar, belki 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Çıkış kaydırağından 14:35 yazan bir kâğıt kayan getCurrentTime makinesi"
  width="500"
  height="312"
/>

Sonra bu döndürülen değeri `let` ile bir kutuya koyabiliriz:

```javascript
let time = getCurrentTime()
```

Jiki makineyi çalıştırır, şu anki saati kaydıraktan alır ve `time` adındaki kutuya koyar.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki'nin kaydıraktan çıkan 14:35 yazılı kâğıdı time etiketli bir kutuya koyması"
  width="372"
  height="400"
/>

Şimdi, Jiki'nin kutuya koyduğu kâğıdın o an için sabit olduğunu anlamak önemli. Programınız çalışırken gerçek saat değişse bile, kutuda hâlâ 14:35 yazılı o kâğıt durur. Bir şey bir kez kutuya girdi mi, orada sabit bir şey olur. Sihirli bir şekilde değişmez. İleride şu anki saati tekrar kutuya koymak istersek, onu almak için `getCurrentTime` fonksiyonunu yeniden kullanmamız gerekir.

Bir şey döndüren fonksiyonların çoğunun girdileri de vardır. Örneğin, girdi olarak iki karakter dizisi alan ve bunları bir boşlukla birleştirip döndüren bir `join` (birleştirir) fonksiyonumuz olabilir. Yani `join` makinesine girdi olarak `"Hello"` ve `"World"` verirsek, kaydıraktan üzerinde `"Hello World"` yazan tek bir karakter dizisi çıkar.

```javascript
join("Hello", "World"); // "Hello World"
```
