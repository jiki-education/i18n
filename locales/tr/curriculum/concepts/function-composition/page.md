---
title: "Birden Fazla Fonksiyonu Bir Arada Kullanmak"
description: "Bir problemi, birbirini çağıran, tek sorumluluğa sahip küçük fonksiyonlara bölmek; böylece her parça sade ve yeniden kullanılabilir kalır."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Şimdiye kadar fonksiyon yazdığınızda, her biri neredeyse kendi ayakları üzerinde duruyor ve çalışması için gereken tüm mantığı içinde barındırıyordu.

Şimdi ise fonksiyonları parçalara ayırmaya bakacağız; bir sürü işi bir arada yürüten büyük fonksiyonlar yerine, birlikte çalışan daha küçük fonksiyonlar elde edeceğiz.

Programlamada genel bir kural olarak, her fonksiyonun yapabildiği en az işi yapmasını isteriz. Buna, bir fonksiyonun tek sorumluluk (İngilizce: _single responsibility_) ilkesine sahip olması diyoruz. Her fonksiyon yalnızca tek bir şey yapmalı ve o işin farklı alt parçaları için başka fonksiyonları kullanmalıdır.

Şimdi bir örneğe bakalım.

Bir adı betimleyen bir karakter dizisi döndürmekle görevli bir fonksiyonumuz olduğunu düşünelim.

Basit bir sürümü şöyle görünürdü. Elimizde, daha önce yazdığınız bir şey olan bir sayma döngüsü var; ardından da sonucu bir araya getiren bir karakter dizisi şablonu geliyor.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Bu gayet iyi çalışıyor, ama fonksiyon iki şey yapıyor. Oldukça genel bir şey yapıyor, sayma; bir de çok özel bir şey yapıyor, karakter dizisini belirli bir biçimde oluşturuyor.

Bunu iki fonksiyona ayırmak çok daha güzel olurdu: biri saymadan sorumlu olsun, diğeri de bir adı bu belirli biçimde betimlemekten.

```javascript
// Sadece harfleri sayar
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Sadece metni güzel biçimde biçimlendirir
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Böylece o genel sayma fonksiyonunu hem bu karakter dizisi biçimlendirmesinde hem de ihtiyaç duyduğumuz başka her yerde yeniden kullanabiliriz. Bir karakter dizisindeki harfleri saymamız gerektiğinde, bu fonksiyonun yazdırmayla ilgili her şeyden tamamen bağımsız olduğunu görürüz.

İki fonksiyonu da tek başına okuyup her birinin ne yaptığını hemen anlayabilirsiniz.

Fonksiyonlarınız karmaşıklaşıp sayıları arttıkça, bu teknik düzenli ve okunabilir bir kod ile tam bir karmaşa ve dağınıklık arasındaki farkı belirler.

Burada yine değinmeye değer bir nokta var: bir fonksiyonun içinde oluşturduğunuz hiçbir şeye, onu özellikle döndürmediğiniz sürece diğer fonksiyonlar erişemez.

Yani `count` (sayı) değişkenine `describeName` (adı betimleyen) fonksiyonunun içinden başvurmaya çalışırsanız bunu yapamazsınız, çünkü o değişken diğer fonksiyona aittir.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki, başının üstünde bir ampulle, değişkenlerin her fonksiyona özel nasıl kaldığını düşünüyor"
  width="361"
  height="353"
/>

JavaScript'te her şeyin üstünde, fonksiyonlar arasında paylaşılan değişkenler oluşturabiliriz, ama gerçekten sağlam bir neden yoksa bunu yapmamanızı önemle öneririm.

Fonksiyonlarınızı ne kadar bağımsız tutarsanız, ki bunların teknik adı saf (İngilizce: _pure_) fonksiyondur, kodunuz o kadar temiz olur ve yaratıp da başınıza alacağınız bug da o kadar azalır.
