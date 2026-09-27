---
title: "Tic Tac Toe"
description: "Baue die vollständige Spiellogik für Tic Tac Toe."
en_md5: 69a7f49aa82a884b196987293d6fe763
---

Willkommen bei Tic Tac Toe, deinem ersten großen Projekt!

Diese Übung bringt alles zusammen, was du bisher gelernt hast: Variablen, Funktionen, Bedingungen, Schleifen, Listen und verschiedene Datentypen. Du wirst deutlich mehr als 100 Zeilen Code schreiben und etwas von Grund auf selbst bauen.

Das hier ist aufwendiger als die Übungen, die du bisher gelöst hast. Nimm dir Zeit, denk die Probleme sorgfältig durch und scheue dich nicht, um Hilfe zu bitten.

## Spielregeln

Bei Tic Tac Toe ist der eine Spieler `o` und der andere `x`. Abwechselnd setzt jeder sein Symbol in eines der Felder eines 3×3-Rasters.

Wenn du drei deiner Symbole in eine Reihe bringst (waagerecht, senkrecht oder diagonal), gewinnst du! Sind alle Felder belegt, ohne dass jemand drei in einer Reihe hat, geht das Spiel unentschieden aus.

## Anleitung

Erstelle eine Funktion `runGame(moves)` (das Spiel mit den Zügen laufen lassen).

Sie nimmt ein Argument `moves` entgegen: eine Liste von Koordinatenpaaren (z. B. bedeutet `[[1,2], [3,2]]`, dass der erste Spieler einen Stein in Spalte 2 von Zeile 1 setzt und der nächste Spieler danach in Spalte 2 von Zeile 3).

Die Funktion soll ein Spielbrett erstellen und dann jeden Stein aus der Liste `moves` setzen. Dabei soll sie prüfen, ob jeder Zug gültig ist, und bei Bedarf einen Gewinner verkünden.

Manchmal ist ein Zug auch ein `"?"` statt eines Koordinatenpaars. In diesen Fällen entscheidet dein Code, welcher Zug gespielt wird:

- Wenn du gewinnen kannst, gewinne.
- Wenn du den Sieg deines Gegners blockieren kannst, tu das.
- Ansonsten setze einen Stein an eine sinnvolle Stelle.

### Das Spielbrett

Zeichne ein Spielbrett, das aus Folgendem besteht:

1. Ein Rechteck ab (5,5) mit `width` (Breite) 90 und `height` (Höhe) 90: `rectangle(5, 5, 90, 90, "#ffffff")` (ein Rechteck zeichnen)
2. Rasterlinien, die das Spielbrett gleichmäßig in 9 Felder aufteilen.

Mit `changeStroke(1, "#333333")` (den Strich ändern) legst du die Strichbreite auf 1 und eine Farbe deiner Wahl fest.

### Die Spielsteine

Zeichne die Steine als Kreise und Kreuze (jeweils zwei Linien):

- Alle Steine sitzen in der Mitte ihres Feldes.
- Kreise haben einen Radius von 10.
- Kreuze bestehen aus zwei Linien, die sich in beide Richtungen über eine Länge von 20 erstrecken.

Zusammen sollten das Spielbrett und die Steine in etwa so aussehen:

<img src="/static/images/exercise-assets/tic-tac-toe/pieces.webp" alt="Tic-Tac-Toe-Brett mit gezeichneten o- und x-Spielsteinen" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Züge machen

- Der erste Zug ist immer ein `o`.
- Die Züge wechseln sich zwischen `o` und `x` ab.
- Wenn ein Spieler einen ungültigen Zug macht (also auf ein schon belegtes Feld setzt), schreib `"Invalid move!"` mit einem roten Overlay (`rectangle(0, 0, 100, 100, "#c80000")`) und brich dann die Verarbeitung von `moves` ab.

### Unentschieden

Wenn sich das Spielbrett füllt, ohne dass es einen Gewinner gibt:

- Färbe alle Steine hellgrau, indem du `changeStroke` mit einer grauen Farbe verwendest.
- Zeichne ein violettes Overlay: `rectangle(0, 0, 100, 100, "#604fcd")`
- Schreib `"The game was a draw!"`

### Gewinnen

Wenn einer der Spieler 3 in eine Reihe bekommt:

- Zeichne die Gewinnreihe in `"#604fcd"` neu.
- Färbe alle anderen Steine hellgrau.
- Zeichne ein violettes Overlay: `rectangle(0, 0, 100, 100, "#604fcd")`
- Schreib entweder `"The x's won!"` oder `"The o's won!"`

Das Ergebnis sollte dann in etwa so aussehen:

<img src="/static/images/exercise-assets/tic-tac-toe/won.webp" alt="Tic-Tac-Toe-Brett mit hervorgehobener Gewinnreihe und einem Ergebnis-Overlay" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Unvollständige Spiele

Manche Szenarien enthalten unvollständige Spiele. Zeig in diesen Fällen keinen Ergebnisbildschirm. Lass das Spiel in dem Zustand, in dem noch ein weiterer Zug möglich wäre.

### Der Reihe nach spielen

Die Szenarien erwarten, dass du das Spiel der Reihe nach durchspielst. Führe jeden Zug auf dem Spielbrett aus und kümmere dich erst zum Schluss um den Endzustand.
