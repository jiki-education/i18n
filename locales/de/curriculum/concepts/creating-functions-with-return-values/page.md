---
title: "Funktionen geben Werte zurück"
description: "Mit dem Schlüsselwort `return` gibst du deinen eigenen Funktionen eine Ausgaberutsche, die einen Wert an den Aufrufer zurückgibt."
en_md5: 51d31f709a7051c29b499a31ad68555e
---

Du weißt jetzt, wie du Funktionen mit und ohne Eingabewerte erstellst. Jetzt fehlt nur noch eine letzte Sache, und dann bist du ein Profi im Funktionenbauen. Und zwar: wie du deinen Funktionen eine Ausgaberutsche gibst.

Du hast schon viele Funktionen benutzt, die etwas zurückgeben. `isAlienAbove` (ob ein Alien darüber ist) gibt dir wahr oder falsch zurück. `Math.randomInt(1, 10)` (Math heißt Mathematik, randomInt bedeutet zufällige Ganzzahl) gibt dir eine zufällige Zahl zurück.

Wenn Jiki diese Funktionen benutzt, springt etwas aus der Ausgaberutsche, und das kann er dann weiterverwenden.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/output-chute.webp"
  alt="Jiki fängt einen Wert auf, der aus der Ausgaberutsche einer Maschine springt"
  width="500"
  height="312"
/>

Dafür brauchen wir ein weiteres neues Schlüsselwort, nämlich `return`.

Das Schlüsselwort `return` sagt Mini Jiki, dass er etwas aus der Ausgaberutsche herausschieben soll.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/return-keyword-push.webp"
  alt="Mini Jiki schiebt in der Maschine den Wert 42 durch die Ausgaberutsche nach draußen"
  width="500"
  height="335"
/>

Bauen wir also eine Funktion und nennen sie `meaningOfLife` (Bedeutung des Lebens). Die Aufgabe dieser Funktion ist es, immer nur die Zahl `42` zurückzugeben. Sie hat keine Eingabewerte. Wir schreiben sie so:

```javascript
function meaningOfLife() {
  return 42
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/meaning-of-life-42.webp"
  alt="Die meaningOfLife-Maschine schickt die Zahl 42 aus ihrer Ausgaberutsche"
  width="500"
  height="323"
/>

Überall dort, wo wir `meaningOfLife()` im Code verwenden, bekommen wir die Zahl `42` zurück und können sie wie jeden anderen Wert benutzen. Wir können sie mit `let` in eine Box legen, sie als Eingabewert an eine andere Funktion übergeben oder sie in einer if-Anweisung vergleichen.

Funktionen mit Rückgabewert können auch Eingabewerte annehmen. Du könntest eine Funktion `ageBracket(age)` (Altersgruppe) schreiben, die `"Sorry, too young"` zurückgibt, wenn `age` unter 18 ist, und sonst `"Welcome"`. Wer sie aufruft, bekommt genau den String zurück, den die Funktion zurückgegeben hat.

```javascript
function ageBracket(age) {
  if (age >= 18) {
    return "Welcome"
  }
  return "Sorry, too young"
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-return-values/age-input.webp"
  alt="Ein Alterswert wird in den Trichter der Maschine geworfen, damit sie entscheiden kann, was sie zurückgibt"
  width="487"
  height="400"
/>

Im Kern funktioniert Programmieren genau so. Wir bauen viele dieser kleinen Bausteine und setzen sie dann zu Programmen zusammen.
