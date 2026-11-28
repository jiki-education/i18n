---
title: "Fonksiyonlara girdi ekleme"
description: "Kendi fonksiyonlarınıza para delikleri ekleyerek, aktarılan değerlere göre farklı şeyler yapmalarını sağlamak."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Şu ana kadar yaptığınız fonksiyonlar her seferinde tam olarak aynı şeyi yapar. `turnAround` her zaman iki kez sola döner. `shootIfAlienAbove` her zaman kontrol eder ve ateş eder.

Ama kurs boyunca kullandığımız fonksiyonları bir düşünelim; girdilere göre nasıl farklı şeyler yapıyorlar. Rectangle girdi olarak left, top, width ve height alır ve söylediklerinize göre farklı bir dikdörtgen çizer.

Şimdi kendi fonksiyonlarımıza da para delikleri ekleyeceğiz.

Bunu yapmak için iki şeyi bilmemiz gerekiyor. Birincisi bunun gerçekte nasıl göründüğü, yani ne yazmamız gerektiği; ikincisi de aslında neler olup bittiği.

İlk kısım oldukça basit. Sadece normal parantezler ekleyip içine istediğimiz girdilerin adlarını yazıyoruz.

Diyelim ki çok kez ateş etmesi gereken bir fonksiyon oluşturuyoruz. Adını `shootMany` koyalım.

Şöyle yazarız:

```javascript
function shootMany(numShots) {
  // ...
}
```

Bu fonksiyonu kullanmak istediğinizde, istediğiniz atış sayısıyla çağırırsınız:

```javascript
shootMany(5)
shootMany(2)
```

İşte can alıcı nokta burası. Kod çalıştığında, o girdiye ne koyarsanız koyun, `5` ya da `2`, fonksiyonun içindeki şapkalı mini-Jiki o girdiyi alır ve `numShots` adında bir kutuya koyar, sonra da o kutuyu fonksiyonun kodunda kullanmanız için fonksiyonun içindeki raflara yerleştirir.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="shootMany makinesinin içindeki mini-Jiki, girdiyi numShots etiketli bir kutuya koyuyor"
  width="500"
  height="376"
/>

Bir kez daha söyleyelim.

Fonksiyonu kullanmak için `shootMany(5)` yazdığımızda, dışarıdaki Jiki gidip bir `5` alır ve onu `shootMany` makinesinin para deliğine koyar. Makinenin içinde mini-Jiki o `5` değerini çıkarır ve `numShots` adında bir kutuya koyar, çünkü o para deliğine verdiğiniz ad budur. Sonra da o kutuyu makinenin içindeki fonksiyonun raflarına yerleştirir.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki, numShots kutusunu shootMany makinesinin içindeki raflara yerleştiriyor"
  width="500"
  height="302"
/>

Sonra fonksiyonun içinde `numShots` kutusunu tıpkı başka bir kutuyu kullanır gibi kullanabilirsiniz. `numShots` adında büyülü bir şey yok. Ona istediğimiz adı verebilirdik. O sadece mini-Jiki'ye fonksiyonun içinde her zaman o etiketi taşıyan bir kutu oluşturmasını ve o deliğe verilen her şeyi o kutuya koymasını söyleyen bir talimattır.

O kutuda bir değer olduğunda, kutularla normalde yapabileceğiniz her şeyi yapabilirsiniz. `numShots` kutusunu bir repeat döngüsünün parçası olarak kullanıp doğru sayıda ateş edebilirsiniz. Birden fazla girdiniz de olabilir. Aralarına sadece virgül koyun. Yani sol üst köşesine göre bir yıldız çizen `drawStar` adında bir fonksiyonumuz varsa, şöyle yazarsınız:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="İki para deliği olan drawStar makinesi, iki ayrı değer alıyor"
  width="453"
  height="400"
/>

Fonksiyon çağrıldığında da mini-Jiki girdilere verilen değerleri `left` ve `top` adlı kutulara koyar, sonra bu kutuları fonksiyonun içindeki raflara yerleştirir.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki iki girdiyi, drawStar makinesinin içindeki raflarda left ve top etiketli kutularda saklıyor"
  width="431"
  height="400"
/>
