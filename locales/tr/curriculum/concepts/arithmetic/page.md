---
title: "Aritmetik"
description: "Değerlerin toplama, çıkarma, çarpma ve bölme yoluyla birbirleriyle ilişki kurabilmesi ve birbirine bağlı olabilmesi için değişkenleri matematikle birleştirmek."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Şimdiye kadar değişken oluşturduğumuzda yalnızca basit değerler kullandık: `50` gibi bir sayı ya da `"yellow"` gibi bir karakter dizisi. Değişkenler asıl gücünü, birbirleriyle birlikte kullanabildiğimizde gösterir. Yani dikdörtgenin sol kenarının tuvalin kenarından belirli bir uzaklıkta olması gerektiğini söyleyebildiğimizde.

Programlamada normal, temel matematiği kullanabiliriz: toplama, çıkarma, çarpma, bölme gibi işlemler. Bunların bir parçası olarak önceden tanımladığımız değişkenleri de kullanabiliriz.

Önce tuvalimize bir dikdörtgen çizmek istediğimizi söyleyerek başlayalım. Soldan ve sağdan 10, üstten ve alttan 20 içeride başlasın istiyoruz. Yani tuvalin ortasında olacak, genişliği yüksekliğinden biraz daha fazla.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Tuvalin ortasında, soldan ve sağdan 10, üstten ve alttan 20 içeride duran mavi bir dikdörtgen"
  width="399"
  height="400"
/>

Bir dikdörtgen çizdiğimizde, renginin yanı sıra `left` (sol), `top` (üst), `width` (genişlik) ve `height` (yükseklik) değerlerini bilmemiz gerekir. O halde bunları yazarak başlayabiliriz.

Ve şimdi `left`, `top`, `width` ve `height` değerlerinin ne olması gerektiğini gerçekten hesaplamamız gerekiyor. O halde bunları belirleyelim. `left` 10 olsun. `top` 20 olsun. `width` ise, şey, `width` tuvalin boyutudur, yani 100, eksi soldaki 10 ve sağdaki 10, bu da 80 eder. `height` ise tuvalin yüksekliğidir, o da 100, eksi üstteki 20 ve alttaki 20, yani 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Yani bu değişkenleri tanımlayabiliriz. `left` 10, `top` 20, `width` 80, `height` 60. Peki şimdi dikdörtgeni biraz içeri almak, biraz küçültmek istersek ne olur? Diyelim soldan ve sağdan 20, üstten ve alttan 30 içeri almak istiyoruz. Her şeyi baştan hesaplamamız gerekir. `width` artık 100 eksi 20 eksi 20, `height` ise 100 eksi 30 eksi 30. Bu da kesinlikle benim yapmak istediğimden çok daha fazla iş ve matematik. Bunun yerine bilgisayara bunu bizim için yapmasını söyleyebiliriz.

`width` değerini 100 eksi `left` eksi `left` olarak, `height` değerini de 100 eksi `top` eksi `top` olarak belirleyebiliriz, çünkü üst ve alt aynı. Ya da bunu 100 eksi `left` çarpı iki, veya 100 eksi `top` çarpı iki diye yazabiliriz.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Artık `left` ya da `top` değerini değiştirirsek, `width` ve `height` de değişir. Yani işler birbirine bağlanmaya başlıyor. Peki ya tuval? O şimdi 100. Ama ya tuvalimiz 200 genişliğinde ve 200 yüksekliğinde olsaydı? O zaman muhtemelen `canvasSize` (tuval boyutu) adında bir değişken tanımlayıp onu 100 yapmalıyız. Artık `width` değerimiz `canvasSize` eksi `left` çarpı iki, `height` değerimiz de `canvasSize` eksi `top` çarpı iki.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

`height` eşittir `canvasSize` eksi `top` çarpı iki yazdığımızda Jiki'nin ne yaptığını düşünelim. Önce `top` kutusunu raftan alır, içinde 30 bulur, cep hesap makinesini çıkarır ve 30 çarpı ikinin 60 ettiğini hesaplar, aklına 60'ı not eder.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki'nin top kutusunu raftan alıp 30 çarpı ikinin 60 ettiğini hesaplaması"
  width="377"
  height="400"
/>

Sonra `canvasSize` kutusunu raftan alır, içinde 100 bulur ve 100 eksi 60'ın 40 ettiğini hesaplar. Artık aslında söylediğimiz şeyin `height` eşittir 40 olduğunu bilir. O yüzden `let` anahtar kelimesine uyar, yeni bir kutu alır, üzerine `height` yazar ve içine 40 koyar. Sonra `height` değerini kullandığında yalnızca 40'ı geri çıkarır.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki'nin yeni bir kutu alıp üzerine height yazması ve içine 40 koyması"
  width="462"
  height="400"
/>

Bir alıştırmada her şey çalışmaya başladığında, değişkenlerin değerlerini değiştirip neler olduğuna bakın. Nasıl büyüdüklerini ve nasıl küçüldüklerini izleyin. Acele etmeyin, şeyler arasındaki ilişkileri düşünün.
