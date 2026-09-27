---
title: "Das Schlüsselwort `break`"
description: "Mit dem Schlüsselwort `break` im Schleifenblock eine Schleife sofort verlassen und mit dem Code danach weitermachen."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Das Schlüsselwort `break` kannst du überall im Schleifenblock jeder Schleife verwenden.

Der Teil zwischen den geschweiften Klammern, das ist der Schleifenblock. Und wenn Jiki ihn sieht, verlässt er die Schleife sofort und macht mit dem Code weiter, der unter der Schleife steht.

Wenn wir also die Vorgabe haben, diese Schleife 50-mal laufen zu lassen, aber anhalten wollen, sobald der Nutzer fünfmal geschossen hat, könnten wir oben eine for-Schleife haben, die bis 50 hochzählt.

Aber dann könnten wir mitten in der Schleife eine Bedingung haben, die prüft, ob der Nutzer fünfmal geschossen hat, und falls ja, verlassen wir mit break die Schleife.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // Schleife verlassen
  }
}
```
