---
title: "`||` (veya) operatörü"
description: "İki koşulu `||` ile birleştirerek, parçalardan en az biri doğru olduğunda koşulun tamamının doğru olmasını sağlamak."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

`or` da kullanabiliriz, ama ne yazık ki JavaScript'te güzel bir or anahtar kelimesi yok. Bunun yerine, “veya” anlamına gelsin diye yan yana duran şu iki dikey çizgiyi (İngilizce: _bar_) kullanmamız gerekiyor. Kulağa tuhaf geliyor, ama aslında hiç de tuhaf değil. Zamanla alışırsınız.

Yani diyebiliriz ki, birinin yaşı 20'nin üzerindeyse ya da üzerinde disko kıyafeti varsa içeri girebilir. Böylece disko kıyafetli çocukların ve kötü giyimli yetişkinlerin katıldığı eğlenceli bir parti yapacağız, ki bu da kulağa gayet makul geliyor.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki'nin partinin kapısından içeri disko kıyafetli çocuklarla gündelik giyimli yetişkinlerden oluşan bir grubu buyur etmesi"
  width="327"
  height="400"
/>

Hem and hem or ile ilgili insanların takıldığı bir nokta var: and/or ifadesinin her iki tarafı da eksiksiz bir karşılaştırma olmalı. Yani iki tarafta da aynı değişkeni karşılaştırıyor olsanız bile onu tekrarlamak zorundasınız. `if age is less than 13 or greater than 20` yazamazsınız. `if age is less than 13 or age is greater than 20` yazmanız gerekir. Her iki tarafın da eksiksiz karşılaştırmalar olması gerekir.

```javascript
if (age < 13 || age > 20)
```

Her iki koşulun ne zaman önemli olduğunu, ne zaman da yalnızca birinin doğru olmasının yettiğini düşünmeniz gerekir.
