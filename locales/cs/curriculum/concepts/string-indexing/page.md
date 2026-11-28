---
title: "Indexování řetězců"
description: "Jak pomocí hranatých závorek a čísla pozice vytáhnout z řetězce jediné písmeno. Pamatuj, že pozice začínají od nuly."
en_md5: cd31e0366b3090b358494667003f54c9
---

Představ si, že máš moje jméno, Jeremy, a chceš z něj dostat moji iniciálu J. Jak bychom na to šli?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki přemýšlí, jak z řetězce vytáhnout jediné písmeno"
  width="361"
  height="353"
/>

No, řetězec si můžeš představit jako řadu písmen. Takže `"Jeremy"` má šest písmen, J-E-R-E-M-Y, a každé z nich má svou pozici. `"J"` je na první pozici, `"y"` na poslední.

V JavaScriptu a ve většině programovacích jazyků ale pozice začínají od nuly. První písmeno `"J"` je tedy na nulté pozici, následuje `"e"` na první pozici, `"r"` na druhé, `"e"` na třetí, `"m"` na čtvrté a `"y"` na páté.

To počítání od nuly je dost zvláštní a popravdě, život by byl jednodušší, kdybychom počítali od jedničky jako v normálním světě. Ale nepočítáme. Ve většině programovacích jazyků se počítá od nuly, takže si to prostě zapamatuj.

Když tedy chceme získat písmeno na konkrétní pozici, použijeme hranaté závorky a dovnitř napíšeme číslo.

Takže `"Jeremy"[0]` znamená: dej mi první písmeno slova `"Jeremy"`.

`"Jeremy"[1]` znamená: dej mi druhé písmeno.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Tohle jde i s proměnnými. Když si vytvoříme proměnnou `name` (jméno) a nastavíme jí hodnotu na řetězec `"Jeremy"`, můžeme napsat `name[0]` a zase dostaneme `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Jednu věc si ujasněme: to, co dostaneš z `name[0]`, je prostě další řetězec. Je to další papírek, na kterém je J. Nic zvláštního. Je to řetězec stejně jako `"Jeremy"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki drží nový papírek, na kterém je jen písmeno J"
  width="500"
  height="289"
/>

Prostě na něm náhodou je jedno písmeno místo šesti.

A tohle původní řetězec vůbec nezmění. Nic z něj netrháme, žádné J neodlepujeme. Jen najdeme to písmeno, které chceme, a pak z něj vytvoříme nový řetězec.
