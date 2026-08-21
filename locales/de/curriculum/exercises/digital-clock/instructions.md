---
title: "Digitaluhr"
description: "Zeige die richtige Uhrzeit auf einer digitalen 12-Stunden-Uhr an."
en_md5: e3decc089d371b7113f2657f7571c001
---

In dieser Übung verwendest du zwei neue Funktionen, um die Uhrzeit zu bekommen:

- `currentTimeHour()` (aktuelle Stunde): Gibt die aktuelle Stunde im 24-Stunden-Format als Zahl zurück (15 Minuten vor Mitternacht ergibt zum Beispiel `23`).
- `currentTimeMinute()` (aktuelle Minute): Gibt die aktuelle Minute als Zahl zurück.

Deine Aufgabe ist es, eine Digitaluhr anhand der Zahlen zu aktualisieren, die diese Funktionen zurückgeben.

Die Digitaluhr erwartet die Zahlen im 12-Stunden-Format mit einem `am` oder `pm` (dem sogenannten „Meridiem“).

Zum Beispiel:

- `7:45` -> `7:45am`
- `19:45` -> `7:45pm`

Um die Uhrzeit auf der Uhr anzuzeigen, verwendest du die Funktion `displayTime(hour, minutes, meridiem)` (Zeit anzeigen).

In jedem Szenario ändert sich die aktuelle Uhrzeit. Deine Aufgabe ist es, Code zu schreiben, der alle Szenarien zum Laufen bringt. Im letzten Szenario verwenden wir die tatsächliche echte Uhrzeit, das Szenario ändert sich also jedes Mal, wenn die echte Zeit um eine Minute weiterrückt!
