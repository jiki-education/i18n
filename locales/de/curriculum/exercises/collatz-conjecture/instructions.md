---
title: "Collatz-Vermutung"
description: "Erkunde ein berühmtes Mathe-Rätsel mit deiner eigenen Funktion."
en_md5: e4f7ab61c163cdb7c2eb2b6541a2cedc
---

Eines Abends bist du auf ein altes Notizbuch voller kryptischer Kritzeleien gestoßen, als hätte jemand zwanghaft einer Idee nachgejagt. Auf einer Seite stach eine einzelne Frage hervor: **Findet jede Zahl ihren Weg zur 1?** Sie hing mit etwas zusammen, das man **Collatz-Vermutung** nennt, einem Rätsel, das Denker seit Jahrzehnten ratlos macht.

Die Regeln sind trügerisch einfach:

1. Wähle eine Zahl.
2. Ist sie gerade, teile sie durch 2.
3. Ist sie ungerade, multipliziere sie mit 3 und addiere dann 1.
4. Wiederhole das mit dem Ergebnis, und zwar endlos.

Zum Beispiel mit der Zahl 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Von der zweiten Zahl (6) an gezählt waren es 9 Schritte bis zur 1.

Erstelle eine Funktion namens `collatzSteps` (Collatz-Schritte), die einen Eingabewert entgegennimmt, nämlich eine Zahl. Gib zurück, **wie viele Schritte** nötig sind, um nach den Regeln der Collatz-Vermutung von einer beliebigen Zahl zur 1 zu kommen.
