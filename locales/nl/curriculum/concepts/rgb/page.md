---
title: "RGB-kleuren"
description: "Rood, groen en blauw licht mengen, van 0 tot 255, om elke kleur te maken die je op het scherm wilt."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

Met RGB kun je kleuren zien als een mengsel van rood, groen en blauw. Daar staat RGB ook voor: rood (_red (R)_ in het Engels), groen (_green (G)_ in het Engels), blauw (_blue (B)_ in het Engels). Als je je nog herinnert hoe je op school verf mengde, dan is dit een vergelijkbaar idee, alleen mengen we geen verf maar licht.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Drie overlappende cirkels van rood, groen en blauw licht die samen geel, magenta, cyaan en wit vormen"
  width="500"
  height="390"
/>

In veel opdrachten krijg je een functie met de naam `rgb(red, green, blue)`. Die neemt drie getallen als invoer, één voor rood, één voor groen en één voor blauw, en geeft een kleur terug.

De getallen die je als invoer kunt gebruiken, lopen van nul tot `255`. Nul betekent: ik wil niets van die kleur, en `255` betekent: meng er zoveel mogelijk van die kleur in. Dus als we de `rgb`-functie gebruiken met `255`, nul en nul als invoer, zeggen we eigenlijk: ik wil al het rood. Onthoud dat `255` het grootste getal is dat je daar kunt invullen. Maar we willen geen groen en geen blauw, dus die zijn allebei nul. Zo krijgen we rood. Dat rood kunnen we in een variabele opslaan en daarna in de `circle`-functie gebruiken, net zoals we al deden met de strings met kleurnamen. En wat gebeurt er als we de `rgb`-functie gebruiken met nul, `255`, nul? Dan zeggen we: geen rood, al het groen, geen blauw. Zo krijgen we een groene cirkel. En als we geel willen? Geel is een mengsel van rood en groen. We zeggen dus: geef me al het rood, al het groen en geen blauw, en dat levert geel op. We kunnen ook kleinere getallen gebruiken. Als we wat rood willen, geen groen en veel blauw, krijgen we paars. En veel rood, een beetje groen en iets meer blauw, dat geeft roze. Dat is dus RGB. We mengen rood, groen en blauw om verschillende combinaties te krijgen.

```javascript
rgb(255, 0, 0) // rood
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Een rode cirkel gemaakt met rgb(255, 0, 0), al het rood en geen groen of blauw"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // geel
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Een gele cirkel gemaakt met rgb(255, 255, 0), al het rood en al het groen zonder blauw"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // roze
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Een roze cirkel gemaakt met rgb(230, 50, 170), veel rood, een beetje groen en wat blauw"
  width="436"
  height="400"
/>

RGB is ideaal als je één specifiek onderdeel wilt aanpassen: hoeveel rood, hoeveel groen, hoeveel blauw.
