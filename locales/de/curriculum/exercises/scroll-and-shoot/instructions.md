---
title: "Scrollen und Schießen"
description: "Scrolle durch Space Invaders und schalte die Aliens aus."
en_md5: a238bdc121bdfe425015d2e9e6b872d5
---

Wir sind wieder bei Space Invaders. Letztes Mal musstest du den Laser nur von links nach rechts bewegen, um alle Aliens abzuschießen. Aber dieses Mal musst du den Laser auch von links nach rechts hin- und herspringen lassen und die Aliens in mehreren Durchgängen abschießen.

Mit den Funktionen `moveLeft()` (nach links bewegen) und `moveRight()` (nach rechts bewegen) bewegst du den Laser nach links und rechts. Probier aus, wie weit du nach links und rechts kommst. Wenn du über den Bildschirmrand hinausgehst, verlierst du.

Wie zuvor musst du bei jeder Bewegung mit der Funktion `isAlienAbove()` (ob ein Alien über mir ist) prüfen, ob über dir ein Alien ist, und es dann mit `shoot()` (schießen) abschießen. Wenn du schießt, obwohl kein Alien da ist, verlierst du das Spiel: Munition zu verschwenden ist nicht erlaubt!

Die Laserkanone überhitzt leicht. Bewege den Laser zwischen den Schüssen, damit die Kanone kühl bleibt.

Mit jeder Welle wird es voller. In der letzten Welle tauchen die Aliens immer wieder neu auf, deshalb kannst du vorher nicht wissen, wie viele Schüsse du brauchst. Die Schleife muss also so lange weiterlaufen, bis jedes Alien weg ist.

Eine Regel gibt es in dieser Übung: Um das letzte Szenario zu bestehen, darfst du keine repeat-Schleife mit einem Eingabewert benutzen (du **kannst** also `repeat() { ... }` benutzen, aber du **kannst nicht** `repeat(10) { ... }` benutzen).

Sobald alle Aliens abgeschossen sind, gewinnst du! Viel Glück!
