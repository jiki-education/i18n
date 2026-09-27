---
title: "Alien-Detektor"
description: "Bewege deinen Laser von links nach rechts und schieß die Aliens ab."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

Bei der vorherigen Space-Invaders-Übung hast du deinen Laser von einer Seite zur anderen bewegt, um alle Aliens abzuschießen. Eine wichtige Rolle hat dabei die Funktion `isAlienAbove()` (prüft, ob über dir ein Alien ist) gespielt. In dieser Übung haben wir sie entfernt, aber du musst trotzdem alle Aliens abschießen!

Wir haben dir eine leere Leinwand gegeben, auf der du starten kannst. Du kannst deinen Code aus der <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">vorherigen Space-Invaders-Übung</a> gerne als Ausgangspunkt wiederverwenden.

Diese Übung ist bewusst eine Herausforderung! Geh sie langsam an.

### Deine Aufgabe

Schieß alle Aliens ab. Du kannst die Übung nicht mehr fragen, ob über dir ein Alien ist. Stattdessen musst du selbst den Überblick behalten: welche Aliens du schon abgeschossen hast und welche noch da sind.

### Lerne `getStartingAliensInRow(idx)` kennen (gibt die Aliens einer Reihe am Anfang zurück)

Du hast eine neue Funktion namens `getStartingAliensInRow(idx)`. Sie nimmt einen Eingabewert: den Index der Reihe, von unten gezählt. Es gibt höchstens drei Reihen, der Eingabewert kann also `0`, `1` oder `2` sein.

Die Funktion gibt eine Liste mit 11 booleschen Werten zurück. Jeder boolesche Wert gibt an, ob an dieser Position zu **Beginn** der Übung ein Alien steht. `[true, false, false, ...]` würde also bedeuten: Bevor du irgendetwas tust, steht an der ersten Position ein Alien, an den nächsten beiden aber nicht (und so weiter).

Diese Funktion gibt nur die **Anfangspositionen** der Aliens zurück. Sie aktualisiert sich **nicht**, wenn du Aliens abschießt!

### Hinweise

- Jedes Mal, wenn du dich nach links oder rechts bewegst, bewegst du dich um eine Position nach vorne oder nach hinten. Jede dieser Positionen entspricht einem Platz, an dem ein Alien stehen kann.
- Die Aliens tauchen in dieser Übung nicht wieder auf.
