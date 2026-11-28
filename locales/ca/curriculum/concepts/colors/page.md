---
title: "Colors"
description: "Dues maneres d'especificar qualsevol color que vulguis. RGB barreja llum vermella, verda i blava. HSL fa servir el to, la saturació i la lluminositat."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Si mai fas res de visual amb codi (i, fins i tot si vols ser científic de dades i tot això de dibuixar et sembla una mica avorrit, comunicar dades amb elements visuals és una habilitat clau), hi ha dues maneres diferents d'expressar els colors. Ja has fet servir colors amb el seu nom, com ara vermell o groc, com a última entrada de les teves funcions de dibuix, i ha estat una bona manera de fer servir colors ràpidament, però és bastant limitat. Només hi ha un grapat de colors amb nom que podem fer servir. Així que ara mirarem dues maneres d'expressar qualsevol color que vulguis, i es diuen RGB i HSL.

RGB ens permet pensar en els colors com una barreja de vermell, verd i blau. Això és el que vol dir RGB: vermell (_red (R)_ en anglès), verd (_green (G)_ en anglès) i blau (_blue (B)_ en anglès). Si recordes quan barrejaves pintures a l'escola, la idea és semblant, excepte que en lloc de pintura barregem llum.

En molts exercicis tindràs una funció anomenada `rgb`, que prendrà tres nombres com a entrades, un per al vermell, un per al verd i un per al blau, i retornarà un color.

Els nombres que pots fer servir com a entrades van del zero al `255`. El zero vol dir que no vull gens d'aquell color, i `255` vol dir barrejar tant com es pugui d'aquell color. Així, si fem servir la funció `rgb` amb `255`, zero i zero com a entrades, estem dient que volem tot el vermell. Recorda que `255` és el nombre més gran que hi pots posar. Però no volem gens de verd ni de blau, així que tots dos són zero. Doncs obtenim vermell, i podem guardar aquest vermell en una variable i fer-lo servir després a la funció `circle`, tal com ja hem fet amb els noms dels colors. I quin és el cas si fem servir la funció `rgb` amb zero, `255` i zero? Ara diem: gens de vermell, tot el verd, gens de blau. Així que obtenim un cercle verd. I si volem groc? El groc és una barreja de vermell i verd. Podem dir: dona'm tot el vermell, tot el verd i gens de blau, i això ens donarà groc. També podem fer servir nombres més petits. Si volem una mica de vermell, gens de verd i molt de blau, obtindrem porpra. I molt de vermell, una mica de verd i una mica més de blau ens dona un rosa. Així doncs, això és RGB. Barregem vermell, verd i blau per obtenir combinacions diferents.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Tres cercles superposats de llum vermella, verda i blava que, en barrejar-se, produeixen groc, magenta, cian i blanc"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Ara mirem HSL, que ens dona una manera completament diferent de pensar en els colors. HSL vol dir to (_hue (H)_ en anglès), saturació (_saturation (S)_ en anglès) i lluminositat (_lightness (L)_ en anglès). I, de manera semblant a RGB, tens una funció anomenada `hsl` que pren tres nombres, un per al to, un per a la saturació i un per a la lluminositat, i retorna un color. Desglossem, doncs, què volen dir aquestes tres paraules.

El to és el matís (_shade_ en anglès) de color que vols, i va del zero fins a 360. Potser imagina't un arc de Sant Martí. Així és com ho penso jo. A l'esquerra tenim el vermell, i després tenim el taronja, el groc, el verd, el blau, el porpra i, de fet, tornem cap al vermell. Així, si dius zero, comences per l'esquerra, i això és el vermell. Si dius `120`, estàs demanant verd. `230` és blau. També ho pots pensar com un cercle cromàtic (_color wheel_ en anglès), que és el que són realment els 360. És el nombre de graus del cercle. Jo sempre miro els nombres que vull, així que no et preocupis gaire per memoritzar-ho, però va bé saber què passa. Això és el to, que és el matís. Després tenim la saturació, que és com de viu és el color. Va del zero al 100. A zero, només obtens gris. No hi ha gens de color ni cap to. A 100, obtens un color ple, viu i vibrant. I després tenim la lluminositat. La lluminositat és com de clar és el color, i també va del zero al 100. A zero, obtens negre. Passi el que passi amb el to que hagis triat, obtens negre. No hi ha llum. I a 100, obtens blanc. Independentment de la resta, està ple de llum, així que és blanc. 50 és just al mig, el color normal. Així que ho pots pensar com un lliscador (_slider_ en anglès) per fer el color més clar o més fosc.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Un arc de Sant Martí i un cercle cromàtic que mostren el to anant del 0 (vermell) al 120 (verd) i al 240 (blau)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Lliscador de saturació del 0 (gris) passant pel 50 fins al 100 (magenta viu)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Lliscador de lluminositat del 0 (negre) passant pel 50 (color ple) fins al 100 (blanc)"
  width="500"
  height="398"
/>

Així, si volem un cercle vermell normal, que amb RGB hauríem escrit com a 255, zero i zero (tot el vermell, gens de verd, gens de blau), aquí faríem servir zero, 100 i 50. Zero per al to vermell, 100 per a la saturació, color ple, i 50 per a la brillantor, que és un nivell de brillantor normal. Si volem convertir-lo en un cercle verd, només cal canviar aquest to per `120`. Si el volem fer un verd més fosc, podem baixar la lluminositat fins a `25`.

Si el volem fer un verd més apagat, podem treure-li una mica de color, una mica de saturació, per exemple baixar-la fins a `30`.

Si vols un rosa intens i cridaner, un to d'uns 300 és rosa, i llavors pugem la saturació a 100 per fer-lo ben viu, i també apugem la lluminositat fins a uns 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Així que tenim dues maneres diferents d'expressar el color, i són útils en situacions diferents. RGB és fantàstic quan vols ajustar un component concret: quant de vermell, quant de verd, quant de blau. HSL és fantàstic quan vols recórrer colors en cicle. Si vols un arc de Sant Martí, només has d'anar augmentant el to.
