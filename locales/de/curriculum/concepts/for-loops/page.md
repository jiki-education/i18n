---
title: "`for`-Schleifen verstehen"
description: "Eine Schleife mit drei Teilen (einem Initialisierer, einer Bedingung und einer Erhöhung), die dir die volle Kontrolle über die Iteration gibt."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Du erinnerst dich vielleicht, dass es die repeat-Schleife in JavaScript eigentlich gar nicht gibt. Sie ist nur etwas, das wir hinzugefügt haben, um dir den Einstieg ein wenig leichter zu machen.

Was benutzen wir also stattdessen? Wir benutzen eine ganz normale `for`-Schleife, und die sieht so aus.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Du kannst dir sicher vorstellen, warum dich das am ersten Tag ein wenig eingeschüchtert hätte.

Aber inzwischen hast du alles Wissen, das du brauchst, um dich damit vertraut zu machen. Also nehmen wir sie auseinander.

Eine for-Schleife hat drei Bestandteile: einen Initialisierer (_initializer_ auf Englisch), eine Bedingung und eine Erhöhung (_increment_ auf Englisch).

Der Initialisierer, dieses `let i = 0`, läuft ganz am Anfang der Schleife. Er läuft nur ein einziges Mal, und hier erstellt er eine Box namens `i`, die auf null gesetzt wird. `i` ist einfach ein Buchstabe, mit dem wir einen Wert verfolgen, während die Schleife läuft. Traditionell nimmt man dafür `i` oder `x`.

Der nächste Teil, die Bedingung, läuft jedes Mal vor einem neuen Durchlauf der Schleife.

Ist die Bedingung wahr, führen wir die Schleife noch einmal aus.

Wenn nicht, dann nicht.

Und ganz am Ende kommt die Erhöhung, das `i++`.

`i++` bedeutet einfach dasselbe wie `i = i + 1`. Es ist nur eine Kurzform, eine Art, `i` jedes Mal um eins zu erhöhen.

In diesem Beispiel setzen wir `i` also auf null. Wir prüfen, ob `i` kleiner als zwei ist. Das ist es, also führen wir die Schleife aus.

Und am Ende erhöhen wir `i` um eins, `i` wird also eins. Null plus eins ist eins.

Dann geht es wieder von vorn los. Wir prüfen, ob eins kleiner als zwei ist.

Das ist es, also führen wir die Schleife aus. Und am Ende erhöhen wir `i` wieder. Jetzt ist es zwei, eins plus eins ergibt zwei.

```javascript
i = 0
i < 2 // true - wir führen die Schleife aus
...   // Hier passiert der Durchlauf
i = i + 1 // 1

i < 2 // true - wir führen die Schleife aus
...   // Hier passiert der Durchlauf
i = i + 1 // 2

i < 2 // false - wir verlassen die Schleife
```

Und dann kommt der dritte Anlauf. Diesmal prüfen wir, ob zwei kleiner als zwei ist. Das ist es nicht, also führen wir die Schleife nicht aus, und damit sind wir sogar ganz fertig mit ihr. Wir machen einfach mit dem Code darunter weiter. Wir haben die Schleife also zweimal ausgeführt, und das ist gut zu wissen: Solange wir bei null anfangen und die Bedingung `i < n` lautet, gibt die Zahl `n` an, wie oft die Schleife läuft.

Das ist also dasselbe, wie repeat two zu schreiben.

Schwer ist das nicht, aber es ist deutlich umständlicher, als einfach repeat two zu schreiben. Der Vorteil einer for-Schleife ist, dass du an diesen drei Stellen alles Mögliche tun kannst. Du kannst bei einer anderen Zahl anfangen, in größeren Schritten hochzählen, herunterzählen oder eine Bedingung verwenden, die von etwas anderem abhängt als von einem einfachen Zähler. Genau diese Flexibilität macht for-Schleifen zum Arbeitspferd von JavaScript.
