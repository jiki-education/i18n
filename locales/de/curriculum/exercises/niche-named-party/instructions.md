---
title: "Die exklusive Namensparty"
description: "Finde heraus, wer auf eine sehr exklusive Party darf."
en_md5: 3c03097aed9465c8f132574b033ad7ce
---

Die Party heute Abend ist sehr exklusiv: Nur Leute, deren Namen mit einer bestimmten Buchstabenfolge beginnen, kommen rein!

Deine Aufgabe ist es, eine Funktion namens `handleGuest` (Gast behandeln) zu schreiben, die zwei Eingabewerte entgegennimmt:

- `name` - der Name der Person an der Tür
- `allowedPrefix` - die erforderlichen Anfangsbuchstaben für die heutige Party

Sie soll `true` zurückgeben, wenn die Person eingelassen wird, und `false`, wenn sie abgewiesen werden soll.

Zum Beispiel:

- Wenn das erlaubte Präfix heute Abend `"S"` ist, kommt Sarah rein (gibt `true` zurück), Brad aber nicht (gibt `false` zurück).
- Wenn das erlaubte Präfix `"Brad"` ist, kommen Brad und Bradley rein, Brian aber nicht.

### Hilfsfunktionen

Bei dieser Übung wirst du feststellen, dass du herausfinden musst, wie lang der Name des Gastes ist, und auch, wie lang das erlaubte Präfix ist. Das ist die perfekte Gelegenheit, eine Hilfsfunktion namens `getLength(someString)` zu schreiben, die zählt, wie viele Buchstaben der String enthält. Diese Funktion kannst du dann an verschiedenen Stellen innerhalb von `handleGuest(...)` verwenden.

Das Bonus-Szenario fordert dich heraus, die Aufgabe mit so wenigen Zeilen wie möglich zu lösen. Vielleicht fallen dir auch andere Lösungen ein, die dir besser gefallen und mehr Zeilen brauchen. Das ist völlig in Ordnung (und du bist ausdrücklich eingeladen, verschiedene Ansätze auszuprobieren), aber versuch auch, die kürzeste Version zu finden.

Viel Spaß!
