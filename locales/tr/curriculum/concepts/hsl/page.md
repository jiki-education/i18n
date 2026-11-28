---
title: "HSL renkleri"
description: "Renk tonu (ton, 0–360), doygunluk (ne kadar canlı, 0–100) ve açıklık (ne kadar açık ya da koyu, 0–100) değerlerinden renk oluşturma."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL, renkleri düşünmenin RGB'den tamamen farklı bir yolunu sunar. HSL; renk tonu (İngilizce: _hue (H)_), doygunluk (İngilizce: _saturation (S)_) ve açıklık (İngilizce: _lightness (L)_) kelimelerinin kısaltmasıdır. Açıklık, rengin ne kadar açık ya da koyu olduğunu gösterir. Elimizde `hsl` adında bir fonksiyon var: üç sayı alır (biri renk tonu, biri doygunluk, biri açıklık için) ve bir renk döndürür. Hadi bu üç kelimenin ne anlama geldiğine bakalım.

```javascript
hsl(hue, saturation, lightness)
```

Renk tonu, istediğiniz rengin tonudur ve sıfırdan 360'a kadar gider. Belki bir gökkuşağı hayal edin. Ben bunu şöyle düşünüyorum: Solda kırmızı var, sonra turuncu, sarı, yeşil, mavi, mor geliyor ve aslında hepsi baştan kırmızıya dönüyor. Yani sıfır yazarsanız soldan başlarsınız ve o kırmızıdır. `120` yazarsanız yeşil istiyorsunuz demektir. `230` mavidir. Bunu bir renk çemberi olarak da düşünebilirsiniz; 360 zaten tam olarak bunu ifade eder. Çemberin derece sayısıdır. Ben her zaman istediğim sayılara bakıp bulurum, o yüzden bunları ezberlemeye çalışıp kendinizi çok yormayın. Yine de neler olup bittiğini bilmek güzel. İşte renk tonu bu, yani rengin tonu.

Ardından doygunluk geliyor; rengin ne kadar canlı olduğunu gösterir. Sıfırdan 100'e kadar gider. Sıfırda sadece gri elde edersiniz; içinde hiç renk yoktur, hiç ton yoktur. 100'de ise tam ve canlı bir renk elde edersiniz.

Sonra açıklık var. Açıklık, rengin ne kadar aydınlık olduğunu anlatır ve o da sıfırdan 100'e kadar gider. Sıfırda siyah elde edersiniz. Hangi renk tonunu seçmiş olursanız olun, sonuç siyahtır. İçinde hiç ışık yoktur. 100'de ise beyaz elde edersiniz. Başka her şey ne olursa olsun, ışıkla doludur, o yüzden beyazdır. 50 tam ortadadır, yani normal renktir. Kısacası bunu, rengi daha açık ya da daha koyu yapan bir kaydırıcı olarak düşünebilirsiniz.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="0'ın kırmızı, 120'nin yeşil ve 240'ın mavi olduğunu gösteren bir renk tonu çemberi ve gökkuşağı"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="0'dan (gri) 50 üzerinden 100'e (tam canlı renk) uzanan bir doygunluk kaydırıcısı"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="0'dan (siyah) 50 üzerinden 100'e (beyaz) uzanan bir açıklık kaydırıcısı"
  width="500"
  height="398"
/>

Diyelim ki normal kırmızı bir daire istiyoruz. RGB ile bunu 255, sıfır, sıfır olarak yazardık: kırmızının tamamı, yeşil yok, mavi yok. Burada ise sıfır, 100, 50 kullanırız. Sıfır kırmızı ton, 100 doygunluk (tam renk) ve 50 de açıklık içindir; bu, normal bir açıklık seviyesidir. Bunu yeşil bir daireye çevirmek istersek renk tonunu `120` yapmamız yeterli. Daha koyu bir yeşil elde etmek istersek açıklığı `25` değerine kadar düşürebiliriz.

```javascript
hsl(0, 100, 50) // kırmızı
hsl(120, 100, 50) // yeşil
hsl(120, 100, 25) // koyu yeşil
```

Daha soluk bir yeşil istiyorsak rengin birazını, yani doygunluğun bir kısmını çıkarabiliriz; mesela doygunluğu `30` değerine düşürebiliriz.

Canlı, iddialı bir pembe istiyorsanız, yaklaşık 300'lük bir renk tonu pembedir; sonra iyice canlı olması için doygunluğu 100'e çıkarırız ve açıklığı da yaklaşık 60'a yükseltiriz.

Renkler arasında dolaşmak istediğinizde HSL harikadır. Bir gökkuşağı istiyorsanız renk tonunu artırmaya devam etmeniz yeterli.
