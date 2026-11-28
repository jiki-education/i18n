---
title: "`&&` (ve) operatörü"
description: "İki koşulu `&&` ile birleştirerek koşulun tamamının yalnızca her iki taraf da doğruyken doğru olmasını sağlamak."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Kapıyı yalnızca 20 yaşından büyük biri geldiğinde açmanızı istesem, ne yapacağınızı muhtemelen bilirsiniz. Peki ya birinin 20 yaşından büyük _ve_ doğru kıyafeti giymiş olup olmadığını kontrol etmeniz gerekseydi? Yani aynı anda iki farklı koşulu kontrol etmeniz gerekiyor. Bunu nasıl yapardınız?

Belki de daha önce iç içe döngülerde yaptığımız gibi, `if` deyimini (koşul ifadesi) iç içe (İngilizce: _nested_) kullanabilirsiniz. Yani “`age` `20`'den büyükse şu kod bloğuna gireriz” dersiniz, sonra “`outfit` değeri `"disco"` ise” diye bir `if` daha yazarsınız, ardından bir süslü parantez daha ve yeni bir kod bloğu. Bu işe yarar ama özellikle çok sayıda koşulunuz olsun istediğinizde epey karışık hale gelir.

Neyse ki daha kolay bir yolu var: birden fazla parçadan oluşan koşullar yazabilmek. Koşulda tek bir şeyi kontrol etmek yerine iki, üç ya da daha fazla şeyi kontrol edebiliriz. Bunu yapmak için `and` anahtar kelimesini kullanmamız gerekir. Ne yazık ki JavaScript'te and anahtar kelimesi, bazı dillerde olduğu gibi and kelimesi değildir. Bunun yerine yan yana iki ve işareti (İngilizce: _ampersand_) yazmanız gerekir. Bunu aklınızda tutmanız gerekecek. Sinir bozucu, ama yapacak bir şey yok; zamanla alışacaksınız.

Bunu daha karmaşık bir koşul yazmak için kullanabiliriz. `age` `20`'den büyükse ve `outfit` değeri `"disco"` ise devam ederiz diyebiliriz. `age` `20`'den küçükse ya da `outfit` değeri `"disco"` değilse, önermenin tamamı, yani koşulun tamamı yanlış olur. Daha önce mantık dersi aldıysanız, belki elektronik devreler yaptıysanız ya da ileri düzey matematik gördüyseniz bu size çok doğal gelecek. Gelmediyse de kısa sürede kavrarsınız.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Hem and hem de or operatörlerinde insanların takıldığı bir şey var: ve/veya (İngilizce: _and/or_) ifadesinin her bir tarafı eksiksiz bir karşılaştırma olmalı. Yani iki tarafta da aynı değişkeni karşılaştırıyor olsanız bile onu tekrar yazmanız gerekir. `if age is greater than 13 and less than 20` yazamazsınız. `if age is greater than 13 and age is less than 20` yazmanız gerekir. İki tarafın da eksiksiz karşılaştırmalar olması gerekir.

```javascript
if (age > 13 && age < 20)
```
