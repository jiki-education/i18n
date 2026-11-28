---
title: "Colors HSL"
description: "Construir colors a partir del to (el matís, de 0 a 360), la saturació (com de viu, de 0 a 100) i la lluminositat (com de clar, de 0 a 100)."
en_md5: d751e07ccf6b5a58a11d3d2af1026b93
---

HSL ens ofereix una manera de pensar en els colors completament diferent de RGB. HSL són les sigles de to (_hue (H)_ en anglès), saturació (_saturation (S)_ en anglès) i lluminositat (_lightness (L)_ en anglès). Tens una funció anomenada `hsl` que rep tres nombres, un per al to, un per a la saturació i un per a la lluminositat, i et retornarà un color. Així doncs, desglossem què volen dir aquestes tres paraules.

```javascript
hsl(hue, saturation, lightness)
```

El to és el matís de color que vols, i va de zero fins a 360. Potser imagina't un arc de Sant Martí. Així és com hi penso jo. A l'esquerra tenim el vermell, i després tenim el taronja, el groc, el verd, el blau, el lila i, de fet, tornem fins al vermell. Així que si dius zero, comences per l'esquerra, i això és el vermell. Si dius `120`, estàs demanant verd. `230` és blau. També ho pots imaginar com una roda de colors, que és el que és realment el 360. És el nombre de graus del cercle. Jo sempre busco els números que vull, així que no et preocupis gaire per intentar memoritzar-ho, però va bé saber què hi ha darrere. Doncs bé, aquest és el to, que és el matís. A continuació tenim la saturació, que és com de viu és el color. Va de zero a 100. A zero, obtens simplement gris. No hi ha gens de color, cap tonalitat allà dins. A 100, obtens un color ple, viu i vibrant. I després tenim la lluminositat. La lluminositat és com de clar és el color, i també va de zero a 100. A zero, obtens negre. Independentment del to que hagis triat, obtens negre. No hi ha llum a dins. I a 100, obtens blanc. Passi el que passi amb la resta, està ple de llum, així que és blanc. 50 és just al mig, el color normal. Així que ho pots veure com un lliscador per fer el color més clar o més fosc.

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/hsl-hue-wheel.webp"
  alt="Una roda de colors de to i un arc de Sant Martí que mostren que 0 és vermell, 120 és verd i 240 és blau"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/saturation-slider.webp"
  alt="Un lliscador de saturació de 0 (gris) passant per 50 fins a 100 (color ple i viu)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/hsl/lightness-slider.webp"
  alt="Un lliscador de lluminositat de 0 (negre) passant per 50 fins a 100 (blanc)"
  width="500"
  height="398"
/>

Així que si volem un cercle vermell normal, que amb RGB hauríem escrit com a 255, zero, zero, tot el vermell, gens de verd, gens de blau, aquí faríem servir zero, 100, 50. Zero per al to vermell, 100 per a la saturació, color ple, i 50 per a la brillantor, que és un nivell de brillantor normal. Si el volem convertir en un cercle verd, només cal canviar el to a `120`. Si el volem fer d'un verd més fosc, podem baixar la lluminositat fins a `25`.

```javascript
hsl(0, 100, 50) // vermell
hsl(120, 100, 50) // verd
hsl(120, 100, 25) // verd fosc
```

Si el volem d'un verd més apagat, podem treure-li part del color, part de la saturació; posem-la, per exemple, a `30`.

Si vols un rosa fort i brillant, un to d'uns 300 és rosa, i llavors pugem la saturació a 100 per fer-lo ben viu, i també apugem la lluminositat fins a uns 60.

HSL és molt útil quan vols anar passant d'un color a un altre en cicle. Si vols un arc de Sant Martí, només cal que vagis augmentant el to.
