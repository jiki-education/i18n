---
title: "Změna hodnoty proměnné"
description: "Jak za běhu programu měnit obsah proměnné, abychom mohli sledovat pozice, počty, skóre a další hodnoty, které se mění."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Dosud jsme při vytváření proměnných dávali hodnoty do krabic a později je zase vytahovali. To se hodilo: kód je díky tomu přehlednější a nemuseli jsme tolik počítat z hlavy. Skutečná síla proměnných ale spočívá v tom, že můžeme měnit, co je v krabici, co je v proměnné, v průběhu celého programu. Takže i když spustíme stejný kus kódu vícekrát, jeho účinek se může měnit podle toho, co je zrovna v krabicích.

Řekněme, že chceme zasadit kytku do zahrady. Máme šikovnou funkci `plant` (zasadit), která bere jediný vstup: pozici, kam kytku chceme umístit. Takže když chceme kytku umístit 10 od okraje, zapíšeme to takhle:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Kytka zasazená v zahradě vedle Jikiho tabule"
  width="406"
  height="400"
/>

A co když chceme zasadit osm kytek? Mohli bychom napsat `plant(10)`, `plant(20)`, `plant(30)` atd., ale to je pěkná otrava.

A už jsme se učili o něčem, co takovýhle otravný kód pomáhá nahradit. Použij cyklus! Použij blok `repeat`! Nastavme tedy pozici na 10 a pak si napišme blok `repeat`, ve kterém osmkrát zavoláme funkci `plant`.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Co myslíš, že se stane?

Zasadí osm kytek, ale pokaždé na stejné místo, což zrovna nechceme. Zastavme se tedy na chvíli a podívejme se, co tady Jiki dělá. Vytváří krabici se štítkem position a dává do ní 10. Pak osmkrát spustí stroj `plant`. Pokaždé vytáhne hodnotu z krabice position. Je tam pořád 10, takže pokaždé vkládá tu samou 10.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki bere krabici position z police a vkládá její hodnotu 10 do sázecího stroje"
  width="400"
  height="400"
/>

Potřebujeme tedy způsob, jak se pokaždé popojít o kousek dál. Když kytku zasadíme, chceme Jikimu říct, aby posunul pozici o 10 a připravil ji na další kytku.

Zapomeňme na chvíli na kód a zkusme si to představit čistě logicky. Když ti řeknu: „Zasaď první kytku na pozici 10, pak další na 20 a pak další na 30,“ jak to, že tvůj mozek ví, že ta další má přijít na pozici 40 a ta po ní na 50?

Tvůj mozek si prostě drží aktuální číslo, přičítá k němu 10 a výsledek si zase uloží.

A v kódu můžeme udělat úplně to samé. Řekneme tedy: „Změň krabici position tak, aby v ní byla současná hodnota plus 10.“

Když to Jiki uvidí, vytáhne z krabice position aktuální číslo, přičte k němu 10 (prostě je sečte) a výsledek dá zpátky do krabice pro příště.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki vytahuje z krabice position 10, přičítá 10, dostává 20 a pak 20 vrací zpátky do krabice"
  width="427"
  height="400"
/>

Když to přidáme do programu, tedy když nastavíme počáteční hodnotu pozice na 10, osmkrát zasadíme kytku na pozici a pak pozici zvětšíme o 10, náš kód funguje a máme osm kytek pěkně rozmístěných.

Všimni si, že při změně proměnné není žádné `let`. To je opravdu důležité. Když Jiki uvidí `let`, vytvoří novou krabici. Tady ale novou krabici nechceme, chceme změnit to, co je v krabici, kterou už máme.

Všimni si taky, že krabici vytváříme jen jednou, a to mimo cyklus. To je dobré si zapamatovat. Krabici vytvoř jednou na začátku a pak ji při každém průchodu cyklem změň.

Můžeme měnit obsah krabic a tuhle schopnost využít k tomu, abychom sledovali něco, co se v čase mění. Tenhle postup budeš používat pořád: sledovat pozici, počítat, kolikrát se něco stalo, držet skóre. Kdykoli si potřebuješ zapamatovat něco, co se během běhu programu mění, uděláš to takhle.
