---
title: "Funktionen, die etwas zurückgeben"
description: "Einen Wert auffangen, der aus der Ausgaberutsche einer Funktion herausspringt, und ihn in deinem Code verwenden."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Bisher haben wir uns Funktionen angeschaut, die etwas in der Welt bewirken. Die Funktion `circle` (einen Kreis zeichnen) zeichnet also einen Kreis. Die Funktion `move` (bewegen) bewegt deine Figur. Aber manche Funktionen arbeiten anders. Statt etwas nach außen zu tun, geben sie dir etwas zurück, das du in deinem Code verwenden kannst. Wenn eine Funktion etwas an Jiki zurückgibt, damit er es im Code verwenden kann, sagen wir, dass diese Funktion etwas zurückgibt (_returning_ auf Englisch). Sie gibt etwas an Jiki zurück. Du kannst dir diese Maschinen so vorstellen, dass sie eine Ausgaberutsche haben. Wir haben schon unsere Trichter, in die wir Dinge hineinwerfen, aber es gibt auch einen einzelnen Ausgang oder eine Rutsche, aus der etwas wieder herauskommen kann. Wenn Jiki den Knopf an der Maschine drückt, surrt die Maschine los, und am Ende springt etwas aus dieser Rutsche heraus. Es könnte eine Zahl sein. Es könnte ein String sein. Etwas, das Jiki auffangen und verwenden kann.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Eine Maschine mit einer Ausgaberutsche an der Seite, bereit, einen Wert zurück an Jiki zu schicken"
  width="500"
  height="317"
/>

Die meisten Funktionen geben etwas zurück, wahrscheinlich 95 % von ihnen. Vielleicht rechnen sie etwas für dich aus und geben dir den Wert zurück, oder sie kleben ein paar Strings zusammen und geben dir den entstandenen String. Oder sie geben dir jedes Mal die aktuelle Uhrzeit zurück, wenn du diese Maschine startest. Schauen wir uns den letzten Fall an. Sagen wir, wir haben eine Funktion namens `getCurrentTime` (die aktuelle Uhrzeit holen). Jedes Mal, wenn Jiki die Maschine startet, rutscht ein Blatt Papier aus der Ausgaberutsche, auf dem die Uhrzeit steht, vielleicht 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Die getCurrentTime-Maschine, aus deren Ausgaberutsche ein Blatt Papier mit der Aufschrift 14:35 rutscht"
  width="500"
  height="312"
/>

Und dann können wir diesen zurückgegebenen Wert mit `let` in eine Box legen:

```javascript
let time = getCurrentTime()
```

Jiki startet die Maschine, holt die aktuelle Uhrzeit aus der Rutsche und legt sie in eine Box namens `time` ab.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki legt das Papier mit der 14:35 aus der Rutsche in eine Box mit der Aufschrift time"
  width="372"
  height="400"
/>

Jetzt ist es wichtig zu verstehen, dass das Blatt Papier, das Jiki in die Box legt, in diesem Moment festgelegt ist. Auch wenn sich die tatsächliche Uhrzeit ändert, während dein Programm läuft, liegt in der Box weiterhin dieses Blatt Papier mit der Aufschrift 14:35. Sobald etwas in der Box ist, ist es dort fest. Es ändert sich nicht auf magische Weise. Wenn wir die aktuelle Uhrzeit später erneut in die Box legen wollen, müssen wir unsere Funktion `getCurrentTime` wieder verwenden, um sie zu holen.

Die meisten Funktionen, die etwas zurückgeben, haben auch Eingabewerte. Zum Beispiel könnte es eine Funktion `join` (verbinden) geben, die zwei Strings als Eingabewerte nimmt und sie mit einem Leerzeichen dazwischen zurückgibt. Wenn wir also eine `join`-Maschine mit `"Hello"` und `"World"` als Eingabewerte verwenden, kommt aus der Rutsche ein einzelner String, auf dem `"Hello World"` steht.

```javascript
join("Hello", "World"); // "Hello World"
```
