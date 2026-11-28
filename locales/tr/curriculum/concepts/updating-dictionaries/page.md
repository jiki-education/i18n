---
title: "Sözlükleri güncelleme"
description: "Var olan kayıtları güncellemek ya da yenilerini eklemek için `dict[key] = value` kullanımı ve anahtarları kontrol etmek için `has` metodu."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Bir sözlüğü nasıl oluşturacağınızı ve içinden nasıl değer alacağınızı biliyorsunuz. Peki ya veriler değişirse? Bir noktada ben de yaşlanacağım. Artık `42` değil, `43` olacağım.

Peki sözlüğü nasıl güncelleriz? Bir şeyi bulurken kullandığımıza çok benzeyen bir yöntem kullanırız. Değeri dışarı almak için köşeli parantez kullandığımızı biliyorsunuz. İşte köşeli parantezlerin ardından bir eşittir işareti getirerek sözlüğü de güncelleyebiliriz. Jiki `person` kutusuna gider, not defterinin sayfasını çıkarır, `"age"` anahtarını bulur, oradaki `42` değerini siler ve yerine `43` yazar; sonra not defterindeki sayfa yine kutunun içine girer. Bu, sözlüğün kendisini değiştirmek demektir.

```javascript
person["age"] = 43
```

Jiki yeni bir sözlük oluşturmuyor, kutuda zaten duran not defterini değiştiriyor.

Peki daha önce orada olmayan bir bilgi eklemek isterseniz ne olur? O zaman da tamamen aynı şeyi yapabilirsiniz.

Var olmayan bir anahtar belirtirseniz, Jiki en alta o değerle yeni bir anahtar ekler.

Yani bu durumda not defterini açar, `"country"` anahtarını arar, orada olmadığını görür ve en alta yeni bir satır ekler: solda `"country"`, sağda `"England"`.

```javascript
person["country"] = "England"
```

Yani bir değeri değiştirmekle tamamen aynı sözdizimi. Jiki ikisini de kendi halleder. Anahtar varsa günceller, yoksa ekler. Özel bir şey yapmanız gerekmez.

Boş bir diziyle başlayıp içine eleman ekleyebildiğiniz gibi, boş bir sözlükle de başlayıp anahtarları tek tek ekleyebilirsiniz. Bu da çok yaygın bir kalıptır. Her yerde karşınıza çıkar.

Sözlüklerin yaygın kullanımlarından biri, bir şeylerin sayısını tutmaktır. Anahtar olarak sayısını tutmak istediğimiz şeyleri, değer olarak da o şeylerin sayısını belirtebiliriz. Kuş gözlemlediğinizi ve gördüğünüz her kuş türünden kaç tane olduğunu takip etmek istediğinizi düşünün. Bir kuşu ilk gördüğünüzde sayısını bire ayarlarsınız, sonraki her görüşünüzde ise o anki değerini alıp bir artırırsınız. Bu kalıbın çalışması için sözlükte o anahtarın zaten olup olmadığını kontrol etmemiz gerekir: varsa değerine bir ekleriz, yoksa saymaya birden başlarız.

Bunu yapmak için sözlüklerde bir metot var: `has` metodu (sahip olup olmadığını kontrol eder).

İlgilendiğiniz anahtarı belirtirsiniz; Jiki sözlükte o anahtarın olup olmadığına bakar ve sonuca göre doğru ya da yanlış döndürür.

```javascript
person.has("age") // true
```

Hepsini bir araya getirdiğimizde sayma kalıbı şöyle görünür:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
