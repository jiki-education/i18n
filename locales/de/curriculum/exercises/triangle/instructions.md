---
title: "Dreieck"
description: "Klassifiziere ein Dreieck als gleichseitig, gleichschenklig oder ungleichseitig."
en_md5: 15574e7bfbdfaffbd935bf6bba258e63
---

Deine Aufgabe ist es, eine Funktion zu schreiben, die prüft, ob ein Dreieck gleichseitig, gleichschenklig, ungleichseitig oder ungültig ist.

### Dreiecke

- Ein _gleichseitiges_ Dreieck hat drei gleich lange Seiten.
- Ein _gleichschenkliges_ Dreieck hat zwei gleich lange Seiten.
- Ein _ungleichseitiges_ Dreieck hat drei unterschiedlich lange Seiten.

Damit ein Dreieck gültig ist:

- Alle Seiten müssen größer als 0 sein.
- Wenn du zwei beliebige Seiten addierst, muss die Summe größer sein als die dritte Seite.

### Die Funktion

Die Funktion muss `determineTriangleType` (bestimmt den Dreieckstyp) heißen. Sie muss drei Eingabewerte entgegennehmen, Zahlen für die drei Seiten des Dreiecks. Sie muss einen der Werte `"invalid"`, `"equilateral"`, `"isosceles"` oder `"scalene"` zurückgeben.
