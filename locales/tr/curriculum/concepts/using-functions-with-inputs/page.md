---
title: "Fonksiyon girdileri"
description: "Değerleri bir fonksiyonun para deliklerine koyarak her çalıştığında yaptığı işi değiştirmek."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Makinelerin, yani fonksiyonların en güçlü yanlarından biri şu: çoğunun içine bir bilgi koyabilirsiniz ve bu bilgi, makineyi çalıştırdığınızda ne yaptığını değiştirir.

Şimdiye kadar, `move` (götürmek) makinesi gibi, biraz kutuya benzeyen makineler gördük.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="move makinesi, para deliği olmayan düz bir kutu"
  width="322"
  height="400"
/>

Ama bazı makinelerin para delikleri vardır, tıpkı bu `walk` (yürütmek) makinesi gibi. `walk` makinesi tıpkı `move` makinesi gibidir. Karakteri ileri götürür; tek fark, Jiki'nin para deliğini kullanarak karakterinizin kaç adım ileri yürümesi gerektiğini belirleyebilmesidir. Yani `move` fonksiyonunu arka arkaya üç kez, `move`, `move`, `move` diye kullanmak yerine, artık sadece `walk` fonksiyonunu kullanıp Jiki'ye makineye üç sayısını koymasını söyleyebilirsiniz.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="walk makinesi, üstünde adım sayısı için bir para deliğiyle"
  width="481"
  height="400"
/>

Bunu kodda yapmak için yine fonksiyonun adını, bu örnekte `walk` yazıyoruz ve yine açılış parantezimizi koyuyoruz. Ama sonra kapanış parantezimizden önce, girdinin (İngilizce: _input_) ne olmasını istediğimizi söylüyoruz. Bu örnekte girdinin üç olmasını istiyoruz, yani `walk` makinesine üç adım ileri gitmesini söylüyoruz:

```javascript
walk(3)
```

Jiki bunu gördüğünde üç sayısını alır; bu sayıyı küçük bir madeni para gibi düşünebilirsiniz. Makineyi çalıştırmak için kolunu çevirmeden önce, o parayı makinenin para deliğine koyar.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki 3 sayısını bir madeni para gibi walk makinesinin para deliğine bırakıyor, sonra makinenin kolunu çeviriyor"
  width="421"
  height="400"
/>

Dikdörtgen ve daire çizen fonksiyonlarda Jiki'ye birden çok farklı sayı vermeniz gerekir: soldan ne kadar uzakta olacağı, üstten ne kadar uzakta olacağı, dikdörtgenin genişliği, dikdörtgenin yüksekliği gibi şeyleri belirtirsiniz.

Jiki'nin dünyasında bunlar sadece farklı para delikleridir, bu sayıların her biri için bir tane.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="left, top, width, height için para delikleri olan dikdörtgen makinesi ve cx, cy, radius için para delikleri olan daire makinesi"
  width="396"
  height="400"
/>

Kodumuzda her sayıyı yazıp arasına virgül koyuyoruz. Fonksiyonun adı, bir parantez, girdilerin her biri için bir sayı, hepsi virgülle ayrılmış, sonra parantezi kapatıyoruz:

```javascript
rectangle(10, 20, 30, 40)
```

Bir fonksiyonu yanlış sayıda girdiyle kullanmaya çalışırsanız hata alırsınız. Örneğin para deliği olmayan bir makineye bir girdi koymaya çalışırsanız, Jiki bunu yapamayacağınızı söyler. Para deliği olan bir makineyi kullanıp da Jiki'ye içine ne koyacağını söylemezseniz, o da durur ve itiraz eder. Biraz asi hissediyorsanız deneyin ve ne olduğunu görün. İşler karmaşıklaştıkça bunun gibi çok hata yapacaksınız. Strese girmemeye ya da üzülmemeye çalışın. Hepimiz hatalardan öğreniriz. Bu, beynimizin bir şeyleri gerçekten içselleştirmesinin kelimenin tam anlamıyla en hızlı yoludur. Üstelik herkes bu hataları yapar. Hepimiz sıfırdan başladık, o yüzden stres yapmayın.

Değinmeye değer bir şey daha var: bazen alıştırmalarda iki eğik çizgiyle, `//`, başlayan satırlar göreceksiniz. Bunlara yorum (İngilizce: _comments_) denir. Bunlar sadece size ait, Jiki'nin tamamen görmezden geleceği özel notlardır. Yani Jiki bu iki eğik çizgiyle başlayan bir satır gördüğünde onun üzerinden geçer ve bir sonraki satıra geçer. Bu yorumlar kendinize not yazmanız için bir yol sunar. Bir şeylerin nasıl çalıştığını size hatırlatmak için gerçekten çok faydalıdır. Çoğu zaman yorumlar sizin için yazılmış olur; böylece bir alıştırmaya başladığınızda, nereye kod yazmanız gerektiğini ya da bir şeyi nasıl çözeceğinizi önerebilir. Ama kendi yorumlarınızı eklemekten de çekinmeyin.

Bir alıştırmanın talimatlarının altında, kullanabileceğiniz fonksiyonlar ve tam olarak hangi girdileri vermeniz gerektiği hakkında bilgi görürsünüz.
