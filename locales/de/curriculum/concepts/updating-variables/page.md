---
title: "Variablen aktualisieren"
description: "Wie du änderst, was in einer Variable steckt, während dein Programm läuft, damit du Positionen, Anzahlen, Punktestände und andere Werte im Blick behalten kannst, die sich ständig verändern."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Bisher haben wir Werte in Boxen gelegt und sie später wieder herausgeholt, wenn wir Variablen erstellt haben. Das war sehr nützlich, um unseren Code klarer zu machen und um das Kopfrechnen zu verringern, das wir sonst vielleicht hätten anstellen müssen. Aber der eigentliche Nutzen von Variablen liegt darin, dass du ändern kannst, was in einer Box steckt, also was in der Variable steckt, während das Programm läuft. Auch wenn wir also dasselbe Stück Code mehrmals ausführen, kann sich das, was es tut, je nachdem ändern, was in den Boxen steckt.

Sagen wir, wir wollen eine Blume in einem Garten pflanzen. Wir haben eine praktische Funktion `plant` (pflanzen), die einen einzigen Eingabewert hat: die Position, an der wir die Blume platzieren wollen. Wenn wir also eine Blume 10 vom Rand entfernt platzieren wollen, schreiben wir es so:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Eine Blume, die in einem Garten neben Jikis Tafel gepflanzt wurde"
  width="406"
  height="400"
/>

Was aber, wenn wir acht Blumen pflanzen wollen? Nun, wir könnten `plant(10)`, `plant(20)`, `plant(30)` und so weiter schreiben, aber das ist ziemlich mühsam.

Und wir haben schon etwas kennengelernt, das uns hilft, diese Art von mühsamem Code zu ersetzen. Nutze eine Schleife! Nutze einen `repeat`-Block! Also setzen wir die Position auf 10 und lassen dann einen `repeat`-Block acht Mal `plant` aufrufen, also acht Mal die Funktion `plant` verwenden.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Was, glaubst du, wird passieren?

Nun, er wird acht Blumen pflanzen, aber er pflanzt sie jedes Mal an dieselbe Stelle, und das ist nicht wirklich das, was wir wollen. Halten wir also einen Moment inne und überlegen, was Jiki hier macht. Er baut eine Box mit der Beschriftung `position`. Er legt 10 hinein. Dann lässt er die `plant`-Maschine acht Mal laufen. Jedes Mal holt er den Wert aus der `position`-Box. Es ist immer 10, und jedes Mal steckt er dieselbe 10 hinein.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki nimmt die `position`-Box aus dem Regal und gibt ihren Wert 10 in die `plant`-Maschine"
  width="400"
  height="400"
/>

Wir brauchen also eine Möglichkeit, jedes Mal ein Stück weiterzurücken. Nachdem wir eine Blume gepflanzt haben, wollen wir Jiki sagen, dass er die Position um 10 weiterrücken soll, damit wir die nächste Blume pflanzen können.

Vergessen wir für einen Moment den Code: Wie sieht das logisch aus? Wenn ich zu dir sage: „Pflanze die erste Blume bei 10, dann die nächste bei 20, dann die nächste bei 30“, woher weiß dein Gehirn, dass die nächste bei 40 und die übernächste bei 50 gepflanzt werden soll?

Dein Gehirn behält die aktuelle Zahl im Auge, addiert 10 dazu und aktualisiert dann diese Zahl in deinem Kopf.

Und genau dasselbe können wir im Code machen. Dazu sagen wir: „Aktualisiere (_update_ auf Englisch) die `position`-Box, sodass sie den aktuellen Wert plus 10 enthält.“

Wenn Jiki das sieht, holt er die aktuelle Zahl aus der `position`-Box, addiert 10 dazu, rechnet das also aus, indem er beide zusammenzählt, und legt das Ergebnis zurück in die Box, damit es beim nächsten Mal bereitliegt.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki holt 10 aus der `position`-Box, addiert 10 und kommt auf 20, und legt 20 zurück in die Box"
  width="427"
  height="400"
/>

Wenn wir das also in unser Programm einbauen, sodass wir jetzt sagen: „Setze den Anfangswert der Position auf 10“, dann acht Mal eine Blume an der Position pflanzen und danach die Position um 10 größer machen als vorher, dann funktioniert unser Code und wir bekommen acht Blumen mit Abstand zueinander.

Beachte, dass dort kein `let` (Variable anlegen) steht, wenn wir die Variable aktualisieren. Das ist wirklich wichtig. Wenn Jiki `let` sieht, erstellt er eine neue Box. Hier wollen wir aber keine neue Box erstellen. Wir wollen ändern, was in der Box steckt, die wir schon haben.

Beachte auch, dass wir die Box nur einmal außerhalb der Schleife erstellen. Das ist wichtig. Erstelle die Box einmal am Anfang und aktualisiere sie dann bei jedem Durchlauf der Schleife.

Wir können ändern, was in Boxen steckt, und diese Möglichkeit nutzen, um etwas im Auge zu behalten, das sich mit der Zeit ändert. Dieses Muster wirst du ständig verwenden: eine Position verfolgen, zählen, wie oft etwas passiert ist, den Punktestand im Blick behalten. Immer wenn du dir etwas merken musst, das sich ändert, während dein Programm läuft, machst du es genau so.
