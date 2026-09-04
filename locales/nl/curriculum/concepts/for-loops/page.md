---
title: "`for`-loops begrijpen"
description: "Een lus met drie onderdelen (een initialisatie, een voorwaarde en een verhoging) die je volledige controle geeft over de herhaling."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Misschien weet je nog dat de repeat-loop in JavaScript niet echt bestaat. Die is alleen toegevoegd om je leven wat makkelijker te maken terwijl we op gang komen.

Wat gebruiken we dan in plaats daarvan? Nou, een gewone `for`-loop, en die ziet er zo uit.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Je snapt vast waarom dit er op dag één een beetje intimiderend uitzag.

Maar inmiddels heb je alle kennis die je nodig hebt om je hier prettig bij te voelen. Laten we het dus stap voor stap bekijken.

Een for-loop heeft drie onderdelen: een initialisatie (_initializer_ in het Engels), een voorwaarde en een verhoging (_increment_ in het Engels).

De initialisatie, dat stukje `let i = 0`, wordt aan het begin van de hele lus uitgevoerd. Dat gebeurt maar één keer, en hier maakt het een doos met de naam `i` (kort voor _index_) aan met de waarde nul. `i` is gewoon een letter waarmee we een waarde bijhouden terwijl we door de lus gaan, en van oudsher worden `i` of `x` daarvoor gebruikt.

Het volgende stukje, de voorwaarde, wordt elke keer uitgevoerd vóór elke iteratie van de lus.

Als de voorwaarde waar is, voeren we de lus opnieuw uit.

Als dat niet zo is, doen we dat niet.

En dan is er tot slot de verhoging, de `i++`.

`i++` betekent gewoon hetzelfde als `i = i + 1`. Het is alleen een verkorte schrijfwijze, een manier om `i` elke keer met één te verhogen.

In dit voorbeeld zetten we `i` dus op nul. We controleren of `i` kleiner is dan twee, en dat is zo, dus voeren we de lus uit.

En aan het eind verhogen we `i` met één, dus `i` wordt één. Nul plus één is één.

En dan gaan we opnieuw. We controleren of één kleiner is dan twee.

Dat is zo, dus voeren we de lus uit. En aan het eind verhogen we `i` weer. Nu is het dus twee, één plus één is twee.

```javascript
i = 0
i < 2 // waar - voer de lus uit
...   // Doe de iteratie
i = i + 1 // 1

i < 2 // waar - voer de lus uit
...   // Doe de iteratie
i = i + 1 // 2

i < 2 // onwaar - verlaat de lus
```

En dan gaan we een derde keer. Deze keer controleren we of twee kleiner is dan twee, en dat is niet zo, dus voeren we de lus niet uit, en we zijn zelfs helemaal klaar met de lus. We gaan gewoon verder met de code eronder. We hebben de lus dus twee keer uitgevoerd, en dat is handig om te weten. Zolang we bij nul beginnen en een voorwaarde `i < n` hebben, is het getal `n` het aantal keer dat de lus wordt uitgevoerd.

Dit is dus hetzelfde als repeat twee zeggen.

Het is dus niet moeilijk, maar wel een stuk omslachtiger dan gewoon repeat twee schrijven. Het voordeel van een for-loop is dat je in die drie plekken van alles kunt doen. Je kunt bij een ander getal beginnen, met meer dan één tegelijk omhoog tellen, omlaag tellen, of een voorwaarde gebruiken die van iets anders afhangt dan een simpele teller. Die flexibiliteit is wat for-loops tot het werkpaard van JavaScript maakt.
