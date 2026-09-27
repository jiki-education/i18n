---
title: "Schau dich um"
description: "Baue die Funktionen, mit denen du prüfst, was im Labyrinth um dich herum ist."
en_md5: 9ca44b407519cf6b3d5fa9f3f0e3b3d3
---

Letztes Mal hast du eine neue Funktion hinzugefügt, die dir beim Navigieren durch das Labyrinth hilft: `turnAround()` (sich umdrehen). Deinen Code haben wir links für dich abgelegt, damit du weiterarbeiten kannst.

Diesmal haben wir drei Funktionen entfernt, auf die du dich bisher verlassen hast. Deine Aufgabe in dieser Übung ist es, sie selbst zu implementieren!

### Die Funktionen, die du schreiben musst

Die drei Funktionen, die du erstellen musst, sind `canTurnLeft()` (kann nach links drehen), `canTurnRight()` (kann nach rechts drehen) und `canMove()` (kann sich bewegen).

Keine der Funktionen hat Eingabewerte. Alle sollen einen booleschen Wert zurückgeben, der angibt, ob man sich in diese Richtung bewegen kann.

Um dir zu helfen, haben wir eine neue Funktion `look(direction)` (in eine Richtung schauen) hinzugefügt. Diese Funktion nimmt einen Eingabewert: eine Richtung, die `"left"`, `"right"` oder `"ahead"` sein kann. Sie gibt einen dieser Werte zurück:

- `"start"` (Wo du startest)
- `"target"` (Wo du hinwillst)
- `"empty"` (Der Weg nach vorn!)
- `"fire"` (Vorsicht!)
- `"poop"` (Igitt!)
- `"wall"` (Autsch!)

### Hinweise, die dir helfen

Hier sind drei Hinweise, die dir weiterhelfen.

1. Eine bewährte Vorgehensweise bei einer Übung wie dieser ist es, **zuerst die Funktionen zu erstellen**, die der Code zum Ausführen braucht (also `canTurnLeft()`, `canTurnRight()` und `canMove()`). Setze ihre Rückgabewerte auf einen sinnvollen Standardwert (in diesem Fall entweder `true` oder `false`). Danach kannst du die Logik jeder Funktion implementieren und kommst so Schritt für Schritt voran, statt bis zum fertig geschriebenen Programm ständig nur die Fehlermeldung zu bekommen, dass eine Funktion nicht existiert.
2. **Du solltest für diese Übung nichts an deinem bestehenden Code ändern müssen.** Füge die drei Funktionen stattdessen oben im Code hinzu.
3. Du kannst **mehr Funktionen** schreiben als nur die geforderten, wenn dir das hilft.
