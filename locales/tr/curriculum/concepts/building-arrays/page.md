---
title: "Dizi oluşturma"
description: "Boş bir diziyle başlayıp veriler üzerinde döngü kurarken `push` ile öğeleri tek tek eklemek."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Şimdiye kadar hep değerleri baştan belirlenmiş ve sabit kalan dizilerle çalıştık. Peki bir diziye zaman içinde yeni şeyler eklemek istersek ne olur? İşte bunun için dizilerin `push` (itmek) adında bir metodu var.

`push` metodunun tek bir girdisi var: dizinin sonuna eklemek istediğimiz şey. Bu örnekte, içinde zaten `"DJ"` ve `"Bethany"` bulunan bir dizinin sonuna `"Isaac"` kelimesini eklemek istiyoruz.

Bunu yapmak için Jiki diziyi kutudan çıkarır, zincirin sonuna `"Isaac"` kelimesini ekler ve ardından hepsini tekrar kutuya koyar. Şunu da belirtelim: daha önce karakter dizilerinde Jiki her seferinde yeni bir karakter dizisi oluşturuyordu, burada ise diziyi gerçekten değiştiriyor.

Kod yazarken çok sık karşımıza çıkan bir kalıp var: boş bir diziyle başlayıp onu adım adım doldurmak. Elimizde kocaman bir isim listesi olduğunu ve bu listenin içinden tek tek geçmek istediğimizi düşünelim. Her seferinde mentor olan birine denk geldiğimizde onu dizimize ekleriz.

Bu döngü ve ekleme kalıbını çok sık kullanacaksınız.
