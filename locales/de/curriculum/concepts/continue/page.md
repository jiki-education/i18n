---
title: "Das Schlüsselwort `continue`"
description: "Mit dem Schlüsselwort `continue` in einer Schleife den Rest dieser Iteration überspringen und direkt zur nächsten springen."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Manchmal wollen wir eine bestimmte Iteration einer Schleife überspringen, statt aus der Schleife auszubrechen. Stell dir vor, wir wollen nur bei ungeraden Zahlen etwas tun.

Wir wollen sagen können: Wenn `i` (der Zähler) ungerade ist, dann läuft die Schleife dieses Mal nicht.

Aber wir wollen nicht die ganze Schleife verlassen. Wir wollen nur diese eine Iteration überspringen und dann die nächste anschauen.

Und dafür gibt es ein weiteres Schlüsselwort: `continue`.

Wenn Jiki `continue` sieht, springt er einfach zurück an den Anfang der Schleife, zur nächsten Iteration. Wenn er in einer for-of-Schleife `continue` sieht, geht er direkt weiter zum nächsten Element in der Liste.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Überspringt den Rest der Schleife für "something"
  }
  // Rest der Schleife...
}
```

Bei einer for-Schleife erhöht er mit `i++` den Zähler und startet dann die nächste Iteration.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Überspringt den Rest der Schleife für gerade Zahlen
  }
  // Rest der Schleife...
}
```
