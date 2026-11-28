---
title: "Diziler"
description: "Öğelerden (karakter dizileri, sayılar, Boolean'lar ya da başka her şey) oluşan sıralı bir zincir; hepsi bir arada, Jiki'nin bir bütün olarak taşıyabildiği tek bir değer."
en_md5: d26ccb9e04fbc77129f3199d63a95017
---

Şimdiye kadar sayılarla, karakter dizileriyle ve Boolean'larla çalıştınız. Boolean, doğru ve yanlışın süslü adıdır. Bu saydıklarımıza farklı veri tipleri (İngilizce: _data types_) diyoruz. Şimdi de ilk bileşik veri tipimizi (İngilizce: _compound data type_) ekliyoruz.

Yani birden fazla şey içerebilen, tek bir şeyle sınırlı olmayan bir veri tipi. Bu veri tipinin adı dizi (İngilizce: _array_).

Dizi kelimesini duyduğunuzda aklınıza, bir sürü şeyi bir arada tutan somut bir zincir gelsin.

Zincirin tuttuğu şeyler her şey olabilir: karakter dizileri, sayılar, Boolean'lar, hatta başka diziler, hatta henüz öğrenmediğiniz şeyler bile. Ama şimdilik bunlara kafa yormayalım.

Bu zincirdeki her şey bir düzen içindedir: zincire hangi sırayla takıldılarsa o sırada durur.

Yani bir dizi bir sürü şey içerir, ama tek parça bir öğedir (İngilizce: _element_), tek parça bir şeydir: içinde bir sürü öğe barındıran tek bir dizi.

Jiki bu diziyi, bu zinciri alıp bir kutuya koyabilir; tıpkı bir karakter dizisini ya da bir sayıyı kutuya koyabildiği gibi.

Onu bir makinenin para deliğine atabilir. Kaydıraktan çıkarıp alabilir. Bu dizi tek bir şeydir ve Jiki onunla, tıpkı karakter dizileriyle, sayılarla ve şimdiye kadar gördüğünüz diğer her şeyle çalıştığı gibi çalışır.

Kodda ise dizi de birazcık zincire benzer. İki ucunda birer köşeli parantez vardır, arada da virgüllerle ayrılmış, birbirine zincirlenmiş bir sürü öğe durur.

Örneğin mentorlarımızdan bazılarının adlarıyla bir dizi oluşturmak istesek, `mentors` adında bir kutu hazırlayıp zinciri içine koyabiliriz.

`let mentors =` diye yazarız, tıpkı başka bir kutuda yaptığımız gibi; ardından açılış köşeli parantezi, virgüllerle ayrılmış bir sürü öğe, yani adlar, ve sonunda kapanış köşeli parantezi gelir. Jiki bunu gördüğünde gidip her ad için bir tane olmak üzere dört kâğıt alır, sonra yeni bir zincir alıp hepsini birbirine zincirler ve o zinciri `mentors` kutusuna koyar.

Bir diziye her şeyi koyabilirsiniz: karakter dizileri, sayılar, Boolean'lar, hatta karışık bir şeyler bile.

Bunların hepsi tamamen geçerli dizilerin birer örneğidir.

Boş bir dizi de oluşturabilirsiniz. O, öğesi olmayan bir zincirdir sadece. Yine de gerçek bir şeydir. İki ucu da yerindedir. Hâlâ bir zincirdir. Sadece içinde hiçbir öğe yoktur. Ama bu boş diziyi yine de bir kutuya koyabilir, sonra çıkarıp kullanabilirsiniz.

Yani köşeli parantez sözdizimiyle bir dizi oluşturabiliyoruz. Peki bunları gerçekten nasıl kullanırız? İçlerinde ne olduğunu nasıl kontrol eder, içlerinden bir şeyleri nasıl alırız? Daha önce bir karakter dizisinden harfleri çıkarmak istediğimizde yaptığımızın tamamen aynısıyla. Köşeli parantez sözdizimini, içine sayı yazarak kullanabiliriz.

Şimdi mentor dizimize geri dönelim. İlkini almak istiyorsak `mentors[0]` yazarız. JavaScript'te saymaya sıfırdan başladığımızı unutmayalım.

Bir dizinin içinde de, daha önce karakter dizilerinin içinde gezindiğimiz gibi, `for-of` döngüsünü kullanarak gezinebiliriz.

Diziler de tamamen aynı şekilde çalışır. Tek fark, bu kez bir harf almak yerine dizideki öğe her neyse onu alıyoruz. Bu örnekte mentorun adını.

Yani ilk seferde teşekkür ettiğimiz kişi `"DJ"`; ikinci seferde `"Becky"` ve böyle devam eder.

Dizilerde de, tıpkı karakter dizilerinde öğrendiğimiz gibi, `length` özelliğini kullanabiliriz. `mentors` kutusunda dört karakter dizisi olan bir dizimiz varsa ve `mentors.length` yazarsak, dört döndürür.

`includes` da dizilerde tamamen aynı şekilde kullanılır. `mentors.includes("DJ")` dersek `true` döndürür. Ama `mentors.includes("Frank")` dersek `false` döndürür.

Her şey karakter dizileriyle tamamen aynı şekilde çalışır. Tek fark, bu kez bir karakter dizisinin harfleriyle değil, bir dizinin öğeleriyle çalışıyoruz.
