---
title: "İç içe döngüler"
description: "Bir döngüyü başka bir döngünün içine koymak, böylece içteki döngü dıştaki döngünün her adımında baştan sona çalışır. Izgaralar için ideal."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Diyelim ki bir sıra çiçek istiyoruz. Bunun için şöyle bir şey yazabiliriz. Bir konum belirleriz, bir çiçek dikeriz, konumu 10 artırırız, bunu tekrarlarız ve sonunda dümdüz, düzenli bir çiçek sırası elde ederiz.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki beyaz tahtanın başında, altında tek bir düzenli çiçek sırası dikilmiş halde"
  width="406"
  height="400"
/>

Ama ya satırları ve sütunları olan bir çiçek ızgarası istiyorsak? Belki dört sıra, her sırada beş çiçek.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Dört sıra beş sütunluk çiçek ızgarası ve nasıl çizeceğini düşünen Jiki"
  width="383"
  height="400"
/>

Bir sıra çiçek çizen bir döngümüz var. Bunu dört sıra çizmek için nasıl kullanabiliriz? Ya da dört sıra çizmek için ne yapabiliriz?

Bir seçenek, o döngüyü dört kez kopyalayıp yapıştırmak ve her birinde üst konumu değiştirmek olabilir. Bu da çalışır. Sorun olmaz. Ama aynı şeyi tekrar tekrar yazmış oluruz ve daha iyi bir yol var. Kod tekrarlıysa, işleri basitleştirmek için bir döngü kullanabileceğimizi biliyoruz.

Yani burada bir döngüyü başka bir döngünün içinde kullanabiliriz. Biri sıralar için, diğeri o sıradaki çiçekler için. O yüzden mevcut kodumuzun etrafına bir `repeat` döngüsü ekleyerek başlayalım, böylece mantığı hissedebilirsiniz. Sadece bir kez tekrar ettireceğiz. Yani Jiki'ye bu dış süslü parantezlerin içindeki her şeyi bir kez yapmasını söylüyoruz. Bu da dış döngü hiç yokmuş gibi tamamen aynı sonucu verir. Jiki'ye bir şeyi bir kez tekrar etmesini söylemek, `repeat` olmadan yapmasını söylemekle aynı şey. Ama kod bu şekilde çalışıyor. Bu geçerli, düzgün bir kod. Bir döngü başka bir döngünün içinde.

Peki şimdi dış döngüyü iki kez tekrar edecek şekilde değiştirirsek ne olur? Artık Jiki, `plant` (dikmek) işini beş kez yapan şeyin tamamını iki kez çalıştırır. 10 çiçek diker. Ama bu çiçeklerin hepsi aynı sırada kalır.

Nasıl her seferinde konumu soldan sağa biraz kaydırmamız gerekiyorsa, her tam sırayı çizdikten sonra dikey konumu da kaydırmamız gerekir. Peki bunu nasıl yaparız? Üst konum için dışarıda bir değişken ekleyebilir, bunu `plant` fonksiyonumuzda kullanabilir ve her sıradan sonra 10 artırabiliriz.

Şimdi her adımda değerin ne olduğunu bir düşünelim. Üst konum 10 ile başlar. Diktiğimiz ilk beş sefer boyunca öyle kalır. Sol konum artar. Sonra üst konuma bir 10 daha ekleriz ve biraz daha aşağıya beş çiçek daha dikeriz. Sol konumu yeniden 10'a döndürürüz ve sonra her seferinde tekrar artırırız.

Ve şimdi bunu dört kez tekrarla diyebiliriz, karşımıza beş bitkiden oluşan dört sıra çıkar.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Tamamlanmış dört sıra beş sütunluk çiçek ızgarası ve iki eliyle başparmağını kaldırıp onaylayan mutlu Jiki"
  width="389"
  height="400"
/>

Burada anlaşılması gereken en önemli şey şu: Jiki tüm işi önce iç döngüde (İngilizce: _inner loop_) bitirir, ancak ondan sonra dış döngüye (İngilizce: _outer loop_) döner. İleri geri zıplamaz. İç döngüyü tamamlar, sonra dış döngünün bir sonraki adımına geçer.

Bu durumda dış döngüyü grupları ya da sıraları kontrol eden, iç döngüyü de o gruptaki her öğeyi ya da o sıradaki her öğeyi kontrol eden şey olarak düşünebilirsiniz. Yani örneğimizde dış döngü dört sıra oluşturur, iç döngü ise beş bitkiyi, yani her gruba beş öğeyi yerleştirir.
