---
title: "Escriure les teves pròpies funcions"
description: "Fer servir la paraula clau function per construir les teves pròpies màquines que el Jiki pot posar als seus prestatges i tornar a fer servir."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Fins ara, has fet servir funcions que ja venien fetes per a tu, funcions com `circle`, `rectangle`, `moveRight` o `shoot`. Totes aquestes són funcions que algú va crear i va posar als prestatges del Jiki.

Però ara ja toca que comencis a crear les teves pròpies funcions.

Per ensenyar-te com es fa, mirarem com construir una funció nova per al laberint que es diu `walk5` (camina cinc passes).

Aquesta funció sempre farà avançar el personatge cinc passos. Admetem-ho: no és la funció més útil del món, però és prou senzilla per començar-hi.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="El personatge a la graella del laberint, a punt per avançar cinc passos"
  width="500"
  height="314"
/>

Així que, si et demanés d'escriure una mica de codi per fer avançar el personatge cinc passos, podries escriure `move` (mou) cinc vegades o podries fer servir un bucle `repeat`. En aquest exemple, per no complicar-ho, farem servir l'opció d'escriure `move` cinc vegades seguides.

```javascript
move()
move()
move()
move()
move()
```

Doncs això és el que volem que hi hagi dins de la nostra funció.

Ara afegeix-hi una línia a sota que digui al Jiki que faci servir aquesta funció. Ja ho has vist moltes vegades.

I després la nostra feina serà embolcallar aquestes cinc primeres línies dins d'una funció, de manera que quan el Jiki faci servir `walk5`, s'executin precisament aquestes cinc primeres línies de codi.

Per convertir aquestes cinc línies en una funció, aquests cinc moviments en una funció, cal fer servir una paraula clau nova: la paraula clau `function`.

Quan fem servir la paraula clau `function`, hem de fer dues coses. Primera: especificar el nom de la funció. En aquest cas, és `walk5`. I segona: fer servir claus per embolcallar el codi que diu «Això és el que has de fer dins de la funció». Així que ho podem afegir al nostre codi, i ara li estem dient al Jiki que creï una funció que es diu `walk5`, i que després, quan es faci servir `walk5`, executi aquestes cinc línies de codi.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Quan el Jiki veu la paraula clau `function`, va i construeix una funció nova, posa aquestes instruccions en una pissarra a dins, i després posa una etiqueta a la màquina amb el nom `walk5`. I tot seguit posa aquesta funció als prestatges, al costat de totes les altres que hi ha.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="El Jiki dret al costat d'una màquina nova amb una pissarra a dins per apuntar-hi les instruccions de la funció"
  width="500"
  height="396"
/>

Ara bé, aquesta funció que has creat no té res d'especial en comparació amb les integrades (_built-in_ en anglès). Totes estan simplement una al costat de l'altra als seus prestatges.

I quan facis servir la funció, quan escriguis `walk5()`, el Jiki agafarà la màquina dels prestatges i la farà servir exactament igual que com ha fet sempre amb qualsevol altra funció. Pots imaginar-te que cada màquina té un mini Jiki vivint a dins. El mini Jiki sempre porta aquest barret tan guai. I aquest mini Jiki treballa exactament igual que el Jiki normal de fora, seguint les instruccions de la mateixa manera.

Una cosa clau que cal entendre aquí és que, quan el Jiki crea la funció, en realitat no executa el codi. Només l'apunta per fer-lo servir més endavant.

El personatge del laberint no es mou en aquest moment, quan escrius la paraula clau `function`.

El Jiki ha construït la màquina i l'ha posada als prestatges. No és fins que li dius que faci servir la màquina, escrivint `walk5()`, que això passa de veritat.
