---
title: "Methoden"
description: 'Funktionen, die zu einem Wert gehören und mit Punktnotation aufgerufen werden, wie `"Jeremy".includes("e")` oder `"Jeremy".toUpperCase()`.'
en_md5: 37c097a81459cd2ff4ae684559bd4311
---

Bisher haben wir Strings und Zahlen als ziemlich statische Dinge betrachtet.

Und das sind sie auch, aber in ihnen steckt jede Menge Funktionalität, die Jiki nutzen kann.

Und im weiteren Verlauf lernen wir diese Funktionalität kennen, also diese Fähigkeiten, die sie haben und die dir das Leben viel leichter machen.

Wir schauen uns zwei Arten von Fähigkeiten an: Eigenschaften (_properties_ auf Englisch) und Methoden (_methods_ auf Englisch).

Methoden sind Funktionen, die zum String gehören.

Statt dass wir eine Funktion schreiben, in die wir einen String als Eingabewert hineingeben, können wir eine Methode direkt auf dem String verwenden.

Erinnerst du dich zum Beispiel an eine Funktion, mit der du prüfst, ob ein String einen bestimmten Buchstaben enthält? Strings haben tatsächlich eine Methode namens `includes` (enthält), die genau das macht, und wir können sie mit derselben Punktnotation verwenden, die du schon bei den Eigenschaften gesehen hast.

Der Unterschied zu Eigenschaften ist, dass wir sie wie Funktionen schreiben, mit zwei runden Klammern und Eingabewerten.

Wir können also schreiben:

```javascript
"Jeremy".includes("e") // true
```

Und wir bekommen `true` zurück, denn `"Jeremy"` enthält ein `"e"`.

<img
  class="concept-image"
  src="/static/images/concept-assets/methods/jiki-writing-jeremy.webp"
  alt="Jiki schreibt den String Jeremy auf ein Blatt Papier"
  width="359"
  height="400"
/>

Methoden unterscheiden sich von Eigenschaften, weil sie keine statischen Fakten sind. Sie sind tatsächlich Funktionen. Du kannst sie dir wie Funktionen vorstellen, die eine eingebaute Box mit dem String darin haben.

Wie sie funktionieren, ist erst einmal nicht wichtig. Du wirst sie so schnell noch nicht selbst bauen. Du musst nur wissen, dass du eine Methode verwendest, indem du einen Punkt setzt und dann die normale Funktionssyntax benutzt.

Eine Sache solltest du bei Strings wissen: Die Methoden ändern nichts innerhalb des Strings. Es gibt zum Beispiel eine Methode namens `toUpperCase` (in Großbuchstaben umwandeln), die den String mit allen Buchstaben in Großbuchstaben zurückgibt. Aber das ändert den ursprünglichen String nicht. Der enthält weiterhin `"Jeremy"`, geschrieben mit nur einem großen J. Stattdessen erstellt Jiki einen neuen String, der komplett in Großbuchstaben ist.

```javascript
const name = "Jeremy"
const bigName = name.toUpperCase()

log(bigName) // "JEREMY"
log(name) // "Jeremy"
```
