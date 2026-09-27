---
title: "Luhn"
description: "Validiere Identifikationsnummern wie Kreditkartennummern mit der Luhn-Prüfsumme."
en_md5: 07b0aea3adc2353e50a26e5cbe5cd162
---

Wir haben uns gerade angesehen, wie man ISBN-Nummern von Büchern prüft. Es gibt noch eine weitere verbreitete Formel, mit der Zahlen in vielen Bereichen geprüft werden: die Luhn-Formel. Am bekanntesten ist sie dafür, Tippfehler in Kreditkartennummern zu erkennen.

### Die Luhn-Prüfung

Die Luhn-Prüfung besteht aus mehreren Schritten:

- Beginne bei der **äußersten rechten** Ziffer und arbeite dich nach links. Dabei **verdoppelst du jede zweite Ziffer**.
- Wenn das Verdoppeln einer Ziffer eine Zahl größer als 9 ergibt, ziehe 9 davon ab.
- Dann addiere alle Ziffern.
- Wenn die Summe ohne Rest durch 10 teilbar ist, ist die Zahl gültig.

Beispiel: Bei `"067"` gehen wir so vor:

```
0   6   7     // ursprüngliche Ziffern
0  12   7     // jede zweite Ziffer (von rechts) verdoppelt
0   3   7     // 12 ist größer als 9, also 9 abziehen → 3
       10     // Addiere die Ziffern
     true     // 10 ist durch 10 teilbar, also ist 067 gültig
```

### Deine Aufgabe

Schreibe eine Funktion namens `valid` (gültig), die einen String entgegennimmt und `true` zurückgibt, wenn er die Luhn-Prüfung besteht, und `false`, wenn nicht.

Die Zahlen werden als Strings übergeben und können zur besseren Lesbarkeit Leerzeichen enthalten (zum Beispiel `"4539 1488 0343 6467"`). Die Leerzeichen ignorierst du.

Ein paar wichtige Hinweise:

- Die Eingabe kann Leerzeichen enthalten. Ignoriere sie einfach.
- Wenn die Eingabe andere Zeichen enthält, gibst du false zurück.
- Strings der Länge 1 oder weniger (sobald die Leerzeichen entfernt sind) sind **nicht** gültig.

### Setze das Gelernte in die Praxis um

Es gibt zwar viele Wege, diese Übung zu lösen, aber die Lösung, die wir von dir erwarten, verwendet eine `for`-Schleife.

Außerdem brauchst du die Funktion <a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">`Number(str)`</a>, die wir in der letzten Übung eingeführt haben.

Viel Spaß!
