---
title: "Sieb des Eratosthenes"
description: "Finde alle Primzahlen mithilfe eines uralten Algorithmus."
en_md5: 43c2efd77e136b19a94b33b03e876d67
---

Du hast auf einem Garagenflohmarkt eine große Kiste mit zufälligen Computerteilen gekauft. Du hast angefangen, die Teile zusammenzusetzen, um eigene Computer zu bauen.

Du willst die Leistung verschiedener Kombinationen von Teilen testen und beschließt, dein eigenes Benchmarking-Programm zu schreiben, um zu sehen, wie deine Computer abschneiden. Du entscheidest dich für den berühmten Algorithmus „Sieb des Eratosthenes“, einen uralten Algorithmus, der deine Computer aber bis an ihre Grenzen treiben dürfte.

Eine Primzahl ist eine Zahl größer als 1, die nur durch 1 und sich selbst teilbar ist. Zum Beispiel sind 2, 3, 5, 7, 11 und 13 Primzahlen. Im Gegensatz dazu ist 6 keine Primzahl, denn sie ist nicht nur durch 1 und sich selbst teilbar, sondern auch durch 2 und 3.

Um das Sieb des Eratosthenes zu verwenden, schreib zuerst alle Zahlen von 2 bis einschließlich deiner vorgegebenen Zahl auf. Befolge dann diese Schritte:

1. Finde die nächste unmarkierte Zahl (überspringe dabei markierte Zahlen). Das ist eine Primzahl.
2. Markiere alle Vielfachen dieser Primzahl als nicht prim.

Wiederhole die Schritte, bis du jede Zahl durchgegangen bist. Am Ende sind alle unmarkierten Zahlen Primzahlen.

Hinweis: Das Sieb des Eratosthenes streicht Vielfache jeder Primzahl mithilfe von Addition (wiederholtes Addieren der Primzahl) oder Multiplikation (direktes Berechnen ihrer Vielfachen) durch, statt jede Zahl auf Teilbarkeit zu prüfen.

Erstelle eine Funktion namens `sieve` (Sieb), die eine Zahl als Eingabewert entgegennimmt und eine Liste aller Primzahlen zurückgibt, die kleiner oder gleich dieser Zahl sind.
