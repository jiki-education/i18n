---
title: "Typumwandlung"
description: "Einen Wert von einem Typ in einen anderen umwandeln, zum Beispiel einen String aus Ziffern mit `Number()` in eine Zahl oder eine Zahl mit `String()` in einen String."
en_md5: 8d85e3d274a6cdfdb74bd0488b685f18
---

Jeder Wert in unseren Programmen hat einen Typ. `"7"` ist ein String und `7` ist eine Zahl. Sie sehen vielleicht fast identisch aus, aber Jiki behandelt sie ganz unterschiedlich. Du kannst den String `"7"` nicht zu der Zahl `3` addieren und erwarten, dass `10` dabei herauskommt, denn das eine ist Text und das andere ein Zahlenwert.

Ganz oft müssen wir einen Wert von einem Typ in einen anderen umwandeln. Das nennt man Typumwandlung (_type conversion_ auf Englisch), und es gibt zwei Umwandlungen, auf die du ständig zurückgreifen wirst.

### Einen String in eine Zahl umwandeln

Wenn du Zeichen aus einem String liest, ist jedes Zeichen selbst ein String, auch wenn es wie eine Ziffer aussieht. Bevor du damit rechnen kannst, musst du es in eine echte Zahl umwandeln. Das machen wir mit `Number()`.

```javascript
Number("7")
// 7

Number("42")
// 42
```

Sobald du eine echte Zahl hast, kannst du sie addieren, multiplizieren und alles Weitere machen.

```javascript
let digit = Number("7")
let doubled = digit * 2
// 14
```

Wenn du `Number()` etwas übergibst, das keine gültige Zahl ist, wie `Number("cat")`, bekommst du gar keine Zahl zurück. Deshalb solltest du darauf achten, ihm nur Strings zu geben, die auch wirklich aus Ziffern bestehen.

### Eine Zahl in einen String umwandeln

Die umgekehrte Richtung ist genauso praktisch. Manchmal hast du eine Zahl und willst sie als Text behandeln, vielleicht um sie an einen anderen String anzuhängen oder um dir ihre einzelnen Ziffern anzusehen. Das machen wir mit `String()`, dem Spiegelbild von `Number()`.

```javascript
String(42)
// "42"

let count = 7
String(count)
// "7"
```

Jetzt, wo es ein String ist, kannst du alle üblichen String-Tools darauf anwenden, zum Beispiel es Zeichen für Zeichen lesen oder seine Länge prüfen.
