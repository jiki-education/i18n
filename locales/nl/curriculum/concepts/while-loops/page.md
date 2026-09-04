---
title: "`while`-loops begrijpen"
description: "Een lus die blijft draaien zolang een bepaalde voorwaarde waar is."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

De volgende lus die je moet kennen is de `while`-loop (_while_ betekent “zolang”).

Die zegt: “Zolang een bepaalde voorwaarde geldt, voer de lus uit.” Stel dat we een regel hebben die zegt dat je in Space Invaders maar vijf keer mag schieten. Dan hebben we hier een lus die zegt: zolang het aantal schoten kleiner is dan vijf, voer een lus uit waarmee iemand het spel kan spelen.

```javascript
while (numShots < 5) {
  // schiet op alien
  numShots++
}
```

Elke keer dat iemand schiet, verhogen we `numShots` met één, en uiteindelijk komen we op vijf en stopt de lus.

Nu is er één probleem met `while`-loops: het is vrij makkelijk om bugs te maken waardoor de lus nooit eindigt. Dat noemen we oneindige lussen (_infinite loops_ in het Engels), en ze zijn een van de meest voorkomende bugs in programma's.

Als je computer traag wordt, de ventilatoren beginnen te draaien en alles lawaai maakt, komt dat vaak doordat iemand een oneindige lus in zijn code heeft laten staan die nooit stopt.
