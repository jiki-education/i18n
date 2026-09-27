---
title: "Reste berechnen mit dem `%`-Operator"
description: "Mit dem `%`-Operator bekommst du den Rest einer Division. Damit prüfst du oft, ob eine Zahl gerade oder ungerade ist."
en_md5: 4955abecb626b8eff02ee7484e2065dd
---

Bisher haben wir Addition, Subtraktion, Multiplikation und Division benutzt, wenn wir rechnen. Jetzt führen wir noch einen ein: den Rest-Operator (_remainder_ auf Englisch).

Der Rest-Operator gibt dir logischerweise den Rest, wenn du zwei Zahlen dividierst, und wir schreiben ihn mit einem Prozentzeichen. Wenn wir also schreiben:

```javascript
10 % 4 // 2
```

dann sagen wir oder fragen wir: „Was bleibt übrig, wenn wir 10 durch 4 teilen?“ Und die Antwort ist zwei. Stell dir vor, du hast 10 Bonbons oder Nüsse und willst sie gleichmäßig auf vier Personen verteilen. Jede Person bekommt zwei, und am Ende bleiben zwei übrig. Und dieser übrig gebliebene Teil, das ist der Rest. Genau den gibt dir dieses Prozentzeichen.

<img
  class="concept-image"
  src="/static/images/concept-assets/modulo/sharing-candies.webp"
  alt="Eine Reihe aus zehn Bonbons, die gleichmäßig auf vier Personen verteilt werden, wobei zwei als Rest übrig bleiben"
  width="500"
  height="22"
/>

Ein Grund, warum wir das im Code ziemlich oft benutzen, ist, dass wir wissen können, ob etwas ohne Rest aufgeht oder nicht. Das häufigste Muster dabei ist, herauszufinden, ob eine Zahl gerade oder ungerade ist.

Gerade Zahlen lassen sich, wie du weißt, alle ohne Rest durch zwei teilen. Ungerade Zahlen lassen bei der Division durch zwei immer eins übrig.

Wenn du also vier, sechs oder acht nimmst und durch zwei teilst, bleibt nichts übrig. Wenn du dagegen fünf, sieben oder neun durch zwei teilst, bleibt am Ende immer eins übrig. Wenn wir also `if something % 2 === 0` schreiben, fragen wir: „Ist dieses Etwas eine gerade Zahl?“ Und das kann für jede Menge Dinge nützlich sein. Stell dir vor, du erstellst Streifen in verschiedenen Farben oder teilst eine Warteschlange in zwei Hälften und schickst jede Person, die auf dich zukommt, in eine von zwei Richtungen.

Eins noch: Du hörst vielleicht, dass Leute diesen Rest-Operator als Modulo-Operator bezeichnen. Modulo und Rest sind im Grunde dasselbe. Es gibt ein paar kleine Unterschiede, um die du dir wahrscheinlich nie Gedanken machen musst. Deshalb nennen wir ihn vorerst den Rest-Operator. Das ist viel einfacher.
