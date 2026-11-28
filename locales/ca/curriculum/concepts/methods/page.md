---
title: "Mètodes"
description: 'Funcions que pertanyen a un valor i que es criden amb la notació de punt, com ara `"Jeremy".includes("e")` o `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Fins ara, quan hem pensat en cordes o en nombres, els hem considerat coses força estàtiques.

I, tot i que ho són, també porten incorporades moltes funcionalitats que el Jiki pot fer servir.

I a mesura que avancem, anirem aprenent aquestes funcionalitats, aquest tipus de capacitats que tenen i que et fan la vida molt més fàcil.

Hi ha dos tipus de capacitats que mirarem: les propietats i els mètodes.

Els mètodes són funcions que pertanyen a la corda.

Així, en lloc d'escriure nosaltres una funció a la qual posem una corda com a entrada, podem fer servir un mètode directament sobre la corda.

Per exemple, te'n recordes d'una funció en què comproves si una corda conté una lletra concreta? Doncs resulta que les cordes tenen un mètode anomenat `includes` (inclou) que fa precisament això, i el podem fer servir amb la mateixa sintaxi de punt que has vist per a les propietats.

La diferència amb les propietats és que, quan els escrivim, els escrivim com a funcions, amb parèntesis i entrades.

Així, podem escriure:

```javascript
"Jeremy".includes("e") // true
```

I rebrem `true`, ja que `"Jeremy"` té una `"e"` a dins.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="El Jiki escriu la corda Jeremy en un tros de paper"
  width="359"
  height="400"
/>

Els mètodes són diferents de les propietats perquè no són fets estàtics. Són funcions, de veritat. Els pots imaginar com a funcions que tenen una capsa incorporada amb la corda a dins.

Com funcionen no té gaire importància ara mateix. No els construiràs fins d'aquí a un temps. Tot el que necessites saber és que per fer servir un mètode poses un punt i després la sintaxi normal de les funcions.

Una cosa que has de saber sobre les cordes és que els mètodes no canvien res de dins la corda. Per exemple, hi ha un mètode `toUpperCase` (passa a majúscules) que retorna la corda amb totes les lletres en majúscules. Però això no canvia la corda original. Aquesta encara conté `"Jeremy"`, escrit només amb la J majúscula. El que fa el Jiki és crear una corda nova, tota en majúscules.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
