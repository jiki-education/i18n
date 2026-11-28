---
title: "Animasyon"
description: "Arka planı yeniden boyayıp her kareyi biraz farklı bir konumda yeniden çizerek gözü hareket görüyormuş gibi kandırmak."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Şimdiye kadar bir şeyler çizmek için `repeat` döngüsünü kullandığımızda, çizdiğimiz her yeni şey görüntüye bir şeyler ekledi. Duvara yeni bir tuğla çizdiysek, bir boşluğu doldurdu. 10 daire çizdiysek, ekranda 10 daire görürüz. Bu bir resim gibi. Duvara boya sürdüğümüzde, yanına yeni bir şey boyadığımızda o boya kaybolmaz. Olduğu yerde kalır. Peki bir şey hareket ediyormuş gibi görünsün istersek ne olur?

Hiç çevirmeli kitap gördünüz mü? Ben çocukken çok popülerdi, artık daha az. Çevirmeli kitap, her sayfasında biraz farklı bir çizim olan küçük bir kitaptır. Sayfaları hızlıca çevirdiğinizde gözleriniz çizimlerin değiştiğini görür, beyniniz de bir şeyin hareket ettiğini düşünür. Aslında hareket eden bir şey yoktur. Sadece arka arkaya gelen, birbirinden biraz farklı bir sürü resim vardır. Kodda animasyon da tam olarak böyle çalışır. İşin sırrı aynıdır. Yeni bir sahne çizmeden önce tuvalin tamamını bir arka plan rengiyle boyarız; bu, çevirmeli kitabımızda yeni bir sayfa açmaya benzer. Ardından harekete benzeyecek küçük bir değişiklik yaparız.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Koşan bir çöp adamı gösteren çevirmeli kitap; her sayfa biraz farklı olduğu için figür hareket ediyormuş gibi görünüyor"
  width="500"
  height="274"
/>

Diyelim ki ekran boyunca daireler çizdiğimiz tanıdık bir kod bloğumuz var: bir `position` (konum) değişkeni tanımlıyoruz ve bir `repeat` bloğunda daire çizip `position` değerini bir birim sağa kaydırıyoruz. O `repeat` bloğunu 100 kez çalıştırırsak ekran boyunca 100 daire görürüz.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Ekran boyunca soldan sağa çizilmiş 100 mavi daireden oluşan iz"
  width="500"
  height="197"
/>

Şimdi, her seferinde daireyi çizmeden önce sadece tek bir düz dikdörtgen eklersek ne olacağına bakalım.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Artık gözlerimiz bir daire izi yerine, ekran boyunca kayıp gidiyormuş gibi görünen tek bir daire görür.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Bir dizi kare; her biri yeni ve beyaz bir tuval, üzerinde bir adım daha sağda tek bir mavi daire"
  width="500"
  height="187"
/>

Döngüden her geçişimizde yepyeni bir arka plan boyuyoruz, önceden orada olan her şeyi örtüyoruz ve sonra daireyi yeni yerine çiziyoruz.

Döngüdeki her tur, çevirmeli kitaptaki yeni bir sayfa gibidir.

Burada anlamamız gereken en önemli şey, daireyi hareket ettirmediğimiz. Daire, ekran boyunca kayan bir nesne değil. O sadece bir çizim. Döngüdeki her turda eski çizimin üzerini boyuyoruz ve onun biraz sağında yepyeni bir çizim yapıyoruz. Gözleriniz bütün bunları bir araya getirip hareket görür, ama aslında bunlar arka arkaya gelen bir sürü ayrı çizimden başka bir şey değil.

Bu fikri bir gün batımı oluşturmak için kullanabiliriz. Güneşi hareket ettiririz, boyutunu değiştiririz, rengini değiştiririz. Hepsi aynı teknik. Birkaç değişken tanımlarız, taze bir arka plan boyarız ve her şeyi çizeriz. Sonra değişkenleri güncelleriz ve aynı şeyi yine yaparız.
