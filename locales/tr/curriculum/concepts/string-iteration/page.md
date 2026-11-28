---
title: "`for ... of` ile karakter dizilerinde döngü kurma"
description: "`for of` döngüsüyle bir karakter dizisindeki her harfi tek tek gezip her biriyle sırayla bir şeyler yapma."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Bir karakter dizisinin tek bir harfine köşeli parantezlerle erişebilirsiniz. Şimdi ise bir karakter dizisinde nasıl döngü kuracağımıza, yani her harfi tek tek nasıl dışarı alacağımıza bakacağız.

Bunun için yeni bir döngü tipine ihtiyacımız var. Şimdiye kadar `repeat` döngüsünü kullandık, şimdi ise `for of` döngüsü (bir koleksiyondaki her öğenin üzerinden sırayla geçen döngü) adı verilen bir şeyi kullanacağız. Burada iki yeni anahtar kelime var: `for` ve `of`.

`for` anahtar kelimesi, ilerledikçe epey yer karşımıza çıkacak bir kelime. Tek başına durabilir ya da `in` veya `of` ile birlikte gelebilir. Şimdilik sonuncusuna, yani `of` üzerine odaklanacağız.

Hadi şimdi biraz koda bakalım.

Önce `name` (ad) adında, içinde `"Jeremy"` (Jeremy adı) karakter dizisini tutan bir değişken oluşturarak başlayalım. Burada yeni bir şey yok.

Sonra döngü satırı geliyor. Burada olan biten çok şey var, o yüzden adım adım inceleyelim.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Önce `for` anahtar kelimesi var. Bu, Jiki'ye döngü kurmak istediğimizi söyler. O da ileriye bakar, `of` görür ve “for of” döngüsü kurmak istediğimizi anlar.

Yani “10 kez döngü kuralım” dediğimiz `repeat` döngüsü yerine, “karakter dizisindeki bütün harfler üzerinde döngü kuralım” diyoruz. “for of”un anlamı bu.

Sonra `let letter` kısmı geliyor (bu, harf adında bir değişken tanımlar). Bu, tam olarak yukarıdaki `let name` ile aynı. Sadece `letter` adında bir değişken oluşturuyoruz.

Fark şu: içine ne gireceğini açıkça söylemek yerine, Jiki'ye karakter dizisindeki her harfi tek tek içine koymasını söylüyoruz.

Jiki `for` anahtar kelimesini görür, `of` var mı diye kontrol eder ve işe koyulur. Karakter dizisindeki ilk harfe bakar, burada bu `"J"`, ve onu `letter` adında yeni bir kutuya koyar. Bu arada, o değişkene istediğimiz adı verebiliriz. İllaki `letter` olmak zorunda değil. Biz burada ona `letter` demeye karar verdik.

Sonra süslü parantezlerin içindeki kodu çalıştırır. Burada, kodun herhangi bir yerinde yapacağınız her şeyi yapabilirsiniz. Tek fark, bu kod bloğunun karakter dizisindeki her harf için bir kez çalışacak olması ve bu değişkenin orada hazır bulunması.

Jiki her seferinde kapanış süslü parantezine geldiğinde `letter` kutusunu atar ve içine bir sonraki harfi koyduğu yeni bir kutu oluşturur. Yani ilk seferde `"J"` harfini atar ve kutuya onun yerine `"e"` koyar. Sonra aynısını `"r"`, `"e"`, `"m"` ve `"y"` için yapar. Altı harf, döngüde altı tur. Sözdizimine alışmak biraz zaman alır ama aslında o kadar da zor bir kavram değil.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki eski harf kutusunu atıp sıradaki harfi letter etiketli yeni bir kutuya bırakıyor, bunu karakter dizisindeki her harf için yineliyor"
  width="500"
  height="168"
/>
