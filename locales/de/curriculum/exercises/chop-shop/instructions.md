---
title: "Der Friseursalon"
description: "Finde heraus, ob der Friseur noch Zeit für einen weiteren Kunden hat."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Du führst einen kleinen Friseursalon, in dem Geschwindigkeit vor Qualität geht. Vielleicht sehen die Leute danach etwas unfertig aus, aber sie müssen nicht zu lange auf dem Stuhl sitzen.

Du bietest verschiedene Leistungen an, vom Styling bis zum kompletten Haarschnitt, die unterschiedlich lange dauern. In deinem Salon gilt: Wer zuerst kommt, mahlt zuerst. Termine kann man nicht vereinbaren.

Wenn der Tag sich dem Ende zuneigt, brauchst du eine Möglichkeit festzustellen, ob du noch Zeit für neue Leute hast, die in den Salon kommen.

Schreib eine Funktion namens `canFitIn` (passt noch rein), die drei Eingabewerte entgegennimmt:

- Der erste enthält die Haarschnitte, die schon in deiner Warteschlange stehen (Array aus Strings)
- Der zweite ist der Haarschnitt, den die neue Person möchte (String)
- Der dritte gibt an, wie viele Minuten heute noch übrig sind (Zahl)

Gib einen booleschen Wert zurück, der angibt, ob die Person noch reinpasst.

Diese Styles bietest du an:

- Mohawk: 20 Minuten
- Slicked-Back Pixie: 15 Minuten
- Bob: 25 Minuten
- Shave and Polish: 15 Minuten
- Afro Trim: 45 Minuten
- Up-do: 30 Minuten

### Verschachtelte Arrays

Das ist die erste Übung, in der du dich mit einem Array beschäftigst, das andere Arrays als Elemente enthält. Wir nennen sie „verschachtelte Arrays“. Verschachtelte Arrays sind genauso wie jedes andere Array. Sie enthalten aber keine Strings oder Zahlen, sondern andere Arrays.

Schau dir das Array `cuts` (Schnitte) an. Es enthält weitere Arrays, eines für jeden Haarschnitt, und jedes dieser Arrays hat zwei Elemente: einen Namen und eine Dauer.

Am einfachsten ist es, wenn du zuerst an die inneren Arrays denkst, also an die Paare aus Namen und Dauer, und sie dir dann alle in einem weiteren Array zusammengefasst vorstellst.

Das Indexieren funktioniert genauso wie überall sonst, aber du kannst Indizes auch hintereinanderhängen, so wie hier...

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
