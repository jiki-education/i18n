---
title: "Özellikler"
description: "Bir değer hakkında, nokta gösterimiyle ve parantez kullanmadan erişilen sabit bilgiler; örneğin bir karakter dizisinin kaç harften oluştuğunu bulmak için `.length`."
en_md5: 0634cd72388bef118e9dd22131a3c1cd
---

Şimdiye kadar karakter dizilerini veya sayıları düşündüğümüzde, onları oldukça durağan şeyler olarak düşündük.

Öyle olsalar da, içlerinde Jiki'nin kullanabileceği pek çok işlev de hazır olarak bulunur.

Burada bakacağımız iki tür yetenek var: özellikler ve metotlar.

Özellikler, Jiki'ye sorarak bir şey hakkında öğrenebileceğimiz bilgilerdir. Örneğin karakter dizilerinin `length` (uzunluk) adında bir özelliği vardır; Jiki bunu kullanarak bir karakter dizisinin ne kadar uzun olduğunu söyleyebilir.

Yani bir karakter dizisinin ne kadar büyük olduğunu bulmak için bütün harfler üzerinde döngü kurmak yerine, doğrudan Jiki'ye sorabiliriz.

Bunun için yeni bir söz dizimi kullanırız: nokta.

Örneğin `"Jeremy"` karakter dizimiz varsa ve uzunluğunu almak istiyorsak şöyle yazabiliriz:

```javascript
"Jeremy".length // 6
```

Jiki bir karakter dizisi oluşturduğunda harfleri sayar ve köşeye kaç tane olduğunu belirten bir sayı yazıverir.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki, Jeremy karakter dizisinin harflerini sayıyor ve sayıyı köşeye yazıyor"
  width="359"
  height="400"
/>

Sonra `length` özelliğini kullandığımızda, Jiki gidip o sayının kaç olduğuna bakar. Yani `"Jeremy".length` örneğimizde, Jiki `"Jeremy"` karakter dizisini oluştururken harfleri sayar, köşeye altı sayısını yazar; biz de `"Jeremy".length` yazdığımızda gidip ona bakar. Kısacası özellikleri, o şey hakkındaki bilgiler gibi düşünebilirsiniz.
