---
title: "Kampfprozeduren"
description: "Lagere deine Schusslogik in eine wiederverwendbare Funktion aus."
en_md5: 3f2bb9c8622396d8ee591087d949c3de
---

Im letzten Level hast du herausgefunden, wie du eine Laserkanone hin- und herbewegst und dabei Aliens abschießt. Wir haben deine Lösung übernommen, damit du darauf aufbauen kannst.

Der bisherige Code hat funktioniert, aber die Schusslogik war mit allem anderen vermischt. Je besser du im Programmieren wirst, desto eher hast du Erfolg, wenn du deinen Code in kleine Stücke zerlegst, die jeweils genau eine Sache erledigen.

In dieser Übung musst du die Schusslogik in eine eigene Funktion namens `shootIfAlienAbove` (schießen, wenn ein Alien darüber ist) auslagern. Diese Funktion hat die Aufgabe, zu prüfen, ob sich über der Laserkanone ein Alien befindet, und es gegebenenfalls abzuschießen.

Der Rest der Spiellogik (die Position verfolgen, an den Rändern die Richtung wechseln, den Laser bewegen) bleibt wie zuvor in der Schleife.

Erstelle deine Funktion `shootIfAlienAbove` und nutze sie dann in der Schleife zusammen mit der Bewegungslogik.
