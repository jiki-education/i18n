---
title: "El bucle `repeat`"
description: "Com fer servir la paraula clau `repeat` per dir al Jiki que executi el codi de dins de les claus un nombre concret de vegades."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Fins ara, ho hem escrit tot d'una manera lineal, on el Jiki segueix cada instrucció en ordre, de dalt a baix.

Ara veurem com el Jiki pot sortir d'aquest flux estricte de dalt a baix i, més concretament, com podem dir al Jiki que executi el mateix tros de codi moltes vegades seguides.

Per exemple, imagina que ets al laberint i vols avançar 10 passos. Hi ha una funció `walk` que t'ajuda amb això, però i si no existís? I si només tinguessis la funció <define>`move`</define> (mou)?

En lloc d'escriure `move` 10 vegades seguides, cosa que es fa molt repetitiva, el que necessitem és poder dir: «Ei, Jiki, fes 10 vegades el que et digui tot seguit.

`Move`.»

Per fer això en codi, hem de poder fer servir la nostra primera paraula clau (_keyword_ en anglès), i les paraules clau són instruccions que el Jiki entén. S'assemblen una mica a les màquines, però no ho són. Quan el Jiki veu una paraula clau, no busca cap màquina al prestatge: simplement sap que ha de fer alguna cosa. Ho porta incorporat al cervell. I hi ha unes vint paraules clau diferents que aprendrem durant el curs, i la primera de totes és la paraula clau `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="El Jiki envoltat de paraules clau com repeat, if, else, and i or, amb una nota que diu que les paraules clau són instruccions que el Jiki entén"
  width="358"
  height="400"
/>

La paraula clau `repeat` fa exactament el que he dit abans. Li diu al Jiki: «Repeteix això tantes vegades com et digui tot seguit». Fes un cop d'ull a aquest codi. Primer, fem servir la paraula clau `repeat` per dir al Jiki que farà una cosa diverses vegades. Després hi posem, entre parèntesis, quantes vegades vols que el Jiki repeteixi la cosa, i tot seguit tenim aquestes claus, i dins de les claus hi ha les coses que volem que el Jiki repeteixi. Aquest patró és increïblement comú en programació. Especifiquem una paraula clau, normalment amb una mica d'informació, com ara quantes vegades fer una cosa en aquest cas, i després un bloc de codi entre claus. Així que, tornant al món del laberint, en lloc d'escriure `move`, `move`, `move`, `move`, podem escriure repeat quatre vegades amb un `move` a dins.

```javascript
repeat(4) {
  move()
}
```

El Jiki veurà aquest codi i farà servir la màquina `move` quatre vegades seguides.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="El Jiki fent servir la màquina move quatre vegades seguides, una rere l'altra"
  width="421"
  height="400"
/>

I no estem limitats a tenir només una cosa dins d'aquestes claus. El Jiki pot fer diverses coses de manera repetida. Podem dir al Jiki que faci `move`, després `turnLeft`, i que repeteixi tot això quatre vegades. Si el Jiki veu això, farà servir la màquina `move`, després la màquina `turnLeft`, després la màquina `move`, després la màquina `turnLeft`, després la màquina `move`, etcètera, fins que hagi fet les dues coses quatre vegades.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="El Jiki fent servir la màquina move i després la màquina turnLeft, repetint el parell d'accions quatre vegades"
  width="500"
  height="390"
/>

Aquestes instruccions de repetició les anomenem bucles (_loops_ en anglès), i hi ha molts bucles diferents que podem fer servir i que funcionen una mica diferent.

Hi ha una cosa més a saber: mantenir el codi net i endreçat es torna essencial quan treballes amb bucles. Quan el teu codi té una bona estructura visual, és molt fàcil veure què hi passa. Però si no la té, si t'oblides de sagnar les coses bé o et barreges amb el sagnat, les coses es tornen confuses molt de pressa. Així que, en aquest curs, sempre tenim una regla. La clau d'obertura sempre va a la mateixa línia que la sentència (_statement_ en anglès) `repeat`. La clau de tancament sempre va en una línia pròpia després de la sentència, i el codi que hi ha entremig sempre va sagnat amb dos espais. Així tot quedarà ben endreçat, i si te n'oblides o intentes seguir un patró diferent, et sortirà un error.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="El Jiki assenyalant el sagnat i la línia nova que mantenen endreçat el bloc de codi d'un bucle"
  width="500"
  height="398"
/>
