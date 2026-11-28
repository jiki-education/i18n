---
title: "Kendi fonksiyonlarımızı yazmak"
description: "`function` anahtar kelimesiyle kendi makinelerimizi yapmak, böylece Jiki onları raflarına koyup yeniden kullanabilir."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Şimdiye kadar hep bizim için yapılmış fonksiyonları kullandık: `circle`, `rectangle`, `moveRight`, `shoot` gibi. Bunların hepsi yapılmış ve Jiki'nin raflarına konmuş fonksiyonlar.

Ama artık kendi fonksiyonlarımızı yapmaya başlamanın tam zamanı.

Bunu nasıl yapacağımızı göstermek için labirentte kullanılacak `walk5` (beş adım ileri götür) adında yeni bir fonksiyon yapacağız.

Bu fonksiyon karakteri her zaman beş adım ileri götürecek. Dünyanın en işe yarar fonksiyonu değil kuşkusuz, ama başlamak için kolay ve güzel bir örnek.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Labirent ızgarasında, beş adım ileri yürümeye hazır duran karakter"
  width="500"
  height="314"
/>

Yani karakteri beş adım ileri götürecek biraz kod yazmanızı istesem, ya `move` (bir adım ileri götür) komutunu beş kez yazabilirdiniz ya da bir `repeat` döngüsü kullanabilirdiniz. Bu örnekte işi basit tutmak için arka arkaya beş kez `move` yazma yolunu seçeceğiz.

```javascript
move()
move()
move()
move()
move()
```

İşte fonksiyonumuzun içinde olmasını istediğimiz şey de bu.

Şimdi bunun altına, Jiki'ye bu fonksiyonu kullanmasını söyleyen bir satır ekleyelim. Bunu zaten defalarca gördük.

Sonraki işimiz bu ilk beş satırı, yani bu beş hareketi, bir fonksiyonun içine sarmak olacak. Öyle ki Jiki `walk5` komutunu kullandığında çalışan şey bu ilk beş satır kod olsun.

Bu beş satırı bir fonksiyona dönüştürmek için yeni bir anahtar kelime kullanmamız gerekiyor: `function` anahtar kelimesi.

`function` anahtar kelimesini kullandığımızda iki şey yapmamız gerekir. Birincisi, fonksiyonun adını belirtmek. Burada bu ad `walk5`. İkincisi, “fonksiyonun içinde şunu yapmalısın” diyen kodu süslü parantezlerle sarmak. Bunu kodumuza eklediğimizde Jiki'ye `walk5` adında bir fonksiyon oluşturmasını söylemiş oluruz; o da `walk5` kullanıldığında bu beş satır kodu çalıştırır.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Jiki `function` anahtar kelimesini gördüğünde gider yeni bir fonksiyon yapar, bu talimatları makinenin içindeki beyaz tahtaya yazar ve makineye `walk5` etiketini yapıştırır. Sonra da bu fonksiyonu, oradaki diğer bütün fonksiyonların yanına, raflara koyar.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Yeni bir makinenin yanında duran Jiki ve makinenin içinde fonksiyonun talimatlarının yazıldığı beyaz tahta"
  width="500"
  height="396"
/>

Oluşturduğunuz bu fonksiyonun, yerleşik (İngilizce: _built-in_) olanlardan hiçbir özel farkı yok. Hepsi raflarında yan yana duruyor.

Fonksiyonu kullandığınızda, yani `walk5()` yazdığınızda, Jiki makineyi raftan alıp tıpkı diğer fonksiyonlarda olduğu gibi kullanır. Her makinenin içinde mini bir Jiki'nin yaşadığını hayal edebilirsiniz. Mini Jiki'nin her zaman kafasında şu havalı şapka vardır. Küçük Jiki de dışarıdaki normal Jiki ile tamamen aynı şekilde çalışır, talimatları aynı şekilde takip eder.

Burada anlaşılması gereken önemli bir nokta var: Jiki fonksiyonu oluştururken kodu aslında çalıştırmaz. Sadece o kodu, sonra kullanmak üzere yazar.

`function` anahtar kelimesini yazdığınızda labirentteki karakter henüz hareket etmez.

Jiki makineyi yapmış ve raflara koymuştur. Karakterin gerçekten hareket etmesi, ancak ona `walk5()` yazarak makineyi kullanmasını söylediğinizde gerçekleşir.
