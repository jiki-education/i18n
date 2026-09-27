---
title: "Szenarien"
description: "Verschiedene Ausgangsbedingungen, gegen die eine Übung deinen Code laufen lässt. Du musst ihn für alle zum Laufen bringen."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Zu jeder Übung gehören verschiedene Szenarien, verschiedene Situationen, die dein Code bewältigen muss.

Du siehst sie als kleine Buttons direkt über der Ausgabe jeder Übung. Jeder Button steht für ein anderes Szenario. Deine Aufgabe ist es, Code zu schreiben, der für alle funktioniert, nicht nur für das erste. Ich sage es noch einmal. Du schreibst deinen Code einmal, aber derselbe Code läuft für jedes Szenario. Der Unterschied ist, dass jedes Szenario etwas anders eingerichtet sein kann, oder dass die Funktionen, die du bekommst, je nach Szenario leicht andere Werte zurückgeben.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Die Reihe der Szenario-Buttons direkt über der Ausgabe einer Übung, eingekreist, um sie hervorzuheben"
  width="500"
  height="318"
/>

Nehmen wir ein Golfspiel als Beispiel. Du musst den Ball abhängig vom Rückgabewert (_return value_ auf Englisch) einer Funktion namens `getShotLength` (die Länge des Schlags) unterschiedlich weit rollen lassen. Diese Funktion sagt dir, wie weit der Golfer den Ball geschlagen hat. Stell dir vor, der Spieler hat auf seinem Handy gewischt, um anzuzeigen, wie weit er geschlagen hat.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Eine Golfspiel-Szene mit einem Golfer, einem Ball und einer Fahne im Loch auf der rechten Seite"
  width="412"
  height="400"
/>

Das Ergebnis erreicht dich über diese Funktion. In einem Szenario kannst du also die Funktion `getShotLength` verwenden, und sie gibt `23` zurück, einen kleinen Wisch. In einem anderen gibt sie `70` zurück, einen langen Wisch. In wieder einem anderen gibt sie `45` zurück. Dein Code muss den Ball für jedes Szenario die richtige Strecke weit rollen lassen, und zwar mit nur einem Programm, einem einzigen Code. Du musst die Funktion `getShotLength` verwenden, um zu sehen, wie weit der Schlag ging, und den Ball dann bis zu dieser Stelle rollen lassen.

```javascript
let distance = getShotLength()
```

Szenarien stellen sicher, dass dein Code wirklich richtig funktioniert. Es ist ziemlich einfach, Code zu schreiben, der in einer bestimmten Situation funktioniert. Es ist viel schwieriger und viel wertvoller, Code zu schreiben, der in vielen verschiedenen Situationen funktioniert. Wenn du Übungen löst, fang mit dem ersten Szenario an. Bring es zum Laufen. Geh dann zum nächsten Szenario über und bring das zum Laufen. Wenn dein Code bei einem anderen Szenario scheitert, überleg dir, was anders ist und wie dein Code sich anpassen muss.
