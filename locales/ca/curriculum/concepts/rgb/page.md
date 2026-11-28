---
title: "Colors RGB"
description: "Barrejar llum vermella, verda i blava del 0 al 255 per crear qualsevol color que vulguis a la pantalla."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

L'RGB ens permet pensar en els colors com una barreja de vermell, verd i blau. Això és el que significa RGB: vermell (_red (R)_ en anglès), verd (_green (G)_ en anglès) i blau (_blue (B)_ en anglès). Si recordes quan barrejaves pintures a l'escola, la idea és semblant, però en lloc de pintura, barregem llum.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Tres cercles superposats de llum vermella, verda i blava que es barregen per fer groc, magenta, cian i blanc"
  width="500"
  height="390"
/>

En molts exercicis tindràs una funció anomenada `rgb(red, green, blue)`, que rebrà tres nombres com a entrades, un per al vermell, un per al verd i un per al blau, i et retornarà un color.

Els nombres que pots fer servir com a entrades van del zero al `255`. El zero vol dir que no vols gens d'aquell color, i `255` vol dir que hi barregis tant d'aquell color com sigui possible. Així, si fem servir la funció `rgb` amb `255`, zero i zero com a entrades, el que estem dient és que volem tot el vermell. Recorda que `255` és el nombre més gran que hi pots posar. Però no volem gens de verd ni de blau, així que tots dos són zero. Així obtenim vermell, i podem guardar aquest vermell en una variable i fer-lo servir després a la funció `circle`, tal com ja hem fet amb les cordes amb nom. I si fem servir la funció `rgb` amb zero, `255` i zero? Ara estem dient que no volem vermell, que volem tot el verd i gens de blau. Així obtenim un cercle verd. I si volem groc? El groc és una barreja de vermell i verd. Així podem dir que ens doni tot el vermell, tot el verd i gens de blau, i això ens donarà groc. I podem fer servir nombres més petits. Així, si volem una mica de vermell, gens de verd i molt de blau, obtindrem porpra. I molt de vermell, una mica de verd i una mica més de blau ens dona un rosa. Doncs això és l'RGB. Barregem vermell, verd i blau per obtenir combinacions diferents.

```javascript
rgb(255, 0, 0) // vermell
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Un cercle vermell produït per rgb(255, 0, 0), tot vermell i sense gens de verd ni de blau"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // groc
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Un cercle groc produït per rgb(255, 255, 0), tot el vermell i tot el verd sense blau"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // rosa
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Un cercle rosa produït per rgb(230, 50, 170), molt de vermell, una mica de verd i una mica de blau"
  width="436"
  height="400"
/>

L'RGB és fantàstic quan vols ajustar un component concret: quant de vermell, quant de verd i quant de blau.
