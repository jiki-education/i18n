---
title: "Karakter dizisi birleştirme"
description: "Sabit metni ve değişkenleri `+` ile bir araya getirerek tek ve daha uzun bir karakter dizisi oluşturma."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Karakter dizilerinin ne olduğunu artık biliyorsunuz. Onlar, üzerinde metin bulunan kâğıt parçalarıdır.

Şimdiye kadar kullandığınız her karakter dizisi, doğrudan kendiniz yazdığınız bir diziydi. Peki bir karakter dizisini değişkenlere ya da koşullara göre oluşturmak isterseniz ne olur? Bunu nasıl yaparız?

Bunun iki yolu var.

Birincisine karakter dizisi birleştirme (İngilizce: _string concatenation_) denir. Bu, iki karakter dizisini birbirine eklemenin süslü ve biraz kafa karıştırıcı bir ifade biçimidir.

Elimizde `"hello"` (merhaba) ve `"world"` (dünya) diye iki kelime olduğunu ve `"hello world"` içeren bir karakter dizisi oluşturmak istediğimizi düşünelim.

`"hello world"` ifadesini tek bir karakter dizisi olarak yazabilirsiniz, ama `"hello " + "world"` de yazabilirsiniz ve bu size aynı karakter dizisini verir.

Şimdi, açıkçası bu senaryoda pek işe yaramaz. Ama ya birinin adını içeren bir değişkenimiz olsaydı ve o kişiye merhaba demek isteseydik?

Yani `name` (isim) adında bir değişkenimiz olduğunu, bu değişkenin bazen `"Jeremy"`, bazen de `"Jiki"` içerdiğini düşünelim. Bu değişkeni kullanarak `"hello Jeremy"` ya da `"hello Jiki"` demek istiyoruz.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="name etiketi taşıyan ve farklı değerler içerebilen bir kutu tutan Jiki"
  width="207"
  height="400"
/>

İşte bunu bu birleştirme kavramıyla yapabiliriz:

```javascript
"hello " + name // "hello Jeremy" ya da "hello Jiki"
```

Bu bize, `name` kutusunun içinde ne olduğuna bağlı olarak `"hello Jeremy"`, `"hello Jiki"` ya da başka birine merhaba diyen bir karakter dizisi verir.
