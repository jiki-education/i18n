---
title: "Fonksiyonlara dönüş değeri eklemek"
description: "`return` anahtar kelimesiyle kendi fonksiyonlarınıza, bir değeri çağırana geri veren bir kaydırak kazandırma."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Artık girdisi olan ve olmayan fonksiyonlar oluşturmayı biliyorsunuz. Öğrenecek son bir şey kaldı, ondan sonra fonksiyon yapma uzmanı olacaksınız. O son şey de fonksiyonlarınıza bir kaydırak kazandırmak.

Zaten bir şeyler döndüren bir sürü fonksiyon kullandınız. `isAlienAbove` (yukarıda uzaylı var mı) size doğru ya da yanlış verir. `Math.randomInt(1, 10)` (Math matematik, randomInt rastgele tam sayı demek) size rastgele bir sayı verir.

Jiki bu fonksiyonları kullandığında kaydıraktan bir şey çıkıyor, sonra gidip onu kullanabiliyor.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki, makinenin kaydırağından çıkan bir değeri alırken"
  width="500"
  height="312"
/>

Bunu yapmak için yeni bir anahtar kelimeye daha ihtiyacımız var: `return` anahtar kelimesi.

`return` anahtar kelimesi Mini Jiki'ye kaydıraktan bir şey itmesini söyler.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Makinenin içindeki Mini Jiki, 42 değerini kaydıraktan dışarı itiyor"
  width="500"
  height="335"
/>

Hadi bir fonksiyon yapalım ve adını `meaningOfLife` (hayatın anlamı) koyalım. Bu fonksiyonun işi her zaman sadece `42` sayısını döndürmek. Hiç girdisi yok. Şöyle yazıyoruz:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="meaningOfLife makinesi 42 sayısını kaydırağından dışarı gönderiyor"
  width="500"
  height="323"
/>

Artık kodumuzda `meaningOfLife()` yazdığımız her yerde, `42` sayısını geri alırız ve onu herhangi bir değer gibi kullanabiliriz. `let` ile bir kutuya koyabiliriz, başka bir fonksiyona girdi olarak verebiliriz, bir `if` deyiminde karşılaştırabiliriz.

Dönüş değeri olan fonksiyonlar girdi de alabilir. `age` 18'in altındaysa `"Sorry, too young"`, değilse `"Welcome"` döndüren bir `ageBracket(age)` (yaş aralığı) fonksiyonu yazabilirsiniz. Onu kim çağırırsa çağırsın, fonksiyonun döndürdüğü karakter dizisini geri alır.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Makinenin para deliğine bir yaş değeri bırakılıyor, böylece neyi döndüreceğine karar verebiliyor"
  width="487"
  height="400"
/>

Programlama temelde tam olarak böyle işler. Bu küçük yapı taşlarından bir sürü oluştururuz, sonra onları birleştirip programlar yaparız.
