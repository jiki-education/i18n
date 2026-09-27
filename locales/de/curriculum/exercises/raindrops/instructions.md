---
title: "Regentropfenklänge"
description: "Verwandle Zahlen in Regentropfenklänge: Pling, Plang und Plong."
en_md5: 93b85e63b3d48e4e7f6d249592b367a1
---

Regentropfenklänge ist eine Variante der klassischen FizzBuzz-Challenge, die seit jeher in Programmier-Interviews verwendet wird.

Deine Aufgabe ist es, eine Zahl in die passenden Regentropfenklänge umzuwandeln.

Dazu schauen wir, wodurch die Zahl teilbar ist (zum Beispiel ist die Zahl 10 durch 1, 2, 5 und 10 teilbar. Die Zahl 12 ist durch 1, 2, 3, 4, 6 und 12 teilbar).

Wenn eine Zahl:

- durch 3 teilbar ist, füge „Pling“ zum Ergebnis hinzu.
- durch 5 teilbar ist, füge „Plang“ zum Ergebnis hinzu.
- durch 7 teilbar ist, füge „Plong“ zum Ergebnis hinzu.
- nicht durch 3, 5 oder 7 teilbar ist, ist das Ergebnis die Zahl als String.

Du musst eine Funktion namens `raindrops(num)` (Regentropfen) erstellen, die die Zahl als Eingabewert nimmt und ihre Regentropfenklänge zurückgibt.

Baue den Ergebnis-String mit Verkettung (_concatenation_ auf Englisch) (`+`) oder mit einem Template-String.

### Beispiele

- `raindrops(28)` gibt „Plong“ zurück, weil 28 durch 7 teilbar ist, aber nicht durch 3 oder 5.
- `raindrops(30)` gibt „PlingPlang“ zurück, weil 30 durch 3 und 5 teilbar ist, aber nicht durch 7.
- `raindrops(34)` gibt „34“ zurück, weil 34 nicht durch 3, 5 oder 7 teilbar ist.
