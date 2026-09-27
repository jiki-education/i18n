---
title: "Space Invaders: Bedingung"
description: "Schieß nur, wenn ein Alien in deinem Visier ist."
en_md5: 4a603e339af722e912ab2ff9b25cc287
---

Die Aliens haben ihre Formation geändert! Jetzt stehen sie in zwei Reihen, aber nicht jede Spalte hat ein Alien.

Du hast drei Funktionen:

- `move()` (bewegen) bewegt deine Laserkanone um eine Position nach rechts
- `shoot()` (schießen) feuert den Laser nach oben
- `isAlienAbove()` (ob ein Alien über dir ist) gibt `true` zurück, wenn sich ein Alien über dir befindet, und `false`, wenn nicht

Du musst dich über den Bildschirm bewegen und dabei jede Position prüfen. Wenn ein Alien über dir ist, schieß es ab! Wenn nicht, zieh einfach weiter.

**Schieß nicht, wenn kein Alien über dir ist, sonst verlierst du!**
