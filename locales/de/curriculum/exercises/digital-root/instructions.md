---
title: "Digitale Wurzel"
description: "Reduziere eine Zahl auf eine einzelne Ziffer, indem du wiederholt ihre Ziffern addierst."
en_md5: 9847d9ea8c4a86ad65869e4f7b4c718e
---

Die digitale Wurzel (_digital root_ auf Englisch) einer Zahl ist das, was dabei herauskommt, wenn du ihre Ziffern so lange addierst, bis nur noch eine einzelne Ziffer übrig bleibt.

Bleiben nach dem einmaligen Addieren der Ziffern immer noch mehr als eine Ziffer übrig, addierst du die Ziffern von _diesem_ Ergebnis und machst so lange weiter, bis nur noch eine einzelne Ziffer übrig bleibt.

Um zum Beispiel die digitale Wurzel von `942` zu finden:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Die digitale Wurzel von `942` ist also `6`.

Eine Zahl, die bereits aus einer einzelnen Ziffer besteht (wie `7`), ist ihre eigene digitale Wurzel.

Schreibe eine Funktion namens `digitalRoot`, die eine Zahl entgegennimmt und ihre digitale Wurzel zurückgibt.

### Die Funktion `String()`

In den letzten paar Lektionen hattest du Zugriff auf die Funktion `Number(str)`, die einen String in eine Zahl umwandelt.

Das geht auch andersherum: Mit der Funktion `String(num)` machst du aus einer Zahl einen String. Zum Beispiel:

```js
String(147) === "147"
```

Auch hier steht am Anfang wieder ein Großbuchstabe, und auch hier musst du dir noch keine Gedanken darüber machen, warum das so ist!

### Das Gelernte in die Praxis umsetzen

Es gibt zwar viele Wege, diese Übung zu lösen, aber die Lösung, auf die du kommen sollst, verwendet eine `while`-Schleife.

Viel Spaß!
