---
title: "Presentem les cordes"
description: "Trossos de text entre cometes (una lletra, una paraula, una frase o un paràgraf sencer) que el Jiki escriu en un paper."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Quan vols fer servir un nombre, el pots escriure directament, i el Jiki sap què vols dir. Però, i si vols fer servir una lletra, una paraula o una frase? Per exemple, amb la funció `rectangle` o la funció `circle` (cercle), què passaria si tinguéssim una entrada més per especificar-hi el color? Com escriuríem el color per posar-lo dins la màquina? Si escrivim simplement la paraula `green` (verd) o `blue` (blau), el Jiki pensarà que ens referim a una màquina dels prestatges, i dirà: «No hi ha cap màquina que es digui green. No sé què he de fer.»

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="El Jiki dret i confús al costat de la màquina rectangle, amb signes d'interrogació sobre el cap"
  width="446"
  height="400"
/>

Així que tenim una regla: sempre que hàgim de fer servir text, l'hem de posar entre cometes, entre cometes dobles. I quan poses alguna cosa entre cometes així, el Jiki treu un paper i hi escriu allò que hagis posat entre cometes, i aquests papers els anomenem cordes (_strings_ en anglès).

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="El Jiki escrivint la paraula green en un paper, que es converteix en una corda"
  width="398"
  height="400"
/>

Les cordes poden ser una sola lletra, paraules, frases, paràgrafs, fins i tot llibres. La regla és que, si és text, el posem entre cometes i es converteix en una corda.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="Una pissarra que mostra cordes de longituds diferents entre cometes: una sola lletra, una paraula, una frase i una adreça en diverses línies"
  width="500"
  height="398"
/>

Així que, si volem un rectangle blau, escrivim el nombre de la seva posició esquerra, la seva posició superior, la seva amplada i la seva alçada. Però, per a la cinquena entrada, escriurem `"blue"` entre cometes.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

El Jiki agafaria la màquina del prestatge i posaria unes monedes a les quatre primeres ranures. Després escriuria blau en un paper, posaria aquest paper a la cinquena ranura i posaria la màquina en marxa.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="El Jiki introduint el paper blau a la cinquena ranura de la màquina rectangle, amb les monedes 10, 20, 30, 40 a les quatre primeres ranures"
  width="500"
  height="392"
/>

«Corda» és una d'aquestes paraules tècniques que al principi fan una mica de respecte, però en realitat només vol dir text. T'hi acostumaràs molt de pressa. No té res de màgic.
