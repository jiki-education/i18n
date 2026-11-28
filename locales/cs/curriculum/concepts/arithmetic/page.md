---
title: "Aritmetika"
description: "Kombinování proměnných s matematikou, aby spolu hodnoty mohly souviset a záviset jedna na druhé díky sčítání, odčítání, násobení a dělení."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Zatím jsme při vytváření proměnných používali jen jednoduché hodnoty: číslo jako `50` nebo řetězec jako `"yellow"`. Mnohem silnější jsou proměnné ve chvíli, kdy je můžeme použít ve vzájemné kombinaci. Třeba když můžeme říct, že levý okraj obdélníku má být v určité vzdálenosti od okraje plátna.

V programování můžeme používat normální základní matematiku, věci jako sčítání, odčítání, násobení a dělení, a můžeme při tom použít proměnné, které už jsme nastavili.

Začněme tím, že si řekneme: chceme na plátno nakreslit obdélník a chceme, aby začínal 10 od levého i pravého okraje a 20 od horního i spodního. Bude tedy uprostřed plátna, o něco širší než vyšší.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Modrý obdélník uprostřed plátna, 10 od levého a pravého okraje a 20 od horního a spodního okraje"
  width="399"
  height="400"
/>

Když kreslíme obdélník, potřebujeme znát jeho `left` (levý okraj), `top` (horní okraj), `width` (šířka) a `height` (výška), stejně jako jeho barvu. Můžeme to tedy nejdřív rozepsat.

A teď musíme skutečně spočítat, jaké mají jeho `left`, `top`, `width` a `height` být. Pojďme je nastavit. `Left` je 10. `Top` je 20. `width`, no tedy, `width` je velikost plátna, což je 100, minus 10 vlevo a 10 vpravo, takže 80. A `height` je výška plátna, která je taky 100, minus 20 nahoře a 20 dole, takže 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Takže můžeme tyhle proměnné nastavit. `Left` 10, `top` 20, `width` 80, `height` 60. Ale co se stane, když teď budeme chtít obdélník posunout víc dovnitř, udělat ho o něco menší? Když ho chceme posunout 20 od levého i pravého okraje a 30 od horního i spodního? Musíme jít a všechno znovu spočítat. `width` je teď 100 minus 20 minus 20 a `height` je 100 minus 30 minus 30, a to je rozhodně víc práce a víc matematiky, než chci dělat. Místo toho můžeme počítači říct, aby to udělal za nás.

`width` můžeme nastavit jako 100 minus `left` minus `left` a `height` jako 100 minus `top` minus `top`, protože horní a spodní okraj jsou stejné. Nebo to můžeme napsat jako 100 minus `left` krát dvě, případně 100 minus `top` krát dvě.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

A když teď změníme `left` nebo `top`, změní se i `width` a `height`. Věci tak začínají být ve vzájemném vztahu. A co plátno? To má teď 100. Ale co když se naše plátno změní na 200 na šířku i na výšku? Pak bychom si asi měli vytvořit proměnnou `canvasSize` (velikost plátna) a nastavit ji na 100. A teď je `width` rovno `canvasSize` minus `left` krát dvě a `height` je `canvasSize` minus `top` krát dvě.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Pojďme se zamyslet nad tím, co Jiki dělá, když napíšeme `let` a nastavíme `height` na `canvasSize` minus `top` krát dvě. Nejdřív vezme z police krabici `top`, najde v ní 30, vytáhne si z kapsy kalkulačku a spočítá 30 krát dvě, a výsledek 60 si poznamená v duchu.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki bere z police krabici top a počítá, že 30 krát dvě je 60"
  width="377"
  height="400"
/>

A pak vezme z police krabici `canvasSize`, najde v ní 100, a spočítá, že 100 minus 60 je 40. Teď už ví, že ve skutečnosti říkáme, aby se `height` rovnalo 40. Takže příkaz `let` poslechne, vezme novou krabici, napíše na ni `height` a uloží do ní 40. A když pak později `height` použije, prostě zase vytáhne 40.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki bere novou krabici, píše na ni height a ukládá do ní 40"
  width="462"
  height="400"
/>

Až bude všechno ve cvičení fungovat, pohraj si se změnou hodnot proměnných a uvidíš, co se stane. Sleduj, jak rostou a jak se zmenšují. Nespěchej a přemýšlej o tom, jak spolu věci souvisí.
