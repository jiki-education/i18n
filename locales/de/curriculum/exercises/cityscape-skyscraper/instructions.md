---
title: "Wolkenkratzer"
description: "Baue einen Wolkenkratzer auf dem Stadtraster."
en_md5: 901851ded0ac8a0ef6cb80db60e59998
---

Das ist die erste von zwei Übungen, in denen du Wolkenkratzer baust.

Bei dieser Übung ist deine Aufgabe, einen einzelnen Wolkenkratzer in der Mitte der Szene zu bauen. In jedem Szenario ist der Wolkenkratzer unterschiedlich hoch.

Um herauszufinden, wie viele Stockwerke du bauen musst, hast du eine Funktion `numFloors()` (Anzahl der Stockwerke), die die Gesamthöhe des Gebäudes zurückgibt.

Du kannst drei verschiedene Bauteile verwenden: Wand (`W`), Glas (`G`) und Eingang (`E`). Welche Funktionen du dafür brauchst, siehst du unten.

Das Stockwerk, das dem Boden am nächsten ist (das „Erdgeschoss“ oder das „erste Stockwerk“, je nachdem, wo du herkommst!), hat immer einen Eingang, der zwischen zwei Glassegmenten und zwei äußeren Wandsegmenten sitzt (`WGEGW`). Die anderen Stockwerke haben drei Glassegmente zwischen Wandsegmenten (`WGGGW`). Und oben auf den Stockwerken sitzt ein Dach (`WWWWW`).

Ein Wolkenkratzer mit 5 Stockwerken hat also ein Eingangsstockwerk, 4 Glasstockwerke und ein Dach. Er sollte so aussehen:

```
WWWWW
WGGGW
WGGGW
WGGGW
WGGGW
WGEGW
```

Die Mitte des Wolkenkratzers sollte in Spalte `19` liegen. Das Erdgeschoss beginnt bei `2` (direkt über dem Betonboden) und geht nach oben. In unserem Beispiel oben wäre das also ein Eingangsstockwerk bei `2` und ein Dach bei `7`.

Eine wichtige Regel in dieser Übung: Alle Werte, die du in die Funktionen eingibst, müssen entweder Variablen oder Formeln sein. Du kannst nicht einfach eine Zahl wie `20` eingeben.

Sobald du diese Übung abgeschlossen hast, schaltest du ein Projekt frei, in dem du ganze Skylines mit unterschiedlich vielen Gebäuden in unterschiedlichen Breiten baust.
