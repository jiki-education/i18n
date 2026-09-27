---
title: "Sterne"
description: "Baue eine Pyramide aus Sternen und zeichne sie."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

In dieser Übung baust du einen Generator für ein visuelles Muster, der Reihen von Sternen zeichnet.

Deine Aufgabe ist es, eine Funktion namens `layoutStars` (Layout für die Sterne) zu erstellen, die einen Eingabewert entgegennimmt, `numRows`, der angibt, wie viele Reihen gebraucht werden, und dann die verschiedenen Sternreihen zeichnet.

Die Funktion soll:

1. Ein Array aus Strings bauen, einen String pro Reihe. Fang unten mit der längsten Reihe an. Wenn `numRows` zum Beispiel `3` ist, wäre dieses Array `["***", "**", "*"]`.
2. Die Funktion `drawStars(rows)` verwenden und deine Reihen übergeben, die dann die Sterne zeichnet.

Wenn `numRows` gleich 0 ist, soll das Array leer sein (`[]`) und es wird nichts gezeichnet.

Wenn du das mal in Aktion sehen willst, kannst du `drawStars(["***", "**", "*"])` ausführen, um zu sehen, wie die Sterne gezeichnet werden.

### Die push-Methode

Wie in der letzten Übung baust du dein Array mit der Methode `.push(element)` auf. In dieser Übung darfst du in deinem Code nur ein neues Array erstellen (`let something = []`).

Viel Spaß!
