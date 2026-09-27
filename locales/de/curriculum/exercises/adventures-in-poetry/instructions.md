---
title: "Abenteuer in der Poesie"
description: "Lauf einen Pfad entlang und sammle die Wörter eines Gedichts. Alles, was kein Wort ist, ignorierst du."
en_md5: 90609a1f81b1b70871df0d2ed130e9e2
---

Du baust ein Roboter-Poesiespiel namens „Abenteuer in der Poesie". Als ersten Schritt programmierst du den Roboter so, dass er beim Laufen Wörter sammelt und am Ende das Gedicht aufsagt.

Auf jedem Feld liegt eine von vier Sachen:

1. Nichts (`""`)
2. Ein **Wort** aus dem Gedicht.
3. Deko wie ein Blatt oder ein Schmetterling (ein Emoji).
4. Eine Zielflagge (`🏁`), die dem Roboter sagt, dass er anhalten soll.

Als Hilfe stehen dir ein paar Funktionen zur Verfügung. Zuerst gibt es die Funktion `move()`: Sie sagt dem dichtenden Roboter, dass er auf das nächste Feld vorrücken soll, und gibt zurück, was darauf lag. Dann gibt es die Funktion `isEmoji(thing)`. Sie gibt dir einen booleschen Wert zurück und sagt dir damit, ob der String, den du übergibst, ein Emoji ist. Und schließlich gibt es die Funktion `recite(poem)`, die du mit dem fertigen Gedicht aufrufen musst.

Deine Aufgabe ist es, den Pfad entlangzulaufen, das Gedicht Stück für Stück aufzubauen und es dann aufzusagen.

## Die Regeln

- **Wörter** kommen ins Gedicht, mit einem **Leerzeichen zwischen den einzelnen Wörtern**.
- **Deko** gehört nicht zum Gedicht und wird ignoriert.
- Ein **Apostroph** steht auf einem eigenen Feld und verbindet die Wörter links und rechts von ihm. Aus `heart`, dann `'`, dann `s` wird `heart's`.
- Ein **Komma** steht ebenfalls auf einem eigenen Feld. Es hängt sich an das Wort davor, danach kommt aber trotzdem ein Leerzeichen.
- Der Dichter hört auf zu laufen, wenn er die **Zielflagge** erreicht oder sobald er **sieben Wörter** gesammelt hat. Je nachdem, was zuerst passiert.
- Egal wann und warum der Dichter anhält, er sagt auf, was er gesammelt hat. Du darfst `recite()` nur **einmal** aufrufen.

## Einschränkungen

Es gibt viele Wege, diese Übung zu lösen, aber wir wollen, dass du die `continue`- und `break`-Schlüsselwörter benutzt, die du vor kurzem gelernt hast. Deshalb gibt es ein paar Regeln:

1. Deine Lösung muss sowohl `continue` als auch `break` verwenden.
2. Du darfst `&&` und `!` in deiner Lösung nicht verwenden.
3. Du darfst keine Hilfsfunktionen schreiben.
4. Du darfst nur zwei Einrückungsebenen verwenden:

```javascript

// Erlaubt - 2 Einrückungsebenen
repeat() {
  if(...) {
    //...
  }
}

// Nicht erlaubt - 3 Einrückungsebenen
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Das heißt, deine Lösung wird ziemlich „flach" sein.

Viel Erfolg und viel Spaß!
