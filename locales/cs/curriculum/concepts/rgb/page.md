---
title: "Barvy RGB"
description: "Míchání červeného, zeleného a modrého světla od 0 do 255, ze kterého na obrazovce vznikne jakákoli barva."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB nám umožňuje představit si barvy jako směs červené, zelené a modré. Přesně to se skrývá za zkratkou RGB: červená (anglicky _red (R)_), zelená (anglicky _green (G)_), modrá (anglicky _blue (B)_). Jestli si vzpomínáš na míchání barev ve škole, jde o podobnou věc, jen místo barev mícháme světlo.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Tři překrývající se kruhy červeného, zeleného a modrého světla, které se míchají do žluté, purpurové, azurové a bílé"
  width="500"
  height="390"
/>

V mnoha cvičeních narazíš na funkci `rgb(red, green, blue)`. Ta bere jako vstup tři čísla, jedno pro červenou, jedno pro zelenou a jedno pro modrou, a vrací barvu.

Čísla, která můžeš použít jako vstup, se pohybují od nuly do `255`. Nula znamená „tuhle barvu nechci vůbec“ a `255` znamená „přimíchej jí co nejvíc“. Když tedy funkci `rgb` zavoláme s `255`, nulou a nulou, říkáme tím: chci všechnu červenou. Vzpomeň si, že `255` je největší číslo, které tam můžeš dát. Zelenou ani modrou ale nechceme, takže obě jsou nula. Vyjde nám červená, kterou si můžeme uložit do proměnné a pak ji použít ve funkci `circle`, stejně jako jsme to už dělali s pojmenovanými řetězci. A co když funkci `rgb` zavoláme s nulou, `255` a nulou? Teď říkáme: žádná červená, všechna zelená, žádná modrá. Vyjde nám zelený kruh. A co když chceme žlutou? Žlutá je směs červené a zelené. Takže řekneme: dej mi všechnu červenou, všechnu zelenou a žádnou modrou, a dostaneme žlutou. Můžeme použít i menší čísla. Když chceme trochu červené, žádnou zelenou a hodně modré, vyjde nám fialová. A hodně červené, trochu zelené a o něco víc modré, to dá růžovou. Tak to je RGB. Mícháme červenou, zelenou a modrou a vznikají různé kombinace.

```javascript
rgb(255, 0, 0) // červená
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Červený kruh vzniklý z rgb(255, 0, 0): všechna červená, žádná zelená ani modrá"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // žlutá
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Žlutý kruh vzniklý z rgb(255, 255, 0): všechna červená a všechna zelená, žádná modrá"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // růžová
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Růžový kruh vzniklý z rgb(230, 50, 170): hodně červené, trochu zelené a něco modré"
  width="436"
  height="400"
/>

RGB je skvělé, když chceš doladit jednu konkrétní složku: kolik červené, kolik zelené, kolik modré.
