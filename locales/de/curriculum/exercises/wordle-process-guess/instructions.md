---
title: "Wordle: Rateversuch auswerten"
description: "Prüfe einen Rateversuch bei Wordle und finde heraus, welche Buchstaben richtig sind."
en_md5: d9a619535c9794108b46091447b14f6d
---

Willkommen bei Wordle, dem Spiel, das während der Covid-19-Lockdowns viral ging!

Das Spiel funktioniert so:

- Es gibt ein geheimes Wort, das der Nutzer zu erraten versucht.
- Der Nutzer hat 6 Rateversuche, um es zu erraten.
- Für jeden Rateversuch gibt es 5 Kästchen, eins für jeden Buchstaben:
  - Wenn ein Buchstabe richtig ist, wird das Kästchen grün.
  - Wenn ein Buchstabe im geheimen Wort vorkommt, aber an der falschen Stelle steht, wird das Kästchen gelb.
  - Wenn ein Buchstabe nicht im geheimen Wort vorkommt, wird das Kästchen grau.

In einigen Übungen wirst du das komplette Wordle-Spiel umsetzen. In **dieser Übung** sorgst du aber erst einmal nur dafür, dass die erste Zeile funktioniert.

Dafür brauchst du eine Funktion namens `processGuess(target, guess)` (verarbeite den Rateversuch). Die Wörter, die deine Funktion erhält, sind immer kleingeschrieben.

Die Funktion soll herausfinden, welchen Zustand jeder Buchstabe im Rateversuch hat, und dann die Funktion `colorRow(1, states)` (färbe die Zeile) mit einem Array aufrufen, das für jeden Buchstaben einen Zustand enthält: entweder `"correct"`, `"present"` oder `"absent"`.

Zum Beispiel sollte `processGuess("hello", "holes")` `colorRow` so aufrufen:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Stell sicher, dass du das verstanden hast, bevor du weitermachst!

Wenn du ein Wordle-Fan bist, fällt dir vielleicht auf, dass die Regeln oben im Vergleich zum offiziellen Spiel **leicht vereinfacht** sind. In dieser Übung halte dich bitte an diese vereinfachten Regeln. Die vollständige Version stellen wir in der nächsten Wordle-Übung vor!

### Methoden

Wie in den letzten Übungen kannst du das Array der Zustände mit der Methode `push` aufbauen. Sie hängt ein Element an das Ende eines Arrays an. Zum Beispiel hängt `states.push("correct")` den Wert `"correct"` an das Ende des Arrays `states` an.

Außerdem gibt es die Methode `includes`, mit der du prüfen kannst, ob ein String einen anderen String enthält.

Viel Erfolg!
