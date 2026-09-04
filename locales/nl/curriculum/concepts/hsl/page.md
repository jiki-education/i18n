---
title: "HSL-kleuren"
description: "Kleuren opbouwen uit kleurtoon (de tint, 0–360), verzadiging (hoe levendig, 0–100) en helderheid (hoe licht, 0–100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL geeft ons een heel andere manier om over kleuren na te denken dan RGB. HSL staat voor kleurtoon (_hue (H)_ in het Engels), verzadiging (_saturation (S)_ in het Engels) en helderheid (_lightness (L)_ in het Engels). Je hebt een functie met de naam `hsl` die drie getallen aanneemt, een voor de kleurtoon, een voor de verzadiging en een voor de helderheid, en die geeft een kleur terug. Laten we dus eens kijken wat die drie woorden betekenen.

```javascript
hsl(hue, saturation, lightness)
```

De kleurtoon is de tint die je wilt, en die loopt van nul tot 360. Stel je een regenboog voor. Zo denk ik er zelf over. Links hebben we rood, en dan oranje, geel, groen, blauw, paars, en uiteindelijk komen we weer helemaal terug bij rood. Als je dus nul zegt, begin je links, en dat is rood. Als je `120` zegt, vraag je om groen. `230` is blauw. Je kunt dit ook zien als een kleurencirkel, en daar komt die 360 eigenlijk vandaan. Het is het aantal graden in de cirkel. Zelf zoek ik de getallen die ik nodig heb altijd gewoon op, dus maak je niet te druk om dit uit je hoofd te leren, maar het is wel fijn om te weten wat er gebeurt. Dat is dus de kleurtoon, oftewel de tint. Dan hebben we de verzadiging, en dat is hoe levendig de kleur is. Die loopt van nul tot 100. Bij nul krijg je gewoon grijs. Er zit helemaal geen kleur in, geen enkele toon. Bij 100 krijg je een volle, levendige, sprankelende kleur. En dan hebben we de helderheid. De helderheid is hoe licht de kleur is, en die loopt ook van nul tot 100. Bij nul krijg je zwart. Welke kleurtoon je ook hebt gekozen, je krijgt zwart. Er zit geen licht in. En bij 100 krijg je wit. Wat je verder ook doet, het zit vol licht, dus het is wit. 50 zit precies in het midden, de normale kleur. Je kunt dit dus zien als een schuifknop om de kleur lichter of donkerder te maken.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Een kleurencirkel en regenboog voor de kleurtoon, waarop 0 rood is, 120 groen en 240 blauw"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Een schuifknop voor verzadiging van 0 (grijs) via 50 naar 100 (volle, levendige kleur)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Een schuifknop voor helderheid van 0 (zwart) via 50 naar 100 (wit)"
  width="500"
  height="398"
/>

Als we dus een gewone rode cirkel willen, die we met RGB als 255, nul, nul hadden geschreven, alle rood, geen groen, geen blauw, dan gebruiken we hier nul, 100, 50. Nul voor de rode kleurtoon, 100 voor de verzadiging, volle kleur, en 50 voor de helderheid, wat een normaal niveau van helderheid is. Als we daar een groene cirkel van willen maken, hoeven we alleen de kleurtoon te veranderen in `120`. Als we er een donkerder groen van willen maken, verlagen we de helderheid naar `25`.

```javascript
hsl(0, 100, 50) // rood
hsl(120, 100, 50) // groen
hsl(120, 100, 25) // donkergroen
```

Als we er een fletser groen van willen maken, halen we wat kleur, wat verzadiging weg, bijvoorbeeld door die te verlagen naar `30`.

Wil je een fel, knalroze, dan is een kleurtoon van ongeveer 300 roze, en dan zetten we de verzadiging op 100 om het echt levendig te maken, en verhogen we ook de helderheid, naar ongeveer 60.

HSL is ideaal als je door kleuren heen wilt lopen. Wil je een regenboog, dan kun je de kleurtoon gewoon steeds verder verhogen.
