---
title: "Scrabble-Punktzahl"
description: "Berechne die Punktzahl für ein Scrabble-Wort."
en_md5: 69e7c6f8e0aaacd0f5ea8ed34929a805
---

Scrabble ist ein Wortspiel, bei dem die Spieler Buchstabenplättchen auf ein Brett legen, um Wörter zu bilden. Jeder Buchstabe hat einen Wert, und die Punktzahl eines Wortes ist die Summe der Werte seiner Buchstaben.

Deine Aufgabe ist es, die Scrabble-Punktzahl eines Wortes zu berechnen, indem du die Werte seiner Buchstaben addierst.

Die Buchstaben haben folgende Werte:

- A, E, I, O, U, L, N, R, S, T = 1 Punkt
- D, G = 2 Punkte
- B, C, M, P = 3 Punkte
- F, H, V, W, Y = 4 Punkte
- K = 5 Punkte
- J, X = 8 Punkte
- Q, Z = 10 Punkte

Zum Beispiel ist das Wort „cabbage“ 14 Punkte wert: 3 + 1 + 3 + 3 + 1 + 2 + 1.

Du musst zwei Funktionen erstellen:

1. `letterValues()` (Buchstabenwerte) – Gibt ein Wörterbuch (_dictionary_ auf Englisch) zurück, in dem jeder Schlüssel (_key_ auf Englisch) ein Großbuchstabe ist und jeder Wert der Punktwert des jeweiligen Buchstabens ist. Wir haben dir eine Liste von Buchstabengruppen und ihren Werten als Ausgangspunkt gegeben. Wandle das in ein Wörterbuch um, statt es von Hand abzutippen.

2. `scrabbleScore(word)` (Scrabble-Punktzahl) – Nimmt ein Wort entgegen und gibt seine gesamte Scrabble-Punktzahl zurück, wobei es das Wörterbuch mit den Buchstabenwerten verwendet.
