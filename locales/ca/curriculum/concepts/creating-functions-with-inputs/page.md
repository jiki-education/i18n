---
title: "Afegir entrades a les funcions"
description: "Afegir ranures d'entrada a les teves pròpies funcions perquè puguin fer coses diferents segons els valors que reben."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Les funcions que has creat fins ara sempre fan exactament el mateix cada vegada. `turnAround` (dona la volta) sempre gira a l'esquerra dues vegades. `shootIfAlienAbove` (dispara si hi ha un alienígena a sobre) sempre comprova i dispara.

Però pensa en les funcions que has anat utilitzant al llarg del curs, com fan coses diferents segons les entrades. Rectangle rep com a entrades l'esquerra, la part superior, l'amplada i l'alçada, i després dibuixa un rectangle diferent segons el que li diguis.

Ara afegirem ranures d'entrada també a les teves pròpies funcions.

Per fer-ho, cal que sàpigues dues coses. La primera és com es veu això en la pràctica, què has d'escriure, i la segona és què passa realment.

La primera part és força senzilla. Només cal que hi afegeixis uns parèntesis normals i després els noms de les entrades que vulguis.

Així que imagina't que creem una funció que ha de disparar moltes vegades. L'anomenarem `shootMany` (dispara moltes vegades).

L'escriuríem així:

```javascript
function shootMany(numShots) {
  // ...
}
```

Quan vulguis utilitzar aquesta funció, la cridaràs amb el nombre de trets que vulguis:

```javascript
shootMany(5)
shootMany(2)
```

Ara ve la part clau. Quan el codi s'executa, el que posis en aquesta entrada, `5` o `2`, el mini-Jiki, el que porta el barret i és dins de la funció, agafa aquesta entrada i la posa en una capsa anomenada `numShots` (nombre de trets), i després posa aquesta capsa als prestatges dins de la funció perquè la facis servir al codi de la funció.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="El mini-Jiki dins de la màquina shootMany posant l'entrada en una capsa amb l'etiqueta numShots"
  width="500"
  height="376"
/>

Ho repeteixo.

Quan escrivim `shootMany(5)` per utilitzar la funció, el Jiki de fora va a buscar un `5` i el posa a la ranura d'entrada de `shootMany`. Dins de la màquina, el mini-Jiki treu aquell `5` i el posa en una capsa anomenada `numShots`, perquè aquest és el nom que has donat a aquella ranura d'entrada, i després posa aquesta capsa als prestatges dins de la funció, dins de la màquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="El mini-Jiki posant la capsa numShots als prestatges dins de la màquina shootMany"
  width="500"
  height="302"
/>

I després, dins de la funció, pots fer servir la capsa `numShots` igual que faries servir qualsevol altra capsa. El nom `numShots` no té res de màgic. Podríem haver-lo anomenat com volguéssim. Només és una instrucció perquè el mini-Jiki creï sempre una capsa amb aquesta etiqueta dins de la funció i hi posi el que es passi per aquella ranura.

I un cop tens un valor en aquesta capsa, pots fer qualsevol cosa que faries normalment amb capses. Podries fer servir la capsa `numShots` com a part d'un bucle repeat per disparar el nombre correcte de vegades. I també pots tenir més d'una entrada. Només cal separar-les amb comes. Així, si tenim una funció anomenada `drawStar` (dibuixa una estrella) que dibuixa una estrella segons la seva posició a dalt a l'esquerra, l'escriuries així:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="La màquina drawStar amb dues ranures d'entrada, que rep dos valors separats"
  width="453"
  height="400"
/>

I després, quan es crida la funció, el mini-Jiki guardarà els valors que es passen per les entrades en capses anomenades `left` (esquerra) i `top` (superior), i després les guardarà als prestatges dins de la funció.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="El mini-Jiki guardant les dues entrades en capses amb les etiquetes left i top als prestatges dins de la màquina drawStar"
  width="431"
  height="400"
/>
