---
title: "Alphanumerisch"
description: "Schreibe Funktionen, die Text als Buchstaben, Zahlen oder beides einordnen."
en_md5: ba81d7fc98b45703f0c9bba133ae8058
---

In dieser Übung ist deine Aufgabe, Funktionen zu schreiben, die prüfen, ob ein String Buchstaben und/oder Zahlen enthält.

Dafür schreibst du drei Hilfsfunktionen:

- `isAlpha(string)` (enthält nur Buchstaben) prüft, ob ein String ausschließlich aus ASCII-Buchstaben besteht (z. B. „A“, „a“, „Hello“)
- `isNumeric(string)` (enthält nur Ziffern) prüft, ob ein String ausschließlich aus Ziffern besteht (z. B. „0“, „1“, „456“)
- `isAlphanumeric(string)` (enthält nur Buchstaben oder Ziffern) prüft, ob ein String ausschließlich aus ASCII-Buchstaben oder Ziffern besteht (z. B. „Hello“, „42“, „Hello42“)

Bei allen anderen Symbolen (z. B. „! ?“) oder Nicht-ASCII-Zeichen (z. B. „じき“, „正直“) sollten alle drei Funktionen `false` zurückgeben.

Dann schreibst du eine Funktion `whatAmI(string)` (was bin ich?), die diese Hilfsfunktionen nutzt, um einen String einzuordnen:

- Strings, die nur Buchstaben enthalten, sollten `"Alpha"` zurückgeben
- Strings, die nur Zahlen enthalten, sollten `"Numeric"` zurückgeben
- Strings, die sowohl Buchstaben als auch Zahlen enthalten, sollten `"Alphanumeric"` zurückgeben
- Alles andere sollte `"Unknown"` zurückgeben

### Bonusaufgaben

Es gibt viele gültige Wege, diese Übung zu lösen. Vielleicht probierst du es mal mit einer `continue`-Anweisung, aber es gibt noch viele andere gute Lösungen.

Außerdem gibt es eine Bonusaufgabe, die dich herausfordert, das Ganze in höchstens 42 Codezeilen zu lösen. Dieses Ziel ist nicht unbedingt die produktionsreifste Lösung. Ein paar zusätzliche Zeilen ergeben wahrscheinlich eine schönere Lösung, und es gibt auch kürzere Lösungen. Aber es ist ein gutes Ziel, um deine Fähigkeiten auszureizen.

Viel Spaß!
