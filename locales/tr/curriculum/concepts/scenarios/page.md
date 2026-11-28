---
title: "Senaryolar"
description: "Bir alıştırmanın, tek bir kod parçanızı üzerinde çalıştırdığı farklı başlangıç koşulları. Kodunuzu bunların hepsinde çalışır hale getirmeniz gerekir."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Her alıştırma farklı senaryolarla, yani kodunuzun başa çıkması gereken farklı durumlarla gelir.

Bunları her alıştırmanın çıktısının hemen üstünde küçük butonlar olarak görürsünüz. Her buton farklı bir senaryoya karşılık gelir. Göreviniz hepsi için çalışan kod yazmak, yalnızca ilki için değil. Bir daha söyleyelim. Kodu bir kez yazarsınız ama aynı kod her senaryo için çalışır. Fark şu: her senaryo biraz farklı kurulmuş olabilir ya da size verilen fonksiyonlar, hangi senaryoda olduğunuza göre biraz farklı şeyler döndürebilir.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Bir alıştırmanın çıktısının hemen üstündeki, vurgulamak için daire içine alınmış senaryo butonları sırası"
  width="500"
  height="318"
/>

Bir golf oyunu örneği alalım. Topun ne kadar yuvarlanacağını, `getShotLength` (vuruşun uzunluğu) adlı fonksiyonun dönüş değerine (İngilizce: _return value_) göre değiştirmeniz gerekebilir. Bu fonksiyon, golfçünün topa ne kadar uzağa vurduğunu söyler. Oyuncunun, topa ne kadar uzağa vurduğunu belirtmek için telefonunda parmağını kaydırmak zorunda kaldığını hayal edin.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Bir golfçünün, bir topun ve sağdaki delikte bir bayrağın göründüğü bir golf oyunu sahnesi"
  width="412"
  height="400"
/>

Size geri dönen sonuç bu fonksiyon üzerinden gelir. Yani bir senaryoda `getShotLength` fonksiyonunu kullanırsınız ve fonksiyon `23` döndürür: küçük bir kaydırma. Başka bir senaryoda `70` döndürür: uzun bir kaydırma. Bir başkasında `45` döndürür. Kodunuz, tek bir programla, tek bir kodla topu her senaryoda doğru mesafeye yuvarlamalıdır. Vuruşun ne kadar uzağa gittiğini görmek için `getShotLength` fonksiyonunu kullanmanız ve ardından topu o noktaya yuvarlamanız gerekir.

```javascript
let distance = getShotLength()
```

Senaryolar, kodunuzun gerçekten doğru çalışmasını sağlar. Belirli bir durumda çalışan kod yazmak oldukça kolaydır. Pek çok farklı durumda çalışan kod yazmak ise çok daha zor ve çok daha değerlidir. Alıştırmaları çözerken ilk senaryodan başlayın. Onu çalışır hale getirin. Sonra bir sonraki senaryoya geçin ve onu da çalıştırın. Kodunuz farklı bir senaryoda bozulduğunda, neyin farklı olduğunu ve kodunuzun nasıl uyum sağlaması gerektiğini düşünün.
