---
title: "`!` (değil) operatörü"
description: "`!` ile bir Boolean değerini tersine çevirmek: doğru yanlışa, yanlış doğruya dönüşür. Değerleri tersine çevirmek veya kontrolleri olumsuzlamak için kullanışlıdır."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Şimdiye kadar bir şeylerin eşit olup olmadığını görmek için karşılaştırma yaparken üç eşittir işareti kullandık. Ama bazen şeylerin eşit olmadığını kontrol etmek isteriz ve bunun için ünlem işaretinin ardından iki eşittir işareti kullanırız. Genel olarak programlamada ünlem işareti, ya da sanırım Amerikalı dostlarımızın dediği gibi bang, “değil” anlamına gelir. Şimdi bir dükkânda çalıştığınızı ve yönetimin içeriye disko kıyafetiyle girilmesine izin vermeme kararı aldığını hayal edin.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Bir dükkânın kapısında, sıradaki insanların kıyafetlerini kontrol eden bir görevli"
  width="451"
  height="400"
/>

“Kıyafet disko değilse kapıyı aç” diyebiliriz. `if` deyimi tamamen aynı şekilde çalışır.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Tek fark, koşulun şeyler farklıysa doğru, aynıysa yanlış döndürmesi. Yani aynı şeyi “Kıyafet disko ise hiçbir şey yapma. Değilse kapıyı aç” diyerek de yazabiliriz. Ama genellikle `not` operatörünü (İngilizce: _operator_) kullanmak, gerçekten ne demek istediğinizi bilmek ve söylemek için daha kolay ve daha temizdir.

Bununla ilgili bir şey daha var. Bazen doğru olan bir değişkeniniz olur ve onu yanlışa çevirmek istersiniz, ya da yanlış olan bir şeyiniz olur ve onu doğruya çevirmek istersiniz. Bunu bir şeyi takip etmek için kullanabiliriz. Şimdi soldan sağa zıplayan bir şeyimiz olduğunu ve `movingRight` (sağa hareket) adında bir değişkenimiz olduğunu hayal edelim. Bu değişken, sağa doğru gitmeniz gerektiğinde doğrudur. Ama sağ kenara vardığınızda onu tersine çevirmek (İngilizce: _toggle_), yani yanlışa döndürmek istersiniz.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Yandan yana zıplayan bir topla ve raketlerle Pong tarzı bir kort; movingRight değişkenini tersine çevirmeyi gösteriyor"
  width="500"
  height="352"
/>

Bunu “`movingRight` doğruya eşitse `movingRight` yanlışa eşittir. Değilse `movingRight` doğruya eşittir” diyerek yapabiliriz. Bu, değişkeni tersine çevirmenin bir yolu. Jiki `movingRight` değişkenine bakıp doğru mu yanlış mı olduğunu görür, sonra tersini bulur ve o değeri kutuya geri koyar.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Ama bunu yapmanın daha şık bir yolu var, o da aynı ünlem işaretini, yani bang'i kullanmak:

```javascript
movingRight = !movingRight
```

Bu onu tersine çevirir. `!movingRight`, daha önce neyse onun tersi anlamına gelir.

Yani `movingRight` doğruysa artık yanlış, yanlışsa artık doğrudur. Jiki kutuda o anda ne olduğunu alır ve o bang ona tersini bulmasını söyler. Doğrunun tersi yanlıştır. Yanlışın tersi doğrudur ve sonra onu kutuya geri koyar. Bu, o daha uzun if/else deyimiyle tamamen aynıdır, sadece yazması çok daha şık ve öz.
