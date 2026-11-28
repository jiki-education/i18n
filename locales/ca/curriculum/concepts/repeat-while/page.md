---
title: "Fer servir `repeat` sense un nombre"
description: "Deixar buits els parèntesis d'un bucle `repeat` perquè el Jiki continuï endavant fins que una altra cosa li digui que pari."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Fins ara, quan has fet servir el bucle `repeat`, sempre has indicat un nombre que diu quantes vegades s'ha de repetir. Repeteix cinc vegades, 10 vegades, 40 vegades. De vegades també has fet servir una variable per a això. Però sempre li has dit al Jiki exactament quantes vegades havia de repetir el bucle. Ara bé, de vegades no sabem per endavant quantes vegades cal repetir. Pensa en el laberint. Ben al començament d'aquest curs, vas resoldre el laberint escrivint els moviments concrets. Podies veure el laberint, comptar els passos i escriure el nombre correcte de moviments.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Un laberint en què el personatge pot veure el camí, comptar els passos i escriure exactament els moviments correctes"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

I si et dic: «Escriu-me codi que pugui resoldre qualsevol laberint que et doni»? Aquell laberint potser necessita 10 passos, o 50, o 200. No en pots tenir ni idea per endavant.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Diversos laberints de formes i mides diferents, amb el Jiki rumiant com resoldre'n qualsevol"
  width="402"
  height="400"
/>

Així que necessites una manera de dir-li al Jiki que continuï endavant i prou. Que continuï comprovant per on pot anar, que continuï prenent decisions, que continuï avançant, una vegada i una altra, fins que estigui llest.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="El Jiki corrent en una cinta de córrer, simplement continuant una vegada i una altra"
  width="428"
  height="400"
/>

I la manera de fer-ho és ben senzilla. No donis cap nombre a la paraula clau `repeat`. Deixa aquells parèntesis buits. Si ho fas així, el Jiki continuarà endavant fins que alguna altra cosa li digui que pari. Més endavant veurem quines són aquestes «altres coses». Però per ara, continuarà endavant fins que s'acabi l'exercici, o fins que decideixi que fa una eternitat que va així, que vol fer un descans i que ja en té prou.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="El Jiki desplomat, esgotat, sobre la cinta de córrer després d'anar-hi durant una eternitat, a punt de rendir-se i fer un descans"
  width="500"
  height="378"
/>
