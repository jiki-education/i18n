---
title: "Der `&&`-Operator (Und)"
description: "Zwei Bedingungen mit `&&` kombinieren, sodass die ganze Bedingung nur wahr ist, wenn beide Teile wahr sind."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Wenn ich dich bitten würde, die Tür nur zu öffnen, wenn jemand über 20 Jahre alt ist, wüsstest du wahrscheinlich, was zu tun ist. Aber was, wenn du prüfen müsstest, ob jemand über 20 ist _und_ dabei das richtige Outfit trägt? Du musst also zwei verschiedene Bedingungen auf einmal prüfen. Wie würdest du das machen?

Vielleicht nimmst du eine verschachtelte (_nested_ auf Englisch) if-Anweisung, ähnlich wie wir es vorher mit verschachtelten Schleifen hatten. Du könntest also sagen: Wenn `age` größer als `20` ist, gehen wir in diesen Block, und dann ein weiteres if, wenn `outfit` gleich `"disco"` ist, und noch eine geschweifte Klammer und ein neuer Block. Das würde funktionieren, aber es wird schnell unübersichtlich, vor allem, wenn du viele solche Bedingungen brauchst.

Zum Glück gibt es einen einfacheren Weg: Bedingungen, die aus mehreren Teilen bestehen. Statt nur eine Sache in der Bedingung zu prüfen, können wir zwei, drei oder mehr Sachen prüfen. Und dafür brauchen wir das `and`-Schlüsselwort. Nun, leider ist das and-Schlüsselwort in JavaScript nicht wirklich das Wort and, wie es in manchen Sprachen der Fall ist. Stattdessen musst du zwei Und-Zeichen (_ampersands_ auf Englisch) nebeneinander schreiben. Das musst du dir einfach merken. Es ist nervig, aber so ist es nun mal, und du wirst dich daran gewöhnen.

Damit können wir also eine komplexere Bedingung bauen. Wir können sagen: Wenn `age` größer als `20` ist und das `outfit` `"disco"` ist, dann machen wir weiter. Wenn das `age` kleiner als `20` ist oder das `outfit` nicht `"disco"` ist, dann ist die ganze Aussage, die ganze Bedingung falsch. Wenn du dich schon mal mit Logik beschäftigt hast, vielleicht mal Elektronik gebaut oder fortgeschrittenere Mathematik gemacht hast, dann wird dir das ganz natürlich vorkommen. Wenn nicht, hast du es schnell raus.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Eine Sache bringt bei and und or viele Leute durcheinander: Jede Seite des und/oder (_and/or_ auf Englisch) muss ein vollständiger Vergleich sein. Selbst wenn du auf beiden Seiten dieselbe Variable vergleichst, musst du sie wiederholen. Du kannst nicht `if age is greater than 13 and less than 20` schreiben. Du musst `if age is greater than 13 and age is less than 20` schreiben. Beide Seiten müssen vollständige Vergleiche sein.

```javascript
if (age > 13 && age < 20)
```
