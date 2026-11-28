---
title: "`repeat` döngüsünü sayı vermeden kullanmak"
description: "`repeat` döngüsünün parantezlerini boş bırakarak Jiki'nin, ona durmasını söyleyen başka bir şey olana kadar devam etmesini sağlamak."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Şimdiye kadar repeat döngüsünü kullandığınızda her zaman kaç kez tekrar edileceğini söyleyen bir sayı belirttiniz. Beş kez tekrar, 10 kez tekrar, 40 kez tekrar. Bunu bazen bir değişkenle de yaptınız. Ama Jiki'ye döngünün kaç kez tekrarlanacağını her zaman tam olarak söylediniz. Oysa bazen kaç kez tekrar edeceğimizi önceden bilemeyiz. Labirenti düşünün. Bu kursun en başında labirenti, belirli hareketleri tek tek yazarak çözmüştünüz. Labirenti görebiliyor, adımları sayabiliyor ve doğru sayıda hareketi yazabiliyordunuz.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Karakterin yolu görebildiği, adımları sayabildiği ve doğru hareketleri tam olarak yazabildiği bir labirent"
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

Peki ya size “Bana verdiğim her labirenti çözen bir kod yazın” desem? O labirent 10 adım gerektirebilir, ya da 50, ya da 200. Önceden bunu bilmenizin hiçbir yolu yok.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Farklı şekil ve boyutlarda birkaç labirent ve bunlardan herhangi birini nasıl çözeceğini düşünen Jiki"
  width="402"
  height="400"
/>

Yani Jiki'ye sadece devam etmesini söylemenin bir yolunu bulmanız gerekiyor. Hangi yöne gidebileceğini kontrol etmeye devam etsin, kararlar almaya devam etsin, ilerlemeye devam etsin. İşi bitene kadar, durmadan, tekrar tekrar.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Koşu bandında durmadan tekrar tekrar koşan Jiki"
  width="428"
  height="400"
/>

Bunu yapmanın yolu gerçekten çok basit. `repeat` anahtar kelimesine bir sayı vermeyin yeter. O parantezleri boş bırakın. Bunu yaparsanız Jiki, ona durmasını söyleyen başka bir şey olana kadar durmadan devam eder. İleride bu başka şeylerin neler olduğuna bakacağız. Ama şimdilik, alıştırma bitene kadar durmadan devam eder. Ya da çok uzun zamandır devam ettiğine kanaat getirip bir mola vermek ister ve artık yeter dediğine karar verir.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Uzun süre koştuktan sonra bitkin halde koşu bandına yığılmış, pes etmeye ve mola vermeye hazır Jiki"
  width="500"
  height="378"
/>
