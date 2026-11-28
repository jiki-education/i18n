---
title: "Sözlükler"
description: "Her girdinin solda bir anahtarı, sağda değeri olan spiralli bir not defteri sayfası; size liste yerine etiketlenmiş veri sunar."
en_md5: b8a26ad63301df1d00ce08e1e429cf05
---

Elimizde bir şeylerin listesi olduğunda, mentor listesi, puan listesi, malzeme listesi, herhangi bir liste, ilk tercihimiz hep dizilerdir.

Ama bir listeden biraz daha karmaşık bir şey istediğinizde çok sık kullanılan bir veri yapısı (İngilizce: _data structure_) daha var.

Hadi benimle ilgili birkaç bilgi saklamak istediğimizi düşünelim: adım, yaşım, doğduğum yer. Bunun için bir dizi kullanabilirsiniz, ama böyle yaptığınızda ne olup bittiği pek de anlaşılmaz.

İngiltere doğduğum yer mi, yoksa yaşadığım yer mi? 42 yaşım mı, yoksa başka bir şey mi?

Bir de bunu kullanmak istersem ilk konumun ada, ikincisinin yaşa, üçüncüsünün doğum yerine ait olduğunu hatırlamam gerekir. Hepsi biraz dağınık, üstelik dağınık olmasının nedeni de bu verinin aslında bir şeylerin listesi olmaması. Bundan daha karmaşık bir şey bu. İşte burada sözlükler (İngilizce: _dictionaries_) devreye girer. Sözlük yeni bir veri yapısı türüdür; beşinciniz. Şimdiye kadar karakter dizileri, sayılar, Boolean değerler ve diziler vardı, şimdi bir de sözlükler var.

Sözlüğü spiralli bir not defterinin bir sayfası gibi düşünmenizi istiyorum.

Sol tarafta başlıklar var: `"name"`, `"age"`, `"birthplace"` sözcükleri. Bunlara anahtarlar (İngilizce: _keys_) diyoruz.

Sağ tarafta, her başlığın yanında da asıl veriler var: `"Jeremy"`, `42`, `"England"`. Bunlara da değerler (İngilizce: _values_) diyoruz.

Tıpkı diziler gibi sözlük de tek bir şeydir; not defterinden koparılmış tek bir sayfa. Yine tıpkı dizilerde olduğu gibi Jiki bunu bir değişkene, bir kutuya ya da bir fonksiyonun para deliğine koyabilir; kaydıraktan da bir sözlük çıkarabilir. Peki sözlük kodda nasıl görünür? Başlangıcı ve bitişi göstermek için süslü parantez kullanırız; içinde de çiftler vardır: solda anahtar, ardından iki nokta üst üste, sağda da değer. Her çiftin arasına virgül koyarız. Jiki bunu görünce spiralli not defterini çıkarır. Her çift için `name`, `"Jeremy"`, `age`, `42` ve devamını yazar.

İşi bitince sayfayı koparır ve `person` (kişi) etiketli bir kutuya koyar.

Bilmeniz gereken birkaç kural var. Anahtarlar her zaman karakter dizisidir. Tırnak içine alınmaları gerekir ve her anahtar benzersiz olmalıdır. Aynı sözlükte `name` adında iki anahtar olamaz.

İsterseniz değerler aynı olabilir, ama anahtarlar farklı olmak zorundadır.

Değerler her şey olabilir: karakter dizileri, sayılar, Boolean değerler, diziler, hatta başka sözlükler.

Boş bir dizimiz olabildiği gibi boş bir sözlüğümüz de olabilir; onunla başlayıp sonra üzerine inşa edebiliriz.

Peki, artık bir sözlüğünüz var, ama ondan nasıl bir şey çıkarırsınız?

Dizilerde ve karakter dizilerinde kullandığımız köşeli parantez sözdizimini kullanırız, ama konum numarası yerine anahtar koyarız. Yani bir sözlükten birinin adını almak istiyorsak şöyle yazarız:

```javascript
person["name"] // "Jeremy"
```

Bu, Jiki'ye `person` sözlüğüne bakmasını, `"name"` anahtarını bulmasını ve değerini çıkarmasını söyler. Jiki `person` kutusuna gider, not defterinden çıkan sayfayı alır, `"name"` anahtarını bulana kadar bütün anahtarları tarar, sonra `"Jeremy"` değerini okur ve `name` adında yeni bir kutuya koyar.

Köşeli parantezler her zaman aynı şeyi anlatır: bir şeyin içine uzanıp oradan bir şey çıkarırsınız. Dizilerde ve karakter dizilerinde, bir şeyi hangi konumdan almak istediğinizi söylemek için bir sayı kullanırsınız. Sözlüklerde ise anahtar için bir karakter dizisi kullanırsınız.

Aynı fikir, sadece sözdizimi biraz farklı.
