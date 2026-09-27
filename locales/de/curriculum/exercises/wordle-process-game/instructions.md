---
title: "Wordle: Ein ganzes Spiel verarbeiten"
description: "Verarbeite ein ganzes Wordle-Spiel und färbe jeden Versuch Zeile für Zeile ein."
en_md5: d825747e1df06c1d9bcdc0900a0615f4
---

Wir sind zurück beim Wordle-Spiel, und jetzt ist es an der Zeit, das ganze Spiel zu verarbeiten und nicht nur einen einzelnen Versuch!

Sobald du diese Übung abschließt, schaltest du eine **Premium Challenge** frei. Darin erstellst du einen Bot, der das ganze Spiel von Anfang bis Ende spielt und dabei die Versuche selbst macht. Sie ist mit Abstand die anspruchsvollste Herausforderung bisher!

### Diese Übung

Fürs Erste musst du eine Funktion namens `processGame(target, guesses)` (ein Spiel verarbeiten) erstellen, die zwei Eingabewerte entgegennimmt: das geheime Zielwort und ein Array mit den Versuchen, die der Spieler gemacht hat.

Du solltest den Zustand jeder Zeile ermitteln und dann die Funktion `colorRow(row, states)` (eine Zeile einfärben) mit der Zeilennummer (`1-6`) und einem Array aus Zuständen aufrufen, einem pro Buchstabe.

Wenn wir zum Beispiel `processGame("crane", ["spoil", "trace", "crane"])` aufrufen würden, dann erwarten wir, dass dein Code die Funktion `colorRow` dreimal verwendet:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Wir haben deinen Code aus der vorherigen Übung als Ausgangspunkt in den Editor gelegt. Überlege, wie du deinen bestehenden Code **allgemeiner** machen kannst, damit das funktioniert. Viel Erfolg!

### Bonus: eine neue Regel

Es gibt eine Wordle-Regel, die wir bisher übersprungen haben ...

Wenn ein Buchstabe in deinem Versuch zweimal vorkommt, im Zielwort aber nur einmal:

- Wenn einer von beiden an der richtigen Stelle steht, wird dieser grün und der andere grau.
- Wenn beide an der falschen Stelle stehen, wird der erste gelb und der zweite grau.

Dieselbe Idee lässt sich erweitern: dreimal in einem Versuch und zweimal im Wort heißt, dass zwei eingefärbt werden und der dritte grau wird.

Führe das zweite Bonus-Szenario aus und schau dir die Zeile `"swiss"` an. Das Zielwort ist `"swims"`, das zwei `"s"` enthält, und beide sind schon grün: eines am Anfang und eines am Ende. Aber dein Code färbt auch das vierte Kästchen gelb, was dem Spieler sagt, dass noch _ein weiteres_ `"s"` zu finden ist. Gibt es aber nicht. Das vierte Kästchen sollte grau sein.

Du musst das Problem für das erste Bonus-Szenario teilweise lösen (fang also dort an!) und dann für das zweite vollständig lösen.

Diese Aufgabe ist eine echte Herausforderung! **Denk daran: Das ist ein Bonus, du musst ihn nicht abschließen!**
