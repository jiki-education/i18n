---
title: "Değişkenleri güncelleme"
description: "Programınız çalışırken bir değişkenin içindekini değiştirmek; böylece konumları, sayıları, puanları ve değişen diğer değerleri takip edebilirsiniz."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Şu ana kadar değişken oluşturduğumuzda değerleri kutulara koyduk ve sonra da oradan çıkardık. Bu, kodumuzu daha anlaşılır hale getirmek ve aksi halde kafamızda yapmak zorunda kalacağımız hesapları azaltmak için gerçekten çok işimize yaradı. Ama değişkenlerin asıl değeri, bir program boyunca kutunun içindekini, yani değişkenin içindekini değiştirebilme yeteneğinden gelir. Yani aynı kod parçasını birden fazla kez çalıştırsak bile, yaptığı iş kutuların içindekine göre değişebilir.

Diyelim ki bir bahçeye çiçek dikmek istiyoruz. Elimizde, çiçeği yerleştirmek istediğimiz konum için tek bir girdisi olan kullanışlı bir `plant` (dikmek) fonksiyonu var. Yani çiçeği kenardan 10 uzaklığa yerleştirmek istiyorsak şöyle yazarız:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Jiki'nin beyaz tahtasının yanındaki bahçeye dikilmiş bir çiçek"
  width="406"
  height="400"
/>

Peki sekiz çiçek dikmek istesek? `plant(10)`, `plant(20)`, `plant(30)` ve böyle devam edenleri yazabiliriz, ama bu epey sıkıcı olur.

Zaten bu tür sıkıcı kodların yerini almamıza yardımcı olan bir şeyi öğrendik. Döngü kullanın! repeat bloğu kullanın! Öyleyse konumu 10 yapalım ve sonra `plant` fonksiyonunu sekiz kez çağırdığımız bir repeat bloğu kullanalım.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Sizce ne olacak?

Sekiz çiçek dikecek, ama her seferinde aynı noktaya dikecek, ki bu tam olarak istediğimiz şey değil. Gelin bir an için Jiki'nin burada ne yaptığını düşünelim. Üzerinde konum etiketi olan bir kutu oluşturuyor. İçine 10 koyuyor. Sonra `plant` makinesini sekiz kez çalıştırıyor. Her seferinde konum kutusundaki değeri çıkarıyor. Bu değer hep 10 ve her seferinde aynı 10'u makineye veriyor.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki konum kutusunu raftan alıp içindeki 10 değerini plant makinesine veriyor"
  width="400"
  height="400"
/>

Yani ihtiyacımız olan şey, her seferinde biraz ilerlemenin bir yolu. Bir çiçek diktikten sonra, sıradaki çiçeği dikmeye hazır olmak için Jiki'ye konumu 10 ilerletmesini söylemek istiyoruz.

Şimdi kodu bir an unutalım: bunu yapmak mantıksal olarak nasıl görünür? Size “İlk çiçeği 10'a dikin, sonrakini 20'ye, ondan sonrakini de 30'a” dersem, beyniniz bir sonrakinin 40'a, ondan sonrakinin de 50'ye dikilmesi gerektiğini nereden biliyor?

Beyninizin yaptığı şey, o anki sayıyı takip etmek, ona 10 eklemek ve sonra bu sayıyı beyninizde güncellemek.

Aynı şeyi kodda da tam olarak yapabiliriz. Bunu yapmak için şöyle deriz: “Konum kutusunu, mevcut konum değeri artı 10 olacak şekilde güncelle (İngilizce: _update_).”

Jiki bunu gördüğünde konum kutusundan o anki sayıyı çıkarır, üzerine 10 ekler, yani o aritmetiği yapar, sayıları toplar ve sonucu bir dahaki sefere kullanmak üzere kutuya geri koyar.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki konum kutusundan 10'u çıkarıp üzerine 10 ekleyerek 20 yapıyor ve 20'yi kutuya geri koyuyor"
  width="427"
  height="400"
/>

Bunu programımıza eklersek, yani artık “konumun başlangıç değeri 10 olsun” deyip sekiz kez o konuma çiçek dikersek ve sonra konumu öncekinden 10 fazla olacak şekilde değiştirirsek, kodumuz çalışır ve aralıklı sekiz çiçek elde ederiz.

Değişkeni güncellerken `let` (“olsun” anlamında; değişken tanımlama ve değer atama) kullanmadığımıza dikkat edin. Bu gerçekten önemli. Jiki `let` gördüğünde yeni bir kutu oluşturur. Ama burada yeni bir kutu oluşturmak istemiyoruz. Zaten elimizde olan kutunun içindekini değiştirmek istiyoruz.

Ayrıca kutuyu döngünün dışında yalnızca bir kez oluşturduğumuza dikkat edin. Bunu hatırlamak önemli. Kutuyu en başta bir kez oluşturun, sonra döngü her çalıştığında onu güncelleyin.

Kutuların içindekini güncelleyebiliriz ve bu gücü zamanla değişen bir şeyi takip etmek için kullanabiliriz. Bu kalıbı sürekli kullanacaksınız: bir konumu takip ederken, bir şeyin kaç kez gerçekleştiğini sayarken, puan tutarken. Programınız çalışırken değişen bir şeyi aklınızda tutmanız gerektiğinde, yapmanız gereken tam olarak budur.
