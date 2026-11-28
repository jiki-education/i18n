---
title: "Renkler"
description: "İstediğiniz her rengi belirtmenin iki yolu. RGB kırmızı, yeşil ve mavi ışığı karıştırır. HSL ise renk tonu, doygunluk ve açıklık kullanır."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Kodla görsel bir şey yapıyorsanız (hatta veri bilimci olmak isteyip bütün çizim işlerini biraz sıkıcı bulsanız bile, veriyi görsellerle aktarmak önemli bir beceridir), renkleri ifade etmenin iki farklı yolu vardır. Şimdiye kadar çizim fonksiyonlarınızın son girdisi olarak kırmızı ya da sarı gibi isimleriyle renkler kullandınız ve bu, rengi hızlıca kullanmanın güzel bir yoluydu, ama oldukça sınırlayıcı. Kullanabileceğimiz sadece birkaç isimli renk var. Şimdi ise istediğiniz her rengi ifade etmenin iki yoluna bakacağız ve bu ikisinin adı RGB ve HSL.

RGB, renkleri kırmızı, yeşil ve mavinin bir karışımı olarak düşünmemizi sağlar. RGB'nin açılımı da budur: kırmızı (İngilizce: _red (R)_), yeşil (İngilizce: _green (G)_) ve mavi (İngilizce: _blue (B)_). Okulda boya karıştırmayı hatırlıyorsanız, bu benzer bir fikirdir. Tek fark, boya yerine ışığı karıştırıyoruz.

Birçok alıştırmada `rgb` adında bir fonksiyonunuz olacak. Girdi olarak üç sayı alacak: biri kırmızı, biri yeşil, biri mavi için. Ve size bir renk döndürecek.

Girdi olarak kullanabileceğiniz sayılar sıfır ile `255` arasında değişir. Sıfır, “o renkten hiç istemiyorum” demektir; `255` ise “o renkten olabildiğince çok karıştır” demektir. Yani `rgb` fonksiyonunu girdi olarak `255`, sıfır ve sıfırla kullanırsak, söylediğimiz şey “kırmızının tamamını istiyorum” olur. Unutmayın, `255` oraya koyabileceğiniz en büyük sayıdır. Ama yeşilden de maviden de hiç istemiyoruz, o yüzden ikisi de sıfır. Böylece kırmızı elde ederiz ve bu kırmızıyı bir değişkende saklayıp tıpkı isimli karakter dizileriyle yaptığımız gibi `circle` fonksiyonunda kullanabiliriz. Peki `rgb` fonksiyonunu sıfır, `255`, sıfırla kullanırsak ne olur? Bu sefer “kırmızı yok, yeşilin tamamı var, mavi yok” demiş oluruz. Böylece yeşil bir daire elde ederiz. Peki sarı istersek? Sarı, kırmızıyla yeşilin karışımıdır. Yani “kırmızının tamamını, yeşilin tamamını ver, mavi de olmasın” diyebiliriz ve bu bize sarıyı verir. Daha küçük sayılar da kullanabiliriz. Biraz kırmızı, hiç yeşil ve bolca mavi istersek mor elde ederiz. Bolca kırmızı, azıcık yeşil, biraz daha fazla mavi ise bize pembeyi verir. İşte RGB bu. Farklı kombinasyonlar elde etmek için kırmızı, yeşil ve maviyi karıştırırız.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Kırmızı, yeşil ve mavi ışıktan oluşan, üst üste binen üç çemberin sarı, magenta, camgöbeği ve beyazı oluşturmak için karışması"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Şimdi de renkler hakkında düşünmenin tamamen farklı bir yolunu veren HSL'ye bakalım. HSL'nin açılımı şu üç kelimedir: renk tonu (İngilizce: _hue (H)_), doygunluk (İngilizce: _saturation (S)_) ve açıklık (İngilizce: _lightness (L)_). Açıklık, rengin ne kadar açık ya da koyu olduğunu söyler. Ve tıpkı RGB'de olduğu gibi, `hsl` adında bir fonksiyonunuz var; üç sayı alır: biri renk tonu, biri doygunluk, biri açıklık için. Ve bir renk döndürür. Şimdi bu üç kelimenin ne anlama geldiğini tek tek açalım.

Renk tonu, istediğiniz rengin hangi tonda olduğunu belirtir (İngilizce: _shade_) ve sıfırdan 360'a kadar gider. Belki bir gökkuşağı hayal edebilirsiniz. Ben de böyle düşünüyorum. Solda kırmızı var, sonra turuncu, sarı, yeşil, mavi, mor geliyor ve aslında baştan kırmızıya kadar dönüyoruz. Yani sıfır derseniz soldan başlarsınız ve o kırmızıdır. `120` derseniz yeşil istemiş olursunuz. `230` mavidir. Bunu bir renk çemberi (İngilizce: _color wheel_) olarak da düşünebilirsiniz; 360'ın gerçekte anlattığı şey budur. Çemberdeki derece sayısıdır. Ben istediğim sayılara her zaman bakarım, o yüzden bunları ezberlemeye çalışmak konusunda fazla endişelenmeyin; ama neler olup bittiğini bilmek de güzel. İşte bu da renk tonu, yani rengin hangi tonda olduğu. Şimdi sırada doygunluk var; rengin ne kadar canlı olduğunu belirtir. Sıfırdan 100'e kadar gider. Sıfırda sadece gri elde edersiniz. İçinde hiç renk yok, hiç ton yok. 100'de ise dolu, canlı, capcanlı bir renk elde edersiniz. Ve sonra açıklık var. Açıklık, rengin ne kadar aydınlık olduğunu belirtir ve o da sıfırdan 100'e kadar gider. Sıfırda siyah elde edersiniz. Hangi renk tonunu seçmiş olursanız olun, siyah elde edersiniz. İçinde hiç ışık yoktur. 100'de ise beyaz elde edersiniz. Başka her şey ne olursa olsun, ışık doludur, yani beyazdır. 50 tam ortadadır, normal renktir. Yani bunu, rengi daha açık ya da daha koyu yapmaya yarayan bir kaydırıcı (İngilizce: _slider_) olarak düşünebilirsiniz.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Renk tonunun 0 (kırmızı), 120 (yeşil) ve 240 (mavi) arasında gittiğini gösteren bir gökkuşağı ve bir renk çemberi"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Doygunluk kaydırıcısı: 0 (gri), ortada 50, 100 (canlı magenta)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Açıklık kaydırıcısı: 0 (siyah), ortada 50 (tam renk), 100 (beyaz)"
  width="500"
  height="398"
/>

Yani normal kırmızı bir daire istiyorsak, ki RGB'de bunu 255, sıfır, sıfır diye yazardık (kırmızının tamamı, yeşil yok, mavi yok), burada sıfır, 100, 50 kullanırız. Kırmızı renk tonu için sıfır, doygunluk için 100 (tam renk) ve açıklık için de 50 kullanırız; bu, normal bir açıklık seviyesidir. Bunu yeşil bir daireye çevirmek istersek, sadece renk tonunu `120` yapmamız yeter. Daha koyu bir yeşil yapmak istersek, açıklığı `25` değerine kadar düşürebiliriz.

Daha soluk bir yeşil istersek, rengin birazını, yani doygunluğun bir kısmını çıkarabiliriz; diyelim ki `30` değerine kadar düşürelim.

Parlak, canlı bir pembe istiyorsanız, 300 civarı bir renk tonu pembedir; sonra gerçekten canlı olsun diye doygunluğu 100'e çıkarırız ve açıklığı da 60 civarına yükseltiriz.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Yani renk ifade etmenin iki farklı yolu var ve bunlar farklı durumlarda işe yarar. Belirli bir bileşeni, yani ne kadar kırmızı, ne kadar yeşil, ne kadar mavi olduğunu ayarlamak istediğinizde RGB harikadır. Renkler arasında dönmek istediğinizde ise HSL harikadır. Bir gökkuşağı istiyorsanız, renk tonunu artırmaya devam edebilirsiniz.
