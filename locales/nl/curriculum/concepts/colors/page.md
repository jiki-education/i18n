---
title: "Kleuren"
description: "Twee manieren om elke gewenste kleur op te geven. RGB mengt rood, groen en blauw licht. HSL gebruikt kleurtoon, verzadiging en helderheid."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Als je ooit iets visueels met code doet (en zelfs als je datawetenschapper wilt worden en al dat tekenwerk een beetje saai vindt: gegevens visueel overbrengen is een belangrijke vaardigheid), dan zijn er twee verschillende manieren om kleuren uit te drukken. Je hebt al kleuren gebruikt met hun naam, zoals rood of geel, als laatste invoer van je tekenfuncties. Dat is een handige manier om snel een kleur te gebruiken, maar het is behoorlijk beperkt. Er is maar een handjevol kleuren met een naam dat we kunnen gebruiken. Daarom gaan we nu kijken naar twee manieren om elke kleur uit te drukken die je maar wilt, en die twee heten RGB en HSL.

Met RGB zien we kleuren als een mengsel van rood, groen en blauw. Daar staat RGB ook voor: rood (_red (R)_ in het Engels), groen (_green (G)_ in het Engels) en blauw (_blue (B)_ in het Engels). Als je je nog herinnert hoe je op school verf mengde, dan is het idee vergelijkbaar, alleen mengen we hier geen verf, maar licht.

In veel opdrachten krijg je een functie met de naam `rgb`. Die neemt drie getallen als invoer, één voor rood, één voor groen en één voor blauw, en geeft een kleur terug.

De getallen die je als invoer kunt gebruiken lopen van nul tot `255`. Nul betekent: ik wil niets van die kleur, en `255` betekent: meng er zoveel mogelijk van die kleur in. Dus als we de functie `rgb` gebruiken met `255`, nul en nul als invoer, dan zeggen we: ik wil al het rood. Onthoud dat `255` het grootste getal is dat je daar kunt invullen. Maar we willen geen groen en geen blauw, dus die zijn allebei nul. Zo krijgen we rood, en dat rood kunnen we in een variabele opslaan en daarna in de functie `circle` gebruiken, precies zoals we al deden met de strings met kleurnamen. En wat als we de functie `rgb` gebruiken met nul, `255`, nul? Dan zeggen we: geen rood, al het groen, geen blauw. Dus krijgen we een groene cirkel. En als we geel willen? Geel is een mengsel van rood en groen. We kunnen dus zeggen: geef me al het rood, al het groen en geen blauw, en dat levert geel op. We kunnen ook kleinere getallen gebruiken. Als we wat rood, geen groen en veel blauw willen, krijgen we paars. En veel rood, een beetje groen en iets meer blauw, dat geeft roze. Dat is dus RGB. We mengen rood, groen en blauw om verschillende combinaties te krijgen.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Drie overlappende cirkels van rood, groen en blauw licht die samen geel, magenta, cyaan en wit vormen"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Laten we nu naar HSL kijken, dat ons een heel andere manier geeft om over kleuren na te denken. HSL staat voor kleurtoon (_hue (H)_ in het Engels), verzadiging (_saturation (S)_ in het Engels) en helderheid (_lightness (L)_ in het Engels). Net als bij RGB heb je een functie met de naam `hsl`, die drie getallen neemt, één voor de kleurtoon, één voor de verzadiging en één voor de helderheid, en die een kleur teruggeeft. Laten we eens bekijken wat die drie woorden betekenen.

De kleurtoon is de tint (_shade_ in het Engels) van de kleur die je wilt, en die loopt van nul tot 360. Stel je een regenboog voor. Zo denk ik er zelf over. Links hebben we rood, dan oranje, geel, groen, blauw, paars, en dan komen we eigenlijk weer helemaal terug bij rood. Als je dus nul zegt, begin je links, en dat is rood. Zeg je `120`, dan vraag je om groen. `230` is blauw. Je kunt dit ook zien als een kleurencirkel (_color wheel_ in het Engels), en daar komt die 360 eigenlijk vandaan. Het is het aantal graden in een cirkel. Ik zoek de getallen die ik nodig heb altijd gewoon op, dus maak je niet te druk om dit uit je hoofd te leren, maar het is wel fijn om te weten wat er gebeurt. Dat is dus de kleurtoon, oftewel de tint. Dan hebben we de verzadiging, en die geeft aan hoe levendig de kleur is. Die loopt van nul tot 100. Bij nul krijg je alleen grijs. Er zit geen kleur in, helemaal geen toon. Bij 100 krijg je een volle, levendige, sprankelende kleur. En dan hebben we de helderheid. De helderheid geeft aan hoe licht de kleur is, en die loopt ook van nul tot 100. Bij nul krijg je zwart. Welke kleurtoon je ook hebt gekozen, je krijgt zwart. Er zit geen licht in. En bij 100 krijg je wit. Wat je verder ook kiest, het zit vol licht, dus het is wit. 50 zit precies in het midden, de normale kleur. Je kunt dit dus zien als een schuifregelaar (_slider_ in het Engels) om de kleur lichter of donkerder te maken.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Een regenboog en een kleurencirkel waarop de kleurtoon van 0 (rood) via 120 (groen) naar 240 (blauw) loopt"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Verzadigingsschuif van 0 (grijs) via 50 naar 100 (levendig magenta)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Helderheidsschuif van 0 (zwart) via 50 (volle kleur) naar 100 (wit)"
  width="500"
  height="398"
/>

Als we dus een gewone rode cirkel willen, die we met RGB als 255, nul, nul zouden schrijven, al het rood, geen groen, geen blauw, dan gebruiken we hier nul, 100, 50. Nul voor de rode kleurtoon, 100 voor de verzadiging, volle kleur, en 50 voor de helderheid, wat een normaal niveau van helderheid is. Willen we daar een groene cirkel van maken, dan veranderen we gewoon de kleurtoon naar `120`. Willen we er een donkerder groen van maken, dan verlagen we de helderheid naar `25`.

Willen we er een fletser groen van maken, dan halen we wat van de kleur weg, wat van de verzadiging, bijvoorbeeld door die te verlagen naar `30`.

Wil je een fel, knalroze, dan is een kleurtoon van ongeveer 300 roze, en dan zetten we de verzadiging op 100 om het echt levendig te maken, en we verhogen ook de helderheid, tot ongeveer 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

We hebben dus twee verschillende manieren om kleur uit te drukken, en ze zijn in verschillende situaties nuttig. RGB is ideaal als je één specifiek onderdeel wilt aanpassen: hoeveel rood, hoeveel groen, hoeveel blauw. HSL is ideaal als je door de kleuren heen wilt lopen. Wil je een regenboog, dan hoef je alleen maar de kleurtoon steeds verder te verhogen.
