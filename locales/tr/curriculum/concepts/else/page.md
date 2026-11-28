---
title: "`else` anahtar kelimesi"
description: "Koşul yanlış çıktığında farklı bir kod bloğunun çalışması için `if` deyiminin ardına bir `else` yan tümcesi eklemek."
en_md5: a3d7b0672bd9c022675831044c5610ed
---

`if` sayesinde koşulları kontrol ederiz ve yalnızca bir şey doğru olduğunda kod çalıştırırız. Şimdi de onun suç ortağıyla tanışalım: else.

`if` deyimi (koşul ifadesi) sayesinde Jiki, koşul doğru olduğunda kod bloğunu çalıştırır, yanlış olduğunda ise o kod bloğunu atlar. Peki Jiki'nin koşul doğru olduğunda bir şey, yanlış olduğunda ise başka bir şey yapmasını istiyorsak ne olacak? İşte else tam da bunun için var. `if` deyiminin kapanış süslü parantezinden sonra bir `else` yan tümcesi (İngilizce: _else clause_) koyabiliriz; `if` deyiminin koşulu yanlışsa Jiki onu çalıştırır. Kulüp kapısındaki fedai örneğine dönersek, artık kapıyı açma ya da birini geri çevirme seçeneğimiz var; bu da muhtemelen az önce yaptığımız gibi o kişiyi tamamen görmezden gelmekten daha iyi. Bunu bir yol ayrımı gibi düşünelim. Jiki bu yol ayrımına gelir, koşulu kontrol eder ve sonra koşul doğruysa bir yöne, yanlışsa diğer yöne gidebilir. Ama asla iki yöne birden gitmez.

```javascript
if (age >= 21) {
  openDoor()
} else {
  turnAway()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else/fork-in-the-road.webp"
  alt="Kulüp kapısında bir yol ayrımı: koşul doğru olduğunda kapının açılması, yanlış olduğunda kişinin geri çevrilmesi"
  width="500"
  height="332"
/>

Peki ikiden fazla olasılığımız varsa ne olacak? Fedaimizin bilet sattığını düşünelim. On üç yaşın altındaysanız çocuk bileti alırsınız. On üç ile yirmi arasındaysanız genç bileti alırsınız. Yirmi ve üzeriyseniz yetişkin bileti alırsınız. Yani artık üç farklı sonucumuz var. Bunun için else kısmından sonra bir `if` deyimi daha ekleyebiliriz. Yani şöyle diyebiliriz: “Bu doğruysa şunu yap. Şu doğruysa onu yap. Yoksa şu diğer şeyi yap.” Bu örnekte Jiki `if` deyimini görür ve ilk koşulu kontrol eder. On altı, on üçten küçük mü? Hayır. O zaman `else if` kısmına geçer. On altı, yirmiden küçük mü? Evet, bu doğru. O bloğu çalıştırır ve genç bileti verir. Ama sonra işi biter. Başka hiçbir şeyi kontrol etmez. En sondaki else kısmına hiç bakmaz. Jiki bir kez doğru olan bir koşul bulduğunda o bloğu çalıştırır ve altındaki her şeyi atlar.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

Anlaşılması gereken en önemli şey şu. Her seferinde yalnızca tek bir blok çalışır. Jiki bu sıralamada aşağı doğru ilerler, ilk doğru koşulu bulur, o bloğu çalıştırır ve yoluna devam eder.

Şimdi, gerçekten anlamamız gereken bir şey var, çünkü bu nokta insanları çok yanıltıyor. İki ayrı `if` deyimi yazmak ile `else if` kullanmak arasında ince ama çok önemli bir fark var. Birinin puanına göre temel bir ödül ya da bonus bir ödül veren bir program yazdığımızı düşünelim. Şu iki olasılığa bakalım. Biri `else if` kullanıyor, diğeri iki ayrı `if` deyimi. Ne farklı olacak?

```javascript
if (score > 100) {
  bonusPrize()
} else if (score > 50) {
  basicPrize()
}
```

```javascript
if (score > 100) {
  bonusPrize()
}
if (score > 50) {
  basicPrize()
}
```

İlk durumda, yani `else if` ile, yüksek puanı kontrol edip ödülü veririz ve sonra `else if` kısmını çalıştırmayız. Yani puanı yüzün üzerinde olan kişi sadece bonus ödülü alır.

Ama ikinci örnekte iki `if` deyimi tamamen bağımsız. İkisi de çalışır ve ikisi de doğru olur. Yani buradaki kişi iki ödül alır. İlkinde bir ödül. İkincisinde iki ödül. Bunu gerçekten anladığınızdan emin olmak için bir dakikanızı ayırın.

Ayrıca şunu da belirtmek gerekir ki, oyunun tasarımına göre ikisi de doğru olabilir. Belki yarışmacı hem normal hem de bonus ödül alır, belki de sadece bonus ödüle yükseltilir. İki kod parçasından hiçbiri doğru ya da yanlış değil. Sadece farklı durumlarda işe yararlar. Ama hangisini kullanmayı amaçladığınızı bilmeniz gerekir.
