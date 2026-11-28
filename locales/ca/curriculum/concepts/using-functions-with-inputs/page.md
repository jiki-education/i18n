---
title: "Entrades de les funcions"
description: "Posar valors a les ranures d'entrada d'una funció per canviar què fa cada vegada que s'executa."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Una de les coses més potents de les màquines, de les funcions, és que moltes et permeten posar-hi informació que, quan les executes, canvia què fan.

Fins ara, hem vist màquines que s'assemblen una mica a capses, com la màquina `move` (mou).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="La màquina move, una capsa simple sense ranures d'entrada"
  width="322"
  height="400"
/>

Però algunes màquines tenen ranures, com aquesta màquina `walk` (camina). La màquina `walk` és igual que la màquina `move`: mou el personatge (_character_ en anglès) cap endavant, excepte que el Jiki pot fer servir la ranura per especificar quants passos ha de caminar el teu personatge. Així que, en lloc d'haver de fer servir la funció `move` tres vegades seguides, `move`, `move`, `move`, ara pots utilitzar la funció `walk` i dir al Jiki que posi el número tres a la màquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="La màquina walk, amb una ranura d'entrada a la part superior per al nombre de passos"
  width="481"
  height="400"
/>

Per fer-ho en codi, escrivim igualment el nom de la funció, en aquest cas `walk`, i obrim igualment el parèntesi. Però després, abans del parèntesi de tancament, diem quina volem que sigui l'entrada (_input_ en anglès). Així, en aquest cas, volem que l'entrada sigui tres, per dir que camini tres passos endavant:

```javascript
walk(3)
```

Quan el Jiki ho veu, agafa el número tres, i pots pensar en aquest número com una moneda petita, i el posa a la ranura d'entrada de la màquina abans de girar la maneta per engegar-la.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="El Jiki deixant caure el número 3 com una moneda a la ranura de la màquina walk, i després girant la maneta"
  width="421"
  height="400"
/>

Per a les funcions que dibuixen rectangles i cercles, cal dir al Jiki que insereixi diversos números diferents, que especifiquen coses com ara a quina distància de l'esquerra ha d'anar, a quina distància de dalt, l'amplada d'un rectangle o l'altura d'un rectangle.

Al món del Jiki, aquestes només són ranures diferents, una per a cada número.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="La màquina de rectangles, amb ranures per a left, top, width i height, i la màquina de cercles, amb ranures per a cx, cy i radius"
  width="396"
  height="400"
/>

Així que, al nostre codi, escrivim cada número i hi posem una coma entremig. El nom de la funció, un parèntesi, un número per a cada entrada, tots separats per comes, i després tanquem els parèntesis:

```javascript
rectangle(10, 20, 30, 40)
```

Si intentes fer servir una funció amb un nombre d'entrades incorrecte, tindràs un error. Per exemple, si intentes posar una entrada en una màquina que no té cap ranura, el Jiki et dirà que no pots. I si intentes fer servir una màquina que té una ranura d'entrada, però no li dius al Jiki què hi ha de posar, també s'aturarà i es queixarà. Prova-ho si et sents una mica rebel i mira què passa. Faràs molts errors com aquest a mesura que les coses es vagin complicant. Intenta no estressar-te ni emprenyar-te. Tots aprenem dels errors. És, literalment, la manera més ràpida que té el nostre cervell d'interioritzar de veritat les coses. I tothom comet aquests errors. Tots vam començar de zero, així que no t'estressis.

Una altra cosa que val la pena esmentar: de vegades, als exercicis, veuràs línies que comencen amb dues barres, `//`. Aquestes s'anomenen comentaris. Són notes privades només per a tu que el Jiki ignorarà del tot. Així que, si el Jiki veu una línia que comença amb aquestes dues barres, la salta i passa a la línia següent. Aquests comentaris et donen una manera d'escriure notes per a tu mateix. Són molt útils per recordar-te com funcionen les coses. Sovint, els comentaris també estan escrits per a tu, de manera que, quan comences un exercici, et poden suggerir on has d'escriure codi o com resoldre alguna cosa. Però no dubtis a afegir-hi els teus propis comentaris.

A la part inferior de les instruccions d'un exercici, veuràs informació sobre les funcions que pots fer servir i exactament quines són les entrades que hi has de posar.
