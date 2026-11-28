---
title: "`else if` zincirlerini kullanmak"
description: "Birkaç koşulu sırayla denetlemek için `else if` bloklarını zincirlemek ve yalnızca koşulu doğru olan ilk bloğu çalıştırmak."
en_md5: 64274945347d47d67baf3378cf219c9b
---

Daha önce gördüğümüz gibi, `if` deyimi (koşul ifadesi) ve `else` deyimi bize iki yol sunar: koşul doğruyken bir şey yaparız, yanlışken başka bir şey. Peki ikiden fazla olasılığımız varsa?

Diyelim ki kapıdaki görevli bilet satıyor. On üç yaşın altındakiler çocuk bileti alır. On üçle yirmi arasındakiler genç bileti alır. Yirmi ve üzerindekiler ise yetişkin bileti alır. Yani artık üç farklı sonucumuz var. Bunun için `else` deyiminden sonra bir `if` deyimi daha ekleyebiliriz. Yani şöyle diyebiliriz: “Şu doğruysa bunu yap. Değilse ama bu doğruysa onu yap. O da değilse şu diğer şeyi yap.” Bu örnekte Jiki `if` deyimini görür ve ilk koşulu kontrol eder. On altı, on üçten küçük mü? Hayır. Bunun üzerine `else if` deyimine geçer. On altı, yirmiden küçük mü? Evet, bu doğru. O bloğu çalıştırır ve genç bileti verir. Ama sonra işi biter. Başka hiçbir şeyi kontrol etmez. En sondaki `else` deyimine hiç bakmaz bile. Jiki doğru olan bir koşul bulduğunda o bloğu çalıştırır ve altındaki her şeyi atlar.

```javascript
if (age < 13) {
  childTicket()
} else if (age < 20) {
  teenTicket()
} else {
  adultTicket()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/else-if/tickets.webp"
  alt="CHILD, TEEN ve ADULT etiketli üç bilet; yaş kontrolünün her sonucu için birer tane"
  width="500"
  height="142"
/>

Anlaşılması gereken en önemli nokta bu. Her zaman yalnızca tek bir blok çalışır. Jiki bu zincir boyunca aşağı iner, doğru olan ilk koşulu bulur, o bloğu çalıştırır ve yoluna devam eder.

Şimdi, gerçekten anlamamız gereken bir şey var, çünkü bu çoğu kişinin ayağını kaydırır. İki ayrı `if` deyimi yazmakla `else if` kullanmak arasında ince ama çok önemli bir fark var. Birinin puanına göre temel ödül ya da bonus ödül veren bir program yazdığımızı düşünelim. Şu iki olasılığa bakalım. Biri `else if` kullanıyor, diğeri iki ayrı `if` deyimi. Farklı olarak ne olur?

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

Yani ilk durumda, `else if` ile, yüksek puanı kontrol ederiz ve bonus ödülü veririz, ardından `else if` deyimini çalıştırmayız. Böylece puanı yüzün üzerinde olan kişi yalnızca bonus ödülü alır.

Ama ikinci örnekte iki `if` tamamen bağımsızdır. İkisi de çalışır ve ikisi de doğru olur. Yani buradaki kişi iki ödül alır. İlkinde bir ödül, ikincisinde iki ödül. Bunu gerçekten anladığınızdan emin olmak için bir an durup düşünün.

Şunu da belirtmek gerekir: oyunun nasıl tasarlandığına bağlı olarak ikisi de doğru olabilir. Belki yarışmacı hem temel hem bonus ödül alır, belki de yalnızca bonus ödüle yükseltilir. İki kod parçası da doğru ya da yanlış değildir. Sadece farklı durumlarda işe yararlar. Ama hangisini kullanmak istediğinizi bilmeniz gerekir.
