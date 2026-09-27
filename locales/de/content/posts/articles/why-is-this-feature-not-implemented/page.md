---
title: "Warum ist dieses Feature nicht implementiert?"
excerpt: "Erfahre, warum bestimmte Sprachfeatures aus Jiki ausgeschlossen sind und wie dir das beim Lernen hilft."
tags: ["exercises"]
seo:
  description: "Verstehen, warum Jiki bestimmte JavaScript- und Python-Features ausschließt, damit Anfänger besser lernen können"
  keywords: ["jiki", "javascript", "python", "ausgeschlossene features", "foot-guns", "lernen"]
en_md5: 54efd50d3331fa1e315aed1728a6f859
---

Hast du versucht, deinen Code auszuführen, und dann eine Meldung bekommen, dass etwas in dieser Version der Sprache nicht verfügbar ist? Dann lies weiter, um zu verstehen, was los ist!

Wenn du eine Meldung bekommen hast, die „Dieses Feature ist für dich noch nicht verfügbar" lautet, ist das eine andere Situation. Lies stattdessen **[Wann wird dieses Feature freigeschaltet?](/articles/when-will-this-feature-unlock)**.

## Einleitung

Du hast ein Schlüsselwort oder ein Konzept verwendet, das unsere Version der Sprache nicht unterstützt. Keine Sorge, das ist kein Bug!

Die Versionen von JavaScript und Python, die du in Jiki verwendest, haben wir **speziell von uns entwickelt**, damit du besser lernen kannst. Wir haben bestimmte Features bewusst entfernt, damit du nicht versehentlich auf komplexe oder verwirrende Teile der Sprache stößt, bevor du bereit dafür bist.

## Warum werden Features ausgeschlossen?

Programmiersprachen sind für **Profis** gemacht. Sie enthalten fortgeschrittene Features, mit denen erfahrene Entwickler schneller arbeiten, dazu historischen Ballast: Features, die man wahrscheinlich schon vor Jahren hätte entfernen sollen, die aber bleiben, damit alte Systeme weiter funktionieren.

Beim Lernen stiften diese Features nur Verwirrung. Dadurch, dass wir sie entfernen, kannst du dich in Jiki auf das Wesentliche konzentrieren: **lernen, wie ein Programmierer zu denken**.

### Footguns

Manche Features nennen wir **„Footguns"**: Dinge, mit denen du dir versehentlich selbst in den Fuß schießen kannst. Das sind:

- **Wirklich problematisch**, selbst Profis sollten sie besser meiden
- **Verwirrende Randfälle**, die von den Kernkonzepten ablenken
- **Historischer Ballast**, der nur aus Gründen der Abwärtskompatibilität existiert

Diese Features sind dauerhaft aus Jiki ausgeschlossen, weil die Verwirrung, die sie stiften, einfach nicht lohnt.

### Fortgeschrittene Features

Andere Features sind ausgeschlossen, weil sie **zu fortgeschritten** für deinen aktuellen Stand sind. Das sind keine schlechten Features, sie helfen dir nur nicht, wenn du gerade die Grundlagen lernst.

Wenn du in Jiki weiterkommst, werden einige dieser Features freigeschaltet. Konzentriere dich aber jetzt erst einmal darauf, die Grundlagen zu meistern.

## Die Details

Du musst das hier nicht lesen, außer du willst wirklich wissen, was unter der Haube passiert und welche Entscheidungen wir getroffen haben.

### JavaScript

| Feature                                                    | Warum es ausgeschlossen ist                                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `var`                                                      | Verwende stattdessen `let` oder `const`. `var` hat verwirrende Regeln für den Gültigkeitsbereich, die selbst bei erfahrenen Entwicklern zu Bugs führen. |
| `with`                                                     | Veraltet und verwirrend. Erzeugt mehrdeutigen Code, der schwer nachzuvollziehen ist.                                 |
| `debugger`                                                 | Ein Entwicklungswerkzeug, das du zum Lernen nicht brauchst.                                                          |
| `void`                                                     | Selten nützlich und für Anfänger verwirrend.                                                                         |
| `yield`                                                    | Fortgeschrittenes Generator-Feature. Generatoren lernst du später auf deinem Weg kennen.                             |
| `delete`                                                   | Kann bei Arrays und Objekten zu verwirrendem Verhalten führen.                                                       |
| `import` / `export`                                        | Features des Modulsystems. Jiki geht mit Modulen anders um, um alles einfach zu halten.                              |
| Bitweise Operatoren (`&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`) | Werden sehr selten gebraucht und sind beim Lernen verwirrend. Sie sind für Bitmanipulation auf niedriger Ebene gedacht. |

### Python

| Feature    | Warum es ausgeschlossen ist                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `global`   | Wenn du globale Variablen aus einer Funktion heraus änderst, wird der Code schnell verwirrend. Lerne stattdessen, Werte als Parameter zu übergeben. |
| `nonlocal` | Fortgeschrittenes Feature für den Gültigkeitsbereich verschachtelter Funktionen. Beim Lernen der Grundlagen nicht nötig. |
| `assert`   | Ein Debug-Werkzeug, das in der Produktion deaktiviert werden kann. Lerne stattdessen richtige Fehlerbehandlung.       |

## Was, wenn ich ein Feature brauche?

Jede Übung in Jiki ist so gestaltet, dass du sie mit den Features lösen kannst, die du bis dahin gelernt hast. Wenn du an eine Grenze stößt, gibt es meist einen besseren Weg, dein Problem mit den verfügbaren Features zu lösen. Das gehört zum Lernen dazu: herauszufinden, wie du innerhalb von Grenzen arbeitest.

Wenn du wirklich der Meinung bist, dass ein Feature auf deinem Stand verfügbar sein sollte, sag uns Bescheid! Wir verfeinern laufend, was enthalten ist, und richten uns dabei nach eurem Feedback.
