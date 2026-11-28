---
title: "Rastgele sayılar"
description: "Fonksiyon her çalıştığında farklı bir sayı elde etmek için `Math.randomInt` fonksiyonunu bir en küçük ve bir en büyük değerle kullanmak."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Programlamada çoğu zaman bir fonksiyon kullanırız ve her çalıştığında bize farklı bir rastgele sayı (İngilizce: _random number_) döndürmesini isteriz.

Bu, pek çok şekilde ve pek çok yerde işe yarar. Özellikle de kriptografide: orada makineler arasında paylaşmak için kodlar oluşturmak gibi pek çok şey yaparız ve bu kodların ele geçirilememesi için rastgele olması gerekir.

Bunun için kullanabileceğiniz `Math.randomInt` (Math matematik, randomInt rastgele tam sayı anlamına gelir) adında bir fonksiyon var. Adın ortasında bir nokta olduğunu fark etmiş olabilirsiniz. Daha fazla fonksiyona eriştikçe, işleri düzenli tutmak için onları farklı gruplara ayırırız ve buradaki `Math` (matematiğin kısaltması) kısmı, bu fonksiyonun ait olduğu grubun adıdır. Bu ad, Jiki'ye rafların hangi bölümüne bakacağını söyler. Bu örnekte `Math` bölümüne. Nokta ise sadece “bu bölüme git ve fonksiyonu bul” anlamına gelir. Şimdilik bunun için endişelenmeyin. Alıştırma talimatları size her zaman hangi fonksiyonların kullanılabilir olduğunu ve bunları nasıl kullanacağınızı söyler. Anlamanız gereken önemli nokta şu: Jiki bu fonksiyonu kullandığında, her çalıştırmada farklı bir sayı alır. Ama bir koşulla. Fonksiyonun iki girdisi var. Birincisi makinenin döndürebileceği en küçük sayı, ikincisi ise döndürebileceği en büyük sayı. Yani `Math.randomInt` fonksiyonunu `10` ve `13` ile kullanırsanız, hep `10`, `11`, `12` ya da `13` elde edersiniz. Ama her seferinde bunlardan farklı birini.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki'nin deposundaki rafların Math bölümüne merdivenle tırmanması"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Üstünde iki girdi hunisi olan Math.randomInt makinesi"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Girdi hunilerinde 10 ve 13 olan ve 10, 11, 12 ya da 13 üreten Math.randomInt makinesi"
  width="488"
  height="400"
/>

Şimdi tuvalin rastgele bir yerine daire çizmek istediğinizi düşünelim. `left` ve `top` için her seferinde rastgele farklı değerler elde etmek üzere `Math.randomInt` fonksiyonunu kullanabilirsiniz. Yalnız diyelim `10` ve `90` gibi sınırlar koyun, böylece değerler üst üste binmez ve tuvalin dışına çıkmaz. Bu kodu her çalıştırdığınızda daire biraz farklı bir yere çizilecek.
