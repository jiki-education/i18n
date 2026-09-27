---
title: "ISBN-Prüfer"
description: "Prüfe, ob die ISBN-Nummer eines Buchs gültig ist."
en_md5: 1f50053213b8649f126851f264174e53
---

Jedes Buch hat eine ISBN, eine 10-stellige Zahl, die es eindeutig identifiziert. Jede ISBN ist eindeutig und folgt einem bestimmten Format. Außerdem gibt es ein formales Prüfverfahren, mit dem man feststellt, ob ein String eine ISBN ist. Genau dieses Verfahren baust du in dieser Übung.

ISBNs enthalten normalerweise Bindestriche und sehen so aus: `3-598-21508-8`

(Es gibt auch 13-stellige ISBNs, aber die kannst du für diese Übung getrost ignorieren!)

### Eine ISBN überprüfen

Um eine ISBN zu überprüfen, gehen wir so vor:

- Wir fangen links an und addieren jede Ziffer, multipliziert mit einem Gewicht, das von 10 bis 1 herunterzählt.
- Dann bilden wir den Rest, der bleibt, wenn wir diese Summe durch 11 teilen.
- Wir prüfen, ob dieser Rest null ist.

Für die ISBN `3-598-21508-8` würden wir zum Beispiel prüfen, ob gilt:

```
(3*10 + 5*9 + 9*8 + 8*7 + 2*6 + 1*5 + 5*4 + 0*3 + 8*2 + 8*1) % 11 === 0
```

Da das Ergebnis 0 ist, ist damit bewiesen, dass unsere ISBN gültig ist.

Noch ein paar wichtige Hinweise:

- Manchmal endet eine ISBN mit einem X. In dem Fall steht das X für `10`. Steht das X an einer anderen Stelle, ist die ISBN ungültig.
- ISBNs können mit oder ohne Bindestriche geschrieben werden.
- Jedes andere Zeichen macht die ISBN ungültig.

### Deine Aufgabe

Schreibe eine Funktion namens `isValidIsbn(isbn)` (prüft, ob eine ISBN gültig ist), die einen ISBN-String entgegennimmt und `true` zurückgibt, wenn die ISBN gültig ist, und `false`, wenn nicht.

### Die Funktion Number(...)

Eine Sache haben wir noch nicht behandelt, die du aber kennen musst: die Funktion `Number(str)`. Sie nimmt einen String und gibt ihn als Zahl zurück. Wenn du also `Number("1234")` schreibst, bekommst du `1234`. Sie ist etwas seltsam, weil sie mit einem Großbuchstaben beginnt. Mach dir darüber erst mal keine Gedanken, wir erklären viel später, warum das so ist.

Mehr dazu erfährst du auf der <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">Konzeptseite Typumwandlung</a>.

### Das Gelernte anwenden

Wie in der letzten Übung: Es gibt viele gültige Wege, diese Übung zu lösen, aber die Lösung, die wir von dir erwarten, verwendet eine `continue`-Anweisung.

Das Bonus-Szenario fordert dich heraus, das Ganze in 22 Zeilen Code zu lösen. Es gibt kürzere Lösungen, aber wenn du bei 22 Zeilen bist, hast du gut optimiert.

Viel Spaß!
